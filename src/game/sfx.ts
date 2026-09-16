function ctx(): AudioContext | null {
  try {
    return new AudioContext();
  } catch {
    return null;
  }
}

let ac: AudioContext | null = null;

function ensure(): AudioContext | null {
  if (!ac) ac = ctx();
  return ac;
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
  ac?.resume();
}

/** Short square thump — tickle lock. */
export function stingStart() {
  sting(155, 0.09, "square", 0.06);
}

/** Nearby reappear tell — white ping, not vanish/rose. */
export function stingReappear() {
  sting(880, 0.1, "sine", 0.045);
  sting(1320, 0.12, "triangle", 0.03, 0.04);
}

/** Rapid high flutter — tickle tap. */
export function stingTickle() {
  sting(720, 0.045, "triangle", 0.045);
  sting(960, 0.05, "triangle", 0.04, 0.04);
}

/** Rising whoosh — escape fill. */
export function stingEscape() {
  sting(180, 0.2, "sawtooth", 0.05, 0, 430);
}

/** Falling whoosh-out — vanish. */
export function stingVanish() {
  sting(640, 0.32, "sine", 0.05, 0, 88);
  sting(420, 0.22, "triangle", 0.03, 0.04, 70);
}

/** Grim sport buzzer — tap-out. */
export function stingTapOut() {
  sting(148, 0.18, "sawtooth", 0.07);
  sting(92, 0.16, "square", 0.055, 0.14);
}

/** Rising major triad — win. */
export function stingWin() {
  sting(392, 0.14, "sine", 0.05);
  sting(523, 0.16, "sine", 0.05, 0.1);
  sting(659, 0.22, "triangle", 0.055, 0.2);
}

/** Falling minor — lose. */
export function stingLose() {
  sting(277, 0.16, "triangle", 0.055);
  sting(208, 0.18, "triangle", 0.05, 0.12);
  sting(131, 0.28, "sawtooth", 0.045, 0.24, 90);
}

/** Bright coin ding — buy. */
export function stingBuy() {
  sting(988, 0.12, "sine", 0.06);
  sting(1480, 0.08, "triangle", 0.03, 0.02);
}

/** Muted down-chime — spend. */
export function stingSpend() {
  sting(392, 0.14, "triangle", 0.05, 0, 196);
}
