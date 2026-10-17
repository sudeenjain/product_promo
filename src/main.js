import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import wrapperUrl from '../assets/wrapper.jpg';
import { createPack, createBar } from './models.js';
import { createDroplets } from './droplets.js';
import { initUI, clamp, lerp, smooth } from './ui.js';

const root = document.documentElement;
const scroller = document.getElementById('scroller');
const stage = document.getElementById('stage');
const canvas = document.getElementById('gl');
const loader = document.getElementById('loader');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- easing helpers ---------- */
const seg = (p, a, b) => clamp((p - a) / (b - a));
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOut = (t) => 1 - Math.pow(1 - t, 3);
const bump = (p, c, w) => smooth(clamp(1 - Math.abs(p - c) / w));

/* Horizontal position of the product per chapter (desktop only):
   product sits opposite the copy. */
const X_KEYS = [
  [0.0, 1.5], [0.14, 1.5],
  [0.2, -1.5], [0.34, -1.5],
  [0.4, 1.5], [0.58, 1.5],
  [0.64, -1.4], [0.73, -1.4],
  [0.78, 1.4], [0.88, 1.4],
  [0.93, 1.5], [1, 1.5],
];
function xKey(p) {
  for (let i = 0; i < X_KEYS.length - 1; i++) {
    const [p0, x0] = X_KEYS[i];
    const [p1, x1] = X_KEYS[i + 1];
    if (p <= p1) return lerp(x0, x1, smooth(clamp((p - p0) / (p1 - p0 || 1))));
  }
  return X_KEYS[X_KEYS.length - 1][1];
}

/* ---------- bootstrap ---------- */
function fail() {
  root.classList.add('no-webgl');
  if (loader) loader.hidden = true;
}

function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch (e) {
    return false;
  }
}

