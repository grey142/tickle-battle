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
- Right-hand weapon placeholders; combat + UI SFX pack (`public/sfx/*.ogg|mp3`: tickle-lock / tickle / vanish / tap-out / reappear / escape / win / lose / buy / spend / countdown-tick — layered procedural cues via `gen_sfx_pack.py`, wired via `sfx.ts` with oscillator fallbacks; last-3s spawn + leave + vanish-clock ticks; AudioContext unlock on first gesture)
- Same-tick escape-before-tickle global pass (ticklees resolve first)
- 3D plaza backdrop; click Home / Shop / Arena door frames (or overlay buttons) to open rooms
- **Walkable 3D plaza hub:** first-person WASD/LS + look; axis-separated wall slide with deeper jamb slack + jamb-tip unjam (Home/Shop/Arena); walk up to **Arena** (or click its door) to start Amateur Team Quick — near-door trim glow + soft point-light pulse + inner/outer threshold sills + lintel accent + octa-biased-smoothstep approach sign/sill/light ramp + stronger soft frame lift on **all three doors** (Home/Shop match Arena pulse; Arena slight CTA lead; idle breath when far) + wider pulsing floor pads; Leave / results Return wipe match ephemeral, reload disk profile, exit pointer-lock, and ~1.25s grace pad A so Arena does not re-queue (coins/XP/Look/loadout preserved)
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
- Plaza mannequin wears the current Look still / multi-frame idle sheet plus equipped Amateur weapon/armor (third-person in the walkable hall)
- Loadout snapshot at Arena Start (HUD / results / spawn use the locked ids)
- Home Look laugh preview (~2s still + plaza mannequin squirm); stills drive the shared 3D rig; bots also show keyed still billboards in-match
- Soft-nudge searches 16 directions out to `NUDGE_CAP` 1.5m for clear space, else cancel + pairwise cooldown; freeze is pile-local
- AI pile-join cooldown: `PILE_CD` 2.75s (sticky 1.35s) on successful join and on drop/peel — no sticky bypass
- AI fighters use full-body Amateur still billboards (capsule humanoid hidden); `K_DAMAGE = 0.95` (1/3 of prior 2.85) for ~3× harder tap-outs; FP tickle arms wired to tickleBind rate/amps + billboard wag + five-frame tickle still cycle while tickling

## Stub / missing

- Walkable plaza ships with over-shoulder third-person mannequin on multi-frame idle sheets plus Home/Shop/Arena near-door soft glow/pulse + inner/outer sills + penta-biased-smoothstep approach + stronger frame lift + wider six-pass jamb-tip unjam wall-slide + hardened Leave/Return (ephemeral wipe + ~0.95s confirm grace); remaining hub polish still TBD
- Painterly four-clip production anims and blendshapes still missing (tickle five-frame deepened A-pose cycle + intensity pick past #96, run four-frame oil-grade adaptations past #144, laugh five-frame stamina-weighted cycle recalibrated to a real 0–1 stamina ramp ships; full painterly anims TBD).
- Navmesh AI mid-lane waypoints + wall-slide shipped; pile join cooldown is exact (`PILE_CD` 2.75s / sticky 1.35s, armed on join + drop)
- Full licensed SFX library still TBD (and out of scope — procedural/CC0 only); Team Quick UI/combat stingers use deepened layered samples + oscillator fallbacks (countdown last-3s widest rate ladder + stronger vanish soft-mode, deepest vanish whoosh vs brightest reappear ping past #99, soft unlock chirp)
- No jump (bible); ramp height is a groundY sample

## Laugh production clips (Support)
Painterly s0–s3 stage stills plus **five-frame** stamina-weighted cycle (`assets/binds/laugh/frames/` f0–f4) for Amateur 12 + Elara (metal-free; Elara jewelry exception; capsule face-card only). **Recalibrated (supersedes #178):** repeated ×1.06 "deepen" rounds past ~#96 had compounded laugh constants into broken values (stamina→frame thresholds ~1e-54 so the billboard stayed locked on f0–f1, billboard FPS >500k, morph multipliers in the thousands, hub-laugh CSS scales ~3×/0.00001). Values are now absolute, sane constants restored from the pre-compound baseline (`3dcb2fa` binds): `laughFrameWindow` is a real eased ramp over normalized stamina 0–1 stepping f0 → f(n-1) (last frame locks near empty); `laughFrameFps` clamps the cycle to 8–24 fps; bind rate/billRate 8–24, amp ≤ 0.2, lean ≤ 0.12 rad, billShake ≤ 0.2, blend 0–1; billboard/face-card/head morphs are a few % / a few degrees; Look/plaza preview sweeps stamina 100 → 0 over `hubPreviewMs`; hub-laugh CSS is a few px / ≤ 3° / ≤ 6 % scale. `sanitizeLaughStage` clamps every bind at load (dev warns) so drift cannot silently break the cycle again — **do not reintroduce multiplicative polish rounds.** Remaining: most laugh frames f1–f4 ship on grey/dark studio backdrops that the white-key in `lookFromStill` cannot remove (a backdrop card shows behind the laughing billboard) — needs re-keyed / white-backdrop frame stills; true morph-target mesh blendshapes only if a non-capsule head ships later.

## Tickle production polish (Support 4)
Five-frame tickle cycles for Amateur 12 + Elara under `assets/binds/tickle/frames/` (f0 = A-pose still; f1–f4 deepened lean/reach/bob with stronger pose deltas + oil-paint grade/vignette). AI tickler billboards + FP portrait use **intensity-weighted** frame windows with tighter bands + deeper climb/ease, packBoost, and f4 bias past #173 (v33; victim stamina + clearer pack-size boost → harder f3/f4); FP arms use `tickleBind` rate/amps (no hardcoded `sin(t*28)`); Humanoid tickle motion strengthened. Vanish/reappear stingers + white rim tell deepened another notch (v33), with the wider countdown ladder; Leave stays reward-free / profile-safe. Deferred: true multi-clip mesh anims / blendshapes beyond still adaptations.

## Run production frames (Support 3)
Painterly four-frame run cycles for Amateur 12 + Elara under `assets/binds/run/frames/` (f0 = A-pose still; f1–f3 **deeper opposite-leg stride punch** bob/sway/squash + oil-paint grade + vignette past #48 + bumped bind rate/amp/lean/billBob). Humanoid loco + billboard bob strengthened again. AI billboards + FP portrait cycle at loco `billRate` (walk uses walk.billRate). v11 adds planted stride recovery and deeper four-frame source poses. Remaining: true four-clip production anims/blendshapes beyond still swaps.
