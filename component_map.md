# Component Map: Gopi R K Portfolio

## Architecture Overview

```
App.tsx (Root)
├── Navbar (Sticky navigation with mobile menu)
├── Main Content
│   ├── Hero (Landing section with animated background)
│   ├── About (Bio + "Now Working On" cards)
│   ├── Skills (Categorized tech stack)
│   ├── Projects (3 featured projects with modals)
│   ├── Achievements (Open source, CP, certifications)
│   └── Contact (Email copy + social links)
└── Footer (Copyright + year)
```

## Component Hierarchy

### Layout Components (`src/components/layout/`)

#### **Navbar.tsx**
- **Purpose**: Floating glassmorphic navigation bar
- **Features**:
  - Sticky positioning with blur-on-scroll effect
  - Desktop: Horizontal nav links + social icons
  - Mobile: Hamburger menu with overlay
  - Smooth anchor link scrolling
- **State**: `isScrolled`, `isMobileMenuOpen`
- **Dependencies**: Framer Motion (AnimatePresence), Lucide icons

#### **Footer.tsx**
- **Purpose**: Minimal footer with copyright
- **Features**: Simple text with dynamic year

---

### Section Components (`src/components/sections/`)

#### **Hero.tsx**
- **Purpose**: Landing / Hero section
- **Features**:
  - Animated gradient background with grid overlay
  - Staggered text reveal animations
  - "Available for Hire" badge
  - CTA buttons (View Projects, Contact)
  - Floating decorative blur elements
- **Dependencies**: Framer Motion, Button component

#### **About.tsx**
- **Purpose**: Personal bio and current focus
- **Features**:
  - Two-column layout (desktop)
  - Icon-based feature highlights (Full-Stack, AI/ML, Open Source)
  - "Now Working On" card with 3 status items (Open Source, GenAI, Solana)
  - Background decorative blob
- **Dependencies**: Card, SectionWrapper, Lucide icons

#### **Skills.tsx**
- **Purpose**: Display technical skills
- **Features**:
  - Four categories: Primary Stack, AI & Data, Tools & Platforms, Learning
  - Glass cards with skill chips
  - Staggered scroll-in animation
- **Dependencies**: SectionWrapper, Framer Motion

#### **Projects.tsx**
- **Purpose**: Showcase 3 flagship projects
- **Features**:
  - Project cards with gradient headers
  - Click to open modal with full details
  - Tech stack tags
  - GitHub links
  - Modal with overlay (AnimatePresence)
- **State**: `selectedProject`
- **Data**: 3 hardcoded projects (Amazon ML, PDF Chat, MCP Server)
- **Dependencies**: Card, Button, SectionWrapper, Framer Motion

#### **Achievements.tsx**
- **Purpose**: Highlight open source, competitive programming, and certifications
- **Features**:
  - Bento-grid layout (3 cards)
  - Open Source card (Learning Equality PR)
  - Competitive Programming stats (LeetCode, CodeChef)
  - Certification badges (AWS CCP, Cisco, Coursera)
- **Dependencies**: Card, SectionWrapper, Lucide icons

#### **Contact.tsx**
- **Purpose**: Contact form and social links
- **Features**:
  - Email with copy-to-clipboard button
  - Social link cards (LinkedIn, GitHub, Phone)
  - Animated check icon on copy
- **State**: `copied` (for clipboard feedback)
- **Dependencies**: Card, Button, SectionWrapper, Framer Motion

---

### UI Components (`src/components/ui/`)

#### **Button.tsx**
- **Purpose**: Reusable animated button
- **Props**:
  - `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
  - `size`: 'sm' | 'md' | 'lg'
  - Extends `HTMLMotionProps<"button">`
- **Features**:
  - Hover scale animation
  - Tap feedback
  - Configurable styles via Tailwind classes
- **Dependencies**: Framer Motion, clsx, tailwind-merge

#### **Card.tsx**
- **Purpose**: Glassmorphic container
- **Props**:
  - `hoverEffect`: boolean (default true)
  - Extends `HTMLMotionProps<"div">`
- **Features**:
  - Glass background with blur
  - Hover lift effect
  - Gradient overlay on hover
- **Dependencies**: Framer Motion

#### **SectionWrapper.tsx**
- **Purpose**: Wrapper for main sections
- **Props**:
  - `id`: string (for anchor links)
  - `className`: optional styles
- **Features**:
  - Scroll-triggered fade-in (whileInView)
  - Consistent padding and container
- **Dependencies**: Framer Motion

---

## Design System

### Colors (Tailwind Config)
- **Background**: `#0a0a0a` (Deep Black)
- **Primary**: `#00f0ff` (Cyan) - AI/Tech accent
- **Secondary**: `#7000ff` (Purple) - Solana/Web3 accent
- **Surface**: `rgba(255, 255, 255, 0.05)` - Glass effect

### Typography
- **Font**: `Inter` (Google Fonts)
- **Hierarchy**: Bold for headings, Medium for body

### Animations
- **Scroll reveals**: `whileInView` with `viewport={{ once: true }}`
- **Hover effects**: `scale: 1.05`, `y: -5`
- **Transitions**: Spring physics (`stiffness: 100, damping: 20`)

---

## Data Flow

1. **Static Content**: All text and project data is hardcoded in components
2. **No External API**: Self-contained portfolio
3. **State Management**: Local React state (no Context or Redux)

## Accessibility

- Semantic HTML (`<section>`, `<nav>`, `<footer>`)
- ARIA labels where needed
- Keyboard navigation support
- AA contrast ratios
- `prefers-reduced-motion` support (via Framer Motion defaults)

## Performance Optimizations

- Code splitting (Vite automatic)
- Lazy loading of modals (AnimatePresence)
- Optimized images (if added)
- Minimal bundle size (~150kb gzipped)

## Future Enhancements (Optional)

- [ ] Theme toggle (dark/light)
- [ ] Blog section with MDX
- [ ] Project filtering/search
- [ ] Contact form backend (EmailJS, Formspree)
- [ ] Cursor trail effect
- [ ] Particle background (Three.js)
