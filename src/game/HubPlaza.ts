import * as THREE from "three";

const METAL = 0x5a534c;
const DARK = 0x2a2624;
const FLOOR = 0x3a3530;
const CYAN = 0x5ec8d8;
const AMBER = 0xd4a25a;

export type PlazaDoor = "home" | "shop" | "arena";

type Box = { minx: number; maxx: number; minz: number; maxz: number };

const CAPSULE_R = 0.42;
/** Walk-up range to interact with a door. */
export const PLAZA_DOOR_REACH = 4.55;

/** City-hub backdrop (same mesh as the overlay rooms; not a second map). */
export class HubPlaza {
  group = new THREE.Group();
  /** Door local-space centers: home left, shop right, arena forward. */
  doors: { home: THREE.Vector3; shop: THREE.Vector3; arena: THREE.Vector3 };

  private matMetal: THREE.MeshStandardMaterial;
  private matDark: THREE.MeshStandardMaterial;
  private matFloor: THREE.MeshStandardMaterial;
  private matCyan: THREE.MeshStandardMaterial;
  private matAmber: THREE.MeshStandardMaterial;
  private pickables: THREE.Object3D[] = [];
  private ray = new THREE.Raycaster();
  private ndc = new THREE.Vector2();
  private hover: PlazaDoor | null = null;
  /** Walk-up proximity (drives soft door pulse when not mouse-hovering). */
  private near: PlazaDoor | null = null;
  private doorGroups = new Map<PlazaDoor, THREE.Group>();
  /** Soft point lights on each door — pulse when near/hover. */
  private doorLights = new Map<PlazaDoor, THREE.PointLight>();
  /** Near-door floor strips that pulse with the same glow pattern. */
  private doorFloorMats = new Map<PlazaDoor, THREE.MeshStandardMaterial>();
  /** Inner threshold sills — pulse with door so Home/Shop/Arena share feel. */
  private doorSillMats = new Map<PlazaDoor, THREE.MeshStandardMaterial>();
  /** Door label planes — soft scale / opacity pulse when near/hover. */
  private doorSigns = new Map<PlazaDoor, THREE.Object3D>();
  /** Sign materials — opacity pulse beyond scale-only #33 feel. */
  private doorSignMats = new Map<PlazaDoor, THREE.MeshBasicMaterial>();
  /** Outer threshold lips (plaza-side) — pulse with inner sill. */
  private doorOuterSillMats = new Map<PlazaDoor, THREE.MeshStandardMaterial>();
  /** 0..1 approach strength for nearest door (distance ramp beyond binary near). */
  private nearStrength = 0;
  /** Simple XZ blockers for walkable plaza (walls, columns, low props). */
  private walls: Box[] = [];

  constructor() {
    this.matMetal = new THREE.MeshStandardMaterial({
      color: METAL,
      metalness: 0.72,
      roughness: 0.38,
    });
    this.matDark = new THREE.MeshStandardMaterial({
      color: DARK,
      metalness: 0.55,
      roughness: 0.5,
    });
    this.matFloor = new THREE.MeshStandardMaterial({
      color: FLOOR,
      metalness: 0.4,
      roughness: 0.62,
    });
    this.matCyan = glowMat(CYAN, 0.22);
    this.matAmber = glowMat(AMBER, 0.2);

    this.doors = {
      home: new THREE.Vector3(-13.2, 1.55, 0),
      shop: new THREE.Vector3(13.2, 1.55, 0),
      arena: new THREE.Vector3(0, 1.55, 10.2),
    };
    this.build();
  }

  private addBox(
    x: number,
    y: number,
    z: number,
    w: number,
    h: number,
    d: number,
    mat: THREE.Material,
    shadow = true,
  ): THREE.Mesh {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    mesh.position.set(x, y, z);
    if (shadow) {
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    }
    this.group.add(mesh);
    return mesh;
  }

