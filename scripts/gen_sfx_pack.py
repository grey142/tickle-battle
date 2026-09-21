#!/usr/bin/env python3
"""Procedural original SFX for Amateur Team Quick (no copyrighted samples).

Layered synthesis → ogg/mp3 under public/sfx/. Oscillator fallbacks stay in sfx.ts.
"""
from __future__ import annotations

import math
import subprocess
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
    freqs = np.linspace(f0, f1, n)
    phase = 2 * math.pi * np.cumsum(freqs) / SR
    return np.sin(phase)


def fm_tone(n: int, carrier: float, mod_hz: float, mod_idx: float) -> np.ndarray:
    t = np.arange(n) / SR
    return np.sin(2 * math.pi * carrier * t + mod_idx * np.sin(2 * math.pi * mod_hz * t))


def fade_edges(x: np.ndarray, ms: float = 4.0) -> np.ndarray:
    edge = max(1, int(ms * 0.001 * SR))
    out = x.copy()
    out[:edge] *= np.linspace(0, 1, edge)
    out[-edge:] *= np.linspace(1, 0, edge)
    return out


def layer_delay(x: np.ndarray, delay_s: float, gain: float) -> np.ndarray:
    off = int(delay_s * SR)
    out = x.copy()
    if off <= 0 or off >= len(x):
        return out
    out[off:] += x[: len(x) - off] * gain
    return out


# --- cues -----------------------------------------------------------------


def make_tickle_lock(rng: np.random.Generator) -> np.ndarray:
    """Grab/attach: deep body thump + fabric scrape + dual click."""
    dur = 0.34
    n = int(SR * dur)
    thump = soft_clip(
        sweep_tone(n, 160, 58) * 0.95
        + tone(n, 48) * 0.4
        + fm_tone(n, 90, 38, 1.8) * 0.22,
        drive=1.8,
    )
    thump *= env_adsr(n, 0.003, 0.055, 0.06, 0.2, 0.32)
    scrape = bandpass(noise(n, rng), 350, 3200) * 0.62
    scrape *= env_adsr(n, 0.01, 0.05, 0.04, 0.14, 0.28)
    # Second scrape layer (higher / shorter)
    scrape2 = bandpass(noise(n, rng), 1200, 5500) * 0.28
    scrape2 *= env_adsr(n, 0.006, 0.03, 0.02, 0.1, 0.2)
    click_n = int(0.014 * SR)
    click = bandpass(noise(click_n, rng), 1400, 7000) * 0.75
    click *= np.linspace(1.0, 0.0, click_n) ** 2
    click2_n = int(0.01 * SR)
    click2 = bandpass(noise(click2_n, rng), 2000, 9000) * 0.45
    click2 *= np.linspace(1.0, 0.0, click2_n) ** 2
    off2 = int(0.038 * SR)
    out = thump * 0.88 + scrape * 0.58 + scrape2 * 0.4
    out[:click_n] += click
    out[off2 : off2 + click2_n] += click2
    out = soft_clip(one_pole_lp(out, 5200) * 0.95)
    out = fade_edges(out, 5)
    return out * 0.74


def make_tickle(rng: np.random.Generator) -> np.ndarray:
    """Per-tap flutter — triple filtered bursts + tiny tonal ticks, loop-safe."""
    dur = 0.11
    n = int(SR * dur)
    burst = bandpass(noise(n, rng), 850, 5600) * 0.95
    burst2 = bandpass(noise(n, rng), 1400, 7500) * 0.45
    tick = soft_clip(tone(n, 920) * 0.22 + tone(n, 1380) * 0.14 + tone(n, 1840) * 0.06)
    e1 = env_adsr(n, 0.0018, 0.016, 0.01, 0.06, 0.18)
    e2 = np.zeros(n)
    offset = int(0.026 * SR)
    e2[offset:] = env_adsr(n - offset, 0.0012, 0.011, 0.007, 0.038, 0.14)
    e3 = np.zeros(n)
    offset3 = int(0.052 * SR)
    e3[offset3:] = env_adsr(n - offset3, 0.001, 0.009, 0.005, 0.03, 0.12)
    out = burst * (e1 * 0.65 + e2 * 0.42 + e3 * 0.28) + burst2 * (e1 * 0.35 + e2 * 0.25) + tick * e1 * 0.55
    out = soft_clip(one_pole_lp(out, 7800) * 1.05)
    return fade_edges(out, 3.5) * 0.64


