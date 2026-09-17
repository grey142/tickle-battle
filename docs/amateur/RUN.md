# Amateur run binds

Per-look locomotion binds for **Elara Case** (player kit) and the **Amateur 12**.

## Files

- `assets/binds/run/{Slug}.run.json`
- Loader: `src/game/runBind.ts`

## Fields

- `walk` / `run`: `rate`, `amp`, `lean`, `billBob`, `billRate`
- `walkSpeed` / `runSpeed`: thresholds (defaults 0.4 / 4.4)

## Wiring

- Free fighters pick idle / walk / run by speed.
- Humanoid 3D pose uses bind rate/amp/lean.
- AI woman billboards bob while walking/running.
- FP HUD `#player-portrait` gets `data-clip` + `.running` / `.walking`; meta shows the clip name.

Elara stays on her player still path (`playerOnly` / `metalException`); she is not in the Amateur bikini glob.
