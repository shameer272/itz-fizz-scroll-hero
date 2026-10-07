# ITZ FIZZ — The Future Moves With You

A premier Awwwards/agency-grade scroll-driven spatial experience built with **React**, **Vite**, **Tailwind CSS**, and **GSAP ScrollTrigger**.

Featuring a custom 3D **AI Intelligence Core** with volumetric frosted silica glass, liquid silver architecture, central micro-fusion energy, and physical scroll-linked kinematics.

---

## ⚡ Tech Stack

- **Core**: React 19, JavaScript (ESM), HTML5, CSS3
- **Build**: Vite 6 (configured with relative `base: './'` for GitHub Pages)
- **Styling**: Tailwind CSS 3.4, Custom Cyberpunk/Neo-Minimalist CSS, Film Grain SVG
- **Motion Engine**: GSAP 3.12+, GSAP ScrollTrigger
- **Typography**: Inter, Syne, JetBrains Mono
- **Icons**: Lucide React

---

## 📁 Project Structure

```
itz-fizz-scroll-hero/
├── public/
│   └── hero-image.png              # 3D AI Intelligence Core render
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Minimalist ITZ / DIGITAL header & overlay
│   │   ├── CustomCursor.jsx        # Trailing magnetic precision cursor
│   │   ├── Preloader.jsx           # Swift sub-700ms agency curtain reveal
│   │   ├── Hero.jsx                # Pinned 100vh hero container
│   │   ├── HeroVisual.jsx          # 8-layer AI Core (glow, rings, ribbons, nucleus)
│   │   ├── Stats.jsx               # Editorial metrics (85%, 92%, 78%)
│   │   ├── ScrollIndicator.jsx     # SCROLL TO EXPLORE animated indicator
│   │   ├── FeatureSection.jsx      # Section 2: THE FUTURE MOVES WITH YOU
│   │   └── Footer.jsx              # Minimalist ITZ / FIZZ © 2026 footer
│   ├── hooks/
│   │   └── useHeroAnimation.js     # Dedicated GSAP entrance & matchMedia scrub
│   ├── App.jsx                     # Component orchestration
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Fluid clamp typography, film grain, GPU layers
├── index.html                      # SEO metadata & Google Fonts
├── tailwind.config.js              # Editorial typography & dark palette
├── postcss.config.js               # PostCSS & Tailwind processing
├── vite.config.js                  # Production build & GitHub Pages base
├── .gitignore                      # Git ignored files & dist
└── package.json                    # Project metadata & dependencies
```

---

## 🚀 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:5174/](http://localhost:5174/) in your browser.

### 3. Production Build
```bash
npm run build
```
Generates production-optimized assets in the `dist/` directory, ready to deploy directly to GitHub Pages.

---

## 🎬 Scroll Storyboard

- **0% Scroll**: AI Core centered at scale 1; headline, eyebrow, and stats fully visible.
- **20% Scroll**: Headline begins moving upward; AI Core scales up (`1.08x`); orbital rings rotate; background parallax starts.
- **40% Scroll**: Headline fades; AI Core becomes dominant; central cyan energy glow expands; data ribbons separate.
- **60% Scroll**: AI Core glides upward with subtle rotation (`rotate: 5deg`); background shifts; stats begin fading.
- **80% Scroll**: AI Core transitions downward toward Section 2; headline and stats fully disappear.
- **100% Scroll**: Seamless handoff directly into Section 2 (*"THE FUTURE MOVES WITH YOU"*); hero unpins naturally.
