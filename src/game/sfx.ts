/** Amateur Team Quick SFX — procedural sample pack + oscillator fallbacks (vanish-v15). */

type CueId =
  | "tickle-lock"
  | "tickle"
  | "vanish"
  | "tap-out"
  | "reappear"
  | "escape"
  | "win"
  | "lose"
  | "buy"
  | "spend"
  | "countdown-tick";

const SAMPLE_CUES: CueId[] = [
  "tickle-lock",
  "tickle",
  "vanish",
  "tap-out",
  "reappear",
  "escape",
  "win",
  "lose",
  "buy",
  "spend",
  "countdown-tick",
];

function ctx(): AudioContext | null {
  try {
    return new AudioContext();
  } catch {
    return null;
  }
}

let ac: AudioContext | null = null;
const buffers = new Map<CueId, AudioBuffer>();
let loadPromise: Promise<void> | null = null;

function ensure(): AudioContext | null {
  if (!ac) ac = ctx();
  return ac;
}

/** Resolve a public/sfx asset URL (Vite `base: "./"` friendly). */
function cueUrl(id: CueId, ext: "ogg" | "mp3"): string {
  const base = import.meta.env.BASE_URL || "./";
  const root = base.endsWith("/") ? base : `${base}/`;
  return `${root}sfx/${id}.${ext}`;
}

async function fetchDecode(a: AudioContext, url: string): Promise<AudioBuffer | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const raw = await res.arrayBuffer();
    return await a.decodeAudioData(raw.slice(0));
  } catch {
    return null;
  }
}

async function loadCue(a: AudioContext, id: CueId): Promise<void> {
  // Prefer ogg (small); fall back to mp3 for Safari / older WebKit.
  const buf =
    (await fetchDecode(a, cueUrl(id, "ogg"))) ?? (await fetchDecode(a, cueUrl(id, "mp3")));
  if (buf) buffers.set(id, buf);
}

function ensureSamplesLoaded(): Promise<void> {
  const a = ensure();
  if (!a) return Promise.resolve();
  if (loadPromise) return loadPromise;
  loadPromise = (async () => {
    await Promise.all(SAMPLE_CUES.map((id) => loadCue(a, id)));
  })();
  return loadPromise;
}

function playBuffer(id: CueId, gain = 0.7, rate = 1): boolean {
  const a = ensure();
  const buf = buffers.get(id);
  if (!a || !buf) return false;
  try {
    if (a.state === "suspended") void a.resume();
    const src = a.createBufferSource();
    const g = a.createGain();
    const t0 = a.currentTime;
    src.buffer = buf;
    src.playbackRate.setValueAtTime(Math.max(0.5, Math.min(2, rate)), t0);
    // Soft attack envelope so sample stingers don't click on start.
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001, gain), t0 + 0.006);
    src.connect(g);
    g.connect(a.destination);
    src.start(t0);
    return true;
  } catch {
    return false;
  }
}

/** Play sample if loaded; otherwise oscillator fallback. Always kick preload. */
function playCue(id: CueId, gain: number, fallback: () => void, rate = 1) {
  void ensureSamplesLoaded();
  if (playBuffer(id, gain, rate)) return;
  fallback();
}

export function blip(freq: number, dur = 0.08, type: OscillatorType = "triangle", gain = 0.05) {
  if (!ac) ac = ctx();
  if (!ac) return;
  const o = ac.createOscillator();
  const g = ac.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.value = gain;
  g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
  o.connect(g);
  g.connect(ac.destination);
  o.start();
  o.stop(ac.currentTime + dur);
}

/** Oscillator tone with optional delay and frequency sweep. */
function sting(
  freq: number,
  dur: number,
  type: OscillatorType,
  gain = 0.055,
  delay = 0,
  endFreq?: number,
) {
  const a = ensure();
  if (!a) return;
  const t0 = a.currentTime + delay;
  const o = a.createOscillator();
  const g = a.createGain();
  o.type = type;
  o.frequency.setValueAtTime(Math.max(1, freq), t0);
  if (endFreq != null) {
    o.frequency.exponentialRampToValueAtTime(Math.max(1, endFreq), t0 + dur);
  }
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(gain, t0 + 0.008);
  g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
  o.connect(g);
  g.connect(a.destination);
  o.start(t0);
  o.stop(t0 + dur);
}