def make_vanish(rng: np.random.Generator) -> np.ndarray:
    """Escape breakout whoosh — deepest falling veil (v7: clearer vs reappear ping)."""
    dur = 1.82
    n = int(SR * dur)
    t = np.arange(n) / SR
    whoosh = bandpass(noise(n, rng), 38, 2300)
    am = 0.3 + 0.7 * np.sin(2 * math.pi * 3.6 * t * (1 - t / dur))
    whoosh *= am * env_adsr(n, 0.055, 0.3, 0.6, 0.78, 0.42)
    whoosh2 = bandpass(noise(n, rng), 130, 3000) * 0.2
    whoosh2 *= env_adsr(n, 0.075, 0.26, 0.44, 0.8, 0.28)
    # Stronger descending veil — no rising tones (contrast vs reappear).
    veil = soft_clip(
        sweep_tone(n, 980, 20) * 0.64
        + sweep_tone(n, 640, 16) * 0.46
        + sweep_tone(n, 400, 12) * 0.32
        + sweep_tone(n, 250, 10) * 0.22
        + sweep_tone(n, 165, 8) * 0.15
        + sweep_tone(n, 115, 6) * 0.11
        + sweep_tone(n, 78, 4.5) * 0.07
        + sweep_tone(n, 55, 3.5) * 0.04
        + sweep_tone(n, 38, 2.5) * 0.022
        + fm_tone(n, 85, 5, 5.0) * 0.22
    )
    veil *= env_adsr(n, 0.024, 0.22, 0.5, 0.86, 0.3)
    # Soft air burst at start, not a bright ping.
    spark_n = int(0.26 * SR)
    spark = bandpass(noise(spark_n, rng), 320, 2100) * 0.12
    spark *= env_adsr(spark_n, 0.009, 0.06, 0.03, 0.14, 0.08)
    trail = np.zeros(n)
    for i, (d, g) in enumerate(((0.28, 0.1), (0.54, 0.08), (0.82, 0.05), (1.1, 0.03), (1.36, 0.018), (1.56, 0.01), (1.7, 0.006))):
        sn = int(0.14 * SR)
        start = int(d * SR)
        if start + sn > n:
            continue
        # Trail stays mid/low — avoid reappear-like sparkle.
        grain = bandpass(noise(sn, rng), 240 + i * 110, 1900) * g
        grain *= env_adsr(sn, 0.003, 0.03, 0.012, 0.075, 0.08)
        trail[start : start + sn] += grain
    rumble = one_pole_lp(noise(n, rng), 48) * env_adsr(n, 0.07, 0.32, 0.56, 0.78, 0.34) * 0.62
    thump_n = int(0.24 * SR)
    thump = soft_clip(sweep_tone(thump_n, 32, 14) * 0.84)
    thump *= env_adsr(thump_n, 0.004, 0.06, 0.036, 0.12, 0.12)
    out = whoosh * 0.62 + whoosh2 * 0.22 + veil * 0.98 + rumble
    out[:spark_n] += spark
    out[:thump_n] += thump * 0.84
    out += trail
    out = soft_clip(one_pole_lp(out, 2700) * 0.8)
    return fade_edges(out, 22) * 0.84


