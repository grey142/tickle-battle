#!/usr/bin/env python3
"""Derive laugh cycle f4 from existing f2/f3 stills (Amateur 12 + Elara).

Stronger squash/lean/grade/vignette painterly feel for peak low-stamina window.
Metal-free Amateur; Elara jewelry exception only (already in source stills).
Requires: Pillow, numpy
"""
from __future__ import annotations

import json
from pathlib import Path

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parents[1]
FRAMES = ROOT / "assets/binds/laugh/frames"

CHARS = [
    "BriarKnox",
    "CassWynn",
    "EmberLang",
    "JunoHale",
    "KoraVale",
    "LyraFinch",
    "MiraSolis",
    "NimCortez",
    "RynAshford",
    "SableQuinn",
    "TorenBlake",
    "VeshMarlowe",
    "ElaraCase",
]


def affine_frame(
    im: Image.Image, shear_x: float, shear_y: float, scale: float, dy: float, rot: float
) -> Image.Image:
    w, h = im.size
    cx, cy = w / 2, h / 2
    ang = np.deg2rad(rot)
    ca, sa = np.cos(ang), np.sin(ang)
    sx = scale
    sy = scale * (1.0 - abs(shear_y) * 0.2)
    A = np.array([[sx, shear_x], [shear_y, sy]], dtype=np.float64)
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


def squash_stretch(im: Image.Image, sx: float, sy: float) -> Image.Image:
    w, h = im.size
    nw, nh = max(1, int(w * sx)), max(1, int(h * sy))
    scaled = im.resize((nw, nh), Image.BICUBIC)
    canvas = Image.new("RGB", (w, h), (248, 244, 238))
    canvas.paste(scaled, ((w - nw) // 2, (h - nh) // 2 + int(h * 0.01)))
    return canvas


def warm_grade(im: Image.Image, amount: float) -> Image.Image:
    arr = np.asarray(im).astype(np.float32)
    arr[..., 0] = np.clip(arr[..., 0] * (1.0 + 0.06 * amount), 0, 255)
    arr[..., 1] = np.clip(arr[..., 1] * (1.0 + 0.02 * amount), 0, 255)
    arr[..., 2] = np.clip(arr[..., 2] * (1.0 - 0.05 * amount), 0, 255)
    return Image.fromarray(arr.astype(np.uint8))


def painterly(im: Image.Image, strength: float) -> Image.Image:
    w, h = im.size
    factor = max(2, int(3 + strength * 3))
    small = im.resize((max(8, w // factor), max(8, h // factor)), Image.BILINEAR)
    smeared = small.resize((w, h), Image.BICUBIC)
    edges = im.filter(ImageFilter.FIND_EDGES)
    edge_arr = np.asarray(edges).astype(np.float32)
    edge_mask = np.clip(edge_arr.mean(axis=2) / 255.0 * (0.55 + 0.35 * strength), 0, 1)
    edge_mask = edge_mask[..., None]
    base = np.asarray(im).astype(np.float32)
    paint = np.asarray(smeared).astype(np.float32)
    mix = paint * (1.0 - edge_mask * 0.65) + base * (edge_mask * 0.65)
    out = Image.fromarray(np.clip(mix, 0, 255).astype(np.uint8))
    if strength >= 0.45:
        out = out.filter(ImageFilter.MedianFilter(size=3))
    bits = max(5, 8 - int(strength * 2.2))
    out = ImageOps.posterize(out, bits)
    out = out.filter(
        ImageFilter.UnsharpMask(
            radius=1.1 + 0.4 * strength,
            percent=int(70 + 40 * strength),
            threshold=2,
        )
    )
    return out


def vignette(im: Image.Image, amount: float) -> Image.Image:
    w, h = im.size
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    cx, cy = (w - 1) / 2.0, (h - 1) / 2.0
    rx, ry = w * 0.6, h * 0.58
    r = np.sqrt(((xx - cx) / rx) ** 2 + ((yy - cy) / ry) ** 2)
    shade = np.clip(1.0 - amount * np.clip(r - 0.32, 0, 1) ** 1.55, 0.68, 1.0)
    arr = np.asarray(im).astype(np.float32)
    arr *= shade[..., None]
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))


def make_f4(f2: Image.Image, f3: Image.Image) -> Image.Image:
    """Blend f2/f3 then push squash/lean/grade past peak still."""
    # Slight bias toward f3 (harder) with a touch of f2 opposite lean
    a2 = np.asarray(f2).astype(np.float32)
    a3 = np.asarray(f3).astype(np.float32)
    blend = Image.fromarray(np.clip(a3 * 0.62 + a2 * 0.38, 0, 255).astype(np.uint8))
    h = blend.size[1]
    out = squash_stretch(blend, 0.94, 1.045)
    out = affine_frame(out, -0.09, 0.038, 1.085, -h * 0.028, -2.2)
    out = ImageEnhance.Brightness(out).enhance(1.05)
    out = ImageEnhance.Contrast(out).enhance(1.16)
    out = ImageEnhance.Color(out).enhance(1.14)
    out = ImageEnhance.Sharpness(out).enhance(1.12)
    out = warm_grade(out, 1.35)
    out = painterly(out, 0.88)
    out = vignette(out, 0.4)
    return out


def main() -> None:
    files: list[str] = []
    for slug in CHARS:
        p2 = FRAMES / f"{slug}_f2.jpg"
        p3 = FRAMES / f"{slug}_f3.jpg"
        if not p2.exists() or not p3.exists():
            raise SystemExit(f"missing f2/f3 for {slug}")
        f2 = Image.open(p2).convert("RGB")
        f3 = Image.open(p3).convert("RGB")
        f4 = make_f4(f2, f3)
        dest = FRAMES / f"{slug}_f4.jpg"
        f4.save(dest, quality=88, optimize=True)
        files.append(dest.name)
        print(f"wrote {dest.relative_to(ROOT)} ({f4.size[0]}x{f4.size[1]})")

    manifest_path = FRAMES / "MANIFEST.json"
    manifest = {
        "clip": "laugh_squirm",
        "frames": ["f0", "f1", "f2", "f3", "f4"],
        "source": (
            "painterly stage stills reused as production multi-frame cycle; "
            "f4 derived from f2/f3 with stronger squash/lean/grade/vignette"
        ),
        "characters": CHARS,
        "files": files,
        "note": (
            "Metal-free Amateur; Elara jewelry exception only. "
            "Billboard cycles while ticklee; stamina-weighted windows lock "
            "low stamina onto f3–f4; stamina drives humanoid rate/amp/lean/blend."
        ),
    }
    manifest_path.write_text(json.dumps(manifest, indent=2) + "\n")
    print("MANIFEST ok", len(files), "f4 files")


if __name__ == "__main__":
    main()
