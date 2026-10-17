# Campco Dark Delight: scroll story (three.js)

Open `index.html` by double-clicking it. No server needed. Works on phone, tablet and laptop.

## What happens as you scroll
1. Dark Delight pack floats in
2. Pack turns over (black foil back)
3. Wrapper slides off, bar is underneath
4. Bar breaks into its 8 squares
5. Squares tumble with chocolate droplets
6. Bar re-forms, Shop button

## Files
- `index.html`, `css/style.css` : page, copy and layout
- `js/app.js` : ready-to-run bundle (three.js included)
- `src/` : readable source (`main.js` holds the scroll timeline)
- `assets/wrapper.jpg` : pack texture cut from your photo
- `assets/product-reference.png` : your original photo (shown if WebGL is unavailable)

## Common edits
- Text: edit the `<section class="chapter">` blocks in `index.html`
- Shop link: search `campcocart.com` in `index.html`
- Scroll length: `--scroll-length` in `css/style.css`
- Timing: the `seg(p, start, end)` numbers in `src/main.js`
- Logo: the SVG in `index.html` is a stand-in; replace it with the official file

## Rebuild after editing `src/`
    npm install
    npm run build
