# Testing Report — Rikkardo L. Tobing Portfolio Redesign

**Test Date:** 2026-11-26  
**Environment:** Local HTTP server (`python -m http.server 8772`), Google Chrome Headless via Chrome DevTools Protocol, Node.js `v25.1.0`, Python `3.14.2`

---

## 1. Content & Asset Integrity Verification (`docs/verify_content_integrity.py`)
- **Result:** `155 / 155` checks passed, `0` failures.
- Verified:
  - All 23 projects (12 core + 11 cloud full-stack SaaS & web apps) present in both `index.html` and `js/data.js`, ranked Tier 1 → Tier 2 → Tier 3 (`docs/PROJECT_PRIORITY_AUDIT.md`)
  - All 9 visual stories present in both `index.html` and `js/data.js`
  - Professional identity (`Multi-disciplinary Technology Engineer`), tagline (`Beyond Code. Across Technology.`), and all 4 career stats (`8+`, `500K+`, `99.9%`, `5+ Yrs`)
  - All experience entries (`Informa Markets Asia`, `PT Pamerindo Indonesia`), education (`Universitas Gunadarma` Bachelor's GPA `3.78 / 4.00` & Diploma GPA `3.77 / 4.00`), and all 6 certifications
  - All contact details, CV PDF link, all 8 exhibition/corporate live links, and all 6 verified public live full-stack SaaS URLs (`tixlantra`, `kelantra`, `seolantra`, `lemburyukk`, `reportlantra`, `emaildetector`), with `AssetFlow IT (Pinjam-Barang)` rendered as a non-clickable `Private Portal` badge while retaining its live UI screenshot
  - Project repository buttons & `View Repository` links hidden across cards and case study pages while preserving main personal GitHub profile link
  - Public `"Vercel Apps"` / `"Live Vercel"` labels removed (`Full-Stack SaaS`, `Production Web App`, `Private Internal App`, `Cloud Hosting & Edge Functions`)
  - Zero Blueprint remnants (`arch-modal-backdrop` and `.btn-open-modal` completely removed; compact `#projects-expand-btn` toggle verified)
  - All referenced PNG, JPEG, and WebP assets exist on disk
  - Design system palette tokens (`#0B1120`, `#111827`, `#F7F8FA`, `#FFFFFF`, `#3B82F6`, `#64748B`, `#E2E8F0`) and typography (`Inter`, `Geist`, `Geist Mono`)

---

## 2. JavaScript Syntax Checks
- `node --check js/data.js` — PASS (exit 0)
- `node --check js/main.js` — PASS (exit 0)
- `node --check js/drivefolio-3d.js` — PASS (exit 0)

---

## 3. Automated Headless Browser & 4-Viewport Responsive Verification
- **Runtime Exceptions:** `0` (`[]`) across `index.html`, `project.html`, and `drivefolio.html`.
- **Blueprint Removal:** `archModalExists: false`, `openModalButtons: 0`.
- **Compact Default & Expand Toggle:**
  - Initial load: `9 / 23` flagship cards visible (`is-compact-hidden` pre-applied for zero FOUC), `compactHeight = 11,178px` on Desktop (`1440px`)
  - Expanded via `#projects-expand-btn`: `23 / 23` cards visible (`expandedHeight = 13,490px`)
  - Collapsed back via `#projects-expand-btn`: `9 / 23` cards visible
- **Image Loading (after full scroll across all 23 cards + 9 stories + monograph plate):** `33 / 33` images on `index.html` loaded with `naturalWidth > 0` (`broken: []`); `0` broken images across sampled case studies (`pamerindo`, `tixlantra`, `kelantra`, `pinjam-barang`, `meeting-registrasi`, `absenlantra`).
- **Responsive Overflow & Layout Checks:**
  - Desktop (`1440x900`): `scrollW = 1425`, `innerW = 1440`, `scrollH = 11,178`, `overflow: false`, `wrappedNav: []`, `navHeight: 71`
  - Laptop (`1024x768`): `scrollW = 1009`, `innerW = 1024`, `scrollH = 13,214`, `overflow: false`, `wrappedNav: []`, `navHeight: 71`
  - Tablet (`768x1024`): `scrollW = 753`, `innerW = 768`, `scrollH = 15,533`, `overflow: false`, `navHeight: 71`
  - Mobile (`375x812`): `scrollW = 375`, `innerW = 375`, `scrollH = 23,527`, `overflow: false`, `navHeight: 71`
  - Mobile Navigation Drawer: opens and closes cleanly (`opened: true, closed: true`)
- **Interactive Flows Tested:**
  - **Project Filters:** `all` -> 9 (compact) / 23 (expanded), `fullstack` -> 11, `web` -> 14, `enterprise` -> 10, `ai` -> 6, `iot` -> 3
  - **Visual Story Filters:** `all` -> 9, `street` -> 2, `golden-hour` -> 3, `architecture` -> 2, `minimalist` -> 2
  - **Photography Lightbox:** opens on `Gold in the Mist: The Unseen Workers`, navigates Next to `Silhouettes of Ambition: Sunset Over SCBD`, closes cleanly (`closed: true`)
  - **3D Drivefolio (`drivefolio.html`):** WebGL `<canvas>` rendered cleanly (`hasCanvas: true`), District Overlay rendered all `23` project directory cards cleanly

---

## 4. Known Limitations / Notes
- **Contact Form Live Delivery:** Live FormSubmit submission was not triggered in automated tests to avoid sending test email spam; validation, honeypot, and `mailto:` fallback are preserved in `js/main.js`.
- **4 Local / Unverified Vercel Workspace Apps:** `online-invitation` (`Online-Invitation` repo linked via GitHub), `meeting-registrasi`, `absenlantra`, and `ai-elysia` keep verified local UI captures and full Case Study pages without fabricating unverified `.vercel.app` URLs.
