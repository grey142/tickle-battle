import * as THREE from "three";
import { CONTACT, JOIN_MAX, PLAYER_REAR_COS, PLAYER_SLACK, REAR_COS, TICKLE_REACH } from "./constants";
import type { Fighter } from "./Fighter";

export function pairKey(a: number, b: number): string {
  return `${a}:${b}`;
}

export function touching(a: Fighter, b: Fighter): boolean {
  return a.pos.distanceTo(b.pos) <= CONTACT;
}

/** Solo tickle reach: player gets slack; rear starts use TICKLE_REACH. Pack still uses touching(). */
export function inTickleReach(attacker: Fighter, target: Fighter, rear: boolean): boolean {
  const d = attacker.pos.distanceTo(target.pos);
  if (d <= CONTACT) return true;
  if (!attacker.isPlayer) return false;
  if (rear) return d <= TICKLE_REACH;
  return d <= CONTACT + PLAYER_SLACK;
}

export function isRear(attacker: Fighter, target: Fighter): boolean {
  const to = attacker.pos.clone().sub(target.pos);
  to.y = 0;
  const dist = to.length();
  if (dist < 1e-6) return true;
  to.normalize();
  const tgtBack = target.forward().multiplyScalar(-1);
  const need = attacker.isPlayer ? PLAYER_REAR_COS : REAR_COS;
  if (tgtBack.dot(to) >= need) return true;
  // Walked through the back and slightly overlapped: still rear-valid.
  if (dist < 0.5 && attacker.forward().dot(target.forward()) > 0.55) return true;
  return false;
}

export function canSeeCombat(f: Fighter): boolean {
  return f.occupancy !== "vanished" && f.occupancy !== "tapped" && f.occupancy !== "spectate";
}

export function isActive(f: Fighter): boolean {
  return f.occupancy !== "tapped" && f.occupancy !== "spectate";
}

export function teammatesOn(fighters: Fighter[], target: Fighter, team: number): Fighter[] {
  return fighters.filter(
    (f) =>
      f.team === team &&
      f.id !== target.id &&
      canSeeCombat(f) &&
      f.occupancy !== "ticklee" &&
      touching(f, target),
  );
}

export function packReady(fighters: Fighter[], actor: Fighter, target: Fighter): boolean {
  const n = teammatesOn(fighters, target, actor.team).length;
  return n >= 2;
}

export function listCapOk(list: number[]): boolean {
  return list.length < JOIN_MAX;
}
