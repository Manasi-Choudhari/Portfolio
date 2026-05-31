# Manasi Choudhari — Portfolio

A stunning, fully deployable personal portfolio for Manasi Choudhari — AI & ML Developer.

## ✨ Features

- **3D animated orb** hero section (React Three Fiber + custom GLSL shaders)
- **Custom glowing cursor** with lagging ring follower
- **Typewriter effect** cycling through roles
- **Scroll-triggered animations** (Framer Motion)
- **Glassmorphism cards** with hover glow
- Dark violet/pink neon aesthetic with Syne display font
- Fully responsive (mobile, tablet, desktop)
- Vercel-ready, zero-config deployment

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
manasi-portfolio/
├── app/
│   ├── layout.tsx        # Root layout + metadata + fonts
│   ├── page.tsx          # Main page (assembles all sections)
│   └── globals.css       # Design tokens + global styles
├── components/
│   ├── Cursor.tsx        # Custom glowing cursor
│   ├── Orb.tsx           # 3D animated orb (React Three Fiber)
│   ├── Typewriter.tsx    # Animated typewriter
│   ├── FadeUp.tsx        # Scroll reveal wrapper (Framer Motion)
│   ├── Navbar.tsx        # Sticky frosted glass navbar
│   ├── Hero.tsx          # Full-viewport hero section
│   ├── About.tsx         # Bio + stats grid
│   ├── Skills.tsx        # Skill chips grouped by category
│   ├── Projects.tsx      # 4 glassmorphism project cards
│   ├── Experience.tsx    # Glowing vertical timeline
│   ├── Achievements.tsx  # Trophy-style achievement list
│   └── Contact.tsx       # Contact panel
├── public/
│   └── resume.pdf        # ← Replace with your actual resume!
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── vercel.json           # Vercel deployment config
```

## 🎨 Design Tokens

| Token | Value |
|-------|-------|
| Background | `#07070f` |
| Surface | `#0d0d1a` |
| Accent Violet | `#a855f7` |
| Accent Pink | `#ec4899` |
| Text Primary | `#f8f8f8` |
| Text Muted | `#94a3b8` |
| Display Font | Syne (800 weight) |
| Body Font | DM Sans |

## 🔧 Customization

- **Resume**: Replace `public/resume.pdf` with your actual PDF
- **LinkedIn/GitHub**: Update `href` in `components/Contact.tsx` and `components/Navbar.tsx`
- **Colors**: Edit CSS variables in `app/globals.css`
- **Projects**: Edit the `PROJECTS` array in `components/Projects.tsx`

## 🚀 Deploy to Vercel

```bash
npx vercel
```

Or push to GitHub and import at [vercel.com](https://vercel.com) — zero config needed.
