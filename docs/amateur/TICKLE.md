# Amateur — Tickle binds

Per-look `assets/binds/tickle/<Slug>.tickle.json` files tune the shared **tickling** clip for the Amateur 12 looks and Elara Case. The loader keeps the four-clip rig intact: these binds only provide pose timing/amplitudes for the tickler, plus billboard feedback.

`playerOnly` and `metalException` follow the existing idle/run/laugh bind metadata. Elara is the player-only look; Amateur stills remain metal-free. Missing or unknown slugs use the procedural fallback in `src/game/tickleBind.ts`.
