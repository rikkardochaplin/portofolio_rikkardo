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

/* ── 5. Project Category Filtering & Compact Toggle ── */
function initProjectFilters() {
  const filterGroup = document.getElementById('project-filters');
  const cards = Array.from(document.querySelectorAll('#projects-grid .project-card'));
  const countLabel = document.getElementById('projects-count-label');
  const toggleBtn = document.getElementById('projects-expand-btn');
  if (!filterGroup || !cards.length) return;

  let activeFilter = 'all';
  let expandedAll = false;
  const COMPACT_LIMIT = 9;

  function applyState() {
    let visible = 0;
    let totalMatching = 0;

    cards.forEach((card, idx) => {
      const cats = (card.getAttribute('data-category') || '').split(/\s+/);
      const matchesFilter = activeFilter === 'all' || cats.includes(activeFilter);
      if (matchesFilter) totalMatching += 1;

      const hiddenByCompact = activeFilter === 'all' && !expandedAll && idx >= COMPACT_LIMIT;
      const show = matchesFilter && !hiddenByCompact;
      card.classList.toggle('is-hidden', !matchesFilter);
      card.classList.toggle('is-compact-hidden', hiddenByCompact);
      if (show) visible += 1;
    });

    if (countLabel) {
      countLabel.textContent = activeFilter === 'all' && !expandedAll
        ? `Showing top ${visible} flagship of ${cards.length} projects`
        : `Showing ${visible} of ${cards.length} projects`;
    }

    if (toggleBtn) {
      if (activeFilter === 'all' && cards.length > COMPACT_LIMIT) {
        toggleBtn.style.display = 'inline-flex';
        toggleBtn.innerHTML = expandedAll
          ? `<i class="fa-solid fa-compress" aria-hidden="true"></i> Show Compact View (Top ${COMPACT_LIMIT})`
          : `<i class="fa-solid fa-layer-group" aria-hidden="true"></i> Show All ${cards.length} Projects (+${cards.length - COMPACT_LIMIT} more)`;
      } else {
        toggleBtn.style.display = 'none';
      }
    }
  }

  const buttons = filterGroup.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter') || 'all';
      applyState();
    });
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      expandedAll = !expandedAll;
      applyState();
    });
  }

  applyState();
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

/* ── 7. Fullscreen Photography Lightbox ── */
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
