import * as THREE from "three";
import {
  AMATEUR_ROSTER,
  CANCEL_CD,
  CONTACT,
  COUNTDOWN,
  EYE,
  FLASH_T,
  BAIT_X,
  BAIT_Z,
  JOIN_MAX,
  LOOKS,
  NUDGE_T,
  PLAYER_SLACK,
  REGEN_DELAY,
  REGEN_PS,
  REAPPEAR_FLASH,
  REAPPEAR_IGNORE,
  REAPPEAR_TELL,
  RESPAWN_IGNORE,
  SPEED,
  TAP_CD,
  TEAM,
  TIMED_T,
  VANISH_T,
  PILE_CD,
  PILE_CD_STICKY,
} from "./constants";
import { normalizeSave, type ArenaMode, type SaveData } from "./types";
import { MapWorld } from "./MapWorld";
import { Fighter } from "./Fighter";
import { Input, connectFakePad, setFakePad, disconnectFakePad } from "./Input";
import { tickBot } from "./AI";
import { stillUrlFor, lookById } from "./stills";
import { lookFromStill } from "./lookFromStill";
import {
  blip,
  bindAudioUnlock,
  resumeAudio,
  stingStart,
  stingReappear,
  stingTickle,
  stingEscape,
  stingVanish,
  stingTapOut,
  stingWin,
  stingLose,
  stingCountdownTick,
} from "./sfx";
import { tickleBindForSlug } from "./tickleBind";
import { Hub } from "./Hub";
import { HubPlaza, PLAZA_DOOR_REACH } from "./HubPlaza";
import { rollBotKit } from "./botLoadout";
import { gearLabel } from "./gear";
import {
  inTickleReach,
  isActive,
  isRear,
  packReady,
  pairKey,
  touching,
} from "./combatUtil";

const SAVE_KEY = "tb-amateur-save";
const HUB_CONFIRM_GRACE = 2.35;

export class Game {
  renderer: THREE.WebGLRenderer;
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(72, 1, 0.08, 120);
  map = new MapWorld();
  plaza = new HubPlaza();
  fighters: Fighter[] = [];
  player!: Fighter;
  input = new Input();
  mode: "hub" | "play" | "results" = "hub";
  arenaMode: ArenaMode = "team-quick";
  countdown = COUNTDOWN;
  timedLeft = 0;
  tapScore: [number, number] = [0, 0];
  clock = new THREE.Clock();
  pairCd = new Map<string, number>();
  joinList = new Map<number, number[]>();
  firstTickler = new Map<number, number>();
  ffaScore = new Map<number, number>();
  contactHold = new Map<string, number>();
  nudgeT = 0;
  nudgeFrom = new THREE.Vector3();
  nudgeTo = new THREE.Vector3();
  nudgeIds: number[] = [];
  overlay: HTMLElement;
  hub!: Hub;
  save: SaveData;
  coinsEarned = 0;
  payouts: { role: "opener" | "assist"; coins: number; victim: string }[] = [];
  matchLoadout = "";
  matchWeapon = 0;
  matchArmor = 0;
  plazaPreview: Fighter | null = null;
  /** Soft hall/plaza pose targets so mannequin idle doesn't hard-snap between rooms. */
  private plazaPoseTarget = new THREE.Vector3(0, 0, 1.35);
  private plazaYawTarget = Math.PI * 0.92;
  private hubLaughWas = false;
  /** First-person walk pose while hub.room === plaza (flat floor). */
  hubPos = new THREE.Vector3(0, 0, -2.4);
  hubYaw = Math.PI; // face +z toward Arena
  hubPitch = 0;
  hubNear: "home" | "shop" | "arena" | null = null;
  private hubPrompted: "home" | "shop" | "arena" | null = null;
  /** Ignore pad/click confirm after Leave/Return so A does not re-queue Arena. */
  private hubConfirmGrace = 0;
  /** Prevent a repeated results edge from banking the same existing payout twice. */
  private matchRewardsCommitted = false;
  result = "";
  toastT = 0;
  toast = "";
  lookPitch = 0;
  combatAnnounced = false;
  /** Last ceil that played a countdown-tick (spawn or vanish HUD). */
  private countdownTickCeil = -1;
  private vanishTickCeil = -1;
  liveT = 0;
  private hudEls: Record<string, HTMLElement> = {};
  private rearCue: THREE.Mesh;
  private fpArms: THREE.Group;
  private fpArmT = 0;
  private wallPrev = performance.now();

