# Testing Report — Rikkardo L. Tobing Portfolio Redesign

**Test Date:** 2026-11-26  
**Environment:** Local HTTP server (`python -m http.server 8765`), Google Chrome Headless via Chrome DevTools Protocol, Node.js `v25.1.0`, Python `3.14.2`

---

## 1. Content & Asset Integrity Verification (`docs/verify_content_integrity.py`)
- **Result:** `146 / 146` checks passed, `0` failures.
- Verified:
  - All 23 projects (12 original + 11 Vercel full-stack apps) present in both `index.html` and `js/data.js`
  - All 9 visual stories present in both `index.html` and `js/data.js`
  - Professional identity (`Multi-disciplinary Technology Engineer`), tagline (`Beyond Code. Across Technology.`), and all 4 career stats (`8+`, `500K+`, `99.9%`, `5+ Yrs`)
  - All experience entries (`Informa Markets Asia`, `PT Pamerindo Indonesia`), education (`Universitas Gunadarma` Bachelor's GPA `3.78 / 4.00` & Diploma GPA `3.77 / 4.00`), and all 6 certifications (`Fortinet NSE 1 & NSE 2`, `Fortinet Certified Fundamentals in Cybersecurity`, `BNSP Junior Computer Network Technician`, `ServiceNow Fundamentals`, `Azure Fundamentals`, `TOEFL Computer-Based, Score 513`)
  - All contact details, CV PDF link, and external URLs
  - All referenced PNG, JPEG, and WebP image assets exist on disk
  - Design system palette tokens (`#0B1120`, `#111827`, `#F7F8FA`, `#FFFFFF`, `#3B82F6`, `#64748B`, `#E2E8F0`) and typography (`Inter`, `Geist`, `Geist Mono`)

---

## 2. JavaScript Syntax & HTTP Route Verification
- `node --check js/data.js` — PASS (exit 0)
- `node --check js/main.js` — PASS (exit 0)
- `node --check js/drivefolio-3d.js` — PASS (exit 0)
- HTTP `GET` checks on local server:
  - `/index.html` -> `200` (88,594 bytes)
  - `/project.html?id=nexusagent` -> `200` (9,582 bytes)
  - `/article.html?id=gold-in-the-mist` -> `200` (7,265 bytes)
  - `/drivefolio.html` -> `200` (18,002 bytes)
  - `/robots.txt` -> `200`
  - `/sitemap.xml` -> `200`
  - `/404.html` -> `200`
  - `/assets/data/Rikkardo%20L.%20Tobing%20-%20Resume.pdf` -> `200` (167,389 bytes)
  - All 45 local assets referenced in `index.html` -> `200`

---

## 3. Automated Headless Browser & Responsive Verification
- **Runtime Exceptions:** `0` (`[]`) across `index.html`, `project.html?id=monitor-tablet`, `article.html?id=gold-in-the-mist`, and `drivefolio.html`.
- **Image Loading (after full scroll):** `35 / 35` images on `index.html` loaded with `naturalWidth > 0` (`broken: []`); `4 / 4` screenshots loaded on `project.html?id=monitor-tablet`; `0` broken images across tested Vercel case studies (`tixlantra`, `kelantra`, `email-check`, `absenlantra`) and `article.html?id=gold-in-the-mist`.
- **Responsive Overflow Checks:**
  - Desktop (`1440x900`): `scrollW = 1425`, `innerW = 1440`, `overflow: false`, `wrappedNav: []`
  - Laptop (`1024x768`): `scrollW = 1009`, `innerW = 1024`, `overflow: false`, `wrappedNav: []`
  - Tablet (`768x1024`): `scrollW = 753`, `innerW = 768`, `overflow: false`
  - Mobile (`375x812`): `scrollW = 375`, `innerW = 375`, `overflow: false`
  - Mobile Navigation Drawer: opens and closes cleanly (`opened: true, closed: true`)
- **Interactive Flows Tested:**
  - **Project Filters (23 total):** `all` -> 23, `vercel` -> 11, `web` -> 14, `enterprise` -> 10, `ai` -> 6, `iot` -> 3
  - **Quick View Blueprint Modal:** opens on `NexusAgent & PamerAi Ecosystem`, switches to `Specs` tab rendering `/api/agent/chat` table, closes cleanly
  - **Visual Story Filters:** `all` -> 9, `street` -> 2, `golden-hour` -> 3, `architecture` -> 2, `minimalist` -> 2
  - **Photography Lightbox:** opens on `Gold in the Mist: The Unseen Workers`, navigates Next to `Silhouettes of Ambition: Sunset Over SCBD`, closes cleanly
  - **Contact Form Validation:** empty submission shows inline accessible error (`"Please enter your full name (at least 2 characters)."`) without triggering a fake success state or network spam
  - **3D Drivefolio (`drivefolio.html`):** WebGL `<canvas>` rendered cleanly (`hasCanvas: true`, `fallbackActive: false`), District Overlay opened 12 project directory cards and closed cleanly

---

## 4. Visual Inspection & Polish Fixes Applied
- Inspected headless Chrome PNG captures at `1440x900`, `768x1024`, and `375x812`:
  - Tightened Hero top padding and stats bar spacing so the 4 verified scale stats fit comfortably above the fold at `1440x900`.
  - Replaced inline `grid-template-columns` style on `#about` pillars grid with `.pillars-grid-2` so mobile (`375px`) stacks to 1 column cleanly.
  - Added `object-position: top center` on project thumbnails and featured cards so site headers aren't cropped.
  - Constrained `.article-frame` width (`max-width: 780px`) on `article.html` to eliminate wide black pillarboxing on portrait photos.

---

## 5. Known Limitations / Notes
- **Contact Form Live Delivery:** Live FormSubmit submission (`https://formsubmit.co/ajax/rikkardotobing1@gmail.com`) was not triggered in automated tests to avoid sending test spam; form validation, honeypot protection, and `mailto:` fallback are verified in code and DOM testing.
- **Lighthouse CLI Score:** Live Lighthouse audit against `https://www.rikkardotobing.my.id/` should be run after preview deployment on Vercel.
- **Chrome DevTools MCP:** Local Chrome remote-debugging port (`DevToolsActivePort`) was inactive, so headless Chrome CDP via `C:\Program Files\Google\Chrome\Application\chrome.exe` was used for automated inspection and screenshots.
