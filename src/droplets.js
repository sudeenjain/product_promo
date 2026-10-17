import * as THREE from 'three';

/* Glossy chocolate droplets that arc out and fall, scrubbed by scroll
   progress. One InstancedMesh, so cost stays tiny on phones. */
export function createDroplets(count) {
  const geo = new THREE.SphereGeometry(1, 12, 9);
  const mat = new THREE.MeshPhysicalMaterial({
    color: 0x4a2113,
    roughness: 0.1,
    metalness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0.06,
    envMapIntensity: 1.3,
  });
  const mesh = new THREE.InstancedMesh(geo, mat, count);
  mesh.frustumCulled = false;
  mesh.visible = false;

  let seed = 31;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  const seeds = [];
  for (let i = 0; i < count; i++) {
    const side = i % 2 === 0 ? -1 : 1;
    seeds.push({
      phase: rnd(),
      rate: 1.6 + rnd() * 1.8,
      vx: side * (0.9 + rnd() * 2.6),
      vy: 1.4 + rnd() * 3.0,
      vz: (rnd() - 0.4) * 1.8,
      size: 0.022 + Math.pow(rnd(), 2.4) * 0.062,
      stretch: 1 + rnd() * 0.6,
    });
  }

  const dummy = new THREE.Object3D();
  const T = 1.45;
  const G = 5.2;

  /**
   * @param {number} progress  page scroll progress 0..1
   * @param {number} intensity 0..1 how strong the splash is right now
   * @param {number} cx,cy     origin in world space
   * @param {number} spread    horizontal scale (smaller on narrow screens)
   */
  function update(progress, intensity, cx, cy, spread) {
    mesh.visible = intensity > 0.01;
    if (!mesh.visible) return;

    for (let i = 0; i < count; i++) {
      const s = seeds[i];
      const tau = (s.phase + progress * s.rate) % 1;
      const t = tau * T;
      const x = cx + s.vx * t * spread;
      const y = cy + s.vy * t - 0.5 * G * t * t;
      const z = s.vz * t;
      dummy.position.set(x, y, z);

      const env = Math.pow(Math.sin(Math.PI * tau), 0.55) * intensity;
      const k = s.size * env;
      // droplets stretch along their fall
      dummy.scale.set(k, k * (s.stretch + (1 - tau) * 0.35), k);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  }

  return { mesh, update };
}
