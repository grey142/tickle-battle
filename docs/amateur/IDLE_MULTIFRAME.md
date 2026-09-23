# Amateur — Multi-frame idle (Support 2)

Beyond keyed stills: `assets/binds/idle/sheets/<Slug>.png` are 8-frame horizontal A-pose breathe sheets for Elara + Amateur 12.

While free/idle, AI + plaza mannequin billboards use a longer-hold plateau crossfade (past #124: `Math.pow(s, 48)` after smootherstep) and punchier dual-phase breathe / weight-shift. Look soft-enter keeps the keyed still under the sheet with a softer Look-edge re-enter rate (`idleEnterRate = 1.48` on fresh look load); ending a Look/plaza laugh preview soft-re-enters more slowly via `softenIdleSheetEnter(0.0072)` / rate `0.28`. Persist load re-saves the sanitized profile without inventing schema (unspent clamped to remaining Amateur skill room). Idle-scoped Fighter edits only.
