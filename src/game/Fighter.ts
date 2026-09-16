import * as THREE from "three";
import { LOOKS, EYE, CAPSULE_H, BASE, K_DAMAGE, K_ESCAPE, K_STAMINA } from "./constants";
import type { Occupancy, Role } from "./types";
import { stillUrlFor } from "./stills";
import { lookFromStill } from "./lookFromStill";
import { Humanoid } from "./Humanoid";
import { weaponById, armorById } from "./gear";

let uid = 0;

/** Full-body still billboard size (meters). Readable as the women at mid range. */
const BILL_W = 1.35;
const BILL_H = 2.1;
const BILL_Y = 1.12;

export class Fighter {
  id = uid++;
  team: number;
  isPlayer: boolean;
  name: string;
  look: number;
  role: Role | null;
  group = new THREE.Group();
  body: THREE.Group;
  humanoid: Humanoid;
  yaw = 0;
  pitch = 0;
  pos = new THREE.Vector3();
  vel = new THREE.Vector3();
  occupancy: Occupancy = "free";
  targetId = -1;
  joinOn = -1;
  vanishLeft = 0;
  stamina = 100;
  maxStamina = 100;
  escape = 0;
  tapCd = 0;
  regenWait = 0;
  flashT = 0;
  blocks: { stamina: number; struggle: number; tickle: number };
  weaponId = 0;
  armorId = 0;
  weaponPct = 0;
  armorStamPct = 0;
  armorEscPct = 0;
  active = true;
  lastKnown = new THREE.Vector3();
  lastSeen = 0;
  pileTimer = 0;
  wantTickle = false;
  wantEscape = false;
  spawnIgnore = 0;
  reappearIgnore = 0;
  reappearFlash = 0;
  contactEdge = new Map<number, boolean>();
  hidden = false;
  slug?: string;
  /** Mid-lane rear dummy — faces away from cyan spawn. */
  bait = false;
  /** QA: skip AI taps so scripted rear/pack checks are not a race with escape. */
  scriptHold = false;
  portraitUrl?: string;
  keyedPortrait?: string;
  portraitSprite?: THREE.Sprite;
  headMat: THREE.MeshStandardMaterial;
  skinMat: THREE.MeshStandardMaterial;
  rim: THREE.PointLight;
  private prevPos = new THREE.Vector3();
  private animT = Math.random() * 8;
  private speed = 0;

  constructor(opts: {
    team: number;
    isPlayer: boolean;
    look: number;
    name: string;
    role: Role | null;
    slug?: string;
    blocks: { stamina: number; struggle: number; tickle: number };
    weapon?: number;
    armor?: number;
  }) {
    this.team = opts.team;
    this.isPlayer = opts.isPlayer;
    this.look = opts.look;
    this.name = opts.name;
    this.role = opts.role;
    this.slug = opts.slug;
    this.portraitUrl = stillUrlFor(opts.slug);
    this.blocks = opts.blocks;
    const L = LOOKS[opts.look] ?? LOOKS[0];
    const tint = opts.team === 0 ? 0x5ec8d8 : 0xd4a25a;
    this.humanoid = new Humanoid(L.skin, L.cloth, L.hair, tint);
    this.body = this.humanoid.root;
    this.skinMat = this.humanoid.skinMat;
    this.headMat = this.humanoid.skinMat;
    this.group.add(this.body);
    this.rim = new THREE.PointLight(tint, 2.2, 3.2, 2);
    this.rim.position.set(0, 1.3, 0);
    this.group.add(this.rim);
    if (!this.isPlayer) {
      const spr = makeNameSprite(this.name, tint);
      spr.position.y = 2.4;
      this.group.add(spr);
      if (this.portraitUrl) this.body.visible = false;
    }
    if (this.portraitUrl) {
      lookFromStill(this.portraitUrl).then((kit) => {
        this.keyedPortrait = kit.keyedUrl;
        this.humanoid.applyLook(kit);
        this.ensureStillBillboard(kit.keyedUrl);
      });
    }
    this.applyGear(opts.weapon ?? 0, opts.armor ?? 0);
    this.stamina = this.maxStamina;
  }

  applyGear(weaponId: number, armorId: number) {
    const w = weaponById(weaponId);
    const a = armorById(armorId);
    this.weaponId = w.id;
    this.armorId = a.id;
    this.weaponPct = w.ticklePct;
    this.armorStamPct = a.stamPct;
    this.armorEscPct = a.escPct;
    this.recalc();
    this.humanoid.setWeapon(this.weaponId);
    this.humanoid.setArmor(this.armorId);
  }

  applyLookSlug(slug: string, lookIdx: number) {
    this.slug = slug;
    this.look = lookIdx;
    const url = stillUrlFor(slug);
    this.portraitUrl = url;
    if (!url) return;
    if (!this.isPlayer) this.body.visible = false;
    lookFromStill(url).then((kit) => {
      if (this.slug !== slug) return;
      this.keyedPortrait = kit.keyedUrl;
      this.humanoid.applyLook(kit);
      this.ensureStillBillboard(kit.keyedUrl);
    });
  }

