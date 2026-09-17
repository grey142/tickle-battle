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
  /** Optional relative paths under assets/binds/tickle/ (e.g. frames/Slug_f0.jpg). */
  frames?: string[];
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
  spineAmp: 0.046,
  chestAmp: 0.088,
  shoulderAmp: 0.246,
  elbowAmp: 0.44,
  weaponWag: 0.49,
  billWag: 0.058,
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

const frameStillMods = import.meta.glob("../../assets/binds/tickle/frames/*.jpg", {
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

/** Resolve tickle-cycle frame URLs from bind.frames (basename or frames/Name.jpg). */
export function tickleFrameUrls(bind: TickleBind): string[] {
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

export function listedTickleSlugs(): string[] {
  return Object.keys(bySlug).sort();
}
