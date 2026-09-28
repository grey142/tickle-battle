import { lookById, type LookDef } from "./stills";

export type LaughStageId = "s0" | "s1" | "s2" | "s3";

export interface LaughBlend {
  /** 0–1 jaw open / mouth stretch on the face card. */
  jaw: number;
  /** 0–1 cheek puff (head soft-width). */
  cheek: number;
  /** 0–1 eye squint (face card squash). */
  eye: number;
  /** 0–1 brow lift (face card Y). */
  brow: number;
}

export interface LaughStageParams {
  staminaMin: number;
  rate: number;
  amp: number;
  lean: number;
  billShake: number;
  billRate: number;
  /** Optional relative path under assets/binds/laugh/ (e.g. stages/Slug_s1.jpg). */
  still?: string;
  /** Face-card blendshape weights beyond joint squirm. */
  blend?: LaughBlend;
}

export interface LaughBind {
  clip: string;
  slug: string;
  display: string;
  playerOnly?: boolean;
  metalException?: boolean;
  stages: Record<LaughStageId, LaughStageParams>;
  /** Optional production clip frames under assets/binds/laugh/ (e.g. frames/Slug_f0.jpg). */
  frames?: string[];
  hubPreviewMs: number;
}

const mods = import.meta.glob("../../assets/binds/laugh/*.laugh.json", {
  eager: true,
  import: "default",
}) as Record<string, LaughBind>;

const bySlug: Record<string, LaughBind> = {};
for (const [path, bind] of Object.entries(mods)) {
  const file = path.split("/").pop()?.replace(/\.laugh\.json$/i, "");
  if (!file || !bind) continue;
  bySlug[file] = bind;
  if (bind.slug) bySlug[bind.slug] = bind;
}

/**
 * Sane absolute laugh ranges (recalibrated from compounded ×1.06 drift past #176).
 * Rates are rad/s for the squirm sine (Humanoid) and frames/s for the billboard cycle.
 */
export const LAUGH_FPS_MIN = 8;
export const LAUGH_FPS_MAX = 24;
export const LAUGH_RATE_MIN = 8;
export const LAUGH_RATE_MAX = 24;
/** Joint squirm amplitude (radians-ish multiplier input). */
export const LAUGH_AMP_MAX = 0.2;
/** Lean in radians (~6.9°) — a few degrees at most. */
export const LAUGH_LEAN_MAX = 0.12;
/** Billboard shake as fraction of billboard size. */
export const LAUGH_SHAKE_MAX = 0.2;

const clamp = (v: number, lo: number, hi: number) =>
  Number.isFinite(v) ? Math.max(lo, Math.min(hi, v)) : lo;

/**
 * Runtime guard: clamp a stage into sane ranges so future drift cannot silently
 * break the laugh cycle again. Warns once per bind in dev when anything was clamped.
 */
export function sanitizeLaughStage(p: LaughStageParams, who = "?"): LaughStageParams {
  const out: LaughStageParams = {
    ...p,
    staminaMin: clamp(p.staminaMin, 0, 100),
    rate: clamp(p.rate, LAUGH_RATE_MIN, LAUGH_RATE_MAX),
    amp: clamp(p.amp, 0, LAUGH_AMP_MAX),
    lean: clamp(p.lean, 0, LAUGH_LEAN_MAX),
    billShake: clamp(p.billShake, 0, LAUGH_SHAKE_MAX),
    billRate: clamp(p.billRate, LAUGH_FPS_MIN, LAUGH_FPS_MAX),
    blend: p.blend
      ? {
          jaw: clamp(p.blend.jaw, 0, 1),
          cheek: clamp(p.blend.cheek, 0, 1),
          eye: clamp(p.blend.eye, 0, 1),
          brow: clamp(p.blend.brow, 0, 1),
        }
      : undefined,
  };
  if (import.meta.env?.DEV) {
    const drift =
      out.rate !== p.rate ||
      out.amp !== p.amp ||
      out.lean !== p.lean ||
      out.billShake !== p.billShake ||
      out.billRate !== p.billRate ||
      (p.blend && out.blend && JSON.stringify(out.blend) !== JSON.stringify(p.blend));
    if (drift) console.warn(`[laughBind] ${who}: stage values out of sane range — clamped`, p, out);
  }
  return out;
}

function sanitizeLaughBind(bind: LaughBind): LaughBind {
  const stages = {} as Record<LaughStageId, LaughStageParams>;
  for (const id of ["s0", "s1", "s2", "s3"] as LaughStageId[]) {
    stages[id] = sanitizeLaughStage(bind.stages[id], `${bind.slug}.${id}`);
  }
  return { ...bind, stages };
}

for (const key of Object.keys(bySlug)) bySlug[key] = sanitizeLaughBind(bySlug[key]);

