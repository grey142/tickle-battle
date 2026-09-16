# Tickle Battle — Open questions

Decisions the locked bible does **not** make, but Amateur implementation will need. Related contradictions are in `INCONSISTENCY_REPORT.md`; this file is only underspecified-but-not-internally-broken items (plus numbers the Lead must pick after accepting blocker fixes).

Status: **open** until the Lead answers. Recommended defaults are scaffolding, not new locked rules.

Support hunts **S-01 … S-13**, mode hunts **MD-01 … MD-12**, and soft-nudge stacking **SS-01 … SS-05** are listed first. Remaining Q-ids keep their old numbers.

---

## Support hunts — closures the Lead must sign

These sit on top of S-findings. A “suggested default” is only valid if the matching S lock is accepted.

| ID | Hunt | Question | Suggested default |
| --- | --- | --- | --- |
| SQ-01 | S-01 | Exact signup snapshot fields; do sockets despawn on vanish in 0 frames? | Snapshot: weapon, armor, spent blocks, look/tints. Vanish: list clear + overlay despawn same frame. No armor stamina re-scale on reappear. |
| SQ-02 | S-02 | AI Amateur roll weights vs Elara’s gear/level. | Weight toward Elara’s combined %; ≥25% tier-0 at level 1; no all-six-enemies-at-cap unless Elara is in cap-band (or Amateur 8–10). |
| SQ-03 | S-03 | Popup camera vs neck weapon; which mesh is “largest” for hair QA. | Popup: head only, no slot-5 overlay. Hair QA uses the max AABB of Amateur weapons 1–6 in slot 5 at max laugh. |
| SQ-04 | S-04 | Starting coins; Amateur 6+8 price integers. | Start 0–5. Weapon 1 ≈ 6–9 coins (2–3 openers). Prices monotonic to weapon 6 / armor 8 ≈ dozen matches each. No Amateur entry fee. |
| SQ-05 | S-05 | Solo / 2-stack / 6-stack target windows after race lock. | Solo: ticklee vanish favored. 2-stack: either outcome possible. 6-stack: tap-out favored, but ≥3 ticklee scoring taps (~1.0s at 0.35s) of agency. |
| SQ-06 | S-06 | Reappear grace vs stamina floor. | Prefer **rising-edge no-auto-grab only** (SS-01). If a timed grace exists, it must not add to vanish, spawn delay, or nudge CD. No reappear heal. |
| SQ-07 | S-07 | Facing check after compact; grace vs vanish/peel. | Grandfather remaining tickler. Grace 200–300ms for flicker only. Vanish/peel clear instantly. Mechanical slot index instant; mesh lerp ≤200ms. |
| SQ-08 | S-08 | Payout list: tick-start snapshot or end-of-tick touching. | **Tick-start snapshot** owns 3-coin and assists if tap-out this tick. |
| SQ-09 | S-09 | Quick vanish vs last-alive; Timed timer-end. | Quick: vanished last-alive **wins**, then window closes (Modes). Timed: MQ-06 close vanish on timer/draw. |
| SQ-10 | S-10 | AI base stats and SP at Amateur level 1 and 10. | Base 3/3/3. Match 1: 7 spent blocks, mixed. Scale SP with Elara’s level (lvl 10 ≈ 16). Amateur gear only. |
| SQ-11 | S-11 | Confirm flats-then-percents; units of base 1–5 vs +2/+3.5/+1.5. | Accept S-11 **order**. Base 1–5 is the pre-block stat, not extra blocks. If raw `base+flats` is too small as HP/damage, add a **global** scalar (not a gear %) after the formula. Elara 3/3/3. |
| SQ-12 | S-12 | Extra contact at cap (7th team / 2nd FFA). | `Free`; no damage, no socket, no steal; does not count as pack. Cap 6 team / 1 FFA. Join append at end only if `len < cap`. |
| SQ-13 | S-13 | Phone scoring cadence; do half-joiners touch the escape bar. | 1 scoring tap / 0.35s; bots ≤ that rate. **Joiners do not drain the escape bar.** Tune pools to SQ-05. |