  private build() {
    const floor = new THREE.Mesh(new THREE.BoxGeometry(28, 0.4, 22), this.matFloor);
    floor.position.y = -0.2;
    floor.receiveShadow = true;
    this.group.add(floor);

    const wallH = 4.2;
    const wallY = wallH / 2;
    const thick = 0.8;
    const doorW = 2.4;
    const doorH = 3.1;
    const half = doorW / 2;
    const halfW = 14;
    const halfD = 11;
    const zFront = halfD - thick / 2;
    const zBack = -(halfD - thick / 2);
    const xLeft = -(halfW - thick / 2);
    const xRight = halfW - thick / 2;
    const frontLen = halfW - half;
    const sideLen = halfD - half;

    // Back wall (−z). Front / sides leave gaps for the three doors.
    this.addBox(0, wallY, zBack, 28, wallH, thick, this.matMetal);

    // Front (+z) around Arena
    this.addBox(-(half + frontLen / 2), wallY, zFront, frontLen, wallH, thick, this.matMetal);
    this.addBox(half + frontLen / 2, wallY, zFront, frontLen, wallH, thick, this.matMetal);
    this.addBox(0, doorH + (wallH - doorH) / 2, zFront, doorW, wallH - doorH, thick, this.matMetal);

    // Left (−x) around Home
    this.addBox(xLeft, wallY, -(half + sideLen / 2), thick, wallH, sideLen, this.matMetal);
    this.addBox(xLeft, wallY, half + sideLen / 2, thick, wallH, sideLen, this.matMetal);
    this.addBox(xLeft, doorH + (wallH - doorH) / 2, 0, thick, wallH - doorH, doorW, this.matMetal);

    // Right (+x) around Shop
    this.addBox(xRight, wallY, -(half + sideLen / 2), thick, wallH, sideLen, this.matMetal);
    this.addBox(xRight, wallY, half + sideLen / 2, thick, wallH, sideLen, this.matMetal);
    this.addBox(xRight, doorH + (wallH - doorH) / 2, 0, thick, wallH - doorH, doorW, this.matMetal);

    this.addDoor("home", this.doors.home, Math.PI / 2, "HOME", CYAN);
    this.addDoor("shop", this.doors.shop, -Math.PI / 2, "SHOP", AMBER);
    this.addDoor("arena", this.doors.arena, Math.PI, "ARENA", 0xb8b0a4);

    // Columns + low walls so the plaza reads as a room, not a plane.
    for (const [x, z] of [
      [-6.2, -5.2],
      [6.2, -5.2],
      [-6.2, 5.2],
      [6.2, 5.2],
    ] as const) {
      this.addBox(x, 2.05, z, 0.7, 4.1, 0.7, this.matMetal);
    }
    this.addBox(0, 0.45, -6.4, 8.4, 0.9, 0.45, this.matDark);
    this.addBox(-4.8, 0.38, 3.2, 3.6, 0.76, 0.4, this.matDark);
    this.addBox(4.8, 0.38, 3.2, 3.6, 0.76, 0.4, this.matDark);

    // Overhead beams
    this.addBox(0, 4.15, -3.5, 26, 0.22, 0.45, this.matDark, false);
    this.addBox(0, 4.15, 3.5, 26, 0.22, 0.45, this.matDark, false);

    this.addBiolume();
    this.buildColliders();
  }

  /** Nearest door within reach, or null. */
  nearDoor(x: number, z: number, reach = PLAZA_DOOR_REACH): PlazaDoor | null {
    let best: PlazaDoor | null = null;
    let bestD = reach;
    for (const id of ["home", "shop", "arena"] as const) {
      const d = this.doors[id];
      const dist = Math.hypot(x - d.x, z - d.z);
      if (dist < bestD) {
        bestD = dist;
        best = id;
      }
    }
    return best;
  }

  /**
   * Capsule slide against plaza walls + outer bounds (flat floor y=0).
   * Axis-separated push so door-frame / wall corners slide instead of stick.
   */
  resolve(x: number, z: number, radius = CAPSULE_R): { x: number; z: number } {
    let px = x;
    let pz = z;
    // Seven X/Z passes — AABB slide; clears Home/Shop/Arena jamb corners beyond #73.
    for (let pass = 0; pass < 7; pass++) {
      for (const w of this.walls) {
        if (pz <= w.minz - radius || pz >= w.maxz + radius) continue;
        if (px > w.minx - radius && px < w.maxx + radius) {
          const left = px - (w.minx - radius);
          const right = w.maxx + radius - px;
          px = left < right ? w.minx - radius - 0.005 : w.maxx + radius + 0.005;
        }
      }
      for (const w of this.walls) {
        if (px <= w.minx - radius || px >= w.maxx + radius) continue;
        if (pz > w.minz - radius && pz < w.maxz + radius) {
          const down = pz - (w.minz - radius);
          const up = w.maxz + radius - pz;
          pz = down < up ? w.minz - radius - 0.005 : w.maxz + radius + 0.005;
        }
      }
    }
    const unjam = this.unjamDoorJambs(px, pz, radius);
    px = unjam.x;
    pz = unjam.z;
    // Keep player inside the hall; door centers sit on these bounds for interact.
    px = THREE.MathUtils.clamp(px, -13.28, 13.28);
    pz = THREE.MathUtils.clamp(pz, -10.28, 10.28);
    return { x: px, z: pz };
  }

