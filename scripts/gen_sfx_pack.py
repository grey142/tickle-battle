#!/usr/bin/env python3
"""Procedural original SFX for Amateur Team Quick (no copyrighted samples)."""
from __future__ import annotations

import math
import struct
import wave
from pathlib import Path

import numpy as np

SR = 44100
OUT = Path(__file__).resolve().parents[1] / "public" / "sfx"


def write_wav(path: Path, samples: np.ndarray) -> None:
    samples = np.clip(samples, -1.0, 1.0)
    pcm = (samples * 32767.0).astype(np.int16)
    path.parent.mkdir(parents=True, exist_ok=True)
    with wave.open(str(path), "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(SR)
        w.writeframes(pcm.tobytes())


def env_adsr(n: int, a: float, d: float, s: float, r: float, sustain_level: float = 0.7) -> np.ndarray:
    a_n = max(1, int(a * SR))
    d_n = max(1, int(d * SR))
    r_n = max(1, int(r * SR))
    s_n = max(0, n - a_n - d_n - r_n)
    attack = np.linspace(0.0, 1.0, a_n, endpoint=False)
    decay = np.linspace(1.0, sustain_level, d_n, endpoint=False)
    sustain = np.full(s_n, sustain_level)
    release = np.linspace(sustain_level, 0.0, r_n)
    e = np.concatenate([attack, decay, sustain, release])
    if len(e) < n:
        e = np.pad(e, (0, n - len(e)))
    return e[:n]


def soft_clip(x: np.ndarray, drive: float = 1.4) -> np.ndarray:
    return np.tanh(x * drive) / math.tanh(drive)


def one_pole_lp(x: np.ndarray, cutoff_hz: float) -> np.ndarray:
    # Simple one-pole lowpass
    rc = 1.0 / (2.0 * math.pi * max(20.0, cutoff_hz))
    dt = 1.0 / SR
    a = dt / (rc + dt)
    y = np.zeros_like(x)
    prev = 0.0
    for i, v in enumerate(x):
        prev = prev + a * (v - prev)
        y[i] = prev
    return y


def one_pole_hp(x: np.ndarray, cutoff_hz: float) -> np.ndarray:
    return x - one_pole_lp(x, cutoff_hz)


def bandpass(x: np.ndarray, lo: float, hi: float) -> np.ndarray:
    return one_pole_lp(one_pole_hp(x, lo), hi)


def noise(n: int, rng: np.random.Generator) -> np.ndarray:
    return rng.standard_normal(n).astype(np.float64)


def tone(n: int, freq: float, phase0: float = 0.0) -> np.ndarray:
    t = np.arange(n) / SR
    return np.sin(2 * math.pi * freq * t + phase0)


def sweep_tone(n: int, f0: float, f1: float) -> np.ndarray:
    t = np.arange(n) / SR
    # linear freq sweep via phase integrate
    freqs = np.linspace(f0, f1, n)
    phase = 2 * math.pi * np.cumsum(freqs) / SR
    return np.sin(phase)


def make_tickle_lock(rng: np.random.Generator) -> np.ndarray:
    """Grab/attach: soft body thump + short fabric scrape."""
    dur = 0.28
    n = int(SR * dur)
    # Low thump body
    thump = soft_clip(sweep_tone(n, 140, 70) * 0.9 + tone(n, 55) * 0.35)
    thump *= env_adsr(n, 0.004, 0.05, 0.05, 0.18, 0.35)
    # Filtered noise scrape (mid)
    scrape = bandpass(noise(n, rng), 400, 2800) * 0.55
    scrape *= env_adsr(n, 0.008, 0.04, 0.02, 0.12, 0.25)
    # Soft click transient
    click_n = int(0.012 * SR)
    click = bandpass(noise(click_n, rng), 1200, 6000) * 0.7
    click *= np.linspace(1.0, 0.0, click_n) ** 2
    out = thump * 0.85 + scrape * 0.55
    out[:click_n] += click
    out = soft_clip(one_pole_lp(out, 4500) * 0.95)
    # fade tail
    fade = np.linspace(1.0, 0.0, int(0.04 * SR))
    out[-len(fade) :] *= fade
    return out * 0.72


def make_tickle(rng: np.random.Generator) -> np.ndarray:
    """Per-tap / loop-safe short flick — bright filtered hit, <120ms."""
    dur = 0.09
    n = int(SR * dur)
    # Two quick bandpass noise bursts (flutter)
    burst = bandpass(noise(n, rng), 900, 5200) * 0.9
    # Add tiny triangular tick
    tick = soft_clip(tone(n, 880) * 0.25 + tone(n, 1320) * 0.12)
    e1 = env_adsr(n, 0.002, 0.018, 0.01, 0.055, 0.2)
    # Second micro-flutter offset
    e2 = np.zeros(n)
    offset = int(0.028 * SR)
    e2[offset:] = env_adsr(n - offset, 0.0015, 0.012, 0.008, 0.04, 0.15)
    out = (burst * (e1 * 0.7 + e2 * 0.45) + tick * e1 * 0.5)
    out = soft_clip(one_pole_lp(out, 7000) * 1.05)
    # ensure near-zero ends for loop safety
    edge = int(0.004 * SR)
    out[:edge] *= np.linspace(0, 1, edge)
    out[-edge:] *= np.linspace(1, 0, edge)
    return out * 0.62


def make_vanish(rng: np.random.Generator) -> np.ndarray:
    """Escape breakout whoosh — ~1.2s falling air + soft chime."""
    dur = 1.15
    n = int(SR * dur)
    whoosh = bandpass(noise(n, rng), 200, 4200)
    # modulate amplitude with rising-then-falling envelope + mild AM
    t = np.arange(n) / SR
    am = 0.55 + 0.45 * np.sin(2 * math.pi * 6.5 * t * (1 - t / dur))
    whoosh *= am
    whoosh *= env_adsr(n, 0.04, 0.18, 0.45, 0.48, 0.55)
    # Pitch-falling tonal veil
    veil = soft_clip(sweep_tone(n, 520, 90) * 0.35 + sweep_tone(n, 340, 60) * 0.22)
    veil *= env_adsr(n, 0.02, 0.12, 0.35, 0.55, 0.4)
    # Soft sparkle at start
    spark_n = int(0.18 * SR)
    spark = bandpass(noise(spark_n, rng), 2500, 9000) * 0.35
    spark *= env_adsr(spark_n, 0.005, 0.04, 0.02, 0.11, 0.2)
    out = whoosh * 0.7 + veil * 0.55
    out[:spark_n] += spark
    # gentle low rumble under
    rumble = one_pole_lp(noise(n, rng), 180) * env_adsr(n, 0.05, 0.2, 0.4, 0.5, 0.35) * 0.25
    out = soft_clip(one_pole_lp(out + rumble, 5500) * 0.9)
    fade = np.linspace(1.0, 0.0, int(0.08 * SR))
    out[-len(fade) :] *= fade
    return out * 0.68


def make_tap_out(rng: np.random.Generator) -> np.ndarray:
    """Grim sport buzzer — layered square-ish + noise grit, not bare oscillator."""
    dur = 0.55
    n = int(SR * dur)
    t = np.arange(n) / SR
    # Two-tone buzzer (148 then 92-ish) via soft square approx
    def soft_square(freq: float) -> np.ndarray:
        return soft_clip(
            tone(n, freq) * 0.7
            + tone(n, freq * 3) * 0.18
            + tone(n, freq * 5) * 0.08,
            drive=2.2,
        )

    a = soft_square(148.0) * env_adsr(n, 0.008, 0.05, 0.12, 0.2, 0.75)
    # Gate second tone later
    gate = np.zeros(n)
    start = int(0.16 * SR)
    gate[start:] = env_adsr(n - start, 0.006, 0.04, 0.12, 0.18, 0.7)
    b = soft_square(92.0) * gate
    grit = bandpass(noise(n, rng), 300, 1800) * 0.22
    grit *= env_adsr(n, 0.01, 0.08, 0.25, 0.2, 0.5)
    # Slight amplitude pulse for "sport" feel
    pulse = 0.85 + 0.15 * np.sin(2 * math.pi * 18 * t)
    out = (a * 0.7 + b * 0.75 + grit) * pulse
    out = soft_clip(one_pole_lp(out, 3200) * 0.95)
    fade = np.linspace(1.0, 0.0, int(0.06 * SR))
    out[-len(fade) :] *= fade
    return out * 0.7



def make_reappear(rng: np.random.Generator) -> np.ndarray:
    """Nearby reappear tell — soft white ping (not vanish/rose)."""
    dur = 0.22
    n = int(SR * dur)
    ping = soft_clip(tone(n, 880) * 0.55 + tone(n, 1320) * 0.35 + tone(n, 1760) * 0.12)
    ping *= env_adsr(n, 0.004, 0.035, 0.02, 0.14, 0.25)
    # Airy sparkle layer
    spark = bandpass(noise(n, rng), 2800, 10000) * 0.28
    spark *= env_adsr(n, 0.002, 0.025, 0.01, 0.1, 0.15)
    # Soft shimmer delay echo
    echo = np.zeros(n)
    off = int(0.045 * SR)
    echo[off:] = (soft_clip(tone(n - off, 1320) * 0.22 + tone(n - off, 1980) * 0.1)
                  * env_adsr(n - off, 0.003, 0.03, 0.01, 0.1, 0.18))
    out = soft_clip(one_pole_lp(ping * 0.85 + spark + echo * 0.7, 9000) * 0.95)
    edge = int(0.006 * SR)
    out[:edge] *= np.linspace(0, 1, edge)
    out[-edge:] *= np.linspace(1, 0, edge)
    return out * 0.58


def make_escape(rng: np.random.Generator) -> np.ndarray:
    """Soft escape-fill tick — short rising progress chirp, loop-safe."""
    dur = 0.16
    n = int(SR * dur)
    body = soft_clip(sweep_tone(n, 190, 420) * 0.7 + sweep_tone(n, 280, 510) * 0.25)
    body *= env_adsr(n, 0.006, 0.04, 0.03, 0.08, 0.35)
    tick = bandpass(noise(n, rng), 600, 3500) * 0.3
    tick *= env_adsr(n, 0.002, 0.02, 0.01, 0.06, 0.2)
    out = soft_clip(one_pole_lp(body * 0.8 + tick, 4800) * 0.95)
    edge = int(0.005 * SR)
    out[:edge] *= np.linspace(0, 1, edge)
    out[-edge:] *= np.linspace(1, 0, edge)
    return out * 0.55


def make_win(rng: np.random.Generator) -> np.ndarray:
    """Rising major triad — short victory sting (G4–C5–E5-ish)."""
    dur = 0.55
    n = int(SR * dur)
    freqs = [392.0, 523.25, 659.25]
    delays = [0.0, 0.1, 0.2]
    out = np.zeros(n)
    for f, d in zip(freqs, delays):
        start = int(d * SR)
        rem = n - start
        if rem <= 0:
            continue
        note = soft_clip(tone(rem, f) * 0.7 + tone(rem, f * 2) * 0.12)
        note *= env_adsr(rem, 0.008, 0.05, 0.12, 0.22, 0.55)
        # Soft shimmer
        shim = bandpass(noise(rem, rng), 2000, 7000) * 0.08
        shim *= env_adsr(rem, 0.01, 0.04, 0.05, 0.15, 0.2)
        out[start:] += note * 0.75 + shim
    out = soft_clip(one_pole_lp(out, 6500) * 0.95)
    fade = np.linspace(1.0, 0.0, int(0.05 * SR))
    out[-len(fade) :] *= fade
    return out * 0.62


def make_lose(rng: np.random.Generator) -> np.ndarray:
    """Falling minor — short defeat sting."""
    dur = 0.65
    n = int(SR * dur)
    freqs = [277.18, 207.65, 131.0]
    delays = [0.0, 0.12, 0.24]
    ends = [None, None, 90.0]
    out = np.zeros(n)
    for f, d, end in zip(freqs, delays, ends):
        start = int(d * SR)
        rem = n - start
        if rem <= 0:
            continue
        if end is not None:
            note = soft_clip(sweep_tone(rem, f, end) * 0.75)
        else:
            note = soft_clip(tone(rem, f) * 0.7 + tone(rem, f * 0.5) * 0.15)
        note *= env_adsr(rem, 0.01, 0.06, 0.12, 0.28, 0.5)
        out[start:] += note * 0.7
    grit = one_pole_lp(noise(n, rng), 400) * 0.12
    grit *= env_adsr(n, 0.02, 0.1, 0.25, 0.25, 0.35)
    out = soft_clip(one_pole_lp(out + grit, 3800) * 0.95)
    fade = np.linspace(1.0, 0.0, int(0.07 * SR))
    out[-len(fade) :] *= fade
    return out * 0.6


def make_buy(rng: np.random.Generator) -> np.ndarray:
    """Bright coin ding — shop purchase."""
    dur = 0.28
    n = int(SR * dur)
    ding = soft_clip(tone(n, 988) * 0.65 + tone(n, 1480) * 0.4 + tone(n, 1976) * 0.15)
    ding *= env_adsr(n, 0.002, 0.04, 0.04, 0.18, 0.25)
    # Metallic overtone burst
    metal = bandpass(noise(n, rng), 3500, 11000) * 0.22
    metal *= env_adsr(n, 0.001, 0.015, 0.01, 0.08, 0.15)
    # Tiny second hit
    second = np.zeros(n)
    off = int(0.035 * SR)
    rem = n - off
    second[off:] = soft_clip(tone(rem, 1480) * 0.35) * env_adsr(rem, 0.002, 0.025, 0.01, 0.08, 0.2)
    out = soft_clip(one_pole_lp(ding * 0.85 + metal + second * 0.7, 10000) * 0.95)
    edge = int(0.004 * SR)
    out[:edge] *= np.linspace(0, 1, edge)
    out[-edge:] *= np.linspace(1, 0, edge)
    return out * 0.6


def make_spend(rng: np.random.Generator) -> np.ndarray:
    """Muted down-chime — skill spend."""
    dur = 0.28
    n = int(SR * dur)
    chime = soft_clip(sweep_tone(n, 392, 196) * 0.7 + tone(n, 294) * 0.2)
    chime *= env_adsr(n, 0.006, 0.05, 0.05, 0.16, 0.35)
    soft_n = bandpass(noise(n, rng), 200, 1200) * 0.15
    soft_n *= env_adsr(n, 0.008, 0.04, 0.04, 0.12, 0.25)
    out = soft_clip(one_pole_lp(chime * 0.85 + soft_n, 3200) * 0.95)
    edge = int(0.006 * SR)
    out[:edge] *= np.linspace(0, 1, edge)
    out[-edge:] *= np.linspace(1, 0, edge)
    return out * 0.55


def make_countdown_tick(rng: np.random.Generator) -> np.ndarray:
    """Soft countdown beat — short muted tick for last ~3s / leave bail."""
    dur = 0.11
    n = int(SR * dur)
    # Soft sine tick with tiny noise tip (not a harsh beep)
    body = soft_clip(tone(n, 660) * 0.55 + tone(n, 990) * 0.22)
    body *= env_adsr(n, 0.002, 0.02, 0.015, 0.07, 0.25)
    tip = bandpass(noise(n, rng), 1800, 6500) * 0.18
    tip *= env_adsr(n, 0.001, 0.012, 0.008, 0.04, 0.15)
    out = soft_clip(one_pole_lp(body * 0.9 + tip, 7200) * 0.95)
    edge = int(0.004 * SR)
    out[:edge] *= np.linspace(0, 1, edge)
    out[-edge:] *= np.linspace(1, 0, edge)
    return out * 0.52


def encode_web(name: str) -> None:
    import subprocess

    wav = OUT / f"{name}.wav"
    for ext, args in (
        ("ogg", ["-c:a", "libvorbis", "-q:a", "4"]),
        ("mp3", ["-codec:a", "libmp3lame", "-q:a", "5"]),
    ):
        out = OUT / f"{name}.{ext}"
        subprocess.run(
            ["ffmpeg", "-y", "-i", str(wav), *args, str(out)],
            check=True,
            capture_output=True,
        )
        print(f"wrote {out} ({out.stat().st_size} bytes)")
    wav.unlink(missing_ok=True)


def main() -> None:
    rng = np.random.default_rng(20260917)
    cues = {
        "tickle-lock": make_tickle_lock(rng),
        "tickle": make_tickle(rng),
        "vanish": make_vanish(rng),
        "tap-out": make_tap_out(rng),
        "reappear": make_reappear(rng),
        "escape": make_escape(rng),
        "win": make_win(rng),
        "lose": make_lose(rng),
        "buy": make_buy(rng),
        "spend": make_spend(rng),
        "countdown-tick": make_countdown_tick(rng),
    }
    OUT.mkdir(parents=True, exist_ok=True)
    for name, samples in cues.items():
        wav_path = OUT / f"{name}.wav"
        write_wav(wav_path, samples)
        print(f"wrote {wav_path} ({len(samples)/SR:.3f}s, {wav_path.stat().st_size} bytes)")
        encode_web(name)


if __name__ == "__main__":
    main()
