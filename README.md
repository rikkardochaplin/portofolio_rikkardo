# Rikkardo L. Tobing — Multi-disciplinary Technology Engineer

> **Beyond Code. Across Technology.**  
> Official engineering portfolio website: [https://www.rikkardotobing.my.id/](https://www.rikkardotobing.my.id/)

---

## Overview

This repository powers the personal engineering portfolio of **Rikkardo L. Tobing**, a **Multi-disciplinary Technology Engineer** based in **Jakarta, Indonesia**, working across:
- **Web Development & Architecture** (Enterprise WordPress, Multisite, PHP 8.x, JavaScript, HTML5/CSS3, Technical SEO)
- **IT Infrastructure & Technical Support** (Hardware/Software/Network Troubleshooting, OS Provisioning, Enterprise IT Operations)
- **Cloud & Business Systems** (Microsoft Azure, Mimecast, CRM Synchronization, Data & Reporting Operations)
- **Software Engineering & Automation** (Python, FastAPI, MySQL/SQLite, REST/WebSocket APIs, IoT & Applied AI)

---

## Architecture & Pages

- [`index.html`](index.html) — Primary Hybrid Dark & Light editorial portfolio (Sections 01–11: Hero, About, Engineering Philosophy, Core Expertise, Technical Stack, Featured Projects, Visual Stories, 3D Drivefolio Preview, Experience, Education & Certifications, Contact).
- [`project.html`](project.html) — Dedicated case study reader (`?id=<slug>`) for all 12 projects.
- [`article.html`](article.html) — Visual Story & Photography reader (`?id=<slug>`) for all 9 Jakarta photo essays.
- [`drivefolio.html`](drivefolio.html) — Optional lazy-loaded Three.js (`r128`) 5-island 3D Drivefolio experience with autopilot, day/sunset/night lighting, postcard PNG export, mobile touch controls, and a static WebGL fallback directory.
- [`js/data.js`](js/data.js) — Centralized data layer for projects, stories, expertise, stack, experience, education, and certifications.
- [`js/main.js`](js/main.js) — Navigation drawer, category filters, Quick View Blueprint modal, Photography Lightbox, reveal animations, and validated contact form (FormSubmit AJAX + `mailto:` fallback).
- [`css/style.css`](css/style.css) & [`css/drivefolio.css`](css/drivefolio.css) — Hybrid Dark & Light design tokens (`#0B1120`, `#111827`, `#F7F8FA`, `#FFFFFF`, `#3B82F6`, `#64748B`, `#E2E8F0`) and isolated 3D HUD styles.

---

## Preserved Content Inventory

- **12 Featured Projects:** PT Pamerindo Indonesia, Food & Hospitality Indonesia (FHI), Lab Indonesia, Food, Hotel & Tourism Bali (FHTB), Cosmobeauté Indonesia, Vape Fair Indonesia, Clouds Fest, Beauté Festival, NexusAgent & PamerAi Ecosystem, Orion ERP & IBM iSeries Simulator, CV Examiner AI Pro Platform, Enterprise IoT Remote Hub.
- **9 Visual Stories:** All 9 Jakarta photography stories preserved with original photography, WebP derivatives, lightbox preview, and full narrative pages.
- **Experience, Education & Certifications:** Informa Markets Asia, PT Pamerindo Indonesia, Universitas Gunadarma (Bachelor's GPA 3.78 & Diploma GPA 3.77), and all 6 certifications.

---

## Local Development & Verification

Start a local static server:
```bash
python -m http.server 8080
```
Open `http://localhost:8080`.

Run automated content & asset integrity checks:
```bash
python docs/verify_content_integrity.py
```

Documentation:
- [`docs/WEBSITE_AUDIT.md`](docs/WEBSITE_AUDIT.md)
- [`docs/CONTENT_INVENTORY.md`](docs/CONTENT_INVENTORY.md)
- [`docs/REDESIGN_PLAN.md`](docs/REDESIGN_PLAN.md)
- [`docs/IMPLEMENTATION_CHECKLIST.md`](docs/IMPLEMENTATION_CHECKLIST.md)
- [`docs/TESTING_REPORT.md`](docs/TESTING_REPORT.md)
- [`docs/DEPLOYMENT_GUIDE.md`](docs/DEPLOYMENT_GUIDE.md)
