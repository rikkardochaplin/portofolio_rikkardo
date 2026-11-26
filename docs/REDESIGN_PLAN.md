# Redesign Plan — Rikkardo L. Tobing Portfolio

**Creative Direction:** Hybrid Dark & Light Editorial Engineering Brand  
**Primary Domain:** `https://www.rikkardotobing.my.id/`

---

## 1. Visual Design System

### Color System
- **Deep Navy:** `#0B1120` (Hero, Dark Editorial Sections, Footer)
- **Midnight Blue:** `#111827` (Dark Elevated Cards, Code/Diagram Panels)
- **Off White:** `#F7F8FA` (Light Editorial Section Canvas)
- **Pure White:** `#FFFFFF` (Light Surface Cards & Modals)
- **Electric Blue:** `#3B82F6` (Interactive Links, Focus Rings, Accents, Technical Highlights; accessible `#2563EB` on light where higher contrast is needed)
- **Muted Gray:** `#64748B` (Metadata & Supporting Text on light) / `#94A3B8` (Supporting Text on dark)
- **Border:** `#E2E8F0` (Light) / `rgba(148, 163, 184, 0.16)` (Dark)

### Typography
- **Display & Body:** `Inter` & `Geist` (`Plus Jakarta Sans` fallback for smooth rendering, loaded via Google Fonts / jsDelivr Geist font CDN)
- **Technical Metadata & Labels:** `Geist Mono` (`JetBrains Mono` / `Fira Code` fallback)

### Rhythm & Alternating Sections
1. **Navbar:** Sticky translucent dark/adaptive header with clean links, CV download, and `3D Drivefolio` entry pill.
2. **Section 01 — Hero (`Deep Navy #0B1120`):** Asymmetric 2-column grid — left: eyebrow, `"Beyond Code. Across Technology."`, `"Multi-disciplinary Technology Engineer"`, supporting narrative, CTAs (`Download CV`, `Explore Projects`, `Contact Me`, `Explore 3D Drivefolio`), LinkedIn/GitHub, Jakarta badge; right: `assets/images/profile.png` portrait framed with subtle engineering coordinates & architecture grid lines + 4 verified scale metrics strip.
3. **Section 02 — About Me (`Off White #F7F8FA`):** `"Bridging Technology, Engineering & Real-World Operations."` + biography, Gunadarma & Informa/Pamerindo highlights, plus 4 interactive engineering pillars (`Quick View` preserved).
4. **Section 03 — Engineering Philosophy (`Deep Navy #0B1120`):** `"Technology Is More Than Writing Code."` + 4 engineering principles (*Build with Purpose*, *Engineer for Reliability*, *Solve Real Problems*, *Keep Learning and Improving*) paired with a clean SVG systems diagram.
5. **Section 04 — Core Expertise (`Pure White #FFFFFF`):** 4 structured capability groups (A. Web Development & Architecture, B. IT Infrastructure & Technical Support, C. Cloud & Business Systems, D. Software Engineering & Automation) + Quick View blueprints for deep technical context.
6. **Section 05 — Technical Stack (`Off White #F7F8FA`):** 7 clean compact categories (Web & CMS, Programming Languages, AI & Python, Databases & Systems, Cloud & Infrastructure, Operations & SEO, Development Tools) — zero fake percentage bars.
7. **Section 06 — Featured Projects (`Deep Navy #0B1120`):** Signature 2 featured rows + responsive 3-column grid of all 12 projects, upgraded 5-way filters (`All Projects`, `Web Development`, `Enterprise Systems`, `AI & Automation`, `IoT & Technology Operations`), `Quick View` modal + dedicated `project.html?id=<slug>` full case studies.
8. **Section 07 — Visual Stories / Photography (`Off White #F7F8FA`):** Editorial gallery preserving all 9 Jakarta stories, 5 category filters, fullscreen Lightbox, and redesigned `article.html?id=<slug>` reader.
9. **Section 08 — 3D Drivefolio Experience (`Midnight Blue #111827`):** Editorial showcase card with archipelago preview, 5-island directory, controls summary, and **"Explore 3D Drivefolio"** launch CTA linking to `drivefolio.html` (lazy-loaded Three.js r128 + mobile alternative + static WebGL fallback).
10. **Section 09 — Professional Experience (`Pure White #FFFFFF`):** Clean architectural timeline for Informa Markets Asia (Jul 2024 — Present) & PT Pamerindo Indonesia (Oct 2023 — Present).
11. **Section 10 — Education & Certifications (`Off White #F7F8FA`):** Universitas Gunadarma Bachelor's (GPA 3.78/4.00, YOLOv8 thesis) & Diploma (GPA 3.77/4.00, ESP8266 project) + 6 compact credential cards.
12. **Section 11 — Contact & CTA (`Deep Navy #0B1120`):** `"Let's Build Something Meaningful."`, Email, WhatsApp, Jakarta location, LinkedIn/GitHub, accessible validated form with honeypot spam field + FormSubmit AJAX + `mailto:` fallback.

---

## 2. Technical Architecture Improvements

- **Zero Framework Bloat on Landing:** Replace 230 KB Bootstrap CSS/JS dependency with clean, semantic custom CSS Grid/Flexbox and modular vanilla ES6+ JavaScript (`js/data.js`, `js/main.js`).
- **Lazy-Loaded 3D Engine:** Move `three.min.js` and `js/drivefolio-3d.js` exclusively to `drivefolio.html` so `index.html` loads cleanly and scores high on Core Web Vitals, while preserving 100% of the 3D Drivefolio functionality (plus WebGL fallback & mobile-friendly stop directory).
- **WebP Image Optimization:** Generate WebP copies in `assets/images/webp/` and `Photo/webp/` using `<picture>` with original PNG/JPEG fallbacks so every original image file remains intact while dramatically reducing page weight.
- **Dedicated Case Study Page (`project.html`):** Supports all 12 projects with structured sections (*Project Overview, Background & Context, Problem Statement, My Role & Responsibilities, Technical Approach, Technology Stack, Implementation, Results & Outcomes, Project Screenshots, Live Website/Repository*), explicitly marking `"Not publicly documented"` where verified public metrics are unavailable.
- **SEO & Accessibility:** Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), skip-to-content link, `:focus-visible` outlines, `prefers-reduced-motion` support, JSON-LD `Person` schema, Open Graph + Twitter cards, canonical URLs, `sitemap.xml`, `robots.txt`, and `vercel.json` cache/security headers.
