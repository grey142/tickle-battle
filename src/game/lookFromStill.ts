export interface LookKit {
  keyedUrl: string;
  faceUrl: string;
  skin: number;
  hair: number;
  cloth: number;
}

const cache = new Map<string, Promise<LookKit>>();

function isBg(r: number, g: number, b: number): boolean {
  const mx = Math.max(r, g, b);
  const mn = Math.min(r, g, b);
  return mx > 228 && mn > 214 && mx - mn < 22;
}

function rgb(r: number, g: number, b: number): number {
  return (r << 16) | (g << 8) | b;
}

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("still load failed"));
    img.src = url;
  });
}

function keyAndCrop(img: HTMLImageElement): LookKit {
  const w = img.naturalWidth;
  const h = img.naturalHeight;
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const g = c.getContext("2d")!;
  g.drawImage(img, 0, 0);
  const data = g.getImageData(0, 0, w, h);
  const px = data.data;
  const seen = new Uint8Array(w * h);
  const q: number[] = [];
  const push = (x: number, y: number) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return;
    const i = y * w + x;
    if (seen[i]) return;
    const o = i * 4;
    if (!isBg(px[o], px[o + 1], px[o + 2])) return;
    seen[i] = 1;
    q.push(i);
  };
  for (let x = 0; x < w; x++) {
    push(x, 0);
    push(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    push(0, y);
    push(w - 1, y);
  }
  while (q.length) {
    const i = q.pop()!;
    const x = i % w;
    const y = (i / w) | 0;
    const o = i * 4;
    px[o + 3] = 0;
    push(x + 1, y);
    push(x - 1, y);
    push(x, y + 1);
    push(x, y - 1);
  }
  // feather
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const o = (y * w + x) * 4;
      if (px[o + 3] === 0) continue;
      let n = 0;
      if (px[((y - 1) * w + x) * 4 + 3] === 0) n++;
      if (px[((y + 1) * w + x) * 4 + 3] === 0) n++;
      if (px[(y * w + x - 1) * 4 + 3] === 0) n++;
      if (px[(y * w + x + 1) * 4 + 3] === 0) n++;
      if (n) px[o + 3] = Math.max(0, px[o + 3] - n * 70);
    }
  }

  let minx = w, miny = h, maxx = 0, maxy = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (px[(y * w + x) * 4 + 3] < 40) continue;
      if (x < minx) minx = x;
      if (y < miny) miny = y;
      if (x > maxx) maxx = x;
      if (y > maxy) maxy = y;
    }
  }
  if (maxx <= minx) {
    minx = 0;
    miny = 0;
    maxx = w - 1;
    maxy = h - 1;
  }
  const pad = 4;
  minx = Math.max(0, minx - pad);
  miny = Math.max(0, miny - pad);
  maxx = Math.min(w - 1, maxx + pad);
  maxy = Math.min(h - 1, maxy + pad);
  g.putImageData(data, 0, 0);

  const cw = maxx - minx + 1;
  const ch = maxy - miny + 1;
  const cropped = document.createElement("canvas");
  cropped.width = cw;
  cropped.height = ch;
  cropped.getContext("2d")!.drawImage(c, minx, miny, cw, ch, 0, 0, cw, ch);

  const fh = Math.max(8, Math.floor(ch * 0.28));
  const face = document.createElement("canvas");
  face.width = cw;
  face.height = fh;
  face.getContext("2d")!.drawImage(cropped, 0, 0, cw, fh, 0, 0, cw, fh);

  const sample = cropped.getContext("2d")!.getImageData(0, 0, cw, ch).data;
  const avg = (x0: number, y0: number, x1: number, y1: number) => {
    let r = 0, g = 0, b = 0, n = 0;
    const xa = Math.max(0, Math.floor(x0));
    const ya = Math.max(0, Math.floor(y0));
    const xb = Math.min(cw - 1, Math.floor(x1));
    const yb = Math.min(ch - 1, Math.floor(y1));
    for (let y = ya; y <= yb; y += 2) {
      for (let x = xa; x <= xb; x += 2) {
        const o = (y * cw + x) * 4;
        if (sample[o + 3] < 80) continue;
        r += sample[o];
        g += sample[o + 1];
        b += sample[o + 2];
        n++;
      }
    }
    if (!n) return 0xc4a090;
    return rgb((r / n) | 0, (g / n) | 0, (b / n) | 0);
  };

  return {
    keyedUrl: cropped.toDataURL("image/png"),
    faceUrl: face.toDataURL("image/png"),
    hair: avg(cw * 0.3, ch * 0.02, cw * 0.7, ch * 0.16),
    skin: avg(cw * 0.42, ch * 0.22, cw * 0.58, ch * 0.32),
    cloth: avg(cw * 0.35, ch * 0.48, cw * 0.65, ch * 0.62),
  };
}

export function lookFromStill(url: string): Promise<LookKit> {
  let p = cache.get(url);
  if (!p) {
    p = loadImage(url).then(keyAndCrop);
    cache.set(url, p);
  }
  return p;
}
