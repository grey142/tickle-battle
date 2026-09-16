import * as THREE from "three";
import { BAIT_GRACE, BAIT_X, BAIT_Z, SPEED, PILE_CD, TAP_CD } from "./constants";
import type { Fighter } from "./Fighter";
import type { MapWorld } from "./MapWorld";
import { canSeeCombat, isActive, touching } from "./combatUtil";

export function tickBot(
  bot: Fighter,
  fighters: Fighter[],
  map: MapWorld,
  dt: number,
  countdown: number,
  liveT: number,
  startTickle: (a: Fighter, b: Fighter) => boolean,
  tryJoin: (a: Fighter, b: Fighter) => boolean,
  tapTickle: (a: Fighter) => void,
  tapEscape: (a: Fighter) => void,
  now: number,
): void {
  if (!isActive(bot) || bot.isPlayer) return;
  bot.pileTimer = Math.max(0, bot.pileTimer - dt);

  if (bot.occupancy === "ticklee") {
    if (!bot.scriptHold && Math.random() < 0.028) tapEscape(bot);
    return;
  }
  if (bot.occupancy === "tickler" || bot.occupancy === "nudge") {
    if (bot.scriptHold) return;
    const victim = fighters.find((f) => f.id === bot.joinOn);
    const rate = victim?.isPlayer ? 0.32 : 0.2;
    if (Math.random() < rate) tapTickle(bot);
    return;
  }
  if (bot.occupancy === "vanished") {
    wander(bot, map, dt);
    return;
  }

  if (countdown > 0) {
    if (bot.bait) parkBait(bot, map, dt);
    else millSpawn(bot, map, dt);
    return;
  }

  if (bot.bait) {
    parkBait(bot, map, dt);
    return;
  }

  const enemies = fighters.filter((f) => f.team !== bot.team && isActive(f) && f.occupancy !== "vanished");
  const player = fighters.find((f) => f.isPlayer && isActive(f) && f.occupancy !== "vanished");
  const allyDuel = fighters.find(
    (f) => f.team === bot.team && f.occupancy === "tickler" && f.id !== bot.id,
  );
  let target: Fighter | null = null;

  if (player && bot.team !== player.team && bot.role === "hunter" && player.occupancy === "free") {
    target = player;
  }

  if (!target && allyDuel && (bot.role === "sticky" || bot.pileTimer <= 0)) {
    const t = fighters.find((f) => f.id === allyDuel.joinOn);
    if (t && t.occupancy === "ticklee") {
      if (touching(bot, t)) {
        if (bot.role === "sticky" || bot.pileTimer <= 0) {
          if (tryJoin(bot, t) || startTickle(bot, t)) {
            if (bot.role !== "sticky") bot.pileTimer = PILE_CD;
          }
        }
        return;
      }
      if (bot.pos.distanceTo(allyDuel.pos) < 9) target = t;
    }
  }

  if (!target) {
    if (player && bot.team !== player.team && bot.role === "hunter") {
      if (player.occupancy === "tickler" || player.occupancy === "nudge") {
        const npcs = enemies.filter((f) => !f.isPlayer && !f.bait);
        target = nearest(bot, npcs.length ? npcs : enemies.filter((f) => !f.bait));
      } else if (player.occupancy === "ticklee") {
        target = player;
      } else {
        target = player;
      }
    } else {
      const npcs = enemies.filter((f) => !f.isPlayer && !(f.bait && bot.team === 0 && liveT < BAIT_GRACE));
      target = nearest(bot, npcs.length ? npcs : enemies.filter((f) => !(f.bait && liveT < BAIT_GRACE)));
    }
  }

  if (target?.bait && bot.team === 0 && liveT < BAIT_GRACE) {
    const other = enemies.filter((f) => !f.bait && !f.isPlayer);
    target = nearest(bot, other);
  }

  if (!target) {
    wander(bot, map, dt);
    return;
  }

  const behind = target.pos.clone().add(target.forward().multiplyScalar(-1.15));
  if (bot.role === "ambusher" || bot.role === "flanker") {
    behind.add(new THREE.Vector3(-target.forward().z, 0, target.forward().x).multiplyScalar(1.4));
  }
  steerTo(bot, map, map.laneRoute(bot.pos, behind), dt);

  if (touching(bot, target)) {
    if (target.occupancy === "ticklee") {
      tryJoin(bot, target);
    } else {
      startTickle(bot, target);
    }
  }
  void TAP_CD;
  void now;
}

