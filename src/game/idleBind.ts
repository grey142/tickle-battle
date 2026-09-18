import { lookById, type LookDef } from "./stills";

/** A-pose idle bind — multi-frame sheet + breathe params while free/standing. */
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
  /** Extra lateral weight shift on billboard / capsule idle. */
  weightShift?: number;
  /** Soft head nod amp for capsule idle. */
  headNod?: number;
  frames?: number;
  sheetLayout?: string;
  fps?: number;
}

const mods = import.meta.glob("../../assets/binds/idle/*.idle.json", {
  eager: true,
  import: "default",
}) as Record<string, IdleBind>;

const sheetMods = import.meta.glob("../../assets/binds/idle/sheets/*.png", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const bySlug: Record<string, IdleBind> = {};
for (const [path, bind] of Object.entries(mods)) {
  const file = path.split("/").pop()?.replace(/\.idle\.json$/i, "");
  if (!file || !bind) continue;
  bySlug[file] = bind;
  if (bind.slug) bySlug[bind.slug] = bind;
}

const sheetBySlug: Record<string, string> = {};
for (const [path, url] of Object.entries(sheetMods)) {
  const file = path.split("/").pop()?.replace(/\.png$/i, "");
  if (!file) continue;
  sheetBySlug[file] = url;
}

const FALLBACK: IdleBind = {
  clip: "idle",
  slug: "default",
  display: "Default",
  pose: "a_pose",
  breatheRate: 2.05,
  breatheAmp: 0.029,
  sway: 0.024,
  scalePulse: 0.023,
  weightShift: 0.026,
  headNod: 0.018,
  frames: 8,
  sheetLayout: "horizontal",
  fps: 7,
};

export function idleBindForSlug(slug?: string): IdleBind {
  if (!slug) return FALLBACK;
  return bySlug[slug] ?? FALLBACK;
}

export function idleBindForLook(lookId: number): IdleBind {
  const look: LookDef = lookById(lookId);
  return idleBindForSlug(look.slug);
}

/** Horizontal 8-frame A-pose breathe sheet URL when present. */
export function idleSheetUrlForSlug(slug?: string): string | undefined {
  if (!slug) return undefined;
  return sheetBySlug[slug];
}

export function listedIdleSlugs(): string[] {
  return Object.keys(bySlug).sort();
}
