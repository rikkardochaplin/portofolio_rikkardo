# Website Audit — Rikkardo L. Tobing Portfolio

**Audit Date:** 2026-11-26  
**Target Domain:** `https://www.rikkardotobing.my.id/`  
**Repository:** `c:\Project Pamerindo\4. Vercel-APP\portofolio_rikkardo` (`origin`: `https://github.com/rikkardochaplin/portofolio_rikkardo.git`)

---

## 1. Existing Stack & Architecture

- **Framework:** Static HTML5, CSS3, ES6+ Vanilla JavaScript (zero Node build system).
- **External Libraries (CDN):**
  - Bootstrap `5.3.3` CSS & JS bundle (`cdn.jsdelivr.net`)
  - Font Awesome `6.5.0` (`cdnjs.cloudflare.com`)
  - Google Fonts (`Space Grotesk`, `Cormorant Garamond`, `DM Sans`, `Caveat`, `Fira Code`)
  - Three.js `r128` (`cdnjs.cloudflare.com`) loaded unconditionally in `index.html`
- **Pages & Scripts:**
  - `index.html` (1,591 lines, 87.9 KB) — Currently renders `body.drivefolio-body` (100vh locked Three.js 3D island stage) as the primary landing experience, hiding `#mainNav`, `#quick-dock`, `#scroll-progress`, and `#back-top`, and placing all conventional portfolio sections (`#masthead`, `#about`, `#services`, `#skills`, `#projects`, `#stories`, `#journey`, `#contact`) inside `#df-district-overlay` (a fixed modal dialog).
  - `article.html` (398 lines) — Visual Story reader using `?id=<slug>` query params with inline story dataset.
  - `css/style.css` (3,424 lines) — Collage/Scrapbook theme tokens (`#F2EBDD`, `#25231F`, `#E8B931`, `#D9624A`, `#76948C`) combined with 3D Drivefolio HUD styles.
  - `js/main.js` (1,119 lines) — Portfolio/photo filters, photo lightbox, card tilt, theme toggle, FormSubmit AJAX contact form, and Technical Blueprint modal (`projectsData`).
  - `js/drivefolio-3d.js` (3,044 lines) — Three.js 5-island archipelago driving simulation, 12 project billboards, 4 satellite island hubs, autopilot, day/sunset/night cycle, car customization, minimap, WebAudio engine sound, postcard PNG export, and mobile touch controls.
- **Form Backend:** FormSubmit AJAX endpoint (`https://formsubmit.co/ajax/rikkardotobing1@gmail.com`) with `mailto:` fallback.

---

## 2. Live Website vs. Local Repository Comparison

- Live `https://www.rikkardotobing.my.id/` returned HTTP `200`, `1,591` lines, matching local `index.html` (exact same structure; byte delta 86,225 vs 87,815 due to LF vs CRLF line endings).
- No divergence between live production HTML and local `main` branch.

---

## 3. Identified Issues & Technical Debt

### UX & Information Architecture
1. **3D-First Landing Barrier:** Locking the entire viewport into a WebGL driving game hides the recruiter-critical portfolio content (hero introduction, CV download, experience, projects) behind HUD buttons and overlays.
2. **Missing Dedicated Case Study Pages:** Projects only open a modal (`#arch-modal-backdrop`); several B2B projects only have an `overview` tab while `architecture`/`features`/`specs` tabs fall back to generic placeholder text.
3. **Missing Hero CV Download & Core Expertise Gaps:** The existing `#masthead` lacks a direct "Download CV" CTA button and `Microsoft Azure` / `Mimecast` / `IT Infrastructure` capabilities are not clearly grouped under Core Expertise.
4. **Inconsistent Theme Identity:** Warm scrapbook collage theme conflicts with an international-standard senior technology engineer aesthetic.

### Performance
1. **Heavy Above-the-Fold 3D Bundle:** `three.min.js` (r128) and `drivefolio-3d.js` (3,044 lines) initialize WebGL, 2048x2048 shadow maps, and 16 texture loads immediately on landing.
2. **Uncompressed Raster Images:** Project thumbnails and photography JPEGs range from ~184 KB to 1.78 MB (`project-labindo.png` is 1.78 MB; `cab028f6...jpeg` is 1.59 MB) without WebP variants or explicit `width`/`height` attributes (causing CLS risk).
3. **Render-Blocking External CSS:** Bootstrap 5.3.3 CSS (~230 KB) and multiple font families load upfront even when most Bootstrap utilities are unused.

### SEO & Metadata
1. Missing `<link rel="canonical" href="https://www.rikkardotobing.my.id/" />`, Twitter/X card meta tags, `og:url`, `og:image`, and JSON-LD `Person` structured data.
2. Missing `sitemap.xml` and `robots.txt`.
3. `article.html` uses static default `<title>` and `<meta name="description">` in HTML source and omits canonical/OG tags.

### Accessibility
1. `html:has(body.drivefolio-body)` hides the standard `<nav>` and locks page scroll (`overflow: hidden !important`), making standard keyboard tab navigation through the portfolio impossible without opening a dialog.
2. Clickable `<div class="project-card clickable-card">` elements act as interactive triggers without native `<button>`/`<a>` semantics on the card action alone and lack consistent `:focus-visible` outlines.
3. Modal dialogs (`aria-hidden="true"`) do not always toggle `aria-hidden` or return focus to the trigger element on close.
4. Contact form lacks a spam honeypot and inline validation feedback messages (relies solely on native HTML5 tooltip).

### Deployment Configuration
- No `vercel.json`, `404.html`, `robots.txt`, or `sitemap.xml` exists in the repository root.
