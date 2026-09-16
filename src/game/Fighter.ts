import * as THREE from "three";
import { LOOKS, EYE, CAPSULE_H, BASE, K_DAMAGE, K_ESCAPE, K_STAMINA } from "./constants";
import type { Occupancy, Role } from "./types";
import { stillUrlFor } from "./stills";
import { lookFromStill } from "./lookFromStill";
import { Humanoid } from "./Humanoid";
import { weaponById, armorById } from "./gear";

let uid = 0;

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
      spr.position.y = 2.15;
      this.group.add(spr);
    }
    if (this.portraitUrl) {
      lookFromStill(this.portraitUrl).then((kit) => {
        this.keyedPortrait = kit.keyedUrl;
        this.humanoid.applyLook(kit);
        // Stub-art billboard: bots show keyed still facing the camera.
        if (!this.isPlayer && !this.portraitSprite) {
          const tex = new THREE.TextureLoader().load(kit.keyedUrl);
          tex.colorSpace = THREE.SRGBColorSpace;
          const mat = new THREE.SpriteMaterial({
            map: tex,
            transparent: true,
            depthTest: true,
            alphaTest: 0.15,
          });
          const bill = new THREE.Sprite(mat);
          bill.scale.set(1.15, 1.55, 1);
          bill.position.set(0, 1.05, 0);
          this.group.add(bill);
          this.portraitSprite = bill;
        } else if (this.portraitSprite) {
          const mat = this.portraitSprite.material as THREE.SpriteMaterial;
          const tex = new THREE.TextureLoader().load(kit.keyedUrl);
          tex.colorSpace = THREE.SRGBColorSpace;
          mat.map = tex;
          mat.needsUpdate = true;
        }
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
    lookFromStill(url).then((kit) => {
      if (this.slug !== slug) return;
      this.keyedPortrait = kit.keyedUrl;
      this.humanoid.applyLook(kit);
    });
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
    // Stub billboards otherwise freeze — bounce them with the combat clips.
    const spr = this.portraitSprite;
    if (spr) {
      const mat = spr.material as THREE.SpriteMaterial;
      if (clip === "tickle") {
        const s = Math.sin(this.animT * 14);
        const s2 = Math.sin(this.animT * 18.5);
        spr.position.set(s * 0.08, 1.05 + Math.abs(s2) * 0.07, 0);
        spr.scale.set(1.15 + s2 * 0.06, 1.55 + Math.abs(s) * 0.08, 1);
        mat.rotation = s * 0.12;
      } else if (clip === "squirm") {
        const s = Math.sin(this.animT * 14);
        const s2 = Math.sin(this.animT * 9.5);
        spr.position.set(s * 0.1, 1.05 + s2 * 0.05, 0);
        spr.scale.set(1.15 + Math.abs(s) * 0.05, 1.55 + Math.abs(s2) * 0.07, 1);
        mat.rotation = s * 0.18;
      } else {
        spr.position.set(0, 1.05, 0);
        spr.scale.set(1.15, 1.55, 1);
        mat.rotation = 0;
      }
    }
  }

  settle() {
    this.prevPos.copy(this.pos);
  }

  syncMesh() {
    this.group.position.copy(this.pos);
    this.body.rotation.y = this.yaw;
    this.body.rotation.x = 0;
    this.body.rotation.z = 0;
  }

  eyeWorld(): THREE.Vector3 {
    return this.pos.clone().add(new THREE.Vector3(0, EYE, 0));
  }

  setHidden(h: boolean) {
    this.hidden = h;
    this.group.visible = !h && this.occupancy !== "vanished" && this.occupancy !== "tapped";
    if (this.occupancy === "tapped") this.group.visible = true;
    if (this.occupancy === "vanished") this.group.visible = false;
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
