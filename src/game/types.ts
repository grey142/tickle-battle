export type Occupancy =
  | "free"
  | "tickler"
  | "ticklee"
  | "vanished"
  | "tapped"
  | "nudge"
  | "spectate";

export type Role = "hunter" | "flanker" | "ambusher" | "escape" | "sticky";

export type ArenaMode = "team-quick" | "team-timed" | "ffa-timed" | "ffa-quick";

export interface SaveData {
  coins: number;
  level: number;
  /** Progress toward next Amateur level (flat after 10). */
  xp: number;
  unspent: number;
  blocks: { stamina: number; struggle: number; tickle: number };
  look: number;
  weapon: number;
  armor: number;
  ownedWeapons: number[];
  ownedArmors: number[];
}

export function defaultSave(): SaveData {
  return {
    coins: 12,
    level: 1,
    xp: 0,
    unspent: 7,
    blocks: { stamina: 0, struggle: 0, tickle: 0 },
    look: 0,
    weapon: 0,
    armor: 0,
    ownedWeapons: [0],
    ownedArmors: [0],
  };
}

export function normalizeSave(raw: Partial<SaveData> | null | undefined): SaveData {
  const d = defaultSave();
  if (!raw || typeof raw !== "object") return d;
  const blocks = raw.blocks ?? d.blocks;
  const ownedW = Array.isArray(raw.ownedWeapons) ? raw.ownedWeapons : d.ownedWeapons;
  const ownedA = Array.isArray(raw.ownedArmors) ? raw.ownedArmors : d.ownedArmors;
  return {
    coins: Math.max(0, Number(raw.coins) || 0),
    level: clampInt(raw.level ?? 1, 1, 10),
    xp: Math.max(0, Number(raw.xp) || 0),
    unspent: Math.max(0, Number(raw.unspent) || 0),
    blocks: {
      stamina: clampInt(blocks.stamina ?? 0, 0, 10),
      struggle: clampInt(blocks.struggle ?? 0, 0, 10),
      tickle: clampInt(blocks.tickle ?? 0, 0, 10),
    },
    look: clampInt(raw.look ?? 0, 0, 12),
    weapon: Number(raw.weapon) || 0,
    armor: Number(raw.armor) || 0,
    // Equipped loadout always stays owned so Look/Skills/Shop reloads stay consistent.
    ownedWeapons: uniqueIds([0, ...ownedW, Number(raw.weapon) || 0]),
    ownedArmors: uniqueIds([0, ...ownedA, Number(raw.armor) || 0]),
  };
}

function clampInt(n: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, Math.round(Number(n) || 0)));
}

function uniqueIds(ids: number[]): number[] {
  return [...new Set(ids.map((n) => Math.max(0, Math.round(Number(n) || 0))))].sort((a, b) => a - b);
}
