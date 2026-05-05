# CODE LTD - 3D Splash Page

A visually stunning, immersive 3D splash page for **CODE LTD**, a SaaS-focused software development company. Built with cutting-edge web technologies to showcase technical expertise and innovation.

## 🚀 Tech Stack
- **Frontend:** React 18 + TypeScript
- **3D Engine:** Three.js (via React Three Fiber)
- **Animation:** Framer Motion + Drei ScrollControls
- **Styling:** Tailwind CSS
- **Build Tool:** Vite

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone -b beta3 https://github.com/[username]/codeltd_website.git
   cd codeltd_website
   ```

2. **Install dependencies:**
   *(Note: Using --legacy-peer-deps to resolve TypeScript version conflicts in some environments)*
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

## 🏗️ Deployment

To generate the production-ready build:
```bash
npm run build
```
The output will be in the `/dist` directory. This can be deployed to any static hosting provider (Vercel, Netlify, AWS S3, etc.) for **codeltd.com**.

## 🎨 Design Philosophy
- **Immersive 3D:** A central abstract "SaaS Core" that reacts to scroll depth and user interaction.
- **Micro-interactions:** Smooth transitions and hover states using Framer Motion.
- **Professional Aesthetics:** A dark, high-contrast theme using the brand's primary orange (`#E8522A`) to communicate technology leadership.

---
© 2026 CODE LTD. All rights reserved.