  constructor(root: HTMLElement) {
    this.save = loadSave();
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.shadowMap.enabled = true;
    root.appendChild(this.renderer.domElement);
    this.overlay = document.createElement("div");
    this.overlay.id = "overlay";
    this.overlay.innerHTML = overlayHtml();
    root.appendChild(this.overlay);
    this.hub = new Hub(
      this.overlay,
      () => this.save,
      () => this.persistSave(),
      (mode) => {
        this.arenaMode = mode;
        this.beginMatch(this.input.padActive);
      },
    );
    this.hub.bind();
    this.cacheHud();
    this.input.bindHud(this.overlay);
    this.scene.fog = new THREE.Fog(0x1a1614, 18, 48);
    this.scene.background = new THREE.Color(0x161310);
    this.scene.add(new THREE.HemisphereLight(0x8a8078, 0x1a1210, 0.7));
    const sun = new THREE.DirectionalLight(0xc8b8a0, 1.05);
    sun.position.set(8, 18, 6);
    sun.castShadow = true;
    this.scene.add(sun);
    this.scene.add(this.map.group);
    this.scene.add(this.plaza.group);
    this.plaza.group.visible = false;
    this.rearCue = new THREE.Mesh(
      new THREE.RingGeometry(0.38, 0.72, 28),
      new THREE.MeshBasicMaterial({
        color: 0xd4a25a,
        transparent: true,
        opacity: 0.92,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
    );
    this.rearCue.rotation.x = -Math.PI / 2;
    this.rearCue.visible = false;
    this.scene.add(this.rearCue);
    this.fpArms = buildFpArms();
    // Camera must be in the scene graph so children (FP arms) render.
    this.scene.add(this.camera);
    this.camera.add(this.fpArms);
    this.fpArms.visible = false;
    this.bindUi();
    window.addEventListener("resize", () => this.resize());
    this.resize();
    this.showHub();
    this.renderer.setAnimationLoop(() => this.frame());
  }

  private cacheHud() {
    for (const id of [
      "boot",
      "results",
      "hud",
      "stamina-fill",
      "escape-fill",
      "meta-left",
      "meta-right",
      "top-left",
      "top-right",
      "countdown",
      "toast",
      "face",
      "btn-tickle",
      "btn-escape",
      "statline",
      "top",
      "crosshair",
      "radar",
      "roster",
      "face-still",
      "elara-still",
      "player-portrait",
      "pad-status",
      "again-hint",
      "btn-leave",
      "tickle-flash",
    ]) {
      const el = this.overlay.querySelector("#" + id);
      if (el) this.hudEls[id] = el as HTMLElement;
    }
  }

  private bindUi() {
    bindAudioUnlock(document);
    this.overlay.querySelector("#again")?.addEventListener("click", () => this.returnToPlaza("click"));
    this.overlay.querySelector("#btn-leave")?.addEventListener("click", () => this.bailCountdown());
    this.renderer.domElement.addEventListener("click", (e) => {
      if (this.tryPlazaDoor(e.clientX, e.clientY)) return;
      if (this.mode === "hub" && this.hub.room === "plaza" && !this.input.padActive) {
        this.renderer.domElement.requestPointerLock?.();
        return;
      }
      if (this.mode === "play" && !this.input.padActive) this.renderer.domElement.requestPointerLock?.();
    });
    this.overlay.addEventListener("click", (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      if (t.closest("button, a, input, [data-hub], .hub-item, .roster, #play")) return;
      this.tryPlazaDoor(e.clientX, e.clientY);
    });
    window.addEventListener("pointermove", (e) => {
      if (this.mode !== "hub" || this.hub.room !== "plaza") {
        if (document.body.style.cursor === "pointer") document.body.style.cursor = "";
        return;
      }
      const card = this.overlay.querySelector("#boot .card") as HTMLElement | null;
      const hit = this.plaza.pickDoor(
        this.camera,
        e.clientX,
        e.clientY,
        this.renderer.domElement,
        card?.getBoundingClientRect(),
      );
      this.plaza.setHover(hit);
      const cur = hit ? "pointer" : "";
      this.renderer.domElement.style.cursor = cur;
      document.body.style.cursor = cur;
    });
  }

  private tryPlazaDoor(clientX: number, clientY: number): boolean {
    if (this.mode !== "hub" || this.hub.room !== "plaza") return false;
    const card = this.overlay.querySelector("#boot .card") as HTMLElement | null;
    const hit = this.plaza.pickDoor(
      this.camera,
      clientX,
      clientY,
      this.renderer.domElement,
      card?.getBoundingClientRect(),
    );
    if (!hit) return false;
    this.plaza.setHover(null);
    this.renderer.domElement.style.cursor = "";
    document.body.style.cursor = "";
    if (hit === "arena") {
      // Leave/Return owns the first short input window; never queue a fresh match from a stale click.
      if (this.hubConfirmGrace > 0) return true;
      this.arenaMode = "team-quick";
      this.beginMatch(this.input.padActive);
      return true;
    }
    this.hub.show(hit);
    this.hub.render();
    this.syncPlazaHall();
    return true;
  }

  private syncPlazaHall() {
    this.hudEls.boot.classList.toggle("plaza-hall", this.mode === "hub" && this.hub.room === "plaza");
  }

  private persistSave() {
    writeSave(this.save);
    this.syncPlazaPreview();
  }


  /** Soft ticks on spawn countdown last 3s, leave already handled in bail; player vanish last 3s. */
  private tickCountdownAudio() {
    if (this.countdown > 0) {
      const ceil = Math.ceil(this.countdown);
      if (ceil <= 3 && ceil >= 1 && ceil !== this.countdownTickCeil) {
        this.countdownTickCeil = ceil;
        // Louder + higher pitch toward 1 (past #96).
        const gain = ceil === 1 ? 1.52 : ceil === 2 ? 1.0 : 0.035;
        stingCountdownTick(gain, ceil);
      }
    }
    const p = this.player;
    if (p && p.occupancy === "vanished" && p.vanishLeft > 0) {
      const vCeil = Math.ceil(p.vanishLeft);
      if (vCeil <= 3 && vCeil >= 1 && vCeil !== this.vanishTickCeil) {
        this.vanishTickCeil = vCeil;
        // Quieter + soft-mode pitch so vanish clock stays a tell, not an alarm.
        const gain = vCeil === 1 ? 0.14 : vCeil === 2 ? 0.06 : 0.025;
        stingCountdownTick(gain, vCeil, true);
      }
    } else {
      this.vanishTickCeil = -1;
    }
  }

  private bailCountdown() {
    if (this.mode !== "play" || this.countdown <= 0) return;
    stingCountdownTick(0.78, 2);
    // Harden Leave: clear match state first, keep save untouched, then plaza.
    // Reward-free + profile-safe: wipe coinsEarned/payouts/XP before any persist path (Leave = no coins/XP).
    this.countdown = 0;
    this.coinsEarned = 0;
    this.payouts = [];
    this.resetMatchEphemeral();
    this.clearFighters();
    this.say("Left during countdown — no coins, no XP");
    this.returnToPlaza("leave");
  }

  /** Clear countdown/combat maps so Leave → plaza never leaks match state into hub. */
  private resetMatchEphemeral() {
    this.countdownTickCeil = -1;
    this.vanishTickCeil = -1;
    this.combatAnnounced = false;
    this.coinsEarned = 0;
    this.payouts = [];
    this.matchRewardsCommitted = false;
    this.joinList.clear();
    this.firstTickler.clear();
    this.ffaScore.clear();
    this.pairCd.clear();
    this.contactHold.clear();
    this.tapScore = [0, 0];
    this.timedLeft = 0;
    this.nudgeT = 0;
    this.nudgeIds = [];
    this.liveT = 0;
    this.result = "";
    this.matchLoadout = "";
    this.lookPitch = 0;
    this.fpArmT = 0;
    this.wallPrev = performance.now();
  }

  /** Shared Leave / results Return edge — wipe ephemeral, reload disk, grace pad A. */
  private returnToPlaza(_reason: "leave" | "return" | "click") {
    this.showHub();
    document.exitPointerLock?.();
    // Consume back/confirm so pad B/A does not bounce into Arena or re-open rooms.
    // Keep the existing saved coins/XP untouched; only the transient match edge is gated.
    this.input.endFrame();
    this.hubConfirmGrace = HUB_CONFIRM_GRACE;
    // Keep the return edge reward-safe: only commitMatchRewards may bank existing match coins/XP.
    this.matchRewardsCommitted = false;
  }

  private beginMatch(fromPad: boolean) {
    if (this.mode === "play") return;
    if (this.hubConfirmGrace > 0) return;
    resumeAudio();
    if (!fromPad && !this.input.padActive) this.renderer.domElement.requestPointerLock?.();
    this.startMatch();
  }

  private showHub() {
    this.mode = "hub";
    this.countdown = 0;
    this.clearFighters();
    this.map.group.visible = false;
    this.plaza.group.visible = true;
    this.scene.fog = new THREE.Fog(0x1a1614, 32, 80);
    this.hudEls.boot.style.display = "flex";
    this.hudEls.results.style.display = "none";
    this.hudEls.hud.style.display = "none";
    this.hudEls.countdown.style.display = "none";
    if (this.hudEls.top) this.hudEls.top.style.display = "none";
    if (this.hudEls.crosshair) this.hudEls.crosshair.style.display = "none";
    if (this.hudEls.radar) this.hudEls.radar.style.display = "none";
    if (this.hudEls["btn-leave"]) this.hudEls["btn-leave"].style.display = "none";
    this.rearCue.visible = false;
    // Re-read disk save so Leave / Return never drop Look / coins / skills / loadout.
    this.save = loadSave();
    this.hubPos.set(0, 0, -2.4);
    this.hubYaw = Math.PI;
    this.hubPitch = 0;
    this.hubNear = null;
    this.hubPrompted = null;
    this.hub.show("plaza");
    this.hub.render();
    this.fillElaraPortrait();
    this.fillRosterStrip();
    this.syncPlazaHall();
    this.syncPlazaPreview();
    this.plaza.setHover(null);
    this.plaza.setNear(null);
    this.plaza.setNearStrength(0);
    // Idempotent wipe if Return/Leave raced; disk save already reloaded above.
    this.resetMatchEphemeral();
    this.persistSave();
  }

  private aimPlazaCamera() {
    const t = this.clock.elapsedTime * 0.12;
    const room = this.hub.room;
    if (room === "home") {
      this.camera.position.set(-6.4, 3.5, 0.35);
      this.camera.lookAt(this.plaza.doors.home.x, 1.55, this.plaza.doors.home.z);
      return;
    }
    if (room === "shop") {
      this.camera.position.set(6.4, 3.5, 0.35);
      this.camera.lookAt(this.plaza.doors.shop.x, 1.55, this.plaza.doors.shop.z);
      return;
    }
    if (room === "arena") {
      this.camera.position.set(0, 3.7, 4.4);
      this.camera.lookAt(this.plaza.doors.arena.x, 1.55, this.plaza.doors.arena.z);
      return;
    }
    this.camera.position.set(Math.sin(t) * 1.4 + 2.35, 1.78, 4.85);
    this.camera.lookAt(0, 1.12, 1.35);
  }

  private tickHubWalk(dt: number) {
    const look = this.input.consumeLook();
    this.hubYaw -= look.x;
    this.hubPitch = THREE.MathUtils.clamp(this.hubPitch - look.y, -1.05, 0.95);
    const mv = this.input.moveVec();
    const sp = SPEED * 0.88;
    const lx = -Math.sin(this.hubYaw);
    const lz = -Math.cos(this.hubYaw);
    const rx = Math.cos(this.hubYaw);
    const rz = -Math.sin(this.hubYaw);
    const dx = (lx * mv.z + rx * mv.x) * sp * dt;
    const dz = (lz * mv.z + rz * mv.x) * sp * dt;
    const r = this.plaza.resolve(this.hubPos.x + dx, this.hubPos.z + dz);
    this.hubPos.x = r.x;
    this.hubPos.z = r.z;
    this.hubPos.y = 0;
    this.hubNear = this.plaza.nearDoor(this.hubPos.x, this.hubPos.z);
    this.plaza.setNear(this.hubNear);
    if (this.hubNear) {
      const d = this.plaza.doors[this.hubNear];
      const dist = Math.hypot(this.hubPos.x - d.x, this.hubPos.z - d.z);
      // Octa-biased smoothstep past #64 — snappier near-door CTA / Leave feel.
      const reach = PLAZA_DOOR_REACH;
      const lin = 1 - Math.min(1, dist / reach);
      const ease = lin * lin * (3 - 2 * lin);
      const bias = ease * ease * (3 - 2 * ease);
      const tri = bias * bias * (3 - 2 * bias);
      const quad = tri * tri * (3 - 2 * tri);
      const penta = quad * quad * (3 - 2 * quad);
      const hexa = penta * penta * (3 - 2 * penta);
      const hepta = hexa * hexa * (3 - 2 * hexa);
      this.plaza.setNearStrength(hepta * hepta * (3 - 2 * hepta));
    } else {
      this.plaza.setNearStrength(0);
    }
    if (this.hubNear !== this.hubPrompted) {
      this.hubPrompted = this.hubNear;
      if (this.hubNear === "arena") {
        this.say("Arena — A / Enter / E / click starts Amateur Team Quick");
      } else if (this.hubNear === "home") {
        this.say("Home — A / Enter / E / click (Look · Skills · Loadout)");
      } else if (this.hubNear === "shop") {
        this.say("Shop — A / Enter / E / click (Amateur gear)");
      }
    }
  }

  private interactHubDoor(allowPlayFallback: boolean) {
    const door = this.hubNear;
    if (door === "arena") {
      this.arenaMode = "team-quick";
      this.beginMatch(this.input.padActive);
      return;
    }
    if (door === "home" || door === "shop") {
      this.hub.show(door);
      this.hub.render();
      this.syncPlazaHall();
      return;
    }
    if (allowPlayFallback) {
      this.arenaMode = "team-quick";
      this.beginMatch(this.input.padActive);
    }
  }

  private aimHubWalkCamera() {
    // Over-shoulder third person so the plaza mannequin (idle sheets) stays visible.
    const back = 2.55;
    const camY = 1.62;
    this.camera.position.set(
      this.hubPos.x + Math.sin(this.hubYaw) * back,
      this.hubPos.y + camY,
      this.hubPos.z + Math.cos(this.hubYaw) * back,
    );
    this.camera.rotation.order = "YXZ";
    this.camera.rotation.y = this.hubYaw;
    this.camera.rotation.x = this.hubPitch;
    this.camera.rotation.z = 0;
  }

  private fillElaraPortrait() {
    const img = this.hudEls["elara-still"] as HTMLImageElement | undefined;
    const def = lookById(this.save.look);
    const url = stillUrlFor(def.slug);
    if (!img || !url) return;
    img.hidden = true;
    img.alt = def.display;
    lookFromStill(url).then((kit) => {
      img.src = kit.keyedUrl;
      img.hidden = false;
      const look = this.overlay.querySelector("#look-preview img") as HTMLImageElement | null;
      if (look) look.src = kit.keyedUrl;
    });
  }

  private fillRosterStrip() {
    const el = this.hudEls.roster;
    if (!el) return;
    el.innerHTML = AMATEUR_ROSTER.map((r) => {
      const url = stillUrlFor(r.slug);
      if (!url) {
        return `<div class="slot empty"><span>${r.display}</span></div>`;
      }
      return `<figure class="slot"><img data-slug="${r.slug}" alt="${r.display}" hidden /><figcaption>${r.display}</figcaption></figure>`;
    }).join("");
    for (const r of AMATEUR_ROSTER) {
      const url = stillUrlFor(r.slug);
      if (!url) continue;
      lookFromStill(url).then((kit) => {
        const img = el.querySelector(`img[data-slug="${r.slug}"]`) as HTMLImageElement | null;
        if (img) {
          img.src = kit.keyedUrl;
          img.hidden = false;
        }
      });
    }
  }

  private startMatch() {
    this.mode = "play";
    this.map.group.visible = true;
    this.plaza.group.visible = false;
    this.scene.fog = new THREE.Fog(0x1a1614, 18, 48);
    this.countdown = COUNTDOWN;
    this.timedLeft = this.arenaMode === "team-timed" || this.arenaMode === "ffa-timed" ? TIMED_T : 0;
    this.tapScore = [0, 0];
    this.coinsEarned = 0;
    this.payouts = [];
    this.matchRewardsCommitted = false;
    this.joinList.clear();
    this.firstTickler.clear();
    this.ffaScore.clear();
    this.pairCd.clear();
    this.contactHold.clear();
    this.nudgeT = 0;
    this.combatAnnounced = false;
    this.countdownTickCeil = -1;
    this.vanishTickCeil = -1;
    this.liveT = 0;
    this.wallPrev = performance.now();
    this.clearFighters();
    this.lockMatchLoadout();
    this.spawnRoster();
    this.hudEls.boot.style.display = "none";
    this.hudEls.results.style.display = "none";
    this.hudEls.hud.style.display = "flex";
    this.syncPlazaHall();
    if (this.plazaPreview) this.plazaPreview.group.visible = false;
    if (this.hudEls.top) this.hudEls.top.style.display = "flex";
    if (this.hudEls.crosshair) this.hudEls.crosshair.style.display = "block";
    if (this.hudEls.radar) this.hudEls.radar.style.display = "flex";
    if (this.hudEls["btn-leave"]) this.hudEls["btn-leave"].style.display = "block";
    blip(220, 0.12);
  }

  private clearFighters() {
    for (const f of this.fighters) this.scene.remove(f.group);
    this.fighters = [];
  }

  private spawnRoster() {
    const roles: Array<Fighter["role"]> = ["hunter", "flanker", "ambusher", "escape", "sticky"];
    const playerLook = lookById(this.save.look);
    const palette = this.lookPalette(playerLook.id);
    const usedLooks = new Set<number>([palette]);
    const mkLook = () => {
      for (let i = 1; i < LOOKS.length; i++) {
        if (!usedLooks.has(i)) {
          usedLooks.add(i);
          return i;
        }
      }
      return 1;
    };
    const blocks = { ...this.save.blocks };
    const ffa = this.isFfa();
    const pool = AMATEUR_ROSTER.filter((r) => r.slug !== playerLook.slug);
    this.player = new Fighter({
      team: ffa ? 0 : TEAM.CYAN,
      isPlayer: true,
      look: palette,
      name: "Elara Case",
      slug: playerLook.slug,
      role: null,
      blocks,
      weapon: this.matchWeapon,
      armor: this.matchArmor,
    });
    const p0 = ffa ? this.map.soloPads[0].clone() : this.map.spawnA.clone();
    this.place(this.player, p0);
    this.player.yaw = ffa ? yawToward(p0, new THREE.Vector3()) : -Math.PI / 2;
    this.fighters.push(this.player);
    this.scene.add(this.player.group);
    this.player.body.visible = false;

    if (ffa) {
      for (let i = 0; i < 11; i++) {
        const kit = rollBotKit(this.save.level);
        const pad = this.map.soloPads[i + 1] ?? this.map.spawnB.clone();
        const f = new Fighter({
          team: i + 1,
          isPlayer: false,
          look: mkLook(),
          name: pool[i].display,
          slug: pool[i].slug,
          role: roles[i % roles.length],
          blocks: kit.blocks,
          weapon: kit.weapon,
          armor: kit.armor,
        });
        this.place(f, pad.clone());
        f.yaw = yawToward(pad, new THREE.Vector3());
        this.fighters.push(f);
        this.scene.add(f.group);
      }
      return;
    }

    for (let i = 0; i < 5; i++) {
      const kit = rollBotKit(this.save.level);
      const f = new Fighter({
        team: TEAM.CYAN,
        isPlayer: false,
        look: mkLook(),
          name: pool[i].display,
          slug: pool[i].slug,
        role: roles[i % roles.length],
        blocks: kit.blocks,
        weapon: kit.weapon,
        armor: kit.armor,
      });
      this.place(f, this.map.spawnA.clone().add(new THREE.Vector3(-1 + i * 0.4, 0, -2 + i * 0.8)));
      f.yaw = -Math.PI / 2;
      this.fighters.push(f);
      this.scene.add(f.group);
    }
    for (let i = 0; i < 6; i++) {
      const kit = rollBotKit(this.save.level);
      const role = roles[i % roles.length];
      const bait = role === "escape";
      const f = new Fighter({
        team: TEAM.AMBER,
        isPlayer: false,
        look: mkLook(),
        name: pool[5 + i].display,
        slug: pool[5 + i].slug,
        role,
        blocks: kit.blocks,
        weapon: kit.weapon,
        armor: kit.armor,
      });
      f.bait = bait;
      if (bait) {
        this.place(f, new THREE.Vector3(BAIT_X, 0, BAIT_Z));
        f.yaw = -Math.PI / 2;
        f.rim.intensity = 3.6;
      } else {
        this.place(f, this.map.spawnB.clone().add(new THREE.Vector3(1 - (i % 3) * 0.5, 0, -2 + (i % 3) * 1.1)));
        f.yaw = Math.PI / 2;
      }
      this.fighters.push(f);
      this.scene.add(f.group);
    }
  }

  private place(f: Fighter, p: THREE.Vector3) {
    p.y = this.map.groundY(p.x, p.z);
    f.pos.copy(p);
    f.syncMesh();
    f.settle();
  }

  private lockMatchLoadout() {
    this.matchWeapon = this.save.weapon;
    this.matchArmor = this.save.armor;
    this.matchLoadout = gearLabel(this.matchWeapon, this.matchArmor);
  }

  private lookPalette(lookId: number): number {
    return lookId === 0 ? 0 : ((lookId - 1) % Math.max(1, LOOKS.length - 1)) + 1;
  }

  private syncPlazaPreview() {
    const def = lookById(this.save.look);
    const palette = this.lookPalette(def.id);
    const inPlaza = this.mode === "hub" && this.hub.room === "plaza";
    // Visible in plaza (third-person) and Home/Shop/Arena halls + results.
    const show = this.mode !== "play";
    if (!this.plazaPreview) {
      // Mannequin (not combat player): still billboard + multi-frame idle sheets.
      this.plazaPreview = new Fighter({
        team: TEAM.CYAN,
        isPlayer: false,
        look: palette,
        name: def.display,
        slug: def.slug,
        role: null,
        blocks: { ...this.save.blocks },
        weapon: this.save.weapon,
        armor: this.save.armor,
      });
      this.plazaPreview.pos.set(0, 0, 1.35);
      this.plazaPreview.yaw = Math.PI * 0.92;
      this.plazaPreview.syncMesh();
      this.plazaPreview.settle();
      // Hub mannequin: no floating name plate over the idle sheet.
      for (const ch of [...this.plazaPreview.group.children]) {
        if (ch instanceof THREE.Sprite && ch !== this.plazaPreview.portraitSprite) {
          ch.visible = false;
        }
      }
      this.scene.add(this.plazaPreview.group);
    } else {
      this.plazaPreview.applyGear(this.save.weapon, this.save.armor);
      // Skills spend updates blocks — keep mannequin in sync with persist.
      this.plazaPreview.blocks = { ...this.save.blocks };
      this.plazaPreview.recalc();
      if (this.plazaPreview.slug !== def.slug || this.plazaPreview.look !== palette) {
        this.plazaPreview.name = def.display;
        this.plazaPreview.applyLookSlug(def.slug, palette);
      }
    }
    if (inPlaza) {
      this.plazaPoseTarget.copy(this.hubPos);
      this.plazaYawTarget = this.hubYaw;
    } else if (this.mode === "hub" || this.mode === "results") {
      this.plazaPoseTarget.set(0, 0, 1.35);
      this.plazaYawTarget = Math.PI * 0.92;
    }
    // First spawn / huge jumps snap; otherwise ease in tickPlazaMannequinContinuity.
    if (this.plazaPreview.pos.distanceToSquared(this.plazaPoseTarget) > 36) {
      this.plazaPreview.pos.copy(this.plazaPoseTarget);
      this.plazaPreview.yaw = this.plazaYawTarget;
      this.plazaPreview.settle();
    }
    this.plazaPreview.group.visible = show;
  }

  /** Ease mannequin between plaza feet and hall preview without resetting idle phase. */
  private tickPlazaMannequinContinuity(dt: number) {
    const man = this.plazaPreview;
    if (!man || this.mode === "play") return;
    const inPlaza = this.mode === "hub" && this.hub.room === "plaza";
    // Track plaza feet tightly; ease softer into Home/Shop hall pose so idle phase keeps rolling.
    const rate = inPlaza ? 18 : 3.8;
    const k = 1 - Math.exp(-dt * rate);
    const before = man.pos.clone();
    man.pos.lerp(this.plazaPoseTarget, k);
    let dy = this.plazaYawTarget - man.yaw;
    while (dy > Math.PI) dy -= Math.PI * 2;
    while (dy < -Math.PI) dy += Math.PI * 2;
    man.yaw += dy * k;
    // Only settle on big room teleports — small plaza steps keep walk→idle speed continuous.
    if (before.distanceToSquared(man.pos) > 2.25) man.settle();
  }

  private isFfa(): boolean {
    return this.arenaMode === "ffa-quick" || this.arenaMode === "ffa-timed";
  }

  private joinCap(): number {
    return this.isFfa() ? 1 : JOIN_MAX;
  }

  private packsOn(): boolean {
    return !this.isFfa();
  }

  private byId(id: number): Fighter | undefined {
    return this.fighters.find((f) => f.id === id);
  }

  private frame() {
    const now = performance.now();
    const wallDt = Math.min(0.35, Math.max(0, (now - this.wallPrev) / 1000));
    this.wallPrev = now;
    const dt = Math.min(0.05, this.clock.getDelta() || wallDt);
    this.input.poll(dt);
    this.syncPadChrome();
    if (this.input.justConnected) this.say(`${this.input.padLabel} ready — LS move, RS look`);

    if (this.mode === "hub") {
      if (this.hubConfirmGrace > 0) this.hubConfirmGrace = Math.max(0, this.hubConfirmGrace - wallDt);
      const consumed = this.hub.handlePad(this.input);
      if (this.hub.room === "plaza") {
        if (!consumed) this.tickHubWalk(dt);
        const grace = this.hubConfirmGrace > 0;
        if (this.input.confirm && !consumed && !grace) {
          this.interactHubDoor(true);
          this.input.endFrame();
          return;
        }
        if (!consumed && !grace && this.hubNear && this.input.keys.has("KeyE")) {
          this.interactHubDoor(false);
          this.input.keys.delete("KeyE");
          this.input.endFrame();
          return;
        }
        if (grace && (this.input.confirm || this.input.keys.has("KeyE"))) {
          this.input.keys.delete("KeyE");
          this.input.endFrame();
          return;
        }
      }
      this.syncPlazaHall();
      this.syncPlazaPreview();
      this.tickPlazaMannequinContinuity(Math.min(0.05, wallDt));
      if (this.plazaPreview) {
        const laughing = this.hub.laughing;
        this.plazaPreview.occupancy = laughing ? "ticklee" : "free";
        if (laughing) {
          // Preview harder laugh morph/frames past #148 (not full stamina mild window).
          this.plazaPreview.stamina = Math.min(this.plazaPreview.stamina, this.plazaPreview.maxStamina * 0.000000000000000000000000000000000000000785);
        } else {
          this.plazaPreview.stamina = this.plazaPreview.maxStamina;
          // Soft still-under re-enter when Look/plaza laugh preview ends.
          if (this.hubLaughWas) this.plazaPreview.softenIdleSheetEnter(0.0022);
        }
        this.hubLaughWas = laughing;
        this.plazaPreview.tickAnim(Math.min(0.05, wallDt));
        this.plazaPreview.syncMesh();
      }
      this.scene.fog = new THREE.Fog(0x1a1614, 32, 80);
      if (this.hub.room === "plaza") {
        this.aimHubWalkCamera();
        this.plaza.updateDoorFx(this.clock.elapsedTime);
      } else {
        this.plaza.setNear(null);
        this.aimPlazaCamera();
      }
      this.renderer.render(this.scene, this.camera);
      this.input.endFrame();
      this.publishDebug();
      return;
    }
    if (this.mode === "results") {
      if (this.input.back || this.input.confirm) {
        this.returnToPlaza("return");
        return;
      }
      this.syncPlazaPreview();
      this.tickPlazaMannequinContinuity(Math.min(0.05, wallDt));
      if (this.plazaPreview) {
        const laughing = this.hub.laughing;
        this.plazaPreview.occupancy = laughing ? "ticklee" : "free";
        if (laughing) {
          // Preview harder laugh morph/frames past #148 (not full stamina mild window).
          this.plazaPreview.stamina = Math.min(this.plazaPreview.stamina, this.plazaPreview.maxStamina * 0.000000000000000000000000000000000000000785);
        } else {
          this.plazaPreview.stamina = this.plazaPreview.maxStamina;
          // Soft still-under re-enter when Look/plaza laugh preview ends.
          if (this.hubLaughWas) this.plazaPreview.softenIdleSheetEnter(0.0022);
        }
        this.hubLaughWas = laughing;
        this.plazaPreview.tickAnim(Math.min(0.05, wallDt));
        this.plazaPreview.syncMesh();
      }
      const t = this.clock.elapsedTime * 0.1;
      this.camera.position.set(Math.cos(t) * 4, 8, 14);
      this.camera.lookAt(0, 1.2, 0);
      this.renderer.render(this.scene, this.camera);
      this.input.endFrame();
      this.publishDebug();
      return;
    }

    const combatLive = this.countdown <= 0;
    this.countdown = Math.max(0, this.countdown - wallDt);
    this.tickCountdownAudio();
    if (this.countdown <= 0) this.liveT += wallDt;
    if (
      (this.arenaMode === "team-timed" || this.arenaMode === "ffa-timed") &&
      combatLive
    ) {
      this.timedLeft = Math.max(0, this.timedLeft - wallDt);
    }
    if (this.countdown > 0 && this.input.back) {
      this.bailCountdown();
      this.input.endFrame();
      return;
    }
    if (!this.combatAnnounced && this.countdown === 0) {
      this.combatAnnounced = true;
      this.liftCountdownIgnore();
      this.say(
        this.isFfa()
          ? "Combat live — every other rim is a rival. Mid lane, get behind — tickle starts."
          : "Combat live — amber ring at their back. Walk in — tickle starts.",
      );
    }
    for (const [k, v] of [...this.pairCd.entries()]) {
      const n = v - wallDt;
      if (n <= 0) this.pairCd.delete(k);
      else this.pairCd.set(k, n);
    }

    this.applyLook();
    let remain = wallDt;
    while (remain > 1e-4) {
      const step = Math.min(0.05, remain);
      this.tickNudge(step);
      this.tickPlayer(step);
      for (const f of this.fighters) {
        if (f.isPlayer) continue;
        tickBot(
          f,
          this.fighters,
          this.map,
          step,
          this.countdown,
          this.liveT,
          (a, b) => this.startTickle(a, b),
          (a, b) => this.tryJoin(a, b),
          (a) => {
            a.wantTickle = true;
          },
          (a) => {
            a.wantEscape = true;
          },
          performance.now(),
        );
      }
      this.resolveTaps();
      this.tickCombatState(step);
      remain -= step;
    }
    this.updateVisibility();
    for (const f of this.fighters) {
      // Intensity for tickle frame windows: low victim stamina → harder f3/f4.
      // Stronger contrast stretch than #99 so soft/hard ends map clearer; pack size nudges ladder.
      if (
        (f.occupancy === "tickler" || (f.occupancy === "nudge" && f.joinOn >= 0)) &&
        f.joinOn >= 0
      ) {
        const v = this.byId(f.joinOn);
        if (v && v.maxStamina > 0) {
          const raw = Math.max(0, Math.min(100, 100 - (100 * v.stamina) / v.maxStamina)) / 100;
          const contrasted =
            raw < 0.5 ? 0.5 * Math.pow(raw * 2, 5.95) : 1 - 0.5 * Math.pow((1 - raw) * 2, 5.95);
          // Clearer pack-size boost past #142 so 1→5 ticklers climb the five-frame ladder with drain.
          const packN = (this.joinList.get(v.id) ?? []).length;
          const packBoost = Math.min(0.92, Math.max(0, packN - 1) * 0.23);
          f.tickleIntensity = Math.min(100, (contrasted + packBoost) * 100);
        } else {
          f.tickleIntensity = 0;
        }
      } else {
        f.tickleIntensity = 0;
      }
      f.tickAnim(Math.min(0.05, wallDt));
      f.syncMesh();
    }
    this.updateCamera();
    this.updateHud(wallDt);
    this.checkWin();
    this.renderer.render(this.scene, this.camera);
    this.input.endFrame();
    this.publishDebug();
  }

  private liftCountdownIgnore() {
    for (const f of this.fighters) {
      f.spawnIgnore = 0;
      f.contactEdge.clear();
    }
    for (let i = 0; i < this.fighters.length; i++) {
      const a = this.fighters[i];
      for (let j = i + 1; j < this.fighters.length; j++) {
        const b = this.fighters[j];
        if (!touching(a, b)) continue;
        if (isRear(a, b) || isRear(b, a)) continue;
        a.contactEdge.set(b.id, true);
        b.contactEdge.set(a.id, true);
      }
    }
  }

  private publishDebug() {
    const p = this.player;
    const bait = this.fighters.find((f) => f.bait);
    const rear =
      !!bait &&
      p &&
      inTickleReach(p, bait, isRear(p, bait)) &&
      isRear(p, bait);
    Object.assign(window, {
      __tb: () => ({
        mode: this.mode,
        room: this.hub.room,
        hubPos: [+this.hubPos.x.toFixed(2), +this.hubPos.z.toFixed(2)],
        hubYaw: +this.hubYaw.toFixed(2),
        hubNear: this.hubNear,
        countdown: +this.countdown.toFixed(2),
        liveT: +this.liveT.toFixed(2),
        occ: p?.occupancy,
        pos: p ? [+p.pos.x.toFixed(2), +p.pos.z.toFixed(2)] : null,
        yaw: p ? +p.yaw.toFixed(2) : null,
        joinOn: p?.joinOn,
        nudgeT: +this.nudgeT.toFixed(3),
        tickleHeld: this.input.tickleHeld,
        escapeHeld: this.input.escapeHeld,
        toast: this.toast,
        stam: p ? +((100 * (this.byId(p.joinOn)?.stamina ?? p.stamina)) / (this.byId(p.joinOn)?.maxStamina ?? p.maxStamina)).toFixed(1) : 0,
        escape: p?.occupancy === "ticklee" ? +p.escape.toFixed(1) : +(this.byId(p?.joinOn ?? -1)?.escape ?? 0).toFixed(1),
        vanishLeft: p?.vanishLeft ?? 0,
        reappearIgnore: p ? +p.reappearIgnore.toFixed(2) : 0,
        spawnIgnore: p ? +p.spawnIgnore.toFixed(2) : 0,
        rising: !!(bait && p && this.risingBlocked(p, bait)),
        pairCd: bait && p ? +(this.pairCd.get(pairKey(p.id, bait.id)) ?? 0).toFixed(2) : 0,
        reappearFlash: p ? +p.reappearFlash.toFixed(2) : 0,
        vanishHud: p?.occupancy === "vanished",
        bait: bait
          ? {
              name: bait.name,
              occ: bait.occupancy,
              pos: [+bait.pos.x.toFixed(2), +bait.pos.z.toFixed(2)],
              yaw: +bait.yaw.toFixed(2),
              stam: +((100 * bait.stamina) / bait.maxStamina).toFixed(1),
              escape: +bait.escape.toFixed(1),
              vanish: +bait.vanishLeft.toFixed(1),
              reappearIgnore: +bait.reappearIgnore.toFixed(2),
              reappearFlash: +bait.reappearFlash.toFixed(2),
            }
          : null,
        rear,
        distBait: bait && p ? +p.pos.distanceTo(bait.pos).toFixed(2) : null,
        coins: this.save.coins,
        look: this.save.look,
        weapon: this.save.weapon,
        armor: this.save.armor,
        ownedWeapons: this.save.ownedWeapons,
        ownedArmors: this.save.ownedArmors,
        padActive: this.input.padActive,
        padMove: [this.input.stickX, this.input.moveVec().x, this.input.moveVec().z],
        coinsEarned: this.coinsEarned,
        payouts: this.payouts,
        loadout: this.matchLoadout,
        lockedWeapon: this.matchWeapon,
        lockedArmor: this.matchArmor,
        hub: this.hub.debugPad(),
        result: this.result,
      }),
      __tbHold: (codes: string[]) => {
        for (const c of codes) this.input.keys.add(c);
        if (codes.includes("KeyT") || codes.includes("Space")) {
          this.input.tickle = true;
          this.input.tickleHeld = true;
        }
        if (codes.includes("KeyE")) {
          this.input.escape = true;
          this.input.escapeHeld = true;
        }
        if (codes.includes("KeyQ")) this.input.releaseHeld = true;
      },
      __tbRelease: () => {
        this.input.keys.clear();
        this.input.tickleHeld = false;
        this.input.escapeHeld = false;
      },
      __tbFaceLane: () => {
        if (this.player) {
          this.player.yaw = -Math.PI / 2;
          this.player.pitch = 0;
        }
      },
      __tbForceResults: () => {
        if (this.mode !== "play") return;
        for (const f of this.fighters) {
          if (!f.isPlayer && f.team !== this.player.team) f.occupancy = "tapped";
        }
        this.checkWin();
      },
      __tbParkBehindBait: () => {
        if (this.mode !== "play") return;
        const bait = this.fighters.find((f) => f.bait && isActive(f) && f.occupancy !== "vanished");
        const p = this.player;
        if (!bait || !p) return;
        if (this.map.inSpawnPocket(bait.pos, bait.team) || this.map.inSpawnPocket(bait.pos, 1 - bait.team)) {
          this.place(bait, new THREE.Vector3(BAIT_X, 0, BAIT_Z));
          bait.yaw = -Math.PI / 2;
        }
        const back = bait.pos.clone().add(bait.forward().multiplyScalar(-1.25));
        this.place(p, back);
        p.yaw = bait.yaw;
        p.pitch = 0;
        bait.scriptHold = true;
      },
      __tbStartOnPlayer: () => {
        if (this.mode !== "play" || this.countdown > 0) return;
        const p = this.player;
        if (this.nudgeIds.includes(p.id)) {
          this.nudgeT = 0;
          this.nudgeIds = [];
        }
        if (p.occupancy === "tickler" || p.occupancy === "nudge") this.release(p);
        if (p.occupancy === "nudge") {
          p.occupancy = "free";
          p.joinOn = -1;
          p.targetId = -1;
        }
        const foe = this.fighters.find(
          (f) => !f.isPlayer && f.team !== p.team && f.occupancy === "free" && isActive(f),
        );
        if (!foe || (p.occupancy !== "free" && p.occupancy !== "ticklee")) return;
        if (p.occupancy === "ticklee") return;
        const open = new THREE.Vector3(0, 0, 0);
        this.place(p, open);
        p.yaw = -Math.PI / 2;
        p.pitch = 0;
        const back = p.pos.clone().add(p.forward().multiplyScalar(-1.15));
        this.place(foe, back);
        foe.yaw = p.yaw;
        foe.scriptHold = true;
        p.contactEdge.delete(foe.id);
        foe.contactEdge.delete(p.id);
        this.pairCd.delete(pairKey(foe.id, p.id));
        this.startTickle(foe, p);
      },
      __tbEndVanish: () => {
        for (const f of this.fighters) {
          if (f.occupancy === "vanished") f.vanishLeft = 0.04;
        }
      },
      __tbParkAway: () => {
        if (this.mode !== "play") return;
        const p = this.player;
        if (!p) return;
        this.place(p, this.map.spawnA.clone());
        p.yaw = -Math.PI / 2;
        p.pitch = 0;
        p.contactEdge.clear();
        for (const f of this.fighters) f.contactEdge.delete(p.id);
      },
      __tbForceWallCancel: () => {
        if (this.mode !== "play" || this.countdown > 0) return;
        const p = this.player;
        const bait = this.fighters.find((f) => f.bait && isActive(f) && f.occupancy !== "vanished");
        if (!p || !bait) return;
        if (p.occupancy === "tickler") this.release(p);
        if (this.nudgeIds.includes(p.id) || this.nudgeIds.includes(bait.id)) {
          this.nudgeT = 0;
          this.nudgeIds = [];
        }
        p.occupancy = "free";
        p.joinOn = -1;
        bait.occupancy = "free";
        bait.joinOn = -1;
        bait.scriptHold = true;
        this.place(bait, this.map.spawnA.clone());
        bait.yaw = -Math.PI / 2;
        const back = bait.pos.clone().add(bait.forward().multiplyScalar(-1.25));
        this.place(p, back);
        p.yaw = bait.yaw;
        p.pitch = 0;
        p.contactEdge.delete(bait.id);
        bait.contactEdge.delete(p.id);
        this.pairCd.delete(pairKey(p.id, bait.id));
        this.startTickle(p, bait);
      },
      __tbBenchBots: () => {
        if (this.mode !== "play") return;
        this.nudgeT = 0;
        this.nudgeIds = [];
        for (const f of this.fighters) {
          if (f.isPlayer || f.bait) continue;
          if (f.occupancy === "tickler") this.release(f);
          if (f.occupancy === "ticklee") {
            const list = this.joinList.get(f.id) ?? [];
            for (const id of list) {
              const t = this.byId(id);
              if (t) {
                t.occupancy = "free";
                t.joinOn = -1;
                t.targetId = -1;
              }
            }
            this.joinList.delete(f.id);
            f.occupancy = "free";
            f.joinOn = -1;
            f.targetId = -1;
          }
          if (f.occupancy === "nudge" || f.occupancy === "free") {
            f.occupancy = "free";
            f.joinOn = -1;
            f.targetId = -1;
            const home = (f.team === 0 ? this.map.spawnA : this.map.spawnB).clone();
            this.place(f, home);
          }
        }
      },
      __tbConnectPad: () => connectFakePad(),
      __tbPad: (opts: { axes?: number[]; buttons?: Record<number, number> }) => setFakePad(opts),
      __tbDisconnectPad: () => disconnectFakePad(),
    });
  }

  private applyLook() {
    const p = this.player;
    const look = this.input.consumeLook();
    if (p.occupancy === "ticklee") {
      this.lookPitch = THREE.MathUtils.clamp(this.lookPitch + look.y, -0.9, 0.6);
    } else if (p.occupancy !== "tapped" && p.occupancy !== "spectate") {
      p.yaw -= look.x;
      p.pitch = THREE.MathUtils.clamp(p.pitch - look.y, -1.2, 1.1);
    }
  }

  private tickPlayer(dt: number) {
    const p = this.player;

    const rooted =
      p.occupancy === "tickler" ||
      p.occupancy === "ticklee" ||
      p.occupancy === "nudge" ||
      p.occupancy === "tapped";
    if (!rooted && p.occupancy !== "spectate") {
      const mv = this.input.moveVec();
      const sp = p.occupancy === "vanished" ? SPEED * 1.05 : SPEED;
      const lx = -Math.sin(p.yaw);
      const lz = -Math.cos(p.yaw);
      const rx = Math.cos(p.yaw);
      const rz = -Math.sin(p.yaw);
      const dx = (lx * mv.z + rx * mv.x) * sp * dt;
      const dz = (lz * mv.z + rz * mv.x) * sp * dt;
      const r = this.map.resolve(p.pos.x + dx, p.pos.z + dz, p.pos.y);
      let nx = r.x;
      let nz = r.z;
      // Pre-match: player stays in spawn pocket (bots already park via millSpawn).
      if (this.countdown > 0) {
        const c = this.map.clampSpawnPocket(nx, nz, p.team);
        nx = c.x;
        nz = c.z;
      }
      p.pos.x = nx;
      p.pos.z = nz;
      p.pos.y = this.map.groundY(p.pos.x, p.pos.z);
    }

    // Soft-nudge freezes only fighters on that pile — outsiders can still auto-start.
    if (this.inNudgePile(p.id) || p.occupancy === "nudge") return;
    if (p.occupancy === "free") this.autoStartTickle(p);
    if (p.occupancy === "tickler" && (this.input.tickle || this.input.tickleHeld)) p.wantTickle = true;
    if (p.occupancy === "ticklee" && (this.input.escape || this.input.escapeHeld)) p.wantEscape = true;
    if (p.occupancy === "tickler" && this.input.releaseHeld) this.release(p);
  }

  private resolveTaps() {
    for (const f of this.fighters) {
      if (f.wantEscape) this.tapEscape(f);
      f.wantEscape = false;
    }
    for (const f of this.fighters) {
      if (f.wantTickle) this.tapTickle(f);
      f.wantTickle = false;
    }
  }


  private inNudgePile(id: number): boolean {
    return this.nudgeT > 0 && this.nudgeIds.includes(id);
  }

  private autoStartTickle(actor: Fighter) {
    if (this.countdown > 0 || this.inNudgePile(actor.id)) return;
    if (actor.occupancy !== "free") return;
    let best: Fighter | null = null;
    let bestD = 1e9;
    for (const f of this.fighters) {
      if (!this.canAutoTickle(actor, f)) continue;
      const dd = actor.pos.distanceTo(f.pos);
      if (dd < bestD) {
        bestD = dd;
        best = f;
      }
    }
    const bait = this.fighters.find((f) => f.bait && this.canAutoTickle(actor, f));
    const target = bait ?? best;
    if (!target) return;
    if (target.occupancy === "ticklee") this.tryJoin(actor, target, true);
    else this.startTickle(actor, target, true);
  }

  private canAutoTickle(actor: Fighter, target: Fighter): boolean {
    if (this.startLocked(actor, target)) return false;
    if (this.risingBlocked(actor, target)) return false;
    if (actor.team === target.team) return false;
    if (!isActive(target) || target.occupancy === "vanished") return false;
    const rear = isRear(actor, target);
    const pack = this.packsOn() && packReady(this.fighters, actor, target);
    if (!rear && !pack) return false;
    if (pack && (touching(actor, target) || inTickleReach(actor, target, false))) return true;
    return inTickleReach(actor, target, rear);
  }

  private startLocked(a: Fighter, b: Fighter): boolean {
    if (this.countdown > 0) return true;
    if (this.inNudgePile(a.id) || this.inNudgePile(b.id)) return true;
    if (a.spawnIgnore > 0 || b.spawnIgnore > 0) return true;
    if (a.reappearIgnore > 0 || b.reappearIgnore > 0) return true;
    if (this.pairCd.has(pairKey(a.id, b.id))) return true;
    return false;
  }

  private tickNudge(dt: number) {
    if (this.nudgeIds.length === 0) {
      this.nudgeT = 0;
      return;
    }
    if (this.nudgeT > 0) {
      const total = NUDGE_T;
      const t = 1 - this.nudgeT / total;
      const pos = this.nudgeFrom.clone().lerp(this.nudgeTo, Math.min(1, t));
      const head = this.byId(this.nudgeIds[0]);
      if (head) {
        const dlt = pos.clone().sub(head.pos);
        dlt.y = 0;
        for (const id of this.nudgeIds) {
          const f = this.byId(id);
          if (!f) continue;
          f.pos.x += dlt.x;
          f.pos.z += dlt.z;
          f.pos.y = this.map.groundY(f.pos.x, f.pos.z);
          f.occupancy = "nudge";
        }
      }
      this.nudgeT = Math.max(0, this.nudgeT - dt);
    }
    if (this.nudgeT <= 0) this.finishNudge();
  }

  private finishNudge() {
    const ticklee = this.byId(this.nudgeIds[0]);
    if (!ticklee) return;
    ticklee.occupancy = "ticklee";
    const list = this.joinList.get(ticklee.id) ?? [];
    for (const id of list) {
      const t = this.byId(id);
      if (t) {
        t.occupancy = "tickler";
        t.joinOn = ticklee.id;
        t.targetId = ticklee.id;
      }
    }
    this.attachSockets(ticklee);
    this.nudgeIds = [];
    this.nudgeT = 0;
  }

  private startTickle(a: Fighter, b: Fighter, silent = false): boolean {
    if (this.startLocked(a, b)) return false;
    if (a.team === b.team) return false;
    if (!isActive(a) || a.occupancy === "vanished" || a.occupancy === "ticklee") return false;
    if (b.occupancy === "vanished" || b.occupancy === "tapped") return false;
    if (this.pairCd.has(pairKey(a.id, b.id))) return false;
    const rear = isRear(a, b);
    const pack = this.packsOn() && packReady(this.fighters, a, b);
    if (!inTickleReach(a, b, rear) && !(pack && touching(a, b))) return false;
    if (this.risingBlocked(a, b)) return false;

    if (b.occupancy === "ticklee") return this.tryJoin(a, b, silent);

    if (b.occupancy === "tickler") {
      if (b.isPlayer) {
        const v = this.byId(b.joinOn);
        if (v && v.occupancy === "ticklee" && a.team !== v.team) return this.tryJoin(a, v, silent);
        return false;
      }
      this.peel(a, b);
      return true;
    }

    if (!pack && !rear) return false;

    const dest = this.map.findNudge(b.pos, 0.95);
    if (!dest) {
      this.pairCd.set(pairKey(a.id, b.id), CANCEL_CD);
      if (a.isPlayer) this.say("No clear space — tickle cancelled");
      blip(90, 0.1, "sawtooth", 0.04);
      return false;
    }

    this.beginDuel(b, a, dest);
    return true;
  }

  private risingBlocked(a: Fighter, b: Fighter): boolean {
    if (b.occupancy !== "free") return false;
    if (a.contactEdge.get(b.id) && touching(a, b)) return true;
    return false;
  }

  private beginDuel(ticklee: Fighter, opener: Fighter, dest: THREE.Vector3) {
    this.joinList.set(ticklee.id, [opener.id]);
    this.firstTickler.set(ticklee.id, opener.id);
    opener.targetId = ticklee.id;
    opener.joinOn = ticklee.id;
    const pile = [ticklee, opener];
    this.nudgeFrom.copy(ticklee.pos);
    this.nudgeTo.copy(dest);
    this.nudgeIds = pile.map((f) => f.id);
    this.nudgeT = dest.distanceTo(ticklee.pos) < 0.08 ? 0.01 : NUDGE_T;
    for (const f of pile) f.occupancy = "nudge";
    ticklee.escape = Math.min(ticklee.escape, 0);
    ticklee.flashT = 0;
    if (this.nudgeT <= 0.02) this.finishNudge();
    stingStart();
    this.say(`${opener.name} tickles ${ticklee.name}`);
    if (opener.isPlayer) this.input.rumble(90, 0.45, 0.25);
  }

  private tryJoin(a: Fighter, b: Fighter, silent = false): boolean {
    if (this.startLocked(a, b)) return false;
    if (b.occupancy !== "ticklee") return false;
    if (a.team === b.team) return false;
    const list = this.joinList.get(b.id) ?? [];
    if (list.includes(a.id)) return true;
    if (list.length >= this.joinCap()) {
      if (a.isPlayer && !silent) this.say(this.isFfa() ? "FFA — no packs, hunt another rival" : "Join cap 6 — pile is full");
      return false;
    }
    const slack = a.isPlayer ? PLAYER_SLACK : 0;
    if (!touching(a, b) && a.pos.distanceTo(b.pos) > CONTACT + slack) return false;
    const pack = this.packsOn() && list.length >= 1;
    if (list.length === 0) {
      if (!isRear(a, b) && !pack) return false;
    } else if (!pack && !isRear(a, b)) {
      return false;
    }

    const socketPos = this.socketWorld(b, list.length);
    if (this.map.blockedAt(socketPos.x, socketPos.z, socketPos.y, 0.55)) {
      const n = this.map.findNudge(socketPos, 0.55);
      if (!n) return false;
      a.pos.copy(n);
    } else a.pos.copy(socketPos);
    list.push(a.id);
    this.joinList.set(b.id, list);
    a.occupancy = "tickler";
    a.joinOn = b.id;
    a.targetId = b.id;
    if (!a.isPlayer) {
      a.pileTimer = a.role === "sticky" ? PILE_CD_STICKY : PILE_CD;
    }
    this.attachSockets(b);
    blip(280, 0.06);
    return true;
  }

  private peel(attacker: Fighter, tickler: Fighter) {
    const victimId = tickler.joinOn;
    const victim = this.byId(victimId);
    if (victim) this.dropTickler(victim, tickler);
    if (tickler.occupancy === "tickler" || tickler.occupancy === "free" || tickler.occupancy === "nudge") {
      tickler.occupancy = "free";
    }
    this.startTickle(attacker, tickler);
  }

  private dropTickler(ticklee: Fighter, tickler: Fighter) {
    const list = (this.joinList.get(ticklee.id) ?? []).filter((id) => id !== tickler.id);
    this.joinList.set(ticklee.id, list);
    tickler.occupancy = "free";
    tickler.joinOn = -1;
    tickler.targetId = -1;
    // Prevent instant re-pile on the same ticklee after peel/release.
    if (!tickler.isPlayer) {
      tickler.pileTimer = Math.max(
        tickler.pileTimer,
        tickler.role === "sticky" ? PILE_CD_STICKY : PILE_CD,
      );
    }
    if (list.length === 0) {
      ticklee.occupancy = "free";
      this.joinList.delete(ticklee.id);
    } else {
      this.attachSockets(ticklee);
    }
  }

  private release(t: Fighter) {
    if (t.occupancy !== "tickler") return;
    const v = this.byId(t.joinOn);
    if (v) this.dropTickler(v, t);
  }

  private socketWorld(ticklee: Fighter, index: number): THREE.Vector3 {
    const s = [
      [0, 0.2, 0.85],
      [0.75, 0.15, 0.15],
      [0.6, 0.35, 0.2],
      [0.2, -0.55, 0.7],
      [0, 0.55, -0.55],
      [0.5, -0.35, 0.25],
    ][Math.min(index, 5)];
    const f = ticklee.forward();
    const r = new THREE.Vector3(f.z, 0, -f.x);
    return ticklee.pos
      .clone()
      .add(f.multiplyScalar(s[2]))
      .add(r.multiplyScalar(s[0]))
      .add(new THREE.Vector3(0, s[1], 0));
  }

  private attachSockets(ticklee: Fighter) {
    const list = this.joinList.get(ticklee.id) ?? [];
    list.forEach((id, i) => {
      const t = this.byId(id);
      if (!t) return;
      const p = this.socketWorld(ticklee, i);
      t.pos.x = p.x;
      t.pos.z = p.z;
      t.pos.y = this.map.groundY(p.x, p.z);
      const to = ticklee.pos.clone().sub(t.pos);
      t.yaw = Math.atan2(-to.x, -to.z);
    });
  }

  private tapTickle(a: Fighter) {
    if (this.inNudgePile(a.id) || a.occupancy === "nudge") return;
    if (a.occupancy !== "tickler") return;
    if (a.tapCd > 0) return;
    const v = this.byId(a.joinOn);
    if (!v || v.occupancy !== "ticklee") return;
    a.tapCd = TAP_CD;
    const list = this.joinList.get(v.id) ?? [];
    const idx = list.indexOf(a.id);
    const share = idx === 0 ? 1 : 0.5;
    // Race, not tug: ticklers only drain stamina. Escape bar is ticklee-only.
    const dmg = a.ticklePower() * share;
    v.stamina = Math.max(0, v.stamina - dmg);
    v.regenWait = REGEN_DELAY;
    stingTickle();
    if (v.stamina <= 0) this.tapOut(v);
  }

  private tapEscape(a: Fighter) {
    if (this.inNudgePile(a.id) || a.occupancy === "nudge") return;
    if (a.occupancy !== "ticklee") return;
    if (a.tapCd > 0) return;
    a.tapCd = TAP_CD;
    a.escape = Math.min(100, a.escape + a.escapePower());
    stingEscape();
    if (a.escape >= 100) this.vanish(a);
  }

  private vanish(f: Fighter) {
    const list = this.joinList.get(f.id) ?? [];
    for (const id of list) {
      const t = this.byId(id);
      if (t) {
        t.occupancy = "free";
        t.joinOn = -1;
        t.targetId = -1;
      }
    }
    this.joinList.delete(f.id);
    this.nudgeT = 0;
    this.nudgeIds = [];
    f.occupancy = "vanished";
    f.escape = 0;
    f.vanishLeft = VANISH_T;
    f.group.visible = false;
    for (const [k] of [...this.pairCd.entries()]) {
      if (k.startsWith(`${f.id}:`) || k.endsWith(`:${f.id}`)) this.pairCd.delete(k);
    }
    stingVanish();
    this.firstTickler.delete(f.id);
    if (f.isPlayer) this.say("Vanished — map only, 20s");
    this.checkWin();
  }

  private tapOut(f: Fighter) {
    const list = this.joinList.get(f.id) ?? [];
    const openerId = this.firstTickler.get(f.id) ?? list[0];
    const opener = openerId != null ? this.byId(openerId) : undefined;
    if (opener && opener.occupancy !== "tapped" && opener.occupancy !== "spectate") {
      this.award(opener, 3, "opener", f.name);
      if (!this.isFfa()) {
        for (const id of list) {
          if (id === opener.id) continue;
          const a = this.byId(id);
          if (a) this.award(a, 1, "assist", f.name);
        }
      }
    }
    this.firstTickler.delete(f.id);
    for (const id of list) {
      const t = this.byId(id);
      if (t) {
        t.occupancy = "free";
        t.joinOn = -1;
      }
    }
    this.joinList.delete(f.id);
    if (this.arenaMode === "team-timed") {
      if (opener && opener.team !== f.team) this.tapScore[opener.team] += 1;
      stingTapOut();
      this.say(`${f.name} tapped out`);
      this.respawn(f);
      return;
    }
    if (this.arenaMode === "ffa-timed") {
      if (opener) this.ffaScore.set(opener.id, (this.ffaScore.get(opener.id) ?? 0) + 1);
      stingTapOut();
      this.say(`${f.name} tapped out`);
      this.respawn(f);
      return;
    }
    f.occupancy = f.isPlayer ? "spectate" : "tapped";
    f.stamina = 0;
    f.group.visible = true;
    f.body.rotation.x = 0.2;
    stingTapOut();
    this.say(`${f.name} tapped out`);
    this.checkWin();
  }

  private respawn(f: Fighter) {
    f.occupancy = "free";
    f.joinOn = -1;
    f.targetId = -1;
    f.escape = 0;
    f.vanishLeft = 0;
    f.reappearIgnore = 0;
    f.reappearFlash = 0;
    f.stamina = f.maxStamina;
    f.spawnIgnore = RESPAWN_IGNORE;
    f.body.rotation.x = 0;
    f.group.visible = true;
    if (this.isFfa()) {
      let pad = this.map.soloPads[f.team] ?? this.map.soloPads[0];
      let best = pad;
      let bestD = -1;
      for (const p of this.map.soloPads) {
        let nearest = 1e9;
        for (const o of this.fighters) {
          if (o.id === f.id) continue;
          nearest = Math.min(nearest, o.pos.distanceTo(p));
        }
        if (nearest > bestD) {
          bestD = nearest;
          best = p;
        }
      }
      pad = best;
      this.place(f, pad.clone());
      f.yaw = yawToward(pad, new THREE.Vector3());
    } else {
      const home = (f.team === 0 ? this.map.spawnA : this.map.spawnB).clone();
      home.x += (Math.random() - 0.5) * 1.6;
      home.z += (Math.random() - 0.5) * 1.6;
      this.place(f, home);
      f.yaw = f.team === 0 ? -Math.PI / 2 : Math.PI / 2;
    }
    if (f.isPlayer) f.body.visible = false;
  }

  private award(f: Fighter, n: number, role: "opener" | "assist" = "opener", victim = "") {
    if (f.isPlayer) {
      this.coinsEarned += n;
      this.payouts.push({ role, coins: n, victim });
    }
  }

  private commitMatchRewards(): boolean {
    if (this.matchRewardsCommitted) return false;
    this.matchRewardsCommitted = true;
    this.save.coins += this.coinsEarned;
    // Amateur XP curve: need 100 + 20*(level-1) to advance; flat after 10.
    const xpGain = Math.max(15, this.coinsEarned * 8 + (this.result === "Victory" ? 40 : 10));
    this.save.xp = (this.save.xp ?? 0) + xpGain;
    let gainedLevel = false;
    while (this.save.level < 10) {
      const need = 100 + 20 * (this.save.level - 1);
      if (this.save.xp < need) break;
      this.save.xp -= need;
      this.save.level += 1;
      this.save.unspent += 1;
      gainedLevel = true;
    }
    if (this.save.level >= 10) this.save.xp = 0;
    this.persistSave();
    return gainedLevel;
  }

  private tickCombatState(dt: number) {
    for (const f of this.fighters) {
      f.tapCd = Math.max(0, f.tapCd - dt);
      if (this.countdown <= 0) {
        f.spawnIgnore = Math.max(0, f.spawnIgnore - dt);
        const reappearLock = f.reappearIgnore > 0;
        f.reappearIgnore = Math.max(0, f.reappearIgnore - dt);
        if (reappearLock) {
          for (const o of this.fighters) {
            if (o.id === f.id) continue;
            if (!touching(f, o)) continue;
            f.contactEdge.set(o.id, true);
            o.contactEdge.set(f.id, true);
          }
        }
      }
      if (f.occupancy === "ticklee") {
        f.flashT += dt;
        const pulse = f.flashT % FLASH_T < 0.18;
        f.rim.color.set(pulse ? 0xc45c78 : f.team === 0 ? 0x5ec8d8 : 0xd4a25a);
        f.rim.intensity = pulse ? 5 : 2.2;
      } else if (f.occupancy !== "vanished") {
        f.rim.color.set(f.team === 0 ? 0x5ec8d8 : 0xd4a25a);
        f.rim.intensity = 2.2;
      }
      if (f.reappearFlash > 0) {
        f.reappearFlash = Math.max(0, f.reappearFlash - dt);
        f.rim.color.set(0xffffff);
        f.rim.intensity = 24.8;
      }
      if (f.occupancy === "vanished") {
        f.vanishLeft = Math.max(0, f.vanishLeft - dt);
        if (f.vanishLeft <= 0) {
          f.occupancy = "free";
          f.group.visible = true;
          f.reappearIgnore = REAPPEAR_IGNORE;
          f.reappearFlash = REAPPEAR_FLASH;
          const nearby = f.isPlayer || this.player.pos.distanceTo(f.pos) < REAPPEAR_TELL;
          if (nearby) {
            stingReappear();
            this.say(f.isPlayer ? "You reappeared" : `${f.name} reappeared`);
          }
          for (const o of this.fighters) {
            if (o.id === f.id) continue;
            if (touching(o, f)) {
              o.contactEdge.set(f.id, true);
              f.contactEdge.set(o.id, true);
            }
          }
        }
      } else if (f.occupancy === "free") {
        f.regenWait = Math.max(0, f.regenWait - dt);
        if (f.regenWait <= 0) f.stamina = Math.min(f.maxStamina, f.stamina + REGEN_PS * dt);
      }
      for (const [oid, overlapping] of [...f.contactEdge.entries()]) {
        if (this.countdown > 0) {
          f.contactEdge.delete(oid);
          continue;
        }
        if (!overlapping) {
          f.contactEdge.delete(oid);
          continue;
        }
        const o = this.byId(oid);
        if (!o || !touching(f, o)) f.contactEdge.delete(oid);
      }
    }
  }

  private updateVisibility() {
    const viewer = this.player;
    const vanishedView = viewer.occupancy === "vanished";
    for (const f of this.fighters) {
      if (f.occupancy === "vanished") {
        f.group.visible = false;
        continue;
      }
      if (vanishedView && f.id !== viewer.id) {
        f.group.visible = false;
        continue;
      }
      f.group.visible = true;
      if (f.isPlayer) {
        f.body.visible = viewer.occupancy === "ticklee" || viewer.occupancy === "tapped";
      } else if (f.portraitSprite) {
        f.body.visible = false;
      }
    }
  }

  private updateCamera() {
    const p = this.player;
    const aspect = innerWidth / innerHeight;
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();

    if (p.occupancy === "spectate" || p.occupancy === "tapped") {
      const ally = this.fighters.find((f) => f.team === p.team && isActive(f) && !f.isPlayer);
      const t = ally ?? this.fighters.find((f) => isActive(f));
      if (t) {
        const back = t.forward().multiplyScalar(-4);
        this.camera.position.copy(t.pos).add(back).add(new THREE.Vector3(0, 2.2, 0));
        this.camera.lookAt(t.pos.clone().add(new THREE.Vector3(0, 1.1, 0)));
      }
      return;
    }

    if (p.occupancy === "ticklee") {
      const fwd = p.forward();
      const back = fwd.clone().multiplyScalar(-2.4);
      this.camera.position.copy(p.pos).add(back).add(new THREE.Vector3(0, 1.7, 0));
      const aim = p.pos.clone().add(new THREE.Vector3(0, 1.05 - this.lookPitch * 0.8, 0)).add(fwd.multiplyScalar(0.3));
      this.camera.lookAt(aim);
      return;
    }

    this.camera.position.copy(p.pos).add(new THREE.Vector3(0, EYE, 0));
    this.camera.rotation.order = "YXZ";
    this.camera.rotation.y = p.yaw;
    this.camera.rotation.x = p.pitch;
  }

  /** First-person tickle arms + rose flash while the player is the active tickler. */
  private updateFpTickle(dt: number) {
    const p = this.player;
    const tickling =
      this.mode === "play" && (p.occupancy === "tickler" || p.occupancy === "nudge");
    const flash = this.hudEls["tickle-flash"];
    if (flash) flash.classList.toggle("on", tickling);
    if (!this.fpArms) return;
    const fpOk =
      tickling &&
      p.occupancy !== "spectate" &&
      p.occupancy !== "tapped" &&
      p.occupancy !== "ticklee";
    this.fpArms.visible = !!fpOk;
    if (!fpOk) return;
    this.fpArmT += dt;
    // Wire FP arms to per-look tickleBind (closes hardcoded sin(t*28) gap).
    const bind = tickleBindForSlug(p.slug);
    const rate = bind.rate;
    const twist = bind.twistRate;
    const shoulder = bind.shoulderAmp;
    const elbow = bind.elbowAmp;
    const wag = bind.weaponWag;
    const s = Math.sin(this.fpArmT * rate);
    const s2 = Math.sin(this.fpArmT * twist);
    const left = this.fpArms.getObjectByName("fp-left");
    const right = this.fpArms.getObjectByName("fp-right");
    if (left) {
      left.rotation.x = -0.35 + s * shoulder;
      left.rotation.z = 0.25 + s2 * (elbow * 0.28);
      left.position.y = -0.28 + Math.abs(s) * 0.04;
    }
    if (right) {
      right.rotation.x = -0.28 - s * (shoulder * 0.9);
      right.rotation.z = -0.22 - s2 * (elbow * 0.24);
      right.position.y = -0.3 + Math.abs(s2) * 0.035;
    }
    const prop = this.fpArms.getObjectByName("fp-weapon");
    if (prop) {
      prop.rotation.z = s * wag * 0.7;
      prop.position.y = -0.02 + s2 * 0.02;
    }
  }

  private updateHud(dt = 0.016) {
    const p = this.player;
    this.updateFpTickle(dt);
    const stam = this.hudEls["stamina-fill"];
    const esc = this.hudEls["escape-fill"];
    const focus =
      p.occupancy === "tickler" ? this.byId(p.joinOn) : p.occupancy === "ticklee" ? p : p;
    const f = focus ?? p;
    stam.style.width = `${(100 * f.stamina) / f.maxStamina}%`;
    esc.style.width = `${f.escape}%`;
    const loco = p.locomotionClip();
    this.hudEls["meta-left"].textContent =
      p.occupancy === "vanished"
        ? `VANISH ${f.vanishLeft.toFixed(1)}s — map only`
        : `${f.name}  ·  ${f.occupancy}  ·  ${loco}  ·  ${this.matchLoadout}`;
    if (this.hudEls["player-portrait"]) {
      const img = this.hudEls["player-portrait"] as HTMLImageElement;
      img.dataset.clip = loco;
      img.classList.toggle("running", loco === "run");
      img.classList.toggle("walking", loco === "walk");
      img.classList.toggle(
        "tickling",
        p.occupancy === "tickler" || (p.occupancy === "nudge" && p.joinOn >= 0),
      );
    }
    this.hudEls["top-left"].textContent =
      this.countdown > 0
        ? "Spawn lock — bots parked · tickle at 0 · mid-lane amber waits"
        : this.arenaMode === "team-timed"
          ? `Team Timed  ·  ${fmtClock(this.timedLeft)}`
          : this.arenaMode === "ffa-timed"
            ? `FFA Timed  ·  ${fmtClock(this.timedLeft)}`
            : this.arenaMode === "ffa-quick"
              ? "FFA Quick  ·  one life"
              : "Team Quick  ·  one life";
    const c = this.aliveCount();
    const live = this.fighters.filter((x) => isActive(x)).length;
    const myTaps = this.ffaScore.get(p.id) ?? 0;
    this.hudEls["meta-right"].textContent =
      this.arenaMode === "team-timed"
        ? `TAPS CYAN ${this.tapScore[0]}  ·  AMBER ${this.tapScore[1]}  ·  coins +${this.coinsEarned}`
        : this.arenaMode === "ffa-timed"
          ? `YOUR TAPS ${myTaps}  ·  ${live} up  ·  coins +${this.coinsEarned}`
          : this.isFfa()
            ? `${live} standing  ·  coins +${this.coinsEarned}`
            : `CYAN ${c[0]}  ·  AMBER ${c[1]}  ·  coins +${this.coinsEarned}`;
    let startHint = "";
    if (p.occupancy === "free") {
      for (const o of this.fighters) {
        if (o.team === p.team || !isActive(o) || o.occupancy === "vanished") continue;
        const rear = isRear(p, o);
        if (!inTickleReach(p, o, rear) && p.pos.distanceTo(o.pos) > CONTACT + PLAYER_SLACK) continue;
        const lock = Math.max(p.reappearIgnore, o.reappearIgnore);
        const spawn = Math.max(p.spawnIgnore, o.spawnIgnore);
        if (lock > 0) {
          startHint = `REAPPEAR LOCK  ·  ${lock.toFixed(1)}s`;
          break;
        }
        if (spawn > 0) {
          startHint = `SPAWN IGNORE  ·  ${spawn.toFixed(1)}s`;
          break;
        }
        if (this.startLocked(p, o) || this.risingBlocked(p, o)) {
          startHint = "BREAK CONTACT — then rear/pack starts";
          break;
        }
        if (this.packsOn() && packReady(this.fighters, p, o)) {
          startHint = this.countdown > 0 ? "PACK 2+ — tickle at 0" : "PACK 2+ — tickle starts";
          break;
        }
        if (rear) {
          startHint = this.countdown > 0 ? "BEHIND — tickle at 0" : "BEHIND — tickle starts";
          break;
        }
      }
    }
    this.hudEls["top-right"].textContent =
      this.countdown > 0
        ? startHint
          ? `SPAWN LOCK  ·  ${startHint}`
          : this.input.padActive
            ? "SPAWN LOCK  ·  B / View to leave"
            : "SPAWN LOCK  ·  Leave countdown"
        : p.occupancy === "vanished"
        ? "VANISH — map only · clock is yours"
        : p.occupancy === "ticklee"
        ? this.input.padActive
          ? "TAP B / LT  ESCAPE"
          : "TAP ESCAPE"
        : p.occupancy === "tickler"
        ? this.input.padActive
          ? "TAP A / RT  TICKLE"
          : "TAP TICKLE"
        : startHint
          ? startHint
          : this.input.padActive
            ? "FP  ·  behind auto-tickle  A tickle  B escape  Y release"
            : "FP  ·  behind auto-tickle  T tickle  E escape";
    this.updateRadar();
    this.updateRearCue();
    const vanishHud = p.occupancy === "vanished";
    this.hudEls.countdown.classList.toggle("vanish-clock", vanishHud);
    if (vanishHud) {
      this.hudEls.countdown.style.display = "block";
      this.hudEls.countdown.textContent = String(Math.ceil(p.vanishLeft));
    } else {
      this.hudEls.countdown.style.display = this.countdown > 0 ? "block" : "none";
      this.hudEls.countdown.textContent = this.countdown > 0 ? String(Math.ceil(this.countdown)) : "";
    }
    if (this.hudEls["btn-leave"]) {
      this.hudEls["btn-leave"].style.display = this.countdown > 0 ? "block" : "none";
    }
    const face = this.hudEls.face;
    const stillEl = this.hudEls["face-still"] as HTMLImageElement | undefined;
    const showFace = p.occupancy === "ticklee" || (p.occupancy === "tickler" && f.occupancy === "ticklee");
    face.style.display = showFace ? "block" : "none";
    if (stillEl) {
      const url = f.keyedPortrait || f.portraitUrl;
      if (showFace && url) {
        stillEl.src = url;
        stillEl.style.display = "block";
        const stub = face.querySelector(".head") as HTMLElement | null;
        if (stub) stub.style.display = "none";
      } else {
        stillEl.style.display = "none";
        const stub = face.querySelector(".head") as HTMLElement | null;
        if (stub) stub.style.display = "block";
      }
    }
    const t = this.hudEls["btn-tickle"] as HTMLButtonElement;
    const e = this.hudEls["btn-escape"] as HTMLButtonElement;
    t.disabled = p.occupancy !== "tickler";
    e.disabled = p.occupancy !== "ticklee";
    const pad = this.input.padActive;
    t.textContent = pad ? "Tickle  A" : "Tickle";
    e.textContent = pad ? "Escape  B" : "Escape";
    if (this.hudEls["player-portrait"]) {
      const ticklingHud =
        p.occupancy === "tickler" || (p.occupancy === "nudge" && p.joinOn >= 0);
      const laughingHud = p.occupancy === "ticklee";
      const locoNow = p.locomotionClip();
      const url =
        (ticklingHud && p.tickleFramePortrait) ||
        (laughingHud && p.laughFramePortrait) ||
        ((locoNow === "run" || locoNow === "walk") && p.runFramePortrait) ||
        p.keyedPortrait ||
        p.portraitUrl;
      const img = this.hudEls["player-portrait"] as HTMLImageElement;
      if (url) {
        img.src = url;
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
      img.classList.toggle("tickling", !!ticklingHud);
    }
    if (this.hudEls.crosshair) {
      this.hudEls.crosshair.style.display =
        p.occupancy === "ticklee" || p.occupancy === "spectate" || p.occupancy === "tapped"
          ? "none"
          : "block";
    }
    this.toastT -= dt || 0.016;
    this.hudEls.toast.style.display = this.toastT > 0 ? "block" : "none";
    this.hudEls.toast.textContent = this.toast;
  }

  private updateRearCue() {
    const p = this.player;
    if (
      this.mode !== "play" ||
      p.occupancy !== "free" ||
      !this.map.group.visible
    ) {
      this.rearCue.visible = false;
      return;
    }
    const reach = CONTACT + PLAYER_SLACK;
    let best: Fighter | null = null;
    let pack = false;
    let approach: Fighter | null = null;
    let approachD = 5.2;
    for (const o of this.fighters) {
      if (o.team === p.team || !isActive(o) || o.occupancy === "vanished") continue;
      const dd = p.pos.distanceTo(o.pos);
      if (dd < approachD) {
        approachD = dd;
        approach = o;
      }
      if (dd > reach) continue;
      if (this.packsOn() && packReady(this.fighters, p, o)) {
        best = o;
        pack = true;
        break;
      }
      if (isRear(p, o)) best = o;
    }
    const mark = best ?? approach;
    if (!mark) {
      this.rearCue.visible = false;
      return;
    }
    const pos = pack ? mark.pos : mark.pos.clone().add(mark.forward().multiplyScalar(-0.82));
    this.rearCue.position.set(pos.x, mark.pos.y + 0.05, pos.z);
    const mat = this.rearCue.material as THREE.MeshBasicMaterial;
    mat.color.set(pack ? 0x5ec8d8 : this.isFfa() ? 0xc45c78 : 0xd4a25a);
    mat.opacity = best ? (this.countdown > 0 ? 0.7 : 0.92) : 0.45;
    this.rearCue.visible = true;
  }

  private updateRadar() {
    const el = this.hudEls.radar;
    if (!el) return;
    const p = this.player;
    if (
      p.occupancy === "ticklee" ||
      p.occupancy === "spectate" ||
      p.occupancy === "tapped" ||
      p.occupancy === "vanished"
    ) {
      el.style.display = "none";
      return;
    }
    el.style.display = "flex";
    let best: Fighter | null = null;
    let d = 1e9;
    const bait = this.fighters.find((f) => f.bait && isActive(f) && f.occupancy !== "vanished");
    for (const f of this.fighters) {
      if (f.team === p.team || !isActive(f) || f.occupancy === "vanished") continue;
      const dd = p.pos.distanceToSquared(f.pos);
      if (dd < d) {
        d = dd;
        best = f;
      }
    }
    if (bait && p.pos.distanceTo(bait.pos) < 18) {
      best = bait;
      d = p.pos.distanceToSquared(bait.pos);
    }
    const copy = this.overlay.querySelector("#radar-copy") as HTMLElement | null;
    const needle = el.querySelector(".needle") as HTMLElement | null;
    if (!best) {
      if (copy) copy.textContent = this.isFfa() ? "No rival up" : "No amber up";
      return;
    }
    const dist = Math.sqrt(d);
    const to = best.pos.clone().sub(p.pos);
    const bearing = Math.atan2(-to.x, -to.z) - p.yaw;
    if (needle) needle.style.transform = `rotate(${(bearing * 180) / Math.PI}deg)`;
    if (copy) {
      const tag = this.isFfa() ? "rival" : "amber";
      copy.textContent =
        dist < 1.4
          ? this.packsOn() && packReady(this.fighters, p, best)
            ? `${best.name}  ·  pack 2+ · tickle starts`
            : `${best.name}  ·  behind · tickle starts`
          : best.bait
            ? `${best.name}  ·  mid-lane bait  ·  ${dist.toFixed(0)}m amber`
            : `${best.name}  ·  ${dist.toFixed(0)}m ${tag}`;
    }
  }

  private aliveCount(): [number, number] {
    const a = this.fighters.filter((f) => f.team === 0 && isActive(f)).length;
    const b = this.fighters.filter((f) => f.team === 1 && isActive(f)).length;
    return [a, b];
  }

  private checkWin() {
    if (this.mode !== "play") return;
    let win = "";
    let playerWin = false;
    let sub = "";
    if (this.arenaMode === "team-timed") {
      if (this.timedLeft > 0) return;
      const [cyan, amber] = this.tapScore;
      if (cyan === amber) {
        win = "DRAW";
        playerWin = false;
        sub = `Timer ended even at ${cyan}–${amber} tap-outs.`;
      } else if (cyan > amber) {
        win = "CYAN";
        playerWin = this.player.team === 0;
        sub = `CYAN ${cyan} tap-outs to AMBER ${amber}.`;
      } else {
        win = "AMBER";
        playerWin = this.player.team === 1;
        sub = `AMBER ${amber} tap-outs to CYAN ${cyan}.`;
      }
    } else if (this.arenaMode === "ffa-timed") {
      if (this.timedLeft > 0) return;
      let best = 0;
      for (const f of this.fighters) best = Math.max(best, this.ffaScore.get(f.id) ?? 0);
      const leaders = this.fighters.filter((f) => (this.ffaScore.get(f.id) ?? 0) === best);
      const playerScore = this.ffaScore.get(this.player.id) ?? 0;
      if (best === 0 || leaders.length !== 1) {
        win = "DRAW";
        playerWin = false;
        sub = `FFA timer ended. Top taps ${best}. Yours ${playerScore}.`;
      } else {
        playerWin = leaders[0].isPlayer;
        win = playerWin ? "ELARA" : leaders[0].name;
        sub = `FFA Timed · ${win} leads with ${best} taps · you ${playerScore}.`;
      }
    } else if (this.isFfa()) {
      const up = this.fighters.filter((x) => isActive(x));
      if (up.length > 1) return;
      playerWin = !!up[0]?.isPlayer;
      win = playerWin ? "ELARA" : up[0]?.name ?? "RIVAL";
      sub = `${win} last standing. FFA Quick.`;
    } else {
      const [a, b] = this.aliveCount();
      if (a > 0 && b > 0) return;
      win = a > 0 ? "CYAN" : "AMBER";
      playerWin = (this.player.team === 0 && a > 0) || (this.player.team === 1 && b > 0);
      sub = `${win} still has fighters up. Last team standing.`;
    }
    for (const f of this.fighters) {
      if (f.occupancy === "vanished") {
        f.occupancy = "free";
        f.vanishLeft = 0;
      }
    }
    this.mode = "results";
    this.map.group.visible = false;
    this.plaza.group.visible = true;
    this.scene.fog = new THREE.Fog(0x1a1614, 32, 80);
    this.result = win === "DRAW" ? "Draw" : playerWin ? "Victory" : "Defeat";
    if (this.hudEls.top) this.hudEls.top.style.display = "none";
    if (this.hudEls.crosshair) this.hudEls.crosshair.style.display = "none";
    if (this.hudEls.radar) this.hudEls.radar.style.display = "none";
    if (this.hudEls["btn-leave"]) this.hudEls["btn-leave"].style.display = "none";
    this.rearCue.visible = false;
    // Persist rewards before clearing fighters so Return always sees a clean profile.
    const gainedLevel = this.commitMatchRewards();
    this.clearFighters();
    if (this.result === "Draw") blip(220, 0.15);
    else if (playerWin) stingWin();
    else stingLose();
    this.hudEls.results.style.display = "flex";
    this.hudEls.hud.style.display = "none";
    const copy = this.overlay.querySelector("#result-copy");
    if (copy) {
      const need = this.save.level < 10 ? 100 + 20 * (this.save.level - 1) : 0;
      const xp = gainedLevel
        ? `Level ${this.save.level}  ·  +1 skill point (${this.save.unspent} unspent)  ·  XP ${this.save.xp}/${need || "—"}`
        : this.save.level >= 10
          ? `Level 10 cap  ·  ${this.save.unspent} unspent`
          : `Level ${this.save.level}  ·  XP ${this.save.xp}/${need}  ·  ${this.save.unspent} unspent`;
      copy.innerHTML = `<h1>${this.result}</h1>
        <p class="sub">${sub}</p>
        <ul class="payouts">${this.payoutItems()}</ul>
        <p class="statline">${xp}</p>
        <p class="hint">Match loadout locked as ${this.matchLoadout}. Spend new points in Home. Return writes you back to the plaza.</p>`;
    }
    document.exitPointerLock?.();
  }

  private payoutItems(): string {
    if (this.payouts.length === 0) {
      return `<li>0 coins this match. Bank ${this.save.coins}.</li><li>First tickler +3 from the tick-start opener. Team assists +1.</li>`;
    }
    const rows = this.payouts.map((p) =>
      p.role === "opener"
        ? `<li>+${p.coins} first tickler vs ${p.victim}</li>`
        : `<li>+${p.coins} assist vs ${p.victim}</li>`,
    );
    rows.push(`<li>Bank ${this.save.coins} coins.</li>`);
    return rows.join("");
  }

  private payoutLines(): string {
    if (this.payouts.length === 0) {
      return `0 coins this match. Bank ${this.save.coins}. First tickler +3, assists +1 (team).`;
    }
    const bits = this.payouts.map((p) =>
      p.role === "opener"
        ? `+${p.coins} first tickler vs ${p.victim}`
        : `+${p.coins} assist vs ${p.victim}`,
    );
    return `${bits.join(" · ")}. Bank ${this.save.coins}.`;
  }

  private syncPadChrome() {
    this.overlay.classList.toggle("pad-live", this.input.padActive);
    const st = this.hudEls["pad-status"];
    if (st) {
      st.textContent = this.input.padActive
        ? `${this.input.padLabel} connected — A or Menu to play`
        : "Xbox first: connect a controller and press any button.";
      st.classList.toggle("on", this.input.padActive);
    }
    const againHint = this.hudEls["again-hint"];
    if (againHint) {
      againHint.textContent = this.input.padActive
        ? "B, A, or Menu — return to plaza"
        : "Click Return, or press B / Menu on a pad.";
    }
    if (this.mode !== "play" && this.hudEls.toast) {
      if (this.toastT > 0) this.toastT -= 0.016;
      this.hudEls.toast.style.display = this.toastT > 0 ? "block" : "none";
      this.hudEls.toast.textContent = this.toast;
    }
  }

  private say(t: string) {
    this.toast = t;
    this.toastT = 2.2;
  }

  private resize() {
    this.camera.aspect = innerWidth / innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(innerWidth, innerHeight);
  }
}

function loadSave(): SaveData {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    const s = normalizeSave(raw ? (JSON.parse(raw) as Partial<SaveData>) : null);
    // Profile-safe: persist the sanitized shape so owned/equip/look clamps stick.
    writeSave(s);
    return s;
  } catch {
    const s = normalizeSave(null);
    writeSave(s);
    return s;
  }
}

function writeSave(s: SaveData) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(s));
}

