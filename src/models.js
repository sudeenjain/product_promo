import * as THREE from 'three';

export const PACK_W = 1.4;
export const PACK_H = 3.0;

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

function canvasTexture(canvas, { srgb = true, anisotropy = 8 } = {}) {
  const t = new THREE.CanvasTexture(canvas);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = anisotropy;
  return t;
}

/* Crimped (zig-zag) top and bottom edges, used as an alpha map so the
   wrapper silhouette matches the real pack. */
function zigzagAlphaMap() {
  const w = 288;
  const h = 620;
  const c = makeCanvas(w, h);
  const x = c.getContext('2d');
  x.fillStyle = '#fff';
  x.fillRect(0, 0, w, h);
  x.fillStyle = '#000';

  const teeth = 17;
  const half = w / teeth / 2;
  const depth = 12;

  // top edge
  x.beginPath();
  x.moveTo(0, 0);
  for (let i = 0; i <= teeth * 2; i++) {
    x.lineTo(i * half, i % 2 === 0 ? 0 : depth);
  }
  x.lineTo(w, 0);
  x.closePath();
  x.fill();

  // bottom edge
  x.beginPath();
  x.moveTo(0, h);
  for (let i = 0; i <= teeth * 2; i++) {
    x.lineTo(i * half, i % 2 === 0 ? h : h - depth);
  }
  x.lineTo(w, h);
  x.closePath();
  x.fill();

  // trim the very edges of the photo texture
  x.fillRect(0, 0, 2, h);
  x.fillRect(w - 2, 0, 2, h);

  const t = new THREE.CanvasTexture(c);
  return t;
}

function featheredCrop(img, sx, sy, sw, sh) {
  const c = makeCanvas(sw, sh);
  const x = c.getContext('2d');
  x.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);
  x.globalCompositeOperation = 'destination-in';
  x.save();
  x.translate(sw / 2, sh / 2);
  x.scale(sw / sh, 1);
  const g = x.createRadialGradient(0, 0, sh * 0.44, 0, 0, sh * 0.6);
  g.addColorStop(0, 'rgba(0,0,0,1)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g;
  x.fillRect(-sw, -sh, sw * 2, sh * 2);
  x.restore();
  return c;
}

/* Back of the pack: black foil, the Campco logo lifted from the front
   of the photo, plus lettering. */
function backTexture(img) {
  const w = 576;
  const h = 1240;
  const c = makeCanvas(w, h);
  const x = c.getContext('2d');

  const g = x.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#1c1719');
  g.addColorStop(0.5, '#141012');
  g.addColorStop(1, '#0e0b0c');
  x.fillStyle = g;
  x.fillRect(0, 0, w, h);

  // soft foil sheen
  const sheen = x.createLinearGradient(0, 0, w, 0);
  sheen.addColorStop(0, 'rgba(255,255,255,0)');
  sheen.addColorStop(0.3, 'rgba(255,255,255,0.05)');
  sheen.addColorStop(0.55, 'rgba(255,255,255,0)');
  sheen.addColorStop(0.8, 'rgba(255,255,255,0.035)');
  sheen.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = sheen;
  x.fillRect(0, 0, w, h);

  // crimp bands
  for (const y0 of [0, h - 74]) {
    const cg = x.createLinearGradient(0, y0, 0, y0 + 74);
    cg.addColorStop(0, 'rgba(255,255,255,0.08)');
    cg.addColorStop(1, 'rgba(0,0,0,0.25)');
    x.fillStyle = cg;
    x.fillRect(0, y0, w, 74);
    for (let i = 0; i < 74; i += 6) {
      x.fillStyle = 'rgba(255,255,255,0.05)';
      x.fillRect(0, y0 + i, w, 1.5);
    }
  }

  // centre seam
  const seam = x.createLinearGradient(w / 2 - 22, 0, w / 2 + 22, 0);
  seam.addColorStop(0, 'rgba(255,255,255,0)');
  seam.addColorStop(0.5, 'rgba(255,255,255,0.07)');
  seam.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = seam;
  x.fillRect(w / 2 - 22, 80, 44, h - 160);

  // logo from the front of the pack
  const logo = featheredCrop(img, 18, 120, 290, 210);
  const lw = 360;
  const lh = (logo.height / logo.width) * lw;
  x.drawImage(logo, (w - lw) / 2, 250, lw, lh);

  // lettering
  x.textAlign = 'center';
  x.fillStyle = '#EBD9A0';
  x.font = '600 92px Georgia, "Times New Roman", serif';
  x.fillText('Dark', w / 2, 640);
  x.fillText('Delight', w / 2, 735);

  x.font = '500 26px Georgia, serif';
  x.fillStyle = 'rgba(235,217,160,0.85)';
  const label = 'DARK CHOCOLAYER';
  x.save();
  x.translate(w / 2, 850);
  const spacing = 9;
  let total = 0;
  for (const ch of label) total += x.measureText(ch).width + spacing;
  total -= spacing;
  let cx = -total / 2;
  x.textAlign = 'left';
  for (const ch of label) {
    x.fillText(ch, cx, 0);
    cx += x.measureText(ch).width + spacing;
  }
  x.restore();

  // thin gold rule
  x.fillStyle = 'rgba(235,217,160,0.55)';
  x.fillRect(w / 2 - 70, 780, 140, 2);

  return canvasTexture(c);
}

