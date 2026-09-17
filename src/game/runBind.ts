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
}

const mods = import.meta.glob("../../assets/binds/run/*.run.json", {
  eager: true,
  import: "default",
}) as Record<string, RunBind>;

const bySlug: Record<string, RunBind> = {};
for (const [path, bind] of Object.entries(mods)) {
  const file = path.split("/").pop()?.replace(/\.run\.json$/i, "");
  if (!file || !bind) continue;
  bySlug[file] = bind;
  if (bind.slug) bySlug[bind.slug] = bind;
}

const FALLBACK: RunBind = {
  clip: "run",
  slug: "default",
  display: "Default",
  walk: { rate: 7.2, amp: 0.48, lean: 0.06, billBob: 0.025, billRate: 8.5 },
  run: { rate: 11, amp: 0.72, lean: 0.18, billBob: 0.055, billRate: 13 },
  runSpeed: 4.4,
  walkSpeed: 0.4,
};

export function runBindForSlug(slug?: string): RunBind {
  if (!slug) return FALLBACK;
  return bySlug[slug] ?? FALLBACK;
}

export function runBindForLook(lookId: number): RunBind {
  const look: LookDef = lookById(lookId);
  return runBindForSlug(look.slug);
}

export function runClipForSpeed(bind: RunBind, speed: number): "idle" | "walk" | "run" {
  if (speed > bind.runSpeed) return "run";
  if (speed > bind.walkSpeed) return "walk";
  return "idle";
}

export function runParamsForClip(bind: RunBind, clip: "walk" | "run"): RunLocoParams {
  return clip === "run" ? bind.run : bind.walk;
}

export function listedRunSlugs(): string[] {
  return Object.keys(bySlug).sort();
}