If SQ-05 cannot be met with 3.5× pack share × 1.30 cap, **stop** and return to the Lead before inventing a second damage cap (that would fight the locked half-share).

---

## Mode closures (four-mode lock)

| ID | Hunt | Question | Suggested default |
| --- | --- | --- | --- |
| MQ-01 | MD-01 | Confirm FFA exceptions are the only combat fork. | Yes: pack/join-cap/assists/spawns only. Same tap math, vanish 20s, gear lock, ~+30% caps. |
| MQ-02 | — | Amateur Timed timer length. | 4 minutes. Ties = draw (locked). |
| MQ-03 | MD-02, MD-03 | Timed respawn delay. | 5s contact-ignore at spawn. Long enough that eating tap-out is not a better heal than vanish mid-fight; short enough that Timed isn’t empty. |
| MQ-04 | MD-03 | Coin band vs Timed farm. | Same 3/1 (FFA 3). Tune MQ-02/MQ-03 so median coins ≈ Team Quick. Per-match coin cap only if that fails. |
| MQ-05 | MD-04 | FFA solo pad count on map one. | ≥12 pads, no team-door reuse, not on mid pile. |
| MQ-06 | MD-05 | Does Timed timer-end close vanish? | Yes, same as Quick match-end. |
| MQ-07 | MD-07 | FFA coin amount. | 3 to the single tickler, never 4. Timed +1 score to that tickler only. |
| MQ-08 | MD-09 | FFA bot scoring greed. | Bots value Timed score; they will finish a tap-out rather than roam if they are the tickler. |
| MQ-09 | MD-10 | FFA identity without team rim. | Unique look + optional grimdark nameplate; no 12-color rim set. |
| MQ-10 | MD-11 | Peel in FFA. | On. Rear-grab the tickler; victim goes `Free`. |
| MQ-11 | MD-08 | Timed respawn vs vanish reappear. | Respawn = new spawn (armor max). Vanish reappear ≠ spawn. |
| MQ-12 | B-01 | Quick spectate camera. | Follow a living ally (team) or highest-score / nearest living (FFA). Leave-to-hub allowed. |

---

## Soft-nudge closures

| ID | Hunt | Question | Suggested default |
| --- | --- | --- | --- |
| NQ-01 | SS-01 | Hard-cap nudge distance and max beat time. | 1.5m horizontal, ≤0.45s slide, no teleport. Cancel if that cannot clear clips. |
| NQ-02 | SS-01, SS-02 | Cancel re-grab CD length; pairwise? | **0.6s pairwise** (tickler→ticklee). Not global. Cleared by vanish/spawn-ignore. None after success. |
| NQ-03 | SS-01 | Confirm exclusive ignores (no add). | `max(vanish 20s, spawn delay, pair CD)` never a **sum**. Vanish > spawn > nudge beat > pair CD. |
| NQ-04 | SS-04 | Joiner micro-nudge freezes escape taps? | **No.** Only the opener’s clear-space beat freezes pile taps. |
| NQ-05 | SS-03 | Map-one nudge sinks at chokes. | One flat pocket per ramp choke inside 1.5m, on the same layer. |
| NQ-06 | SS-05 | Can a slide path through a vanished capsule? | Through yes; **end** dest no. SpawnDelay: not path, not dest. |

---

## Hub loop (Lead deliverable — reference)

Source: [amateur/CITY_HUB.md](amateur/CITY_HUB.md). **Not a combat blocker.** Use it for plaza/Home/Shop/Arena graybox and the persist contract (coins, level 1–10, unspent points, spent blocks, look ids, weapon id, armor id).

AI fill “pad both teams to 6” is the Amateur launch rule for Team Quick; it does not change 6v6 combat or FFA opt-in rules in the bible.

---