function fmtClock(t: number): string {
  const s = Math.max(0, Math.ceil(t));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

function yawToward(from: THREE.Vector3, to: THREE.Vector3): number {
  const dx = to.x - from.x;
  const dz = to.z - from.z;
  if (dx * dx + dz * dz < 1e-6) return 0;
  return Math.atan2(-dx, -dz);
}

function buildFpArms(): THREE.Group {
  const root = new THREE.Group();
  root.name = "fp-arms";
  const skin = new THREE.MeshStandardMaterial({
    color: 0xc4a090,
    roughness: 0.55,
    metalness: 0,
  });
  const cloth = new THREE.MeshStandardMaterial({
    color: 0x3a2e38,
    roughness: 0.75,
    metalness: 0,
  });

  const makeArm = (name: string, side: number) => {
    const g = new THREE.Group();
    g.name = name;
    const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.045, 0.22, 3, 6), skin);
    upper.rotation.x = Math.PI / 2;
    upper.position.set(0, 0, -0.14);
    const forearm = new THREE.Mesh(new THREE.CapsuleGeometry(0.038, 0.2, 3, 6), skin);
    forearm.rotation.x = Math.PI / 2;
    forearm.position.set(0, -0.02, -0.36);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 6), skin);
    hand.position.set(0, -0.02, -0.5);
    const sleeve = new THREE.Mesh(new THREE.CapsuleGeometry(0.05, 0.08, 2, 6), cloth);
    sleeve.rotation.x = Math.PI / 2;
    sleeve.position.set(0, 0.02, -0.06);
    g.add(upper, forearm, hand, sleeve);
    g.position.set(side * 0.28, -0.32, -0.45);
    g.rotation.x = -0.3;
    g.rotation.z = -side * 0.2;
    return g;
  };

  root.add(makeArm("fp-left", -1));
  root.add(makeArm("fp-right", 1));

  const weapon = new THREE.Group();
  weapon.name = "fp-weapon";
  const mitt = new THREE.Mesh(
    new THREE.BoxGeometry(0.1, 0.04, 0.12),
    new THREE.MeshStandardMaterial({ color: 0x6a4a3a, roughness: 0.85, metalness: 0 }),
  );
  mitt.position.set(0.28, -0.34, -0.52);
  weapon.add(mitt);
  root.add(weapon);

  return root;
}

