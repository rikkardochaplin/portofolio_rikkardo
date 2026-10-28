# COLLAGE REDESIGN BASELINE & CONTENT INVENTORY
## RIKKARDO L. TOBING PORTFOLIO

**Snapshot Date:** October 28, 2026  
**Status:** PROTECTED CONTENT BASELINE FREEZE  
**Target Website:** https://www.rikkardotobing.my.id/  
**Creative Direction:** The Creative Engineer — A Digital Collage Experience (Scrapbook, Torn Paper, Analog Editorial, Mixed Media)

---

## 1. Technical Framework & Dependencies
- **Core Technology:** Vanilla Semantic HTML5, CSS3, ES6+ JavaScript.
- **CSS Framework:** Bootstrap 5.3.3 (loaded via jsDelivr CDN `bootstrap.min.css`).
- **Icons:** Font Awesome 6.5.0 (`all.min.css` via cdnjs).
- **Fonts (Current Baseline):** Plus Jakarta Sans, Inter, Nunito, Fira Code (Google Fonts).
- **Fonts (Collage Target):** Space Grotesk (Main Heading), Cormorant Garamond (Editorial Emphasis), DM Sans (Body Text), Caveat/Kalam (Decorative Handwritten Accent).
- **Hosting / Deployment Target:** Vercel Static Hosting (compatible with root `index.html`, standard static assets).
- **No external heavy build frameworks (No Node build required, 100% static asset reliability).**

---

## 2. Pages & Navigation Architecture
- **Pages:**
  1. `index.html` (Primary Portfolio Gateway)
  2. `article.html` (Visual Story & Photography Reader with query parameter `?id=...`)
- **Navigation Elements (ID `#mainNav` & `#quick-dock`):**
  - Brand: `Rikkardo L. Tobing` (links to `#page-top`)
  - Nav Item 1: `About` (`#about`)
  - Nav Item 2: `Services` (`#services`)
  - Nav Item 3: `Skills` (`#skills`)
  - Nav Item 4: `Projects` (`#projects`)
  - Nav Item 5: `Visual Stories` (`#stories`)
  - Nav Item 6: `Journey` (`#journey`)
  - Nav Item 7: `Contact` (`#contact`)
  - Theme Toggle Button (`#theme-toggle`, `#theme-toggle-mobile`)
  - Quick Dock (`#quick-dock`) floating navigation with icons and labels for all 7 sections.
  - Back to Top button (`#back-top`) with smooth scroll to top.

---

## 3. Informational Sections Inventory (Preserved Content)

### Hero / Masthead (`#masthead`)
- **Eyebrow:** `Informa Markets Asia • PT Pamerindo Indonesia`
- **Main Heading:** `Rikkardo L. Tobing`
- **Role Badges (3):**
  1. `Senior Web Developer`
  2. `Data & Tech Support Executive`
  3. `AI Systems Builder`
- **Lead Text:**
  `I architect and manage the digital infrastructure behind 8+ international B2B trade platforms across Southeast Asia, delivering fast, reliable web experiences to over 500,000 global trade visitors every year.`
- **Action Buttons (3):**
  1. `View Case Studies` (`#projects`)
  2. `Visual Stories` (`#stories`)
  3. `Get in Touch` (`#contact`)
- **Stats Strip (4 Metrics):**
  - `8+` | `B2B Trade Portals`
  - `500K+` | `Annual Trade Visitors`
  - `99.9%` | `Platform Uptime`
  - `5+ Yrs` | `Engineering Experience`

---

