import * as THREE from "three";
import type { Occupancy } from "./types";
import type { LookKit } from "./lookFromStill";

export type Clip = "idle" | "walk" | "run" | "tickle" | "squirm" | "tapped";

export interface TicklePoseParams {
  rate: number;
  twistRate: number;
  spineBase: number;
  spineAmp: number;
  chestAmp: number;
  shoulderAmp: number;
  elbowAmp: number;
  weaponWag: number;
}

export interface LaughPoseParams {
  rate: number;
  amp: number;
  lean: number;
  blend?: { jaw: number; cheek: number; eye: number; brow: number };
}

export type PoseMods = LaughPoseParams | TicklePoseParams;

type Joint = THREE.Group;

function mat(color: number, rough = 0.62): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: rough,
    metalness: 0,
  });
}

function capsule(r: number, len: number, m: THREE.Material, segs = 6): THREE.Mesh {
  const mesh = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 3, segs), m);
  mesh.castShadow = true;
  return mesh;
}

function limb(r: number, len: number, m: THREE.Material, segs = 6): THREE.Mesh {
  const mesh = capsule(r, len, m, segs);
  mesh.position.y = -(len / 2);
  return mesh;
}

export class Humanoid {
  root = new THREE.Group();
  hips: Joint;
  spine: Joint;
  chest: Joint;
  neck: Joint;
  head: Joint;
  lShoulder: Joint;
  lElbow: Joint;
  rShoulder: Joint;
  rElbow: Joint;
  lHip: Joint;
  lKnee: Joint;
  rHip: Joint;
  rKnee: Joint;
  face: THREE.Mesh;
  skinMat: THREE.MeshStandardMaterial;
  clothMat: THREE.MeshStandardMaterial;
  hairMat: THREE.MeshStandardMaterial;
  weaponMesh: THREE.Group | null = null;
  armorMesh: THREE.Group | null = null;
  private armorChest: THREE.Group | null = null;
  private shortsMesh: THREE.Mesh;
  private faceTex?: THREE.CanvasTexture | THREE.Texture;

