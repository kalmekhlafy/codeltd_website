# CODE LTD — Official Website

> Immersive 3D splash page for [codeltd.com](https://codeltd.com)

## Overview

A high-impact coming-soon landing page for **CODE LTD**, a SaaS-focused software development company. Built with Three.js WebGL, GSAP scroll animations, and PBR (physically-based rendering) shaders.

---

## Features

- **3D WebGL Orb** — IcosahedronGeometry with Perlin FBM vertex displacement and Cook-Torrance PBR shading
- **Scroll-driven 3D animations** — GSAP ScrollTrigger scrubs the Three.js scene as you scroll
- **4 scroll sections** — Hero → Capabilities → Services → CTA
- **Brand-matched palette** — Orange (#E8522A), Amber (#FF7A3D), Dark Red (#C42B0B)
- **Pixel logo integration** — Official CODE LTD logo served from CDN
- **Post-processing pipeline** — UnrealBloomPass + film grain + vignette
- **Particle system** — 3 orbiting rings + 4000 background stars
- **Custom cursor** — Orange glow dot with trailing ring
- **Email capture CTA** — Notify-me form in final section

---

## Tech Stack

| Layer | Technology |
|---|---|
| 3D Rendering | Three.js r160 (ES Module CDN) |
| Animations | GSAP 3.12.5 + ScrollTrigger |
| Shaders | Custom GLSL (vertex displacement + PBR fragment) |
| Post-processing | EffectComposer, UnrealBloomPass, ShaderPass |
| Fonts | Inter + JetBrains Mono (Google Fonts) |
| Build | Zero-build — single HTML file, CDN dependencies |

---

## Quick Start

```bash
# Clone the repository
git clone https://github.com/kalmekhlafy/codeltd_website.git
cd codeltd_website

# Switch to beta branch
git checkout beta2

# Open locally — no build step required
open index.html
# Or serve with any static server:
npx serve .
```

---

## Repository Branches

| Branch | Purpose |
|---|---|
| `beta1` | Initial 3D concept (blue/cyan palette) |
| `beta2` | Brand-aligned v2 (orange palette, scroll animations, logo, 4 sections) |
| `main` | Production-ready release (when launched) |

---

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
# Set custom domain: codeltd.com in Vercel dashboard
```

### Netlify
```bash
# Drag & drop the project folder at app.netlify.com
# Or connect GitHub repo and set branch to beta2
```

### Cloudflare Pages
1. Go to Cloudflare Pages → Create Project
2. Connect GitHub → select `codeltd_website`
3. Set branch to `beta2`, build output to `/`
4. Add custom domain `codeltd.com`

### GitHub Pages
```bash
# In repo Settings → Pages → Source: Deploy from branch
# Select: beta2 / root
# Custom domain: codeltd.com
```

---

## Customization

### Update Logo
Replace the logo URL in `index.html`:
```html
src="https://your-cdn.com/codeltd_logo.png"
```

### Change Color Palette
Edit CSS variables at the top of the `<style>` block:
```css
:root {
  --orange:  #E8522A;
  --amber:   #FF7A3D;
  --gold:    #FFB347;
  --red:     #C42B0B;
  --bg:      #060407;
}
```

### Update Messaging
Edit the panel HTML sections (`#p1` through `#p4`) in the `#scroll-wrap` element.

---

## Browser Support

| Browser | Status |
|---|---|
| Chrome 90+ | ✅ Full support |
| Firefox 88+ | ✅ Full support |
| Safari 15+ | ✅ Full support |
| Edge 90+ | ✅ Full support |
| Mobile Chrome | ✅ Supported |

> Requires WebGL 2.0. Falls back gracefully if unavailable.

---

## Project Structure

```
codeltd_website/
├── index.html    # Complete self-contained page
└── README.md     # This file
```

---

## License

© 2025 CODE LTD. All rights reserved.

---

*Built with ❤️ by CODE LTD — [codeltd.com](https://codeltd.com)*
