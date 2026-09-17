# Known gaps — Amateur prototype

Playable Team Quick in `npm run dev`. Not a vertical slice of the full bible.

## Implemented

- First-person camera; ticklee presentation cam during a duel; spectate on tap-out
- Team Quick 6v6 AI fill, one life, last active team wins (vanished counts; wipe cuts vanish)
- Simplified map-one maze (metal kit, sight blockers, ramp + upper deck)
- Rear contact or pack overpower at 2+ starts the tickle automatically; join list cap 6
- Race: ticklee fills escape, ticklers drain stamina only; opener full / extra half
- Vanish 20s map-only, stamina freeze, contact ignore; local reappear tell (12m white flash + sound); 0.85s reappear lock then leftover overlap still needs a fresh rear/pack edge; vanish clock HUD-only for the escaped player
- Soft-nudge into clear space (`NUDGE_CAP` 1.5m) or cancel + pairwise cooldown; pile-local freeze
- Flats then % (bare-hand 0%, base attire 0%; Elara 3/3/3 + 7 unspent)
- Shared 3D humanoid clips on every fighter (procedural idle/walk/run/tickle/squirm). AI looks from Amateur 12 (metal-free). Elara Case player still with explicit metal exception. Catalog 45/45. **No metal** on AI sprites.
- 3 / 1 coins to the player if they are opener/assist; persist level/coins
- Xbox controller first (standard Gamepad mapping), plus laptop + phone fallbacks
- City hub overlay: plaza doors to Home (Look / Skills / Loadout), Shop (Amateur 6+8), Arena (all four Amateur modes)
- Skill spend UI (7 starting points, 25-block bars with 10 Amateur + 15 Pro-locked visible, permanent)
- Amateur shop ladder with prices/% ; persist coins, level, unspent, blocks, owned/equip ids
- Post-match 3-coin tick-start opener / 1-coin assists (team), XP to level 10, countdown bail with no reward
- 10s spawn lock: tickles do not start, contact edges cleared at 0 (no stacked ignore), bots parked, Leave returns plaza
- AI loadouts scale with Elara's level; bots park in spawn during the 10s countdown
- Right-hand weapon placeholders; combat + UI SFX pack (`public/sfx/*.ogg|mp3`: tickle-lock / tickle / vanish / tap-out / reappear / escape / win / lose / buy / spend, wired via `sfx.ts`)
- Same-tick escape-before-tickle global pass (ticklees resolve first)
- 3D plaza backdrop; click Home / Shop / Arena door frames (or overlay buttons) to open rooms
- Armor cloth overlay on the humanoid from equipped Amateur piece
- Team Timed BR (6v6, 4 min, clean respawn, tap-out score, vanish cut at timer)
- FFA Quick (12 solo, join cap 1, no pack, last standing) and FFA Timed (personal taps, respawn)
- Rear-volume ground ring when Elara is behind-and-contact (amber in team, rose in FFA); cyan ring when pack 2+ is live
- Mid-lane amber bait **spawns on the lane facing away** (not walking in from spawn B); walking into their back auto-starts the tickle; cyan cannot steal the bait for 12s
- Countdown: FP move, tickles blocked, bots mill in spawn, contact ignore until 0, one clean lift (front overlaps keep a single edge; no stacked 5s ignore)
- Match coins/XP write only on the results overlay; countdown bail skips that write
- Home Look tab: Elara default plus Amateur 12 metal-free stills; look id persists; AI skips the selected slug
- Shop hall door: buy Amateur 6 / 8, equip immediately, owned ids persist; 12-coin starter purse
- Xbox LS/RS + WASD together; A/RT tickle, B/LT escape; plaza A/Menu Play; results B/A/Menu Return; rear or pack 2+ starts the tickle
- Hub rooms on pad: D-pad / LS cursor, A confirm (Look / Skills / Shop buy-equip / Arena mode), LB/RB tabs, B plaza
- Plaza mannequin wears the current Look still plus equipped Amateur weapon/armor
- Loadout snapshot at Arena Start (HUD / results / spawn use the locked ids)
- Home Look laugh preview (~2s still + plaza mannequin squirm); stills drive the shared 3D rig; bots also show keyed still billboards in-match
- Soft-nudge searches 16 directions out to `NUDGE_CAP` 1.5m for clear space, else cancel + pairwise cooldown; freeze is pile-local
- AI pile-join cooldown: `PILE_CD` 2.75s (sticky 1.35s) on successful join and on drop/peel — no sticky bypass
- AI fighters use full-body Amateur still billboards (capsule humanoid hidden); `K_DAMAGE = 0.95` (1/3 of prior 2.85) for ~3× harder tap-outs; FP tickle arms wired to tickleBind rate/amps + billboard wag + four-frame tickle still cycle while tickling

## Stub / missing

- Walkable 3D hub (doors open overlay rooms; you do not walk the plaza as a character)
- Painterly four-clip production anims and blendshapes still missing (tickle and run four-frame A-pose adaptations plus laugh stage/multi-frame stills ship; full painterly anims TBD).
- Navmesh AI mid-lane waypoints + wall-slide shipped; pile join cooldown is exact (`PILE_CD` 2.75s / sticky 1.35s, armed on join + drop)
- Full licensed SFX library still TBD; remaining oscillator-only cues are gone for Team Quick UI/combat stingers (samples + oscillator fallbacks)
- No jump (bible); ramp height is a groundY sample

## Laugh production clips (Support)
Painterly s0–s3 stage stills plus multi-frame cycle (`assets/binds/laugh/frames/` f0–f3) for Amateur 12 + Elara. Ticklee billboards cycle frames; stamina drives rate/amp/lean plus face-card blend weights (jaw/cheek/eye/brow) on the FP/plaza humanoid. Remaining: true morph-target mesh blendshapes if a non-capsule head ships later; walkable 3D plaza hub still open.

## Tickle production polish (Support 4)
Four-frame tickle cycles for Amateur 12 + Elara under `assets/binds/tickle/frames/` (f0 = A-pose still; f1–f3 lean/reach/bob adaptations). AI tickler billboards + FP portrait cycle frames; FP arms use `tickleBind` rate/amps (no hardcoded `sin(t*28)`); Humanoid tickle motion strengthened. Deferred: true painterly tickle stage stills/blendshapes beyond A-pose adaptations.

## Run production frames (Support 3)
Painterly four-frame run cycles for Amateur 12 + Elara now ship under `assets/binds/run/frames/` (f0 = A-pose still; f1–f3 bob/sway/squash). AI billboards + FP portrait cycle at `bind.run.billRate` while walk/run. Remaining: true four-clip production anims/blendshapes beyond still swaps.
