# Tickle Battle — Design docs

Locked Amateur rules live here. The playable prototype is in `../src` (Vite + Three.js Team Quick).

| Doc | Role |
| --- | --- |
| [DESIGN_BIBLE.md](DESIGN_BIBLE.md) | Source of truth. Do not silently “fix” locked rules in code. |
| [amateur/CITY_HUB.md](amateur/CITY_HUB.md) | Lead Amateur hub loop (plaza, Home/Shop/Arena, persist). Reference only. |
| [INCONSISTENCY_REPORT.md](INCONSISTENCY_REPORT.md) | Audit: contradictions, gaps, phone/3D feasibility. Each finding has a recommended resolution. |
| [OPEN_QUESTIONS.md](OPEN_QUESTIONS.md) | Decisions the bible does not make that implementation still needs. |
| [AMATEUR_TEST_PLAN.md](AMATEUR_TEST_PLAN.md) | Playtests aimed at the highest-severity issues. |
| [KNOWN_GAPS.md](KNOWN_GAPS.md) | What the playable prototype implements vs stubs. |

Read order for a new engineer: bible (including **Modes** and **soft-nudge**) → Support hunts S-01…S-13 → mode hunts MD-01…MD-12 → **SS-01…SS-05** → rest of the report → open questions → test plan.
