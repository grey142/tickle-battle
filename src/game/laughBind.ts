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

const FALLBACK: LaughBind = {
  clip: "laugh_squirm",
  slug: "default",
  display: "Default",
  stages: {
    s0: { staminaMin: 70, rate: 58.90, amp: 0.3039, lean: 0.3743, billShake: 0.2320, billRate: 74.40, blend: { jaw: 1.0, cheek: 1.0, eye: 1.0, brow: 0.7155 } },
    s1: { staminaMin: 40, rate: 81.64, amp: 0.5368, lean: 0.6777, billShake: 0.4665, billRate: 97.13, blend: { jaw: 1.0, cheek: 1.0, eye: 1.0, brow: 1.0 } },
    s2: { staminaMin: 15, rate: 103.39, amp: 0.7677, lean: 0.9047, billShake: 0.7027, billRate: 118.94, blend: { jaw: 1.0, cheek: 1.0, eye: 1.0, brow: 1.0 } },
    s3: { staminaMin: 0, rate: 118.76, amp: 0.9909, lean: 1.1275, billShake: 0.9263, billRate: 142.16, blend: { jaw: 1.0, cheek: 1.0, eye: 1.0, brow: 1.0 } },
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
