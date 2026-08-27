/* ==========================================================================
   STARTBOOTSTRAP GRAYSCALE — EXECUTIVE & ENGINEERING JAVASCRIPT
   Rikkardo L. Tobing | Executive Portfolio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarShrink();
  initScrollProgress();
  initBackToTop();
  initQuickDock();
  initPortfolioFilter();
  initPhotoGalleryFilter();
  initPhotoLightbox();
  initCardTilt();
  initThemeToggle();
  initContactForm();
  initArchitectureModal();
});

/* ── 1. Navbar Shrink Function (Iconic Grayscale Effect) ── */
function initNavbarShrink() {
  const mainNav = document.getElementById('mainNav');
  if (!mainNav) return;

  const navbarShrink = () => {
    if (window.scrollY > 60) {
      mainNav.classList.add('navbar-shrink');
    } else {
      mainNav.classList.remove('navbar-shrink');
    }
  };

  // Shrink now if page is not at top
  navbarShrink();
  window.addEventListener('scroll', navbarShrink);

  // Collapse responsive navbar when toggler is visible and link is clicked
  const navbarToggler = document.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  );

  responsiveNavItems.forEach((item) => {
    item.addEventListener('click', () => {
      if (navbarToggler && window.getComputedStyle(navbarToggler).display !== 'none') {
        const navbarCollapse = document.getElementById('navbarResponsive');
        if (navbarCollapse && typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      }
    });
  });
}

/* ── 2. Scroll Progress Bar ── */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (windowHeight <= 0) return;
    const progress = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  });
}

/* ── 3. Back to Top Button ── */
function initBackToTop() {
  const backTopBtn = document.getElementById('back-top');
  if (!backTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backTopBtn.classList.add('visible');
    } else {
      backTopBtn.classList.remove('visible');
    }
  });

  backTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ── 4. Portfolio Filter System (Scoped to #projects ONLY) ── */
function initPortfolioFilter() {
  const projectsSection = document.getElementById('projects');
  if (!projectsSection) return;

  const filterBtns = projectsSection.querySelectorAll('.filter-btn');
  const projectCards = projectsSection.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const parentCol = card.closest('.col-lg-4, .col-md-6') || card;

        if (filterValue === 'all' || category === filterValue || (category && category.split(' ').includes(filterValue))) {
          parentCol.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
          card.style.opacity = '0';
          card.style.transform = 'translateY(-10px)';
          setTimeout(() => {
            parentCol.style.display = 'none';
          }, 260);
        }
      });
    });
  });
}

/* ── 5. Visual Stories Photo Gallery Filter (Scoped to #stories ONLY) ── */
function initPhotoGalleryFilter() {
  const storiesSection = document.getElementById('stories');
  if (!storiesSection) return;

  const filterBtns = storiesSection.querySelectorAll('.photo-filter-btn');
  const photoCards = storiesSection.querySelectorAll('.photo-card');

  if (!filterBtns.length || !photoCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      photoCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const parentCol = card.closest('.col-lg-4, .col-md-6') || card;

        if (filterValue === 'all' || category === filterValue || (category && category.split(' ').includes(filterValue))) {
          parentCol.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
          card.style.opacity = '0';
          card.style.transform = 'translateY(-10px)';
          setTimeout(() => {
            parentCol.style.display = 'none';
          }, 260);
        }
      });
    });
  });
}

/* ── 6. Fullscreen Photo Lightbox Modal ── */
const photoGalleryData = [
  {
    id: 'gold-in-the-mist',
    title: 'Gold in the Mist: The Unseen Workers',
    category: 'Street Photography',
    location: 'Jakarta, Indonesia',
    date: 'August 2026',
    img: 'Photo/f732741c-ebf2-44c7-a695-bb22e67b1b09.jpeg',
    desc: 'Under harsh afternoon heat, water sprays turn into a veil of liquid gold — capturing an authentic, fleeting moment of urban labor.'
  },
  {
    id: 'silhouettes-scbd',
    title: 'Silhouettes of Ambition: Sunset Over SCBD',
    category: 'Urban Sunset',
    location: 'SCBD Sudirman, Jakarta',
    date: 'July 2026',
    img: 'Photo/70422342-1920-42e3-93aa-901bd73044f4.jpeg',
    desc: 'As the sun dips between concrete giants, the city pauses in dramatic silhouette before the nocturnal pulse ignites.'
  },
  {
    id: 'kebayoran-station',
    title: 'Golden Hour at Platform 2 Kebayoran',
    category: 'Transit Series',
    location: 'Kebayoran Station, Jakarta',
    date: 'June 2026',
    img: 'Photo/1c5ec77c-2dbb-4c94-8972-b37be21b970b.jpeg',
    desc: 'Long shadows stretching across quiet tracks, warm amber light reminding commuters of another day of honest effort accomplished.'
  },
  {
    id: 'welcome-to-isekai',
    title: 'Welcome to Isekai: Among Books & Dreams',
    category: 'Culture & Dreams',
    location: 'Gramedia Jakarta',
    date: 'May 2026',
    img: 'Photo/ac62e452-a485-48c3-8910-3121f9d75b12.jpeg',
    desc: 'Shelves towering with stories of heroes and parallel worlds — finding quiet solace and imagination inside a bustling metropolis.'
  },
  {
    id: 'sun-and-bulb',
    title: 'Two Sources of Light: Sun & Filament',
    category: 'Minimalist View',
    location: 'Rooftop Vista, Jakarta',
    date: 'April 2026',
    img: 'Photo/927d476c-ebb0-4711-a1b9-5663bb9dc8e8.jpeg',
    desc: 'An artificial bulb hanging in vertical harmony above the natural sun behind clouded skies — a reflection on human vs natural illumination.'
  },
  {
    id: 'jiexpo-dusk',
    title: 'Dusk Over JIEXPO Kemayoran',
    category: 'Architecture',
    location: 'JIEXPO Kemayoran, Jakarta',
    date: 'March 2026',
    img: 'Photo/d4b42879-a92f-4b67-b5ab-276e1b17499b.jpeg',
    desc: 'After thousands of trade delegates depart the exhibition halls, evening twilight rests peacefully above Southeast Asia’s trade hub.'
  },
  {
    id: 'crimson-skyline',
    title: 'Crimson Skyline: Fiery Horizon Over Jakarta',
    category: 'Sunset Series',
    location: 'South Jakarta Canopy',
    date: 'February 2026',
    img: 'Photo/670a2ccb-33de-4b97-b830-467f1d16b05f.jpeg',
    desc: 'A vibrant fiery band cutting across evening clouds above silhouetted tree canopies, revealing Jakarta’s dramatic twilight palette.'
  },
  {
    id: 'golden-corona',
    title: 'Golden Corona: The Piercing Sun',
    category: 'Golden Hour',
    location: 'West Jakarta Sky',
    date: 'January 2026',
    img: 'Photo/cab028f6-9277-47ab-863f-b52cd385f268.jpeg',
    desc: 'The afternoon sun burning intensely through atmospheric dust and clouds, casting an ethereal, surreal corona above the urban landscape.'
  },
  {
    id: 'amber-horizon',
    title: 'Amber Horizon: Solitude of the Street Lamp',
    category: 'Urban Geometry',
    location: 'Central Jakarta Promenade',
    date: 'August 2026',
    img: 'Photo/cb5bf88a-7803-481b-a2e6-abdaa241dadb.jpeg',
    desc: 'A solitary Y-shaped street lamp framing a glowing blood-orange sun nestled between delicate branches and clean architectural pillars.'
  }
];