  constructor(skin: number, cloth: number, hair: number, teamTint: number) {
    this.skinMat = mat(skin, 0.52);
    this.clothMat = mat(cloth, 0.72);
    this.hairMat = mat(hair, 0.78);

    this.hips = new THREE.Group();
    this.hips.position.y = 0.92;
    this.root.add(this.hips);

    this.shortsMesh = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.16, 0.2), this.clothMat);
    this.shortsMesh.position.y = -0.02;
    this.hips.add(this.shortsMesh);

    this.lHip = new THREE.Group();
    this.lHip.position.set(-0.09, -0.06, 0);
    this.hips.add(this.lHip);
    this.lHip.add(limb(0.065, 0.34, this.skinMat));
    this.lKnee = new THREE.Group();
    this.lKnee.position.y = -0.36;
    this.lHip.add(this.lKnee);
    this.lKnee.add(limb(0.055, 0.34, this.skinMat));
    const lFoot = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.05, 0.16), this.skinMat);
    lFoot.position.set(0, -0.38, 0.03);
    this.lKnee.add(lFoot);

    this.rHip = new THREE.Group();
    this.rHip.position.set(0.09, -0.06, 0);
    this.hips.add(this.rHip);
    this.rHip.add(limb(0.065, 0.34, this.skinMat));
    this.rKnee = new THREE.Group();
    this.rKnee.position.y = -0.36;
    this.rHip.add(this.rKnee);
    this.rKnee.add(limb(0.055, 0.34, this.skinMat));
    const rFoot = lFoot.clone();
    this.rKnee.add(rFoot);

    this.spine = new THREE.Group();
    this.spine.position.y = 0.08;
    this.hips.add(this.spine);
    this.spine.add(capsule(0.12, 0.22, this.skinMat));

    this.chest = new THREE.Group();
    this.chest.position.y = 0.22;
    this.spine.add(this.chest);
    this.chest.add(capsule(0.13, 0.2, this.skinMat));
    const top = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.08, 0.16), this.clothMat);
    top.position.y = 0.12;
    this.chest.add(top);

    this.lShoulder = new THREE.Group();
    this.lShoulder.position.set(-0.2, 0.12, 0);
    this.chest.add(this.lShoulder);
    this.lShoulder.add(limb(0.05, 0.24, this.skinMat));
    this.lElbow = new THREE.Group();
    this.lElbow.position.y = -0.26;
    this.lShoulder.add(this.lElbow);
    this.lElbow.add(limb(0.045, 0.22, this.skinMat));

    this.rShoulder = new THREE.Group();
    this.rShoulder.position.set(0.2, 0.12, 0);
    this.chest.add(this.rShoulder);
    this.rShoulder.add(limb(0.05, 0.24, this.skinMat));
    this.rElbow = new THREE.Group();
    this.rElbow.position.y = -0.26;
    this.rShoulder.add(this.rElbow);
    this.rElbow.add(limb(0.045, 0.22, this.skinMat));

    this.neck = new THREE.Group();
    this.neck.position.y = 0.22;
    this.chest.add(this.neck);
    this.neck.add(capsule(0.045, 0.08, this.skinMat, 5));

    this.head = new THREE.Group();
    this.head.position.y = 0.16;
    this.neck.add(this.head);
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), this.skinMat);
    this.head.add(skull);
    const hairM = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), this.hairMat);
    hairM.position.y = 0.05;
    hairM.scale.set(1.08, 0.72, 1.12);
    this.head.add(hairM);

    this.face = new THREE.Mesh(
      new THREE.PlaneGeometry(0.2, 0.24),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false }),
    );
    this.face.position.set(0, 0.02, -0.128);
    this.face.rotation.y = Math.PI;
    this.head.add(this.face);

    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(0.16, 0.018, 6, 14),
      new THREE.MeshStandardMaterial({
        color: teamTint,
        emissive: teamTint,
        emissiveIntensity: 0.55,
        metalness: 0.15,
        roughness: 0.45,
      }),
    );
    rim.position.y = 0.02;
    rim.rotation.x = Math.PI / 2;
    this.chest.add(rim);

    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.28, 12),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false }),
    );
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 0.02;
    this.root.add(shadow);
  }

  /** Right-hand prop. 0 = bare; 1–6 = distinct cloth-like silhouette in the palm. */
  setWeapon(tier: number) {
    if (this.weaponMesh) {
      this.rElbow.remove(this.weaponMesh);
      this.weaponMesh.traverse((obj) => {
        if (!(obj instanceof THREE.Mesh)) return;
        obj.geometry.dispose();
        const mat = obj.material;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else mat.dispose();
      });
      this.weaponMesh = null;
    }
    if (tier <= 0) return;
    const t = Math.max(1, Math.min(6, Math.round(tier)));
    this.weaponMesh = makeWeaponProp(t);
    this.rElbow.add(this.weaponMesh);
  }

  /** Cloth overlay on hips/chest. 0 = base attire; 1–8 = dark weave (midriff + feet stay open). */
  setArmor(tier: number) {
    if (this.armorMesh) {
      this.armorMesh.parent?.remove(this.armorMesh);
      disposeGroup(this.armorMesh);
      this.armorMesh = null;
    }
    if (this.armorChest) {
      this.armorChest.parent?.remove(this.armorChest);
      disposeGroup(this.armorChest);
      this.armorChest = null;
    }
    this.shortsMesh.visible = true;
    if (tier <= 0) return;
    const t = Math.max(1, Math.min(8, Math.round(tier)));
    const overlay = makeArmorOverlay(t);
    this.armorMesh = overlay.hips;
    this.armorChest = overlay.chest;
    this.hips.add(this.armorMesh);
    this.chest.add(this.armorChest);
    this.shortsMesh.visible = t < 3;
  }

  applyLook(kit: LookKit) {
    this.skinMat.color.setHex(kit.skin);
    this.clothMat.color.setHex(kit.cloth);
    this.hairMat.color.setHex(kit.hair);
    const loader = new THREE.TextureLoader();
    loader.load(kit.faceUrl, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      this.faceTex = tex;
      const m = this.face.material as THREE.MeshBasicMaterial;
      m.map = tex;
      m.opacity = 1;
      m.needsUpdate = true;
    });
  }

  pose(clip: Clip, t: number, mods?: PoseMods) {
    const z = 0;
    this.hips.rotation.set(0, 0, 0);
    this.spine.rotation.set(0, 0, 0);
    this.chest.rotation.set(0, 0, 0);
    this.neck.rotation.set(0, 0, 0);
    this.head.rotation.set(0, 0, 0);
    this.lShoulder.rotation.set(0, 0, 0.12);
    this.rShoulder.rotation.set(0, 0, -0.12);
    this.lElbow.rotation.set(0.15, 0, 0);
    this.rElbow.rotation.set(0.15, 0, 0);
    this.lHip.rotation.set(0, 0, 0.03);
    this.rHip.rotation.set(0, 0, -0.03);
    this.lKnee.rotation.set(0.08, 0, 0);
    this.rKnee.rotation.set(0.08, 0, 0);
    this.chest.position.y = 0.22;
    this.root.position.y = 0;
    this.chest.scale.set(1, 1, 1);
    this.head.scale.set(1, 1, 1);
    this.face.scale.set(1, 1, 1);
    this.face.position.set(0, 0.02, -0.128);
    this.face.rotation.z = 0;

    if (clip === "idle") {
      // Stronger dual-phase breathe + weight shift (past #28/#32).
      const rate = 1.7;
      const b = Math.sin(t * rate) * 0.065;
      const b2 = Math.sin(t * rate * 0.53 + 0.7) * 0.032;
      const shift = Math.sin(t * rate * 0.35) * 0.054 + Math.sin(t * rate * 0.18) * 0.024;
      this.spine.rotation.x = b + b2;
      this.spine.rotation.z = shift * 0.42;
      this.chest.position.y = 0.22 + (b + b2) * 0.65;
      this.chest.rotation.y = shift * 0.5;
      this.hips.rotation.z = shift * 0.6;
      this.lHip.rotation.z = 0.03 + shift * 0.2;
      this.rHip.rotation.z = -0.03 - shift * 0.2;
      this.lShoulder.rotation.z = 0.12 + Math.sin(t * rate) * 0.042;
      this.rShoulder.rotation.z = -0.12 - Math.sin(t * rate) * 0.042;
      this.lShoulder.rotation.x = shift * 0.32;
      this.rShoulder.rotation.x = -shift * 0.32;
      this.neck.rotation.x = b * 0.42;
      this.head.rotation.x = Math.sin(t * rate * 0.9) * 0.022;
      this.head.rotation.y = shift * 0.55;
      this.root.position.y = Math.abs(b) * 0.2;
      return;
    }
    if (clip === "walk" || clip === "run") {
      // v11 deepen past #69: cleaner planted opposite-leg stride and torso recovery.
      const run = clip === "run";
      const loco = mods as { rate: number; amp: number; lean: number } | undefined;
      const rate = loco?.rate ?? (run ? 16.8 : 10.45);
      const amp = loco?.amp ?? (run ? 1.14 : 0.75);
      const lean = loco?.lean ?? (run ? 0.311 : 0.11);
      const p = t * rate;
      const s = Math.sin(p);
      const s2 = Math.sin(p * 2);
      const sOpp = Math.sin(p + Math.PI);
      this.lHip.rotation.x = s * amp;
      this.rHip.rotation.x = sOpp * amp;
      this.lHip.rotation.z = 0.07 + s * (run ? 0.142 : 0.07);
      this.rHip.rotation.z = -0.07 - sOpp * (run ? 0.142 : 0.07);
      this.lKnee.rotation.x = 0.215 + Math.max(0, -s) * (run ? 1.98 : 1.12);
      this.rKnee.rotation.x = 0.215 + Math.max(0, -sOpp) * (run ? 1.98 : 1.12);
      this.lShoulder.rotation.x = sOpp * (run ? 1.54 : 0.82);
      this.rShoulder.rotation.x = s * (run ? 1.54 : 0.82);
      this.lShoulder.rotation.z = 0.215 + s * (run ? 0.22 : 0.114);
      this.rShoulder.rotation.z = -0.215 - s * (run ? 0.22 : 0.114);
      this.lElbow.rotation.x = 0.7 + (run ? 1.08 : 0.48);
      this.rElbow.rotation.x = 0.7 + (run ? 1.08 : 0.48);
      this.spine.rotation.x = lean + Math.abs(s2) * (run ? 0.106 : 0.054);
      this.spine.rotation.z = s * (run ? 0.11 : 0.056);
      this.chest.rotation.y = s * (run ? 0.335 : 0.165);
      this.chest.rotation.x = Math.abs(s2) * (run ? 0.094 : 0.048);
      this.hips.rotation.y = s * (run ? 0.168 : 0.084);
      // Stride punch bob + squash past #69.
      this.root.position.y = Math.abs(s2) * (run ? 0.236 : 0.106);
      const squash = 1 - Math.abs(s2) * (run ? 0.102 : 0.049);
      this.chest.scale.set(1 + (1 - squash) * 0.86, squash, 1 + (1 - squash) * 0.52);
      return;
    }
    if (clip === "tickle") {
      // Per-look bind + stronger readable tickler motion (production polish).
      const tickle = mods as TicklePoseParams | undefined;
      const rate = tickle?.rate ?? 28;
      const twistRate = tickle?.twistRate ?? 37;
      const spineBase = tickle?.spineBase ?? 0.28;
      const spineAmp = tickle?.spineAmp ?? 0.046;
      const chestAmp = tickle?.chestAmp ?? 0.088;
      const shoulderAmp = tickle?.shoulderAmp ?? 0.246;
      const elbowAmp = tickle?.elbowAmp ?? 0.44;
      const s = Math.sin(t * rate);
      const s2 = Math.sin(t * twistRate);
      const s3 = Math.sin(t * rate * 1.37);
      this.spine.rotation.x = spineBase + s * spineAmp;
      this.spine.rotation.z = s3 * spineAmp * 0.55;
      this.chest.rotation.y = s2 * chestAmp;
      this.chest.rotation.x = Math.abs(s) * chestAmp * 0.35;
      this.lShoulder.rotation.set(-1.28, 0.22 + s2 * 0.08, 0.58 + s * shoulderAmp);
      this.rShoulder.rotation.set(-1.18, -0.28 - s2 * 0.08, -0.48 - s * shoulderAmp);
      this.lElbow.rotation.x = -0.48 + s * elbowAmp;
      this.rElbow.rotation.x = -0.32 - s * elbowAmp * 0.95;
      this.head.rotation.x = 0.22 + Math.abs(s2) * 0.04;
      this.head.rotation.y = s3 * 0.05;
      this.lHip.rotation.x = 0.14 + s * 0.03;
      this.rHip.rotation.x = -0.1 - s * 0.025;
      if (this.weaponMesh) this.weaponMesh.rotation.z = s * (tickle?.weaponWag ?? 0.49);
      return;
    }
    if (clip === "squirm") {
      // Production laugh/squirm: joint squirm + face-card blendshapes (jaw/cheek/eye/brow).
      const loco = mods as LaughPoseParams | undefined;
      const rate = loco?.rate ?? 14;
      const amp = (loco?.amp ?? 0.1) * 8.5;
      const lean = (loco?.lean ?? 0.12) * 8.3;
      const blend = loco?.blend;
      const jaw = blend?.jaw ?? 0.45;
      const cheek = blend?.cheek ?? 0.3;
      const eye = blend?.eye ?? 0.4;
      const brow = blend?.brow ?? 0.2;
      const s = Math.sin(t * rate);
      const s2 = Math.sin(t * rate * 0.68);
      const s3 = Math.sin(t * rate * 1.41);
      const s4 = Math.sin(t * rate * 2.15);
      const laughPulse = 0.5 + 0.5 * Math.abs(s4);
      this.hips.rotation.z = s * amp * 1.2;
      this.hips.rotation.y = s3 * amp * 0.5;
      this.spine.rotation.set(0.24 + s2 * lean * 0.95, s3 * lean * 0.4, s * lean * 1.45);
      this.chest.rotation.z = -s * amp * 1.15;
      this.chest.rotation.x = Math.abs(s2) * lean * 0.48;
      this.chest.rotation.y = s4 * amp * 0.62;
      this.neck.rotation.set(s2 * lean * 0.48, s * lean * 0.62, s3 * amp * 0.8);
      // Clearer head tilt for painterly morph past #101 (stable — no wild clipping).
      this.head.rotation.set(
        1.95 + s2 * lean * 7.24 + Math.abs(s4) * 0.83,
        s * lean * 7.75,
        s3 * lean * 4.5 + s2 * 0.403,
      );
      // Soft head morph toward painterly/morph-target feel (capsule kit; another notch past #101).
      this.head.scale.set(
        1 + cheek * 2.15 * laughPulse,
        1 + jaw * 1.44 * laughPulse,
        1 + cheek * 0.84 + eye * 0.379,
      );
      const jawOpen = jaw * laughPulse;
      const eyeSquint = eye * (0.55 + 0.45 * Math.abs(s2));
      // Face card: jaw open stretches Y, cheek widens X, eye squint compresses Y, brow lifts.
      this.face.scale.set(
        1 + cheek * 1.71 * laughPulse,
        1 + jawOpen * 8.5 - eyeSquint * 3.4,
        1,
      );
      this.face.position.set(
        s * cheek * 0.185,
        0.158 + brow * 0.688 * laughPulse - jawOpen * 0.408,
        -0.128,
      );
      this.face.rotation.z = s2 * cheek * 0.901 + s * 0.234;
      this.lShoulder.rotation.set(-0.48 + s2 * amp * 0.8, 0.08, 0.62 + s * amp * 2.4);
      this.rShoulder.rotation.set(-0.42 - s2 * amp * 0.8, -0.08, -0.62 - s * amp * 2.4);
      this.lElbow.rotation.x = 0.72 + s * amp * 0.9;
      this.rElbow.rotation.x = 0.68 - s * amp * 0.9;
      this.lHip.rotation.x = 0.28 + s * amp * 1.1;
      this.rHip.rotation.x = 0.22 - s * amp * 1.1;
      this.lKnee.rotation.x = 0.55 + Math.abs(s) * amp * 0.8;
      this.rKnee.rotation.x = 0.5 + Math.abs(s2) * amp * 0.8;
      this.root.position.y = Math.abs(s2) * amp * 0.35;
      void z;
      return;
    }
    // tapped
    this.hips.rotation.x = 0.55;
    this.spine.rotation.x = 0.4;
    this.head.rotation.x = 0.35;
    this.lShoulder.rotation.set(0.4, 0, 0.5);
    this.rShoulder.rotation.set(0.35, 0, -0.45);
    this.lHip.rotation.x = 0.8;
    this.rHip.rotation.x = 0.75;
    this.lKnee.rotation.x = 0.9;
    this.rKnee.rotation.x = 0.85;
  }

  clipFor(occupancy: Occupancy, speed: number, joinOn: number): Clip {
    if (occupancy === "tapped" || occupancy === "spectate") return "tapped";
    if (occupancy === "ticklee" || (occupancy === "nudge" && joinOn < 0)) return "squirm";
    if (occupancy === "tickler" || occupancy === "nudge") return "tickle";
    if (speed > 4.4) return "run";
    if (speed > 0.4) return "walk";
    return "idle";
  }
}

