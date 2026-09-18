#!/usr/bin/env python3
"""Generate five-frame painterly tickle stills from metal-free A-poses (Amateur 12 + Elara).

f0 = grounded A-pose; f1–f4 = stronger lean/reach/bob + oil-paint grade so
intensity-weighted cycle reads distinct (harder windows favor f3/f4).
Metal-free Amateur; Elara jewelry exception only.
Requires: Pillow, numpy
"""
from __future__ import annotations

import json
from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter, ImageOps

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
    sy = scale * (1.0 - abs(shear_y) * 0.18)
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
    """Crop-in from sides/bottom so arms/torso read closer (reach)."""
    w, h = im.size
    inset_x = int(w * 0.034 * amount)
    inset_top = int(h * 0.012 * amount)
    inset_bot = int(h * 0.072 * amount)
    box = (inset_x, inset_top, w - inset_x, h - inset_bot)
    return im.crop(box).resize((w, h), Image.BICUBIC)


def squash_stretch(im: Image.Image, sx: float, sy: float) -> Image.Image:
    """Mild non-uniform scale about center for pose readability."""
    w, h = im.size
    nw, nh = max(1, int(w * sx)), max(1, int(h * sy))
    scaled = im.resize((nw, nh), Image.BICUBIC)
    canvas = Image.new("RGB", (w, h), (248, 244, 238))
    canvas.paste(scaled, ((w - nw) // 2, (h - nh) // 2))
    return canvas


def warm_grade(im: Image.Image, amount: float, cool: float = 0.0) -> Image.Image:
    """Warm push (hard frames) or cool pull (calm). amount/cool in ~0–1.5."""
    arr = np.asarray(im).astype(np.float32)
    arr[..., 0] = np.clip(arr[..., 0] * (1.0 + 0.055 * amount - 0.04 * cool), 0, 255)
    arr[..., 1] = np.clip(arr[..., 1] * (1.0 + 0.015 * amount + 0.01 * cool), 0, 255)
    arr[..., 2] = np.clip(arr[..., 2] * (1.0 - 0.045 * amount + 0.05 * cool), 0, 255)
    return Image.fromarray(arr.astype(np.uint8))


def painterly(im: Image.Image, strength: float) -> Image.Image:
    """Oil-paint-ish: downsample smear + edge restore + mild posterize."""
    if strength <= 0.01:
        return im
    w, h = im.size
    # Smear at lower res (brush size scales with strength)
    factor = max(2, int(3 + strength * 3))
    small = im.resize((max(8, w // factor), max(8, h // factor)), Image.BILINEAR)
    smeared = small.resize((w, h), Image.BICUBIC)
    # Blend original edges back so silhouette stays readable
    edges = im.filter(ImageFilter.FIND_EDGES)
    edge_arr = np.asarray(edges).astype(np.float32)
    edge_mask = np.clip(edge_arr.mean(axis=2) / 255.0 * (0.55 + 0.35 * strength), 0, 1)
    edge_mask = edge_mask[..., None]
    base = np.asarray(im).astype(np.float32)
    paint = np.asarray(smeared).astype(np.float32)
    mix = paint * (1.0 - edge_mask * 0.65) + base * (edge_mask * 0.65)
    out = Image.fromarray(np.clip(mix, 0, 255).astype(np.uint8))
    # Soft median for blotchy paint, then unsharp for stage punch
    if strength >= 0.45:
        out = out.filter(ImageFilter.MedianFilter(size=3))
    bits = max(5, 8 - int(strength * 2.2))
    out = ImageOps.posterize(out, bits)
    out = out.filter(ImageFilter.UnsharpMask(radius=1.1 + 0.4 * strength, percent=int(70 + 40 * strength), threshold=2))
    return out


def vignette(im: Image.Image, amount: float) -> Image.Image:
    if amount <= 0.01:
        return im
    w, h = im.size
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    cx, cy = (w - 1) / 2.0, (h - 1) / 2.0
    rx, ry = w * 0.62, h * 0.62
    r = np.sqrt(((xx - cx) / rx) ** 2 + ((yy - cy) / ry) ** 2)
    shade = np.clip(1.0 - amount * np.clip(r - 0.35, 0, 1) ** 1.6, 0.72, 1.0)
    arr = np.asarray(im).astype(np.float32)
    arr *= shade[..., None]
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))


def make_frames(src: Path) -> list[Image.Image]:
    """Five-frame cycle: f0 calm → f4 peak lean/reach with painterly grade."""
    base = Image.open(src).convert("RGB")

    # f0 — grounded A-pose, slight cool grade, light sharpen (readable still)
    f0 = ImageEnhance.Sharpness(base).enhance(1.08)
    f0 = ImageEnhance.Contrast(f0).enhance(1.04)
    f0 = warm_grade(f0, 0.0, cool=0.35)
    f0 = painterly(f0, 0.18)

    # f1 — clear lean/reach (mild intensity)
    f1 = punch_reach(base, 1.55)
    f1 = squash_stretch(f1, 1.02, 0.985)
    f1 = affine_frame(f1, 0.11, -0.028, 1.045, -hshift(base, 0.022), -2.8)
    f1 = ImageEnhance.Contrast(f1).enhance(1.1)
    f1 = ImageEnhance.Color(f1).enhance(1.06)
    f1 = warm_grade(f1, 0.55, cool=0.05)
    f1 = painterly(f1, 0.42)
    f1 = vignette(f1, 0.18)

    # f2 — opposite lean + deeper reach
    f2 = punch_reach(base, 2.25)
    f2 = squash_stretch(f2, 0.97, 1.02)
    f2 = affine_frame(f2, -0.125, 0.036, 1.07, -hshift(base, 0.038), 3.4)
    f2 = ImageEnhance.Brightness(f2).enhance(1.045)
    f2 = ImageEnhance.Contrast(f2).enhance(1.14)
    f2 = ImageEnhance.Color(f2).enhance(1.1)
    f2 = warm_grade(f2, 0.95)
    f2 = painterly(f2, 0.62)
    f2 = vignette(f2, 0.28)

    # f3 — peak bob/reach (hard)
    f3 = punch_reach(base, 2.0)
    f3 = squash_stretch(f3, 1.04, 0.97)
    f3 = affine_frame(f3, 0.075, -0.03, 1.09, -hshift(base, 0.052), 1.8)
    f3 = ImageEnhance.Sharpness(f3).enhance(1.12)
    f3 = ImageEnhance.Contrast(f3).enhance(1.16)
    f3 = ImageEnhance.Color(f3).enhance(1.14)
    f3 = warm_grade(f3, 1.25)
    f3 = painterly(f3, 0.78)
    f3 = vignette(f3, 0.36)

    # f4 — alternate peak (opposite shear, hottest grade) for intensity apex
    f4 = punch_reach(base, 2.45)
    f4 = squash_stretch(f4, 0.95, 1.035)
    f4 = affine_frame(f4, -0.08, 0.04, 1.1, -hshift(base, 0.06), -1.6)
    f4 = ImageEnhance.Brightness(f4).enhance(1.06)
    f4 = ImageEnhance.Sharpness(f4).enhance(1.16)
    f4 = ImageEnhance.Contrast(f4).enhance(1.18)
    f4 = ImageEnhance.Color(f4).enhance(1.18)
    f4 = warm_grade(f4, 1.45)
    f4 = painterly(f4, 0.92)
    f4 = vignette(f4, 0.42)
    return [f0, f1, f2, f3, f4]


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
        "frames": ["f0", "f1", "f2", "f3", "f4"],
        "characters": [c[0] for c in CHARS],
        "files": files,
        "note": (
            "f0 = metal-free A-pose still; f1–f4 = deepened lean/reach/bob + "
            "painterly grade (oil smear / warm push / vignette) for intensity-"
            "weighted cycle. Elara jewelry exception only."
        ),
    }
    (OUT / "MANIFEST.json").write_text(json.dumps(manifest, indent=2) + "\n")
    print("MANIFEST ok", len(files), "files")


if __name__ == "__main__":
    main()
