/** Amateur Team Quick SFX — procedural sample pack + oscillator fallbacks (vanish-v4). */

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
  playCue("reappear", 0.78, () => {
    sting(800, 0.075, "sine", 0.034, 0, 1720);
    sting(1360, 0.07, "sine", 0.058, 0.014);
    sting(2040, 0.085, "triangle", 0.038, 0.032);
    sting(2720, 0.065, "sine", 0.024, 0.054);
    sting(3400, 0.05, "sine", 0.014, 0.078);
    sting(4000, 0.035, "sine", 0.008, 0.1);
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
  playCue("vanish", 0.82, () => {
    sting(58, 0.16, "sine", 0.055);
    sting(800, 0.48, "sine", 0.062, 0.016, 32);
    sting(520, 0.36, "triangle", 0.042, 0.042, 24);
    sting(340, 0.3, "sawtooth", 0.026, 0.08, 18);
    sting(220, 0.26, "sine", 0.02, 0.125, 14);
    sting(150, 0.22, "sine", 0.014, 0.17, 12);
    sting(100, 0.18, "sine", 0.01, 0.22, 10);
  });
}

/**
 * Soft countdown beat — last ~3s spawn / leave / vanish clock (`public/sfx/countdown-tick`).
 * @param gain linear peak
 * @param step HUD ceil 3/2/1 (pitches up toward 1); omit/other = neutral
 * @param soft vanish-clock mode: slightly lower pitch so it stays a tell vs spawn alarm
 */
export function stingCountdownTick(gain = 0.48, step = 2, soft = false) {
  // Wider rate ladder than #42 so 3→2→1 is unmistakable.
  let rate = step <= 1 ? 1.42 : step === 2 ? 1.0 : 0.72;
  let freq = step <= 1 ? 980 : step === 2 ? 700 : 460;
  if (soft) {
    // Stronger soft-mode detune so vanish clock stays a tell vs spawn alarm.
    rate *= 0.9;
    freq *= 0.86;
  }
  playCue(
    "countdown-tick",
    gain,
    () => {
      sting(freq, 0.048, "sine", Math.min(0.062, gain * 0.125));
      sting(freq * 1.5, 0.028, "triangle", Math.min(0.036, gain * 0.07), 0.012);
      if (step <= 1) {
        sting(freq * 2, 0.024, "sine", soft ? 0.012 : 0.026, 0.026);
        sting(freq * 2.5, 0.018, "triangle", soft ? 0.008 : 0.018, 0.04);
        if (!soft) {
          sting(freq * 3, 0.014, "sine", 0.012, 0.052);
          sting(freq * 3.5, 0.012, "triangle", 0.008, 0.064);
        }
      } else if (step === 2) {
        sting(freq * 2, 0.02, "sine", soft ? 0.008 : 0.016, 0.028);
        if (!soft) sting(freq * 2.5, 0.014, "triangle", 0.01, 0.042);
      } else if (!soft) {
        // Step 3: soft wood body only — no upper sparkle.
        sting(freq * 0.5, 0.042, "triangle", Math.min(0.022, gain * 0.045), 0.006);
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