/* ------------------------------------------------------------------ */
/* Wrapper                                                              */
/* ------------------------------------------------------------------ */

function pillowGeometry() {
  const geo = new THREE.PlaneGeometry(PACK_W, PACK_H, 24, 60);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const nx = p.getX(i) / (PACK_W / 2);
    const ny = p.getY(i) / (PACK_H / 2);
    const side = Math.pow(Math.max(0, 1 - nx * nx), 0.55);
    const ends = THREE.MathUtils.smoothstep(1 - Math.abs(ny), 0.0, 0.16);
    // fine wrinkles near the crimps, so the foil does not read as flat
    const wrinkle = Math.sin(nx * 38) * 0.006 * (1 - ends);
    p.setZ(i, 0.16 * side * ends + wrinkle);
  }
  geo.computeVertexNormals();
  return geo;
}

export function createPack(img) {
  const group = new THREE.Group();
  const geo = pillowGeometry();
  const alpha = zigzagAlphaMap();

  const frontMap = new THREE.Texture(img);
  frontMap.colorSpace = THREE.SRGBColorSpace;
  frontMap.anisotropy = 8;
  frontMap.needsUpdate = true;

  const common = {
    alphaMap: alpha,
    alphaTest: 0.5,
    roughness: 0.34,
    metalness: 0.2,
    clearcoat: 0.8,
    clearcoatRoughness: 0.22,
    envMapIntensity: 1.1,
  };

  const front = new THREE.Mesh(geo, new THREE.MeshPhysicalMaterial({ ...common, map: frontMap }));
  const back = new THREE.Mesh(geo, new THREE.MeshPhysicalMaterial({ ...common, map: backTexture(img) }));
  back.rotation.y = Math.PI;

  group.add(front, back);
  return { group };
}

/* ------------------------------------------------------------------ */
/* Chocolate bar                                                        */
/* ------------------------------------------------------------------ */

const BLOCK_W = 0.58;
const BLOCK_H = 0.66;
const GAP = 0.04;
const BEVEL = 0.035;
const DEPTH = 0.12;
export const COLS = 2;
export const ROWS = 4;

