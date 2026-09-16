/// <reference types="vite/client" />

interface TbSnap {
  mode: string;
  countdown: number;
  liveT: number;
  room?: string;
  occ?: string;
  pos: [number, number] | null;
  yaw: number | null;
  joinOn?: number;
  nudgeT?: number;
  tickleHeld?: boolean;
  escapeHeld?: boolean;
  keys: string[];
  toast: string;
  stam: number;
  escape: number;
  vanishLeft: number;
  reappearIgnore?: number;
  spawnIgnore?: number;
  rising?: boolean;
  pairCd?: number;
  reappearFlash?: number;
  vanishHud?: boolean;
  bait: {
    name: string;
    occ: string;
    pos: [number, number];
    yaw: number;
    stam: number;
    escape: number;
    vanish: number;
    reappearIgnore?: number;
    reappearFlash?: number;
  } | null;
  rear: boolean;
  distBait: number | null;
  coins: number;
  look?: number;
  weapon?: number;
  armor?: number;
  ownedWeapons?: number[];
  ownedArmors?: number[];
  padActive?: boolean;
  padMove?: number[];
  coinsEarned: number;
  payouts: { role: string; coins: number; victim: string }[];
  loadout: string;
  lockedWeapon?: number;
  lockedArmor?: number;
  hub?: { room: string; homeTab: string; shopTab: string; focus: number; arenaMode: string };
  result: string;
}

interface Window {
  __tb?: () => TbSnap;
  __tbHold?: (codes: string[]) => void;
  __tbRelease?: () => void;
  __tbFaceLane?: () => void;
  __tbForceResults?: () => void;
  __tbParkBehindBait?: () => void;
  __tbParkAway?: () => void;
  __tbForceWallCancel?: () => void;
  __tbBenchBots?: () => void;
  __tbStartOnPlayer?: () => void;
  __tbEndVanish?: () => void;
  __tbConnectPad?: () => void;
  __tbPad?: (opts: { axes?: number[]; buttons?: Record<number, number>; reset?: boolean }) => void;
  __tbDisconnectPad?: () => void;
}
