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
  initHeroStatCounters();
  initInteractiveMotion();
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

/* ── 4. Accessible Intersection Reveal & Stagger Choreography ── */
function initRevealAnimations() {
  const revealTargets = Array.from(document.querySelectorAll('[data-reveal], #projects-grid, #stories-grid'));
  if (!revealTargets.length) return;

  // Assign stagger indices to architectural grid/list children
  const staggerSelectors = [
    '.pillars-grid-2 .pillar-card',
    '.principles-grid .principle-card',
    '.expertise-grid .expertise-card',
    '.stack-ledger .stack-row',
    '.experience-timeline .timeline-item',
    '.edu-stack .edu-card',
    '.certs-grid .cert-card',
    '.island-nodes-grid .island-node'
  ];
  staggerSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((child, idx) => {
      child.style.setProperty('--stagger-i', String(Math.min(idx, 8)));
    });
  });

  // Also stagger initial compact visible project/story cards cleanly
  document.querySelectorAll('#projects-grid .project-card').forEach((card, idx) => {
    card.style.setProperty('--stagger-i', String(idx % 6));
  });
  document.querySelectorAll('#stories-grid .story-card').forEach((card, idx) => {
    card.style.setProperty('--stagger-i', String(idx % 3));
  });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    revealTargets.forEach(n => n.classList.add('revealed'));
    return;
  }

  const revealVisible = () => {
    const vh = window.innerHeight || 900;
    revealTargets.forEach(n => {
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

  revealTargets.forEach(n => observer.observe(n));
  window.addEventListener('scroll', revealVisible, { passive: true });
  revealVisible();
}

/* ── 4b. Hero Metric Count-Up (Preserves exact final labels) ── */
function initHeroStatCounters() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const stats = Array.from(document.querySelectorAll('.hero-stat-val'));
  if (!stats.length) return;

  stats.forEach((el, index) => {
    const finalStr = el.textContent.trim();
    const match = finalStr.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return;

    const targetVal = parseFloat(match[1]);
    const suffix = match[2];
    const decimals = (match[1].split('.')[1] || '').length;
    const duration = 950 + index * 110;
    const startTime = performance.now() + 260;

    function tick(now) {
      if (now < startTime) {
        requestAnimationFrame(tick);
        return;
      }
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = targetVal * eased;
      el.textContent = t >= 1 ? finalStr : `${current.toFixed(decimals)}${suffix}`;
      if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  });
}

/* ── 4c. Pointer Depth Tilt, Studio Aura, Magnetic CTAs & Scroll Parallax ── */
function initInteractiveMotion() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const heroSec = document.getElementById('hero');
  if (heroSec) {
    let parallaxTicking = false;
    const updateParallax = () => {
      parallaxTicking = false;
      const y = Math.min(26, Math.max(-10, window.scrollY * 0.042));
      heroSec.style.setProperty('--hero-parallax', `${y.toFixed(1)}px`);
    };
    window.addEventListener('scroll', () => {
      if (!parallaxTicking) {
        parallaxTicking = true;
        requestAnimationFrame(updateParallax);
      }
    }, { passive: true });
  }

  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    return;
  }

  if (heroSec) {
    heroSec.addEventListener('pointermove', (e) => {
      const rect = heroSec.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const gx = ((e.clientX - rect.left) / rect.width) * 100;
      const gy = ((e.clientY - rect.top) / rect.height) * 100;
      heroSec.style.setProperty('--hero-gx', `${gx.toFixed(1)}%`);
      heroSec.style.setProperty('--hero-gy', `${gy.toFixed(1)}%`);
    }, { passive: true });
  }

  const spotlightTargets = document.querySelectorAll('.project-card, .drivefolio-showcase-card');
  spotlightTargets.forEach(card => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', `${x.toFixed(1)}%`);
      card.style.setProperty('--my', `${y.toFixed(1)}%`);
    }, { passive: true });
  });

  const frame = document.querySelector('.monograph-frame');
  if (frame) {
    frame.addEventListener('pointermove', (e) => {
      const rect = frame.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      frame.style.setProperty('--tilt-x', `${(-ny * 4.5).toFixed(2)}deg`);
      frame.style.setProperty('--tilt-y', `${(nx * 4.5).toFixed(2)}deg`);
    }, { passive: true });

    frame.addEventListener('pointerleave', () => {
      frame.style.setProperty('--tilt-x', '0deg');
      frame.style.setProperty('--tilt-y', '0deg');
    });
  }

  document.querySelectorAll('.hero-ctas .btn-primary, .nav-drivefolio-pill').forEach(btn => {
    btn.classList.add('btn-magnetic');
    btn.addEventListener('pointermove', (e) => {
      const rect = btn.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.16;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.22;
      btn.style.setProperty('--mag-x', `${dx.toFixed(1)}px`);
      btn.style.setProperty('--mag-y', `${dy.toFixed(1)}px`);
    }, { passive: true });
    btn.addEventListener('pointerleave', () => {
      btn.style.setProperty('--mag-x', '0px');
      btn.style.setProperty('--mag-y', '0px');
    });
  });
}