## 0. Engine / project

| ID | Question | Why it matters | Suggested default |
| --- | --- | --- | --- |
| Q-00 | Which engine (Unity, Unreal, Godot, other) and minimum phone / laptop targets? | Repo `src/` is reserved until this exists. LOD, IK, and mobile lighting (H-09, H-10, M-08) depend on it. | Do not pick in this QA pass. Prefer an engine with mobile 3D, animation retarget, and navmesh. |

---

## 1. Combat numbers

Blockers B-04, B-05, **S-05, S-11, S-13** must be accepted (or replaced) before these numbers mean anything. Flats-then-percents is S-11.

| ID | Question | Why it matters | Suggested default |
| --- | --- | --- | --- |
| Q-01 | Base stamina pool at Stamina stat = 1, and the unit of “+2 per block.” | Armor % is “max stamina at spawn only.” S-11. | Order: `(baseStamina + 2 * staminaBlocks) * (1 + armorStamina%)`, then optional global `kStamina` (not gear). Do not put the 40+10×base fudge *inside* the % if the Lead wants flats un-amplified — S-11 says flats **are** amplified. |
| Q-02 | Stamina damage per scoring tickler tap before weapon %. | Pack half-share is locked. S-11, S-12. | `staminaDamage = (baseTickle + 1.5 * tickleBlocks) * (1 + weaponTickle%) * packShare` (1.0 / 0.5, list cap 6). |
| Q-03 | What “escape damage” is after B-04 / S-05. | Weapon second buff. Must **not** drain the shared bar (S-13). | Extra stamina pressure during duel: multiply or add via `weaponEscape%` on `staminaDamage` only. |
| Q-04 | Escape bar capacity and Struggle points per ticklee tap. | Armor escape % is “points per tap.” Vanish at 100%. Tune to SQ-05. | Capacity 100. `escapePointsPerTap = (baseStruggle + 3.5 * struggleBlocks) * (1 + armorEscape%)`. |
| Q-05 | Scoring tap cooldown (both sides). | Uncapped mash = laptop advantage; flash is 1/s VFX only. | 0.35s shared per fighter. Bots humanize ±80ms (locked imperfect timing). |
| Q-06 | Hold vs mash. | Phone thumbs. | Mash (repeated taps). No hold-to-fill in Amateur unless Q-04 cannot be tuned. |
| Q-07 | Stamina regen rate and delay (H-08). | Vanish freeze implies regen exists. | 3s after entering `Free`, then 4 stamina/s, cap at spawn max. No regen as tickler/ticklee/vanished/tapped-out. |
| Q-08 | Laugh/squirm intensity stages vs stamina. | “Stamina laughter stages = intensity on the one clip”; face popup by stage. | 3 stages: >66% / 33–66% / <33%, plus tap-out = max intensity. Flash stays 1/s at all stages. |
| Q-09 | Same-frame order if Lead rejects H-16. | Must still be deterministic. | Prefer H-16: ticklee taps resolve first. |
| Q-10 | Rear volume degrees / size (H-02). | Solo grab feel. | Back collider ~140° yaw, full capsule height, ~0.45m depth. |

---

## 2. Match flow / occupancy

