# ArtifyAI — AI Poster Design Gallery

A curated, responsive gallery website showcasing AI-generated poster designs for modern brands. Built with **React**, **Vite**, and **Tailwind CSS**, featuring smooth scroll-triggered animations and an interactive **Mini Idea Generator** with a live visual demo.

[![Vite](https://img.shields.io/badge/Vite-8.0.4-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2.2-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

---

## 🔗 Live Demo

> **Add your deployed URL here**
>
> Example: `https://artifyai-demo.netlify.app`

---

## 📸 Screenshots

> **Add screenshots or a screen-recording GIF here**
>
> Suggested captures:
> - Hero section with CTAs
> - Filtered masonry gallery
> - Poster detail modal
> - Mini Idea Generator animation in action

---

## ✨ Features

- **Responsive Masonry Gallery** — Browse 18 AI-crafted poster visuals in a clean, column-based layout.
- **Category Filtering** — Quickly filter by *All*, *Posters*, *Social Media*, *Product Ads*, or *Branding*.
- **Poster Detail Modal** — Click any card to view the full description, AI prompt, and real-world use case.
- **Mini Idea Generator** — Type a design idea and receive an instant creative direction prompt.
- **Visual Demo Animation** — An auto-playing mock-UI animation shows users exactly how the generator works (type → click → processing → result).
- **Before / After Showcase** — Compare raw concepts versus polished final outputs.
- **Services & Testimonials** — Highlight offerings and client feedback with elegant typography.
- **Smooth Animations** — Scroll-triggered entrance effects powered by **Framer Motion**.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [React](https://react.dev/) 19 |
| Build Tool | [Vite](https://vitejs.dev/) 8 |
| Styling | [Tailwind CSS](https://tailwindcss.com/) 4 |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `>= 18`
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/ai-design-gallery.git
cd ai-design-gallery

# 2. Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The dev server will start at `http://localhost:5173` (or the next available port).

### Build for Production

```bash
npm run build
```

This generates an optimized static site in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Serves the contents of `dist/` locally for final checks before deploying.

### Lint

```bash
npm run lint
```

---

## 📁 Project Structure

```
├── public/              # Static assets (favicon, icons)
├── src/
│   ├── assets/          # Images and SVGs
│   ├── components/      # React components
│   │   ├── BeforeAfter.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── Contact.jsx
│   │   ├── GalleryGrid.jsx
│   │   ├── Hero.jsx
│   │   ├── IdeaGenerator.jsx
│   │   ├── IdeaGeneratorDemo.jsx
│   │   ├── Navbar.jsx
│   │   ├── PosterDetail.jsx
│   │   ├── Services.jsx
│   │   └── Testimonials.jsx
│   ├── data/
│   │   └── posters.js   # Gallery data, categories & testimonials
│   ├── App.jsx          # Root application component
│   ├── index.css        # Tailwind entry + custom theme
│   └── main.jsx         # React DOM entry
├── dist/                # Production build output
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🌐 Deployment

This project outputs a static site, so it can be deployed anywhere:

- **Netlify** — Drag & drop the `dist/` folder, or connect your Git repo.
- **Vercel** — Import the project; Vite is auto-detected.
- **GitHub Pages** — Push the `dist/` folder to a `gh-pages` branch (or use an Action).
- **Cloudflare Pages / Surge / AWS S3** — Upload the `dist/` contents.

> Make sure to run `npm run build` before every deploy so the `dist/` folder reflects your latest code.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

Made with 💙 and a little bit of AI magic.
