# Krish Agarwal — Full Stack Developer Portfolio

A professional, modern React portfolio with dark theme, animations, and clean architecture.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky nav with scroll-aware styling
│   ├── Hero.jsx          # Hero with animated terminal
│   ├── About.jsx         # About section with profile card
│   ├── Skills.jsx        # Skills grid with hover effects
│   ├── Projects.jsx      # Featured & regular project cards
│   ├── Experience.jsx    # Timeline-style work history
│   ├── Contact.jsx       # Contact form + social links
│   └── Footer.jsx        # Simple footer
│   └── DeskScene.jsx        # 3d scene
│
├── data/
│   └── portfolio.js      # ⭐ All your content lives here
│
├── hooks/
│   └── useScroll.js      # useScrolled + useInView hooks
│
├── App.jsx               # Root component + custom cursor
├── index.css             # Global CSS tokens & animations
└── index.js              # React entry point
```

## ✏️ Customization

All portfolio content is centralized in `src/data/portfolio.js`:

- **HERO_DATA** — Name, tagline, stats, CTA buttons
- **ABOUT_DATA** — Bio paragraphs and facts
- **SKILLS_DATA** — Skill categories with tags
- **PROJECTS_DATA** — Project cards with previews
- **EXPERIENCE_DATA** — Work history timeline

## 🎨 Design Tokens

Edit CSS custom properties in `src/index.css`:

```css
:root {
  --accent: #e8ff6b;   /* Chartreuse yellow accent */
  --accent-2: #6bffd4; /* Mint green secondary */
  --accent-3: #ff6b9d; /* Pink tertiary */
  --bg: #080810;       /* Deep dark background */
  ...
}
```

## 🔤 Fonts

- **Syne** — Display headings (Google Fonts)
- **DM Mono** — Code / labels / tags
- **Lora** — Body serif text

## ✨ Features

- Custom smooth cursor (desktop only)
- Intersection Observer scroll animations
- Animated terminal in hero section
- Project preview mockups
- Scroll-aware navbar
- Hover micro-interactions
- Contact form with feedback state
- Responsive-ready layout