export function resumeAudio() {
  if (!ac) ac = ctx();
  if (ac?.state === "suspended") void ac.resume();
  void ensureSamplesLoaded();
}

let unlockBound = false;
let unlockChirpPlayed = false;

/** Soft confirmation chirp when AudioContext first unlocks (not a combat cue). */
function softUnlockChirp() {
  if (unlockChirpPlayed) return;
  unlockChirpPlayed = true;
  const a = ensure();
  if (!a) return;
  try {
    if (a.state === "suspended") void a.resume();
    // Quiet rising blip — tells the player audio is live without fighting combat SFX.
    sting(420, 0.07, "sine", 0.028, 0, 680);
    sting(880, 0.05, "triangle", 0.016, 0.04);
  } catch {
    /* ignore */
  }
}

/** Unlock AudioContext + preload samples on first user gesture (autoplay policy). */
export function bindAudioUnlock(target: Document | HTMLElement = document) {
  if (unlockBound) return;
  unlockBound = true;
  const kick = () => {
    resumeAudio();
    softUnlockChirp();
  };
  target.addEventListener("pointerdown", kick, { passive: true });
  target.addEventListener("keydown", kick);
  target.addEventListener("touchstart", kick, { passive: true });
}

/** Short grab/attach — tickle lock (`public/sfx/tickle-lock`). */
export function stingStart() {
  playCue("tickle-lock", 0.75, () => sting(155, 0.09, "square", 0.06));
}

/** Nearby reappear tell — bright rising ping (`public/sfx/reappear`). */
export function stingReappear() {
  playCue("reappear", 1.32, () => {
    sting(1440, 0.054, "sine", 0.06, 0, 3400);
    sting(2500, 0.048, "sine", 0.104, 0.003);
    sting(3750, 0.062, "triangle", 0.084, 0.01);
    sting(5000, 0.044, "sine", 0.064, 0.022);
    sting(6250, 0.036, "sine", 0.052, 0.034);
    sting(7500, 0.026, "sine", 0.038, 0.048);
    sting(8750, 0.02, "sine", 0.026, 0.062);
    sting(10000, 0.016, "sine", 0.02, 0.078);
    sting(11250, 0.012, "sine", 0.014, 0.092);
    sting(12500, 0.008, "sine", 0.01, 0.106);
    sting(13750, 0.006, "sine", 0.006, 0.118);
    sting(15000, 0.004, "sine", 0.004, 0.128);
    sting(16250, 0.003, "sine", 0.0025, 0.138);
    sting(17500, 0.002, "sine", 0.0015, 0.148);
  });
}

/** Rapid high flutter — tickle tap (`public/sfx/tickle`, loop-safe). */
export function stingTickle() {
  playCue("tickle", 0.62, () => {
    sting(720, 0.045, "triangle", 0.045);
    sting(960, 0.05, "triangle", 0.04, 0.04);
  });
}

/** Soft rising tick — escape fill (`public/sfx/escape`). */
export function stingEscape() {
  playCue("escape", 0.55, () => sting(180, 0.2, "sawtooth", 0.05, 0, 430));
}

/** Falling whoosh-out — vanish (`public/sfx/vanish`). */
export function stingVanish() {
  playCue("vanish", 1.38, () => {
    sting(14, 0.36, "sine", 0.12);
    sting(1200, 0.84, "sine", 0.116, 0.004, 9.5);
    sting(820, 0.7, "triangle", 0.088, 0.018, 8.5);
    sting(490, 0.64, "sawtooth", 0.06, 0.038, 6.5);
    sting(320, 0.58, "sine", 0.048, 0.07, 5.0);
    sting(200, 0.52, "sine", 0.042, 0.105, 3.8);
    sting(140, 0.46, "sine", 0.036, 0.145, 3.1);
    sting(100, 0.42, "sine", 0.03, 0.19, 2.4);
    sting(72, 0.38, "sine", 0.024, 0.24, 1.7);
    sting(52, 0.34, "sine", 0.016, 0.29, 1.2);
    sting(40, 0.28, "sine", 0.012, 0.34, 0.9);
    sting(32, 0.22, "sine", 0.008, 0.4, 0.7);
    sting(24, 0.16, "sine", 0.005, 0.46, 0.52);
    sting(18, 0.12, "sine", 0.0035, 0.52, 0.4);
    sting(14, 0.09, "sine", 0.0025, 0.58, 0.3);
    sting(10, 0.06, "sine", 0.0015, 0.64, 0.22);
  });
}

