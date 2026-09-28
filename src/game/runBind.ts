import { lookById, type LookDef } from "./stills";

export interface RunLocoParams {
  rate: number;
  amp: number;
  lean: number;
  billBob: number;
  billRate: number;
}

export interface RunBind {
  clip: string;
  slug: string;
  display: string;
  playerOnly?: boolean;
  metalException?: boolean;
  walk: RunLocoParams;
  run: RunLocoParams;
  runSpeed: number;
  walkSpeed: number;
  /** Optional relative paths under assets/binds/run/ (e.g. frames/Slug_f0.jpg). */
  frames?: string[];
}

const mods = import.meta.glob("../../assets/binds/run/*.run.json", {
  eager: true,
  import: "default",
}) as Record<string, RunBind>;

/*
 * Units (see Humanoid.pose walk/run + Fighter billboard/frame code):
 *   rate     — rig stride phase speed in rad/s (phase = t * rate), so
 *              cycles/sec = rate / (2π). 15.7 ≈ 2.5 strides/s (sprint).
 *   amp      — hip swing amplitude in radians (±amp about the hip).
 *   lean     — forward spine lean in radians.
 *   billBob  — AI billboard bob scale in scene metres; vertical bounce
 *              peaks at billBob * 2.8 (0.02 → ~5.6 cm), tilt at billBob * 1.58 rad.
 *   billRate — run-frame sprite FPS (4 frames f0–f3 = one stride), so
 *              cycles/sec = billRate / 4. Keep billRate ≈ rate * 2/π so the
 *              sprite cycle matches the rig stride.
 */
const FALLBACK: RunBind = {
  clip: "run",
  slug: "default",
  display: "Default",
  // Jog ≈ 1.7 strides/s, sprint ≈ 2.5 strides/s.
  walk: { rate: 10.7, amp: 0.45, lean: 0.06, billBob: 0.012, billRate: 6.81 },
  run: { rate: 15.7, amp: 0.7, lean: 0.12, billBob: 0.02, billRate: 9.99 },
  runSpeed: 4.4,
  walkSpeed: 0.4,
};

type Range = readonly [min: number, max: number];

/**
 * Load-time guard: every bind is clamped into natural ranges so compounded
 * "deepen" bumps can never push the stride back into flicker territory.
 */
export const RUN_PARAM_RANGES: Record<keyof RunLocoParams, Range> = {
  rate: [3, 19], // 0.48–3.0 strides/s
  amp: [0.1, 0.9], // rad hip swing
  lean: [0, 0.2], // rad forward lean
  billBob: [0, 0.04], // ≤ ~11 cm billboard bounce
  billRate: [2, 12.5], // sprite FPS → ≤ ~3.1 strides/s with 4 frames
};
const SPEED_RANGE: Range = [0.05, 12];

function clampNum(v: unknown, [lo, hi]: Range, fallback: number, label: string): number {
  const n = typeof v === "number" && Number.isFinite(v) ? v : fallback;
  const out = Math.min(hi, Math.max(lo, n));
  if (import.meta.env.DEV && out !== v) {
    console.warn(`[runBind] ${label}=${String(v)} out of range [${lo}, ${hi}] → ${out}`);
  }
  return out;
}

function sanitizeLoco(p: Partial<RunLocoParams> | undefined, fb: RunLocoParams, label: string): RunLocoParams {
  const out = {} as RunLocoParams;
  for (const key of Object.keys(RUN_PARAM_RANGES) as (keyof RunLocoParams)[]) {
    out[key] = clampNum(p?.[key], RUN_PARAM_RANGES[key], fb[key], `${label}.${key}`);
  }
  return out;
}

/** Return a clamped copy of a bind (never mutates the imported JSON). */
export function sanitizeRunBind(bind: RunBind, label = bind.slug || "bind"): RunBind {
  const runSpeed = clampNum(bind.runSpeed, SPEED_RANGE, FALLBACK.runSpeed, `${label}.runSpeed`);
  let walkSpeed = clampNum(bind.walkSpeed, SPEED_RANGE, FALLBACK.walkSpeed, `${label}.walkSpeed`);
  if (walkSpeed >= runSpeed) walkSpeed = Math.min(FALLBACK.walkSpeed, runSpeed * 0.5);
  return {
    ...bind,
    walk: sanitizeLoco(bind.walk, FALLBACK.walk, `${label}.walk`),
    run: sanitizeLoco(bind.run, FALLBACK.run, `${label}.run`),
    runSpeed,
    walkSpeed,
  };
}

const bySlug: Record<string, RunBind> = {};
for (const [path, raw] of Object.entries(mods)) {
  const file = path.split("/").pop()?.replace(/\.run\.json$/i, "");
  if (!file || !raw) continue;
  const bind = sanitizeRunBind(raw, file);
  bySlug[file] = bind;
  if (bind.slug) bySlug[bind.slug] = bind;
}

export function runBindForSlug(slug?: string): RunBind {
  if (!slug) return FALLBACK;
  return bySlug[slug] ?? FALLBACK;
}

export function runBindForLook(lookId: number): RunBind {
  const look: LookDef = lookById(lookId);
  return runBindForSlug(look.slug);
}

export function runClipForSpeed(bind: RunBind, speed: number): "idle" | "walk" | "run" {
  // Bind thresholds are inclusive so a frame-locked stride does not flicker at the edge.
  if (speed >= bind.runSpeed) return "run";
  if (speed >= bind.walkSpeed) return "walk";
  return "idle";
}

export function runParamsForClip(bind: RunBind, clip: "walk" | "run"): RunLocoParams {
  return clip === "run" ? bind.run : bind.walk;
}

const frameStillMods = import.meta.glob("../../assets/binds/run/frames/*.jpg", {
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

/** Resolve run-cycle frame URLs from bind.frames (basename or frames/Name.jpg). */
export function runFrameUrls(bind: RunBind): string[] {
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

export function listedRunSlugs(): string[] {
  return Object.keys(bySlug).sort();
}
