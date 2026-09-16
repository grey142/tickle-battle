# Tickle Battle — Design Bible (locked Amateur rules)

## Elevator pitch
Single-player 3D battle royale for phones and laptops. Player + 11 AI bots in large laser-tag arenas (default **Team Quick** 6v6; three other Arena modes). Goal: tickle opponents' stamina to zero so they tap out. Futuristic sport fiction with story mode + arena matches.

## Art bible
- One shared style for everything: 3D grimdark futuristic fantasy, textured semi-realistic / painterly over sharp anatomy.
- Natural rim lighting, volumetric shadows, tactile materials (leather grain, brushed metal, woven cloth), cinematic desaturated palette, shiny skin from rim light.
- High-contrast silhouettes vs maze for phone readability.
- Team ID via rim tint / armor accent (not bright UI blobs).
- Ticklee flash: desaturated rose/magenta once per second — not candy pink.
- Laughter face stages: painterly, readable — no cartoon emotes.
- Base bikini/shorts use same woven-cloth grain as later armor.
- HUD bars: brushed-metal frames, soft volumetric fill — not flat arcade meters.
- Bare-hand weapon and first maze share the material kit.

## Shared body / cosmetics
- All characters humanoid: two arms, two legs, same body style / fixed proportions.
- Cosmetics (weapons, armor, face/hair/eyes) work on every character.
- Fantasy/cyborg looks = materials + cosmetics on shared rig, not unique meshes.
- One socket map: belly, flanks, armpits, feet, neck, knees (tickler order 1–6) + single armor overlay.
- Armor always leaves stomach and bare feet visible; one armor at a time; fully hides base bikini/shorts under overlay.
- Face/hair cosmetics head-only; never move neck socket or armor overlay.
- Hair must clear neck weapon socket during laugh/squirm anims.
- Shop pieces unlock/tier gated only — never character-gated.
- Team rim/accent is a separate layer from shop armor/hair.
- Skin tone, hair color, eye color = tint ids in preset schema (no extra meshes per color).
- Curated face/hair/eye set; every combo validated on laugh/squirm before ship.
- Home confirm preview plays short laugh/squirm on live equipped look before save.
- In-fight laughter face popup uses player's equipped face + same blendshapes.
- Elara Case: player character, human only, 21yo. Her equipped look and the name "Elara Case" reserved that lobby (AI cannot roll them).
- 45+ female looks as presets on shared rig; base attire bikini top + sport shorts; diverse skin/face/hair/eyes; names are runtime random strings only (not in preset).
- Amateur ships 12 validated looks first; lobby never repeats the same look preset across the 12 fighters.
- One shared four-clip anim set for every look: idle stand, run, tickling, laugh/squirm. Character only in frame (no props/scenery). Gear is socket overlays — never baked into clips.
- Tickler plays tickle clip; ticklee plays laugh/squirm in-scene — never paired two-body baked clips.
- Tap-out and stamina laughter stages = intensity on the one laugh/squirm clip only (no fifth KO anim).
- Blendshapes on shared head before face/hair variants ship.

## City hub
- One city hub mesh with Home, Shop, and Arena as rooms/doors (not three separate maps).
- Home: change weapon/armor, spend skill points, customize appearance.
- Shop: buy tickle weapons and armors.
- Arena: sign up for matches by tier (harder if under-ready). Mode select: default **Team Quick**; Team Timed BR, FFA Timed BR, and FFA Quick are opt-in.
- **Amateur loop spec (Lead):** [amateur/CITY_HUB.md](amateur/CITY_HUB.md) — plaza + three rooms, boot/return, persist contract. Does not replace combat/escape/mode locks above.

## Match flow
- Choose character (Amateur: Elara) and enter battle; 10s timer then run into maze.
- Four large maps; Amateur ships map one first.
- Map one: separated **team** spawns (team modes), dense mid-maze blockers, at least two vertical layers with ramp chokes, enough sight blockers that all 12 are not constantly visible. FFA uses scattered solo pads on the same mesh, not team doors.
- Phone: far fighters cheaper LOD + soft cull behind blockers.

## Modes (locked Amateur)
Four modes. **Combat, escape vanish, gear lock, Amateur ~+30% caps, and skill math are the same in every mode.** Only win condition and respawn change — except the FFA exceptions called out below (pack off, join-list cap 1, no assists, solo spawns). Those FFA pins are mode rules, not a second combat bible.