### About Section (`#about`)
- **Section Tag:** `About Me`
- **Title:** `Bridging Web Engineering & Technical Operations`
- **Subtitle:** `With a Computer Engineering background from Universitas Gunadarma and hands-on experience at Informa Markets Asia, I specialize in building dependable digital systems that run smoothly under heavy real-world demand.`
- **Pillars / Cards (4):**
  1. `High-Traffic Web Scale` — Architecting WordPress multisite and custom CMS setups that reliably handle surges of 100K+ concurrent page views during major exhibition dates. (`data-about="about-scale"`)
  2. `Governance & Stability` — Maintaining strict data privacy standards, GDPR-compliant consent workflows, automated backups, and resilient failover configurations. (`data-about="about-gov"`)
  3. `SEO & Performance` — Driving organic discovery across Southeast Asia with structured schema markup, clean indexation, and Core Web Vitals scores above 95. (`data-about="about-seo"`)
  4. `Practical AI Solutions` — Building production ReAct agents, real-time LLM cost-tracking dashboards, and document-grounded RAG assistants for business workflows. (`data-about="about-ai"`)

---

### Services Section (`#services`)
- **Section Tag:** `What I Do`
- **Title:** `Core Capabilities & Engineering Services`
- **Subtitle:** `From multi-region web architecture to custom AI tools and real-time operations, here is how I help organizations build dependable digital platforms.`
- **Service Boxes (4):**
  1. `Web Architecture` (`data-service="service-web"`)
     - Desc: Custom WordPress multisite architectures, tailor-made CMS themes, performance tuning, and global CDN distribution.
     - List: Enterprise WordPress & Multisite | Clean PHP 8.x & Modern JS | Core Web Vitals 95+ Audits | Global CDN & Cache Strategies
  2. `Legacy Modernization` (`data-service="service-erp"`)
     - Desc: Bridging mission-critical enterprise backends (including IBM AS/400 DB2) with fast, responsive modern web dashboards.
     - List: IBM AS/400 & DB2 Connectivity | ODBC & SQL Integration | Automated Invoicing & Workflows | Role-Based Access Controls
  3. `AI & Observability` (`data-service="service-ai"`)
     - Desc: Designing practical AI assistants, LLM cost-tracking dashboards, and document-grounded RAG bots for business operations.
     - List: FastAPI Async Services | Real-Time Token & Cost Metering | Exhibition Document RAG | Automated Messaging Gateways
  4. `Tech Operations` (`data-service="service-ops"`)
     - Desc: Providing responsive technical support, IoT hardware monitoring, live WebSocket data streams, and event-day reliability.
     - List: WebSocket Live Telemetry | Multi-Device Fleet Monitoring | Database Migrations & ETL | Rapid Incident Resolution

---

### Skills & Tech Stack (`#skills`)
- **Section Tag:** `Tech Stack`
- **Title:** `Tools & Technologies I Work With`
- **Subtitle:** `A versatile toolkit balancing reliable backend foundations, modern frontend design, AI workflows, and hands-on system administration.`
- **Skill Boxes (4):**
  1. `Web & CMS`: WordPress Multisite, PHP 8.x Architecture, Modern JavaScript (ES6+), Semantic HTML5 & CSS3, Bootstrap 5.3 Framework
  2. `AI & Python`: Python 3.10+ & FastAPI, ReAct Agent Frameworks, Token Cost Tracking ($/Rp), Document RAG & Embeddings, Automated Chat Gateways
  3. `Databases & Systems`: IBM AS/400 DB2 & RPG IV, MySQL / MariaDB / SQLite, WebSocket Streaming, Chart.js Visualizations, Git CI/CD Workflows
  4. `Operations & SEO`: Structured JSON-LD SEO, Core Web Vitals Tuning, Event IT Infrastructure, System Security Protocols, Digital Storytelling & Media
- **Tech Pills (12):** WordPress Enterprise, PHP 8.2, FastAPI, Python 3.10+, ReAct AI Agents, IBM AS/400 DB2, Bootstrap 5.3, WebSockets, Chart.js, SQLite / SQLAlchemy, Technical SEO, Informa Markets.

---