def make_tap_out(rng: np.random.Generator) -> np.ndarray:
    """Grim sport buzzer — layered soft-squares + grit + pulse."""
    dur = 0.62
    n = int(SR * dur)
    t = np.arange(n) / SR

    def soft_square(freq: float) -> np.ndarray:
        return soft_clip(
            tone(n, freq) * 0.68
            + tone(n, freq * 3) * 0.2
            + tone(n, freq * 5) * 0.1
            + tone(n, freq * 7) * 0.04,
            drive=2.4,
        )

    a = soft_square(152.0) * env_adsr(n, 0.007, 0.055, 0.14, 0.22, 0.72)
    gate = np.zeros(n)
    start = int(0.15 * SR)
    gate[start:] = env_adsr(n - start, 0.005, 0.04, 0.14, 0.2, 0.68)
    b = soft_square(88.0) * gate
    # Mid growl layer
    growl = soft_clip(fm_tone(n, 110, 22, 3.2) * 0.35, drive=1.6)
    growl *= env_adsr(n, 0.01, 0.08, 0.25, 0.22, 0.45)
    grit = bandpass(noise(n, rng), 280, 2000) * 0.26
    grit *= env_adsr(n, 0.01, 0.09, 0.28, 0.22, 0.48)
    grit_hi = bandpass(noise(n, rng), 1800, 5000) * 0.1
    grit_hi *= env_adsr(n, 0.008, 0.05, 0.15, 0.18, 0.3)
    pulse = 0.82 + 0.18 * np.sin(2 * math.pi * 19 * t)
    out = (a * 0.68 + b * 0.78 + growl * 0.45 + grit + grit_hi) * pulse
    out = soft_clip(one_pole_lp(out, 3400) * 0.95)
    return fade_edges(out, 8) * 0.72


def make_reappear(rng: np.random.Generator) -> np.ndarray:
    """Nearby reappear tell — brightest rising ping (v7: no low whoosh bleed)."""
    dur = 0.17
    n = int(SR * dur)
    # Pure rising sweeps — opposite of vanish veil.
    rise = soft_clip(
        sweep_tone(n, 1040, 2200) * 0.58
        + sweep_tone(n, 1520, 2900) * 0.38
        + sweep_tone(n, 1900, 3500) * 0.22
        + sweep_tone(n, 2200, 4200) * 0.14
        + sweep_tone(n, 2500, 4800) * 0.07
        + sweep_tone(n, 2700, 5400) * 0.035
        + sweep_tone(n, 2900, 6000) * 0.018
    )
    rise *= env_adsr(n, 0.0005, 0.014, 0.018, 0.07, 0.14)
    ping = soft_clip(
        tone(n, 1760) * 0.68
        + tone(n, 2640) * 0.52
        + tone(n, 3520) * 0.3
        + tone(n, 4400) * 0.18
        + tone(n, 5280) * 0.11
        + tone(n, 6160) * 0.06
        + tone(n, 7040) * 0.03
        + tone(n, 7920) * 0.015
    )
    ping *= env_adsr(n, 0.0004, 0.014, 0.012, 0.08, 0.1)
    spark = bandpass(noise(n, rng), 8000, 19000) * 0.6
    spark *= env_adsr(n, 0.0003, 0.008, 0.003, 0.05, 0.055)
    echo = np.zeros(n)
    for off_s, g, f in ((0.016, 0.82, 2640), (0.038, 0.56, 3520), (0.064, 0.36, 4400), (0.09, 0.2, 5280), (0.116, 0.12, 6160), (0.138, 0.06, 7040)):
        off = int(off_s * SR)
        rem = n - off
        if rem <= 0:
            continue
        note = soft_clip(tone(rem, f) * 0.42 + tone(rem, f * 1.5) * 0.2)
        note *= env_adsr(rem, 0.0004, 0.01, 0.0035, 0.045, 0.07)
        echo[off:] += note * g
    # High-pass-ish mix: keep bright, strip any rumble.
    out = soft_clip(one_pole_lp(one_pole_hp(rise * 0.62 + ping * 1.08 + spark + echo * 0.96, 640), 17000) * 0.95)
    return fade_edges(out, 1.5) * 0.76


