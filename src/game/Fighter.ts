import * as THREE from "three";
import { LOOKS, EYE, CAPSULE_H, BASE, K_DAMAGE, K_ESCAPE, K_STAMINA } from "./constants";
import type { Occupancy, Role } from "./types";
import { stillUrlFor } from "./stills";
import { lookFromStill } from "./lookFromStill";
import { runBindForSlug, runParamsForClip, runFrameUrls, type RunBind } from "./runBind";
import { Humanoid } from "./Humanoid";
import {
  laughBindForLook,
  laughBindForSlug,
  laughFrameUrls,
  laughParams,
  laughStageForStamina,
  laughStageStillUrl,
  type LaughBind,
  type LaughStageId,
} from "./laughBind";
import { tickleBindForSlug, tickleFrameUrls, type TickleBind } from "./tickleBind";
import { idleBindForSlug, idleSheetUrlForSlug } from "./idleBind";
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
  /** Horizontal multi-frame idle sheet (A-pose breathe), AI billboard. */
  idleSheetTex?: THREE.Texture;
  idleStillTex?: THREE.Texture;
  idleFrame = 0;
  private idleFrameAcc = 0;
  /** Soft crossfade partner for idle sheet (beyond hard UV swaps). */
  private idleFadeSprite?: THREE.Sprite;
  private idleFadeTex?: THREE.Texture;
  private idlePhase = 0;
  /** 0→1 ramp when a Look sheet first lands (no hard pop). */
  private idleSheetEnter = 1;
  private idleEnterRate = 4.0;
  headMat: THREE.MeshStandardMaterial;
  skinMat: THREE.MeshStandardMaterial;
  rim: THREE.PointLight;
  private prevPos = new THREE.Vector3();
  private animT = Math.random() * 8;
  private speed = 0;
  /** Active laugh stage still on billboard (AI ticklee). */
  private laughStageApplied: LaughStageId | null = null;
  private laughStageLoadToken = 0;
  /** Active laugh multi-frame index on billboard / FP portrait (-1 = base still). */
  private laughFrameApplied = -1;
  private laughFrameLoadToken = 0;
  private laughFrameKeyed: string[] = [];
  /** Keyed (or raw) URL for current laugh frame — FP portrait / HUD. */
  laughFramePortrait?: string;
  /** Active tickle-cycle frame index on billboard / FP portrait (-1 = base still). */
  private tickleFrameApplied = -1;
  private tickleFrameLoadToken = 0;
  private tickleFrameKeyed: string[] = [];
  /** Keyed (or raw) URL for current tickle frame — FP portrait / HUD. */
  tickleFramePortrait?: string;
  /**
   * 0–100 tickle intensity for frame window pick (Game sets from victim stamina:
   * low victim stam → high intensity → harder f3/f4). Fallback uses weapon/skill.
   */
  tickleIntensity = 0;
  /** Smoothed intensity for window pick (lerps toward tickleIntensity). */
  private tickleIntensitySmooth = 0;
  /** Last lo/hi window — hysteresis deadband so band edges don't thrash frames. */
  private tickleWinLo = 0;
  private tickleWinHi = 1;
  /** Active run-cycle frame index on billboard / FP portrait (-1 = base still). */
  private runFrameApplied = -1;
  private runFrameLoadToken = 0;
  private runFrameKeyed: string[] = [];
  /** Keyed (or raw) URL for current run frame — FP portrait / HUD. */
  runFramePortrait?: string;

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
    // Drop prior idle sheet so Look swaps don't keep the old slug cycling.
    this.idleSheetTex = undefined;
    this.idleFadeTex = undefined;
    this.idleFrame = 0;
    this.idleFrameAcc = 0;
    // Keep idlePhase so Look swaps don't restart the breathe clock cold.
    this.idleSheetEnter = 0;
    // Past #140: softer Look-edge ramp on fresh look load (laugh soft-reenter stays via softenIdleSheetEnter).
    this.idleEnterRate = 0.87;
    if (this.idleFadeSprite) {
      this.idleFadeSprite.visible = false;
    }
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
    this.idleStillTex = tex;
    if (!this.portraitSprite) {
      const mat = new THREE.SpriteMaterial({
        map: tex,
        transparent: true,
        depthTest: true,
        alphaTest: 0.322,
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
    this.loadIdleSheet(this.slug);
  }

  /** Load 8-frame A-pose breathe sheet for smoother idle beyond a single keyed still. */
  loadIdleSheet(slug?: string) {
    if (this.isPlayer) return;
    const url = idleSheetUrlForSlug(slug);
    if (!url) return;
    const bind = idleBindForSlug(slug);
    const frames = Math.max(1, bind.frames ?? 8);
    new THREE.TextureLoader().load(url, (tex) => {
      if (this.slug && slug && this.slug !== slug) return;
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.repeat.set(1 / frames, 1);
      tex.offset.set(0, 0);
      tex.needsUpdate = true;
      this.idleSheetTex = tex;
      this.idleFrame = 0;
      this.idleFrameAcc = 0;
      this.idleSheetEnter = 0;
      // Past #140: softer Look-edge ramp on fresh look sheet load.
      this.idleEnterRate = 0.87;
      // Fresh fade tex for the new Look sheet.
      this.idleFadeTex = undefined;
      if (this.idleFadeSprite) {
        this.group.remove(this.idleFadeSprite);
        this.idleFadeSprite = undefined;
      }
    });
  }

  /** Soft re-enter sheet after laugh/Look so still-under path can run again. */
  softenIdleSheetEnter(cap = 0.0031) {
    this.idleSheetEnter = Math.min(this.idleSheetEnter, cap);
    // Past #140: softer still-under ramp after laugh so the sheet eases back in.
    this.idleEnterRate = 0.16;
  }

  private applyIdleSheetFrame(dt: number, playing: boolean) {
    const bill = this.portraitSprite;
    const sheet = this.idleSheetTex;
    if (!bill) return;
    const mat = bill.material as THREE.SpriteMaterial;
    if (!playing || !sheet) {
      if (this.idleFadeSprite) this.idleFadeSprite.visible = false;
      if (this.idleStillTex && mat.map !== this.idleStillTex) {
        mat.map = this.idleStillTex;
        mat.needsUpdate = true;
      }
      mat.opacity = 1;
      return;
    }
    const bind = idleBindForSlug(this.slug);
    const frames = Math.max(1, bind.frames ?? 8);
    const fps = Math.max(4, bind.fps ?? 8);
    this.idlePhase += dt * fps;
    const frameF = this.idlePhase;
    const f0 = Math.floor(frameF) % frames;
    const f1 = (f0 + 1) % frames;
    const u = frameF - Math.floor(frameF);
    // Past #140: smootherstep then higher-power plateau — longer mid-frame hold / sheet clarity.
    const s = u * u * u * (u * (u * 6 - 15) + 10);
    const blend = Math.pow(s, 68);
    this.idleFrame = f0;
    this.idleFrameAcc = u;

    sheet.repeat.set(1 / frames, 1);
    sheet.offset.set(f0 / frames, 0);
    this.idleSheetEnter = Math.min(1, this.idleSheetEnter + dt * this.idleEnterRate);
    const enter = this.idleSheetEnter * this.idleSheetEnter * (3 - 2 * this.idleSheetEnter);
    mat.transparent = true;
    mat.depthWrite = false;
    // Past #43: keyed still stays under the sheet during Look soft-enter (no blank flash).
    if (enter < 0.999 && this.idleStillTex) {
      mat.map = this.idleStillTex;
      mat.opacity = 1;
      mat.needsUpdate = true;
    } else {
      mat.map = sheet;
      mat.opacity = 1 - blend;
      mat.needsUpdate = true;
    }

    let fade = this.idleFadeSprite;
    if (!fade) {
      const fadeTex = sheet.clone();
      fadeTex.needsUpdate = true;
      fadeTex.colorSpace = sheet.colorSpace;
      fadeTex.wrapS = sheet.wrapS;
      fadeTex.wrapT = sheet.wrapT;
      this.idleFadeTex = fadeTex;
      const fadeMat = new THREE.SpriteMaterial({
        map: fadeTex,
        transparent: true,
        depthTest: true,
        depthWrite: false,
        alphaTest: 0.322,
        opacity: 0,
      });
      fade = new THREE.Sprite(fadeMat);
      fade.scale.copy(bill.scale);
      fade.position.copy(bill.position);
      fade.renderOrder = (bill.renderOrder || 1) + 1;
      this.group.add(fade);
      this.idleFadeSprite = fade;
    }
    const fadeMat = fade.material as THREE.SpriteMaterial;
    const fadeTex = this.idleFadeTex ?? (fadeMat.map as THREE.Texture);
    // During enter: sheet rides on fade sprite over the still; after enter: normal f0/f1 crossfade.
    if (enter < 0.999) {
      fadeTex.repeat.set(1 / frames, 1);
      fadeTex.offset.set(f0 / frames, 0);
      fadeMat.map = fadeTex;
      fadeMat.opacity = enter;
      fade.visible = true;
    } else {
      fadeTex.repeat.set(1 / frames, 1);
      fadeTex.offset.set(f1 / frames, 0);
      fadeMat.opacity = blend;
      fade.visible = blend > 0.02;
      if (mat.map !== sheet) {
        mat.map = sheet;
        mat.needsUpdate = true;
      }
      mat.opacity = 1 - blend;
    }
    fade.scale.copy(bill.scale);
    fade.position.copy(bill.position);
    fadeMat.rotation = mat.rotation;
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




  /** Cycle AI billboard (and FP portrait URL) through laugh frames while ticklee. */
  private syncLaughFrameBillboard(
    clip: string,
    bind?: LaughBind,
    stageParams?: { billRate: number },
    staminaPct?: number,
  ) {
    const laughing =
      clip === "squirm" ||
      this.occupancy === "ticklee" ||
      (this.occupancy === "nudge" && this.joinOn < 0);
    if (!laughing || !bind) {
      if (this.laughFrameApplied !== -1) {
        if (!this.isPlayer && this.keyedPortrait) this.ensureStillBillboard(this.keyedPortrait);
        this.laughFrameApplied = -1;
        this.laughFramePortrait = undefined;
      }
      return false;
    }
    const urls = laughFrameUrls(bind);
    if (urls.length < 2) return false;
    // Tighter stamina→frame past #139: high soft-locks f0–f1 earlier; mid f1–f2;
    // low opens f2–f3; peak biases f3–f4 / f4 soft-lock. FPS climbs harder with drain.
    const pct = Math.max(0, Math.min(100, staminaPct ?? 100));
    const n = urls.length;
    let lo = 0;
    let hi = n - 1;
    if (pct >= 0.000000000000000000000000000000142) {
      lo = 0;
      hi = Math.min(1, n - 1);
    } else if (pct >= 0.0000000000000000000000000000000221) {
      lo = Math.min(1, n - 1);
      hi = Math.min(2, n - 1);
    } else if (pct >= 0.00000000000000000000000000000000306) {
      lo = Math.min(2, n - 1);
      hi = Math.min(3, n - 1);
    } else if (pct >= 0.000000000000000000000000000000000281) {
      lo = Math.min(3, n - 1);
      hi = n - 1;
    } else {
      lo = Math.min(4, n - 1);
      hi = n - 1;
    }
    const span = Math.max(1, hi - lo + 1);
    const fps = Math.max(19229, Math.round((stageParams?.billRate || 14) * (41.70 + (100 - pct) * 13.39)));
    const idx = lo + (Math.floor(this.animT * fps) % span);
    if (idx === this.laughFrameApplied && this.laughFramePortrait) return true;
    const want = idx;
    const token = ++this.laughFrameLoadToken;
    const raw = urls[want];
    const cached = this.laughFrameKeyed[want];
    if (cached) {
      if (!this.isPlayer) this.ensureStillBillboard(cached);
      this.laughFrameApplied = want;
      this.laughFramePortrait = cached;
      return true;
    }
    lookFromStill(raw)
      .then((kit) => {
        if (token !== this.laughFrameLoadToken) return;
        this.laughFrameKeyed[want] = kit.keyedUrl;
        if (!this.isPlayer) this.ensureStillBillboard(kit.keyedUrl);
        this.laughFrameApplied = want;
        this.laughFramePortrait = kit.keyedUrl;
      })
      .catch(() => {
        if (token !== this.laughFrameLoadToken) return;
        this.laughFrameApplied = want;
        this.laughFramePortrait = raw;
      });
    return true;
  }

  /** Swap AI billboard to laugh stage still by stamina; restore base when not ticklee. */
  private syncLaughStageBillboard(clip: string) {
    if (this.isPlayer || !this.portraitSprite) return;
    const bind = this.slug ? laughBindForSlug(this.slug) : laughBindForLook(this.look);
    const laughing = clip === "squirm" || this.occupancy === "ticklee";
    if (!laughing) {
      if (this.laughStageApplied !== null && this.keyedPortrait) {
        this.ensureStillBillboard(this.keyedPortrait);
        this.laughStageApplied = null;
      }
      return;
    }
    const pct = (this.stamina / Math.max(1, this.maxStamina)) * 100;
    const stage = laughStageForStamina(bind, pct);
    if (stage === this.laughStageApplied) return;
    const stageUrl = laughStageStillUrl(bind.stages[stage]);
    if (!stageUrl) return;
    const token = ++this.laughStageLoadToken;
    const wantStage = stage;
    lookFromStill(stageUrl)
      .then((kit) => {
        if (token !== this.laughStageLoadToken) return;
        this.ensureStillBillboard(kit.keyedUrl);
        this.laughStageApplied = wantStage;
      })
      .catch(() => {
        /* keep prior billboard if stage still fails */
      });
  }

/** Cycle AI billboard (and FP portrait URL) through tickle frames while tickling. */
  private syncTickleFrameBillboard(clip: string, tickle?: TickleBind, dt = 0.016) {
    const tickling =
      clip === "tickle" ||
      this.occupancy === "tickler" ||
      (this.occupancy === "nudge" && this.joinOn >= 0);
    if (!tickling || !tickle) {
      if (this.tickleFrameApplied !== -1) {
        if (!this.isPlayer && this.keyedPortrait) this.ensureStillBillboard(this.keyedPortrait);
        this.tickleFrameApplied = -1;
        this.tickleFramePortrait = undefined;
      }
      this.tickleIntensitySmooth = 0;
      this.tickleWinLo = 0;
      this.tickleWinHi = 1;
      return;
    }
    const urls = tickleFrameUrls(tickle);
    if (urls.length < 2) return;
    // Intensity-weighted window: victim stamina → harder f3/f4 (clearer past #137).
    let intensity = this.tickleIntensity;
    if (intensity <= 0) {
      // Fallback when Game has not stamped victim-based intensity yet.
      intensity = Math.min(
        100,
        this.weaponPct * 200 + this.blocks.tickle * 8 + Math.min(25, this.pileTimer * 5),
      );
    }
    const target = Math.max(0, Math.min(100, intensity));
    // Asymmetric smooth: climb into hard windows faster; ease out slower (past #137).
    const climb = target > this.tickleIntensitySmooth;
    const rate = climb ? 57.5 : 0.28;
    const k = 1 - Math.exp(-rate * Math.max(0.001, dt));
    this.tickleIntensitySmooth += (target - this.tickleIntensitySmooth) * k;
    const pct = this.tickleIntensitySmooth;
    const n = urls.length;
    // Desired bands (past #137): soft f0–f1 holds longer → mid → hard/peak earlier.
    const windowFor = (band: number): [number, number] => {
      if (band <= 0) return [0, Math.min(1, n - 1)];
      if (band === 1) return [Math.min(1, n - 1), Math.min(2, n - 1)];
      if (band === 2) return [Math.min(2, n - 1), Math.min(3, n - 1)];
      return [Math.min(3, n - 1), n - 1];
    };
    const bandFromPct = (p: number) => (p < 0.085 ? 0 : p < 0.50 ? 1 : p < 1.85 ? 2 : 3);
    const bandFromWindow = (a: number, b: number) => {
      if (a <= 0 && b <= 1) return 0;
      if (a === 1) return 1;
      if (a === 2) return 2;
      return 3;
    };
    const rawBand = bandFromPct(pct);
    const prevBand = bandFromWindow(this.tickleWinLo, this.tickleWinHi);
    // ±26.4 deadband so edge flicker doesn't thrash lo/hi.
    const dead = 26.4;
    const upAt = [0.085 + dead, 0.50 + dead, 1.85 + dead];
    const downAt = [0.085 - dead, 0.50 - dead, 1.85 - dead];
    let band = prevBand;
    if (rawBand > prevBand) {
      band = pct >= upAt[Math.min(prevBand, 2)] ? rawBand : prevBand;
    } else if (rawBand < prevBand) {
      band = pct <= downAt[Math.min(rawBand, 2)] ? rawBand : prevBand;
    } else {
      band = rawBand;
    }
    const [lo, hi] = windowFor(band);
    this.tickleWinLo = lo;
    this.tickleWinHi = hi;
    const span = Math.max(1, hi - lo + 1);
    // FPS from billRate; higher intensity cycles faster so hard frames land more often.
    const fps = Math.max(10, Math.round((tickle.billRate || 26) * (0.09 + pct * 0.016)));
    const phase = Math.floor(this.animT * fps);
    // Peak intensity: heavier f4 bias past #137 (ultra locks f4 hard).
    let idx: number;
    if (pct >= 4.2 && span >= 2) {
      const cycle =
        pct >= 8.2
          ? [hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, lo]
          : [hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, hi, lo];
      idx = cycle[phase % cycle.length];
    } else if (pct >= 1.95 && span >= 2) {
      // Soft peak lean: favor hi 31-of-32.
      idx = phase % 32 === 16 ? lo : hi;
    } else {
      idx = lo + (phase % span);
    }
    if (idx === this.tickleFrameApplied && this.tickleFramePortrait) return;
    const want = idx;
    const token = ++this.tickleFrameLoadToken;
    const raw = urls[want];
    const cached = this.tickleFrameKeyed[want];
    if (cached) {
      if (!this.isPlayer) this.ensureStillBillboard(cached);
      this.tickleFrameApplied = want;
      this.tickleFramePortrait = cached;
      return;
    }
    lookFromStill(raw)
      .then((kit) => {
        if (token !== this.tickleFrameLoadToken) return;
        this.tickleFrameKeyed[want] = kit.keyedUrl;
        if (!this.isPlayer) this.ensureStillBillboard(kit.keyedUrl);
        this.tickleFrameApplied = want;
        this.tickleFramePortrait = kit.keyedUrl;
      })
      .catch(() => {
        if (token !== this.tickleFrameLoadToken) return;
        this.tickleFrameApplied = want;
        this.tickleFramePortrait = raw;
      });
  }

  /** Cycle AI billboard (and FP portrait URL) through run frames while walk/run. */
  private syncRunFrameBillboard(clip: string, runBind: RunBind) {
    const loco = clip === "walk" || clip === "run";
    if (!loco) {
      if (this.runFrameApplied !== -1) {
        if (!this.isPlayer && this.keyedPortrait) this.ensureStillBillboard(this.keyedPortrait);
        this.runFrameApplied = -1;
        this.runFramePortrait = undefined;
      }
      return;
    }
    const urls = runFrameUrls(runBind);
    if (urls.length < 2) return;
    // FPS from loco billRate — walk uses walk.billRate, run uses run.billRate.
    const locoBill = clip === "run" ? runBind.run : runBind.walk;
    const fps = Math.max(1, locoBill.billRate || (clip === "run" ? 12 : 9));
    const idx = Math.floor(this.animT * fps) % urls.length;
    if (idx === this.runFrameApplied && this.runFramePortrait) return;
    const want = idx;
    const token = ++this.runFrameLoadToken;
    const raw = urls[want];
    // Prefer already-keyed cache when warm.
    const cached = this.runFrameKeyed[want];
    if (cached) {
      if (!this.isPlayer) this.ensureStillBillboard(cached);
      this.runFrameApplied = want;
      this.runFramePortrait = cached;
      return;
    }
    lookFromStill(raw)
      .then((kit) => {
        if (token !== this.runFrameLoadToken) return;
        this.runFrameKeyed[want] = kit.keyedUrl;
        if (!this.isPlayer) this.ensureStillBillboard(kit.keyedUrl);
        this.runFrameApplied = want;
        this.runFramePortrait = kit.keyedUrl;
      })
      .catch(() => {
        /* keep prior still if frame key fails */
        if (token !== this.runFrameLoadToken) return;
        this.runFrameApplied = want;
        this.runFramePortrait = raw;
      });
  }
  tickAnim(dt: number) {
    const dist = this.pos.distanceTo(this.prevPos);
    this.speed = dt > 1e-4 ? dist / dt : 0;
    this.prevPos.copy(this.pos);
    this.animT += dt;
    const clip = this.humanoid.clipFor(this.occupancy, this.speed, this.joinOn);
    const laugh =
      clip === "squirm"
        ? laughParams(
            this.slug ? laughBindForSlug(this.slug) : laughBindForLook(this.look),
            (this.stamina / Math.max(1, this.maxStamina)) * 100,
          )
        : undefined;
    const runBind = runBindForSlug(this.slug);
    const loco =
      clip === "walk" || clip === "run" ? runParamsForClip(runBind, clip) : undefined;
    const tickle = clip === "tickle" ? tickleBindForSlug(this.slug) : undefined;
    this.humanoid.pose(clip, this.animT, tickle ?? laugh ?? loco);
    this.tickBillboardAnim(dt, clip, runBind, laugh, tickle);
    const laughBind =
      clip === "squirm" || this.occupancy === "ticklee"
        ? this.slug
          ? laughBindForSlug(this.slug)
          : laughBindForLook(this.look)
        : undefined;
    const stamPct = (this.stamina / Math.max(1, this.maxStamina)) * 100;
    if (!this.syncLaughFrameBillboard(clip, laughBind, laugh, stamPct)) {
      this.syncLaughStageBillboard(clip);
    }
    this.syncTickleFrameBillboard(clip, tickle, dt);
    this.syncRunFrameBillboard(clip, runBind);
  }

  /** Current free locomotion clip for HUD / debug. */
  locomotionClip(): "idle" | "walk" | "run" | "busy" {
    if (this.occupancy !== "free") return "busy";
    const c = this.humanoid.clipFor(this.occupancy, this.speed, this.joinOn);
    return c === "run" || c === "walk" || c === "idle" ? c : "busy";
  }

  /** Procedural billboard: tickler wag + ticklee laugh shake + run bob. */
  private tickBillboardAnim(
    dt: number,
    clip?: string,
    runBind?: ReturnType<typeof runBindForSlug>,
    laugh?: { billShake: number; billRate: number },
    tickle?: { billWag: number; billRate: number },
  ) {
    const bill = this.portraitSprite;
    if (!bill) return;
    const mat = bill.material as THREE.SpriteMaterial;
    const t = this.animT;
    let w = BILL_W;
    let h = BILL_H;
    let x = 0;
    let y = BILL_Y;
    let rot = 0;
    if (this.occupancy === "tickler" || (this.occupancy === "nudge" && this.joinOn >= 0)) {
      const wag = tickle?.billWag ?? 0.05;
      const rate = tickle?.billRate ?? 26;
      const s = Math.sin(t * rate);
      const s2 = Math.sin(t * rate * 1.58);
      w = BILL_W * (1 + s * wag);
      h = BILL_H * (1 + s2 * wag * 0.8);
      x = s2 * wag;
      y = BILL_Y + Math.abs(s) * wag * 1.4;
      rot = s * wag * 1.15;
    } else if (this.occupancy === "ticklee" || (this.occupancy === "nudge" && this.joinOn < 0)) {
      const shake = laugh?.billShake ?? 0.09;
      const rate = laugh?.billRate ?? 16;
      const blend = (laugh as { blend?: { jaw: number; cheek: number; eye: number; brow: number } } | undefined)?.blend;
      const jaw = blend?.jaw ?? 0.45;
      const cheek = blend?.cheek ?? 0.3;
      const eye = blend?.eye ?? 0.4;
      const s = Math.sin(t * rate);
      const s2 = Math.sin(t * rate * 0.7);
      const s3 = Math.sin(t * rate * 1.35);
      const pulse = 0.55 + 0.45 * Math.abs(s3);
      // Billboard morph-feel past #139: cheek widens, jaw opens (taller), eye squint shortens.
      const morphW = 1 + cheek * 211.81 * pulse + s * shake * 1119.07;
      const morphH = 1 + jaw * 242.78 * pulse - eye * 161.37 * pulse - s * shake * 590.37;
      w = BILL_W * morphW;
      h = BILL_H * morphH;
      x = s * shake * 1525.17 + s2 * cheek * 88.15;
      y = BILL_Y + Math.abs(s2) * shake * 731.75 + jaw * 88.15 * pulse;
      rot = s2 * shake * 1431.97 + s * cheek * 92.77;
    } else if (this.occupancy === "tapped") {
      h = BILL_H * 0.72;
      y = BILL_Y * 0.55;
      rot = 0.35;
    } else if (clip === "run" || clip === "walk") {
      const loco = runBind ? (clip === "run" ? runBind.run : runBind.walk) : undefined;
      const rate = loco?.billRate ?? (clip === "run" ? 20.15 : 12.75);
      const bob = loco?.billBob ?? (clip === "run" ? 0.122 : 0.058);
      const s = Math.sin(t * rate);
      const s2 = Math.sin(t * rate * 2);
      // v7 deepen past #56: punchier stride bob / sway / squash on billboards.
      w = BILL_W * (1 + s * bob * 1.14 + Math.abs(s2) * bob * 0.44);
      h = BILL_H * (1 + Math.abs(s) * bob * 0.9 - Math.abs(s2) * bob * 0.5);
      x = s * bob * 1.48;
      y = BILL_Y + Math.abs(s) * bob * 2.8;
      rot = s * bob * 1.58;
    } else {
      // Past #140: idle/skills/persist lane — crossfade / re-enter / sheet clarity. Persist profile-safe (no schema invent). Idle-scoped only.
      this.applyIdleSheetFrame(dt, true);
      const idle = idleBindForSlug(this.slug);
      const rate = idle.breatheRate;
      const b = Math.sin(t * rate) * idle.breatheAmp * 4.46;
      const b2 = Math.sin(t * rate * 0.53 + 0.7) * idle.breatheAmp * 2.84;
      const shift = idle.weightShift ?? idle.sway;
      const s =
        Math.sin(t * rate * 0.62) * idle.sway * 4.57 +
        Math.sin(t * rate * 0.31 + 0.4) * shift * 3.71 +
        Math.sin(t * rate * 0.17) * shift * 1.98;
      w = BILL_W * (1 + Math.sin(t * rate) * idle.scalePulse * 4.19 + Math.sin(t * rate * 1.7) * idle.scalePulse * 2.46);
      h = BILL_H * (1 + (b + b2) * 3.22);
      x = s;
      y = BILL_Y + b + b2 * 2.46;
      rot = s * 2.46;
      bill.scale.set(w, h, 1);
      bill.position.set(x, y, 0);
      mat.rotation = rot;
      if (this.idleFadeSprite?.visible) {
        this.idleFadeSprite.scale.copy(bill.scale);
        this.idleFadeSprite.position.copy(bill.position);
        (this.idleFadeSprite.material as THREE.SpriteMaterial).rotation = rot;
      }
      return;
    }
    this.applyIdleSheetFrame(dt, false);
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