### Projects & Case Studies (`#projects`)
- **Section Tag:** `Selected Work`
- **Title:** `Featured Case Studies`
- **Subtitle:** `A selection of international trade exhibition portals, internal enterprise tools, autonomous AI experiments, and real-time monitoring platforms.`
- **Signature Featured Projects (2):**
  1. `PT Pamerindo Indonesia` — Flagship Corporate Portal (Informa Markets Asia • 500K+ Trade Visitors, 99.9% Uptime SLA). Tags: Enterprise WordPress, PHP 8.x, Technical SEO, Multilingual CMS.
  2. `NexusAgent & PamerAi Ecosystem` — Autonomous AI & Observability (ReAct Agent Loop, Live Cost Tracking $/Rp). Tags: FastAPI, Python 3.10+, ReAct Architecture, SQLite & Chart.js, WhatsApp Gateway.
- **Catalog Filter Nav:**
  - `All Projects (12)` (`data-filter="all"`)
  - `B2B Trade Portals` (`data-filter="b2b"`)
  - `AI & Enterprise Systems` (`data-filter="system"`)
- **Complete Project Grid (12 Items):**
  1. `PT Pamerindo Indonesia` (Flagship Portal, B2B)
  2. `Food & Hospitality Indonesia (FHI)` (B2B Exhibition, B2B)
  3. `Lab Indonesia` (Scientific B2B, B2B)
  4. `Food, Hotel & Tourism Bali (FHTB)` (Tourism B2B, B2B)
  5. `Cosmobeauté Indonesia` (Beauty B2B, B2B)
  6. `Vape Fair Indonesia` (Industry Hub, B2B)
  7. `Clouds Fest` (Lifestyle Trade, B2B)
  8. `Beauté Festival` (Beauty Lifestyle, B2B)
  9. `NexusAgent & PamerAi Ecosystem` (Autonomous AI, System)
  10. `Orion ERP & IBM iSeries Simulator` (Enterprise ERP, System)
  11. `CV Examiner AI Pro Platform` (AI SaaS, System)
  12. `Enterprise IoT Remote Hub` (Enterprise IoT, System)

---

### Visual Stories & Photography (`#stories`)
- **Section Tag:** `Personal Photography`
- **Title:** `Urban Stories & Perspectives`
- **Subtitle:** `Moments captured through my lens around Jakarta — everyday street scenes, golden hours, transit geometry, and quiet urban observations.`
- **Photo Filters (5):**
  - `All Stories (9)` (`data-filter="all"`)
  - `Street & Everyday Life` (`data-filter="street"`)
  - `Golden Hour & Sunset` (`data-filter="golden-hour"`)
  - `Architecture & Transit` (`data-filter="architecture"`)
  - `Minimalist & Conceptual` (`data-filter="minimalist"`)
- **Stories Inventory (9 Items):**
  1. `Gold in the Mist: The Unseen Workers` (Street, Jakarta, August 2026, Photo/f732741c-ebf2-44c7-a695-bb22e67b1b09.jpeg)
  2. `Silhouettes of Ambition: Sunset Over SCBD` (Golden Hour, SCBD Sudirman, July 2026, Photo/70422342-1920-42e3-93aa-901bd73044f4.jpeg)
  3. `Golden Hour at Platform 2: Kebayoran Station` (Transit, Kebayoran Station, June 2026, Photo/1c5ec77c-2dbb-4c94-8972-b37be21b970b.jpeg)
  4. `Welcome to Isekai: Among Books & Dreams` (Culture, Gramedia Jakarta, May 2026, Photo/ac62e452-a485-48c3-8910-3121f9d75b12.jpeg)
  5. `Two Sources of Light: Sun & Filament` (Minimalist, Rooftop Vista, April 2026, Photo/927d476c-ebb0-4711-a1b9-5663bb9dc8e8.jpeg)
  6. `Dusk Over JIEXPO Kemayoran` (Architecture, JIEXPO Kemayoran, March 2026, Photo/d4b42879-a92f-4b67-b5ab-276e1b17499b.jpeg)
  7. `Crimson Skyline: Fiery Horizon Over Jakarta` (Sunset, South Jakarta, February 2026, Photo/670a2ccb-33de-4b97-b830-467f1d16b05f.jpeg)
  8. `Golden Corona: The Piercing Sun` (Golden Hour, West Jakarta Sky, January 2026, Photo/cab028f6-9277-47ab-863f-b52cd385f268.jpeg)
  9. `Amber Horizon: Solitude of the Street Lamp` (Minimalist, Central Promenade, August 2026, Photo/cb5bf88a-7803-481b-a2e6-abdaa241dadb.jpeg)