def make_escape(rng: np.random.Generator) -> np.ndarray:
    """Soft escape-fill tick — rising progress chirp with grit tip."""
    dur = 0.18
    n = int(SR * dur)
    body = soft_clip(
        sweep_tone(n, 175, 460) * 0.72
        + sweep_tone(n, 260, 560) * 0.28
        + fm_tone(n, 320, 40, 1.2) * 0.1
    )
    body *= env_adsr(n, 0.005, 0.045, 0.035, 0.085, 0.32)
    tick = bandpass(noise(n, rng), 550, 4000) * 0.34
    tick *= env_adsr(n, 0.002, 0.022, 0.012, 0.065, 0.18)
    tip = bandpass(noise(n, rng), 2500, 8000) * 0.12
    tip *= env_adsr(n, 0.001, 0.012, 0.008, 0.04, 0.12)
    out = soft_clip(one_pole_lp(body * 0.82 + tick + tip, 5200) * 0.95)
    return fade_edges(out, 4) * 0.58


def make_win(rng: np.random.Generator) -> np.ndarray:
    """Rising major triad victory sting with shimmer + soft fifth."""
    dur = 0.68
    n = int(SR * dur)
    # G4 C5 E5 G5
    freqs = [392.0, 523.25, 659.25, 784.0]
    delays = [0.0, 0.09, 0.18, 0.28]
    gains = [0.78, 0.75, 0.72, 0.45]
    out = np.zeros(n)
    for f, d, g in zip(freqs, delays, gains):
        start = int(d * SR)
        rem = n - start
        if rem <= 0:
            continue
        note = soft_clip(
            tone(rem, f) * 0.7
            + tone(rem, f * 2) * 0.14
            + tone(rem, f * 3) * 0.05
        )
        note *= env_adsr(rem, 0.007, 0.055, 0.14, 0.28, 0.52)
        shim = bandpass(noise(rem, rng), 2200, 8000) * 0.09
        shim *= env_adsr(rem, 0.01, 0.04, 0.06, 0.18, 0.18)
        out[start:] += (note * 0.78 + shim) * g
    # Soft pad under
    pad = soft_clip(tone(n, 196) * 0.15 + tone(n, 246.9) * 0.1)
    pad *= env_adsr(n, 0.04, 0.1, 0.3, 0.25, 0.4)
    out = soft_clip(one_pole_lp(out + pad * 0.35, 7000) * 0.95)
    return fade_edges(out, 8) * 0.64


def make_lose(rng: np.random.Generator) -> np.ndarray:
    """Falling minor defeat sting with grit and low sweep."""
    dur = 0.78
    n = int(SR * dur)
    freqs = [277.18, 207.65, 164.81, 110.0]
    delays = [0.0, 0.11, 0.22, 0.34]
    ends = [None, None, 120.0, 72.0]
    out = np.zeros(n)
    for f, d, end in zip(freqs, delays, ends):
        start = int(d * SR)
        rem = n - start
        if rem <= 0:
            continue
        if end is not None:
            note = soft_clip(sweep_tone(rem, f, end) * 0.78)
        else:
            note = soft_clip(tone(rem, f) * 0.7 + tone(rem, f * 0.5) * 0.18)
        note *= env_adsr(rem, 0.01, 0.065, 0.14, 0.3, 0.48)
        out[start:] += note * 0.72
    grit = one_pole_lp(noise(n, rng), 380) * 0.15
    grit *= env_adsr(n, 0.02, 0.12, 0.3, 0.28, 0.35)
    mid = bandpass(noise(n, rng), 200, 900) * 0.08
    mid *= env_adsr(n, 0.03, 0.1, 0.25, 0.25, 0.3)
    out = soft_clip(one_pole_lp(out + grit + mid, 3600) * 0.95)
    return fade_edges(out, 10) * 0.62


