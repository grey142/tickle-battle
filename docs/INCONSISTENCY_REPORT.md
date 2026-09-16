# Tickle Battle — Inconsistency report

Audit of `docs/DESIGN_BIBLE.md` (locked Amateur rules). Findings cite the bible; recommended fixes preserve locked systems unless the lock itself cannot execute.

**Do not treat this file as a second bible.** Until the Lead accepts a fix, implementers should flag the finding rather than silently patch combat.

Support’s 13 highest-value hunts are **S-01 … S-13**. Four-mode lock is **MD-01 … MD-12**. Soft-nudge / ignore stacking is **SS-01 … SS-05**. Remaining findings keep their original IDs.

**Lead hub loop (reference only, not a blocker):** [amateur/CITY_HUB.md](amateur/CITY_HUB.md). Combat / vanish / economy / cap hunts above do **not** wait on that file. Hub wording that overlaps open questions (shop equip path, mode doors labeled “coming,” persist fields) is noted under Open questions, not as new S/MD/SS severities.

## Support priority hunts

Lead asked these audited explicitly. Each has severity, bible evidence, and a recommended lock/fix.

| ID | Hunt | Severity | Related |
| --- | --- | --- | --- |
| [S-01](#s-01--join-list-vs-escape-vanish-vs-lock-at-signup-gear) | Join list vs vanish vs lock-at-signup gear | high | B-02, H-07, H-13 |
| [S-02](#s-02--amateur-30-caps-vs-ai-amateur-only-loadouts) | Amateur ~+30% caps vs AI Amateur-only loadouts | high | H-04, H-05, H-13, S-10 |
| [S-03](#s-03--four-clip--six-weapon-sockets--custom-face) | Four-clip + six weapon sockets + custom face | high | H-10, H-12, M-09, M-18 |
| [S-04](#s-04--coin-economy-3--1-vs-amateur-price-ladders) | Coin 3 / 1 vs Amateur price ladders | high | H-17, M-15, S-08 |
| [S-05](#s-05--pack-full--half-vs-30-caps--can-the-duel-break) | Pack full+half vs ~+30% caps — can the duel break | blocker | B-04, S-11, S-12, S-13 |
| [S-06](#s-06--low-stamina-escape--freeze--soft-death-on-reappear) | Low-stamina escape + freeze = soft death | high | H-07, H-08, M-10 |
| [S-07](#s-07--promote-and-compact-vs-facing-snap-back-under-real-timings) | Promote-and-compact vs facing snap under real timings | high | H-03, H-11, S-08 |
| [S-08](#s-08--tap-out-same-frame-as-droppromote--who-gets-the-3) | Tap-out same frame as drop/promote — who gets the 3 | high | H-16, H-17 |
| [S-09](#s-09--match-end--team-wipe-during-the-20s-vanish) | Match-end / team-wipe during 20s vanish | blocker | B-01, M-20 |
| [S-10](#s-10--7-starting-skill-points-vs-ai-stats-under-30-gear) | 7 starting SP vs AI stats under ~+30% gear | high | H-18, M-14, S-02, S-11 |
| [S-11](#s-11--skill-point-flats-before-or-after-gear-percents) | Flats before or after gear percents | blocker | B-05, S-05, S-10 |
| [S-12](#s-12--hard-cap-join-list-at-six) | Hard-cap join list at six | high | H-09, M-06, S-05 |
| [S-13](#s-13--shared-escape-bar-under-six-on-amateur-cap) | Shared escape bar vs six on Amateur cap / phone taps | blocker | B-04, S-05, S-11 |

### S-01 — Join list vs escape vanish vs lock-at-signup gear

- **Severity:** high
- **Type:** missing interaction (three locked systems, no combined rule)
- **Evidence:**
  - Join list: first-touch order; drop → promote next still-touching; compact slots; rejoin appends at end (no reclaim).
  - Vanish: “Escape clears every tickler instantly; join list clears; no lingering contact through vanish.” Contact ignored both ways for 20s. Reappear: no auto-grab; fresh rear or pack. Escape bar resets to empty. Armor % does not change vanish duration/freeze/contact-ignore.
  - Gear: one weapon + one armor; “lock at Arena signup (no mid-fight swap).” Tickler buffs “only to their own taps and their pack share.” Ticklee sees “each tickler's own equipped mesh on join-order socket.” Stamina % = max at **spawn only**.
- **Why it matters:** Vanish must destroy combat state without mutating the signup snapshot. If armor stamina % re-applies on reappear, freeze is a lie (hidden heal/rescale). If socket overlays survive list-clear, neck weapons linger on a vanished body. If opener rights survive vanish, a fresh grab could pay the old first-tickler.
- **Recommended lock/fix:**
  1. **Signup snapshot:** weapon id, armor id, spent blocks, and tint/look freeze at Arena confirm. Join list stores **fighter ids**, never a mutable loadout pointer.
  2. **On vanish (instant):** join list → empty; all six socket overlays despawn; occupancy `Vanished`; contact ignore; stamina **held at current value** (no regen, no armor re-scale, no spawn-max refresh). Ticklers become `Free` with their locked gear unchanged.
  3. **On reappear:** new grab starts a **new** join list (new opener, new 3-coin rights). Overlap is not a join (locked). Locked gear still applies: tickler % only after they become `Tickler` again; ticklee armor escape % only on new escape taps; vanish length still 20s.
  4. Do not allow Shop/Home equip or skill spend until the match returns to hub.

### S-02 — Amateur ~+30% caps vs AI Amateur-only loadouts

- **Severity:** high
- **Type:** fairness hole (rules are consistent, distribution is not)
- **Evidence:**
  - Weapons/armor: Amateur hard-cap “~+30% combined”; strictly stronger each step; Amateur first 6 / 8.
  - “Amateur AI only rolls Amateur pool” (weapon and armor).
  - Ship: Elara default **bare-hand** (0% tier 0) + Amateur pools only.
  - Cap is **per piece**, so a fighter may hold +30% tickler weapon **and** +30% ticklee armor at once (ladders independent).
- **Why it matters:** Same pool for player and AI is fair **at the top of Amateur**. It is not fair on match 1 if six enemies all roll weapon-6 + armor-8 while Elara is 0%/0%. The cap does not cap **team** offense: six +30% weapons still stack through pack share (S-05, S-13). “Only rolls Amateur pool” is not a roll table.
- **Recommended lock/fix:** Keep the ~+30% **piece** cap and Amateur-only AI pool (locked). Add a roll policy, not a new cap:
  - Weight AI gear toward Elara’s current combined % / level (include a real chance of tier 0).
  - Forbid a lobby where every enemy is at the Amateur cap piece unless Elara also owns a cap-band piece (or is Amateur 8–10).
  - Do not raise or lower the 30% number to “fix” fairness.

### S-03 — Four-clip + six weapon sockets + custom face

- **Severity:** high
- **Type:** phone/3D feasibility vs locked art
- **Evidence:**
  - One four-clip set: idle, run, tickling, laugh/squirm. Gear is socket overlays, never baked into clips.
  - Sockets 1–6: belly, flanks, armpits, feet, **neck**, knees. Ticklee sees each tickler’s **own** equipped mesh on that slot.
  - “Face/hair cosmetics head-only; never move neck socket.” “Hair must clear neck weapon socket during laugh/squirm.”
  - “In-fight laughter face popup uses player's equipped face + same blendshapes.” Look down at body; popup by stamina stage.
- **Why it matters:** Slot 5 is on the same head the popup is selling. Hair is validated against the **socket**, not against six different Amateur weapon AABBs. Laugh blendshapes move jaw/neck into that volume. Popup vs in-scene can double-draw a neck weapon through the face camera.
- **Recommended lock/fix:** Keep four clips and the socket map (locked). Do not add a fifth character clip.
  - Parent every socket (especially neck) to the shared-rig joint so laugh/squirm moves the overlay.
  - Hair clearance QA against the **largest** Amateur weapon mesh that can occupy slot 5, on all 12 looks, at max laugh intensity. Fail the **weapon** or the **hair**, not the socket transform (socket must not move — locked).
  - Face popup = shared-head + blendshapes **from the neck up, no slot-5 weapon** in the popup pass. In-scene still shows the neck overlay when the player looks down.
  - Tickle clip IK-retargets to the slot (H-10). Phone: one local popup only (H-12).

### S-04 — Coin economy (3 / 1) vs Amateur price ladders

- **Severity:** high
- **Type:** missing calibration (cannot ship Shop)
- **Evidence:**
  - “First tickler on a tap-out: 3 coins. Assist: 1 coin.” Promote-on-drop first gets 3 **if still touching at tap-out**.
  - “Prices tied to ladder.” Amateur 6 weapons + 8 armors. Shop buys those pieces. No prices, no starting coins, no other sink.
  - Max payout per enemy tap-out if all 6 teammates are on the list: 3 + 5×1 = **8 coins split across six people**. Solo opener: **3 to one person**.
- **Why it matters:** If weapon 1 costs 3, Elara buys +% gear after one tap-out and snowballs vs S-02 AI. If weapon 1 costs 80, Amateur Shop is dead for the slice. Assists never match a first payout, so packing is a **team** tempo tool, not a personal coin engine — unless prices assume 8 coins/tap-out.
- **Recommended lock/fix:** Keep 3 / 1 in **team** modes (locked). FFA: 3 only, no assist (MD-07). Publish an Amateur price table before Shop is playable (`OPEN_QUESTIONS.md` S-04). Suggested band: first weapon ≈ 2–3 opener payouts (6–9 coins); top Amateur weapon and armor each ≈ a dozen **Team Quick** matches; starting coins 0–5. No entry fee in Amateur. Coins persist on loss. Same-frame payout uses S-08. **Timed BR unbounded respawns vs this ladder: MD-03.**

### S-05 — Pack full + half vs ~+30% caps — can the tap duel break

- **Severity:** blocker
- **Type:** numeric break of locked vanish and/or locked pack
- **Evidence:**
  - First tickler: **full** stamina + **full** escape damage. Each additional: **half of both types**. Six on list = 1 + 5×0.5 = **3.5×** if they tap together.
  - Amateur weapon/armor hard-cap ~+30% combined, ladders independent, no aura but each uses **their own** % on their taps.
  - Ticklee has one shared escape bar (S-13) and one stamina pool. Phone: one thumb filling vs up to six thumbs draining.
- **Why it matters:** Two break modes:
  1. If “escape damage” **subtracts from the bar** (tug-of-war): two ticklers already 1.5× drain vs 1× fill; at +30% weapon vs +30% armor the ratio stays ~1.5×. Vanish dies at pack-overpower (2+). That contradicts the locked escape bible (B-04).
  2. If race (ticklers only cut stamina): 3.5× × 1.30 weapon vs 1.30 armor HP ≈ **3.5× net** vs a 0% mirror. A 6-cap stack can empty Amateur stamina before the ticklee lands a handful of phone taps (S-13). Duel “breaks” as in: ticklee has no agency, vanish never shows.
- **Recommended lock/fix:** Keep pack 1.0 / 0.5 and the ~+30% **piece** cap (locked). Lock **race** (B-04): extra joiners do **not** push the escape bar. Tune stamina vs fill so: **solo** vanish is realistic; **2-stack** is a real race; **6-stack** is expected to tap out **but** the ticklee still gets a minimum agency window (recommend ≥3 scoring escape taps / ~1s at 0.35s cadence). Do not invent a second pack-damage cap unless that window cannot be tuned (that would fight “each additional deals half”).

### S-06 — Low-stamina escape + freeze = soft death on reappear

- **Severity:** high
- **Type:** locked combo that plays as delayed KO
- **Evidence:**
  - Breakout: stamina **frozen (no regen)** for 20s; escape bar **resets to empty**; contact ignored; map-only; cannot tickle.
  - Reappear: no auto-grab; local **sound + brief flash for nearby only**.
  - Armor stamina % is spawn-max only; it does not heal during freeze. Armor escape % does not shorten vanish.
- **Why it matters:** Escape at 5% HP → 20s freeze at 5% → bar empty → nearby tell. One fresh opener tap can tap out. Vanish becomes a **delayed death** with a public announcement, not a save. Freeze is locked, so a heal-during-vanish would break the bible.
- **Recommended lock/fix:** Keep freeze, 20s, empty-bar reset, and no auto-grab (locked). Do **not** regen in vanish.
  - Extend “no auto-grab” to a **0.75–1.0s post-reappear contact-ignore** (still not lingering vanish contact; hunters must grab after the tell). Stamina stays at the frozen value.
  - **SS-01:** that grace is **optional** and **must not add** to remaining vanish, spawn delay, or cancel CD. Prefer rising-edge no-auto-grab only (already locked) over a fourth timed ignore.
  - Copy/VFX: low-HP breakout is a desperation reposition, not a full reset.
  - Reject a silent stamina floor on reappear unless the Lead prefers it over grace — a floor is a one-tick heal and fights “frozen.”

### S-07 — Promote-and-compact vs facing snap-back under real timings

- **Severity:** high
- **Type:** contradiction + tick-order
- **Evidence:**
  - “If pack drops to a single tickler, facing snaps back — need rear grab again to keep tickling alone.”
  - Drop → “promote next still-touching; compact remaining slots.” Slots 2–6 are not rear.
  - Contact is mesh contact, not proximity. Laugh/squirm will flicker overlap (H-11). Pack-sticky join/leave happens on humanized bot timing, not on clean designer beats.
- **Why it matters:** Strict same-tick reading: B promotes to belly + 3-coin, then fails rear, duel ends, list clears. Under grace (200–300ms) the leaver may still count as “on list,” so facing never snaps, then snaps a quarter-second later mid-tap. Join size 2↔1 toggling each sticky bump makes compact/sockets thrash.
- **Recommended lock/fix:**
  1. **Grandfather** the remaining still-touching tickler (H-03): facing snap is for **new** solo grabs only.
  2. **Sim order:** snapshot list at tick start (S-08) → resolve taps → apply contact drops (instant for vanish/peel; grace only for overlap flicker) → compact/promote → **then** facing check only if the remaining fighter is a **new** solo grab (not grandfathered).
  3. Socket lerp may take 100–200ms; mechanical slot index is instant. Do not deal slot-2 half-share after they have mechanical slot 1.

### S-08 — Tap-out on the same frame as a drop/promote — who gets the 3-coin first

- **Severity:** high
- **Type:** missing edge (payout desync)
- **Evidence:**
  - “First tickler on a tap-out: 3 coins.”
  - “Promote-on-drop first tickler gets the 3-coin payout **if still touching at tap-out**.”
  - Join order can compact on the same sim tick that stamina hits 0 (peel, grace expiry, release, contact flicker).
- **Why it matters:** If contact is processed first, A (killing opener) already dropped → B gets 3 for a tap A dealt. If taps are processed first, A gets 3 while no longer touching — fights the “still touching” clause. Assist 1s also flip with the list.
- **Recommended lock/fix:** **Snapshot the join list at the start of the sim tick.** That snapshot owns: opener vs half-share for this tick’s taps, and 3 / 1 payouts if stamina hits 0 this tick. Drops compact **after** combat. So: if A was slot 1 at tick start and the killing tap is this tick, **A gets 3** even if A’s contact ends later this tick. If A dropped on a **previous** tick, B is already first. Vanish this tick still clears payouts only if vanish wins the same-tick race vs tap-out (H-16: escape first → no tap-out, no coins).

### S-09 — Match-end or team-wipe while someone is in the 20s vanish

- **Severity:** blocker
- **Type:** missing edge on two locked systems
- **Evidence:**
  - Win condition never defined (B-01) beyond tap-out at 0 stamina.
  - Vanished: cannot tickle, cannot be seen, **contact ignored both ways**, stamina frozen. Bots use the full escape bible.
  - A vanished fighter is **not** tapped out.
- **Why it matters:**
  - Last enemy taps out while you are vanished → should be a win, but you are still in 20s map-only with no “match over” rule.
  - You are last alive and vanished: enemies **cannot** contact you for up to 20s → wipe **cannot complete**. You cannot tickle them either → stall (M-20).
  - Whole team tapped out except a vanished ally: not a wipe yet; treating vanish as dead would contradict freeze/contact-ignore.
- **Recommended lock/fix:** **Quick (locked in Modes):** `Vanished` counts as **active**. `TappedOut` is not. Match ends the **moment** one team (Team Quick) or one fighter (FFA Quick) is the last with active players; **do not wait out 20s**; vanish window **closes**. If you are vanished and your team already wiped, you are still the last active — you **win**, then vanish closes (not a loss).
  - **Timed:** timer/draw must also close vanish (MD-05). No tap-out (and no Timed point) during vanish (contact ignored).
  - Enemies cannot shorten the 20s to force a wipe (armor already cannot — locked).

### S-10 — Amateur 7 starting skill points vs AI preset stats under ~+30% gear

- **Severity:** high
- **Type:** fairness / missing AI budget
- **Evidence:**
  - Player: “Start: 7 skill points; +1 per level to 35.” Blocks +2 / +3.5 / +1.5. Characters base 1–5 **before** points.
  - AI: Amateur **gear** pool only. No AI base-stat or SP rule. Gear cap ~+30%.
  - S-11: whether that 30% multiplies the 7 flats decides who wins the first match.
- **Why it matters:** Elara’s 7 points are one specialized track. If AI spawn at base 5/5/5 + 7+ blocks + cap gear, the 7 SP tutorial is fake. If AI spawn at 0 blocks + 0% while Elara spent 7, bots are dummies. “Amateur-only loadouts” does not equal “fair stats.”
- **Recommended lock/fix:** Same **rules** for bots as Elara (locked vision/vanish already). Amateur match 1: AI base 3/3/3, **7 spent blocks** in mixed spreads (not all tickle), gear per S-02 weights (real tier-0 chance). Scale AI SP with Elara’s level (level 10 → ~16 points), still Amateur gear only. Never give Amateur AI Pro flats or Pro %.

### S-11 — Skill-point flats before or after gear percents

- **Severity:** blocker
- **Type:** unspecified operator order (must be explicit)
- **Evidence:**
  - Flats: “Stamina +2 / Escape +3.5 / Tickle +1.5 **per block**.”
  - Weapon: “% buff to **tickle technique** and/or escape damage **as tickler only**.”
  - Armor: “% buff to stamina and/or escape **as ticklee only**.” Stamina % = max at spawn only; escape % = escape points per tap only; does not blunt incoming tickle damage.
  - No parentheses. No statement whether % multiplies (base+flats) or only base.
- **Why it matters:** `(base + 7×flat) × 1.30` vs `base × 1.30 + 7×flat` changes whether early SP or cap gear dominates (S-05, S-10). Implementers will fork combat.
- **Recommended lock/fix:** **Flats first, then percents.** Role gates stay locked.

```
tickleTechnique    = (baseTickle + 1.5 * tickleBlocks)
staminaDamage      = tickleTechnique * (1 + weaponTickle%)     // tickler taps only
                     * packShare                               // 1.0 opener / 0.5 others (list cap S-12)
spawnMaxStamina    = (baseStamina + 2 * staminaBlocks) * (1 + armorStamina%)   // once at spawn
escapePointsPerTap = (baseStruggle + 3.5 * struggleBlocks) * (1 + armorEscape%) // ticklee taps only
```

Weapon escape-% is **not** a second multiply on the escape **bar** (S-05 race). Treat it as extra stamina pressure during the duel (`* (1 + weaponEscape%)` on `staminaDamage`, or a Lead-signed separate add). Never apply armor % to tickler math or weapon % to ticklee math. Never re-apply armor stamina % on vanish reappear (S-01). A global `kStamina` / `kDamage` scalar **after** this order is allowed so base 1–5 is not raw HP; it is not a gear percent.

### S-12 — Hard-cap join list at six

- **Severity:** high
- **Type:** implied by sockets, not stated as a combat cap
- **Evidence:**
  - Six animation slots, six named sockets. Teams of 6, so a legal Amateur pack cannot be 7 without a bug, peel alias, or future mode.
  - Pack damage: “each additional tickler deals half” — unbounded if the list is unbounded.
  - Rejoin “appends at end” — does not say “unless length==6.”
- **Why it matters:** If a 7th overlap deals half-damage without a socket, or **steals** slot 1 / opener coins, payout (S-08) and 3.5× math (S-05) desync from the art. If they steal a socket, someone on the list loses their overlay while still damaging.
- **Recommended lock/fix:** **Join list hard-cap = 6 in team modes, 1 in FFA (Modes / MD-06).** Extra bodies in contact:
  - do **not** attach, compact, or steal a socket;
  - do **not** become opener or assist;
  - do **not** deal pack half-damage;
  - do **not** count toward “2+ touching” (they must join to count, and they cannot if full).
  Pack half-damage uses **only** the capped list: team max 3.5×; FFA max 1.0×. Occupancy of extras remains `Free` (peel is a grab on a **different** target — MD-11). Team rejoin appends at end if a slot opens.

### S-13 — Shared escape bar under pack pressure (six on Amateur cap, phone tap rates)

- **Severity:** blocker
- **Type:** ambiguity + numeric / phone feasibility
- **Evidence:**
  - One ticklee: one flash, one “until escape bar = 100%,” one vanish. There are not six bars.
  - Additional ticklers deal “half of both types” — if type 2 is bar drain, six joiners push **the same bar**.
  - Phone: one Escape control vs up to six Tickle controls. Humanized bot taps still add extra scoring streams.
  - Amateur ~+30% on both sides does not cancel 3.5× pack share (S-05, S-11).
- **Why it matters:** Worked Amateur-cap sketch (illustrative, using recommended 0.35s cadence and S-11 order — not Lead-signed pools): six +30% ticklers vs one +30% armor ticklee yield on the order of **~3.5×** stamina pressure. Time-to-zero can fall **under one second**, i.e. fewer than three phone escape taps, before 100% fill. If those joiners also drain the **same** bar, fill-to-100 is **impossible** at 2+ bodies, not only at six.
- **Recommended lock/fix:**
  1. **Single shared escape bar** per ticklee (lock what the bible already implies).
  2. **Joiners do not push that bar.** Half-damage is stamina (and optional struggle-bonus stamina), list-capped at 6 (S-12). Race, not tug-of-war (B-04, S-05).
  3. **Phone cadence lock:** 1 scoring tap / 0.35s per fighter; bots may be slower, never faster. Tune S-11 numbers so solo can hit 100% before 0 stamina; 6-cap stack can tap out but not before the ticklee’s minimum agency window (S-05: ~3 taps).
  4. If Lead **insists** extra joiners drain the bar, Amateur vanish is dead vs pack — that is a broken lock; do not ship it without a new fill bonus (rejected unless the Lead explicitly breaks vanish).

---

## Mode hunts (four-mode lock)

Lead added four Arena modes. Combat/escape/gear stay shared except FFA pack/join/assist/spawn pins. Audit vs join-list, vanish, coins, Amateur caps.

| ID | Hunt | Severity | Related |
| --- | --- | --- | --- |
| [MD-01](#md-01--combat-same-across-modes-vs-ffa-pack-off) | “Combat same” vs FFA pack-off / cap 1 | high | S-12, S-05 |
| [MD-02](#md-02--timed-br-clean-respawn-vs-low-hp-vanish) | Timed BR clean respawn vs low-HP vanish | high | S-06, S-01 |
| [MD-03](#md-03--timed-br-unbounded-tap-outs-vs-31-coins--amateur-prices) | Timed BR coin farm vs 3/1 + Amateur prices | high | S-04, S-02 |
| [MD-04](#md-04--timed-respawn-at-team-spawn-vs-ffa-solo-pads) | “Team spawn” vs FFA scattered pads | high | — |
| [MD-05](#md-05--quick-closes-vanish-vs-timed-timer-end) | Quick vanish-close vs Timed timer | medium | S-09, B-01 |
| [MD-06](#md-06--join-list-cap-6-vs-ffa-cap-1) | Join-list cap 6 vs FFA cap 1 | high | S-12, S-07, S-08 |
| [MD-07](#md-07--assists-coins-vs-timed-win-score-vs-ffa-no-assist) | Assists vs Timed score vs FFA no-assist | high | H-17, S-08 |
| [MD-08](#md-08--armor-spawn-max-on-timed-respawn-vs-vanish) | Armor % on respawn vs vanish reappear | medium | S-01, S-11 |
| [MD-09](#md-09--bots-per-side-of-6-vs-ffa) | Bots “per side of 6” vs FFA | high | H-06, M-21 |
| [MD-10](#md-10--ffa-team-rim--phone-id-among-12-solos) | FFA: no teams, still rim-ID 12 solos | high | H-19 |
| [MD-11](#md-11--ffa-peel-still-on-combat-same) | FFA peel / grab-the-tickler | high | B-02 |
| [MD-12](#md-12--same-frame-0-stam-vanish-then-timed-reappear) | Vanish at 0 stam then Timed reappear | high | H-16, S-06 |

### MD-01 — “Combat same across modes” vs FFA pack-off

- **Severity:** high
- **Type:** contradiction (two locked sentences)
- **Evidence:** Modes: “Combat, escape vanish, gear lock, Amateur ~+30% caps, and skill math are the same in every mode. Only win condition and respawn change.” Same paragraph: **FFA pack-overpower off, join-list hard-cap 1, no assists, solo spawns.** Combat becoming-tickler still describes pack overpower and slots 1–6. S-05/S-13 pack math is team-only if FFA cap is 1.
- **Why it matters:** Implementers will either ship pack in FFA (violates FFA pin) or fork combat (violates “same”). Sockets 2–6 and half-share never fire in FFA.
- **Recommended lock/fix:** Treat the FFA bullets as **explicit exceptions** to pack, join-list length, assists, and spawn layout — not to tap math, vanish 20s, gear lock, or ~+30% caps. Team modes keep S-12 cap **6**. FFA cap **1**, rear-only, no facing-ignore. Do not write a second damage formula.

### MD-02 — Timed BR clean respawn vs low-HP vanish

- **Severity:** high
- **Type:** incentive break vs locked escape
- **Evidence:** Timed respawn is **clean** (full stamina, empty escape, no vanish carryover) after a **short** delay. Vanish: stamina **frozen**, bar **empty**, 20s map-only, then reappear at the **same low HP** (S-06). Tap-out awards 1 Timed point; vanish awards **0**.
- **Why it matters:** Mid-timer, tapping out can be **better** than vanishing (full HP back in a short delay vs 20s ghost then 5% HP). Vanish remains useful as **point-deny / clock** near timer end. If players learn “die for a cleanse,” Struggle gear and the escape bible are dead in Timed BR.
- **Recommended lock/fix:** Keep both locks. Document: vanish **denies the point** and burns 20s; tap-out **gives the point** and buys a clean spawn. Do **not** make vanish heal (fights freeze) and do **not** make Timed respawn keep low HP (fights clean). Optional copy/HUD so the point-deny is readable. If playtests show everyone eating tap-out on purpose, shorten respawn delay’s value (longer delay) rather than breaking freeze.

### MD-03 — Timed BR unbounded tap-outs vs 3/1 coins + Amateur prices

- **Severity:** high
- **Type:** economy vs caps
- **Evidence:** Economy: 3 coins opener, 1 assist (team). Timed: tap-out **and respawn** for the whole timer. S-04 prices assume ~a handful of tap-outs per **Quick** match. Amateur ~+30% shop pieces. Default Arena is Team Quick, Timed is **opt-in**.
- **Why it matters:** A long Timed match is a coin farm: 3 coins × N respawns buys cap gear, then S-02/S-05/S-10 fairness collapses. “Combat/escape/gear same” does not cap coins per match.
- **Recommended lock/fix:** Keep 3/1 and FFA-no-assist (locked). Do **not** a second coin table. Bind Amateur Timed **timer length** (and expected tap-outs) so median coins/match stay in the same band as Team Quick. If the timer must be long, add a **per-match coin cap** (new, only if length cannot be tuned). Win score stays uncapped (that’s the mode). Opt-in is not a balance fix by itself.

### MD-04 — “Team spawn” vs FFA scattered pads

- **Severity:** high
- **Type:** wording clash inside the Timed pin
- **Evidence:** “Timed BR respawn: … at team spawn not on the pile.” FFA: “scattered solo spawns not team doors.” FFA Timed is both Timed BR and FFA.
- **Recommended lock/fix:** Split already in the bible: Team Timed → team spawn; FFA Timed → scattered solo pad; both clean, not on the pile, contact-ignored for the short delay. Implement two spawn tables on map one.

### MD-05 — Quick closes vanish vs Timed timer end

- **Severity:** medium
- **Type:** missing edge (Quick is locked; Timed is not)
- **Evidence:** Quick: end the **moment** win hits; mid-vanish window **closes**. Timed win is the **timer** (or a draw). No sentence that timer-end also closes vanish. S-09 asked this for all modes.
- **Recommended lock/fix:** **Any** match end (Quick wipe, Timed timer, draw) closes vanish immediately — same as Quick. Vanished still counted as active **until** that instant (so a vanished last-alive still **wins** Quick, then the window closes).

### MD-06 — Join-list cap 6 vs FFA cap 1

- **Severity:** high
- **Type:** join-list / sockets / coins
- **Evidence:** S-12 hard-cap 6; six sockets; promote/compact; 3+1 coins. FFA: cap **1**, no assists, rear only. Rejoin-append, pack drop facing snap, half-share: N/A in FFA.
- **Why it matters:** A 2nd FFA body in contact must not steal belly, not deal half, not take the 3-coin, not add Timed score. Same as S-12’s 7th, but the cap is 1.
- **Recommended lock/fix:** `joinListMax = 6` team / `1` FFA. Extra contacts: `Free`, no socket steal, no damage, no coins, no win points. FFA tick-start snapshot (S-08) is always length 0 or 1. Promote-on-drop never runs. Peel (MD-11) **replaces** the tickler rather than joining.

### MD-07 — Assists coins vs Timed win score vs FFA no-assist

- **Severity:** high
- **Type:** economy + score
- **Evidence:** Team: 3 opener + 1 assist coins; Timed score **1** to tickler’s team, assists do **not** double-count. FFA: coins **and** Timed score only to the single tickler. Ambiguity: does FFA pay 3, or 3+1 collapsed, or 1?
- **Recommended lock/fix:** Team Timed: **1 win point** to opener’s team (S-08 snapshot slot-1); coins 3 + 1×assists still on list. FFA: **3 coins + 1 win point** to that one tickler; **never 4 coins**. Quick modes: coins same rule, **no** win-score ticker (win is last-alive).

### MD-08 — Armor spawn-max on Timed respawn vs vanish

- **Severity:** medium
- **Type:** join-list/vanish/gear (S-01)
- **Evidence:** Armor stamina % = max at **spawn** only. Timed clean respawn = **full stamina**. Vanish reappear must **not** re-scale (S-01, freeze).
- **Recommended lock/fix:** `Spawn` events (match start, Timed clean respawn) apply armor max. `VanishReappear` is not a spawn. Gear snapshot still locked at Arena signup (no mid-fight swap on respawn).

### MD-09 — Bots “per side of 6” vs FFA

- **Severity:** high
- **Type:** AI vs pack/join
- **Evidence:** Mixed bag per side of 6; pack-sticky joins teammate tickle; pile cooldown. FFA: no teammates, cap 1, pack off.
- **Recommended lock/fix:** Team: keep mixed 5+6 bags, pack-sticky as H-06. FFA: mix 11 roles with **no pack-sticky** (or treat sticky as hunter); pile cooldown = “don’t all path to the same victim” even though they cannot join. Bots still use full vanish bible. Timed FFA bots should play for **score**, not only kills-in-front-of-them (open number: how greedy).

### MD-10 — FFA team rim vs 12 solos on phone

- **Severity:** high
- **Type:** feasibility vs art
- **Evidence:** Team ID via rim tint / armor accent (two teams). FFA: everyone alone. H-19 already hard in 6v6.
- **Recommended lock/fix:** FFA: **no team rim**. Identity = unique look preset (12 locked, no repeats) + nametag only if the art bible’s “no bright UI blobs” allows a small grimdark nameplate. Do not invent 12 rim colors.

### MD-11 — FFA peel still on? (combat same)

- **Severity:** high
- **Type:** missing edge
- **Evidence:** Combat same except pack/join/assists. Peel (grab a `Tickler`) was B-02, never mode-gated. FFA cap 1 means a second fighter **cannot join** the victim; they **can** still rear-grab the tickler (a different target).
- **Recommended lock/fix:** Peel **on** in all modes. FFA: rear-grab the tickler → they leave the old list (list was cap 1, victim becomes `Free`) and become your ticklee. You do not inherit their Timed score. Victim is not tapped out.

### MD-12 — Vanish at 0 stam then Timed reappear

- **Severity:** high
- **Type:** vanish × Timed respawn × H-16
- **Evidence:** H-16: escape 100% can beat same-tick stam 0 → vanish at **0 HP**, freeze, contact ignore (cannot be scored). Timed clean respawn only happens on **tap-out**, not on vanish. Reappear at 0 → first legal tap taps out, opponent scores, then clean respawn.
- **Recommended lock/fix:** Keep H-16 (vanish wins the tie). 20s at 0 HP is a **point-deny**. After reappear, 0 HP may tap out on the first scoring tap (S-06). Do not clamp HP on vanish. Do not treat vanish as a Timed respawn.

---

## Soft-nudge / contact-ignore stacking

Lead added pile clear-space nudge. **Priority:** cancel/cooldown vs 20s vanish ignore vs Timed spawn ignore must not sum into a longer untouchable window than any **one** of those bibles.

| ID | Hunt | Severity | Related |
| --- | --- | --- | --- |
| [SS-01](#ss-01--nudge-cd--vanish-20s--timed-spawn-ignore-must-not-stack) | Three ignores must not add | blocker | S-01, S-06, S-09, MD-02 |
| [SS-02](#ss-02--cancel-cd-is-pairwise-not-a-third-global-ignore) | Cancel CD pairwise vs global | high | SS-01 |
| [SS-03](#ss-03--nudge-cancel-in-ramp-chokes-vs-map-one--ambush) | Choke cancels vs map one | high | H-09, B-03 |
| [SS-04](#ss-04--joiner-reject-vs-opener-cancel-cd) | Joiner reject ≠ grab cancel | medium | S-12, MD-06 |
| [SS-05](#ss-05--vanished-bodies-as-empty-space--reappear-in-pile) | Vanish phase vs nudge empty-space | high | H-07, S-06 |

### SS-01 — Nudge CD + vanish 20s + Timed spawn ignore must not stack

- **Severity:** blocker
- **Type:** soft-state stacking (priority hunt)
- **Evidence:**
  - Vanish: contact ignored **both ways for 20s**. Cannot tickle. Reappear: no auto-grab (rising edge, not a timed ignore).
  - Timed BR: **short** spawn contact-ignore until delay ends. Clean respawn, not on the pile.
  - Nudge: freeze join/drop + taps for the **nudge beat**; on failed clear-space, **cancel + short re-grab cooldown**. Cooldown **only on cancel**.
  - Naive implementation: `untouchableUntil = now + vanishRem + spawnRem + nudgeBeat + cancelCD` or overlapping flags all true → **20s + delay + CD** (and S-06 reappear grace if added). That is longer than any **one** bible (20s vanish is the longest locked ignore).
- **Illegal stacks (must fail QA):**
  1. Grab starts on a **Vanished** or **SpawnDelay** fighter (nudge/CD must not run).
  2. Nudge beat still running when vanish fires, then **cancel CD after** the 20s (vanish + CD).
  3. Failed nudge **into** spawn pad applies CD **and** leaves spawn-ignore running (Delay + CD).
  4. Reappear (no auto-grab) **plus** cancel CD **plus** remaining vanish (vanish already ended — do not invent leftover ignore).
  5. Match-start 10s pocket treated as a fourth ignore that **adds** to Timed spawn delay on the same fighter.
- **Recommended lock/fix (also pinned in the bible):**
  - **At most one** of `{Vanished, SpawnDelay, NudgeCancelCD}` per fighter. Never sum remaining times.
  - **Priority replace, don’t add:** `Vanished` (20s, full escape bible) > `SpawnDelay` (Timed pad) > `NudgeBeat` (slide freeze) > `NudgeCancelCD` (pairwise, short).
  - Vanish **aborts** nudge: list clears, sockets despawn, **no cancel CD**.
  - `SpawnDelay` / match-start pocket: **grabs do not start** → no nudge, no CD. Nudge dest cannot enter those volumes (cancel the grab if that was the only path — CD pairwise only, spawner’s Delay unchanged).
  - `NudgeBeat` is **not** contact-ignore vs the rest of the world. It only freezes **that pile’s** join/drop/taps. Outsiders may still grab **non-pile** fighters. Duration ≤ time to travel the hard-cap (no teleport).
  - `NudgeCancelCD` is **pairwise** (SS-02). **Cleared** if either party enters Vanished or SpawnDelay. Not paused. Not global.
  - Reappear no-auto-grab stays a **rising-edge** rule (S-01), not a fourth timed ignore. Do not attach cancel CD to reappear.
  - **Max global untouchable** for a body = **20s vanish** or **spawn delay**, whichever they are actually in — never both, never plus CD.

### SS-02 — Cancel CD is pairwise, not a third global ignore

- **Severity:** high
- **Type:** ambiguity that would re-break SS-01
- **Evidence:** “Short re-grab cooldown” — whose? Tickler only, pair, or ticklee invuln vs everyone? Vanish and spawn ignore are **global both-ways**.
- **Why it matters:** A global ticklee CD after a wall cancel is a third contact-ignore and **will** stack with spawn/vanish in chokes. Pairwise CD: others can still grab; the failed opener cannot spam the same rear volume.
- **Recommended lock/fix:** CD = `(ticklerId, tickleeId)` only. Other fighters may grab either immediately (unless Vanished/SpawnDelay). Successful nudge: **no** CD (locked). Peel of a different target: not this pair.

### SS-03 — Nudge cancel in ramp chokes vs map one / ambush

- **Severity:** high
- **Type:** feasibility vs locked map + AI
- **Evidence:** Map one: dense mid, **ramp chokes**, two layers. Ambusher/flanker seeds prefer ramps. Nudge: never off ramp edges or through layer gaps — **cancel instead**. H-09 already said six bodies don’t fit.
- **Why it matters:** The legal grab spots may be only open rooms. Ramp ambush (a locked AI bias) plus wall-start grabs **cancel** and apply CD → chokes become no-tickle zones. Pack of 6 needs even more clear AABB.
- **Recommended lock/fix:** Keep cancel-on-gap (locked). Author **nudge sinks** on map one: flat pockets beside each choke within the hard-cap, horizontal, not off-edge. Validate 1-stack and 6-stack (team) / 1-stack (FFA) can nudge from the choke lip into that pocket. If a choke has no pocket, it is a **no-grab** volume by design (document it). Do not teleport; do not relax “no layer gaps.”

### SS-04 — Joiner reject vs opener cancel CD

- **Severity:** medium
- **Type:** join-list
- **Evidence:** Mid-fight joiner that would clip: micro-nudge or **reject that join**. Re-grab CD **only on cancel** of the grab. S-12 extras already don’t attach.
- **Recommended lock/fix:** Rejected joiner ≠ cancelled grab. List, sockets, taps, opener 3-coin rights **unchanged**. No CD. Joiner may retry on a **new contact rising edge** after they leave and re-enter (not every physics tick). Micro-nudge success: they **append** (locked rejoin rule), same distance cap, freeze **only that joiner’s** attach beat (not the whole pile’s taps) — if whole-pile tap freeze on every join, S-13 agency windows die. **Lock:** opener nudge freezes the pile; **joiner micro-nudge does not freeze ticklee escape taps.**

### SS-05 — Vanished bodies as empty space → reappear in pile

- **Severity:** high
- **Type:** vanish × nudge empty-space
- **Evidence:** Vanish: contact ignored, phase through fighters (H-07). Nudge: slide only through **empty** space, no bystanders. A vanished capsule is not a “bystander” if phased.
- **Why it matters:** Pile slides into a vanished fighter’s cell. They reappear overlapping the pile. No auto-grab (locked) but S-06 tell + crowded sockets. If we count them as blocking, vanish becomes a **nudge wall** (info leak / peel tool).
- **Recommended lock/fix:** Vanished capsules are **not empty** for **nudge destination** (cannot **end** a slide on them). Travel **through** a vanished capsule is allowed (they are phased). SpawnDelay capsules are **solid forbidden dest and path** (bible: no into Timed spawn ignore). Match-start pocket same as SpawnDelay.

---

## Summary (full audit)

| ID | Severity | Type | Title |
| --- | --- | --- | --- |
| B-01 | high | remaining gap | Win conditions locked in Modes; timer/delay numbers still open |
| B-02 | blocker | missing edge | Occupancy: peel, mutual tickle, one role per body |
| B-03 | blocker | feasibility + missing | Movement during duel vs contact-must-hold |
| B-04 | blocker | ambiguity | “Escape damage” vs vanish: race or tug-of-war |
| B-05 | blocker | missing edge | No combat formula (pools, taps, regen, cadence) |
| H-01 | high | contradiction | “Battle royale” vs 6v6 arena sport |
| H-02 | high | ambiguity | Rear / front facing never defined |
| H-03 | high | contradiction | Pack collapse + facing snap vs promote-on-drop |
| H-04 | high | contradiction | Armor 8 × ~+5% vs Amateur ~+30% cap |
| H-05 | high | contradiction | Bare-hand / base attire vs 20 / 25 counts |
| H-06 | high | contradiction | AI pile cooldown vs pack overpower / pack-sticky |
| H-07 | high | ambiguity | Vanish collision vs contact-ignore vs map-only |
| H-08 | high | missing edge | Stamina regen implied, never specified |
| H-09 | high | feasibility | Six full-size tickler bodies in dense maze chokes |
| H-10 | high | feasibility | One tickle clip cannot cover six socket heights |
| H-11 | high | feasibility | Contact flicker on laugh/squirm will break packs |
| H-12 | high | ambiguity | Face popup is “player’s face” vs AI ticklees |
| H-13 | high | contradiction | Amateur ship “bare-hand” vs Amateur weapon pool of 6 |
| H-14 | high | ambiguity | 12 looks vs Elara’s reserved equipped look |
| H-15 | high | missing edge | Camera mode; “look down at body” on phone |
| H-16 | high | missing edge | Same-frame stamina 0 vs escape 100% |
| H-17 | high | ambiguity | Assist coin eligibility |
| H-18 | high | contradiction | “25 blocks per tier track” vs point budget |
| H-19 | high | feasibility | Phone: 12 near-identical humanoids, no UI blobs |
| H-20 | high | missing edge | 10s spawn timer: combat on or off |
| M-01 | medium | gap | Story mode named, zero rules |
| M-02 | medium | contradiction | “Choose character” vs Elara-only Amateur |
| M-03 | medium | ambiguity | Weapon “pack share” vs no aura |
| M-04 | medium | contradiction | Last-known timeout vs vanish “cannot be seen” |
| M-05 | medium | gap | Under-ready Arena signup has no modifier |
| M-06 | medium | naming | Slot “flanks” is one person, not both sides |
| M-07 | medium | gap | Friendly fire not explicit |
| M-08 | medium | feasibility | Volumetric grimdark vs phone 12-character budget |
| M-09 | medium | feasibility | Duel HUD crowding (body + 6 weapons + face + bars) |
| M-10 | medium | gap | Reappear “nearby” range; fresh-contact rising edge |
| M-11 | medium | gap | Tickler voluntary release |
| M-12 | medium | gap | Names can collide; only Elara reserved |
| M-13 | medium | art vs ID | Desat palette + rose flash vs two team rims |
| M-14 | medium | gap | Elara base stats 1–5 unspecified |
| M-15 | medium | gap | Shop is buy + tier-gated; prices missing |
| M-16 | medium | gap | XP / level-up source; respec |
| M-17 | medium | gap | Join-order ties (simultaneous first touch) |
| M-18 | medium | feasibility | Hair vs neck socket on 12 Amateur looks |
| M-19 | medium | gap | Knee/armpit/flank openings vs “one armor overlay” |
| M-20 | medium | gap | Match stall via chained 20s vanish |
| M-21 | medium | gap | Player has no AI role; “bag per side of 6” |
| M-22 | medium | gap | Character roster implied by base stats / choose-character |
| L-01 | low | tone | “Laser-tag” vs grimdark fantasy |
| L-02 | low | gap | No jump/crouch in the four-clip set |
| L-03 | low | gap | Maps 2–4 unnamed |
| L-04 | low | naming | Struggle vs Escape as the stat name |
| L-05 | low | gap | “45+” looks is not an exact catalog size |
| L-06 | low | note | Age lock (Elara 21) is a content-rating constraint |

---

## Blockers

These stop a faithful Amateur combat/match loop. Do not guess in code.

### B-01 — Match win / tap-out aftermath never defined

- **Severity:** high (was blocker; win conditions now locked in Modes)
- **Type:** remaining gaps after the four-mode lock
- **Evidence:** Modes now define Team/FFA × Timed/Quick. Quick: spectate, last active team/fighter. Timed: timer score, clean respawn. Elevator still says “battle royale.”
- **Why it matters:** Timer length, respawn delay, spawn-camp after delay, and occupancy `RespawnDelay` / `Spectating` are still unspecified. “No fifth KO anim” vs Quick spectate: no corpse required.
- **Recommended fix:** Implement Modes as the win bible. Occupancy adds `RespawnDelay` (Timed, contact ignored) and `Spectating` (Quick). Coins kept win or lose. No shrinking zone / loot (H-01, MD names). Numbers: `OPEN_QUESTIONS.md` MQ-*.
- **See also:** S-09, MD-02…MD-07.

### B-02 — Occupancy: peel, mutual tickle, one role per body

- **Severity:** blocker
- **Type:** missing edge case
- **Evidence:**
  - Becoming tickler: rear-touch / pack contact starts a duel.
  - Duel: ticklers drain, ticklee taps escape.
  - The only crowd-control in the bible is tickle. There is no shove, stun, or ranged peel.
  - No rule for: tickling a tickler; being tickler and ticklee at once; two enemy packs on one body; tickling a teammate.
- **Why it matters:** If busy ticklers cannot be grabbed, a 6-stack is unbreakable except via the escape bar (which B-04 may also make impossible). If anyone can grab anyone at any time, join lists and sockets have no owner.
- **Recommended fix:** One occupancy per fighter: `Free` | `Tickler(target)` | `Ticklee` | `Vanished` | `TappedOut` | `RespawnDelay` (Timed) | `Spectating` (Quick) | `NudgeBeat` (pile slide, not an extra ignore). Pairwise `NudgeCancelCD` is a flag on a pair, not occupancy. Soft-state exclusivity: **SS-01**.
  - Enemies may start a tickle on a `Tickler` (rear, or pack 2+ in **team**). That fighter is removed from the old join list (compact + promote as locked; FFA list was cap 1) and becomes `Ticklee`. That is peel (MD-11). It uses existing grab rules; it is not a new verb.
  - A `Ticklee` cannot start a tickle.
  - `Vanished` / `TappedOut` / `RespawnDelay` / `Spectating` cannot be grabbed.
  - Teammates are never valid tickle targets (**team modes**, now locked). FFA: everyone else is valid.
  - Two enemy teams cannot share one ticklee.

### B-03 — Movement during duel vs contact-must-hold

- **Severity:** blocker
- **Type:** missing edge + phone/3D feasibility
- **Evidence:**
  - Pack requires **actually touching** (not proximity). Drop to 1 snaps facing.
  - Map one: “dense mid-maze blockers” + “ramp chokes.”
  - Duel inputs are tap tickle / tap escape only. No rule for walk, root, or drag.
- **Why it matters:** If the ticklee can sprint through a maze while six ticklers must keep mesh contact, Amateur is unplayable on a phone thumbstick. Animation-driven motion (H-11) makes this worse.
- **Recommended fix:** On a successful grab, **soft-nudge** then **root** the ticklee and every tickler into the join-order slots until break (escape, peel to 0 ticklers, tap-out, or voluntary release — M-11). Ticklers do not path through the maze while occupancy is `Tickler`. Nudge is how “contact” stays true in clutter (SS-03). Reject kiting for Amateur.

### B-04 — “Escape damage” vs vanish: race or tug-of-war

- **Severity:** blocker
- **Type:** ambiguity that can nullify a locked system
- **Evidence:**
  - Ticklee: “tap escape; until escape bar = 100%, ticklers keep draining stamina.”
  - Tickler: “tap tickle for stamina damage + escape damage.”
  - Pack: first tickler full stamina + full escape damage; each additional **half of both types**.
  - Armor: “escape % = escape points per tap only.”
  - Weapon: “% buff to tickle technique and/or escape damage **as tickler only**.”
  - Vanish after filling the bar is locked, including for bots.
- **Why it matters:** Two readings, only one of which lets vanish survive packs.
  1. **Tug-of-war:** tickler taps subtract from the escape bar. Two ticklers at the same tap rate deal 100% + 50% = 150% drain vs 100% fill → vanish is impossible as soon as pack overpower (2+) flips. That contradicts the locked escape bible.
  2. **Race:** ticklee taps only fill the bar (never reduced by ticklers). Tickler taps only cut stamina. Pack makes tap-out more likely because stamina dies faster, not because the bar goes down. Vanish still happens if the ticklee fills 100% first.
- **Recommended fix:** Lock **race, not tug-of-war.** Keep every locked verb (tap escape, tap tickle, pack half-share, armor escape points, weapon dual %). Interpret “escape damage” as extra **stamina** pressure during the duel (the Struggle window), not as subtraction from the escape bar. Implementation name can be `struggleBonusStaminaDamage` so engineers do not re-introduce bar drain. If the Lead insists on bar drain, they must also add a pack-size fill bonus for the ticklee — that *would* be a new system, so prefer the race reading. Pack × cap math: **S-05 / S-13**. Formula order: **S-11**. List cap: **S-12**.

### B-05 — No combat formula (pools, taps, regen, cadence)

- **Severity:** blocker
- **Type:** missing edge (cannot implement numbers)
- **Evidence:**
  - Stats: Stamina / Struggle / Tickle; blocks +2 / +3.5 / +1.5; base 1–5.
  - Weapons/armor are % buffs on those tracks.
  - Ticklee flash is once per second; damage is on **tap**.
  - Vanish: “Stamina frozen (no regen) during 20s” — the only regen mention in the bible.
- **Why it matters:** There is no base stamina pool, no damage per tap, no escape points per tap, no tap rate cap, no regen rate/delay, no mapping from +2 Stamina to hit points. Phone mash vs laptop click would unbalance any uncapped tap.
- **Recommended fix:** Lead signs a one-page formula (also listed in `OPEN_QUESTIONS.md`). Amateur defaults that do not contradict the bible:
  - Both sides: max 1 **scoring** tap / 0.35s (bots humanize around this). Flash stays 1/s VFX, not the damage tick.
  - Stamina changes only on tickler scoring taps (B-04 race).
  - Regen only while `Free`, after a delay, never during vanish (locked freeze).
  - `spawnStamina = f(base Stamina, blocks, armor stamina % at spawn only)` as locked.
  - `staminaDamage = f(Tickle technique, weapon tickle %, opener vs half-share, optional struggle bonus)`.
  - `escapePoints = f(Struggle, armor escape %) per ticklee tap`; bar is 0–100 and resets on breakout (locked).
  Exact curves still need numbers from the Lead; do not ship combat without them. Operator order is **S-11** (flats then percents) — that is a blocker, not a later polish pass.

---

## High

### H-01 — “Battle royale” vs 6v6 arena sport

- **Severity:** high
- **Type:** contradiction (genre label vs rules)
- **Evidence:** Elevator: “Single-player 3D battle royale.” Modes include **Team Timed BR** and **FFA Timed BR** with timer + score + respawn. Still no shrinking zone, storm, or map loot. Team Quick is last-team-standing, not BR.
- **Recommended fix:** “Timed BR” = **timed score with respawn**, not a shrinking circle. Do not add a zone to satisfy the name. Team Quick is the Amateur default arena sport. Pitch copy can say “arena sport” without deleting the mode names.

### H-02 — Rear / front facing never defined

- **Severity:** high
- **Type:** ambiguity
- **Evidence:** “Front attack alone does not work.” “Solo: must rear-touch the target.” Pack: “facing ignored so front contact can join once 2+ are on.” Side contact is never mentioned. No cone, collider, or slope rule.
- **Recommended fix:** Author a **rear volume** on the shared rig (back collider, roughly 140° behind the ticklee’s facing, including a small slope-tolerant up/down). Solo grab requires overlap with that volume. Side-only overlap fails solo. Front overlap fails solo. Pack (2+ contact anywhere on the body capsule) ignores facing as locked. Same volumes on ramps (use capsule up-vector, not world Y, so a ramp does not turn someone’s back into their feet).

### H-03 — Pack collapse + facing snap vs promote-on-drop

- **Severity:** high
- **Type:** contradiction
- **Evidence:**
  - “If pack drops to a single tickler, facing snaps back — need rear grab again to keep tickling alone.”
  - “if they drop before tap-out, promote next still-touching; compact remaining slots.”
  - Slots 2–6 are flanks, armpits, feet, neck, knees — not “rear.”
- **Why it matters:** Strict reading: promote the flank tickler to first, then immediately fail the rear check and break the duel. Promote-on-drop and the 3-coin payout for the new first never happen unless the remaining body is already in the rear volume.
- **Recommended fix:** Facing snap applies to **new** solo grabs only. A remaining still-touching tickler is **grandfathered** until they lose contact (or vanish/tap-out/peel). They compact to slot 1 (belly) as locked and can still take the 3-coin payout. This keeps both sentences’ intent: you cannot *start* a solo front tickle, but a pack that shrinks to one does not auto-break. Real tick order and grace: **S-07**. Same-tick payout: **S-08**.

### H-04 — Armor 8 × ~+5% vs Amateur ~+30% cap

- **Severity:** high
- **Type:** contradiction
- **Evidence:** Weapons: Amateur 6, “~+5% per step,” “Amateur hard-cap ~+30% combined.” Armor: “Same ~+5% steps, Amateur ~+30% combined hard-cap” but **8** Amateur pieces. 6 × 5% = 30%. 8 × 5% = 40%.
- **Recommended fix:** Keep the **~+30% combined cap on the strongest Amateur piece** (locked). Keep 8 Amateur armors and strict monotonic steps (locked). Armor step size is therefore ~2–4% combined (the bible already allows “+2–3% split”). Weapon steps may stay ~+5%. Do not drop armor count or raise the cap.

### H-05 — Bare-hand / base attire vs 20 / 25 counts

- **Severity:** high
- **Type:** contradiction
- **Evidence:** “Weapons (20)” split 6 / 7 / 7, plus “Bare hand = 0% tier 0.” “Armor (25)” split 8 / 8 / 9, plus “Base bikini/shorts = 0%.” If defaults are members of the 20 / 25, Amateur’s first shop piece is 0% and “strictly stronger each step” fights a 0% entry. If they are extra, totals are 21 / 26.
- **Recommended fix:** Bare hand and base bikini/shorts are **tier-0 defaults outside the 20 / 25**. Shop ladders are 20 weapons and 25 armors, all ≥ some small first step. AI Amateur pool = the 6 / 8 purchasable Amateur pieces, with a defined chance to roll tier 0 (Lead: recommend yes, so early lobbies are not all +% gear). Roll weights vs Elara’s 0% start: **S-02 / S-10**.

### H-06 — AI pile cooldown vs pack overpower / pack-sticky

- **Severity:** high
- **Type:** contradiction
- **Evidence:**
  - Pack overpower needs two or more **actually touching**.
  - Bots: “Own target selection with cooldown before piling onto same ticklee.”
  - “Pack-sticky joins teammate tickle only if already in range + under same cooldown.”
- **Why it matters:** If the pile cooldown blocks the second body, packs (and therefore front-overpower) almost never happen. “Under same cooldown” can be read as “blocked by the pile cooldown” or “must share it.”
- **Recommended fix:** Rewrite pack-sticky as: **ignores the pile cooldown** when a teammate is already `Tickler` on that target and the sticky is in contact range. Other roles respect the cooldown before becoming the 2nd+ tickler. “Under same cooldown” is treated as a wording bug, not a second timer. Personal tap humanization (locked) still applies.

### H-07 — Vanish collision vs contact-ignore vs map-only

- **Severity:** high
- **Type:** ambiguity + feasibility
- **Evidence:** “Can only see/touch the map.” “Contact ignored both ways during 20s.” “cannot be seen.” On reappear: “no auto-grab from overlapping contact.”
- **Why it matters:** Solid + invisible = unseen body-block in chokes (abuse). Fully phasing including floors = fall through the map. Overlap on reappear is already anticipated, so phasing through **fighters** is implied.
- **Recommended fix:** Vanished fighters collide with **static map only**. Phase through all fighters. On reappear, if overlapping a fighter, slide to nearest navmesh / capsule-free point, then require a **fresh** grab (locked). No auto-grab.

### H-08 — Stamina regen implied, never specified

- **Severity:** high
- **Type:** missing edge
- **Evidence:** Vanish: “Stamina frozen (no regen) during 20s.” No other regen rule. Armor stamina % is “max stamina at spawn only.”
- **Recommended fix:** Regen exists, or the vanish freeze sentence is nonsense. Amateur: regen only in `Free`, after ~3s out of `Ticklee`/`Tickler`/`Vanished`, never above spawn max, **no regen as tickler** (you are busy). Rate is an open number. Do not regen during the duel (that would fight “keep draining stamina”). Low-HP vanish is **S-06** (no heal in freeze; optional reappear contact grace only).

### H-09 — Six full-size tickler bodies in dense maze chokes

- **Severity:** high
- **Type:** phone/3D feasibility
- **Evidence:** Slots 1–6 are belly, flanks, armpits, feet, neck, knees. Map one has dense blockers and ramp chokes. Teams of 6 can legally all touch one target. Phone LOD is only specified for **far** fighters.
- **Why it matters:** Six adult capsules around one body do not fit on a ramp. Wall clips, camera explosion, fill-rate spike.
- **Recommended fix:** While `Tickler`, attach to authored slot offsets; **ignore allied collision and scenery collision** for those bodies (ticklee capsule remains the maze blocker). Mild clip into the ticklee is allowed. Mechanical join list can still be 6 even if a slot is visually cramped. Do not reduce max ticklers (that would fight six sockets). This is a presentation/physics exception, not a new combat rule.

### H-10 — One tickle clip cannot cover six socket heights

- **Severity:** high
- **Type:** feasibility vs locked four-clip set
- **Evidence:** “One shared four-clip anim set… idle stand, run, tickling, laugh/squirm.” “Gear is socket overlays — never baked into clips.” Slot 4 is feet; slot 5 is neck.
- **Recommended fix:** Keep four clips (locked). Do **not** add a fifth character anim. Retarget the one tickle clip with IK / slot attach so hands reach the socket; kill root motion while attached. If feet/neck fail validation, allow **additive slot poses** that are still the tickle clip, not new character animations. Neck + hair + popup: **S-03**.

### H-11 — Contact flicker on laugh/squirm will break packs

- **Severity:** high
- **Type:** feasibility
- **Evidence:** Contact, not proximity. Ticklee plays laugh/squirm (intensity scales with stamina / tap-out). Pack drop to 1 snaps facing (H-03).
- **Recommended fix:** 200–300ms **contact grace** after overlap ends. Re-enter cancels the timer. Vanish / tap-out / peel still clear **instantly** (locked: “Escape clears every tickler instantly”). Grace is anti-flicker, not lingering contact through vanish.

### H-12 — Face popup is “player’s face” vs AI ticklees

- **Severity:** high
- **Type:** ambiguity
- **Evidence:** “In-fight laughter face popup uses player's equipped face + same blendshapes.” Also: “Ticklee can see ticklers/weapons; can look down at body; 3D face popup by stamina stage.” 11 of 12 fighters are AI.
- **Recommended fix:** Popup shows the **current ticklee’s** shared-head blendshapes. When Elara is ticklee, that is her equipped face (locked sentence). When the player is tickler on an AI, show that AI look’s face. Show the popup only for a duel the local player is in (tickler or ticklee), never for distant AI-vs-AI (phone). Popup pass **omits slot-5 weapon** (S-03).

### H-13 — Amateur ship “bare-hand” vs Amateur weapon pool of 6

- **Severity:** high
- **Type:** contradiction (slice vs ladder)
- **Evidence:** Ship: “Elara Case, bare-hand, map one… Amateur weapon/armor pools only.” Weapons: Amateur first 6 exist; Shop buys them; AI “only rolls Amateur pool.”
- **Recommended fix:** **Both are true at different layers.** Elara’s *default loadout* is bare-hand + base attire. Hub Shop still lists the Amateur 6 / 8. Matches lock whatever is equipped at Arena signup. AI rolls the Amateur pool (including optional tier 0, H-05). Do not delete the Amateur 6 from the bible to match the ship bullet.

### H-14 — 12 looks vs Elara’s reserved equipped look

- **Severity:** high
- **Type:** ambiguity
- **Evidence:** “Amateur ships 12 validated looks first; lobby never repeats the same look preset across the 12 fighters.” “Her equipped look and the name Elara Case reserved that lobby.” If Elara’s look is *outside* the 12, you need 13 presets for 12 bodies.
- **Recommended fix:** Elara’s current equipped look is **one of the 12**. AI are assigned the other 11, no repeats. Changing Elara’s look at Home reshuffles which 11 the AI may use. There is no 13th reserved mesh in Amateur.

### H-15 — Camera mode; “look down at body” on phone

- **Severity:** high
- **Type:** missing edge + feasibility
- **Evidence:** 3D arena, “can look down at body,” face popup, far LOD, no camera spec (1P vs 3P, lock-on, gyro).
- **Recommended fix:** Default **third-person over-shoulder**. On becoming `Ticklee` (local player), ease to a presentation camera that can pitch down to sockets and show the face popup. Local `Tickler` keeps over-shoulder with a slight focus on the ticklee. No full first-person in Amateur (would fight maze readability and 6-socket view).

### H-16 — Same-frame stamina 0 vs escape 100%

- **Severity:** high
- **Type:** missing edge
- **Evidence:** Tap-out at stamina 0. Vanish at escape 100%. B-04 race makes both able to complete on one frame of mashed taps.
- **Recommended fix:** Resolve **ticklee taps first** in the sim tick. If bar reaches 100%, vanish fires and remaining stamina damage from that tick is discarded. If bar is still < 100% and stamina hits 0, tap-out. Document this order next to B-04.

### H-17 — Assist coin eligibility

- **Severity:** high
- **Type:** ambiguity
- **Evidence:** “First tickler on a tap-out: 3 coins. Assist: 1 coin.” “Promote-on-drop first tickler gets the 3-coin payout if still touching at tap-out.” No rule for dropped openers, peelers, or people who touched then left.
- **Recommended fix:** Assist rule: everyone on the **tick-start snapshot** except slot 1 gets **1**; slot 1 gets **3**. Anyone who left on a **previous** tick gets **0**. Same-tick drop vs kill is **S-08** (snapshot wins over a literal “still touching this millisecond” read). No coins to the tapped-out fighter or their team.

### H-18 — “25 blocks per tier track” vs point budget

- **Severity:** high
- **Type:** contradiction / unparseable
- **Evidence:** “25 blocks per tier track.” Tiers: Amateur 1–10, Pro 11–20, Legends 21–35. “Start: 7 skill points; +1 per level to 35.” Three stats. 1 SP = 1 block is never stated. If 25 blocks × 3 stats × 3 tiers = 225 purchasable cells vs ~41 points at level 35 (`7 + 34`), most cells are unbuyable. If 25 per stat across the whole ladder, 75 cells vs 41 points is a sane specialization budget.
- **Recommended fix:** One skill point buys one block. **25 blocks per stat** across the whole game, not per tier. Tiers **gate the highest block index** you may buy (Lead picks the Amateur cap; e.g. blocks 1–10 while level ≤ 10). Base 1–5 is a pre-point character value, not a purchased block. You cannot fill all three tracks (intentional).

### H-19 — Phone: 12 near-identical humanoids, no UI blobs

- **Severity:** high
- **Type:** feasibility vs art lock
- **Evidence:** Shared body, fixed proportions, 12 female presets, “cinematic desaturated palette,” “Team ID via rim tint / armor accent (not bright UI blobs),” high-contrast silhouettes vs maze.
- **Why it matters:** On a phone, 12 same-silhouette fighters in a desat maze will swap teams visually. Rim-only ID is easy to lose in volumetric shadow.
- **Recommended fix:** Keep no-blob lock. Make team rim **strong and complementary** (e.g. cool cyan vs warm amber) on armor trim + silhouette edge, not a tiny specular. Amateur 12 looks must differ in hair mass / silhouette, not only tint. Validate team ID at playtest distance on a 6.1" class screen.

### H-20 — 10s spawn timer: combat on or off

- **Severity:** high
- **Type:** missing edge
- **Evidence:** “10s timer then run into maze.” Spawns are separated. Contact rules are global; they are not disabled for the timer.
- **Recommended fix:** During the 10s: movement allowed inside the spawn pocket, **contact ignored**, no tickle occupancy, no vanish. Timer is HUD. At 0s, gates / contact enable and the match is live. Prevents spawn-peek grabs if a route exists.

---

## Medium

### M-01 — Story mode named, zero rules

Elevator: “story mode + arena matches.” No acts, missions, or story rewards. **Fix:** Amateur ships hub + arena only. Story is out of slice; do not stub a second mode that implies save slots.

### M-02 — “Choose character” vs Elara-only Amateur

Match flow: “Choose character (Amateur: Elara).” Ship: Elara only. Cosmetics never character-gated. **Fix:** Amateur Arena skips character select and boots Elara. Keep the sentence as a later-tier hook, not an Amateur UI requirement.

### M-03 — Weapon “pack share” vs no aura

“Each tickler's buff applies only to their own taps and their pack share — no aura / no stacking off teammates' gear.” **Fix:** “Pack share” = the locked 50% additional-tickler modifier on **your** taps. Teammate weapon % never applies to you.

### M-04 — Last-known timeout vs vanish “cannot be seen”

Bots: last-known clears after a short timeout. Vanish: cannot be seen; allies cannot ghost-call; bots obey vision. **Fix:** On vanish, **immediately** clear last-known for that fighter for everyone. Bots may search the area as a role bias; they do not keep a hidden ping. Timeout last-known stays for ordinary break-LOS, not vanish.

### M-05 — Under-ready Arena signup has no modifier

“sign up for matches by tier (harder if under-ready).” **Fix:** Amateur only offers Amateur tier. “Under-ready” is a later-tier warning (bot stat/gear upscale). Do not let Amateur Elara queue Pro. Details in open questions.

### M-06 — Slot “flanks” is one person, not both sides

Join order slot 2 is “flanks” (plural) but only one tickler occupies it; slot 3 is already armpits. **Fix:** Slot 2 is a **single** authored offset (default right flank). Left flank is not a seventh slot. Rename in data to `slot2_flank` if needed; player-facing copy can stay “flanks.”

### M-07 — Friendly fire not explicit

Goal says “opponents.” Pack says “your team.” **Fix:** Explicit: teammates cannot be tickle targets (also B-02).

### M-08 — Volumetric grimdark vs phone 12-character budget

Art: volumetric shadows, painterly, shiny rim skin. Phone: far LOD + soft cull. **Fix:** Art bible is the **target look**. Amateur ships baked / cheap local volume around the camera, not 12-character volumetric for everyone. Do not author a second art style.

### M-09 — Duel HUD crowding

Ticklee: look down, 6 weapon meshes, face popup, stamina + escape bars, tap control, 1/s flash. **Fix:** Duel UI subset: two bars, tap control, face popup, flash. Hide non-duel chrome (map, shop, extra buttons). Bars stay brushed-metal as locked.

### M-10 — Reappear “nearby” range; fresh-contact rising edge

“Local reappear tell: sound + brief flash for nearby only.” “need fresh rear grab or pack contact.” **Fix:** Nearby = same distance band as gameplay sound (Lead number). **Fresh** = contact rising edge after reappear; bodies already overlapping do not count until they exit and re-enter (or wait out a 0.25s dead-contact, then re-enter). Aligns with no auto-grab. Low-HP freeze combo: **S-06** (recommend 0.75–1.0s post-reappear contact-ignore on top of no auto-grab).

### M-11 — Tickler voluntary release

No drop-out control. Needed if a hunter wants to peel or rotate. **Fix:** Tickler can release (same tap-and-hold or a cancel) → leave join list, compact as locked, occupancy `Free`. Bots may release per role (escape artist / hunter retarget).

### M-12 — Names can collide

“names are runtime random strings only” + only “Elara Case” reserved. **Fix:** Unique per lobby, never `Elara Case`, never empty.

### M-13 — Desat palette + rose flash vs two team rims

Ticklee flash is desat rose/magenta; team ID is also a rim. **Fix:** Team rims = cyan vs amber (H-19). Flash is a **full-body pulse overlay** once per second, not a third team rim.

### M-14 — Elara base stats 1–5 unspecified

“Characters also have base stats 1–5 per track before points.” Only one playable character in Amateur. **Fix:** Publish Elara’s three numbers (recommend a balanced 3/3/3 unless the Lead wants a story bias).

### M-15 — Shop is buy + tier-gated; prices missing

Shop: buy weapons/armors. Cosmetics: “unlock/tier gated only.” Prices “tied to ladder.” **Fix:** Both gates: must be Amateur-unlocked **and** affordable. Price table is **S-04**; monotonic with ladder.

### M-16 — XP / level-up source; respec

+1 skill point per level to 35. Home spends points. No XP, no respec. **Fix:** Open questions. Amateur can ship a stub: +1 level per match completed, no respec.

### M-17 — Join-order ties

“Join order = first-touch time.” Two contacts same sim tick. **Fix:** Deterministic: earlier input timestamp, then stable actor id (player wins ties vs bots if timestamps equal).

### M-18 — Hair vs neck socket on 12 Amateur looks

Hair “must clear neck weapon socket during laugh/squirm.” **Fix:** Validation gate, not a new anim. Long hair either bun/tied or fails ship. Do not move the neck socket (locked). Validate against the largest slot-5 weapon mesh, not the empty socket (**S-03**).

### M-19 — Knee / armpit / flank openings vs one armor overlay

Stomach + feet always open. Slots also need armpits, flanks, knees, neck. **Fix:** Armor overlay must not close those socket volumes (soft openings, locked). Knee armor cannot be a solid shell.

### M-20 — Match stall via chained 20s vanish

Six fighters cycling 20s vanish can freeze a match if tap-outs are the only clock. **Fix:** Keep 20s vanish (locked). Add a match time limit (open question) so stalling loses / draws per B-01 scoring. Amateur: recommend a hard clock.

### M-21 — Player has no AI role; “bag per side of 6”

Five roles, “mixed role bag per side of 6,” player occupies one slot. **Fix:** Mix roles across the **11 bots**. Player’s 5 teammates must not be all hunter. Enemy 6 mixed. Duplicate roles allowed. Player has no role bias.

### M-22 — Roster implied vs Elara-only

Base stats “characters,” choose character, shop never character-gated. **Fix:** Amateur has one playable character. Other “characters” are future roster on the same rig. Looks are not extra playable characters.

---

## Low

### L-01 — “Laser-tag” vs grimdark fantasy

Elevator vs art bible. **Fix:** Laser-tag describes **layout** (arena, mazes, team spawns), not neon plastic. Art bible wins on materials.

### L-02 — No jump / crouch in the four-clip set

Vertical space is ramps. **Fix:** Amateur has no jump and no crouch. Elevation = authored ramps only. Do not add clips.

### L-03 — Maps 2–4 unnamed

Four large maps; Amateur ships map one. **Fix:** Out of slice. Name them later; do not stub extra meshes.

### L-04 — Struggle vs Escape as the stat name

Stat list: “Struggle (escape) technique.” Blocks: “Escape +3.5.” **Fix:** Player-facing **Struggle**. Data field `escapeTechnique`. Bar / vanish copy stays “escape.”

### L-05 — “45+” looks is not an exact catalog size

**Fix:** Treat 45 as a minimum for the full game. Amateur is exactly 12 validated looks.

### L-06 — Age lock (Elara 21)

Content-rating / store constraint. **Fix:** Keep 21+. All fighter presentation stays the locked adult sport-fiction look. Not a combat issue.

---

## Feasibility notes (phone / 3D) that are not separate findings

- **Input:** bible assumes tap tickle / tap escape. Need a virtual stick + one action button on phone, and WASD / click-or-key on laptop (`OPEN_QUESTIONS.md`).
- **LOD:** far cheap + soft cull is locked and good; **near** pack-of-6 is the real budget spike (H-09).
- **Network:** Amateur is local single-player + AI. No netcode in slice. Do not design lag compensation yet.
- **Hub loop:** [amateur/CITY_HUB.md](amateur/CITY_HUB.md) is a Lead deliverable. **Do not** open S/MD/SS blockers against it; persist/UI gaps stay in Open questions.

## Suggested Lead accept order

1. Support blockers: **S-05, S-11, S-13** (with B-04 / B-05). **S-09** is locked for Quick; sign **MD-05** for Timed.
2. **SS-01 / SS-02** (ignore stacking) before any nudge code.
3. Mode clashes: **MD-01, MD-02, MD-03, MD-06, MD-07, MD-11**.
4. Sim tick: **S-01, S-07, S-08, S-12**, then B-02, B-03, H-16.
5. Fairness/economy: **S-02, S-04, S-06, S-10**, **MD-03**, H-18.
6. Presentation / space: **S-03**, **SS-03**, **MD-10**, H-09, H-10, H-12, H-15, H-19.
7. Remaining H / M / L as implementation reaches that system.
