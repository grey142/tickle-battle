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
  walk: { rate: 11.3, amp: 0.76, lean: 0.097, billBob: 0.053, billRate: 13.6 },
  run: { rate: 17.2, amp: 1.14, lean: 0.287, billBob: 0.112, billRate: 20.7 },
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