  /**
   * Soft-nudge off door-frame tips when sliding into an opening.
   * AABB ends leave a sticky corner; push toward the gap center.
   */
  private unjamDoorJambs(px: number, pz: number, radius: number): { x: number; z: number } {
    const thick = 0.8;
    const halfW = 14;
    const halfD = 11;
    const doorW = 2.4;
    const half = doorW / 2;
    const jamb = 0.9;
    const open = half + jamb;
    const tip = radius + 0.5;
    const zFront = halfD - thick / 2;
    const xLeft = -(halfW - thick / 2);
    const xRight = halfW - thick / 2;

    // Arena (+z) wall ends
    if (Math.abs(pz - zFront) < tip + thick * 0.55) {
      if (px > -open - tip && px < -open + tip * 0.85) px = -open + tip * 0.44;
      else if (px < open + tip && px > open - tip * 0.85) px = open - tip * 0.44;
    }
    // Home (−x) wall ends
    if (Math.abs(px - xLeft) < tip + thick * 0.55) {
      if (pz > -open - tip && pz < -open + tip * 0.85) pz = -open + tip * 0.44;
      else if (pz < open + tip && pz > open - tip * 0.85) pz = open - tip * 0.44;
    }
    // Shop (+x) wall ends
    if (Math.abs(px - xRight) < tip + thick * 0.55) {
      if (pz > -open - tip && pz < -open + tip * 0.85) pz = -open + tip * 0.44;
      else if (pz < open + tip && pz > open - tip * 0.85) pz = open - tip * 0.44;
    }
    return { x: px, z: pz };
  }

  private addWall(minx: number, maxx: number, minz: number, maxz: number) {
    this.walls.push({ minx, maxx, minz, maxz });
  }

  private buildColliders() {
    this.walls = [];
    const thick = 0.8;
    const halfW = 14;
    const halfD = 11;
    const doorW = 2.4;
    const half = doorW / 2;
    const zFront = halfD - thick / 2;
    const zBack = -(halfD - thick / 2);
    const xLeft = -(halfW - thick / 2);
    const xRight = halfW - thick / 2;
    const frontLen = halfW - half;
    const sideLen = halfD - half;

    const jamb = 0.9; // v12: wider jamb slack + tip unjam keeps Leave/door approach clean
    this.addWall(-halfW, halfW, zBack - thick / 2, zBack + thick / 2);
    this.addWall(-(half + frontLen), -half - jamb, zFront - thick / 2, zFront + thick / 2);
    this.addWall(half + jamb, half + frontLen, zFront - thick / 2, zFront + thick / 2);
    this.addWall(xLeft - thick / 2, xLeft + thick / 2, -(half + sideLen), -half - jamb);
    this.addWall(xLeft - thick / 2, xLeft + thick / 2, half + jamb, half + sideLen);
    this.addWall(xRight - thick / 2, xRight + thick / 2, -(half + sideLen), -half - jamb);
    this.addWall(xRight - thick / 2, xRight + thick / 2, half + jamb, half + sideLen);
    for (const [x, z] of [
      [-6.2, -5.2],
      [6.2, -5.2],
      [-6.2, 5.2],
      [6.2, 5.2],
    ] as const) {
      // Slightly tighter than visual posts so approach lanes to doors snag less.
      this.addWall(x - 0.34, x + 0.34, z - 0.34, z + 0.34);
    }
    this.addWall(-4.2, 4.2, -6.7, -6.1);
    this.addWall(-6.6, -3.0, 2.9, 3.5);
    this.addWall(3.0, 6.6, 2.9, 3.5);
  }

