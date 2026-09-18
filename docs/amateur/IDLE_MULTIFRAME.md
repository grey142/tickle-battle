# Amateur — Multi-frame idle (Support 2)

Beyond keyed stills: `assets/binds/idle/sheets/<Slug>.png` are 8-frame horizontal A-pose breathe sheets for Elara + Amateur 12.

While free/idle, AI + plaza mannequin billboards advance the sheet with a **smoothstep crossfade** between cells (second fade sprite) — not hard UV swaps. Dual-phase breathe / weight-shift still rides on top. Capsule idle uses the same dual-phase spine/shoulder/head motion.

Look swaps clear the prior sheet. Persist: equipped loadout stays owned; plaza mannequin picks up skill-block changes after spend.