| ID | Question | Why it matters | Suggested default |
| --- | --- | --- | --- |
| Q-11 | Confirm Modes win rules vs leftover B-01 numbers. | Team Quick is Amateur default. | Team Quick: last active team; spectate; vanish closes on win. Timer/delay: MQ-02/MQ-03. |
| Q-12 | Match clock. | Timed modes have a locked timer-win; Quick still wants anti-stall (M-20). | Timed: MQ-02. Quick: optional 8–10 min mercy clock if both teams hide; else no clock required. |
| Q-13 | Confirm B-02 peel (grab a tickler). | Only CC in the game. | Yes, using existing rear/pack rules. |
| Q-14 | Confirm B-03 root during duel. | Phone maze contact. | Yes, root both sides in slots. |
| Q-15 | Voluntary tickler release (M-11) — control mapping. | Peel / rotate. | Keyboard: separate cancel. Touch: swipe-off or hold-cancel so it does not eat tickle taps. |
| Q-16 | Can a `Free` teammate stand in a slot volume without joining? | Accidental pack. | Join requires the tickle **intent** (stick toward target + action, or AI role decision), not mere overlap. Contact is still required (locked). |
| Q-17 | 10s pre-match (H-20) — can you leave spawn? | Map one spawn design. | Stay in spawn pocket until 0; then doors / drop shields open. |
| Q-18 | Spectator after local player tap-out. | Single-player still has 11 bots fighting. | Follow a living teammate; skip to hub on match end. No input except camera/leave. |
| Q-19 | Pause / app background on phone. | OS reality. | Pause match for local player; AI freeze. Not in the bible; needed to ship. |

---

## 3. Vanish

| ID | Question | Why it matters | Suggested default |
| --- | --- | --- | --- |
| Q-20 | Nearby range for reappear tell (M-10). | Fair audio/VFX. | 12m, falloff; nothing through full map. |
| Q-21 | Reappear flash duration / look vs ticklee 1/s flash. | Must not read as a new tickle. | 0.4s white/rim flash, not rose. Different SFX. |
| Q-22 | Does vanish hide HUD silhouettes / footstep audio of others? | “Cannot see anyone else.” | Yes: no characters, no team rims, no footsteps of fighters. Map + own body + own HUD countdown only. |
| Q-23 | Can vanished players still hear distant duels? | Info leak vs atmosphere. | Muffled bed, no directional character audio. |
| Q-24 | Navmesh: can vanish walk through team gates / one-way drops? | Map-only touch. | Same map collision as visible; no extra ghost routes. |
| Q-25 | Stack vanish: if you fill escape again immediately after reappear grab. | 20s is locked per breakout, not a cooldown between vanishes. S-06 low-HP. | No extra vanish cooldown. Reappear grace 0.75–1.0s (SQ-06). Tune Q-04 so a 5% HP vanish is desperation, not a heal. |

---

## 4. Progression / hub / economy

| ID | Question | Why it matters | Suggested default |
| --- | --- | --- | --- |
| Q-26 | Elara base Stamina / Struggle / Tickle (1–5) (M-14). | First match feel. | 3 / 3 / 3. |
| Q-27 | Does Amateur start at level 1 with 7 unspent points? | Home spend loop. | Yes. Hub missing save = 7 points, 0 coins, bare hand, base attire. |
| Q-28 | Highest purchasable block index in Amateur (H-18). | 16 points at level 10 if `7+(10-1)`. | Blocks 1–10 of each track while in Amateur. |
| Q-29 | XP source (M-16). | +1 SP per level. | +1 level per **completed** Amateur match (win or lose), cap 10 in this slice. |
| Q-30 | Respec (M-16). | Home “spend skill points.” | No respec. Hub: spend is **permanent for that save** ([CITY_HUB.md](amateur/CITY_HUB.md)). |
| Q-31 | Starting coins. | Shop otherwise dead until first tap-outs. S-04. | Hub persist: **0 coins** on missing save. First weapon still ≈ 6–9 coins. |
| Q-32 | Amateur weapon / armor price table. | “Prices tied to ladder.” S-04. | Monotonic integers; Shop shows price on locked ladders. Top Amateur piece ≈ dozen Team Quick matches. |
| Q-33 | Do you keep coins and XP on a loss? | B-01. | Yes. Hub: match end → plaza with **updated coins** (win or lose). |
| Q-34 | Can you change loadout after Arena signup during the 10s? | “Lock at Arena signup.” | No. Hub: Start → lock loadout → countdown. |
| Q-35 | Under-ready / cross-tier queue (M-05). | Arena copy. | Hub: **Amateur tier only** this slice; other modes shown, labeled coming. |
| Q-36 | Story mode (M-01). | Pitch mentions it. | Out of Amateur slice. Hub persist is the **Amateur save**, not a story save-slot UI. |
| Q-37 | Character select (M-02, M-22). | Match flow wording. | Hidden in Amateur. Hub boots Elara. |

