import { lookById, type LookDef } from "./stills";

/** Per-look parameters for the shared tickler clip. */
export interface TickleBind {
  clip: string;
  slug: string;
  display: string;
  playerOnly?: boolean;
  metalException?: boolean;
  rate: number;
  twistRate: number;
  spineBase: number;
  spineAmp: number;
  chestAmp: number;
  shoulderAmp: number;
  elbowAmp: number;
  weaponWag: number;
  billWag: number;
  billRate: number;
}

const mods = import.meta.glob("../../assets/binds/tickle/*.tickle.json", {
  eager: true,
  import: "default",
}) as Record<string, TickleBind>;

const bySlug: Record<string, TickleBind> = {};
for (const [path, bind] of Object.entries(mods)) {
  const file = path.split("/").pop()?.replace(/\.tickle\.json$/i, "");
  if (!file || !bind) continue;
  bySlug[file] = bind;
  if (bind.slug) bySlug[bind.slug] = bind;
}

const FALLBACK: TickleBind = {
  clip: "tickle",
  slug: "default",
  display: "Default",
  rate: 28,
  twistRate: 37,
  spineBase: 0.28,
  spineAmp: 0.04,
  chestAmp: 0.08,
  shoulderAmp: 0.22,
  elbowAmp: 0.4,
  weaponWag: 0.45,
  billWag: 0.05,
  billRate: 26,
};

export function tickleBindForSlug(slug?: string): TickleBind {
  if (!slug) return FALLBACK;
  return bySlug[slug] ?? FALLBACK;
}

export function tickleBindForLook(lookId: number): TickleBind {
  const look: LookDef = lookById(lookId);
  return tickleBindForSlug(look.slug);
}

export function listedTickleSlugs(): string[] {
  return Object.keys(bySlug).sort();
}
