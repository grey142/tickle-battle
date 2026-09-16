/** Xbox (standard mapping) first; keyboard + phone stay as fallbacks. */

const DEAD = 0.18;
const LOOK_YAW = 3.15;
const LOOK_PITCH = 2.55;

const XB = {
  A: 0,
  B: 1,
  X: 2,
  Y: 3,
  LB: 4,
  RB: 5,
  LT: 6,
  RT: 7,
  VIEW: 8,
  MENU: 9,
  DUP: 12,
  DDOWN: 13,
  DLEFT: 14,
  DRIGHT: 15,
} as const;

function axis(pad: Gamepad, i: number): number {
  const v = pad.axes[i] ?? 0;
  return Math.abs(v) < DEAD ? 0 : v;
}

function btn(pad: Gamepad, i: number): GamepadButton | undefined {
  return pad.buttons[i];
}

function held(pad: Gamepad, i: number, analog = 0.22): boolean {
  const b = btn(pad, i);
  if (!b) return false;
  return b.pressed || b.value >= analog;
}

export class Input {
  keys = new Set<string>();
  tickle = false;
  escape = false;
  confirm = false;
  back = false;
  tickleHeld = false;
  escapeHeld = false;
  releaseHeld = false;
  lookX = 0;
  lookY = 0;
  stickX = 0;
  stickY = 0;
  pointerLocked = false;
  mobile = false;
  padActive = false;
  padLabel = "";
  justConnected = false;
  padHome = false;
  padShop = false;
  padArena = false;
  padUp = false;
  padDown = false;
  padLeft = false;
  padRight = false;
  padTabPrev = false;
  padTabNext = false;
  private lookId: number | null = null;
  private lastLook: { x: number; y: number } | null = null;
  private touchTickle = false;
  private touchEscape = false;
  private padMoveX = 0;
  private padMoveY = 0;
  private prevPad = new Set<number>();
  private rumblePad: Gamepad | null = null;
  private prevKeys = new Set<string>();
  private navDir: "up" | "down" | "left" | "right" | null = null;
  private navAge = 0;

  constructor() {
    this.mobile = matchMedia("(pointer: coarse)").matches || innerWidth < 820;
    window.addEventListener("keydown", (e) => {
      this.keys.add(e.code);
      if (e.code === "KeyT" || e.code === "Space") this.tickle = true;
      if (e.code === "KeyE") this.escape = true;
      if (e.code === "KeyQ") this.releaseHeld = true;
      if (e.code === "Enter" || e.code === "NumpadEnter") this.confirm = true;
      if (e.code === "Escape") this.back = true;
      if (e.code === "Digit1" || e.code === "KeyH") this.padHome = true;
      if (e.code === "Digit2") this.padShop = true;
      if (e.code === "Digit3") this.padArena = true;
      if (["Space", "KeyT", "KeyE"].includes(e.code)) e.preventDefault();
    });
    window.addEventListener("keyup", (e) => {
      this.keys.delete(e.code);
      if (e.code === "KeyQ") this.releaseHeld = false;
    });
    window.addEventListener("mousemove", (e) => {
      if (!this.pointerLocked) return;
      this.lookX += e.movementX * 0.0024;
      this.lookY += e.movementY * 0.0022;
    });
    document.addEventListener("pointerlockchange", () => {
      this.pointerLocked = document.pointerLockElement !== null;
    });
    window.addEventListener("gamepadconnected", (e) => {
      this.justConnected = true;
      this.padActive = true;
      const gp = (e as GamepadEvent).gamepad;
      this.padLabel = gp ? labelFor(gp) : "Xbox controller";
    });
    window.addEventListener("gamepaddisconnected", () => {
      this.padActive = false;
      this.padLabel = "";
      this.padMoveX = 0;
      this.padMoveY = 0;
      this.prevPad.clear();
      this.rumblePad = null;
    });
  }