async function start() {
  if (!webglAvailable()) return fail();

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
  } catch (e) {
    return fail();
  }

  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.92;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 80);

  // lights: warm key, cool-ish rim from behind
  const key = new THREE.DirectionalLight(0xfff0d0, 1.3);
  key.position.set(3, 4, 6);
  const rim = new THREE.DirectionalLight(0xffd7b0, 1.1);
  rim.position.set(-5, 2, -4);
  scene.add(key, rim, new THREE.AmbientLight(0xffffff, 0.15));

  // product root
  const world = new THREE.Group();
  scene.add(world);

  const img = new Image();
  img.src = wrapperUrl;
  try {
    await img.decode();
  } catch (e) {
    await new Promise((res) => {
      img.onload = res;
      img.onerror = res;
    });
  }

  const pack = createPack(img);
  const bar = createBar();
  world.add(pack.group, bar.group);
  bar.group.visible = false;

  let dropletCount = 110;
  let droplets = createDroplets(dropletCount);
  scene.add(droplets.mesh);

  const ui = initUI({ scroller });

  /* ---------- layout ---------- */
  const L = { dist: 9, xScale: 1, yOffset: 0, exScale: 1, spread: 1, portrait: false };
  const tanHalf = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));

  function layout() {
    const w = stage.clientWidth || window.innerWidth;
    const h = stage.clientHeight || window.innerHeight;
    const aspect = w / h;
    L.portrait = aspect < 0.9;

    const needH = L.portrait ? 5.5 : 4.6;
    const needW = L.portrait ? 2.9 : 5.2;
    const dH = needH / (2 * tanHalf);
    const dW = needW / (aspect * 2 * tanHalf);
    L.dist = Math.max(dH, dW);

    const visH = 2 * L.dist * tanHalf;
    const visW = visH * aspect;
    L.yOffset = L.portrait ? (0.5 - 0.35) * visH : 0;
    L.xScale = L.portrait ? 0 : clamp((aspect - 0.9) / 0.6, 0.4, 1);
    L.exScale = clamp(visW / 4.4, 0.5, 1);
    L.spread = clamp(visW / 9, 0.45, 1);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);
    camera.aspect = aspect;
    camera.updateProjectionMatrix();

    // fewer droplets on phones
    const wanted = L.portrait ? 56 : 110;
    if (wanted !== dropletCount) {
      scene.remove(droplets.mesh);
      droplets.mesh.dispose();
      dropletCount = wanted;
      droplets = createDroplets(dropletCount);
      scene.add(droplets.mesh);
    }
  }

  layout();
  window.addEventListener('resize', layout);
  if ('ResizeObserver' in window) new ResizeObserver(layout).observe(stage);

  /* ---------- input ---------- */
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  window.addEventListener(
    'pointermove',
    (e) => {
      if (e.pointerType === 'touch') return;
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    },
    { passive: true }
  );

  function targetProgress() {
    const rect = scroller.getBoundingClientRect();
    const max = rect.height - (stage.clientHeight || window.innerHeight);
    return clamp(-rect.top / (max || 1));
  }

  /* ---------- frame ---------- */
  let cur = targetProgress();
  let last = performance.now();
  let introT = reduceMotion ? 1 : 0;

  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const t = now / 1000;

    const target = targetProgress();
    cur = reduceMotion ? target : cur + (target - cur) * (1 - Math.exp(-dt * 7));
    const p = cur;

    introT = Math.min(1, introT + dt / 1.8);
    const intro = easeOut(introT);

    pointer.x += (pointer.tx - pointer.x) * (1 - Math.exp(-dt * 4));
    pointer.y += (pointer.ty - pointer.y) * (1 - Math.exp(-dt * 4));
    const idle = reduceMotion ? 0 : 1;

    /* world placement */
    const ox = xKey(p) * L.xScale;
    world.position.set(ox, L.yOffset, 0);

    /* camera: push in while the bar breaks apart, ease back for the finale */
    const zoom = 1 - 0.1 * ease(seg(p, 0.58, 0.7)) + 0.1 * ease(seg(p, 0.9, 0.98));
    camera.position.set(pointer.x * 0.25, 0.35 - pointer.y * 0.15, L.dist * zoom);
    camera.lookAt(0, 0, 0);

    /* ----- wrapper ----- */
    const a = ease(seg(p, 0.0, 0.14)); // settle from hero angle
    const b = ease(seg(p, 0.16, 0.34)); // turn it over
    const c = ease(seg(p, 0.36, 0.46)); // turn back
    const s = ease(seg(p, 0.46, 0.58)); // slide off

    const ry =
      lerp(-0.6, -0.12, a) +
      b * (Math.PI + 0.12) +
      c * (Math.PI - 0.18) +
      (1 - intro) * 1.6 +
      pointer.x * 0.18 * idle;
    pack.group.rotation.set(
      Math.sin(Math.PI * b) * 0.12 - s * 0.5 + pointer.y * 0.06 * idle,
      ry,
      s * 0.45 + Math.sin(t * 0.9) * 0.02 * idle * (1 - s)
    );
    pack.group.position.set(
      s * 0.9,
      s * 6.8 + Math.sin(t * 1.1) * 0.06 * idle * (1 - s) - (1 - intro) * 0.5,
      0
    );
    pack.group.scale.setScalar(lerp(1, 0.92, s) * lerp(0.86, 1, intro));
    pack.group.visible = p < 0.6;

    /* ----- bar: waits behind the wrapper, revealed as the wrapper slides off ----- */
    const ex = ease(seg(p, 0.6, 0.74)) * (1 - ease(seg(p, 0.92, 0.99)));
    const spin = ease(seg(p, 0.74, 0.93));

    bar.group.visible = p > 0.44;
    bar.group.position.set(0, Math.sin(t * 1.1 + 1) * 0.05 * idle, -0.35 * (1 - s) - 0.0);
    bar.group.rotation.set(
      0.1 + pointer.y * 0.05 * idle,
      -0.22 + spin * Math.PI * 2 + pointer.x * 0.12 * idle,
      0
    );
    bar.group.scale.setScalar(1 + 0.06 * ease(seg(p, 0.93, 1)));
    bar.slab.visible = ex < 0.01;

    const sx = L.exScale;
    for (const blk of bar.blocks) {
      blk.mesh.position.set(
        blk.base.x + (blk.away.x - blk.base.x) * ex * sx + Math.sin(t * blk.orbit.x + blk.phase) * 0.1 * ex * idle,
        blk.base.y + (blk.away.y - blk.base.y) * ex * sx + Math.cos(t * blk.orbit.y + blk.phase) * 0.1 * ex * idle,
        blk.away.z * ex * sx
      );
      blk.mesh.rotation.set(
        blk.spin.x * ex + spin * blk.orbit.x * ex,
        blk.spin.y * ex + spin * blk.orbit.y * ex,
        blk.spin.z * ex + spin * blk.orbit.z * ex * 0.6
      );
    }

    /* ----- splash ----- */
    const intensity = Math.max(bump(p, 0.53, 0.07), bump(p, 0.84, 0.1)) * (L.portrait ? 0.8 : 1);
    droplets.update(p, intensity, ox, L.yOffset - 0.3, L.spread);

    ui.update(p);
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }

  if (loader) {
    loader.classList.add('is-done');
    setTimeout(() => (loader.hidden = true), 700);
  }
  requestAnimationFrame(frame);
}

start().catch((err) => {
  console.error(err);
  fail();
});
