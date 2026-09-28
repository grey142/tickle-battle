#!/usr/bin/env python3
"""Generate four-frame run stills from metal-free A-poses (Amateur 12 + Elara).

Run recal: f0–f3 form ONE stride cycle played at bind billRate FPS
(billRate / 4 = strides per second, ~2.5 for sprint). Every frame shares the
same colour grade so only the pose changes between frames (no colour/zoom
flicker); geometry offsets are small (≤2° sway, ≤1.2% bob) plus an
alternating one-leg knee lift on f1/f3 so the legs visibly cycle.
Full painterly production run art is still deferred.
Requires: Pillow, numpy
"""
from __future__ import annotations

import json
from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets/binds/run/frames"

CHARS = [
    ("BriarKnox", ROOT / "assets/characters/amateur/BriarKnox.jpg"),
    ("CassWynn", ROOT / "assets/characters/amateur/CassWynn.jpg"),
    ("EmberLang", ROOT / "assets/characters/amateur/EmberLang.jpg"),
    ("JunoHale", ROOT / "assets/characters/amateur/JunoHale.jpg"),
    ("KoraVale", ROOT / "assets/characters/amateur/KoraVale.jpg"),
    ("LyraFinch", ROOT / "assets/characters/amateur/LyraFinch.jpg"),
    ("MiraSolis", ROOT / "assets/characters/amateur/MiraSolis.jpg"),
    ("NimCortez", ROOT / "assets/characters/amateur/NimCortez.jpg"),
    ("RynAshford", ROOT / "assets/characters/amateur/RynAshford.jpg"),
    ("SableQuinn", ROOT / "assets/characters/amateur/SableQuinn.jpg"),
    ("TorenBlake", ROOT / "assets/characters/amateur/TorenBlake.jpg"),
    ("VeshMarlowe", ROOT / "assets/characters/amateur/VeshMarlowe.jpg"),
    ("ElaraCase", ROOT / "assets/characters/player/ElaraCase.jpg"),
]


def hshift(im: Image.Image, frac: float) -> float:
    return im.size[1] * frac


def affine_frame(
    im: Image.Image,
    shear_x: float,
    shear_y: float,
    scale_x: float,
    scale_y: float,
    dy: float,
    rot: float,
    fill: tuple[int, int, int] = (248, 244, 238),
) -> Image.Image:
    w, h = im.size
    cx, cy = w / 2, h * 0.62  # pivot near hips for stride
    ang = np.deg2rad(rot)
    ca, sa = np.cos(ang), np.sin(ang)
    A = np.array([[scale_x, shear_x], [shear_y, scale_y]], dtype=np.float64)
    R = np.array([[ca, -sa], [sa, ca]], dtype=np.float64)
    M = R @ A
    Minv = np.linalg.inv(M)
    a, b = Minv[0, 0], Minv[0, 1]
    d, e = Minv[1, 0], Minv[1, 1]
    c = cx - a * (cx) - b * (cy + dy)
    f = cy - d * (cx) - e * (cy + dy)
    return im.transform(
        (w, h),
        Image.AFFINE,
        (a, b, c, d, e, f),
        resample=Image.BICUBIC,
        fillcolor=fill,
    )


def cool_grade(im: Image.Image, amount: float) -> Image.Image:
    """Cool energy push so run frames read faster than idle."""
    arr = np.asarray(im).astype(np.float32)
    arr[..., 0] = np.clip(arr[..., 0] * (1.0 - 0.015 * amount), 0, 255)
    arr[..., 1] = np.clip(arr[..., 1] * (1.0 + 0.01 * amount), 0, 255)
    arr[..., 2] = np.clip(arr[..., 2] * (1.0 + 0.035 * amount), 0, 255)
    return Image.fromarray(arr.astype(np.uint8))