function initPhotoLightbox() {
  const backdrop = document.getElementById('lightbox-backdrop');
  const imgEl = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const metaEl = document.getElementById('lightbox-meta');
  const storyLinkEl = document.getElementById('lightbox-story-link');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  if (!backdrop || !imgEl) return;

  let currentPhotoIndex = 0;

  function openLightbox(index) {
    currentPhotoIndex = (index + photoGalleryData.length) % photoGalleryData.length;
    const item = photoGalleryData[currentPhotoIndex];

    imgEl.src = item.img;
    imgEl.alt = item.title;
    if (titleEl) titleEl.textContent = item.title;
    if (metaEl) {
      metaEl.innerHTML = `
        <span class="me-3"><i class="fa-solid fa-location-dot" style="color:var(--accent-blue-light);"></i> ${item.location}</span>
        <span class="me-3"><i class="fa-solid fa-camera" style="color:var(--accent-cyan);"></i> ${item.category}</span>
        <span><i class="fa-solid fa-calendar" style="color:var(--accent-indigo);"></i> ${item.date}</span>
      `;
    }
    if (storyLinkEl) {
      storyLinkEl.href = `article.html?id=${item.id}`;
    }

    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  function nextPhoto() {
    openLightbox(currentPhotoIndex + 1);
  }

  function prevPhoto() {
    openLightbox(currentPhotoIndex - 1);
  }

  // Bind click on all photo media containers & preview buttons
  document.querySelectorAll('[data-photo-index]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const idx = parseInt(trigger.getAttribute('data-photo-index'), 10);
      openLightbox(idx);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', prevPhoto);
  if (nextBtn) nextBtn.addEventListener('click', nextPhoto);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!backdrop.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextPhoto();
    if (e.key === 'ArrowLeft') prevPhoto();
  });
}

/* ── 7. 3D Card Perspective Tilt Effect ── */
function initCardTilt() {
  const tiltElements = document.querySelectorAll('.project-card, .photo-card, .featured-project-row, .about-card');

  tiltElements.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ── 8. Theme Switcher (Dark / Light Mode) ── */
function initThemeToggle() {
  const toggleButtons = document.querySelectorAll('.theme-toggle-btn');
  if (!toggleButtons.length) return;

  const updateIcons = (isLight) => {
    toggleButtons.forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      }
    });
  };

  const savedTheme = localStorage.getItem('executive_theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    updateIcons(true);
  } else {
    document.body.classList.remove('light-mode');
    updateIcons(false);
  }

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      updateIcons(isLight);
      localStorage.setItem('executive_theme', isLight ? 'light' : 'dark');
    });
  });
}

/* ── 9. Executive Contact Form Transmission ── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (!btn) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const subject = subjectInput ? subjectInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    if (!name || !email || !message) return;

    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin me-2"></i> Transmitting...';

    // Real email transmission via FormSubmit API to rikkardotobing1@gmail.com
    fetch('https://formsubmit.co/ajax/rikkardotobing1@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        _subject: subject ? `[Grayscale Executive Inquiry] ${subject} - from ${name}` : `[Grayscale Portfolio Inquiry] from ${name}`,
        message: message,
        _template: 'table',
        _captcha: 'false'
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok');
    })
    .then(() => {
      btn.innerHTML = '<i class="fa-solid fa-check-double me-2"></i> Inquiry Transmitted Successfully!';
      btn.style.background = '#10B981';
      btn.style.color = '#fff';
      form.reset();

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.style.color = '';
      }, 5000);
    })
    .catch(err => {
      console.warn('FormSubmit AJAX fallback:', err);
      const mailSubject = encodeURIComponent(subject ? `[Executive Inquiry] ${subject}` : `Executive Inquiry from ${name}`);
      const mailBody = encodeURIComponent(`Sender: ${name} (${email})\n\nMessage:\n${message}`);
      window.location.href = `mailto:rikkardotobing1@gmail.com?subject=${mailSubject}&body=${mailBody}`;

      btn.innerHTML = '<i class="fa-solid fa-envelope-open-text me-2"></i> Opening Mail Client...';
      btn.style.background = '#6366F1';
      btn.style.color = '#fff';

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.style.color = '';
      }, 5000);
    });
  });
}

/* ==========================================================================
   10. ARCHITECTURE & TECHNICAL BLUEPRINT MODAL CONTROLLER
   ========================================================================== */