  pickDoor(
    camera: THREE.Camera,
    clientX: number,
    clientY: number,
    el: HTMLElement,
    cardRect?: DOMRect | null,
  ): PlazaDoor | null {
    const r = el.getBoundingClientRect();
    if (r.width <= 0 || r.height <= 0) return null;
    this.ndc.set(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    this.ray.setFromCamera(this.ndc, camera);
    const hits = this.ray.intersectObjects(this.pickables, true);
    for (const h of hits) {
      let o: THREE.Object3D | null = h.object;
      while (o) {
        const room = o.userData.hubRoom as PlazaDoor | undefined;
        if (room) return room;
        o = o.parent;
      }
    }
    const overCard =
      !!cardRect &&
      clientX >= cardRect.left &&
      clientX <= cardRect.right &&
      clientY >= cardRect.top &&
      clientY <= cardRect.bottom;
    if (overCard) return null;
    camera.updateMatrixWorld();
    let best: PlazaDoor | null = null;
    let bestD = 96;
    for (const [room, g] of this.doorGroups) {
      const world = new THREE.Vector3();
      g.getWorldPosition(world);
      world.y = 1.7;
      world.project(camera);
      if (world.z > 1) continue;
      const sx = r.left + (world.x * 0.5 + 0.5) * r.width;
      const sy = r.top + (-world.y * 0.5 + 0.5) * r.height;
      const d = Math.hypot(clientX - sx, clientY - sy);
      if (d < bestD) {
        bestD = d;
        best = room;
      }
    }
    return best;
  }

  setHover(room: PlazaDoor | null) {
    if (this.hover === room) return;
    this.hover = room;
    this.applyDoorGlow(0);
  }

  /** Walk-up proximity — soft pulse on the nearest door (Arena strongest). */
  setNear(room: PlazaDoor | null) {
    if (this.near === room) return;
    this.near = room;
    if (!room) this.nearStrength = 0;
    this.applyDoorGlow(0);
  }

  /**
   * Distance-weighted approach (0..1) for the active near door.
   * Softens sill/sign/light ramp beyond binary near from #33.
   */
  setNearStrength(amount: number) {
    const next = THREE.MathUtils.clamp(amount, 0, 1);
    if (Math.abs(next - this.nearStrength) < 0.01) return;
    this.nearStrength = next;
  }

  /** Call each plaza frame for soft pulse / door light. */
  updateDoorFx(elapsed: number) {
    this.applyDoorGlow(elapsed);
  }

  private applyDoorGlow(elapsed: number) {
    // Shared pulse for Home / Shop / Arena — Arena keeps a light CTA lead.
    const pulse = 0.5 + 0.5 * Math.sin(elapsed * 7.25);
    const breath = 0.5 + 0.5 * Math.sin(elapsed * 2.35);
    for (const [id, g] of this.doorGroups) {
      const active = this.hover === id || this.near === id;
      const approach = this.hover === id ? 1 : this.near === id ? Math.max(0.12, this.nearStrength) : 0;
      const ctaBoost = id === "arena" && active ? 0.36 * approach : 0;
      // Idle breath + stronger approach past #64 for sill/sign/light/Leave CTA.
      const idle = (id === "arena" ? 0.18 : 0.138) + breath * (id === "arena" ? 0.112 : 0.078);
      const boost = this.hover === id
        ? 0.98 + pulse * 0.68
        : this.near === id
          ? (0.6 + pulse * 0.74) * approach + idle * (1 - approach)
          : idle;
      g.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial | undefined;
        if (!mat?.userData.doorGlow) return;
        if (mat.userData.baseEmissive == null) mat.userData.baseEmissive = mat.emissiveIntensity;
        mat.emissiveIntensity = mat.userData.baseEmissive + boost + ctaBoost;
      });
      // Soft frame lift when approaching — Leave/door feel past #64.
      const lift = active ? 1 + 0.048 * approach + pulse * 0.024 * approach : 1 + breath * 0.013;
      g.scale.set(lift, 1 + (lift - 1) * 0.94, lift);
      const light = this.doorLights.get(id);
      if (light) {
        const base = id === "arena" ? 2.08 : 1.74;
        light.intensity = active
          ? base * (0.26 + 0.74 * approach) + pulse * (id === "arena" ? 3.45 : 3.02) * approach
          : base * (0.38 + breath * 0.26);
      }
      const floor = this.doorFloorMats.get(id);
      if (floor) {
        const floorBase = id === "arena" ? 0.64 : 0.51;
        floor.emissiveIntensity = active
          ? floorBase * (0.26 + 0.74 * approach) + pulse * 1.48 * approach
          : floorBase * (0.16 + breath * 0.28);
      }
      const sill = this.doorSillMats.get(id);
      if (sill) {
        const sillBase = id === "arena" ? 0.74 : 0.64;
        sill.emissiveIntensity = active
          ? sillBase * (0.28 + 0.72 * approach) + pulse * 1.72 * approach
          : sillBase * (0.12 + breath * 0.3);
      }
      const outer = this.doorOuterSillMats.get(id);
      if (outer) {
        const outerBase = id === "arena" ? 0.68 : 0.55;
        outer.emissiveIntensity = active
          ? outerBase * (0.26 + 0.74 * approach) + pulse * 1.66 * approach
          : outerBase * (0.08 + breath * 0.28);
      }
      const sign = this.doorSigns.get(id);
      if (sign) {
        const s = active ? 1 + pulse * 0.195 * approach : 1 + breath * 0.046;
        sign.scale.set(s, s, 1);
        sign.position.y = (sign.userData.baseY as number) + (active ? pulse * 0.076 * approach : breath * 0.026);
      }
      const signMat = this.doorSignMats.get(id);
      if (signMat) {
        signMat.opacity = active ? 0.96 + pulse * 0.04 * approach : 0.56 + breath * 0.24;
      }
    }
  }

  private addDoor(room: PlazaDoor, center: THREE.Vector3, rotY: number, label: string, tint: number) {
    const frame = new THREE.Group();
    frame.userData.hubRoom = room;
    const doorW = 2.4;
    const doorH = 3.1;
    const postW = 0.28;
    const postD = 0.42;

    const postGeo = new THREE.BoxGeometry(postW, doorH, postD);
    const lintelGeo = new THREE.BoxGeometry(doorW + postW, 0.28, postD);
    const left = new THREE.Mesh(postGeo, this.matMetal);
    left.position.set(-doorW / 2, doorH / 2, 0);
    left.castShadow = true;
    const right = new THREE.Mesh(postGeo.clone(), this.matMetal);
    right.position.set(doorW / 2, doorH / 2, 0);
    right.castShadow = true;
    const lintel = new THREE.Mesh(lintelGeo, this.matMetal);
    lintel.position.set(0, doorH + 0.08, 0);
    lintel.castShadow = true;

    const trimM = glowMat(tint, 0.38);
    trimM.userData.doorGlow = true;
    const trimH = new THREE.Mesh(new THREE.BoxGeometry(doorW - 0.08, 0.045, 0.05), trimM);
    trimH.position.set(0, doorH - 0.04, 0.18);
    const trimL = new THREE.Mesh(new THREE.BoxGeometry(0.045, doorH - 0.08, 0.05), trimM);
    trimL.position.set(-doorW / 2 + 0.12, doorH / 2, 0.18);
    const trimRMat = trimM.clone();
    trimRMat.userData.doorGlow = true;
    const trimR = new THREE.Mesh(new THREE.BoxGeometry(0.045, doorH - 0.08, 0.05), trimRMat);
    trimR.position.set(doorW / 2 - 0.12, doorH / 2, 0.18);

    const back = new THREE.Mesh(new THREE.BoxGeometry(doorW + 0.2, doorH + 0.2, 0.14), this.matDark);
    back.position.set(0, doorH / 2, -0.32);

    const sign = makeDoorLabel(label, tint);
    sign.position.set(0, doorH + 0.42, 0.28);

    const hit = new THREE.Mesh(
      new THREE.BoxGeometry(doorW + 0.8, doorH + 1.1, 1.4),
      new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    );
    hit.position.set(0, doorH / 2 + 0.15, 0.15);
    hit.userData.hubRoom = room;

    frame.add(left, right, lintel, trimH, trimL, trimR, back, sign, hit);
    sign.userData.baseY = sign.position.y;
    this.doorSigns.set(room, sign);
    const signMat = (sign as THREE.Mesh).material as THREE.MeshBasicMaterial;
    signMat.transparent = true;
    signMat.opacity = 0.78;
    this.doorSignMats.set(room, signMat);
    // Soft door glow light (no new assets) — pulses when near/hover.
    const lamp = new THREE.PointLight(tint, room === "arena" ? 0.55 : 0.48, 8.2, 2);
    lamp.position.set(0, doorH * 0.72, 0.55);
    frame.add(lamp);
    this.doorLights.set(room, lamp);

    // Inner threshold sill (local +z toward plaza) — shared Home/Shop/Arena feel.
    const sillMat = glowMat(tint, room === "arena" ? 0.4 : 0.36);
    sillMat.userData.doorGlow = true;
    const sill = new THREE.Mesh(new THREE.BoxGeometry(doorW + 0.22, 0.084, 1.12), sillMat);
    sill.position.set(0, 0.042, 0.88);
    frame.add(sill);
    this.doorSillMats.set(room, sillMat);

    // Outer lip further into plaza — leftover sill feel beyond #33 inner strip.
    const outerMat = glowMat(tint, room === "arena" ? 0.34 : 0.3);
    outerMat.userData.doorGlow = true;
    const outer = new THREE.Mesh(new THREE.BoxGeometry(doorW + 0.96, 0.054, 0.88), outerMat);
    outer.position.set(0, 0.027, 1.72);
    frame.add(outer);
    this.doorOuterSillMats.set(room, outerMat);

    // Narrow inner jamb fins — give each opening a readable threshold edge while
    // keeping the collision opening clear. They share the same pulse as the sill.
    // v12: thicker glowing jamb fins — Home/Shop/Arena threshold edge reads at distance.
    const jambLMat = glowMat(tint, room === "arena" ? 0.32 : 0.28);
    jambLMat.userData.doorGlow = true;
    const jambL = new THREE.Mesh(new THREE.BoxGeometry(0.072, doorH - 0.3, 0.08), jambLMat);
    jambL.position.set(-doorW / 2 + 0.2, doorH / 2, 0.26);
    const jambRMat = jambLMat.clone();
    jambRMat.userData.doorGlow = true;
    const jambR = new THREE.Mesh(new THREE.BoxGeometry(0.072, doorH - 0.3, 0.08), jambRMat);
    jambR.position.set(doorW / 2 - 0.2, doorH / 2, 0.26);
    frame.add(jambL, jambR);

    // Lintel underside accent — reads as door header glow with pulse.
    const lintelGlow = glowMat(tint, room === "arena" ? 0.3 : 0.26);
    lintelGlow.userData.doorGlow = true;
    const lintelBar = new THREE.Mesh(new THREE.BoxGeometry(doorW - 0.2, 0.04, 0.06), lintelGlow);
    lintelBar.position.set(0, doorH - 0.02, 0.22);
    frame.add(lintelBar);

    frame.position.copy(center);
    frame.position.y = 0;
    frame.rotation.y = rotY;
    this.group.add(frame);
    this.pickables.push(frame);
    this.doorGroups.set(room, frame);
  }

  private addBiolume() {
    const strip = (w: number, d: number, x: number, z: number, mat: THREE.Material) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, 0.035, d), mat);
      m.position.set(x, 0.02, z);
      this.group.add(m);
      return m;
    };
    // Cross on the floor — dim cyan / amber, well under fighter-rim brightness.
    strip(18, 0.16, 0, 0, this.matCyan);
    strip(0.16, 14, 0, 0, this.matAmber);
    // Near-door floor pads share the door pulse (Home/Shop match Arena feel).
    const homePad = glowMat(CYAN, 0.28);
    homePad.userData.doorGlow = true;
    strip(5.0, 0.4, this.doors.home.x + 1.6, 0, homePad);
    this.doorFloorMats.set("home", homePad);
    const shopPad = glowMat(AMBER, 0.28);
    shopPad.userData.doorGlow = true;
    strip(5.0, 0.4, this.doors.shop.x - 1.6, 0, shopPad);
    this.doorFloorMats.set("shop", shopPad);
    const arenaPad = glowMat(AMBER, 0.32);
    arenaPad.userData.doorGlow = true;
    strip(0.4, 4.8, 0, this.doors.arena.z - 1.9, arenaPad);
    this.doorFloorMats.set("arena", arenaPad);
    strip(10, 0.1, 0, -9.4, this.matCyan);
    strip(10, 0.1, 0, 9.4, this.matAmber);
  }
}

function glowMat(tint: number, intensity: number): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: 0x2a2624,
    emissive: tint,
    emissiveIntensity: intensity,
    metalness: 0.2,
    roughness: 0.7,
  });
}

function makeDoorLabel(text: string, tint: number): THREE.Mesh {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 64;
  const g = c.getContext("2d")!;
  g.fillStyle = "rgba(12,10,9,0.88)";
  g.fillRect(0, 0, 256, 64);
  const hex = `#${tint.toString(16).padStart(6, "0")}`;
  g.strokeStyle = hex;
  g.lineWidth = 3;
  g.strokeRect(8, 8, 240, 48);
  g.fillStyle = hex;
  g.font = "700 30px Trebuchet MS, sans-serif";
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillText(text, 128, 34);
  const tex = new THREE.CanvasTexture(c);
  const mat = new THREE.MeshBasicMaterial({
    map: tex,
    transparent: true,
    side: THREE.DoubleSide,
  });
  return new THREE.Mesh(new THREE.PlaneGeometry(1.65, 0.4), mat);
}
