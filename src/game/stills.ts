import { AMATEUR_ROSTER } from "./constants";

const amateurMods = import.meta.glob("../../assets/characters/amateur/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const playerMods = import.meta.glob("../../assets/characters/player/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

/** Amateur 12 metal-free stills. Elara lives under player/ and is not in this map. */
export const amateurStillUrls: Record<string, string> = {};
for (const [path, url] of Object.entries(amateurMods)) {
  const file = path.split("/").pop();
  if (!file) continue;
  amateurStillUrls[file.replace(/\.jpg$/i, "")] = url;
}

export const playerStillUrls: Record<string, string> = {};
for (const [path, url] of Object.entries(playerMods)) {
  const file = path.split("/").pop();
  if (!file) continue;
  playerStillUrls[file.replace(/\.jpg$/i, "")] = url;
}

export function stillUrlFor(slug?: string): string | undefined {
  if (!slug) return undefined;
  return amateurStillUrls[slug] ?? playerStillUrls[slug];
}

export const ELARA_SLUG = "ElaraCase";

export interface LookDef {
  id: number;
  slug: string;
  display: string;
  metalException: boolean;
}

/** 0 = Elara (default). 1–12 = Amateur 12 metal-free stills. */
export const LOOK_DEFS: LookDef[] = [
  { id: 0, slug: ELARA_SLUG, display: "Elara Case", metalException: true },
  ...AMATEUR_ROSTER.map((r, i) => ({
    id: i + 1,
    slug: r.slug,
    display: r.display,
    metalException: false,
  })),
];

export const LOOK_MAX = LOOK_DEFS.length - 1;

export function lookById(id: number): LookDef {
  return LOOK_DEFS.find((l) => l.id === id) ?? LOOK_DEFS[0];
}
