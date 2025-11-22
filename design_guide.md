# Wireframe & Style Guide: Gopi R K Portfolio

## Design Philosophy
- **Vibe**: Elite, Cyberpunk-lite, High-Performance, "Dark Mode Default".
- **Keywords**: Neon, Glassmorphism, Smooth, Minimal, Depth.

## Color Palette
- **Background**: `#0a0a0a` (Deep Black) to `#121212` (Dark Gray) gradients.
- **Primary Accent**: `#00f0ff` (Cyan/Electric Blue) - representing AI/Tech.
- **Secondary Accent**: `#7000ff` (Electric Purple) - representing Solana/Web3.
- **Text**:
    - Headings: `#ffffff` (White).
    - Body: `#a1a1aa` (Zinc-400).
    - Muted: `#52525b` (Zinc-600).
- **Surface**: `rgba(255, 255, 255, 0.05)` with `backdrop-filter: blur(10px)`.

## Typography
- **Font Family**: `Inter` or `Outfit` (Google Fonts).
- **Hierarchy**:
    - H1 (Hero): 4rem - 6rem, Bold/Black, tight tracking.
    - H2 (Section Titles): 2.5rem, SemiBold.
    - H3 (Card Titles): 1.5rem, Medium.
    - Body: 1rem, Regular, relaxed line-height.

## Layout & Structure

### 1. Navigation (Floating)
- **Position**: Fixed top-center or top-right.
- **Style**: Glassmorphic pill shape.
- **Items**: Home, About, Projects, Resume, Contact.
- **Interaction**: Active state glow, hover slide.

### 2. Hero Section
- **Centerpiece**: Large Name "GOPI R K".
- **Subtext**: Animated text "AI & Data Science | GenAI | Solana".
- **Visual**: Abstract 3D grid or particle mesh in background (faded).
- **Actions**: Primary Button "View Work" (Glow effect), Secondary "Contact".

### 3. About & "Now Working On"
- **Layout**: Two columns (Text | Image/Graphic).
- **Feature**: A scrolling ticker or "Status Bar" showing current focus: "Refactoring Kolibri Tests", "Building MCP Servers".

### 4. Skills (The "Tech Stack")
- **Style**: Grid of glass cards or floating chips.
- **Animation**: Staggered fade-in on scroll.
- **Categories**:
    - **Core**: Python, JS/TS, C++.
    - **Web**: React, Vite, Tailwind, Next.js.
    - **AI/Data**: PyTorch, TensorFlow, LangChain, Pandas.
    - **Tools**: Git, Docker, AWS, Linux.

### 5. Projects (The "Showcase")
- **Layout**: Vertical stack of large, immersive cards or a horizontal carousel.
- **Card Content**:
    - Project Title.
    - Brief Description.
    - Tech Stack Badges.
    - "View Project" & "GitHub" Links.
    - *Hover Effect*: Card lifts, border glows, image zooms slightly.

### 6. Achievements & Open Source
- **Layout**: Bento-grid style box layout.
- **Box 1**: Open Source (Kolibri PR).
- **Box 2**: Competitive Programming Stats (LeetCode/CodeChef).
- **Box 3**: Certifications.

### 7. Contact & Footer
- **Style**: Minimal centered layout.
- **Elements**: Large "Let's Connect" text, Social Icons (GitHub, LinkedIn, X), Copy Email button.
- **Footer**: "Designed & Built by Gopi R K © 2025".

## Motion Guidelines (Framer Motion)
- **Page Load**: Staggered fade-up for Hero elements.
- **Scroll**: `whileInView` with `viewport={{ once: true }}` for sections.
- **Hover**: `scale: 1.05`, `y: -5` for interactive elements.
- **Transitions**: Spring physics (stiffness: 100, damping: 20) for natural feel.
