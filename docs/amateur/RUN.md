# Amateur run binds

Per-look locomotion binds for **Elara Case** (player kit) and the **Amateur 12**.

## Files

- `assets/binds/run/{Slug}.run.json`
- `assets/binds/run/frames/{Slug}_f0.jpg` … `_f3.jpg` — four-frame run cycle (f0 = A-pose still; f1–f3 = deeper opposite-leg stride punch + oil-paint grade past #56)
- `assets/binds/run/frames/MANIFEST.json`
- Loader: `src/game/runBind.ts` (`runFrameUrls(bind)`)

## Fields

- `walk` / `run`: `rate`, `amp`, `lean`, `billBob`, `billRate`
- `walkSpeed` / `runSpeed`: thresholds (defaults 0.4 / 4.4)
- `frames`: `["frames/Slug_f0.jpg", … "_f3.jpg"]`

## Wiring

- Free fighters pick idle / walk / run by speed.
- Humanoid 3D pose uses bind rate/amp/lean.
- AI woman billboards bob (stronger sway/squash) while walking/running **and** cycle the four production frames at loco `billRate` FPS (walk uses walk.billRate); restore keyed A-pose still when idle/busy. Humanoid 3D stride bob/sway/squash deepened again past #56.
- FP HUD `#player-portrait` gets `data-clip` + `.running` / `.walking`; meta shows the clip name; portrait src also cycles run frames when walk/run.

Metal-free Amateur AI; Elara jewelry exception only (`playerOnly` / `metalException`). She is not in the Amateur bikini glob.