  bindHud(root: HTMLElement) {
    const bind = (id: string, which: "tickle" | "escape") => {
      const el = root.querySelector(`#${id}`);
      if (!el) return;
      const down = (e: Event) => {
        e.preventDefault();
        this[which] = true;
        if (which === "tickle") this.touchTickle = true;
        if (which === "escape") this.touchEscape = true;
      };
      const up = () => {
        if (which === "tickle") this.touchTickle = false;
        if (which === "escape") this.touchEscape = false;
      };
      el.addEventListener("pointerdown", down);
      el.addEventListener("pointerup", up);
      el.addEventListener("pointerleave", up);
    };
    bind("btn-tickle", "tickle");
    bind("btn-escape", "escape");

    const stick = root.querySelector("#stick") as HTMLElement | null;
    const knob = root.querySelector("#stick .knob") as HTMLElement | null;
    if (stick && knob) {
      const set = (cx: number, cy: number, px: number, py: number) => {
        const dx = px - cx;
        const dy = py - cy;
        const m = Math.min(40, Math.hypot(dx, dy));
        const a = Math.atan2(dy, dx);
        this.stickX = (m / 40) * Math.cos(a);
        this.stickY = (m / 40) * Math.sin(a);
        knob.style.left = `${33 + this.stickX * 28}px`;
        knob.style.top = `${33 + this.stickY * 28}px`;
      };
      const reset = () => {
        this.stickX = 0;
        this.stickY = 0;
        knob.style.left = "33px";
        knob.style.top = "33px";
      };
      stick.addEventListener("pointerdown", (e: PointerEvent) => {
        stick.setPointerCapture(e.pointerId);
        const r = stick.getBoundingClientRect();
        set(r.left + r.width / 2, r.top + r.height / 2, e.clientX, e.clientY);
      });
      stick.addEventListener("pointermove", (e: PointerEvent) => {
        if (!stick.hasPointerCapture(e.pointerId)) return;
        const r = stick.getBoundingClientRect();
        set(r.left + r.width / 2, r.top + r.height / 2, e.clientX, e.clientY);
      });
      stick.addEventListener("pointerup", reset);
      stick.addEventListener("pointercancel", reset);
    }

    const look = root.querySelector("#lookzone") as HTMLElement | null;
    look?.addEventListener("pointerdown", (e: PointerEvent) => {
      this.lookId = e.pointerId;
      this.lastLook = { x: e.clientX, y: e.clientY };
      look.setPointerCapture(e.pointerId);
    });
    look?.addEventListener("pointermove", (e: PointerEvent) => {
      if (this.lookId !== e.pointerId || !this.lastLook) return;
      this.lookX += (e.clientX - this.lastLook.x) * 0.004;
      this.lookY += (e.clientY - this.lastLook.y) * 0.0035;
      this.lastLook = { x: e.clientX, y: e.clientY };
    });
    look?.addEventListener("pointerup", () => {
      this.lookId = null;
      this.lastLook = null;
    });
  }

  poll(dt: number) {
    this.pollGamepad(dt);
    this.pollNav(dt);
    if (this.keys.has("BracketLeft") && !this.prevKeys.has("BracketLeft")) this.padTabPrev = true;
    if (this.keys.has("BracketRight") && !this.prevKeys.has("BracketRight")) this.padTabNext = true;
    this.prevKeys = new Set(this.keys);
    const keyTickle = this.keys.has("KeyT") || this.keys.has("Space");
    const keyEscape = this.keys.has("KeyE");
    if (!this.padActive) {
      this.tickleHeld = this.touchTickle || keyTickle;
      this.escapeHeld = this.touchEscape || keyEscape;
      this.releaseHeld = this.keys.has("KeyQ");
    } else {
      this.tickleHeld = this.tickleHeld || keyTickle;
      this.escapeHeld = this.escapeHeld || keyEscape;
    }
    void dt;
  }

  moveVec(): { x: number; z: number } {
    let x = 0;
    let z = 0;
    if (this.keys.has("KeyW") || this.keys.has("ArrowUp")) z += 1;
    if (this.keys.has("KeyS") || this.keys.has("ArrowDown")) z -= 1;
    if (this.keys.has("KeyA") || this.keys.has("ArrowLeft")) x -= 1;
    if (this.keys.has("KeyD") || this.keys.has("ArrowRight")) x += 1;
    x += this.padMoveX;
    z += -this.padMoveY;
    if (this.mobile || Math.hypot(this.stickX, this.stickY) > 0.08) {
      x += this.stickX;
      z += -this.stickY;
    }
    const m = Math.hypot(x, z);
    if (m > 1) {
      x /= m;
      z /= m;
    }
    return { x, z };
  }