function initArchitectureModal() {
  const backdrop = document.getElementById('arch-modal-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');
  const closeBtnBottom = document.getElementById('modal-close-btn-bottom');
  const tabBtns = document.querySelectorAll('.modal-tab-btn');
  const modalBadge = document.getElementById('modal-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalBody = document.getElementById('modal-body');
  const modalFooterTags = document.getElementById('modal-footer-tags');
  const openButtons = document.querySelectorAll('.btn-open-modal');

  if (!backdrop || !modalBody) return;

  let currentProjectKey = 'nexusagent';
  let currentTabKey = 'overview';

  const projectsData = {
    // ── 1. NexusAgent & PamerAi ──
    'nexusagent': {
      badge: '<i class="fa-solid fa-robot me-1"></i> Autonomous AI Platform',
      title: 'NexusAgent & PamerAi Ecosystem',
      subtitle: 'Autonomous ReAct Multi-Step Agent, Real-Time Token & Cost Observability Platform, Developer Copilot & B2B Exhibition Intelligence',
      tags: ['FastAPI / Python 3.10+', 'ReAct Agent Loop', 'Token Cost Meter ($/Rp)', 'SQLite / SQLAlchemy 2.0', 'Chart.js Analytics', 'WhatsApp Bot Gateway', 'psutil / Win32', 'Tkinter GUI'],
      tabs: {
        'overview': `
          <div class="mb-4">
            <h5 class="text-info mb-2"><i class="fa-solid fa-compass me-2"></i> System Overview</h5>
            <p><strong>NexusAgent &amp; PamerAi</strong> is an end-to-end AI platform built to streamline engineering workflows, provide granular transparency over LLM token consumption in dual currencies (USD $ and IDR Rp), and serve automated event intelligence to trade visitors via WhatsApp and PDF RAG retrieval.</p>
          </div>
          <div class="mb-4 rounded-3 overflow-hidden border border-secondary">
            <img src="assets/images/project-nexusagent.png" alt="NexusAgent Web Dashboard" class="w-100" />
            <div class="p-2 bg-dark text-center text-muted small"><i class="fa-solid fa-chart-line me-1"></i> Real-Time Observability Web Dashboard &amp; Token Financial Analytics (Chart.js &amp; FastAPI)</div>
          </div>
          <div class="row g-3">
            <div class="col-md-6">
              <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100">
                <div class="text-info fw-bold small mb-1"><i class="fa-solid fa-brain me-1"></i> Autonomous Reasoning</div>
                <div class="h6 mb-2">ReAct Execution Loop</div>
                <p class="small text-muted mb-0">Breaks down complex user goals into manageable subtasks with self-reflection, step verification, and automatic error recovery.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100">
                <div class="text-info fw-bold small mb-1"><i class="fa-solid fa-calculator me-1"></i> Financial Observability</div>
                <div class="h6 mb-2">USD ($) &amp; IDR (Rp) Cost Meter</div>
                <p class="small text-muted mb-0">Tracks prompt and completion tokens per API request with live currency conversion and interactive time-series charts.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100">
                <div class="text-info fw-bold small mb-1"><i class="fa-solid fa-laptop-code me-1"></i> Developer Copilot</div>
                <div class="h6 mb-2">Live @ai File Watcher</div>
                <p class="small text-muted mb-0">Monitors code comments in real time, generates tested implementations, and provides a sandboxed terminal execution runner.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100">
                <div class="text-info fw-bold small mb-1"><i class="fa-solid fa-comments me-1"></i> Omnichannel Support</div>
                <div class="h6 mb-2">PamerAi WhatsApp Assistant</div>
                <p class="small text-muted mb-0">Grounds inquiries across Informa Markets exhibition portfolios using vector-indexed PDF floorplans, schedules, and exhibitor lists.</p>
              </div>
            </div>
          </div>
        `,
        'architecture': `
          <div class="mb-4">
            <h5 class="text-info mb-2"><i class="fa-solid fa-sitemap me-2"></i> High-Level System Architecture</h5>
            <p>A decoupled multi-tier architecture isolating user interfaces, asynchronous API routing, reasoning agent loops, tool sandboxing, and token metric persistence.</p>
          </div>
          <div class="d-flex flex-column gap-3">
            <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary d-flex gap-3 align-items-center">
              <div class="fs-3 text-info"><i class="fa-solid fa-desktop"></i></div>
              <div>
                <h6 class="mb-1 text-white">1. Client Interfaces &amp; Channels</h6>
                <p class="small text-muted mb-0">Glassmorphism Web Dashboard • Standalone Desktop GUI (Tkinter) • Global Shortcut Overlay (Ctrl+Shift+A) • Inline Code Watcher • WhatsApp Webhook Gateway.</p>
              </div>
            </div>
            <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary d-flex gap-3 align-items-center">
              <div class="fs-3 text-primary"><i class="fa-solid fa-bolt"></i></div>
              <div>
                <h6 class="mb-1 text-white">2. Asynchronous API Gateway (FastAPI &amp; Uvicorn)</h6>
                <p class="small text-muted mb-0">High-performance ASGI runtime with lifespan database connection pooling, Pydantic v2 data validation, and Server-Sent Events (SSE).</p>
              </div>
            </div>
            <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary d-flex gap-3 align-items-center">
              <div class="fs-3 text-info"><i class="fa-solid fa-brain"></i></div>
              <div>
                <h6 class="mb-1 text-white">3. Core NexusAgent Intelligence Engine</h6>
                <p class="small text-muted mb-0">ReAct Cycle (Thought ➔ Action ➔ Observation ➔ Synthesis) with autonomous goal planning, long-term memory retrieval, and retry logic.</p>
              </div>
            </div>
            <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary d-flex gap-3 align-items-center">
              <div class="fs-3 text-success"><i class="fa-solid fa-toolbox"></i></div>
              <div>
                <h6 class="mb-1 text-white">4. Tool Execution Sandbox</h6>
                <p class="small text-muted mb-0">File I/O diff engine, whitelisted shell runner, system telemetry (psutil/Win32), and document vector search indexing.</p>
              </div>
            </div>
          </div>
        `,
        'features': `
          <div class="row g-3">
            <div class="col-md-6">
              <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100">
                <h6 class="text-info mb-2"><i class="fa-solid fa-list-check me-2"></i> 1. Autonomous ReAct Engine</h6>
                <p class="small text-muted mb-0">Implements the Reasoning + Acting pattern, evaluating execution results step-by-step to achieve multi-phase engineering objectives autonomously.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100">
                <h6 class="text-info mb-2"><i class="fa-solid fa-coins me-2"></i> 2. Token &amp; Cost Metering</h6>
                <p class="small text-muted mb-0">Measures prompt tokens, completion tokens, latency (ms), and cost per call, rendering instant conversion rates in USD and IDR.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100">
                <h6 class="text-info mb-2"><i class="fa-solid fa-eye me-2"></i> 3. Live File Watcher</h6>
                <p class="small text-muted mb-0">Type <code># @ai generate email validator</code> in your source code, and the background watcher immediately synthesizes working code in place.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100">
                <h6 class="text-info mb-2"><i class="fa-brands fa-whatsapp me-2"></i> 4. Event WhatsApp Assistant</h6>
                <p class="small text-muted mb-0">Grounds domain knowledge for 7 exhibition industry clusters at PT Pamerindo Indonesia with PDF RAG search and two-way messaging.</p>
              </div>
            </div>
          </div>
        `,
        'specs': `
          <div class="mb-3">
            <h5 class="text-info mb-2"><i class="fa-solid fa-code me-2"></i> Key REST API Endpoints</h5>
            <div class="table-responsive">
              <table class="table table-dark table-striped table-bordered small">
                <thead>
                  <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
                </thead>
                <tbody>
                  <tr><td><span class="badge bg-success">POST</span></td><td><code>/api/agent/chat</code></td><td>Executes single or multi-turn reasoning steps with tool calls</td></tr>
                  <tr><td><span class="badge bg-success">POST</span></td><td><code>/api/agent/autonomous</code></td><td>Launches goal decomposition for complex autonomous missions</td></tr>
                  <tr><td><span class="badge bg-primary">GET</span></td><td><code>/api/stats/overview</code></td><td>Retrieves KPI metrics: token counts, total costs ($/Rp), and latency averages</td></tr>
                  <tr><td><span class="badge bg-primary">GET</span></td><td><code>/api/stats/charts</code></td><td>Provides time-series usage datasets and model distribution stats for Chart.js</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      }
    },

    // ── 2. Orion ERP ──
    'orion-erp': {
      badge: '<i class="fa-solid fa-cubes me-1"></i> Enterprise Architecture • ERP System',
      title: 'Orion ERP & IBM iSeries Integrated System',
      subtitle: 'Modern Web Front-End Bridge, IBM AS/400 DB2 Connectivity & Multi-Department Automation for Enterprise Scale Operations',
      tags: ['IBM AS/400 DB2', 'PHP Enterprise', 'REST API Bridge', 'Oracle SQL', 'Bootstrap 5', 'Role-Based Access Control', 'Automated Invoicing'],
      tabs: {
        'overview': `
          <div class="mb-4">
            <h5 class="text-info mb-2"><i class="fa-solid fa-compass me-2"></i> System Overview</h5>
            <p><strong>Orion ERP</strong> is an enterprise modernization solution connecting legacy <em>IBM AS/400 (iSeries DB2)</em> backends with modern, secure, and intuitive web interfaces. It unifies financial accounting, procurement workflows, warehouse inventory, and sales order fulfillment into a centralized dashboard.</p>
          </div>
          <div class="mb-4 rounded-3 overflow-hidden border border-secondary">
            <img src="assets/images/project-orion-erp.png" alt="Orion ERP Dashboard" class="w-100" />
            <div class="p-2 bg-dark text-center text-muted small"><i class="fa-solid fa-layer-group me-1"></i> Orion ERP Master Executive Operations &amp; Financial Flow Portal</div>
          </div>
        `,
        'architecture': `
          <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary mb-3">
            <h6 class="text-info"><i class="fa-solid fa-server me-2"></i> IBM DB2 Real-Time ODBC Bridge</h6>
            <p class="small text-muted mb-0">Direct bidirectional integration with IBM AS/400 DB2 tables preserving strict ACID transactional integrity, role-based permissions, and audit logs.</p>
          </div>
        `,
        'features': `
          <div class="row g-3">
            <div class="col-md-6"><div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100"><h6 class="text-info">Finance &amp; General Ledger</h6><p class="small text-muted mb-0">Automated journal entries, month-end ledger closing, and multi-branch P&amp;L reporting.</p></div></div>
            <div class="col-md-6"><div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100"><h6 class="text-info">Procurement &amp; Warehouse</h6><p class="small text-muted mb-0">End-to-end PR ➔ PO ➔ GR workflow with multi-level executive sign-offs and FIFO/LIFO tracking.</p></div></div>
          </div>
        `,
        'specs': `
          <p class="small text-muted">Compatible with IBM DB2 for i (AS/400), PHP 8.2+, Redis session caching, and LDAP/SSO authentication.</p>
        `
      }
    },

    // ── 3. CV Examiner AI ──
    'cv-examiner': {
      badge: '<i class="fa-solid fa-file-lines me-1"></i> AI Recruiting Platform • SaaS',
      title: 'CV Examiner AI Pro Platform',
      subtitle: 'Automated Resume Parsing, Semantic ATS Scoring, Candidate Match Engine & Executive Hiring Intelligence',
      tags: ['Python / FastAPI', 'OpenAI & Gemini API', 'PDF / DOCX Parser', 'Semantic Match', 'ATS Analyzer', 'Chart.js', 'Export Engine'],
      tabs: {
        'overview': `
          <div class="mb-4">
            <h5 class="text-info mb-2"><i class="fa-solid fa-compass me-2"></i> System Overview</h5>
            <p><strong>CV Examiner AI Pro</strong> is an intelligent talent evaluation platform designed to parse, analyze, and score candidate resumes at scale. It extracts structured text from PDF and DOCX files, benchmarks experience against job descriptions, and provides ATS keyword gap analysis along with STAR-method improvement suggestions.</p>
          </div>
          <div class="mb-4 rounded-3 overflow-hidden border border-secondary">
            <img src="assets/images/project-cv-examiner.png" alt="CV Examiner AI Showcase" class="w-100" />
          </div>
        `,
        'architecture': `
          <p class="small text-muted">Leverages FastAPI async processing, token-budgeted prompt engineering, and semantic distance embeddings to evaluate qualifications without bias.</p>
        `,
        'features': `
          <div class="row g-3">
            <div class="col-md-6"><div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100"><h6 class="text-info">ATS Scoring Engine</h6><p class="small text-muted mb-0">Instant scoring of keyword density, section organization, and quantifiable achievement metrics.</p></div></div>
            <div class="col-md-6"><div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100"><h6 class="text-info">STAR Rewriter</h6><p class="small text-muted mb-0">Transforming bullet points into structured Situation, Task, Action, and Result impact statements.</p></div></div>
          </div>
        `,
        'specs': `
          <p class="small text-muted">Supports multi-format parsing, JSON report exports, and candidate comparison matrices.</p>
        `
      }
    },

    // ── 4. IoT Remote Hub ──
    'monitor-tablet': {
      badge: '<i class="fa-solid fa-tablet-screen-button me-1"></i> IoT Architecture • Remote Telemetry',
      title: 'Enterprise IoT & Multi-Device Monitoring Hub',
      subtitle: 'Sub-Second Device Health Telemetry, WebSocket Real-Time Dashboard, Remote Device Management & Fleet Observability',
      tags: ['WebSocket / Asynchronous I/O', 'FastAPI & Python', 'psutil & WMI', 'Chart.js Live Streaming', 'Multi-Device Fleet', 'Alert Dispatcher'],
      tabs: {
        'overview': `
          <div class="mb-4">
            <h5 class="text-info mb-2"><i class="fa-solid fa-compass me-2"></i> System Overview</h5>
            <p><strong>Enterprise IoT &amp; Multi-Device Remote Monitoring Hub</strong> is a distributed hardware telemetry system built to monitor exhibition tablets, POS terminals, and operational workstations in real time over low-latency asynchronous WebSockets.</p>
          </div>
          <div class="mb-4 rounded-3 overflow-hidden border border-secondary">
            <img src="assets/images/project-monitor-tablet.png" alt="Enterprise IoT Dashboard" class="w-100" />
          </div>
        `,
        'architecture': `
          <p class="small text-muted">Lightweight agent installed on Android and Windows endpoints streaming CPU, RAM, battery, network, and app health to a central FastAPI WebSocket server.</p>
        `,
        'features': `
          <div class="row g-3">
            <div class="col-md-6"><div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100"><h6 class="text-info">Live Fleet Matrix</h6><p class="small text-muted mb-0">Instant status overview of all 30+ devices deployed across exhibition halls with battery and network alerts.</p></div></div>
            <div class="col-md-6"><div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100"><h6 class="text-info">Remote Action Dispatch</h6><p class="small text-muted mb-0">Push config updates, trigger kiosk reload, or reboot remote devices with 1-click admin controls.</p></div></div>
          </div>
        `,
        'specs': `
          <p class="small text-muted">Sub-500ms broadcast latency, SQLite history logging, and automated Telegram/Email failure alerts.</p>
        `
      }
    },

    // ── 5. PT Pamerindo Indonesia ──
    'pamerindo': {
      badge: '<i class="fa-solid fa-star me-1"></i> Flagship Corporate Portal',
      title: 'PT Pamerindo Indonesia Corporate Portal',
      subtitle: 'Central Digital Gateway for Indonesia’s Premier B2B Exhibition Organizer (Informa Markets Asia)',
      tags: ['WordPress Enterprise', 'Custom PHP 8.x', 'Technical SEO Schema', 'Multilingual CMS', '99.9% Uptime SLA', 'Multi-Region CDN'],
      tabs: {
        'overview': `
          <div class="mb-4">
            <h5 class="text-info mb-2"><i class="fa-solid fa-compass me-2"></i> Corporate Showcase</h5>
            <p><strong>PT Pamerindo Indonesia</strong> is the corporate gateway connecting 200+ global trade exhibitions and over 500,000 yearly trade visitors across Southeast Asia. Designed for exceptional load speeds, high security, and high-volume event registrations.</p>
          </div>
          <div class="mb-4 rounded-3 overflow-hidden border border-secondary">
            <img src="assets/images/project-pamerindo.png" alt="PT Pamerindo Indonesia" class="w-100" />
          </div>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <span class="small text-muted">Status: Live in Production</span>
            <a href="https://www.pamerindo.com" target="_blank" rel="noopener noreferrer" class="btn btn-blue py-2 px-3">Visit Live Site <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i></a>
          </div>
        `,
        'architecture': `
          <p class="small text-muted">Engineered on a secure WordPress Enterprise stack with Redis caching, Cloudflare CDN, JSON-LD structured schemas, and GDPR-compliant visitor tracking.</p>
        `
      }
    },

    // ── 6. Food & Hospitality Indonesia ──
    'fhi': {
      badge: '<i class="fa-solid fa-utensils me-1"></i> B2B Trade Exhibition',
      title: 'Food & Hospitality Indonesia (FHI)',
      subtitle: 'Premier International Exhibition Platform for F&B and HoReCa Sectors (JIEXPO Kemayoran Jakarta)',
      tags: ['WordPress Multisite', 'Exhibitor Matchmaking', 'Floorplan Engine', 'Lead Capture API', 'High Traffic Tuning'],
      tabs: {
        'overview': `
          <div class="mb-4">
            <h5 class="text-info mb-2"><i class="fa-solid fa-compass me-2"></i> Event Overview</h5>
            <p><strong>Food &amp; Hospitality Indonesia (FHI)</strong> gathers over 40,000 trade attendees and 800+ international exhibitors. The portal features interactive exhibitor directories, seminar registration, and automated VIP badges.</p>
          </div>
          <div class="mb-4 rounded-3 overflow-hidden border border-secondary">
            <img src="assets/images/project-fhi.png" alt="FHI" class="w-100" />
          </div>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <span class="small text-muted">JIEXPO Jakarta • 40,000+ Trade Attendees</span>
            <a href="https://www.foodhospitalityindonesia.com" target="_blank" rel="noopener noreferrer" class="btn btn-blue py-2 px-3">Visit Live Platform <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i></a>
          </div>
        `
      }
    },

    // ── 7. Lab Indonesia ──
    'labindo': {
      badge: '<i class="fa-solid fa-flask me-1"></i> Scientific Trade Exhibition',
      title: 'Lab Indonesia',
      subtitle: 'Southeast Asia’s Leading Exhibition for Laboratory Equipment & Scientific Instrumentation (ICE BSD)',
      tags: ['CMS Architecture', 'Searchable Directory', 'Technical SEO', 'Visitor Analytics', 'Bilingual Portal'],
      tabs: {
        'overview': `
          <div class="mb-4">
            <h5 class="text-info mb-2"><i class="fa-solid fa-compass me-2"></i> Event Overview</h5>
            <p><strong>Lab Indonesia</strong> is the benchmark exhibition for scientific instrumentation in Southeast Asia, connecting over 22,000 researchers, lab managers, and global manufacturers.</p>
          </div>
          <div class="mb-4 rounded-3 overflow-hidden border border-secondary">
            <img src="assets/images/project-labindo.png" alt="Lab Indonesia" class="w-100" />
          </div>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <span class="small text-muted">ICE BSD • 22,000+ Attendees</span>
            <a href="https://www.lab-indo.com" target="_blank" rel="noopener noreferrer" class="btn btn-blue py-2 px-3">Visit Live Platform <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i></a>
          </div>
        `
      }
    },

    // ── 8. Food, Hotel & Tourism Bali ──
    'fhtbali': {
      badge: '<i class="fa-solid fa-hotel me-1"></i> Hospitality & Tourism Trade',
      title: 'Food, Hotel & Tourism Bali (FHTB)',
      subtitle: 'Premier International Hospitality and Resort Trade Platform (BNDCC Nusa Dua Bali)',
      tags: ['WordPress Enterprise', 'Responsive UX', 'Speed Tuning', 'Asia-Pacific Hub', 'Lead Funnel'],
      tabs: {
        'overview': `
          <div class="mb-4">
            <h5 class="text-info mb-2"><i class="fa-solid fa-compass me-2"></i> Event Overview</h5>
            <p><strong>FHT Bali</strong> serves as the eastern Indonesian and Asia-Pacific hub for hospitality procurement, connecting luxury resort operators and culinary experts with global food &amp; hotel tech brands.</p>
          </div>
          <div class="mb-4 rounded-3 overflow-hidden border border-secondary">
            <img src="assets/images/project-fhtbali.png" alt="FHT Bali" class="w-100" />
          </div>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <span class="small text-muted">BNDCC Bali • Asia-Pacific Hub</span>
            <a href="https://www.fhtbali.com" target="_blank" rel="noopener noreferrer" class="btn btn-blue py-2 px-3">Visit Live Platform <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i></a>
          </div>
        `
      }
    },

    // ── 9. Cosmobeauté Indonesia ──
    'cosmobeaute': {
      badge: '<i class="fa-solid fa-spa me-1"></i> Beauty & Aesthetic B2B',
      title: 'Cosmobeauté Indonesia',
      subtitle: 'Indonesia’s Largest B2B Beauty, Aesthetic Technology & Salon Distribution Exhibition Portal (ICE BSD)',
      tags: ['WordPress Customization', 'Lead Capture Engine', 'B2B Directory', 'Exhibitor Matchmaking'],
      tabs: {
        'overview': `
          <div class="mb-4">
            <h5 class="text-info mb-2"><i class="fa-solid fa-compass me-2"></i> Event Overview</h5>
            <p><strong>Cosmobeauté Indonesia</strong> connects aesthetic medical specialists, spa owners, and beauty distributors with international brands and equipment manufacturers.</p>
          </div>
          <div class="mb-4 rounded-3 overflow-hidden border border-secondary">
            <img src="assets/images/project-cosmobeaute.png" alt="Cosmobeaute" class="w-100" />
          </div>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <span class="small text-muted">ICE BSD • Aesthetic Tech Hub</span>
            <a href="https://www.cosmobeauteasia.com/indonesia/" target="_blank" rel="noopener noreferrer" class="btn btn-blue py-2 px-3">Visit Live Platform <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i></a>
          </div>
        `
      }
    },

    // ── 10. Vape Fair Indonesia ──
    'vapefair': {
      badge: '<i class="fa-solid fa-wind me-1"></i> Trade & Consumer Expo',
      title: 'Vape Fair Indonesia',
      subtitle: 'International Alternative Consumer Products & Vaping Industry Exhibition Portal',
      tags: ['WordPress', 'Age Verification', 'Ticketing Flow', 'B2B Directory', 'High Traffic Tuning'],
      tabs: {
        'overview': `
          <div class="mb-4">
            <h5 class="text-info mb-2"><i class="fa-solid fa-compass me-2"></i> Event Overview</h5>
            <p><strong>Vape Fair Indonesia</strong> is an international exhibition portal connecting manufacturers, distributors, and consumers, featuring age-verified digital ticket booking.</p>
          </div>
          <div class="mb-4 rounded-3 overflow-hidden border border-secondary">
            <img src="assets/images/project-vapefair.png" alt="Vape Fair" class="w-100" />
          </div>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <span class="small text-muted">Jakarta • Vaping Industry Exhibition</span>
            <a href="https://www.vapefair.id" target="_blank" rel="noopener noreferrer" class="btn btn-blue py-2 px-3">Visit Live Platform <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i></a>
          </div>
        `
      }
    },

    // ── 11. Clouds Fest ──
    'cloudsfest': {
      badge: '<i class="fa-solid fa-cloud me-1"></i> Lifestyle & Trade Event',
      title: 'Clouds Fest',
      subtitle: 'Dynamic Lifestyle & Trade Showcase Platform for Alternative Consumer Products Across Southeast Asia',
      tags: ['WordPress CMS', 'Event Engine', 'Mobile Optimization', 'Ticketing API'],
      tabs: {
        'overview': `
          <div class="mb-4">
            <h5 class="text-info mb-2"><i class="fa-solid fa-compass me-2"></i> Event Overview</h5>
            <p><strong>Clouds Fest</strong> offers interactive event schedules, musical performer lineups, and exhibitor booths for regional lifestyle trade audiences.</p>
          </div>
          <div class="mb-4 rounded-3 overflow-hidden border border-secondary">
            <img src="assets/images/project-cloudsfest.png" alt="Clouds Fest" class="w-100" />
          </div>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <span class="small text-muted">Southeast Asia • Informa Markets</span>
            <a href="https://www.cloudsfest.com" target="_blank" rel="noopener noreferrer" class="btn btn-blue py-2 px-3">Visit Live Platform <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i></a>
          </div>
        `
      }
    },

    // ── 12. Beauté Festival ──
    'beautefestival': {
      badge: '<i class="fa-solid fa-heart me-1"></i> Consumer Beauty Festival',
      title: 'Beauté Festival',
      subtitle: 'Consumer-Facing Beauty & Wellness Festival Portal with Direct-to-Consumer Activations',
      tags: ['WordPress', 'D2C Portal', 'Influencer Schedule', 'Brand Activations'],
      tabs: {
        'overview': `
          <div class="mb-4">
            <h5 class="text-info mb-2"><i class="fa-solid fa-compass me-2"></i> Event Overview</h5>
            <p><strong>Beauté Festival</strong> brings together beauty enthusiasts, influencers, and leading skincare brands with interactive workshop bookings and live masterclass schedules.</p>
          </div>
          <div class="mb-4 rounded-3 overflow-hidden border border-secondary">
            <img src="assets/images/project-beautefestival.png" alt="Beaute Festival" class="w-100" />
          </div>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <span class="small text-muted">Jakarta • Retail &amp; Activations</span>
            <a href="https://www.beautefestival.com" target="_blank" rel="noopener noreferrer" class="btn btn-blue py-2 px-3">Visit Live Platform <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i></a>
          </div>
        `
      }
    },

    // ── SERVICES ──
    'service-web': {
      badge: '<i class="fa-solid fa-laptop-code me-1"></i> Engineering Service',
      title: 'Web Architecture & CMS Engineering',
      subtitle: 'Enterprise Multisite WordPress, High-Traffic Custom Themes, Core Web Vitals Optimization & CDN Networks',
      tags: ['WordPress Multisite', 'PHP 8.2+', 'Custom CMS', 'Core Web Vitals 95+', 'Cloudflare CDN', 'Nginx Cache'],
      tabs: {
        'overview': `
          <p>I architect scalable corporate websites and multi-site CMS ecosystems that handle traffic spikes during regional trade exhibition dates. Every build incorporates clean semantic HTML5, async script loading, CSS containment, and responsive mobile architecture.</p>
          <ul class="text-secondary small mt-3">
            <li>Sub-second page load times on 3G/4G networks</li>
            <li>Zero-downtime database and asset backups</li>
            <li>Custom Gutenberg blocks and bespoke PHP templates</li>
          </ul>
        `
      }
    },
    'service-erp': {
      badge: '<i class="fa-solid fa-cubes me-1"></i> Engineering Service',
      title: 'Legacy ERP Modernization',
      subtitle: 'Bridging IBM AS/400 DB2 and Legacy Mainframe Backends with Modern Web Dashboards',
      tags: ['IBM AS/400 DB2', 'RPG Simulator', 'ODBC Integration', 'Automated Invoicing', 'Role-Based Access'],
      tabs: {
        'overview': `
          <p>Many enterprises rely on robust AS/400 DB2 systems but need modern, accessible interfaces for sales teams and executives. I build secure REST and ODBC middleware that exposes real-time data without breaking transactional integrity.</p>
        `
      }
    },
    'service-ai': {
      badge: '<i class="fa-solid fa-robot me-1"></i> Engineering Service',
      title: 'AI Systems & LLM Observability',
      subtitle: 'FastAPI Microservices, Autonomous ReAct Reasoning Loops & Real-Time Token Cost Metering',
      tags: ['FastAPI', 'Python 3.10+', 'ReAct Agents', 'Cost Metering ($/Rp)', 'Document RAG', 'WhatsApp Bot'],
      tabs: {
        'overview': `
          <p>From autonomous developer tools to domain-specific RAG bots, I engineer practical AI systems that connect to your business documents and track every dollar and rupiah spent on LLM tokens.</p>
        `
      }
    },
    'service-ops': {
      badge: '<i class="fa-solid fa-magnifying-glass-chart me-1"></i> Engineering Service',
      title: 'Tech Operations & Telemetry',
      subtitle: 'WebSocket Live Telemetry, Multi-Device Fleet Monitoring & 24/7 SLA Incident Support',
      tags: ['WebSocket Streams', 'Hardware Telemetry', 'Fleet Management', 'Incident Response', 'CRM Sync'],
      tabs: {
        'overview': `
          <p>Delivering on-site and remote technical operations for international exhibition events. Managing device fleets, telemetry streams, and database synchronizations with sub-second latency.</p>
        `
      }
    },
    // ── ABOUT CARDS ──
    'about-scale': {
      badge: '<i class="fa-solid fa-network-wired me-1"></i> Core Engineering Pillar',
      title: 'High-Traffic Web Scale & Performance',
      subtitle: 'Architecting WordPress Multisite & Custom CMS Ecosystems Capable of Handling 100K+ Concurrent Surges',
      tags: ['Multisite WordPress', 'High Concurrency', 'Redis Object Caching', 'Cloudflare CDN', 'Nginx Microcaching', '99.9% Uptime'],
      tabs: {
        'overview': `
          <p>During flagship B2B exhibition launches (e.g. FHI Jakarta, Lab Indonesia, FHTB Bali), platforms experience massive concurrent traffic spikes. I design and tune the web infrastructure with distributed caching, async database query optimizations, and global edge delivery to ensure zero downtime and sub-second response times.</p>
        `
      }
    },
    'about-gov': {
      badge: '<i class="fa-solid fa-shield-halved me-1"></i> Core Engineering Pillar',
      title: 'Enterprise Governance & System Stability',
      subtitle: 'Strict Data Privacy, GDPR-Compliant Workflows, Automated Backups & Resilient Failover',
      tags: ['Data Privacy', 'GDPR Compliance', 'Automated Daily Backups', 'Disaster Recovery', 'Role-Based Access', 'Security Audits'],
      tabs: {
        'overview': `
          <p>Managing international trade event platforms requires enterprise-grade governance. I implement automated encrypted database backups, role-based user access controls, strict consent mechanisms, and automated failover routing to maintain system integrity and compliance.</p>
        `
      }
    },
    'about-seo': {
      badge: '<i class="fa-solid fa-chart-line me-1"></i> Core Engineering Pillar',
      title: 'Technical SEO & Core Web Vitals',
      subtitle: 'Structured JSON-LD Schema, Crawl Budget Optimization & Core Web Vitals 95+ Across Southeast Asia',
      tags: ['JSON-LD Schemas', 'Core Web Vitals 95+', 'Lighthouse Optimization', 'Crawl Budget', 'Multilingual Indexing'],
      tabs: {
        'overview': `
          <p>Maximizing organic discovery for hundreds of thousands of international trade visitors. Every platform is audited for Core Web Vitals (LCP &lt; 1.2s, CLS 0.00, INP &lt; 50ms), featuring semantic HTML5 markup, event schema data, and canonical cross-domain indexing.</p>
        `
      }
    },
    'about-ai': {
      badge: '<i class="fa-solid fa-robot me-1"></i> Core Engineering Pillar',
      title: 'Practical AI & Autonomous Systems',
      subtitle: 'ReAct Agent Loops, Real-Time Token Cost Metering ($/Rp) & Document-Grounded RAG',
      tags: ['FastAPI Microservices', 'ReAct Agent Loop', 'Token Observability', 'Document RAG', 'WhatsApp Bot', 'Python 3.10+'],
      tabs: {
        'overview': `
          <p>Engineering production-ready AI tools that directly solve business problems: automated developer copilots, transparent LLM token expense meters in dual currencies ($ USD &amp; Rp IDR), and intelligent event assistants that ground visitor inquiries directly in official exhibition documentation.</p>
        `
      }
    }
  };

  function renderModalContent(projectKey, tabKey) {
    const project = projectsData[projectKey];
    if (!project) return;

    if (modalBadge) modalBadge.innerHTML = project.badge;
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalSubtitle) modalSubtitle.textContent = project.subtitle;

    const tabContent = (project.tabs && project.tabs[tabKey]) || (project.tabs && project.tabs['overview']) || '<p class="text-muted">Detailed technical documentation is active for this system.</p>';
    modalBody.innerHTML = tabContent;

    if (modalFooterTags) {
      modalFooterTags.innerHTML = project.tags ? project.tags.map(t => `<span class="tech-tag me-1 mb-1 d-inline-block">${t}</span>`).join('') : '';
    }

    tabBtns.forEach(btn => {
      if (btn.getAttribute('data-tab') === tabKey) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function openModal(projectKey) {
    currentProjectKey = projectKey;
    currentTabKey = 'overview';
    renderModalContent(currentProjectKey, currentTabKey);
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Bind click on all modal triggers & clickable cards
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-project], [data-service], [data-about], [data-modal], .btn-open-modal');
    if (trigger) {
      // Don't trigger modal if user explicitly clicked an external link <a> with href
      if (e.target.closest('a[href^="http"], a[href^="mailto"], a[href^="https"]')) {
        return;
      }
      e.preventDefault();
      const pKey = trigger.getAttribute('data-project') || trigger.getAttribute('data-service') || trigger.getAttribute('data-about') || trigger.getAttribute('data-modal') || 'nexusagent';
      openModal(pKey);
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (closeBtnBottom) closeBtnBottom.addEventListener('click', closeModal);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) {
      closeModal();
    }
  });

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      if (tab) {
        currentTabKey = tab;
        renderModalContent(currentProjectKey, currentTabKey);
      }
    });
  });
}

/* ── 11. Quick Dock Navigation & Scroll Spy ── */
function initQuickDock() {
  const dock = document.getElementById('quick-dock');
  if (!dock) return;

  const sections = document.querySelectorAll('section[id], header[id]');
  const dockItems = dock.querySelectorAll('.dock-item');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 280) {
      dock.classList.add('visible');
    } else {
      dock.classList.remove('visible');
    }

    let current = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    dockItems.forEach(item => {
      item.classList.remove('active');
      const href = item.getAttribute('href');
      if (href === `#${current}`) {
        item.classList.add('active');
      }
    });
  });
}
