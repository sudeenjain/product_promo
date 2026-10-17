export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (t) => t * t * (3 - 2 * t);

/* When each chapter's copy is on screen (scroll progress 0..1). */
const CHAPTERS = [
  { in: -1, out: 0.13 }, // Dark Delight
  { in: 0.19, out: 0.32 }, // foil
  { in: 0.38, out: 0.52 }, // open
  { in: 0.62, out: 0.73 }, // eight squares
  { in: 0.78, out: 0.88 }, // break one off
  { in: 0.93, out: 99 }, // shop
];

/* Where the progress rail jumps to. */
export const ANCHORS = [0, 0.255, 0.47, 0.675, 0.83, 1];

/* Page colour story: butter yellow from the ad, then cocoa, then red-cocoa. */
const THEME = [
  { p: 0.0, top: '#F9EBB6', bot: '#EFD07A', fg: '#2B140D', dark: 0 },
  { p: 0.5, top: '#F9EBB6', bot: '#EFD07A', fg: '#2B140D', dark: 0 },
  { p: 0.64, top: '#3B1C12', bot: '#190B06', fg: '#F2E2AE', dark: 1 },
  { p: 0.88, top: '#3B1C12', bot: '#190B06', fg: '#F2E2AE', dark: 1 },
  { p: 0.97, top: '#4D1713', bot: '#180806', fg: '#F2E2AE', dark: 1 },
  { p: 1.0, top: '#4D1713', bot: '#180806', fg: '#F2E2AE', dark: 1 },
];

const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const mix = (a, b, t) => {
  const A = hex(a);
  const B = hex(b);
  return `rgb(${A.map((v, i) => Math.round(lerp(v, B[i], t))).join(',')})`;
};

function theme(p) {
  let i = 0;
  while (i < THEME.length - 2 && p > THEME[i + 1].p) i++;
  const a = THEME[i];
  const b = THEME[i + 1];
  const t = smooth(clamp((p - a.p) / (b.p - a.p || 1)));
  return {
    top: mix(a.top, b.top, t),
    bot: mix(a.bot, b.bot, t),
    fg: mix(a.fg, b.fg, t),
    dark: lerp(a.dark, b.dark, t),
  };
}

export function initUI({ scroller }) {
  const root = document.documentElement;
  const chapters = [...document.querySelectorAll('.chapter')];
  const bodies = chapters.map((c) => c.querySelector('.chapter__body'));
  const railButtons = [...document.querySelectorAll('.rail button')];
  const blobs = [...document.querySelectorAll('.blob')];
  const hint = document.querySelector('.hint');

  railButtons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const max = scroller.offsetHeight - window.innerHeight;
      const top = scroller.offsetTop + ANCHORS[i] * max;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
    });
  });

  let lastActive = -1;

  function update(p) {
    // colours
    const th = theme(p);
    root.style.setProperty('--bg-top', th.top);
    root.style.setProperty('--bg-bot', th.bot);
    root.style.setProperty('--fg', th.fg);
    root.style.setProperty('--blob', String(1 - th.dark));

    // soft background shapes drift with scroll
    blobs.forEach((b, i) => {
      const dir = i % 2 === 0 ? 1 : -1;
      b.style.transform = `translate3d(${dir * p * 120}px, ${-p * (60 + i * 50)}px, 0) rotate(${dir * p * 25}deg)`;
    });

    // chapter copy
    let active = 0;
    chapters.forEach((ch, i) => {
      const c = CHAPTERS[i];
      const fade = 0.03;
      const inA = smooth(clamp((p - (c.in - fade)) / fade));
      const outA = 1 - smooth(clamp((p - c.out) / fade));
      const a = Math.min(inA, outA);
      const dir = p < (c.in + Math.min(c.out, 1.2)) / 2 ? 1 : -1;
      const body = bodies[i];
      body.style.opacity = a.toFixed(3);
      body.style.transform = `translate3d(0, ${((1 - a) * 22 * dir).toFixed(1)}px, 0)`;
      ch.style.visibility = a < 0.01 ? 'hidden' : 'visible';
      ch.style.pointerEvents = a > 0.6 ? 'auto' : 'none';
      if (a > 0.5) active = i;
    });

    if (active !== lastActive) {
      railButtons.forEach((b, i) => {
        if (i === active) b.setAttribute('aria-current', 'true');
        else b.removeAttribute('aria-current');
      });
      lastActive = active;
    }

    if (hint) hint.style.opacity = String(1 - clamp(p / 0.04));
  }

  return { update };
}
