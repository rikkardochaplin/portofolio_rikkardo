/* ==========================================================================
   MAIN PORTFOLIO INTERACTIVITY CONTROLLER
   Rikkardo L. Tobing — Multi-disciplinary Technology Engineer
   ========================================================================== */

document.documentElement.classList.add('js-ready');

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollProgress();
  initBackToTop();
  initRevealAnimations();
  initProjectFilters();
  initStoryFilters();
  initArchitectureModal();
  initPhotoLightbox();
  initContactForm();
});

/* ── 1. Sticky Navigation & Mobile Drawer ── */
function initNavigation() {
  const nav = document.getElementById('mainNav');
  const toggleBtn = document.getElementById('nav-toggle');
  const drawer = document.getElementById('mobile-drawer');

  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', String(open));
      const icon = toggleBtn.querySelector('i');
      if (icon) icon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        const icon = toggleBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }

  // Active nav highlight on scroll
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = document.querySelectorAll('main section[id]');
  if (navLinks.length && sections.length) {
    window.addEventListener('scroll', () => {
      const pos = window.scrollY + 140;
      let activeId = '';
      sections.forEach(sec => {
        if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
          activeId = sec.id;
        }
      });
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${activeId}`);
      });
    }, { passive: true });
  }
}

/* ── 2. Scroll Progress Indicator ── */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (max <= 0) return;
    bar.style.width = `${Math.min(100, Math.max(0, (window.scrollY / max) * 100))}%`;
  }, { passive: true });
}

/* ── 3. Back to Top Button ── */
function initBackToTop() {
  const btn = document.getElementById('back-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 480);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── 4. Accessible Intersection Reveal ── */
function initRevealAnimations() {
  const nodes = Array.from(document.querySelectorAll('[data-reveal]'));
  if (!nodes.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    nodes.forEach(n => n.classList.add('revealed'));
    return;
  }

  const revealVisible = () => {
    const vh = window.innerHeight || 900;
    nodes.forEach(n => {
      if (n.classList.contains('revealed')) return;
      const rect = n.getBoundingClientRect();
      if (rect.top <= vh + 120) {
        n.classList.add('revealed');
      }
    });
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01, rootMargin: '120px 0px 120px 0px' });

  nodes.forEach(n => observer.observe(n));
  window.addEventListener('scroll', revealVisible, { passive: true });
  revealVisible();
}

/* ── 5. Project Category Filtering ── */
function initProjectFilters() {
  const filterGroup = document.getElementById('project-filters');
  const cards = document.querySelectorAll('#projects-grid .project-card');
  const countLabel = document.getElementById('projects-count-label');
  if (!filterGroup || !cards.length) return;

  const buttons = filterGroup.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      let visible = 0;
      cards.forEach(card => {
        const cats = (card.getAttribute('data-category') || '').split(/\s+/);
        const match = filter === 'all' || cats.includes(filter);
        card.classList.toggle('is-hidden', !match);
        if (match) visible += 1;
      });
      if (countLabel) {
        countLabel.textContent = `Showing ${visible} of ${cards.length} projects`;
      }
    });
  });
}

/* ── 6. Visual Stories Category Filtering ── */
function initStoryFilters() {
  const filterGroup = document.getElementById('photo-filters');
  const cards = document.querySelectorAll('#stories-grid .story-card');
  if (!filterGroup || !cards.length) return;

  const buttons = filterGroup.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        card.classList.toggle('is-hidden', filter !== 'all' && cat !== filter);
      });
    });
  });
}

/* ── 7. Quick View Technical Blueprint Modal ── */
function initArchitectureModal() {
  const backdrop = document.getElementById('arch-modal-backdrop');
  const modalBody = document.getElementById('modal-body');
  if (!backdrop || !modalBody || !window.PORTFOLIO_DATA) return;

  const badgeEl = document.getElementById('modal-badge');
  const titleEl = document.getElementById('modal-title');
  const subtitleEl = document.getElementById('modal-subtitle');
  const footerTagsEl = document.getElementById('modal-footer-tags');
  const caseStudyLink = document.getElementById('modal-case-study-link');
  const closeBtn = document.getElementById('modal-close-btn');
  const closeBtnBottom = document.getElementById('modal-close-btn-bottom');
  const tabBtns = backdrop.querySelectorAll('.modal-tab-btn');

  let currentEntry = null;
  let lastTrigger = null;

  function resolveEntry(key) {
    const data = window.PORTFOLIO_DATA;
    const proj = data.projects.find(p => p.id === key);
    if (proj) {
      return {
        kind: 'project',
        id: proj.id,
        badge: proj.badge,
        title: proj.title,
        subtitle: proj.metaLine,
        tags: proj.tags,
        tabs: proj.tabs || { overview: `<p>${proj.shortDesc}</p>` }
      };
    }

    const exp = data.expertise.find(e => e.id === key);
    if (exp) {
      return {
        kind: 'service',
        id: exp.id,
        badge: `Core Expertise ${exp.code}`,
        title: exp.blueprintTitle,
        subtitle: exp.blueprintSubtitle,
        tags: exp.blueprintTags,
        tabs: { overview: exp.blueprintOverview }
      };
    }

    const pillar = data.aboutPillars.find(a => a.id === key);
    if (pillar) {
      return {
        kind: 'about',
        id: pillar.id,
        badge: 'Core Engineering Pillar',
        title: pillar.title,
        subtitle: pillar.subtitle,
        tags: pillar.tags,
        tabs: { overview: pillar.overview }
      };
    }

    return null;
  }

  function renderTab(tabKey) {
    if (!currentEntry) return;
    const content = currentEntry.tabs[tabKey] || currentEntry.tabs.overview || '<p class="bp-note">Detailed documentation is available on the full case study page.</p>';
    modalBody.innerHTML = content;
    tabBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-tab') === tabKey));
  }

  function openModal(key, trigger) {
    const entry = resolveEntry(key);
    if (!entry) return;
    currentEntry = entry;
    lastTrigger = trigger || null;

    if (badgeEl) badgeEl.textContent = entry.badge;
    if (titleEl) titleEl.textContent = entry.title;
    if (subtitleEl) subtitleEl.textContent = entry.subtitle;
    if (footerTagsEl) {
      footerTagsEl.innerHTML = (entry.tags || []).map(t => `<span class="tech-tag">${t}</span>`).join('');
    }
    if (caseStudyLink) {
      if (entry.kind === 'project') {
        caseStudyLink.style.display = 'inline-flex';
        caseStudyLink.href = `project.html?id=${encodeURIComponent(entry.id)}`;
      } else {
        caseStudyLink.style.display = 'none';
      }
    }

    renderTab('overview');
    backdrop.classList.add('active');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    backdrop.classList.remove('active');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus();
    }
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.btn-open-modal[data-project], .btn-open-modal[data-service], .btn-open-modal[data-about]');
    if (!trigger) return;
    e.preventDefault();
    const key = trigger.getAttribute('data-project') || trigger.getAttribute('data-service') || trigger.getAttribute('data-about');
    openModal(key, trigger);
  });

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      if (tab) renderTab(tab);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (closeBtnBottom) closeBtnBottom.addEventListener('click', closeModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) closeModal();
  });
}

/* ── 8. Fullscreen Photography Lightbox ── */
function initPhotoLightbox() {
  const backdrop = document.getElementById('lightbox-backdrop');
  const imgEl = document.getElementById('lightbox-img');
  if (!backdrop || !imgEl || !window.PORTFOLIO_DATA) return;

  const stories = window.PORTFOLIO_DATA.stories;
  const titleEl = document.getElementById('lightbox-title');
  const metaEl = document.getElementById('lightbox-meta');
  const storyLink = document.getElementById('lightbox-story-link');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  let currentIndex = 0;
  let lastTrigger = null;

  function showPhoto(idx) {
    currentIndex = (idx + stories.length) % stories.length;
    const item = stories[currentIndex];
    imgEl.src = item.webp || item.img;
    imgEl.alt = item.title;
    if (titleEl) titleEl.textContent = item.title;
    if (metaEl) metaEl.textContent = `${item.location} • ${item.cat} • ${item.date}`;
    if (storyLink) storyLink.href = `article.html?id=${encodeURIComponent(item.id)}`;
  }

  function openLightbox(idx, trigger) {
    lastTrigger = trigger || null;
    showPhoto(idx);
    backdrop.classList.add('active');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    backdrop.classList.remove('active');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastTrigger && typeof lastTrigger.focus === 'function') lastTrigger.focus();
  }

  document.querySelectorAll('[data-photo-index]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const idx = parseInt(el.getAttribute('data-photo-index'), 10);
      if (!isNaN(idx)) openLightbox(idx, el);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => showPhoto(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showPhoto(currentIndex + 1));

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!backdrop.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showPhoto(currentIndex + 1);
    if (e.key === 'ArrowLeft') showPhoto(currentIndex - 1);
  });
}

/* ── 9. Contact Form Validation, Spam Honeypot & FormSubmit Submission ── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('contact-status');
  const submitBtn = document.getElementById('contact-submit-btn');
  if (!form || !statusEl || !submitBtn) return;

  function setStatus(type, message) {
    statusEl.className = `form-status ${type}`;
    statusEl.textContent = message;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const honeypot = document.getElementById('website-hp');
    if (honeypot && honeypot.value.trim() !== '') {
      return;
    }

    const name = (document.getElementById('name')?.value || '').trim();
    const email = (document.getElementById('email')?.value || '').trim();
    const subject = (document.getElementById('subject')?.value || '').trim();
    const message = (document.getElementById('message')?.value || '').trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (name.length < 2) {
      setStatus('error', 'Please enter your full name (at least 2 characters).');
      document.getElementById('name')?.focus();
      return;
    }
    if (!emailRegex.test(email)) {
      setStatus('error', 'Please enter a valid work email address.');
      document.getElementById('email')?.focus();
      return;
    }
    if (message.length < 10) {
      setStatus('error', 'Please enter a message of at least 10 characters.');
      document.getElementById('message')?.focus();
      return;
    }

    const originalHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin" aria-hidden="true"></i> Sending...';
    setStatus('info', 'Submitting your message...');

    try {
      const response = await fetch('https://formsubmit.co/ajax/rikkardotobing1@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          _subject: subject ? `[Portfolio Inquiry] ${subject} — ${name}` : `[Portfolio Inquiry] from ${name}`,
          message,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      setStatus('success', 'Thank you! Your message has been sent to rikkardotobing1@gmail.com.');
      form.reset();
    } catch (err) {
      console.warn('FormSubmit request failed, opening mailto fallback:', err);
      const mailSubject = encodeURIComponent(subject ? `[Portfolio Inquiry] ${subject}` : `Portfolio Inquiry from ${name}`);
      const mailBody = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
      setStatus('error', 'Direct AJAX delivery could not be reached right now. Opening your default email client as a fallback...');
      window.location.href = `mailto:rikkardotobing1@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalHtml;
    }
  });
}