---

### Journey (Experience & Education) (`#journey`)
- **Section Tag:** `Background`
- **Title:** `Experience & Education`
- **Subtitle:** `My professional journey in enterprise web development and IT support operations, built on an engineering foundation from Universitas Gunadarma.`
- **Experience Records (2):**
  1. `Jul 2024 — Present` | `Data & Tech Support` | `Informa Markets Asia · Jakarta`
  2. `Oct 2023 — Present` | `Web Development` | `Pamerindo Indonesia · Jakarta`
- **Education & Certifications (3):**
  1. `Apr 2023 — Feb 2024` | `Degree in System Computer (GPA 3.78/4.00)` | `Universitas Gunadarma · Depok`
  2. `Sep 2019 — Aug 2022` | `Diploma in Computer Engineering (GPA 3.77/4.00)` | `Universitas Gunadarma · Depok`
  3. `Certifications & Achievements` | `Professional Certifications` | `Continuous Learning & Standards` (Fortinet NSE 1 & NSE 2, Fortinet Certified Fundamentals in Cybersecurity, BNSP 2022 Junior Computer Network Technician, ServiceNow Fundamentals, Azure Fundamentals, TOEFL 513)

---

### Contact Section (`#contact`)
- **Section Tag:** `Contact`
- **Title:** `Let’s Connect & Collaborate`
- **Subtitle:** `Whether you want to discuss enterprise web architecture, event platform development, custom AI tools, or leadership opportunities, I would love to hear from you.`
- **Contact Info Cards (3):**
  1. Direct Email: `rikkardotobing1@gmail.com`
  2. Phone & WhatsApp: `+62 822-3174-5213` (`https://wa.me/6282231745213`)
  3. Location: `Jakarta, Indonesia 🇮🇩`
- **Transmission Form (`#contactForm`):**
  - Inputs: `name` (required), `email` (required), `subject`, `message` (required).
  - Submit: `Send Message`.
  - Backend integration: FormSubmit AJAX endpoint (`https://formsubmit.co/ajax/rikkardotobing1@gmail.com`) with automatic fallback to `mailto:rikkardotobing1@gmail.com`.

---

### Footer & Modals
- **Footer Socials:**
  - LinkedIn: `https://id.linkedin.com/in/rikkardo-l-tobing`
  - GitHub: `https://github.com/rikkardochaplin`
  - Email: `mailto:rikkardotobing1@gmail.com`
- **Footer Copyright:** `© 2026 Rikkardo L. Tobing. Senior Web Developer & Data Support Executive | Informa Markets Asia.`
- **Modals:**
  1. `#arch-modal-backdrop`: Technical Blueprint Architecture Modal with 4 dynamic tabs (Overview, Architecture, Modules, API Specs) for all 12 projects, 4 services, and 4 about pillars.
  2. `#lightbox-backdrop`: Fullscreen Photography Lightbox Modal with Next/Prev/Esc controls, metadata overlay, and link to `article.html?id=...`.

---

## 4. Preservation Guarantee
Under the Zero Content Modification rule:
- All 1336 lines of textual meaning in `index.html` are preserved verbatim.
- All 12 projects and 9 stories remain intact with identical titles, copy, links, and image paths.
- All interactive behaviors (filters, modals, lightbox, form submission, smooth scroll) remain 100% active.

