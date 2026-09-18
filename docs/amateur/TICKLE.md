# Amateur — Tickle binds

Per-look `assets/binds/tickle/<Slug>.tickle.json` files tune the shared **tickling** clip for the Amateur 12 looks and Elara Case. The loader keeps the four-clip rig intact: these binds only provide pose timing/amplitudes for the tickler, plus billboard feedback.

`playerOnly` and `metalException` follow the existing idle/run/laugh bind metadata. Elara is the player-only look; Amateur stills remain metal-free. Missing or unknown slugs use the procedural fallback in `src/game/tickleBind.ts`.

## Files

- `assets/binds/tickle/{Slug}.tickle.json`
- `assets/binds/tickle/frames/{Slug}_f0.jpg` … `_f4.jpg` — five-frame tickle cycle (f0 = metal-free A-pose still; f1–f4 = deepened lean/reach/bob + painterly grade)
- `assets/binds/tickle/frames/MANIFEST.json`
- Loader: `src/game/tickleBind.ts` (`tickleFrameUrls(bind)`)
- Generator: `scripts/gen_tickle_frames.py`

## Fields

- Pose: `rate`, `twistRate`, `spineBase`, `spineAmp`, `chestAmp`, `shoulderAmp`, `elbowAmp`, `weaponWag`
- Billboard: `billWag`, `billRate`
- `frames`: `["frames/Slug_f0.jpg", … "_f4.jpg"]`

## Wiring

- Humanoid 3D tickle pose uses bind rate/amps (slightly stronger secondary twist for readability).
- AI tickler billboards wag from `billWag`/`billRate` **and** cycle the five production frames with **intensity-weighted** windows (mirrors laugh stamina pick):
  - Game stamps `Fighter.tickleIntensity` from victim stamina (low stam → high intensity → harder f3/f4).
  - Soft (`<22`): f0–f1; low-mid: f0–f2; mid: f1–f3; hard: f2–f4; peak (`≥82`): f3–f4.
  - Cycle FPS scales with `billRate` and intensity.
  - Restore keyed A-pose still when not tickling.
- FP HUD `#player-portrait` swaps to the active tickle frame while the player is tickler/nudge.
- FP arms (`Game.updateFpTickle`) use per-look `rate` / `twistRate` / `shoulderAmp` / `elbowAmp` / `weaponWag` from the tickle bind (closes the hardcoded `sin(t*28)` gap).

Metal-free Amateur AI; Elara jewelry exception only (`playerOnly` / `metalException`).

## Deferred

True multi-clip mesh anims / morph blendshapes for tickle (beyond deepened painterly A-pose still adaptations) are **not** in this ship.