/**
 * Soft countdown beat — last ~3s spawn / leave / vanish clock (`public/sfx/countdown-tick`).
 * @param gain linear peak
 * @param step HUD ceil 3/2/1 (pitches up toward 1); omit/other = neutral
 * @param soft vanish-clock mode: slightly lower pitch so it stays a tell vs spawn alarm
 */
export function stingCountdownTick(gain = 0.48, step = 2, soft = false) {
  // Wider rate ladder than #87 so 3→2→1 is unmistakable.
  let rate = step <= 1 ? 2.7 : step === 2 ? 1.0 : 0.18;
  let freq = step <= 1 ? 1850 : step === 2 ? 700 : 140;
  if (soft) {
    // Stronger soft-mode detune so vanish clock stays a tell vs spawn alarm.
    rate *= 0.42;
    freq *= 0.38;
  }
  playCue(
    "countdown-tick",
    gain,
    () => {
      sting(freq, 0.038, "sine", Math.min(0.08, gain * 0.15));
      sting(freq * 1.5, 0.018, "triangle", Math.min(0.046, gain * 0.08), 0.006);
      if (step <= 1) {
        sting(freq * 2, 0.014, "sine", soft ? 0.004 : 0.044, 0.016);
        sting(freq * 2.5, 0.011, "triangle", soft ? 0.002 : 0.032, 0.028);
        if (!soft) {
          sting(freq * 3, 0.01, "sine", 0.022, 0.04);
          sting(freq * 3.5, 0.008, "triangle", 0.018, 0.05);
          sting(freq * 4, 0.007, "sine", 0.014, 0.06);
          sting(freq * 4.5, 0.006, "sine", 0.01, 0.072);
          sting(freq * 5, 0.005, "triangle", 0.007, 0.084);
          sting(freq * 5.5, 0.004, "sine", 0.005, 0.094);
          sting(freq * 6, 0.003, "triangle", 0.003, 0.104);
        }
      } else if (step === 2) {
        sting(freq * 2, 0.011, "sine", soft ? 0.002 : 0.026, 0.018);
        if (!soft) {
          sting(freq * 2.5, 0.01, "triangle", 0.02, 0.032);
          sting(freq * 3, 0.008, "sine", 0.015, 0.044);
          sting(freq * 3.5, 0.006, "triangle", 0.011, 0.056);
          sting(freq * 4, 0.005, "sine", 0.007, 0.068);
          sting(freq * 4.5, 0.004, "triangle", 0.005, 0.08);
          sting(freq * 5, 0.003, "sine", 0.003, 0.09);
        }
      } else if (!soft) {
        // Step 3: soft wood body only — no upper sparkle.
        sting(freq * 0.5, 0.052, "triangle", Math.min(0.032, gain * 0.056), 0.003);
      }
    },
    rate,
  );
}

/** Grim sport buzzer — tap-out (`public/sfx/tap-out`). */
export function stingTapOut() {
  playCue("tap-out", 0.72, () => {
    sting(148, 0.18, "sawtooth", 0.07);
    sting(92, 0.16, "square", 0.055, 0.14);
  });
}

/** Rising major triad — win (`public/sfx/win`). */
export function stingWin() {
  playCue("win", 0.7, () => {
    sting(392, 0.14, "sine", 0.05);
    sting(523, 0.16, "sine", 0.05, 0.1);
    sting(659, 0.22, "triangle", 0.055, 0.2);
  });
}

/** Falling minor — lose (`public/sfx/lose`). */
export function stingLose() {
  playCue("lose", 0.68, () => {
    sting(277, 0.16, "triangle", 0.055);
    sting(208, 0.18, "triangle", 0.05, 0.12);
    sting(131, 0.28, "sawtooth", 0.045, 0.24, 90);
  });
}

/** Bright coin ding — buy (`public/sfx/buy`). */
export function stingBuy() {
  playCue("buy", 0.7, () => {
    sting(988, 0.12, "sine", 0.06);
    sting(1480, 0.08, "triangle", 0.03, 0.02);
  });
}

/** Muted down-chime — spend (`public/sfx/spend`). */
export function stingSpend() {
  playCue("spend", 0.62, () => sting(392, 0.14, "triangle", 0.05, 0, 196));
}