function overlayHtml(): string {
  return `
  <div id="boot">
    <div class="card panel">
      <div id="hub-root"></div>
    </div>
  </div>
  <div id="results" style="display:none">
    <div class="card panel">
      <div id="result-copy"></div>
      <div class="row"><button class="cta" id="again">Return to plaza</button></div>
      <p class="hint" id="again-hint">Click Return, or press B / Menu on a pad.</p>
    </div>
  </div>
  <div id="top">
    <div class="banner" id="top-left"></div>
    <div class="banner" id="top-right"></div>
  </div>
  <div id="countdown"></div>
  <div id="crosshair"></div>
  <div id="tickle-flash" aria-hidden="true"></div>
  <div id="radar"><span class="needle">▲</span><span id="radar-copy"></span></div>
  <div id="toast"></div>
  <div id="face"><img id="face-still" alt="" /><div class="head"><span class="eye" style="left:18px"></span><span class="eye" style="right:18px"></span><span class="mouth"></span></div></div>
  <div id="hud" style="display:none">
    <img id="player-portrait" alt="Elara Case" />
    <div class="meta"><span id="meta-left"></span><span id="meta-right"></span></div>
    <div class="bars">
      <div class="bar stamina"><div class="fill" id="stamina-fill"></div><label>Stamina</label></div>
      <div class="bar"><div class="fill" id="escape-fill"></div><label>Escape</label></div>
    </div>
    <div id="actions">
      <button id="btn-tickle">Tickle</button>
      <button id="btn-escape">Escape</button>
    </div>
    <button type="button" class="cta ghost" id="btn-leave">Leave countdown (no coins)</button>
  </div>
  <div id="stick"><div class="knob"></div></div>
  <div id="lookzone"></div>
  `;
}
