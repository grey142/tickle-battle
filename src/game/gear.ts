/** Amateur shop ladder. Prototype integers follow SQ-04 (weapon 1 ≈ 6–9 coins, monotonic, top ≈ dozen Team Quick openers). Q-45 names/% are unsigned — each step is strictly stronger, armor combined ≤ 30%. */

export interface WeaponDef {
  id: number;
  name: string;
  price: number;
  ticklePct: number;
  blurb: string;
}

export interface ArmorDef {
  id: number;
  name: string;
  price: number;
  stamPct: number;
  escPct: number;
  blurb: string;
}

export const BARE_HAND: WeaponDef = {
  id: 0,
  name: "Bare hand",
  price: 0,
  ticklePct: 0,
  blurb: "Tier 0. No technique bonus.",
};

export const BASE_ATTIRE: ArmorDef = {
  id: 0,
  name: "Base attire",
  price: 0,
  stamPct: 0,
  escPct: 0,
  blurb: "Bikini / shorts. Tier 0.",
};

/** Shop sells 1–6. Combined tickle % caps at 30%. */
export const WEAPONS: WeaponDef[] = [
  { id: 1, name: "Palm Mitts", price: 8, ticklePct: 0.05, blurb: "Padded palms. +5% tickle." },
  { id: 2, name: "Rib Brush", price: 14, ticklePct: 0.1, blurb: "Soft rake along the ribs. +10% tickle." },
  { id: 3, name: "Nerve Wand", price: 22, ticklePct: 0.15, blurb: "Narrow contact point. +15% tickle." },
  { id: 4, name: "Flank Fans", price: 32, ticklePct: 0.2, blurb: "Twin paddles. +20% tickle." },
  { id: 5, name: "Spine Rake", price: 44, ticklePct: 0.25, blurb: "Long reach on the back line. +25% tickle." },
  { id: 6, name: "Chorus Forks", price: 58, ticklePct: 0.3, blurb: "Amateur cap piece. +30% tickle." },
];

/** Shop sells 1–8. Combined stam+escape % caps at 30%. */
export const ARMORS: ArmorDef[] = [
  { id: 1, name: "Weave Shorts", price: 7, stamPct: 0.04, escPct: 0, blurb: "+4% stamina." },
  { id: 2, name: "Mesh Wrap", price: 12, stamPct: 0.06, escPct: 0.02, blurb: "+6% stam / +2% escape." },
  { id: 3, name: "Rib Guard", price: 18, stamPct: 0.08, escPct: 0.04, blurb: "+8% stam / +4% escape." },
  { id: 4, name: "Plasm Vest", price: 26, stamPct: 0.1, escPct: 0.06, blurb: "+10% stam / +6% escape." },
  { id: 5, name: "Night Shell", price: 36, stamPct: 0.12, escPct: 0.08, blurb: "+12% stam / +8% escape." },
  { id: 6, name: "Lattice Harness", price: 48, stamPct: 0.14, escPct: 0.1, blurb: "+14% stam / +10% escape." },
  { id: 7, name: "Vault Plate", price: 62, stamPct: 0.16, escPct: 0.12, blurb: "+16% stam / +12% escape." },
  { id: 8, name: "Apex Weave", price: 78, stamPct: 0.18, escPct: 0.12, blurb: "+18% stam / +12% escape. Amateur cap." },
];

export const AMATEUR_BLOCK_CAP = 10;
export const SKILL_TRACK_LEN = 25;

export function weaponById(id: number): WeaponDef {
  if (id === 0) return BARE_HAND;
  return WEAPONS.find((w) => w.id === id) ?? BARE_HAND;
}

export function armorById(id: number): ArmorDef {
  if (id === 0) return BASE_ATTIRE;
  return ARMORS.find((a) => a.id === id) ?? BASE_ATTIRE;
}

export function gearLabel(weaponId: number, armorId: number): string {
  return `${weaponById(weaponId).name} / ${armorById(armorId).name}`;
}

export function combinedArmorPct(a: ArmorDef): number {
  return a.stamPct + a.escPct;
}
