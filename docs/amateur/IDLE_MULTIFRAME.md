# Amateur — Multi-frame idle (Support 2)

Beyond keyed stills: `assets/binds/idle/sheets/<Slug>.png` are 8-frame horizontal A-pose breathe sheets for Elara + Amateur 12.

While free/idle, AI + plaza mannequin billboards advance the sheet (~6–10 fps from bind) with **dual-phase breathe / weight-shift** (amp + sway deeper than the first sheet ship). Capsule idle (FP/plaza halls) uses the same dual-phase spine/shoulder/head motion.

Look swaps clear the prior sheet so the new slug loads clean. Persist: equipped weapon/armor stay in owned lists on load.

Walk/run/tickle/laugh fall back to keyed still (or clip frames).
