# Amateur — Laugh / Squirm binds (Support)

## Deliverable
Per-look `assets/binds/laugh/<Slug>.laugh.json` for Elara Case + Amateur 12.

## Stages (stamina %)
| Stage | Stamina | Use |
|-------|---------|-----|
| s0 | ≥70 | light squirm |
| s1 | ≥40 | open laugh |
| s2 | ≥15 | hard laugh |
| s3 | <15 / tap-out | max intensity |

Params: `rate`, `amp`, `lean` (humanoid squirm), `billShake` / `billRate` (sprite billboard).

## Wiring
- `src/game/laughBind.ts` — load + stage pick
- `Humanoid.pose(..., squirm)` — ticklee clip
- `Fighter.tickBillboardAnim` — ticklee shake from bind
- Home Look **Laugh preview** uses `hubPreviewMs` and drives plaza preview occupancy via `Hub.laughing`

## Verify
Home → Look → Laugh preview; Team Quick → get tickled → intensity rises as stamina drops.
