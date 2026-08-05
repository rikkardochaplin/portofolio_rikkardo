/* ============================================
   PORTFOLIO WEBSITE — MAIN JAVASCRIPT
   ============================================ */

'use strict';

// ── DOM ready ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNavbar();
  initMobileMenu();
  initParticles();
  initTypewriter();
  initScrollReveal();
  initSkillBars();
  initCounters();
  initPortfolioFilter();
  initTestimonialsSlider();
  initContactForm();
  initBackToTop();
  initSmoothScroll();
  initThemeToggle();
  initScrollProgress();
  initTiltEffect();
  initMagneticButtons();
});

/* ============================================
   CUSTOM CURSOR
   ============================================ */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  if (!cursor || !follower) return;

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;
  let rafId;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.14;
    followerY += (mouseY - followerY) * 0.14;
    follower.style.left = followerX + 'px';
    follower.style.top  = followerY + 'px';
    rafId = requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Hover effect on interactive elements
  const hoverEls = document.querySelectorAll('a, button, .filter-btn, .slider-btn, .tech-badge');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('active');
      follower.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
      follower.classList.remove('active');
    });
  });

  // Hide on mobile
  if ('ontouchstart' in window) {
    cursor.style.display = 'none';
    follower.style.display = 'none';
    document.body.style.cursor = 'auto';
  }
}

/* ============================================
   NAVBAR — Scroll Behavior & Active Link
   ============================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Scrolled class
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active section highlight
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentSection = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  });
}

/* ============================================
   MOBILE MENU
   ============================================ */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ============================================
   PARTICLE CANVAS
   ============================================ */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let particles = [];
  let animationFrame;
  let mouse = { x: null, y: null };

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); createParticles(); });

  document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  document.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x    = Math.random() * canvas.width;
      this.y    = Math.random() * canvas.height;
      this.size = Math.random() * 1.8 + 0.4;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.color  = Math.random() > 0.6
        ? `rgba(129,140,248,${this.opacity})`
        : `rgba(99,102,241,${this.opacity * 0.7})`;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Mouse repulsion
      if (mouse.x !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          this.x += (dx / dist) * 1.5;
          this.y += (dy / dist) * 1.5;
        }
      }

      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
      const isLight = document.body.classList.contains('light-mode');
      const rgb = isLight ? '79,70,229' : '129,140,248';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb},${this.opacity})`;
      ctx.fill();
    }
  }

  function createParticles() {
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 120);
    particles = Array.from({ length: count }, () => new Particle());
  }
  createParticles();

  function connectParticles() {
    const maxDist = 110;
    const isLight = document.body.classList.contains('light-mode');
    const rgb = isLight ? '79,70,229' : '129,140,248';
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * (isLight ? 0.25 : 0.15);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${rgb},${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
    animationFrame = requestAnimationFrame(animate);
  }
  animate();

  // Pause when not in viewport to save resources
  const heroSection = document.getElementById('hero');
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      if (!animationFrame) animate();
    } else {
      cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }
  });
  observer.observe(heroSection);
}

/* ============================================
   TYPEWRITER EFFECT
   ============================================ */
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;

  const words = [
    'Web Developer',
    'WordPress Expert',
    'CMS Specialist',
    'SEO Optimizer',
    'IT Support Pro',
    'Frontend Builder'
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let pause = false;

  function type() {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 60 : 100;

    if (pause) {
      setTimeout(type, 1600);
      pause = false;
      return;
    }

    if (!isDeleting) {
      el.textContent = currentWord.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentWord.length) {
        isDeleting = true;
        pause = true;
      }
    } else {
      el.textContent = currentWord.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    setTimeout(type, speed);
  }
  type();
}

/* ============================================
   SCROLL REVEAL (IntersectionObserver)
   ============================================ */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  revealEls.forEach(el => observer.observe(el));
}

/* ============================================
   SKILL BARS ANIMATION
   ============================================ */
function initSkillBars() {
  const fills = document.querySelectorAll('.skill-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const width = fill.getAttribute('data-width');
        fill.style.width = width + '%';
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(fill => observer.observe(fill));
}

/* ============================================
   ANIMATED COUNTERS
   ============================================ */
function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        const duration = 1800;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
          el.textContent = Math.round(eased * target) + (target > 10 ? '+' : '+');
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* ============================================
   PORTFOLIO FILTER
   ============================================ */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        const show = filter === 'all' || category === filter;

        if (show) {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          card.style.display = 'block';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 20);
        } else {
          card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 320);
        }
      });
    });
  });
}

/* ============================================
   TESTIMONIALS SLIDER
   ============================================ */
function initTestimonialsSlider() {
  const track = document.getElementById('testimonials-track');
  const dots  = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');
  if (!track) return;

  const cards = track.querySelectorAll('.testimonial-card');
  const total = cards.length;
  let current = 0;
  let autoPlay;
  let cardsPerView = getCardsPerView();

  function getCardsPerView() {
    return window.innerWidth <= 768 ? 1 : 3;
  }

  function goTo(index) {
    const maxIndex = total - cardsPerView;
    current = Math.max(0, Math.min(index, maxIndex));

    const cardWidth = cards[0].offsetWidth + 28; // card + gap
    track.style.transform = `translateX(-${current * cardWidth}px)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  function startAutoplay() {
    autoPlay = setInterval(() => {
      const maxIndex = total - cardsPerView;
      goTo(current >= maxIndex ? 0 : current + 1);
    }, 4000);
  }

  function stopAutoplay() {
    clearInterval(autoPlay);
  }

  prevBtn?.addEventListener('click', () => { stopAutoplay(); goTo(current - 1); startAutoplay(); });
  nextBtn?.addEventListener('click', () => { stopAutoplay(); goTo(current + 1); startAutoplay(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      stopAutoplay();
      goTo(parseInt(dot.getAttribute('data-index')));
      startAutoplay();
    });
  });

  // Touch/swipe
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      stopAutoplay();
      goTo(diff > 0 ? current + 1 : current - 1);
      startAutoplay();
    }
  });

  window.addEventListener('resize', () => {
    cardsPerView = getCardsPerView();
    goTo(0);
  });

  startAutoplay();
}

