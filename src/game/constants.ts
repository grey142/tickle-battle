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
/**
 * Load-time range guard for tuning constants (vanish-recal). Out-of-range values are
 * clamped and warned once, so compounded nudges can't silently drift into broken ranges.
 */
export function tuned(name: string, v: number, lo: number, hi: number): number {
  if (!Number.isFinite(v)) {
    console.warn(`[tuning] ${name}=${v} not finite; using ${lo}`);
    return lo;
  }
  if (v < lo || v > hi) {
    const c = Math.min(hi, Math.max(lo, v));
    console.warn(`[tuning] ${name}=${v} outside [${lo}, ${hi}]; clamped to ${c}`);
    return c;
  }
  return v;
}

/** Seconds of both-ways ignore after vanish; does not stack with vanish remaining. Then leftover overlap still needs a fresh rear/pack edge. */
export const REAPPEAR_IGNORE = tuned("REAPPEAR_IGNORE", 0.85, 0.3, 2);
/** Distance (m) from the player within which a reappear plays the sound + toast. */
export const REAPPEAR_TELL = tuned("REAPPEAR_TELL", 12, 4, 20);
/** Seconds the white reappear rim stays lit. */
export const REAPPEAR_FLASH = tuned("REAPPEAR_FLASH", 0.5, 0.2, 1.2);
/** PointLight intensity of the white reappear rim (normal team rim is 2.2). */
export const REAPPEAR_RIM = tuned("REAPPEAR_RIM", 6.8, 3, 10);

/*
 * Five-frame tickle intensity (Support 4, vanish-recal). Intensity is 0..1:
 * f0–f1 below 0.2, f1–f2 to 0.4, f2–f3 to 0.6, f3–f4 to 0.8, f3/f4 peak lean above 0.8.
 */
export const TICKLE_BANDS: readonly number[] = [0.2, 0.4, 0.6, 0.8].map((b, i) =>
  tuned(`TICKLE_BANDS[${i}]`, b, 0.05 + i * 0.2, 0.35 + i * 0.2),
);
/** Hysteresis around each band edge (0..1 units) so edges don't thrash frames. */
export const TICKLE_HYST = tuned("TICKLE_HYST", 0.035, 0, 0.08);
/** Smoothing rates (1/s): climb into harder windows a bit faster than easing out. */
export const TICKLE_CLIMB = tuned("TICKLE_CLIMB", 8.2, 1, 20);
export const TICKLE_EASE = tuned("TICKLE_EASE", 5.4, 1, 20);
/** Symmetric S-curve exponent on victim drain (1 = linear). */
export const TICKLE_CONTRAST_POW = tuned("TICKLE_CONTRAST_POW", 1.28, 1, 2);
/** Additive intensity per extra tickler in the pack, and its cap. */
export const TICKLE_PACK_BOOST = tuned("TICKLE_PACK_BOOST", 0.04, 0, 0.08);
export const TICKLE_PACK_BOOST_CAP = tuned("TICKLE_PACK_BOOST_CAP", 0.16, 0, 0.25);

/** Vanish / reappear sample gains (linear, <= 1 so WebAudio never clips). */
export const SFX_VANISH_GAIN = tuned("SFX_VANISH_GAIN", 0.78, 0, 1);
export const SFX_REAPPEAR_GAIN = tuned("SFX_REAPPEAR_GAIN", 0.74, 0, 1);
/** Countdown tick playbackRate + fallback pitch (Hz) for HUD ceil 3 / 2 / 1. */
export const TICK_RATE: readonly number[] = [0.9, 1.0, 1.12].map((r, i) => tuned(`TICK_RATE[${i}]`, r, 0.75, 1.35));
export const TICK_FREQ: readonly number[] = [560, 700, 860].map((f, i) => tuned(`TICK_FREQ[${i}]`, f, 300, 1400));
/** Spawn countdown tick gains for ceil 3 / 2 / 1, and the softer player-vanish clock. */
export const TICK_GAIN: readonly number[] = [0.42, 0.54, 0.68].map((g, i) => tuned(`TICK_GAIN[${i}]`, g, 0.1, 1));
export const VANISH_TICK_GAIN: readonly number[] = [0.26, 0.32, 0.4].map((g, i) =>
  tuned(`VANISH_TICK_GAIN[${i}]`, g, 0.05, 1),
);

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
