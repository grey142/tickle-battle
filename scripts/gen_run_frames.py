#!/usr/bin/env python3
"""Generate deepened four-frame run stills from metal-free A-poses (Amateur 12 + Elara).

f0 = A-pose still; f1–f3 = deeper opposite-leg stride punch + oil-paint grade
past #53. Full painterly production run art is still deferred.
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
    inset_x = int(w * 0.026 * amount)
    inset_top = int(h * 0.024 * amount)
    inset_bot = int(h * 0.092 * amount)
    box = (inset_x, inset_top, w - inset_x, h - inset_bot)
    return im.crop(box).resize((w, h), Image.BICUBIC)


def cool_grade(im: Image.Image, amount: float) -> Image.Image:
    """Cool energy push so run frames read faster than idle."""
    arr = np.asarray(im).astype(np.float32)
    arr[..., 0] = np.clip(arr[..., 0] * (1.0 - 0.04 * amount), 0, 255)
    arr[..., 1] = np.clip(arr[..., 1] * (1.0 + 0.034 * amount), 0, 255)
    arr[..., 2] = np.clip(arr[..., 2] * (1.0 + 0.086 * amount), 0, 255)
    return Image.fromarray(arr.astype(np.uint8))


def vignette(im: Image.Image, amount: float) -> Image.Image:
    """Soft edge darken so stride frames read more kinetic."""
    w, h = im.size
    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)
    cx, cy = w / 2.0, h * 0.55
    r = np.sqrt(((xx - cx) / (w * 0.52)) ** 2 + ((yy - cy) / (h * 0.62)) ** 2)
    factor = np.clip(1.0 - np.clip(r - 0.42, 0, 1) * 0.46 * amount, 0.54, 1.0)
    arr = np.asarray(im).astype(np.float32)
    arr *= factor[..., None]
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))


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
    mix = paint * (1.0 - edge_mask * 0.82) + base * (edge_mask * 0.82)
    out = Image.fromarray(np.clip(mix, 0, 255).astype(np.uint8))
    out = out.filter(ImageFilter.MedianFilter(size=3))
    out = Image.blend(im, out, min(0.94, 0.44 + strength * 0.54))
    out = out.filter(ImageFilter.UnsharpMask(radius=1.6, percent=int(90 + strength * 70), threshold=2))
    return out


def make_frames(src: Path) -> list[Image.Image]:
    """v6 deepen past #53: punchier opposite-leg f1/f2 + peak f3 stride + oil grade."""
    base = Image.open(src).convert("RGB")
    f0 = ImageEnhance.Sharpness(base).enhance(1.16)
    f0 = ImageEnhance.Contrast(f0).enhance(1.09)
    f0 = cool_grade(f0, 0.46)
    f0 = painterly(f0, 0.28)

    # f1 — plant / opposite sway (clearer opposite-leg punch past #53)
    f1 = punch_stride(base, 2.65)
    f1 = affine_frame(f1, 0.174, -0.05, 1.074, 0.87, -hshift(base, 0.062), -5.75)
    f1 = ImageEnhance.Contrast(f1).enhance(1.2)
    f1 = cool_grade(f1, 1.5)
    f1 = painterly(f1, 0.74)
    f1 = vignette(f1, 1.2)

    # f2 — opposite plant / stronger extension
    f2 = punch_stride(base, 3.55)
    f2 = affine_frame(f2, -0.206, 0.064, 1.126, 0.795, -hshift(base, 0.094), 6.65)
    f2 = ImageEnhance.Brightness(f2).enhance(1.07)
    f2 = ImageEnhance.Contrast(f2).enhance(1.24)
    f2 = cool_grade(f2, 2.0)
    f2 = painterly(f2, 0.94)
    f2 = f2.filter(ImageFilter.UnsharpMask(radius=1.8, percent=145, threshold=2))
    f2 = vignette(f2, 1.56)

    # f3 — peak bob / squash / forward lean
    f3 = punch_stride(base, 3.35)
    f3 = affine_frame(f3, 0.132, -0.072, 1.17, 0.746, -hshift(base, 0.122), 3.25)
    f3 = ImageEnhance.Sharpness(f3).enhance(1.38)
    f3 = ImageEnhance.Contrast(f3).enhance(1.26)
    f3 = cool_grade(f3, 2.55)
    f3 = painterly(f3, 1.12)
    f3 = f3.filter(ImageFilter.UnsharpMask(radius=2.05, percent=160, threshold=2))
    f3 = vignette(f3, 1.76)
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
            "f0 = metal-free A-pose still; f1–f3 = deeper opposite-leg stride punch "
            "+ oil-paint grade past #53. Not full painterly. Elara jewelry exception only."
        ),
    }
    (OUT / "MANIFEST.json").write_text(json.dumps(manifest, indent=2) + "\n")
    print("MANIFEST ok", len(files), "files")


if __name__ == "__main__":
    main()