  consumeLook(): { x: number; y: number } {
    const o = { x: this.lookX, y: this.lookY };
    this.lookX = 0;
    this.lookY = 0;
    return o;
  }

  rumble(ms = 70, strong = 0.35, weak = 0.2) {
    const pad = this.rumblePad;
    const act = pad?.vibrationActuator;
    if (!act) return;
    void act.playEffect("dual-rumble", {
      startDelay: 0,
      duration: ms,
      strongMagnitude: strong,
      weakMagnitude: weak,
    }).catch(() => undefined);
  }

  endFrame() {
    this.tickle = false;
    this.escape = false;
    this.confirm = false;
    this.back = false;
    this.justConnected = false;
    this.padHome = false;
    this.padShop = false;
    this.padArena = false;
    this.padUp = false;
    this.padDown = false;
    this.padLeft = false;
    this.padRight = false;
    this.padTabPrev = false;
    this.padTabNext = false;
    if (!this.keys.has("KeyQ") && !this.padActive) this.releaseHeld = false;
  }

  private pollGamepad(dt: number) {
    const pad = pickPad();
    if (!pad) {
      this.padActive = false;
      this.padMoveX = 0;
      this.padMoveY = 0;
      this.prevPad.clear();
      this.rumblePad = null;
      return;
    }

    this.padActive = true;
    this.padLabel = labelFor(pad);
    this.rumblePad = pad;

    let mx = axis(pad, 0);
    let my = axis(pad, 1);
    if (held(pad, XB.DLEFT)) mx -= 1;
    if (held(pad, XB.DRIGHT)) mx += 1;
    if (held(pad, XB.DUP)) my -= 1;
    if (held(pad, XB.DDOWN)) my += 1;
    const mm = Math.hypot(mx, my);
    if (mm > 1) {
      mx /= mm;
      my /= mm;
    }
    this.padMoveX = mx;
    this.padMoveY = my;

    const rx = axis(pad, 2);
    const ry = axis(pad, 3);
    this.lookX += rx * LOOK_YAW * dt;
    this.lookY += ry * LOOK_PITCH * dt;

    const now = new Set<number>();
    const edge = (i: number) => held(pad, i) && !this.prevPad.has(i);
    for (let i = 0; i < pad.buttons.length; i++) {
      if (held(pad, i)) now.add(i);
    }

    const rt = held(pad, XB.RT) || axis(pad, 5) > 0.22;
    const lt = held(pad, XB.LT) || axis(pad, 4) > 0.22;
    const padTickle = held(pad, XB.A) || rt;
    const padEscape = held(pad, XB.B) || lt;
    const padRelease = held(pad, XB.Y);

    if (edge(XB.A) || edge(XB.RT)) this.tickle = true;
    if (edge(XB.B) || edge(XB.LT)) this.escape = true;
    if (edge(XB.A) || edge(XB.MENU)) this.confirm = true;
    if (edge(XB.B) || edge(XB.VIEW) || edge(XB.MENU)) this.back = true;
    if (edge(XB.X)) this.padHome = true;
    if (edge(XB.Y)) this.padShop = true;
    if (edge(XB.RB)) this.padArena = true;
    if (edge(XB.LB)) this.padTabPrev = true;
    if (edge(XB.RB)) this.padTabNext = true;
    if (edge(XB.DUP)) this.fireNav("up");
    if (edge(XB.DDOWN)) this.fireNav("down");
    if (edge(XB.DLEFT)) this.fireNav("left");
    if (edge(XB.DRIGHT)) this.fireNav("right");

    this.tickleHeld = this.touchTickle || padTickle;
    this.escapeHeld = this.touchEscape || padEscape;
    this.releaseHeld = this.keys.has("KeyQ") || padRelease;

    this.prevPad = now;
  }