1. **Team Timed BR** — 6v6. Tap-out and respawn. Win when the timer ends: higher **team** tap-out count wins.
2. **Team Quick** — 6v6. One life. Last team with **active** players (not tapped-out) wins.
3. **FFA Timed BR** — everyone alone (player + 11 AI, no teams). Tap-out and respawn. Win when the timer ends: higher **personal** tap-out count wins.
4. **FFA Quick** — everyone alone. One life. Last fighter standing (not tapped-out) wins.

Pins:
- Amateur **ships Team Quick first**. Arena **defaults to Team Quick**. The other three are opt-in.
- **Timed BR respawn** (both Timed modes): **clean** — full stamina, empty escape bar, no vanish carryover, need a **fresh grab** (no leftover overlap). Land **not on the pile**. **Team Timed** uses **team spawn**. **FFA Timed** uses a **scattered solo pad** (not team doors). **Short respawn delay**; contact ignored at spawn until that delay ends.
- **Quick tap-outs:** out until match end (**spectate only**).
- **Quick** ends the **moment** the win condition hits — do not wait out a 20s vanish; the mid-vanish window **closes**.
- **Team modes:** no friendly tickles.
- **FFA:** pack-overpower **off** (rear grab only); join list **hard-cap 1**; **no assists** (coins and Timed score only to the **single tickler**); scattered solo spawns, not team doors.
- **Timed BR score:** 1 point per tap-out to the tickler’s **team** (Team Timed) or to **self** (FFA Timed). Assists **do not** double-count win score. Timer ties = **draw** for Amateur.

Vanished fighters still count as **active** / standing until a win condition actually hits (then Quick closes the vanish window). Tapped-out fighters are not active.

## Combat — becoming tickler
- Front attack alone does not work.
- Solo: must rear-touch the target.
- Pack overpower (**team modes only**): two or more of your team **actually touching** the target (contact, not proximity) flips multi-tickler; facing ignored so front contact can join once 2+ are on.
- If pack drops to a single tickler, facing snaps back — need rear grab again to keep tickling alone.
- **FFA:** pack-overpower off; rear grab only; join list hard-cap 1 (see Modes). Extra contact cannot attach or steal the socket.
- Team modes: no friendly tickles. FFA: every other fighter is a valid target.
- Escape clears every tickler instantly; join list clears; no lingering contact through vanish.

## Combat — soft-nudge clear-space
When a tickle **starts** near walls/floors, **soft-nudge** the whole pile (ticklee + current join list) as **one unit** into clear space **before** tickle/laugh anims lock.
- Prefer **horizontal**. **Hard-cap** travel distance. **No teleport.**
- **Freeze join/drop** and **tickle/escape taps** for the nudge beat only. Successful nudge **keeps join-order sockets**. Cams follow the pile.
- Slide **only through empty space**: no shoving bystanders; **not into** Timed BR spawn contact-ignore (or the match-start spawn pocket); **never** off ramp edges or through layer gaps — **cancel instead**.
- If no legal clear spot inside the cap: **cancel the grab clean**. Stamina and escape **untouched**. Short **re-grab cooldown** — cooldown **only on cancel**, **not** after a successful nudge.
- Mid-fight **joiner** that would clip: **micro-nudge** under the **same distance cap**, or **reject that join** (list unchanged). Reject-join is **not** a grab cancel and does **not** apply re-grab cooldown.
- **Soft-state anti-stack (locked):** the 20s vanish contact-ignore, Timed BR spawn contact-ignore, and nudge-cancel re-grab cooldown are **exclusive — never additive.** A fighter is in at most one. Vanish **replaces** a nudge (join list clears, **no** cancel cooldown). Spawn-ignore: grabs/nudges **do not start** (no cancel cooldown). Cancel cooldown is **pairwise** (that tickler → that ticklee), not a third global ignore, and is **cleared** (not paused) if vanish or spawn-ignore begins. Nudge beat is pile tap/join freeze only — **not** extra contact-ignore stacked on vanish or spawn.

## Combat — tickle / escape duel
- Ticklee: once-per-second pink/desat-rose flash; tap escape; until escape bar = 100%, ticklers keep draining stamina.
- Tickler: tap tickle for stamina damage + escape damage.
- Multi-tickler damage: first tickler deals full stamina + full escape damage; each additional tickler deals half of both types.
- Join order = first-touch time. First tickler (belly slot + 3-coin payout) = opener while still touching; if they drop before tap-out, promote next still-touching; compact remaining slots. Rejoin appends at end (no reclaiming old slot).
- Animation slots by join order: 1 belly, 2 flanks, 3 armpits, 4 feet, 5 neck, 6 knees. FFA uses slot 1 only (join-list cap 1).
- Ticklee can see ticklers/weapons; can look down at body; 3D face popup by stamina stage.