---

## 5. Cosmetics / lobby

| ID | Question | Why it matters | Suggested default |
| --- | --- | --- | --- |
| Q-38 | Exact 12 Amateur look IDs and which is Elara’s default. | H-14 uniqueness. | Author 12; Elara default = look 01. |
| Q-39 | AI name list / generator. | M-12 uniqueness. | Seeded unique display names; never “Elara Case.” |
| Q-40 | Team rim colors (H-19, M-13). | Phone ID. | Player team cyan, enemy amber (or reverse by map lighting test). |
| Q-41 | Does “human only” block cyborg **materials** on Elara? | Art vs cosmetics. | Elara body is human skin; she may still equip shop armor/hair with fantasy materials. |
| Q-42 | Home preview laugh length. | “short laugh/squirm on live equipped look.” | ~2s, skippable. |
| Q-43 | Shop preview vs Home preview. | Two rooms. Hub allows equip-in-shop for speed. | Shop buys; Home loadout is the persist write. Equip-in-shop is a shortcut to the same loadout fields. Laugh confirm stays Home Look tab. |
| Q-44 | Full-game look catalog size (“45+”). | Pipeline. | Amateur ignores. Full game: freeze a number later (45 or 48). |

---

## 6. Weapons / armor data

| ID | Question | Why it matters | Suggested default |
| --- | --- | --- | --- |
| Q-45 | Names, meshes, and % splits for Amateur 6 weapons and 8 armors. | Strictly stronger each step + 30% cap (H-04, H-05). | Publish a table before graybox combat. Each step: at least one buff up, none down; armor combined % ≤ 30% at piece 8. |
| Q-46 | AI chance to roll tier 0 (bare-hand / base attire). | H-05, H-13, S-02. | Level 1: ≥25% tier 0; weight toward Elara’s combined %. No all-cap enemy lobby unless Elara is cap-band. |
| Q-47 | Are Amateur 6 weapons the first 6 of a global 20-row table? | Data layout. | Yes: indices 1–6 Amateur, 7–13 Pro, 14–20 Legends. Same for armor 1–8 / 9–16 / 17–25. |
| Q-48 | Socket mesh: one weapon drawn six times or once on the local tickler? | “Mid-fight ticklee sees each tickler's own equipped mesh on join-order socket.” | Ticklee view: instance of **that tickler’s** weapon on the slot. Tickler view: weapon in their own hands matching the same mesh. |

---

## 7. AI

| ID | Question | Why it matters | Suggested default |
| --- | --- | --- | --- |
| Q-49 | Role mix algorithm for 5 allies + 6 enemies (M-21). | “No all-hunter teams.” | Weighted random from {hunter, flanker, ambusher, escape artist, pack sticky}; reject a side if 100% hunter; allow duplicates. |
| Q-50 | Pile cooldown duration (H-06). | Pack formation rate. | 4–6s for non-sticky. Sticky ignores for an in-progress teammate duel. |
| Q-51 | “Already in range” for pack-sticky. | Contact vs proximity. | Must reach **contact** (locked), but may start the join sprint from ~8m if a teammate is already tickling. |
| Q-52 | Last-known timeout for ordinary LOS (not vanish). | M-04. | 2.5s after last legal sight. Vanish clears instantly. |
| Q-53 | Seeded patrol zone size. | Idle when no target. | Per-bot polygon on map one; include some ramp access for ambusher/flanker seeds. |
| Q-54 | How hard is Amateur AI vs Elara at level 1. | “Harder if under-ready” is later-tier. | Imperfect taps, not aimbot pathing. They use the same vision/vanish rules. |
| Q-55 | Do bots spend skill points / use shop gear from a fake loadout table? | Fair Amateur pool. S-10. | Same 7 SP at match 1, mixed spreads, base 3/3/3, S-02 gear weights. Scale SP with Elara’s Amateur level. |