  private pollNav(dt: number) {
    const pad = pickPad();
    let dir: "up" | "down" | "left" | "right" | null = null;
    if (pad) {
      if (held(pad, XB.DUP)) dir = "up";
      else if (held(pad, XB.DDOWN)) dir = "down";
      else if (held(pad, XB.DLEFT)) dir = "left";
      else if (held(pad, XB.DRIGHT)) dir = "right";
      else {
        const mx = axis(pad, 0);
        const my = axis(pad, 1);
        if (my < -0.55) dir = "up";
        else if (my > 0.55) dir = "down";
        else if (mx < -0.55) dir = "left";
        else if (mx > 0.55) dir = "right";
      }
    }
    if (!dir) {
      if (this.keys.has("ArrowUp")) dir = "up";
      else if (this.keys.has("ArrowDown")) dir = "down";
      else if (this.keys.has("ArrowLeft")) dir = "left";
      else if (this.keys.has("ArrowRight")) dir = "right";
    }
    if (dir !== this.navDir) {
      this.navDir = dir;
      this.navAge = 0;
      const dpadHeld =
        !!pad &&
        (held(pad, XB.DUP) || held(pad, XB.DDOWN) || held(pad, XB.DLEFT) || held(pad, XB.DRIGHT));
      if (dir && !dpadHeld) this.fireNav(dir);
    } else if (dir) {
      this.navAge += dt;
      if (this.navAge >= 0.42) {
        this.fireNav(dir);
        this.navAge = 0.22;
      }
    }
  }

  private fireNav(dir: "up" | "down" | "left" | "right") {
    if (dir === "up") this.padUp = true;
    if (dir === "down") this.padDown = true;
    if (dir === "left") this.padLeft = true;
    if (dir === "right") this.padRight = true;
  }
}

function pickPad(): Gamepad | null {
  if (fakePad?.connected) return fakePad as unknown as Gamepad;
  const list = navigator.getGamepads?.() ?? [];
  let fallback: Gamepad | null = null;
  for (const p of list) {
    if (!p || !p.connected) continue;
    if (p.mapping === "standard") return p;
    if (!fallback) fallback = p;
  }
  return fallback;
}

type FakeBtn = { pressed: boolean; touched: boolean; value: number };

interface FakePad {
  id: string;
  index: number;
  connected: boolean;
  mapping: GamepadMappingType;
  timestamp: number;
  axes: number[];
  buttons: FakeBtn[];
}

let fakePad: FakePad | null = null;

export function connectFakePad(): void {
  fakePad = {
    id: "Xbox controller (standard)",
    index: 0,
    connected: true,
    mapping: "standard",
    timestamp: performance.now(),
    axes: [0, 0, 0, 0, 0, 0],
    buttons: Array.from({ length: 17 }, () => ({ pressed: false, touched: false, value: 0 })),
  };
  window.dispatchEvent(new Event("gamepadconnected"));
}

export function setFakePad(opts: { axes?: number[]; buttons?: Record<number, number>; reset?: boolean }): void {
  if (!fakePad) connectFakePad();
  if (!fakePad) return;
  fakePad.timestamp = performance.now();
  if (opts.reset) {
    fakePad.axes.fill(0);
    for (const b of fakePad.buttons) {
      b.value = 0;
      b.pressed = false;
      b.touched = false;
    }
  }
  if (opts.axes) {
    for (let i = 0; i < opts.axes.length && i < fakePad.axes.length; i++) fakePad.axes[i] = opts.axes[i];
  }
  if (opts.buttons) {
    for (const [k, v] of Object.entries(opts.buttons)) {
      const i = Number(k);
      const b = fakePad.buttons[i];
      if (!b) continue;
      b.value = v;
      b.pressed = v >= 0.22;
      b.touched = b.pressed;
    }
  }
}

export function disconnectFakePad(): void {
  fakePad = null;
  window.dispatchEvent(new Event("gamepaddisconnected"));
}

function labelFor(pad: Gamepad): string {
  const id = pad.id || "Xbox controller";
  if (/xbox|xinput|045e/i.test(id)) return "Xbox controller";
  if (/standard/i.test(pad.mapping)) return "Xbox layout";
  return id.replace(/\s*\(.*$/, "").slice(0, 42) || "Controller";
}