/* ── 5. Shared Compact Catalog Filtering & Expand Toggle ── */
function initCompactCatalog({
  filterGroupId,
  gridId,
  cardSelector,
  expandBtnId,
  countLabelId,
  compactLimit,
  filterMatcher,
  noun,
  expandLabel,
  expandIcon
}) {
  const filterGroup = document.getElementById(filterGroupId);
  const cards = Array.from(document.querySelectorAll(`#${gridId} ${cardSelector}`));
  const countLabel = document.getElementById(countLabelId);
  const toggleBtn = document.getElementById(expandBtnId);
  if (!filterGroup || !cards.length) return;

  let activeFilter = 'all';
  let expandedAll = false;

  function applyState(animateEntries = false) {
    let visible = 0;

    cards.forEach((card, idx) => {
      const matchesFilter = activeFilter === 'all' || filterMatcher(card, activeFilter);
      const hiddenByCompact = activeFilter === 'all' && !expandedAll && idx >= compactLimit;
      const show = matchesFilter && !hiddenByCompact;
      card.classList.toggle('is-hidden', !matchesFilter);
      card.classList.toggle('is-compact-hidden', hiddenByCompact);
      card.classList.remove('card-entering');
      if (show) {
        if (animateEntries) {
          card.style.setProperty('--stagger-i', String(Math.min(visible, 9)));
          void card.offsetWidth;
          card.classList.add('card-entering');
        }
        visible += 1;
      }
    });

    if (countLabel) {
      countLabel.textContent = activeFilter === 'all' && !expandedAll
        ? `Showing top ${visible} featured of ${cards.length} ${noun}`
        : `Showing ${visible} of ${cards.length} ${noun}`;
    }

    if (toggleBtn) {
      if (activeFilter === 'all' && cards.length > compactLimit) {
        toggleBtn.style.display = 'inline-flex';
        toggleBtn.setAttribute('aria-expanded', String(expandedAll));
        toggleBtn.innerHTML = expandedAll
          ? `<i class="fa-solid fa-compress" aria-hidden="true"></i> Show Compact View (Top ${compactLimit})`
          : `<i class="${expandIcon}" aria-hidden="true"></i> Show All ${cards.length} ${expandLabel} (+${cards.length - compactLimit} more)`;
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
      applyState(true);
    });
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      expandedAll = !expandedAll;
      applyState(true);
    });
  }

  applyState(false);
}

function initProjectFilters() {
  initCompactCatalog({
    filterGroupId: 'project-filters',
    gridId: 'projects-grid',
    cardSelector: '.project-card',
    expandBtnId: 'projects-expand-btn',
    countLabelId: 'projects-count-label',
    compactLimit: 6,
    filterMatcher: (card, filter) => (card.getAttribute('data-category') || '').split(/\s+/).includes(filter),
    noun: 'projects',
    expandLabel: 'Projects',
    expandIcon: 'fa-solid fa-layer-group'
  });
}

/* ── 6. Visual Stories Category Filtering & Compact Toggle ── */
function initStoryFilters() {
  initCompactCatalog({
    filterGroupId: 'photo-filters',
    gridId: 'stories-grid',
    cardSelector: '.story-card',
    expandBtnId: 'stories-expand-btn',
    countLabelId: 'stories-count-label',
    compactLimit: 3,
    filterMatcher: (card, filter) => card.getAttribute('data-category') === filter,
    noun: 'visual stories',
    expandLabel: 'Visual Stories',
    expandIcon: 'fa-regular fa-images'
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
