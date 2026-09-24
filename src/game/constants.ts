export const PORT = 43180;

export const TEAM = { CYAN: 0, AMBER: 1 } as const;

export const CONTACT = 1.38;
export const PLAYER_SLACK = 0.55;
export const TICKLE_REACH = 1.9;
/** Mid-lane amber who faces +X so cyan walking the lane meets a back. */
export const BAIT_X = -8.2;
export const BAIT_Z = 0;
/** Cyan may not steal the mid-lane bait for this many seconds after 0. */
export const BAIT_GRACE = 12;
export const CAPSULE_R = 0.4;
export const CAPSULE_H = 1.72;
export const EYE = 1.52;
export const SPEED = 6.4;
export const TURN_SMOOTH = 10;
export const REAR_COS = Math.cos((70 * Math.PI) / 180);
export const PLAYER_REAR_COS = Math.cos((80 * Math.PI) / 180);
export const TAP_CD = 0.35;
export const VANISH_T = 20;
export const NUDGE_CAP = 1.5;
export const NUDGE_T = 0.42;
export const CANCEL_CD = 0.6;
export const COUNTDOWN = 10;
export const TIMED_T = 240;
export const RESPAWN_IGNORE = 5;
export const JOIN_MAX = 6;
/** Seconds before an AI may join another pile (or re-join the same ticklee). */
export const PILE_CD = 2.75;
/** Sticky roles still gated, but shorter so packs form without hive-mind spam. */
export const PILE_CD_STICKY = 1.35;
export const FLASH_T = 1;
export const REGEN_DELAY = 3;
export const REGEN_PS = 6;
export const CONTACT_GRACE = 0.25;
/** Both-ways after vanish; does not stack with vanish remaining. Then leftover overlap still needs a fresh rear/pack edge. */
export const REAPPEAR_IGNORE = 2.32;
/** Nearby band for reappear sound + white rim flash (not rose). */
export const REAPPEAR_TELL = 41;
export const REAPPEAR_FLASH = 2.18;

export const BASE = { stamina: 3, struggle: 3, tickle: 3 };
export const K_STAMINA = 28;
/** Per-tap stamina drain scalar. Lead: tap-outs ~3× harder → cut damage to 1/3 (was 2.85). */
export const K_DAMAGE = 0.95;
export const K_ESCAPE = 11.2;

export const SOCKETS: [number, number, number][] = [
  [0, 0.95, 0.72],
  [0.7, 0.95, 0.1],
  [0.55, 1.28, 0.12],
  [0.15, 0.22, 0.55],
  [0, 1.48, -0.35],
  [0.45, 0.48, 0.15],
];

export const LOOKS = [
  { hair: 0x1a1210, skin: 0xc4a090, cloth: 0x3a2e38, name: "Elara Case" },
  { hair: 0x3b2218, skin: 0x8d5a3c, cloth: 0x2c3340, name: "Kora Vale" },
  { hair: 0xc8b48a, skin: 0xe0c3a8, cloth: 0x4a3830, name: "Sable Quinn" },
  { hair: 0x0e0c0c, skin: 0x5c3a2a, cloth: 0x2a2428, name: "Ryn Ashford" },
  { hair: 0x6a3428, skin: 0xd4a07a, cloth: 0x24322e, name: "Vesh Marlowe" },
  { hair: 0x2a1a22, skin: 0xb07a62, cloth: 0x3a3034, name: "Nim Cortez" },
  { hair: 0x4a3020, skin: 0xf0d2b4, cloth: 0x2e2830, name: "Lyra Finch" },
  { hair: 0x111014, skin: 0x7a4e38, cloth: 0x403238, name: "Toren Blake" },
  { hair: 0x9a7a50, skin: 0xcfa080, cloth: 0x22303a, name: "Mira Solis" },
  { hair: 0x201818, skin: 0x93684c, cloth: 0x38302c, name: "Cass Wynn" },
  { hair: 0x5a4038, skin: 0xddb89a, cloth: 0x2a2834, name: "Juno Hale" },
  { hair: 0x140c10, skin: 0x6e4634, cloth: 0x3a2c28, name: "Briar Knox" },
];

/** Amateur 12 stills (metal-free). Elara Case is the player look, not in this pool. Match uses 11; Ember Lang sits out. */
export const AMATEUR_ROSTER: { slug: string; display: string }[] = [
  { slug: "KoraVale", display: "Kora Vale" },
  { slug: "SableQuinn", display: "Sable Quinn" },
  { slug: "RynAshford", display: "Ryn Ashford" },
  { slug: "VeshMarlowe", display: "Vesh Marlowe" },
  { slug: "NimCortez", display: "Nim Cortez" },
  { slug: "LyraFinch", display: "Lyra Finch" },
  { slug: "TorenBlake", display: "Toren Blake" },
  { slug: "MiraSolis", display: "Mira Solis" },
  { slug: "CassWynn", display: "Cass Wynn" },
  { slug: "JunoHale", display: "Juno Hale" },
  { slug: "BriarKnox", display: "Briar Knox" },
  { slug: "EmberLang", display: "Ember Lang" },
];

export const BOT_NAMES = AMATEUR_ROSTER.map((r) => r.display);