function roundedRectShape(w, h, r) {
  const s = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

/* The pressed square: recessed panel with the Campco name embossed. */
function decalTexture() {
  const w = 256;
  const h = 292;
  const c = makeCanvas(w, h);
  const x = c.getContext('2d');
  const inset = 20;
  const r = 16;

  const rr = (px, py, pw, ph, rad) => {
    x.beginPath();
    x.moveTo(px + rad, py);
    x.arcTo(px + pw, py, px + pw, py + ph, rad);
    x.arcTo(px + pw, py + ph, px, py + ph, rad);
    x.arcTo(px, py + ph, px, py, rad);
    x.arcTo(px, py, px + pw, py, rad);
    x.closePath();
  };

  // recessed panel
  rr(inset, inset, w - inset * 2, h - inset * 2, r);
  x.fillStyle = 'rgba(35,14,8,0.30)';
  x.fill();

  // inner lighting: dark top-left lip, bright bottom-right lip
  x.lineWidth = 5;
  x.save();
  rr(inset, inset, w - inset * 2, h - inset * 2, r);
  x.clip();
  x.strokeStyle = 'rgba(20,7,3,0.55)';
  rr(inset + 1, inset + 1, w - inset * 2, h - inset * 2, r);
  x.stroke();
  x.strokeStyle = 'rgba(255,190,150,0.22)';
  rr(inset - 3, inset - 3, w - inset * 2, h - inset * 2, r);
  x.stroke();
  x.restore();

  // embossed lettering
  x.save();
  x.translate(w / 2, h / 2 + 6);
  x.rotate(-0.2);
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  x.font = 'italic 700 58px Georgia, "Times New Roman", serif';
  x.fillStyle = 'rgba(15,5,2,0.55)';
  x.fillText('Campco', 2.5, 2.5);
  x.fillStyle = 'rgba(255,200,165,0.32)';
  x.fillText('Campco', -1.5, -1.5);
  x.fillStyle = 'rgba(96,46,30,0.95)';
  x.fillText('Campco', 0, 0);
  x.restore();

  return canvasTexture(c);
}

export function createBar() {
  const group = new THREE.Group();

  // Block geometry shared by all eight squares
  const shape = roundedRectShape(BLOCK_W - BEVEL * 2, BLOCK_H - BEVEL * 2, 0.04);
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: DEPTH,
    bevelEnabled: true,
    bevelThickness: BEVEL,
    bevelSize: BEVEL,
    bevelSegments: 4,
    curveSegments: 8,
  });
  geo.translate(0, 0, -DEPTH / 2);
  geo.computeVertexNormals();

  const chocolate = new THREE.MeshPhysicalMaterial({
    color: 0x5b2c1d,
    roughness: 0.3,
    metalness: 0,
    clearcoat: 0.55,
    clearcoatRoughness: 0.32,
    envMapIntensity: 1.15,
  });

  const decalMat = new THREE.MeshStandardMaterial({
    map: decalTexture(),
    transparent: true,
    roughness: 0.4,
    metalness: 0,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -2,
    polygonOffsetUnits: -2,
  });
  const decalGeo = new THREE.PlaneGeometry(BLOCK_W - 0.02, BLOCK_H - 0.02);
  const topZ = DEPTH / 2 + BEVEL + 0.002;

  // Backing slab, so the grooves look like grooves rather than holes
  const slabW = COLS * BLOCK_W + (COLS - 1) * GAP - 0.06;
  const slabH = ROWS * BLOCK_H + (ROWS - 1) * GAP - 0.06;
  const slab = new THREE.Mesh(
    new THREE.BoxGeometry(slabW, slabH, DEPTH * 0.9),
    new THREE.MeshStandardMaterial({ color: 0x2a120a, roughness: 0.6 })
  );
  group.add(slab);

  // deterministic pseudo-random so scatter is stable between reloads
  let seed = 7;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  const blocks = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const mesh = new THREE.Mesh(geo, chocolate);
      const decal = new THREE.Mesh(decalGeo, decalMat);
      decal.position.z = topZ;
      mesh.add(decal);

      const bx = (c - (COLS - 1) / 2) * (BLOCK_W + GAP);
      const by = ((ROWS - 1) / 2 - r) * (BLOCK_H + GAP);
      mesh.position.set(bx, by, 0);
      group.add(mesh);

      blocks.push({
        mesh,
        base: new THREE.Vector3(bx, by, 0),
        // where the piece goes when it breaks away
        away: new THREE.Vector3(
          bx * 1.5 + (rnd() - 0.5) * 0.9,
          by * 1.15 + (rnd() - 0.5) * 0.7,
          (rnd() - 0.35) * 2.6
        ),
        spin: new THREE.Vector3((rnd() - 0.5) * 2.6, (rnd() - 0.5) * 3.2, (rnd() - 0.5) * 2.0),
        orbit: new THREE.Vector3(rnd() * 1.4 + 0.4, rnd() * 1.6 + 0.4, rnd() * 1.0 + 0.2),
        phase: rnd() * Math.PI * 2,
      });
    }
  }

  return { group, blocks, slab };
}
