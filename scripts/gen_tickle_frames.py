#!/usr/bin/env python3
"""Generate four-frame tickle stills from metal-free A-poses (Amateur 12 + Elara).

f0 = A-pose still; f1–f3 = deepened lean/reach/bob adaptations (stronger than
plain A-pose lean) so intensity-weighted cycle reads harder on f2/f3.
Full painterly production tickle art is deferred — this is the shippable slice.
Requires: Pillow, numpy
"""
from __future__ import annotations

import json
from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets/binds/tickle/frames"

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
    im: Image.Image, shear_x: float, shear_y: float, scale: float, dy: float, rot: float
) -> Image.Image:
    w, h = im.size
    cx, cy = w / 2, h / 2
    ang = np.deg2rad(rot)
    ca, sa = np.cos(ang), np.sin(ang)
    sx = scale
    sy = scale * (1.0 - abs(shear_y) * 0.15)
    A = np.array([[sx, shear_x], [shear_y, sy]], dtype=np.float64)
    R = np.array([[ca, -sa], [sa, ca]], dtype=np.float64)
    M = R @ A
    Minv = np.linalg.inv(M)
    tx, ty = 0.0, dy
    a, b = Minv[0, 0], Minv[0, 1]
    d, e = Minv[1, 0], Minv[1, 1]
    c = cx - a * (cx + tx) - b * (cy + ty)
    f = cy - d * (cx + tx) - e * (cy + ty)
    return im.transform(
        (w, h),
        Image.AFFINE,
        (a, b, c, d, e, f),
        resample=Image.BICUBIC,
        fillcolor=(248, 244, 238),
    )


def punch_reach(im: Image.Image, amount: float) -> Image.Image:
    w, h = im.size
    inset_x = int(w * 0.028 * amount)
    inset_top = int(h * 0.014 * amount)
    inset_bot = int(h * 0.06 * amount)
    box = (inset_x, inset_top, w - inset_x, h - inset_bot)
    return im.crop(box).resize((w, h), Image.BICUBIC)


def warm_grade(im: Image.Image, amount: float) -> Image.Image:
    """Slight warm push so harder frames read more energetic."""
    arr = np.asarray(im).astype(np.float32)
    arr[..., 0] = np.clip(arr[..., 0] * (1.0 + 0.04 * amount), 0, 255)
    arr[..., 1] = np.clip(arr[..., 1] * (1.0 + 0.01 * amount), 0, 255)
    arr[..., 2] = np.clip(arr[..., 2] * (1.0 - 0.03 * amount), 0, 255)
    return Image.fromarray(arr.astype(np.uint8))


def make_frames(src: Path) -> list[Image.Image]:
    """Deepened four-frame cycle: f0 calm still → f3 hardest lean/reach."""
    base = Image.open(src).convert("RGB")
    # f0 — grounded A-pose (mild sharpen)
    f0 = ImageEnhance.Sharpness(base).enhance(1.06)
    f0 = ImageEnhance.Contrast(f0).enhance(1.02)

    # f1 — clear lean/reach (mild intensity)
    f1 = punch_reach(base, 1.35)
    f1 = affine_frame(f1, 0.085, -0.02, 1.035, -hshift(base, 0.018), -2.1)
    f1 = ImageEnhance.Contrast(f1).enhance(1.07)
    f1 = warm_grade(f1, 0.45)

    # f2 — opposite lean + deeper reach (hard)
    f2 = punch_reach(base, 2.05)
    f2 = affine_frame(f2, -0.095, 0.028, 1.055, -hshift(base, 0.032), 2.6)
    f2 = ImageEnhance.Brightness(f2).enhance(1.035)
    f2 = ImageEnhance.Contrast(f2).enhance(1.1)
    f2 = warm_grade(f2, 0.85)
    f2 = f2.filter(ImageFilter.UnsharpMask(radius=1.2, percent=80, threshold=2))

    # f3 — peak bob/reach (hardest)
    f3 = punch_reach(base, 1.75)
    f3 = affine_frame(f3, 0.055, -0.022, 1.07, -hshift(base, 0.045), 1.35)
    f3 = ImageEnhance.Sharpness(f3).enhance(1.14)
    f3 = ImageEnhance.Contrast(f3).enhance(1.12)
    f3 = warm_grade(f3, 1.15)
    f3 = f3.filter(ImageFilter.UnsharpMask(radius=1.4, percent=95, threshold=2))
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
        "clip": "tickle",
        "frames": ["f0", "f1", "f2", "f3"],
        "characters": [c[0] for c in CHARS],
        "files": files,
        "note": (
            "f0 = metal-free A-pose still; f1–f3 = deepened lean/reach/bob "
            "(stronger transforms for intensity-weighted cycle). "
            "Not full painterly. Elara jewelry exception only."
        ),
    }
    (OUT / "MANIFEST.json").write_text(json.dumps(manifest, indent=2) + "\n")
    print("MANIFEST ok", len(files), "files")


if __name__ == "__main__":
    main()