function parkBait(bot: Fighter, map: MapWorld, dt: number) {
  const bait = new THREE.Vector3(BAIT_X, bot.pos.y, BAIT_Z);
  if (bot.pos.distanceToSquared(bait) > 0.35) {
    steerTo(bot, map, bait, dt);
  }
  bot.yaw = -Math.PI / 2;
  bot.pos.y = map.groundY(bot.pos.x, bot.pos.z);
}

function nearest(bot: Fighter, list: Fighter[]): Fighter | null {
  let best: Fighter | null = null;
  let d = 1e9;
  for (const f of list) {
    const dd = bot.pos.distanceToSquared(f.pos);
    if (dd < d) {
      d = dd;
      best = f;
    }
  }
  return best;
}

function steerTo(bot: Fighter, map: MapWorld, dest: THREE.Vector3, dt: number) {
  const dir = dest.clone().sub(bot.pos);
  dir.y = 0;
  if (dir.lengthSq() < 0.04) return;
  dir.normalize();
  const sp = SPEED * (bot.role === "hunter" ? 1.05 : 0.95);
  const tryStep = (dx: number, dz: number) => {
    const r = map.resolve(bot.pos.x + dx, bot.pos.z + dz, bot.pos.y);
    const moved = Math.hypot(r.x - bot.pos.x, r.z - bot.pos.z);
    return { r, moved };
  };
  const ahead = tryStep(dir.x * sp * dt, dir.z * sp * dt);
  let step = dir;
  let chosen = ahead;
  if (ahead.moved < sp * dt * 0.35) {
    const left = new THREE.Vector3(-dir.z, 0, dir.x);
    const a = tryStep(left.x * sp * dt, left.z * sp * dt);
    const b = tryStep(-left.x * sp * dt, -left.z * sp * dt);
    if (a.moved >= b.moved && a.moved > ahead.moved) {
      chosen = a;
      step = left;
    } else if (b.moved > ahead.moved) {
      chosen = b;
      step = left.clone().multiplyScalar(-1);
    }
  }
  bot.yaw = Math.atan2(-step.x, -step.z);
  bot.pos.x = chosen.r.x;
  bot.pos.z = chosen.r.z;
  bot.pos.y = map.groundY(bot.pos.x, bot.pos.z);
}

function wander(bot: Fighter, map: MapWorld, dt: number) {
  bot.yaw += (Math.random() - 0.5) * 1.8 * dt;
  const f = bot.forward();
  const nx = bot.pos.x + f.x * SPEED * 0.55 * dt;
  const nz = bot.pos.z + f.z * SPEED * 0.55 * dt;
  const r = map.resolve(nx, nz, bot.pos.y);
  bot.pos.x = r.x;
  bot.pos.z = r.z;
  bot.pos.y = map.groundY(bot.pos.x, bot.pos.z);
  void canSeeCombat;
}

function millSpawn(bot: Fighter, map: MapWorld, dt: number) {
  if (!map.inSpawnPocket(bot.pos, bot.team)) {
    const home = bot.team === 0 ? map.spawnA : map.spawnB;
    if (bot.pos.distanceToSquared(home) > 0.09) {
      steerTo(bot, map, map.laneRoute(bot.pos, home), dt);
    }
    return;
  }
  bot.pos.y = map.groundY(bot.pos.x, bot.pos.z);
}