def make_buy(rng: np.random.Generator) -> np.ndarray:
    """Bright coin ding — shop purchase with metallic sparkle."""
    dur = 0.34
    n = int(SR * dur)
    ding = soft_clip(
        tone(n, 988) * 0.6
        + tone(n, 1480) * 0.42
        + tone(n, 1976) * 0.18
        + tone(n, 2960) * 0.06
    )
    ding *= env_adsr(n, 0.0018, 0.045, 0.05, 0.2, 0.22)
    metal = bandpass(noise(n, rng), 3200, 12000) * 0.26
    metal *= env_adsr(n, 0.001, 0.018, 0.012, 0.09, 0.14)
    second = np.zeros(n)
    off = int(0.032 * SR)
    rem = n - off
    second[off:] = soft_clip(tone(rem, 1480) * 0.32 + tone(rem, 2220) * 0.12) * env_adsr(
        rem, 0.002, 0.028, 0.012, 0.1, 0.18
    )
    third = np.zeros(n)
    off3 = int(0.07 * SR)
    rem3 = n - off3
    if rem3 > 0:
        third[off3:] = soft_clip(tone(rem3, 1976) * 0.18) * env_adsr(rem3, 0.002, 0.02, 0.01, 0.08, 0.15)
    out = soft_clip(one_pole_lp(ding * 0.88 + metal + second * 0.75 + third * 0.55, 11000) * 0.95)
    return fade_edges(out, 4) * 0.62


def make_spend(rng: np.random.Generator) -> np.ndarray:
    """Muted down-chime — skill spend with soft body."""
    dur = 0.32
    n = int(SR * dur)
    chime = soft_clip(
        sweep_tone(n, 415, 175) * 0.72
        + tone(n, 311) * 0.22
        + tone(n, 207) * 0.1
    )
    chime *= env_adsr(n, 0.005, 0.055, 0.06, 0.17, 0.32)
    soft_n = bandpass(noise(n, rng), 180, 1400) * 0.18
    soft_n *= env_adsr(n, 0.008, 0.045, 0.05, 0.13, 0.24)
    echo = layer_delay(chime * 0.35, 0.055, 0.4)
    out = soft_clip(one_pole_lp(chime * 0.85 + soft_n + echo * 0.3, 3400) * 0.95)
    return fade_edges(out, 5) * 0.56


def make_countdown_tick(rng: np.random.Generator) -> np.ndarray:
    """Last-3s countdown beat — pitched body + sharp tip (v7: widest rate-stretch ladder)."""
    dur = 0.075
    n = int(SR * dur)
    # Clean fundamental @ 700Hz so playbackRate 0.54/1.0/1.72 reads as 3/2/1.
    body = soft_clip(
        tone(n, 700) * 0.7
        + tone(n, 1050) * 0.24
        + tone(n, 350) * 0.04
        + tone(n, 1400) * 0.2
        + tone(n, 2100) * 0.1
        + tone(n, 2800) * 0.06
        + tone(n, 3500) * 0.035
        + tone(n, 4200) * 0.02
        + tone(n, 4900) * 0.01
    )
    body *= env_adsr(n, 0.00035, 0.008, 0.006, 0.032, 0.1)
    tip = bandpass(noise(n, rng), 4500, 15000) * 0.54
    tip *= env_adsr(n, 0.0002, 0.005, 0.0025, 0.016, 0.055)
    wood = bandpass(noise(n, rng), 120, 700) * 0.08
    wood *= env_adsr(n, 0.00055, 0.0075, 0.004, 0.02, 0.075)
    click_n = max(1, int(0.0028 * SR))
    click = bandpass(noise(click_n, rng), 5500, 16000) * 0.75
    click *= env_adsr(click_n, 0.0001, 0.0007, 0.0003, 0.001, 0.1)
    out = soft_clip(one_pole_lp(body * 1.0 + tip + wood, 12000) * 0.95)
    out[:click_n] += click
    return fade_edges(out, 1.2) * 0.7


def encode_web(name: str) -> None:
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
    rng = np.random.default_rng(20260918_7)
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