def painterly(im: Image.Image, strength: float) -> Image.Image:
    """Oil-paint-ish: downsample smear + edge restore — production clip lean."""
    if strength <= 0:
        return im
    w, h = im.size
    small = im.resize((max(8, w // 4), max(8, h // 4)), Image.BILINEAR)
    smeared = small.resize((w, h), Image.BILINEAR)
    edges = ImageOps.autocontrast(im.convert("L").filter(ImageFilter.FIND_EDGES))
    edge_mask = (np.asarray(edges).astype(np.float32) / 255.0)[..., None]
    base = np.asarray(im).astype(np.float32)
    paint = np.asarray(smeared).astype(np.float32)
    mix = paint * (1.0 - edge_mask * 0.94) + base * (edge_mask * 0.94)
    out = Image.fromarray(np.clip(mix, 0, 255).astype(np.uint8))
    out = out.filter(ImageFilter.MedianFilter(size=3))
    out = Image.blend(im, out, min(1.0, 0.5 + strength * 0.6))
    out = out.filter(ImageFilter.UnsharpMask(radius=1.9, percent=int(105 + strength * 85), threshold=2))
    return out


# Stride pose table:
#   (shear_x, shear_y, scale_x, scale_y, bob_frac, rot_deg, lift_side, lift)
# bob_frac < 0 lifts the figure (flight), > 0 drops it (contact / squash).
# lift_side: -1 = image-left leg, +1 = image-right leg; lift = fraction of leg
# length the swing foot is drawn up (knee lift), so the legs visibly alternate.
STRIDE_POSES = [
    (0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0, 0.0),  # f0 — passing / neutral
    (0.02, -0.006, 1.01, 0.985, 0.005, -1.8, -1, 0.10),  # f1 — left knee up, sway left
    (0.0, 0.0, 0.996, 1.008, -0.012, 0.0, 0, 0.0),  # f2 — flight / peak lift
    (-0.02, 0.006, 1.01, 0.985, 0.005, 1.8, 1, 0.10),  # f3 — right knee up, sway right
]
HIP_Y = 0.54  # fraction of image height where legs start (below shorts line)


def bg_color(im: Image.Image) -> tuple[int, int, int]:
    """Median of the top corners — the still's backdrop colour."""
    arr = np.asarray(im)
    h, w = arr.shape[:2]
    patch = np.concatenate([arr[: h // 40, : w // 20].reshape(-1, 3), arr[: h // 40, -w // 20 :].reshape(-1, 3)])
    return tuple(int(v) for v in np.median(patch, axis=0))


def lift_leg(im: Image.Image, side: int, lift: float) -> Image.Image:
    """Draw one leg up toward the hip (foreshortened knee lift), other leg planted."""
    if side == 0 or lift <= 0:
        return im
    arr = np.asarray(im).astype(np.float32)
    h, w = arr.shape[:2]
    y0 = h * HIP_Y
    xs = np.arange(w, dtype=np.float32)
    # Soft mask across the centre gap between the legs to avoid a seam.
    t = np.clip((xs - w * 0.47) / (w * 0.06), 0.0, 1.0)
    t = t * t * (3 - 2 * t)
    wx = (1.0 - t) if side < 0 else t
    ys = np.arange(h, dtype=np.float32)[:, None]
    k = 1.0 / (1.0 - lift)
    src = ys + wx[None, :] * np.clip(ys - y0, 0, None) * (k - 1.0)
    y_lo = np.floor(src).astype(np.int64)
    frac = (src - y_lo)[..., None]
    valid = (y_lo + 1) < h
    y_lo_c = np.clip(y_lo, 0, h - 1)
    y_hi_c = np.clip(y_lo + 1, 0, h - 1)
    cols = np.broadcast_to(np.arange(w), (h, w))
    out = arr[y_lo_c, cols] * (1 - frac) + arr[y_hi_c, cols] * frac
    out[~valid] = np.array(bg_color(im), dtype=np.float32)
    return Image.fromarray(np.clip(out, 0, 255).astype(np.uint8))


def grade(im: Image.Image) -> Image.Image:
    """Shared, mild run grade applied identically to every frame."""
    im = ImageEnhance.Sharpness(im).enhance(1.05)
    im = ImageEnhance.Contrast(im).enhance(1.04)
    im = cool_grade(im, 0.4)
    return painterly(im, 0.25)


def make_frames(src: Path) -> list[Image.Image]:
    """Run recal: one natural stride cycle (f0 passing, f1/f3 alternating knee lift, f2 flight)."""
    base = grade(Image.open(src).convert("RGB"))
    fill = bg_color(base)
    frames: list[Image.Image] = []
    for shx, shy, sx, sy, bob, rot, side, lift in STRIDE_POSES:
        fr = lift_leg(base, side, lift)
        if (shx, shy, sx, sy, bob, rot) != (0.0, 0.0, 1.0, 1.0, 0.0, 0.0):
            fr = affine_frame(fr, shx, shy, sx, sy, hshift(base, bob), rot, fill)
        frames.append(fr)
    return frames


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    files: list[str] = []
    for slug, path in CHARS:
        if not path.exists():
            raise SystemExit(f"missing still: {path}")
        frames = make_frames(path)
        for i, fr in enumerate(frames):
            name = f"{slug}_f{i}.jpg"
            dest = OUT / name
            fr.save(dest, quality=88, optimize=True)
            files.append(name)
            print(f"wrote {dest.relative_to(ROOT)} ({fr.size[0]}x{fr.size[1]})")
    manifest = {
        "clip": "run",
        "frames": ["f0", "f1", "f2", "f3"],
        "characters": [c[0] for c in CHARS],
        "files": files,
        "note": (
            "Run recal: f0–f3 = one natural stride cycle from the metal-free A-pose "
            "(f0 passing, f1 left knee lift, f2 flight, f3 right knee lift), shared mild grade, played at "
            "bind billRate FPS (billRate/4 strides/s). Not full painterly. "
            "Elara jewelry exception only."
        ),
    }
    (OUT / "MANIFEST.json").write_text(json.dumps(manifest, indent=2) + "\n")
    print("MANIFEST ok", len(files), "files")


if __name__ == "__main__":
    main()