/* ============================================
   CONTACT FORM
   ============================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('form-submit-btn');
  const successMsg = document.getElementById('form-success');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const name    = document.getElementById('cf-name');
    const email   = document.getElementById('cf-email');
    const message = document.getElementById('cf-message');
    let valid = true;

    [name, email, message].forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#f87171';
        field.style.boxShadow = '0 0 0 3px rgba(248,113,113,0.12)';
        valid = false;
        setTimeout(() => {
          field.style.borderColor = '';
          field.style.boxShadow = '';
        }, 2500);
      }
    });

    if (!valid) return;

    // Simulate send
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    submitBtn.classList.add('sending');

    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Sent!';
      submitBtn.classList.remove('sending');
      successMsg.classList.add('show');
      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
        successMsg.classList.remove('show');
      }, 4000);
    }, 1800);
  });
}

/* ============================================
   BACK TO TOP
   ============================================ */
/* ============================================
   THEME TOGGLE (Dark / Light Mode)
   ============================================ */
function initThemeToggle() {
  const btn  = document.getElementById('theme-toggle');
  const icon = document.getElementById('theme-icon');
  if (!btn || !icon) return;

  // Apply saved theme on load
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    icon.className = 'fa-solid fa-sun';
  }

  btn.addEventListener('click', () => {
    // Add transition class, toggle theme, remove class after animation
    document.body.classList.add('theme-transitioning');
    document.body.classList.toggle('light-mode');

    const isLight = document.body.classList.contains('light-mode');
    icon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');

    // Remove transition helper after animation completes
    setTimeout(() => document.body.classList.remove('theme-transitioning'), 420);
  });
}

function initBackToTop() {
  const btn = document.getElementById('back-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 500);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================
   SCROLL PROGRESS BAR
   ============================================ */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  const onScroll = () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + '%';
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ============================================
   3D TILT EFFECT ON CARDS
   ============================================ */
function initTiltEffect() {
  if ('ontouchstart' in window) return;

  const cards = document.querySelectorAll('.project-card:not(.project-card--featured), .service-card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.08s ease, border-color 0.3s, box-shadow 0.3s, background 0.3s';
    });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const rotX = ((y - cy) / cy) * -5;
      const rotY = ((x - cx) / cx) * 5;

      card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px) scale(1.01)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1), border-color 0.3s, box-shadow 0.3s, background 0.3s';
      card.style.transform = '';
      setTimeout(() => { card.style.transition = ''; }, 520);
    });
  });
}

/* ============================================
   MAGNETIC BUTTON EFFECT
   ============================================ */
function initMagneticButtons() {
  if ('ontouchstart' in window) return;

  const btns = document.querySelectorAll('.hero-btns .btn, .cta-strip-btns .btn');

  btns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) translateY(-2px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}