const WEAPON_TINT = [0x6a4a3a, 0x4a5a48, 0x5a3a48, 0x3a4a5a, 0x5a4830, 0x4a3850];

function weaponMat(tier: number): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: WEAPON_TINT[tier - 1] ?? 0x5a4038,
    roughness: 0.82,
    metalness: 0,
  });
}

/** Small right-hand placeholder. Distinct silhouette per Amateur tier; cloth-like, not metal. */
function makeWeaponProp(tier: number): THREE.Group {
  const g = new THREE.Group();
  const m = weaponMat(tier);
  let mesh: THREE.Mesh;
  if (tier === 1) {
    mesh = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.05, 0.1), m);
  } else if (tier === 2) {
    mesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.032, 0.12, 3, 6), m);
  } else if (tier === 3) {
    mesh = new THREE.Mesh(new THREE.ConeGeometry(0.02, 0.18, 6), m);
    mesh.rotation.x = Math.PI;
  } else if (tier === 4) {
    mesh = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.018, 0.09), m);
  } else if (tier === 5) {
    mesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.02, 0.22, 3, 6), m);
    mesh.scale.set(1, 1.15, 1);
  } else {
    const left = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.16, 5), m);
    const right = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.16, 5), m.clone());
    left.rotation.set(Math.PI, 0, -0.18);
    right.rotation.set(Math.PI, 0, 0.18);
    left.position.x = -0.03;
    right.position.x = 0.03;
    left.castShadow = true;
    right.castShadow = true;
    g.add(left, right);
    g.position.set(0.015, -0.26, 0.04);
    return g;
  }
  mesh.castShadow = true;
  g.add(mesh);
  // Forearm hangs -Y from rElbow; sit the prop in the palm, slightly forward.
  g.position.set(0.015, -0.26, 0.04);
  return g;
}

