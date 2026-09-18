#!/usr/bin/env python3
"""Generate deepened four-frame run stills from metal-free A-poses (Amateur 12 + Elara).

f0 = A-pose still; f1–f3 = stronger stride bob/sway/squash adaptations than the
#30 deepen pass. Full painterly production run art is deferred.
Requires: Pillow, numpy
"""
from __future__ import annotations

import json
from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

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
    im: Image.Image, shear_x: float, shear_y: float, scale_x: float, scale_y: float, dy: float, rot: float
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
        fillcolor=(248, 244, 238),
    )


def punch_stride(im: Image.Image, amount: float) -> Image.Image:
    """Vertical crop push — reads as stride squash / extension."""
    w, h = im.size
    inset_x = int(w * 0.014 * amount)
    inset_top = int(h * 0.012 * amount)
    inset_bot = int(h * 0.055 * amount)
    box = (inset_x, inset_top, w - inset_x, h - inset_bot)
    return im.crop(box).resize((w, h), Image.BICUBIC)


def cool_grade(im: Image.Image, amount: float) -> Image.Image:
    """Slight cool energy push so run frames read faster than idle."""
    arr = np.asarray(im).astype(np.float32)
    arr[..., 0] = np.clip(arr[..., 0] * (1.0 - 0.018 * amount), 0, 255)
    arr[..., 1] = np.clip(arr[..., 1] * (1.0 + 0.012 * amount), 0, 255)
    arr[..., 2] = np.clip(arr[..., 2] * (1.0 + 0.042 * amount), 0, 255)
    return Image.fromarray(arr.astype(np.uint8))


def vignette(im: Image.Image, amount: float) -> Image.Image:
    """Soft edge darken so stride frames read more kinetic."""
    w, h = im.size
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    cx, cy = w / 2.0, h * 0.55
    r = np.sqrt(((xx - cx) / (w * 0.62)) ** 2 + ((yy - cy) / (h * 0.72)) ** 2)
    factor = np.clip(1.0 - np.clip(r - 0.55, 0, 1) * 0.22 * amount, 0.78, 1.0)
    arr = np.asarray(im).astype(np.float32)
    arr *= factor[..., None]
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))


def make_frames(src: Path) -> list[Image.Image]:
    """Follow-up deepen: f0 still → f3 peak bob/sway/squash beyond #30."""
    base = Image.open(src).convert("RGB")
    f0 = ImageEnhance.Sharpness(base).enhance(1.06)
    f0 = ImageEnhance.Contrast(f0).enhance(1.03)

    f1 = punch_stride(base, 1.45)
    f1 = affine_frame(f1, 0.09, -0.024, 1.03, 0.95, -hshift(base, 0.028), -3.1)
    f1 = ImageEnhance.Contrast(f1).enhance(1.08)
    f1 = cool_grade(f1, 0.65)
    f1 = vignette(f1, 0.55)

    f2 = punch_stride(base, 2.15)
    f2 = affine_frame(f2, -0.11, 0.03, 1.05, 0.915, -hshift(base, 0.048), 3.6)
    f2 = ImageEnhance.Brightness(f2).enhance(1.04)
    f2 = ImageEnhance.Contrast(f2).enhance(1.12)
    f2 = cool_grade(f2, 1.1)
    f2 = f2.filter(ImageFilter.UnsharpMask(radius=1.25, percent=85, threshold=2))
    f2 = vignette(f2, 0.85)

    f3 = punch_stride(base, 1.85)
    f3 = affine_frame(f3, 0.06, -0.036, 1.07, 0.88, -hshift(base, 0.065), 1.45)
    f3 = ImageEnhance.Sharpness(f3).enhance(1.16)
    f3 = ImageEnhance.Contrast(f3).enhance(1.14)
    f3 = cool_grade(f3, 1.4)
    f3 = f3.filter(ImageFilter.UnsharpMask(radius=1.45, percent=100, threshold=2))
    f3 = vignette(f3, 1.05)
    return [f0, f1, f2, f3]


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
            "f0 = metal-free A-pose still; f1–f3 = follow-up deepen stride bob/sway/squash "
            "beyond #30. Not full painterly. Elara jewelry exception only."
        ),
    }
    (OUT / "MANIFEST.json").write_text(json.dumps(manifest, indent=2) + "\n")
    print("MANIFEST ok", len(files), "files")


if __name__ == "__main__":
    main()
