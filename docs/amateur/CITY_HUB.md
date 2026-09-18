# Amateur — City Hub Loop (Lead deliverable)

## Goal
One hub mesh. Three rooms. Solo player can customize → gear up → queue Team Quick → return with coins → repeat. Same grimdark laser-tag / alien kit as map one.

## Hub layout
- Central plaza — **walkable** first-person hub after boot and after matches. Soft biolume under team-rim brightness. Three marked doors: Home, Shop, Arena (shared near-door trim glow + pulse light + inner/outer threshold sills + lintel accent + smoothstep approach sign/sill feel + wider floor pads; Arena slight CTA lead; idle breath when far; soft frame lift on approach; extended jamb wall-slide + tip unjam). WASD / LS move, mouse / RS look (same locomotion feel as a match).
- Home (left) — walk up or click door / overlay → appearance, skill spend, loadout equip.
- Shop (right) — walk up or click → buy Amateur weapons (6) and armors (8); prices on locked ladders.
- Arena (forward) — walk up or click the 3D door to **start Amateur Team Quick** immediately. Overlay **Arena** button / pad RB still opens mode select (Timed + FFA). Tier Amateur, AI fill.

No separate maps. Door = room transition (or Arena → Team Quick) on the same hub mesh.

## Boot / return flow
1. Boot → plaza (load persisted coins, Elara look, skills, weapon, armor).
2. Optional Home / Shop.
3. Arena → confirm Team Quick → 10s countdown → map one.
4. Match end → post-match results → plaza with updated coins (Leave during countdown / Return both reload persisted profile, wipe match ephemeral, exit pointer-lock, and ~0.55s pad confirm grace so Arena does not instantly re-queue).

## Home (Amateur)
Tabs: Look | Skills | Loadout
- Look: Elara default plus Amateur 12 stills; D-pad / click to swap; confirm preview = short laugh/squirm; plaza mannequin + persist look id.
- Skills: three 25-block bars (Stamina / Escape / Tickle). Starting 7 points + points earned through levels 1–10. Spend is permanent for that save. Show flat values (+2 / +3.5 / +1.5 per block).
- Loadout: one weapon + one armor; unequipped = bare hand + base bikini/shorts. Locked at Arena signup for the next match.

## Shop (Amateur)
- Two lists: Weapons (Amateur 6) / Armors (Amateur 8).
- Show % buff, price, owned/equipped state.
- Buy spends coins; cannot buy Pro/Legends yet.
- Equip routes to Home loadout (or equip-in-shop for speed).

## Arena (Amateur)
- Mode: all four Amateur modes launch (Team Quick, Team Timed, FFA Quick, FFA Timed).
- Tier: Amateur only for this slice.
- AI fill: always pad both teams to 6 so solo launches immediately.
- Start → lock loadout (weapon/armor snapshot) → countdown → map one. Pad: D-pad picks a mode, A starts it.

## Persist (contract)
Hub reads/writes: coins, level (1–10), unspent skill points, spent blocks, look ids, weapon id, armor id. Missing save = fresh Elara with 7 points, 12 starter coins (enough for Palm Mitts or Weave Shorts), bare hand, base attire.
