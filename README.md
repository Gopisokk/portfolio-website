# Gopi R K - Portfolio

A modern, highly-animated personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases AI/ML projects, open-source contributions, and competitive programming achievements.

## 🚀 Features

- **Modern Tech Stack**: React + Vite + TypeScript for blazing-fast performance
- **Beautiful Animations**: Smooth micro-interactions powered by Framer Motion
- **Responsive Design**: Mobile-first approach with perfect responsiveness across all devices
- **Glassmorphism UI**: Premium dark theme with neon accents and glassy card effects
- **SEO Optimized**: Proper meta tags, OpenGraph, and semantic HTML
- **Performance**: Optimized for Lighthouse 90+ scores

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Gopisokk/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 🚀 Deployment

### GitHub Pages

1. Update the `base` in `vite.config.ts` if deploying to a subdirectory:
```typescript
export default defineConfig({
  base: '/repository-name/',
  plugins: [react()],
})
```

2. Build and deploy:
```bash
npm run build
# Deploy the dist folder to GitHub Pages
```

### Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will auto-detect Vite and deploy

## 📁 Project Structure

```
portfolio/
├── public/             # Static assets
├── src/
│   ├── components/
│   │   ├── layout/     # Navbar, Footer
│   │   ├── sections/   # Hero, About, Skills, Projects, etc.
│   │   └── ui/         # Reusable UI components (Button, Card, etc.)
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── tailwind.config.js  # Tailwind configuration
└── vite.config.ts      # Vite configuration
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      background: "#0a0a0a",
      primary: "#00f0ff",      // Cyan accent
      secondary: "#7000ff",    // Purple accent
    },
  },
}
```

### Content

Update the content in `src/components/sections/` to reflect your own:
- **Hero.tsx**: Name, tagline, and CTA buttons
- **About.tsx**: Bio and current focus
- **Skills.tsx**: Technical skills
- **Projects.tsx**: Featured projects
- **Achievements.tsx**: Open source, competitive programming, certifications
- **Contact.tsx**: Contact information

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Gopi R K**

- GitHub: [@Gopisokk](https://github.com/Gopisokk)
- LinkedIn: [gopirk](https://linkedin.com/in/gopirk)
- Email: gopi030506@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern developer portfolios
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

⭐ Star this repository if you find it helpful!