---

## 8. Camera / input / HUD

| ID | Question | Why it matters | Suggested default |
| --- | --- | --- | --- |
| Q-56 | Confirm 3P camera (H-15). | Look-down vs maze. | Over-shoulder 3P; ticklee presentation rig. |
| Q-57 | Phone controls. | Two-handed maze + tap. | Left virtual stick move, camera swipe on empty right, one Tickle/Escape button (context: Tickle if `Free`/`Tickler`, Escape if `Ticklee`). |
| Q-58 | Laptop controls. | Same verbs. | WASD move, mouse camera, click or Space = context action, Q or RMB = release (Q-15). |
| Q-59 | Can you look down as ticklee on a gyroscope phone? | Bible says look down. | Right-stick / swipe pitch is enough; gyro optional off by default. |
| Q-60 | Minimap? | Art: no bright blobs; maze sight blockers. | No minimap in Amateur. Compass tick toward Arena/spawn optional, not a player ping. |
| Q-61 | Stamina / escape bar placement. | Brushed-metal HUD. | Lower third; enlarge during local duel (M-09). |
| Q-62 | Accessibility: colorblind team rims. | H-19. | Shape language on armor accent (stripe vs chevron) plus color. |

---

## 9. Map one

| ID | Question | Why it matters | Suggested default |
| --- | --- | --- | --- |
| Q-63 | Physical size, target match length. | “Large” vs phone run time. | ~3–5 minutes to first tap-outs, Q-12 cap 8–10 min. |
| Q-64 | How many ramp chokes / sight-blocker density. | 12 fighters not always visible. | At least two floors, ≥3 ramp chokes, mid dense enough that a spawn-to-spawn sightline is blocked. |
| Q-65 | Safe-ish vanish pockets vs camping. | 20s map-only. | Author 2–3 alcoves that are not the only ramps (avoid guaranteed reappear camps). |
| Q-66 | Killboxes / out of world. | 3D ramps. | Invisible walls; no fall-to-death (not in the sport fiction). |
| Q-67 | Name of map one. | UI. | Lead names it; QA uses “Map One” until then. |

---

## 10. Audio / VFX (non-art-bible)

| ID | Question | Why it matters | Suggested default |
| --- | --- | --- | --- |
| Q-68 | Ticklee flash is visual; is there a 1/s tick SFX? | Phone, overlapping duels. | Soft whoosh only for the local duel, not global. |
| Q-69 | Tap-out stinger vs vanish stinger. | Readable without a KO anim. | Two distinct stingers; vanish is whoosh-out, tap-out is crowd-buzzer sport sting (still grimdark, not cartoony). |

---

## 11. Production / validation gates (bible implies, does not schedule)

| ID | Question | Why it matters | Suggested default |
| --- | --- | --- | --- |
| Q-70 | Who signs laugh/squirm validation for every face/hair/eye combo? | Locked: every combo validated before ship. | Amateur: 12 looks × Elara tints that actually ship, not the theoretical full tint cartesian product. Document the allowed tint ids. |
| Q-71 | Blendshapes must exist “before face/hair variants ship.” | Pipeline order. | Block look art on a shared-head blendshape milestone. |
| Q-72 | Content rating target. | Elara 21, base bikini/shorts, tickle sport. | State the target store rating before trailer art. |

---

## Out of Amateur slice (parked)

Do not block Amateur graybox on these:

- Story mode structure, NPCs, cutscenes.
- Pro / Legends maps 2–4, weapons 7–20, armors 9–25.
- Additional playable characters and their 1–5 bases.
- Multiplayer / netcode (bible is single-player + AI).
- Jump, crouch, emotes, fifth KO anim (explicitly out).
- Ranged / sharp / gore (explicitly out).