## Escape vanish (after filling escape bar)
- Break tickle; 20s map-only: cannot tickle, cannot be seen, cannot see anyone else (team-blind too — allies cannot ghost-call).
- Can only see/touch the map.
- Stamina frozen (no regen) during 20s.
- Contact ignored both ways during 20s.
- Escape bar resets to empty on breakout.
- On reappear: no auto-grab from overlapping contact — need fresh rear grab, or (team modes only) pack contact. FFA reappear is rear-only.
- Local reappear tell: sound + brief flash for nearby only.
- 20s countdown HUD-only for escaped player (no map ping for others).
- Armor escape % does NOT change vanish duration/freeze/contact-ignore — only escape points per tap.

## Stats / progression
- Stats: Stamina, Struggle (escape) technique, Tickle technique.
- Blocks: Stamina +2 / Escape +3.5 / Tickle +1.5 per block; 25 blocks per tier track.
- Start: 7 skill points; +1 per level to 35.
- Tiers: Amateur 1–10, Pro 11–20, Legends 21–35.
- Characters also have base stats 1–5 per track before points.

## Economy
- First tickler on a tap-out: 3 coins. Assist: 1 coin (**team modes**). FFA: no assists — coins only to the single tickler (the 3, not 3+1).
- Promote-on-drop first tickler gets the 3-coin payout if still touching at tap-out (team modes; FFA join-list cap 1 has no promote).
- Timed BR **win score** is 1 per tap-out (assists never add a second win point). Coins and win score are separate.

## Weapons (20)
- Melee only, tickle-themed, no gore, no sharp edges (even decorative), no ranged.
- Soft props (feathers, brushes, fabric, etc.) on the six sockets.
- % buff to tickle technique and/or escape damage **as tickler only**.
- Bare hand = 0% tier 0.
- Split: Amateur first 6 / Pro next 7 / Legends last 7.
- Strictly stronger each step (at least one buff up, no downgrade on the other).
- ~+5% per step on one buff (or +2–3% split); Amateur hard-cap ~+30% combined.
- One weapon equipped; lock at Arena signup (no mid-fight swap).
- Each tickler's buff applies only to their own taps and their pack share — no aura / no stacking off teammates' gear.
- Mid-fight ticklee sees each tickler's own equipped mesh on join-order socket.
- Prices tied to ladder; Amateur AI only rolls Amateur pool.

## Armor (25)
- Tickle-themed cosmetics; no sharp, no gore; stomach + bare feet always open.
- % buff to stamina and/or escape **as ticklee only** (never as tickler).
- Base bikini/shorts = 0%.
- Split: Amateur 8 / Pro 8 / Legends 9.
- Same ~+5% steps, Amateur ~+30% combined hard-cap.
- One armor + one weapon together; ladders independent (armor never grants tickle technique; weapon never grants stamina).
- Stamina % = max stamina at spawn only (Timed BR **clean respawn** is a new spawn and re-applies this; vanish reappear is **not** a spawn and does not). Escape % = escape points per tap only — does not blunt incoming tickle damage outside that.
- Soft/flexible openings so laugh/squirm never clips.
- Lock at Arena signup; vanish rules untouched by armor %.
- Amateur AI only rolls Amateur armor pool.

## Bots / AI
- Role bias per bot: hunter, flanker, ambusher, escape artist, pack sticky + personal path seed.
- Mixed role bag per side of 6 — no all-hunter teams. (Team modes. FFA has no sides: mix the 11 bots; pack-sticky has no pack to join.)
- Own target selection with cooldown before piling onto same ticklee.
- Obey same vision rules as player — no cheats through vanish or walls.
- Ambusher/flanker seeds prefer ramps and back routes.
- No valid target: patrol own seeded zone; last-known clears after short timeout.
- Humanized imperfect tap timing on tickle/escape.
- Pack-sticky joins teammate tickle only if already in range + under same cooldown.
- Bots use full escape bible (vanish, freeze, fresh-grab).

## Amateur ship slice (lead priority)
- Elara Case, bare-hand, map one, **Team Quick** 6v6 AI (Arena default), shared cosmetics subset, Home/Shop/Arena shells on one hub, Amateur weapon/armor pools only.
- Other three modes are opt-in (rules locked; playable graybox may follow Team Quick).
- Hub loop: [amateur/CITY_HUB.md](amateur/CITY_HUB.md).
