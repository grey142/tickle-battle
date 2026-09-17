import { lookById, type LookDef } from "./stills";

export type LaughStageId = "s0" | "s1" | "s2" | "s3";

export interface LaughStageParams {
  staminaMin: number;
  rate: number;
  amp: number;
  lean: number;
  billShake: number;
  billRate: number;
  /** Optional relative path under assets/binds/laugh/ (e.g. stages/Slug_s1.jpg). */
  still?: string;
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

const FALLBACK: LaughBind = {
  clip: "laugh_squirm",
  slug: "default",
  display: "Default",
  stages: {
    s0: { staminaMin: 70, rate: 8, amp: 0.04, lean: 0.05, billShake: 0.03, billRate: 10 },
    s1: { staminaMin: 40, rate: 11, amp: 0.07, lean: 0.09, billShake: 0.06, billRate: 13 },
    s2: { staminaMin: 15, rate: 14, amp: 0.1, lean: 0.12, billShake: 0.09, billRate: 16 },
    s3: { staminaMin: 0, rate: 16, amp: 0.13, lean: 0.15, billShake: 0.12, billRate: 19 },
  },
  hubPreviewMs: 2000,
};

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

export function listedLaughSlugs(): string[] {
  return Object.keys(bySlug).sort();
}