const FALLBACK: LaughBind = sanitizeLaughBind({
  clip: "laugh_squirm",
  slug: "default",
  display: "Default",
  stages: {
    s0: { staminaMin: 70, rate: 8, amp: 0.04, lean: 0.03, billShake: 0.03, billRate: 10, blend: { jaw: 0.26, cheek: 0.14, eye: 0.21, brow: 0.09 } },
    s1: { staminaMin: 40, rate: 11, amp: 0.07, lean: 0.05, billShake: 0.06, billRate: 13, blend: { jaw: 0.51, cheek: 0.34, eye: 0.46, brow: 0.2 } },
    s2: { staminaMin: 15, rate: 14, amp: 0.1, lean: 0.07, billShake: 0.09, billRate: 16, blend: { jaw: 0.85, cheek: 0.6, eye: 0.78, brow: 0.35 } },
    s3: { staminaMin: 0, rate: 16, amp: 0.13, lean: 0.09, billShake: 0.12, billRate: 19, blend: { jaw: 1.0, cheek: 0.92, eye: 1.0, brow: 0.54 } },
  },
  hubPreviewMs: 2000,
});

export function laughBindForSlug(slug?: string): LaughBind {
  if (!slug) return FALLBACK;
  return bySlug[slug] ?? FALLBACK;
}

export function laughBindForLook(lookId: number): LaughBind {
  const look: LookDef = lookById(lookId);
  return laughBindForSlug(look.slug);
}


const stageStillMods = import.meta.glob("../../assets/binds/laugh/stages/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const stageStillByFile: Record<string, string> = {};
for (const [path, url] of Object.entries(stageStillMods)) {
  const file = path.split("/").pop();
  if (!file) continue;
  stageStillByFile[file] = url;
}

/** Resolve a stage still URL from bind stage.still (basename or stages/Name.jpg). */
export function laughStageStillUrl(params: LaughStageParams): string | undefined {
  const rel = params.still;
  if (!rel) return undefined;
  const file = rel.split("/").pop();
  if (!file) return undefined;
  return stageStillByFile[file];
}


const frameStillMods = import.meta.glob("../../assets/binds/laugh/frames/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const frameStillByFile: Record<string, string> = {};
for (const [path, url] of Object.entries(frameStillMods)) {
  const file = path.split("/").pop();
  if (!file) continue;
  frameStillByFile[file] = url;
}

/** Resolve laugh-cycle frame URLs from bind.frames (basename or frames/Name.jpg). */
export function laughFrameUrls(bind: LaughBind): string[] {
  const rels = bind.frames;
  if (!rels?.length) return [];
  const out: string[] = [];
  for (const rel of rels) {
    const file = rel.split("/").pop();
    if (!file) continue;
    const url = frameStillByFile[file];
    if (url) out.push(url);
  }
  return out;
}

export function laughStageForStamina(bind: LaughBind, staminaPct: number): LaughStageId {
  const pct = Math.max(0, Math.min(100, staminaPct));
  if (pct >= bind.stages.s0.staminaMin) return "s0";
  if (pct >= bind.stages.s1.staminaMin) return "s1";
  if (pct >= bind.stages.s2.staminaMin) return "s2";
  return "s3";
}

export function laughParams(bind: LaughBind, staminaPct: number): LaughStageParams {
  return bind.stages[laughStageForStamina(bind, staminaPct)];
}

/**
 * Real stamina→frame ramp over normalized stamina 0–1 (1 = fresh, 0 = drained).
 * Evenly spaced across the cycle with a mild ease so frames climb f0 → f(n-1):
 * returns the [lo, hi] window to alternate between (hi = lo + 1, last frame locks).
 */
export function laughFrameWindow(frameCount: number, stamina01: number): [number, number] {
  const n = Math.max(1, Math.floor(frameCount));
  if (n === 1) return [0, 0];
  const s = clamp(stamina01, 0, 1);
  // Mild ease-in on drain so the high-stamina window holds a touch longer.
  const drain = Math.pow(1 - s, 1.15);
  const lo = Math.min(n - 1, Math.floor(drain * n));
  const hi = Math.min(n - 1, lo + 1);
  return [lo, hi];
}

/** Billboard frame-cycle rate: stage billRate, climbing with drain, clamped 8–24 fps. */
export function laughFrameFps(billRate: number | undefined, stamina01: number): number {
  const s = clamp(stamina01, 0, 1);
  const base = clamp(billRate ?? 14, LAUGH_FPS_MIN, LAUGH_FPS_MAX);
  return clamp(base * (0.85 + 0.3 * (1 - s)), LAUGH_FPS_MIN, LAUGH_FPS_MAX);
}

export function listedLaughSlugs(): string[] {
  return Object.keys(bySlug).sort();
}
