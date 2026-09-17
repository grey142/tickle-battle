import * as THREE from "three";
import { CAPSULE_R, NUDGE_CAP } from "./constants";

export type Box = { minx: number; maxx: number; minz: number; maxz: number; miny: number; maxy: number };

export class MapWorld {
  group = new THREE.Group();
  walls: Box[] = [];
  decks: Box[] = [];
  ramp = { minx: -6, maxx: 2, minz: 12.2, maxz: 16.6, y0: 0, y1: 3.4 };
  spawnA = new THREE.Vector3(-18, 0, 0);
  spawnB = new THREE.Vector3(18, 0, 0);
  soloPads: THREE.Vector3[] = [
    new THREE.Vector3(-18, 0, 0),
    new THREE.Vector3(18, 0, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(-10, 0, 12),
    new THREE.Vector3(10, 0, -12),
    new THREE.Vector3(-12, 0, -8),
    new THREE.Vector3(12, 0, 6),
    new THREE.Vector3(-4, 0, -14),
    new THREE.Vector3(6, 0, 12),
    new THREE.Vector3(0, 0, 16),
    new THREE.Vector3(-8, 0, 4),
    new THREE.Vector3(8, 0, -4),
  ];
  private matMetal: THREE.MeshStandardMaterial;
  private matDark: THREE.MeshStandardMaterial;
  private matFloor: THREE.MeshStandardMaterial;

  constructor() {
    this.matMetal = new THREE.MeshStandardMaterial({
      color: 0x5a534c,
      metalness: 0.72,
      roughness: 0.38,
    });
    this.matDark = new THREE.MeshStandardMaterial({
      color: 0x2a2624,
      metalness: 0.55,
      roughness: 0.5,
    });
    this.matFloor = new THREE.MeshStandardMaterial({
      color: 0x3a3530,
      metalness: 0.4,
      roughness: 0.62,
    });
    this.build();
  }

  private addWall(x: number, z: number, w: number, d: number, h = 3.6, y = 0) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), this.matMetal);
    mesh.position.set(x, y + h / 2, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    this.group.add(mesh);
    this.walls.push({
      minx: x - w / 2,
      maxx: x + w / 2,
      minz: z - d / 2,
      maxz: z + d / 2,
      miny: y,
      maxy: y + h,
    });
  }

  private addDeck(x: number, z: number, w: number, d: number, y: number, t = 0.35) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, t, d), this.matDark);
    mesh.position.set(x, y + t / 2, z);
    mesh.receiveShadow = true;
    this.group.add(mesh);
    this.decks.push({
      minx: x - w / 2,
      maxx: x + w / 2,
      minz: z - d / 2,
      maxz: z + d / 2,
      miny: y,
      maxy: y + t + 0.05,
    });
  }

  private build() {
    const floor = new THREE.Mesh(new THREE.BoxGeometry(52, 0.4, 40), this.matFloor);
    floor.position.y = -0.2;
    floor.receiveShadow = true;
    this.group.add(floor);

    // Outer shell
    this.addWall(0, -19.5, 52, 1.2, 4.2);
    this.addWall(0, 19.5, 52, 1.2, 4.2);
    this.addWall(-25.5, 0, 1.2, 40, 4.2);
    this.addWall(25.5, 0, 1.2, 40, 4.2);

    // Spawn pockets
    this.addWall(-18, -8, 12, 1, 3.2);
    this.addWall(-18, 8, 12, 1, 3.2);
    this.addWall(18, -8, 12, 1, 3.2);
    this.addWall(18, 8, 12, 1, 3.2);

    // Sight blockers with a ground-level mid lane (z ≈ 0) so spawn A can walk to spawn B
    this.addWall(-8, -6.6, 1.4, 6.2, 3.4);
    this.addWall(-8, 6.6, 1.4, 6.2, 3.4);
    this.addWall(8, -6.6, 1.4, 6.2, 3.4);
    this.addWall(8, 8.4, 1.4, 6.2, 3.4);
    this.addWall(-6, 10, 8, 1.3, 3.4);
    this.addWall(8, 10, 8, 1.3, 3.4);
    this.addWall(-4, -10, 10, 1.3, 3.4);
    this.addWall(6, -10, 1.3, 6, 3.4);
    this.addWall(-12, 8, 6, 1.2, 3.2);
    this.addWall(12, -6, 6, 1.2, 3.2);

    const lane = new THREE.Mesh(
      new THREE.BoxGeometry(32, 0.05, 1.7),
      new THREE.MeshStandardMaterial({
        color: 0x3a322c,
        emissive: 0x5a4030,
        emissiveIntensity: 0.35,
        metalness: 0.2,
        roughness: 0.7,
      }),
    );
    lane.position.set(0, 0.03, 0);
    lane.receiveShadow = true;
    this.group.add(lane);

    this.addLaneMarks();

    // Pillars
    this.addWall(-3, 5.5, 1.6, 1.6, 4);
    this.addWall(3, -5.5, 1.6, 1.6, 4);

    // Upper walkway lives north of the mid lane
    this.addDeck(4, 14.4, 12, 4.8, 3.35);
    const ramp = new THREE.Mesh(new THREE.BoxGeometry(8.4, 0.28, 3.4), this.matDark);
    ramp.position.set(-2, 1.7, 14.4);
    ramp.rotation.z = -0.38;
    ramp.receiveShadow = true;
    this.group.add(ramp);

    const rim = new THREE.PointLight(0x886655, 12, 28, 2);
    rim.position.set(0, 6, 0);
    this.group.add(rim);
  }

  private addLaneMarks() {
    const glow = (tint: number) =>
      new THREE.MeshStandardMaterial({
        color: 0x2a2624,
        emissive: tint,
        emissiveIntensity: 0.42,
        metalness: 0.2,
        roughness: 0.7,
      });
    const cyan = glow(0x5ec8d8);
    const amber = glow(0xd4a25a);
    const place = (x: number, towardPlusX: boolean, mat: THREE.Material) => {
      const m = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.62, 3), mat);
      m.rotation.z = towardPlusX ? -Math.PI / 2 : Math.PI / 2;
      m.position.set(x, 0.12, 0);
      this.group.add(m);
    };
    place(-14.2, true, cyan);
    place(-10.4, true, cyan);
    place(14.2, false, amber);
    place(10.4, false, amber);
  }

  groundY(x: number, z: number): number {
    const r = this.ramp;
    if (x >= r.minx && x <= r.maxx && z >= r.minz && z <= r.maxz) {
      const t = (x - r.minx) / (r.maxx - r.minx);
      return THREE.MathUtils.lerp(r.y0, r.y1, t);
    }
    for (const d of this.decks) {
      if (x >= d.minx && x <= d.maxx && z >= d.minz && z <= d.maxz) return 3.45;
    }
    return 0;
  }

  inSpawnPocket(p: THREE.Vector3, team: number): boolean {
    if (team === 0) return p.x < -14 && Math.abs(p.z) < 7.2;
    return p.x > 14 && Math.abs(p.z) < 7.2;
  }

  /** Keep a fighter inside their pre-match spawn pocket (same bounds as inSpawnPocket). */
  clampSpawnPocket(x: number, z: number, team: number): { x: number; z: number } {
    const pz = THREE.MathUtils.clamp(z, -7.19, 7.19);
    if (team === 0) return { x: Math.min(x, -14.01), z: pz };
    return { x: Math.max(x, 14.01), z: pz };
  }

  resolve(x: number, z: number, y: number, radius = CAPSULE_R): { x: number; z: number } {
    let px = x;
    let pz = z;
    for (let i = 0; i < 4; i++) {
      for (const w of this.walls) {
        if (y + 1.4 < w.miny || y > w.maxy) continue;
        const dx = Math.max(w.minx - radius, Math.min(px, w.maxx + radius));
        const dz = Math.max(w.minz - radius, Math.min(pz, w.maxz + radius));
        const ox = px - dx;
        const oz = pz - dz;
        // inside expanded AABB
        const insideX = px > w.minx - radius && px < w.maxx + radius;
        const insideZ = pz > w.minz - radius && pz < w.maxz + radius;
        if (insideX && insideZ) {
          const left = px - (w.minx - radius);
          const right = w.maxx + radius - px;
          const down = pz - (w.minz - radius);
          const up = w.maxz + radius - pz;
          const m = Math.min(left, right, down, up);
          if (m === left) px = w.minx - radius - 0.001;
          else if (m === right) px = w.maxx + radius + 0.001;
          else if (m === down) pz = w.minz - radius - 0.001;
          else pz = w.maxz + radius + 0.001;
        }
        void ox;
        void oz;
      }
    }
    px = THREE.MathUtils.clamp(px, -24.6, 24.6);
    pz = THREE.MathUtils.clamp(pz, -18.6, 18.6);
    return { x: px, z: pz };
  }


  /**
   * Next short-term nav goal: mid-lane waypoints when crossing the map, then dest.
   * Keeps bots out of wall pockets that pure wall-slide cannot escape.
   */
  navWaypoint(from: THREE.Vector3, dest: THREE.Vector3): THREE.Vector3 {
    const y = dest.y;
    const cross = from.x * dest.x < 0 && Math.abs(from.x) > 4 && Math.abs(dest.x) > 2;
    if (!cross) {
      if (Math.abs(from.z) > 3.2 && Math.abs(from.x) > 2 && Math.abs(dest.z) < 2) {
        return new THREE.Vector3(from.x, y, 0);
      }
      return dest.clone();
    }
    if (Math.abs(from.z) > 1.1) {
      return new THREE.Vector3(from.x, y, 0);
    }
    const gates = from.x < dest.x
      ? [-10, -4, 0, 4, 10, dest.x]
      : [10, 4, 0, -4, -10, dest.x];
    for (const gx of gates) {
      if (from.x < dest.x && from.x < gx - 0.85) {
        return new THREE.Vector3(gx, y, 0);
      }
      if (from.x > dest.x && from.x > gx + 0.85) {
        return new THREE.Vector3(gx, y, 0);
      }
    }
    return dest.clone();
  }

  /**
   * When a path crosses the map (spawn A ↔ spawn B), pin to the open z≈0 mid-lane
   * first so wall-slide cannot trap bots in a pocket.
   */
  laneRoute(from: THREE.Vector3, dest: THREE.Vector3): THREE.Vector3 {
    return this.navWaypoint(from, dest);
  }

  blockedAt(x: number, z: number, y: number, radius = 0.9): boolean {
    const r = this.resolve(x, z, y, radius);
    return Math.hypot(r.x - x, r.z - z) > 0.04;
  }

  findNudge(
    origin: THREE.Vector3,
    radius: number,
  ): THREE.Vector3 | null {
    const scoreAt = (x: number, z: number): number => {
      const y = this.groundY(x, z);
      if (Math.abs(y - origin.y) > 0.85) return -1;
      if (this.inSpawnPocket(new THREE.Vector3(x, y, z), 0) || this.inSpawnPocket(new THREE.Vector3(x, y, z), 1)) {
        return -1;
      }
      if (this.blockedAt(x, z, y, radius)) return -1;
      let clear = 0;
      const dirs = [
        [1, 0], [-1, 0], [0, 1], [0, -1],
      ];
      for (const [dx, dz] of dirs) {
        const r = this.resolve(x + dx * 1.1, z + dz * 1.1, y, radius);
        clear += Math.hypot(r.x - x, r.z - z);
      }
      const pulled = Math.hypot(x - origin.x, z - origin.z);
      return clear - pulled * 0.2;
    };

    if (scoreAt(origin.x, origin.z) >= 0) return origin.clone();

    const dirs: [number, number][] = [];
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      dirs.push([Math.cos(a), Math.sin(a)]);
    }
    let best: THREE.Vector3 | null = null;
    let bestS = -1;
    for (let dist = 0.3; dist <= NUDGE_CAP + 0.01; dist += 0.3) {
      for (const [dx, dz] of dirs) {
        const x = origin.x + dx * dist;
        const z = origin.z + dz * dist;
        const s = scoreAt(x, z);
        if (s > bestS) {
          bestS = s;
          best = new THREE.Vector3(x, this.groundY(x, z), z);
        }
      }
    }
    return best;
  }
}