  /**
   * Full-body Amateur still as a camera-facing billboard (AI only).
   * Hides the capsule humanoid so bots read as the women. Player keeps 3D body
   * (plaza / ticklee cam); keyed still still drives HUD + face via lookFromStill.
   */
  ensureStillBillboard(keyedUrl: string) {
    if (this.isPlayer) return;
    const tex = new THREE.TextureLoader().load(keyedUrl);
    tex.colorSpace = THREE.SRGBColorSpace;
    if (!this.portraitSprite) {
      const mat = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        depthTest: true,
        alphaTest: 0.12,
      });
      const bill = new THREE.Sprite(mat);
      bill.scale.set(BILL_W, BILL_H, 1);
      bill.position.set(0, BILL_Y, 0);
      bill.renderOrder = 1;
      this.group.add(bill);
      this.portraitSprite = bill;
    } else {
      const mat = this.portraitSprite.material as THREE.SpriteMaterial;
      mat.map = tex;
      mat.needsUpdate = true;
      this.portraitSprite.scale.set(BILL_W, BILL_H, 1);
      this.portraitSprite.position.set(0, BILL_Y, 0);
    }
    this.body.visible = false;
  }

  recalc() {
    const st = BASE.stamina + 2 * this.blocks.stamina;
    const tk = BASE.tickle + 1.5 * this.blocks.tickle;
    const es = BASE.struggle + 3.5 * this.blocks.struggle;
    this.maxStamina = st * K_STAMINA * (1 + this.armorStamPct);
    this.stamina = Math.min(this.stamina, this.maxStamina);
    void tk;
    void es;
  }

  ticklePower(): number {
    const tk = BASE.tickle + 1.5 * this.blocks.tickle;
    return tk * K_DAMAGE * (1 + this.weaponPct);
  }

  escapePower(): number {
    const es = BASE.struggle + 3.5 * this.blocks.struggle;
    return es * K_ESCAPE * (1 + this.armorEscPct);
  }

  forward(): THREE.Vector3 {
    return new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
  }

  tickAnim(dt: number) {
    const dist = this.pos.distanceTo(this.prevPos);
    this.speed = dt > 1e-4 ? dist / dt : 0;
    this.prevPos.copy(this.pos);
    this.animT += dt;
    const clip = this.humanoid.clipFor(this.occupancy, this.speed, this.joinOn);
    this.humanoid.pose(clip, this.animT);
    this.tickBillboardAnim();
  }

  /** Procedural billboard feedback: tickler wag + ticklee laugh shake. */
  private tickBillboardAnim() {
    const bill = this.portraitSprite;
    if (!bill) return;
    const mat = bill.material as THREE.SpriteMaterial;
    const t = this.animT;
    let w = BILL_W;
    let h = BILL_H;
    let x = 0;
    let y = BILL_Y;
    let rot = 0;
    if (this.occupancy === "tickler" || this.occupancy === "nudge") {
      const s = Math.sin(t * 26);
      const s2 = Math.sin(t * 41);
      w = BILL_W * (1 + s * 0.05);
      h = BILL_H * (1 + s2 * 0.04);
      x = s2 * 0.05;
      y = BILL_Y + Math.abs(s) * 0.07;
      rot = s * 0.06;
    } else if (this.occupancy === "ticklee") {
      const s = Math.sin(t * 16);
      const s2 = Math.sin(t * 11);
      w = BILL_W * (1 + s * 0.07);
      h = BILL_H * (1 - s * 0.03);
      x = s * 0.1;
      y = BILL_Y + Math.abs(s2) * 0.05;
      rot = s2 * 0.08;
    } else if (this.occupancy === "tapped") {
      h = BILL_H * 0.72;
      y = BILL_Y * 0.55;
      rot = 0.35;
    } else {
      const b = Math.sin(t * 2.2) * 0.02;
      y = BILL_Y + b;
    }
    bill.scale.set(w, h, 1);
    bill.position.set(x, y, 0);
    mat.rotation = rot;
  }

  settle() {
    this.prevPos.copy(this.pos);
  }

  syncMesh() {
    this.group.position.copy(this.pos);
    this.body.rotation.y = this.yaw;
    this.body.rotation.x = 0;
    this.body.rotation.z = 0;
    if (!this.isPlayer && this.portraitSprite) this.body.visible = false;
  }

  eyeWorld(): THREE.Vector3 {
    return this.pos.clone().add(new THREE.Vector3(0, EYE, 0));
  }

  setHidden(h: boolean) {
    this.hidden = h;
    this.group.visible = !h && this.occupancy !== "vanished" && this.occupancy !== "tapped";
    if (this.occupancy === "tapped") this.group.visible = true;
    if (this.occupancy === "vanished") this.group.visible = false;
    if (!this.isPlayer && this.portraitSprite) this.body.visible = false;
  }
}

void CAPSULE_H;

function makeNameSprite(name: string, tint: number): THREE.Sprite {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 64;
  const g = c.getContext("2d")!;
  g.fillStyle = "rgba(10,8,8,0.55)";
  g.fillRect(0, 0, 256, 64);
  g.fillStyle = `#${tint.toString(16).padStart(6, "0")}`;
  g.font = "700 28px Trebuchet MS, sans-serif";
  g.textAlign = "center";
  g.fillText(name, 128, 42);
  const tex = new THREE.CanvasTexture(c);
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
  const s = new THREE.Sprite(mat);
  s.scale.set(1.4, 0.35, 1);
  return s;
}
