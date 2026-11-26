# Deployment Guide — Rikkardo L. Tobing Portfolio

**Target Domain:** `https://www.rikkardotobing.my.id/`  
**Hosting Platform:** Vercel Static Hosting (`vercel.json` included)  
**Git Remote:** `https://github.com/rikkardochaplin/portofolio_rikkardo.git` (`main`)

---

## 1. Pre-Deployment Verification Checklist

Before deploying to production:
1. Run content integrity check:
   ```bash
   python docs/verify_content_integrity.py
   ```
2. Verify JavaScript syntax:
   ```bash
   node --check js/data.js
   node --check js/main.js
   node --check js/drivefolio-3d.js
   ```
3. Confirm key static files exist at repository root:
   - `index.html`, `project.html`, `article.html`, `drivefolio.html`, `404.html`
   - `css/style.css`, `css/drivefolio.css`
   - `js/data.js`, `js/main.js`, `js/drivefolio-3d.js`
   - `assets/images/` (PNGs + `webp/`), `Photo/` (JPEGs + `webp/`), `assets/data/Rikkardo L. Tobing - Resume.pdf`
   - `robots.txt`, `sitemap.xml`, `vercel.json`
4. **Environment Variables:** None required (100% static frontend). Contact form posts via FormSubmit AJAX to `rikkardotobing1@gmail.com` with `mailto:` fallback.

---

## 2. Backup & Rollback Strategy

- **Git Baseline Tag / Commit:** Before pushing changes, tag or note the current live commit (`cb724cc` on `origin/main`) so you can immediately revert via `git revert` or `git checkout cb724cc`.
- **Vercel Instant Rollback:** In Vercel Dashboard (or via `vercel rollback <deployment-url>`), previous production deployments remain immutable and can be promoted back within seconds.

---

## 3. Recommended Deployment Steps (Preview First)

### Option A: Vercel CLI (Recommended for Preview Before Production)
```bash
# 1. Verify Vercel CLI login & project link
vercel whoami

# 2. Deploy a non-production Preview URL first
vercel deploy

# 3. Verify the Preview URL (all routes, images, 3D Drivefolio, contact form, Lighthouse)
# 4. Only after manual verification & approval, deploy to production:
vercel --prod
```

### Option B: GitHub Integration
1. Commit changes to a feature/preview branch (e.g. `redesign/hybrid-portfolio`) and push to GitHub to generate an automatic Vercel Preview Deployment.
2. Inspect the Preview URL across desktop and mobile devices.
3. Merge into `main` to deploy to `https://www.rikkardotobing.my.id/`.

---

## 4. Post-Deployment Checks
- Confirm `https://www.rikkardotobing.my.id/` serves the new landing page over HTTPS (`200 OK`).
- Confirm `https://www.rikkardotobing.my.id/robots.txt` and `https://www.rikkardotobing.my.id/sitemap.xml` are accessible.
- Submit one test inquiry on `#contact` to confirm FormSubmit activation/delivery to `rikkardotobing1@gmail.com`.
- Run Google Lighthouse on `https://www.rikkardotobing.my.id/` to verify Performance, Accessibility, Best Practices, and SEO targets.
