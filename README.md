# Tickle Battle

**Play live:** [https://grey142.github.io/tickle-battle/](https://grey142.github.io/tickle-battle/)

Playable **Amateur Team Quick** prototype (browser). First-person 6v6 vs AI, one life, last team standing.

This GitHub copy is the current playable **main** build: tickles **auto-start** from a rear or a pack — there is **no Grab button**. GitHub Pages serves the static `docs/` build (no npm on the client).

Locked design markdown still lives under `docs/*.md` beside the Pages site. This build is a stub-art slice of those rules — not Pro/Legends, story, or 45 cosmetics.

## Play locally


```bash
git clone https://github.com/grey142/tickle-battle.git
cd tickle-battle
npm install
npm run dev
```

Then open **http://127.0.0.1:43180**

```bash
npm run build
npm run preview
```

serves the production bundle on the same URL.

## What works in Amateur Team Quick

1. Plaza: **Home** (Look / Skills / Loadout), **Shop** (Amateur 6 weapons / 8 armors), **Arena** (Team Quick, Team Timed, FFA Quick, FFA Timed). Click the 3D hall doors or the overlay buttons. **Play Team Quick** launches immediately.
2. Spend the starting 7 skill points in Home → Skills (25-block bars: 10 Amateur fillable, 15 Pro-locked). Home → Look swaps Elara + Amateur 12 stills (Elara default). Shop has a 12-coin starter purse — buy Amateur 6 weapons / 8 armors, equip, ids persist.
3. **10s spawn countdown** — first-person move, tickles do not start, contact ignored, bots parked (one amber waits on the mid-lane facing away). **Leave countdown** (or B / Escape) returns to plaza with no coins and no XP. At 0, one clean lift — no stacked spawn-ignore.
4. Get **behind** the amber-rim bait (walk the glowing lane into their back; amber ring on the floor) or pile on with 2+ cyan contact. The tickle **starts automatically** (rear or pack). There is no Grab.
5. **Tickle** to drain stamina (opener full, extra ticklers half). Ticklee **Escape** fills the bar — ticklers do **not** drain it (race, not tug-of-war).
6. 100% escape → **20s vanish** (map only, stamina frozen; the vanish clock is HUD-only for the escaped player). Nearby fighters get a short white flash + sound on reappear. Then **0.85s contact-ignore**, and leftover overlap still needs a **fresh** rear or pack start (no button).
7. Stamina 0 → tap-out. **Team Quick:** spectate; last team standing (wipe cuts vanish and ends). **Team Timed:** clean respawn, 4 min, most tap-outs. **FFA Quick:** last standing, no packs. **FFA Timed:** solo respawn, personal taps. Results list **+3 first tickler** from the tick-start opener and **+1 assists** (team), then XP, persist, then plaza. +1 level / skill point (cap 10).

Save lives in `localStorage` under `tb-amateur-save`: coins (starter 12), level 1–10, unspent, skill blocks, look id (Elara = 0, Amateur 12 = 1–12), weapon/armor ids and owned lists. Flats are stored; gear % applies at runtime. Leaving during the 10s countdown writes no match coins or XP.

### Controls (Xbox first)

Plug in an Xbox controller (or any pad with standard mapping) and press a button. Look uses the right stick — pointer lock is not required.

| | Xbox | Laptop | Phone |
| --- | --- | --- | --- |
| Look | Right stick | Click canvas, mouse | Drag the right half |
| Move | Left stick / D-pad | WASD | Left stick |
| Tickle | **A** or RT | **T** or Space | **Tickle** |
| Escape | **B** or LT | **E** | **Escape** |
| Start tickle | Walk behind, or pack 2+ contact | Same | Same |
| Release | **Y** | **Q** | — |
| Plaza rooms | **X** Home · **Y** Shop · RB Arena · **B** back | Click doors, or 1 / 2 / 3 | Tap doors |
| Room cursor | D-pad / LS · **A** confirm · LB/RB tabs | Arrows · Enter · `[` `]` tabs | Tap lists |
| Plaza Play | **A** or Menu | Click Play | Tap Play |
| Results | **B** / **A** / Menu | Click Return | Tap Return |
| Countdown bail | **B** / View / Escape | Leave countdown | Leave countdown |

Cyan rim = your team. Amber = enemies. Magenta pulse = ticklee flash.

## Click-test

1. **Gamepad + WASD:** Plug in an Xbox pad (or use LS/RS after any button). Plaza **A** / Menu starts Team Quick; Results **B** / **A** / Menu returns. **X** Home / **Y** Shop / RB Arena. In a room, D-pad (or LS) moves the cyan cursor, **A** picks / buys / spends / starts the focused Arena mode, LB/RB change tabs, **B** plaza. In a match, LS move + WASD together, RS look, **A**/RT tickle, **B**/LT escape. Rear or pack 2+ starts the tickle.
2. **Hub loop:** Boot → Home Skills spend 1 → Look pick a still → hall **Shop** door → buy Palm Mitts (8c) → Arena Start → 10s → walk behind mid-lane amber (tickle auto-starts) → results → plaza. Reload: coins, owned weapon id, look id, and skill block still there.
3. **Combat:** Play Team Quick → during the 10s, hold **W** down the glowing mid-lane. Amber waits facing away. At **0** keep walking into their back — tickle starts with no button. **T** drains stamina. **E** to 100 vanishes (your clock only). After reappear, 0.85s lock then break contact — leftover overlap does not auto-start; a new rear or pack 2+ does. Near walls, auto-start soft-nudges into clear space or cancels clean with a pairwise cooldown.
4. **Countdown bail:** Leave during the 10s and confirm coins/XP unchanged aside from hub spends/buys already written.

## What is stubbed

See [docs/KNOWN_GAPS.md](docs/KNOWN_GAPS.md). All four Amateur modes launch from Arena (Team Quick / Team Timed / FFA Quick / FFA Timed). Gear is flats-then-% from the Amateur 6+8 ladder (bare hand / base attire = 0%). Humanoids are capsule kits with placeholder weapon props, not the full four-clip art bible. Click the 3D Home / Shop / Arena door frames in the hall, or the overlay buttons.

## Docs (design source of truth)

| File | Role |
| --- | --- |
| [docs/DESIGN_BIBLE.md](docs/DESIGN_BIBLE.md) | Locked Amateur rules |
| [docs/INCONSISTENCY_REPORT.md](docs/INCONSISTENCY_REPORT.md) | QA hunts; prototype follows signed accepts (race, Team Quick, vanish cut, flats-then-%) |
| [docs/amateur/CITY_HUB.md](docs/amateur/CITY_HUB.md) | Hub loop (plaza persist; Home / Shop / Arena overlay rooms) |