const ARMOR_TINT = [
  0x3a322c, 0x322e32, 0x2c3034, 0x2a2824, 0x242028, 0x2e3228, 0x262422, 0x201c22,
];

function armorMat(tier: number): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color: ARMOR_TINT[tier - 1] ?? 0x2a2624,
    roughness: 0.86 + Math.min(0.08, tier * 0.008),
    metalness: 0,
  });
}

function clothBox(
  w: number,
  h: number,
  d: number,
  m: THREE.MeshStandardMaterial,
  x = 0,
  y = 0,
  z = 0,
): THREE.Mesh {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  return mesh;
}

/**
 * Hip wrap + chest vest. Stomach (spine between shorts and chest) and feet stay uncovered.
 * Scale / tint shift per Amateur tier; cloth only.
 */
function makeArmorOverlay(tier: number): { hips: THREE.Group; chest: THREE.Group } {
  const hips = new THREE.Group();
  const chest = new THREE.Group();
  const m = armorMat(tier);
  const s = 1 + (tier - 1) * 0.028;

  if (tier === 1) {
    // Weave Shorts — thin hip wrap; base shorts still show.
    hips.add(clothBox(0.36 * s, 0.1, 0.22 * s, m, 0, -0.04, 0));
    return { hips, chest };
  }

  if (tier === 2) {
    hips.add(clothBox(0.37 * s, 0.11, 0.225 * s, m, 0, -0.035, 0));
    chest.add(clothBox(0.29 * s, 0.055, 0.17 * s, m.clone(), 0, 0.125, 0));
    return { hips, chest };
  }

  // tier >= 3 covers shorts fully (caller hides shortsMesh) but stops below the midriff.
  const hipH = 0.17 + Math.min(0.03, (tier - 3) * 0.006);
  hips.add(clothBox(0.38 * s, hipH, 0.23 * s, m, 0, -0.03, 0));

  if (tier === 3) {
    const rib = m.clone();
    chest.add(clothBox(0.08, 0.1, 0.15, rib, -0.12, 0.1, 0));
    chest.add(clothBox(0.08, 0.1, 0.15, rib.clone(), 0.12, 0.1, 0));
    return { hips, chest };
  }

  const vestH = 0.085 + (tier - 4) * 0.008;
  chest.add(clothBox(0.3 * s, vestH, 0.175 * s, m.clone(), 0, 0.115, 0));

  if (tier >= 6) {
    const strap = m.clone();
    chest.add(clothBox(0.045, 0.12, 0.04, strap, -0.08, 0.12, 0.07));
    chest.add(clothBox(0.045, 0.12, 0.04, strap.clone(), 0.08, 0.12, 0.07));
  }
  if (tier >= 8) {
    chest.add(clothBox(0.22 * s, 0.045, 0.14, m.clone(), 0, 0.16, 0));
  }
  return { hips, chest };
}

function disposeGroup(g: THREE.Group) {
  g.traverse((obj) => {
    if (!(obj instanceof THREE.Mesh)) return;
    obj.geometry.dispose();
    const mat = obj.material;
    if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
    else mat.dispose();
  });
}
