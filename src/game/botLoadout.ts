import type { SaveData } from "./types";
import { ARMORS, AMATEUR_BLOCK_CAP, WEAPONS } from "./gear";

export interface BotKit {
  blocks: { stamina: number; struggle: number; tickle: number };
  weapon: number;
  armor: number;
}

/** Amateur AI: spend the same SP pool as Elara's level (7 + level-1), never all-cap a six-stack. */
export function rollBotKit(level: number, rng = Math.random): BotKit {
  const lv = Math.max(1, Math.min(10, level));
  const sp = 7 + (lv - 1);
  const blocks = { stamina: 0, struggle: 0, tickle: 0 };
  const keys: Array<keyof typeof blocks> = ["stamina", "struggle", "tickle"];
  for (let i = 0; i < sp; i++) {
    const open = keys.filter((k) => blocks[k] < AMATEUR_BLOCK_CAP);
    if (!open.length) break;
    const k = open[Math.floor(rng() * open.length)];
    blocks[k] += 1;
  }

  const tier0 = lv <= 2 ? 0.4 : lv <= 5 ? 0.22 : 0.12;
  let weapon = 0;
  let armor = 0;
  if (rng() > tier0) {
    const maxW = Math.min(WEAPONS.length, Math.max(1, Math.ceil(lv * 0.7)));
    weapon = 1 + Math.floor(rng() * maxW);
  }
  if (rng() > tier0) {
    const maxA = Math.min(ARMORS.length, Math.max(1, Math.ceil(lv * 0.8)));
    armor = 1 + Math.floor(rng() * maxA);
  }
  return { blocks, weapon, armor };
}

export function playerKitFromSave(s: SaveData): BotKit {
  return { blocks: { ...s.blocks }, weapon: s.weapon, armor: s.armor };
}
