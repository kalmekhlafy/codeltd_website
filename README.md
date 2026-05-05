# CODE LTD — Coming Soon

A visually immersive coming-soon splash page for **CODE LTD**, a SaaS-focused software development company. Built with vanilla Three.js + GSAP for a zero-dependency, fast-loading experience.

## Tech Stack

- **3D / WebGL:** Three.js r160 (ES module, CDN)
- **Post-processing:** Three.js EffectComposer — UnrealBloom + film grain/vignette
- **Animation:** GSAP 3 + ScrollTrigger
- **Fonts:** Google Fonts (Inter, JetBrains Mono)
- **Build:** None — single self-contained `index.html`

## Deployment

The entire site is one file: `index.html`. No build step required.

Deploy to any static host for **codeltd.com**:

```bash
# Vercel (drop the file or connect the repo)
vercel --prod

# Netlify drag-and-drop
# → netlify.com/drop → drag index.html

# AWS S3 static hosting
aws s3 cp index.html s3://codeltd.com/index.html --acl public-read
```

## Development

Open `index.html` directly in a browser, or serve with any static server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Design

- **Brand color:** `#E8522A` (orange) with amber/red accents
- **Background:** Animated warm radial glow shader + 3500 star particles + 1400 orange dust particles
- **Scroll:** GSAP ScrollTrigger sticky-panel system — 4 sections over 500vh
- **Logo:** Pixel/retro 8-bit wordmark, `image-rendering: pixelated`
- **Cursor:** Custom orange dot + ring with mix-blend-mode screen

## Branch History

| Branch | Description |
|--------|-------------|
| beta1  | Initial 3D WebGL sphere concept |
| beta2  | Full rebrand — orange palette, 4-section scroll, GSAP ScrollTrigger |
| beta3  | Sphere removed, atmospheric background introduced |
| beta4  | Polished sphere-free version — current |

---

© 2026 CODE LTD. All rights reserved.
