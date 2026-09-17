import { lookById, type LookDef } from "./stills";

/** A-pose idle bind — drives billboard breathe/sway while free/standing. */
export interface IdleBind {
  clip: string;
  slug: string;
  display: string;
  playerOnly?: boolean;
  metalException?: boolean;
  pose: string;
  breatheRate: number;
  breatheAmp: number;
  sway: number;
  scalePulse: number;
}

const mods = import.meta.glob("../../assets/binds/idle/*.idle.json", {
  eager: true,
  import: "default",
}) as Record<string, IdleBind>;

const bySlug: Record<string, IdleBind> = {};
for (const [path, bind] of Object.entries(mods)) {
  const file = path.split("/").pop()?.replace(/\.idle\.json$/i, "");
  if (!file || !bind) continue;
  bySlug[file] = bind;
  if (bind.slug) bySlug[bind.slug] = bind;
}

const FALLBACK: IdleBind = {
  clip: "idle",
  slug: "default",
  display: "Default",
  pose: "a_pose",
  breatheRate: 2.2,
  breatheAmp: 0.02,
  sway: 0.015,
  scalePulse: 0.015,
};

export function idleBindForSlug(slug?: string): IdleBind {
  if (!slug) return FALLBACK;
  return bySlug[slug] ?? FALLBACK;
}

export function idleBindForLook(lookId: number): IdleBind {
  const look: LookDef = lookById(lookId);
  return idleBindForSlug(look.slug);
}

export function listedIdleSlugs(): string[] {
  return Object.keys(bySlug).sort();
}
