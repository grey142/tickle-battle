# Tickle Battle — Amateur test plan

Playtests that would catch the highest-severity bible issues. No runtime exists yet; this is the QA checklist for the first graybox (map one, 12 shared-rig dummies, dummy HUD).

Use with `INCONSISTENCY_REPORT.md` IDs (`S-01`…`S-13` are Support’s priority hunts). Pass/fail is against the **bible plus Lead-accepted fixes**, not against this file’s suggested defaults.

## How to run

- **Build:** map one, Elara + 11 bots, bare-hand, one armor overlay test mesh, four clips, six sockets.
- **Harness:** debug overlay for occupancy, join order, escape %, stamina, vanish remaining, rear-volume hit.
- **Devices:** one phone-class (touch + 6.1" class) and one laptop. Repeat any case marked **phone**.
- **Roles:** designer plays Elara unless the case says otherwise.

---

## P0 — Support priority hunts

### T-S01 — Vanish clears list and sockets; gear snapshot holds

- **Catches:** S-01
- **Steps:** Lock a non-default Amateur weapon at Arena signup. Open a 3-stack. Fill escape. Confirm: list empty, all slot meshes gone, stamina frozen (not rescaled by armor), cannot swap gear during 20s. Reappear, fresh rear or pack start: **new** opener (old first does not keep 3-coin rights).
- **Fail:** Neck weapon stays on vanished ticklee; stamina jumps to spawn max; old opener still marked first.

### T-S02 — Level-1 AI are not all cap-gear

- **Catches:** S-02, S-10
- **Steps:** New Elara, bare-hand, 7 SP. Boot 10 lobbies. Log enemy weapon/armor indices and SP. At least some tier-0. Not 6/6 enemies on Amateur cap pieces.
- **Fail:** Every first match is six +30% weapons vs 0% Elara.

### T-S03 — Neck overlay vs hair vs face popup

- **Catches:** S-03
- **Steps:** Force slot-5 occupancy with the largest Amateur weapon on each of the 12 looks at max laugh. **Phone.** Popup shows ticklee face, **no** neck weapon in the popup. Look-down still shows the neck mesh.
- **Fail:** Hair through the weapon; weapon inside the popup camera; socket moved to “fix” hair.

### T-S04 — 3/1 coins cannot skip the first shop piece; cannot buy mid-fight

- **Catches:** S-04
- **Steps:** One opener tap-out (3 coins) + one assist (1). Confirm coins vs weapon-1 price (must not both be “free”). Try to buy during the 10s / mid-match (must fail — locked at signup).
- **Fail:** Weapon 1 costs 3 and snowballs the same match; or Shop applies in-fight.

### T-S05 — Duel windows: solo vanish, 6-stack tap-out, 2-stack still a race

- **Catches:** S-05, S-13, B-04
- **Steps:** Equal Amateur-cap dummies, 0.35s cadence, **phone** mash. (1) Solo: ticklee can hit 100% before 0 stamina. (2) Two ticklers: both vanish and tap-out occur across repeats. (3) Six ticklers: tap-out favored, but ticklee still lands ≥3 scoring escape taps before 0.
- **Fail:** 2-stack never vanishes (bar drain). 6-stack taps out in <0.3s with zero escape taps. Six joiners visibly empty the **escape** bar.

### T-S06 — 5% HP vanish is not an instant reappear KO

- **Catches:** S-06
- **Steps:** Script breakout at 5% stamina with three enemies overlapping. 20s: no regen. Reappear tell plays. Confirm no leftover auto-start; if SQ-06 accepted, ~1s more contact-ignore. After grace, a fresh rear start can tap out quickly (desperation, not a heal).
- **Fail:** HP restored on reappear; or a killing start on the same frame as reappear with no rising-edge.

### T-S07 — Drop from 2 to 1 under bot jitter does not thrash the duel

- **Catches:** S-07, H-03, H-11
- **Steps:** Pack-sticky joins and leaves three times in 2s (humanized). Remaining tickler stays grandfathered; sockets compact without ending the duel; half-share becomes full only after mechanical promote.
- **Fail:** Duel toggle on/off each leave; facing snap breaks a still-touching flanker every time.

### T-S08 — Killing tap + opener drop same tick pays the snapshot first

- **Catches:** S-08
- **Steps:** Script: A is slot 1, A’s tap this tick drives stamina to 0, A’s contact ends the same tick, B still overlapping. **A gets 3, B gets 1.** Repeat with A dropped on the **previous** tick: **B gets 3**.
- **Fail:** Random 3-coin owner; or both A and B get 3.

### T-S09 — Opponent wipe cuts vanish; self-wipe while vanished does not

- **Catches:** S-09
- **Steps:** (1) Last enemy taps out while Elara is in 20s vanish → match end immediately, vanish HUD gone. (2) All allies tap out while Elara is vanished and one enemy lives → match continues; enemies cannot contact her for remaining vanish; after reappear they can start a tickle.
- **Fail:** Win screen waits out 20s; or vanished last-alive is auto-tapped-out; or enemies start through vanish to force wipe.

### T-S10 — AI use 7 SP rules, not 5/5/5 + cap as a preset boss

- **Catches:** S-10, S-11
- **Steps:** Inspect bot sheets at Elara level 1: base 3/3/3, 7 blocks spent, Amateur gear only. Compare a 7-into-tickle Elara vs a cap-weapon bot using flats-then-% (debug numbers).
- **Fail:** Hidden AI stats above Amateur budget.

### T-S11 — Operator order: flats then percents, role-gated

- **Catches:** S-11
- **Steps:** Dummy: base tickle 3, 2 tickle blocks, weapon +30% tickle. Outgoing opener damage must be `(3 + 1.5*2) * 1.30`, **not** `3*1.30 + 3`. As ticklee, that weapon % must not apply. Armor stamina % changes spawn max only (a new start does not restack).
- **Fail:** Two different damage values on two clients/debug builds; weapon buffs ticklee; armor % reapplies on vanish.

### T-S12 — 7th contact cannot attach, steal, or deal half

- **Catches:** S-12
- **Steps:** Debug-force a 7th teammate into the ticklee capsule (even if 6v6 must spawn an extra dummy). List stays 6. No 7th socket. No extra half-share. No opener steal. When one of the 6 drops, 7th may append at end.
- **Fail:** 4.0× damage; slot-1 stolen; 7th mesh on knees replacing slot 6.

### T-S13 — Shared bar: six cap joiners do not empty escape

- **Catches:** S-13
- **Steps:** Six Amateur-cap ticklers mash on a dummy with debug overlay on the **single** escape bar. Bar must only move on **ticklee** taps (up), never on tickler taps (down). Stamina should drop at ~3.5× × gear. **Phone.**
- **Fail:** Bar yoyos or cannot leave 0% vs 2+ ticklers.

---

## P0 — Modes (join-list / vanish / coins / caps)

Default graybox remains **Team Quick**. Opt-in modes need a debug mode switch.

### T-MD01 — FFA: second body cannot join or steal

- **Catches:** MD-01, MD-06, S-12
- **Steps:** FFA Quick. A rear-starts V. B overlaps V. List stays 1 (A). No half-share, no 3-coin to B, no second socket. B rear-starts **A** (peel): V goes Free; A becomes B’s ticklee.
- **Fail:** Pack overpower in FFA; B steals belly; 4 coins.

### T-MD02 — Timed: vanish denies a point; tap-out is a clean spawn

- **Catches:** MD-02, MD-08, MD-12
- **Steps:** Team Timed. (1) Fill escape at 10% HP: 20s vanish, 0 score, stamina frozen, then reappear still ~10% (not full). (2) Tap-out: +1 team score, short delay at **team spawn**, full stamina (armor max), empty bar, can be started on only after delay. Not on the pile.
- **Fail:** Vanish heals; or tap-out respawns on the pile with leftover vanish; or vanish awards a point.

### T-MD03 — Timed coins do not print cap gear in one match without a signed timer

- **Catches:** MD-03, S-04
- **Steps:** Run one Amateur Timed match at MQ-02 length. Log coins. Compare to Team Quick median. FFA Timed: 3 per tap-out, never assist 1.
- **Fail:** One Timed lobby buys weapon 6; or FFA pays 4 coins.

### T-MD05 — Quick win closes vanish; vanished last-alive still wins

- **Catches:** MD-05, S-09
- **Steps:** Team Quick. Last ally vanished, last enemy taps out → **win immediately**, vanish HUD gone. Reverse: you vanish as last alive, last teammate already out, last enemy taps out → you win, window closes. Timed: timer 0 closes vanish; ties draw with no extra coins.
- **Fail:** 20s wait after wipe; or vanished last-alive is counted tapped-out.

### T-MD07 — Assists do not add Timed score

- **Catches:** MD-07
- **Steps:** Team Timed 3-stack tap-out. Score +1 once. Coins: 3 + 1 + 1. FFA Timed same event: score +1 to opener only, coins 3, list never length 2.
- **Fail:** +3 team score on a 3-stack; FFA assist coin.

### T-MD04 — FFA Timed respawn uses solo pads, not team doors

- **Catches:** MD-04
- **Steps:** FFA Timed tap-out. Respawn on a scattered pad, contact-ignored for delay, not team spawn room, not mid-pile.
- **Fail:** FFA uses team doors.

---

## P0 — Soft-nudge / ignore stacking

### T-SS01 — Ignores never sum past 20s vanish

- **Catches:** SS-01, SS-02
- **Steps:** Debug overlay: `Vanished`, `SpawnDelay`, `NudgeBeat`, pair CD. (1) Vanish 20s — tickles do not start, no CD ticking. Reappear, rising-edge start only; remaining vanish is 0. (2) Timed spawn delay — tickles do not start; no CD. After delay, a **wall cancel** applies **pairwise** CD only; spawn delay is already 0. (3) Start a nudge, script vanish mid-slide: list clears, **no** CD, 20s vanish only. (4) Assert `untouchableMs <= max(20s, spawnDelay, pairCD)` never a sum.
- **Fail:** 20s + 5s + 0.6s; CD after vanish; start during spawn ignore.

### T-SS02 — Pair CD does not block a third fighter

- **Catches:** SS-02
- **Steps:** A wall-cancels on B (pair CD). C rear-starts on B immediately. A cannot re-start on B until CD ends.
- **Fail:** B is globally locked; or A can spam the same start.

### T-SS03 — Choke start nudges or cancels, never off-layer

- **Catches:** SS-03, H-09
- **Steps:** Rear start on a ramp choke lip. Either slide horizontally into a same-layer pocket (sockets kept, then taps work) or cancel clean (stam/escape unchanged, pair CD). Never teleport, never fall through the layer gap.
- **Fail:** Pile yeeted off the ramp; or the start locks in the wall.

### T-SS04 — Joiner reject does not CD the opener

- **Catches:** SS-04
- **Steps:** Duel in the open. Third body clips a wall on join. Reject or micro-nudge **that joiner**. Ticklee can still tap escape the whole time. Opener has no CD.
- **Fail:** Whole pile tap-freeze on join; opener gets cancel CD.

### T-SS05 — Nudge cannot finish on a vanished capsule or in spawn pad

- **Catches:** SS-05
- **Steps:** Place a vanished dummy in the only dest. Slide may pass through; dest cannot be that cell. Timed spawn pad: path blocked; start that would only resolve into the pad **cancels**; the spawner’s delay unchanged.
- **Fail:** Pile ends on the ghost; or nudge pulls the pile into spawn ignore.

---

## P0 — Blockers (must not ship graybox without answers)

### T-B01 — Tap-out ends that fighter’s match contribution

- **Catches:** B-01
- **Steps:** Drain one bot to 0 stamina. Confirm they stay on max laugh/squirm (no fifth clip), leave all join lists, and are not a valid target. Continue until one team has zero active fighters. Confirm match end + coins kept.
- **Fail:** Tapped-out bot still tickles, still blocks a choke as a combatant, or match never ends.

### T-B02 — Peel a tickler with a rear start

- **Catches:** B-02
- **Steps:** Two enemy bots tickle a teammate. Rear-touch one tickler. Confirm that tickler leaves the old join list (compact/promote) and becomes your ticklee. Confirm you cannot start on a teammate.
- **Fail:** Busy ticklers are immune, or you become tickler and ticklee at once, or friendly start works.

### T-B03 — Duel roots in a ramp choke

- **Catches:** B-03, H-09
- **Steps:** Start a solo rear tickle on a ramp choke. Try to walk. Start a 3-stack in the same choke. **Phone.**
- **Fail:** Ticklee kites through the maze while contact flickers; tickler capsules explode the camera or eject people through walls with no slot attach.

### T-B04 — Pack of two does not make vanish impossible

- **Catches:** B-04
- **Steps:** Equal-build dummy vs **one** tickler: ticklee can fill escape to 100% before stamina 0 (tune window). Repeat vs **two** ticklers mashing at the same cadence.
- **Fail:** Vanish never occurs vs 2+ ticklers even with a full Struggle dummy (tug-of-war reading). Also fail if a 6-stack still cannot tap anyone out before 100% (pack share doing nothing).

### T-B05 — Taps, not the 1/s flash, deal stamina

- **Catches:** B-05
- **Steps:** Start a tickle and **do not tap** for 5s (flash still plays). Stamina must not drain. Tap three times quickly; stamina drops in discrete hits, not one hit per flash.
- **Fail:** Idle drain; or uncapped 20 taps in 0.5s dump a full bar with no cadence cap.

---

## P1 — Tickle start, pack, vanish (high)

### T-H02 — Front solo fails; rear solo works; side solo fails

- **Catches:** H-02
- **Steps:** Approach from front / side / back. Only rear volume starts a solo duel. Repeat on a ramp (slope).
- **Fail:** Front auto-start works; or rear fails on ramps because facing uses world Y.

### T-H03 — Pack collapse does not auto-break the remaining tickler

- **Catches:** H-03
- **Steps:** Two ticklers on a dummy (one front, one rear). Front is opener. Opener releases. Remaining (front) must stay in the duel as new slot 1 if grandfathering is accepted — or must break if Lead chose the strict snap. **Record which Lead accepted.**
- **Fail:** Undefined flicker: break then instant re-start from leftover overlap.

### T-H06 — Second bot actually joins (pack-sticky)

- **Catches:** H-06
- **Steps:** Force a hunter to open a rear start. A pack-sticky bot in range should join without waiting the full pile cooldown. A non-sticky hunter should wait.
- **Fail:** 6v6 never produces a 2-stack in a 2-minute match; or all 5 allies instantly dogpile every opener.

### T-H07 — Vanish phases through fighters, not floors

- **Catches:** H-07
- **Steps:** Fill escape while overlapping three enemies in a choke. During 20s: walk through them, cannot tickle, cannot see them, cannot be seen, stamina frozen. Fall through the floor must not happen. On reappear, no leftover auto-start despite overlap; they must exit/re-enter (fresh contact).
- **Fail:** Invisible body-block; or fall through map; or instant re-start.

### T-H08 — Regen exists only when Free; freeze during vanish

- **Catches:** H-08
- **Steps:** Take damage, escape, watch 20s (no regen). Reappear `Free`, wait delay, regen. Start on someone as tickler: no self-regen while tickling.
- **Fail:** Regen during vanish or during duel.

### T-H11 — Laugh/squirm does not drop contact every frame

- **Catches:** H-11
- **Steps:** Stay as solo tickler through high-intensity laugh. Join list must not oscillate 1↔0.
- **Fail:** Pack/solo breaks in <200ms without player movement.

### T-H16 — Escape 100% beats same-tick stamina 0

- **Catches:** H-16, B-04
- **Steps:** Script both bars to complete on one sim tick.
- **Fail:** Random winner per frame; or tap-out and vanish both apply.

### T-H17 — Coins: 3 to current first, 1 to still-on-list assists

- **Catches:** H-17
- **Steps:** A opens, B joins, A releases, B is first at tap-out. B gets 3. A gets 0. If C still touching, C gets 1.
- **Fail:** Dropped opener still gets 3; or everyone who ever touched gets 1.

### T-H20 — 10s spawn is live-movement, dead-combat

- **Catches:** H-20
- **Steps:** During countdown, move in spawn; attempt a start on anyone who clipped a sightline. After 0s, auto-starts work.
- **Fail:** Pre-match tap-out.

### T-H14 — Lobby looks unique; Elara name/look reserved

- **Catches:** H-14, M-12
- **Steps:** 20 match boots. No duplicate look among 12. No bot named Elara Case. Changing Elara’s look at Home frees the old look for AI and reserves the new one.
- **Fail:** Twin Elara meshes or cloned faces in one lobby.

---

## P1 — Presentation / phone

### T-H09 — Six-stack slot attach in mid-maze

- **Catches:** H-09, H-10
- **Steps:** Debug-force 6 ticklers onto Elara in a narrow corridor. **Phone.** Check feet/neck IK on the single tickle clip, weapon meshes on slots, camera not inside a skull.
- **Fail:** Unplayable camera; ticklers T-posing in walls with no attach.

### T-H12 — Face popup is the ticklee, local duel only

- **Catches:** H-12, H-15, M-09
- **Steps:** As ticklee, popup is Elara’s equipped face; look-down shows slot weapons. As tickler on an AI, popup is that AI. Distant AI-vs-AI must not spawn a popup. **Phone.**
- **Fail:** Wrong face; or three popups on screen; or cannot see own body sockets.

### T-H19 — Team ID at 15m on a phone

- **Catches:** H-19, M-13, L-01
- **Steps:** Stand at mid-maze, 12 fighters moving, desat lighting. Call out team of each silhouette in 5s. Repeat with a ticklee rose flash in frame.
- **Fail:** Flash reads as a third team; rims vanish in shadow.

### T-H13 — Shop Amateur pool vs default bare-hand

- **Catches:** H-13, H-05
- **Steps:** New profile: Elara is bare-hand. Shop lists 6 weapons / 8 armors. Equip one, Arena lock, fight, cannot swap mid-match. Bot with Amateur weapon shows that mesh on its slot when it joins you as ticklee.
- **Fail:** Shop empty because ship bullet said “bare-hand”; or mid-fight swap.

---

## P2 — Progression / AI / map

### T-H04 — Armor ladder respects 30% combined cap

- **Catches:** H-04
- **Steps:** Data table review + dummy spawn HP for armor 1 vs armor 8. Each step monotonic; armor 8 combined ticklee buffs ≤ ~30%.
- **Fail:** Piece 8 at 40% because someone applied +5% × 8.

### T-H18 — Skill points buy blocks; cannot exceed Amateur gate

- **Catches:** H-18, Q-28
- **Steps:** Level 1: 7 points. Spend. Hit Amateur index cap. Level up: +1 point. No respec unless Lead added it.
- **Fail:** 25×3×3 block grid; or 0 cost; or spend mid-fight.

### T-H01 — Mode label / win screen is arena elimination, not BR loot

- **Catches:** H-01
- **Steps:** Copy pass: no storm / loot language. Win = other team all tapped out (or accepted clock rule).
- **Fail:** HUD leftover “players remaining” BR chrome that contradicts 6v6 teams.

### T-M04 — Bots do not track vanished last-known

- **Catches:** M-04, Q-52
- **Steps:** Vanish next to a hunter. Hunter must not keep a hidden ping on your exact cell for the full 20s. They may search.
- **Fail:** Bot face-camps the vanish pixel with wallhack certainty.

### T-M07 — Mixed roles, not all hunter

- **Catches:** M-21, Q-49
- **Steps:** Log 10 matches of 11 bot roles. No all-hunter enemy six. Ally five not all hunter. Pack-sticky appears sometimes.
- **Fail:** Six hunters every time.

### T-map — Sight blockers and two layers

- **Catches:** map-one bullets, Q-64
- **Steps:** From spawn, you cannot see all 12. Use a ramp. Soft-cull / LOD far fighters on **phone**.
- **Fail:** All 12 on screen from spawn; or one-floor map.

---

## Regression smoke (run after every combat change)

1. Front solo fail / rear solo success.
2. 2-stack front join after a rear opener.
3. Escape → 20s blind → fresh rear or pack start only.
4. Promote-on-drop payout.
5. Armor does not change 20s vanish length.
6. Weapon % does not apply to the ticklee; armor % does not apply to the tickler.
8. Vanish clears join list + sockets; signup gear unchanged (S-01).
9. Tick-start snapshot pays the 3-coin (S-08).
10. Join list never exceeds 6 (S-12).
12. Team Quick default: no friendly tickle; last active team wins; spectate on tap-out.
14. Vanish, Timed spawn ignore, and nudge-cancel CD never run as a **sum** (SS-01).

---

## Out of scope for Amateur graybox

Story mode, maps 2–4, Pro/Legends gear, extra playable characters, netcode, jump/crouch, gore/ranged.
