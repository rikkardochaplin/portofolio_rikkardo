/* ==========================================================================
   STARTBOOTSTRAP GRAYSCALE — EXECUTIVE & ENGINEERING JAVASCRIPT
   Rikkardo L. Tobing | Executive Portfolio
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarShrink();
  initScrollProgress();
  initBackToTop();
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
        <span class="me-3"><i class="fa-solid fa-location-dot" style="color:var(--accent-gold);"></i> ${item.location}</span>
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

      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ── 8. Theme Switcher (Dark / Light Mode) ── */
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  if (!themeToggle || !themeIcon) return;

  const savedTheme = localStorage.getItem('executive_theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.className = 'fa-solid fa-sun';
  } else {
    document.body.classList.remove('light-mode');
    themeIcon.className = 'fa-solid fa-moon';
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');

    themeIcon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    localStorage.setItem('executive_theme', isLight ? 'light' : 'dark');
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
    'nexusagent': {
      badge: '<i class="fa-solid fa-robot me-1"></i> Autonomous AI Platform • AI Agent',
      title: 'NexusAgent & PamerAi Ecosystem',
      subtitle: 'Autonomous ReAct Multi-Step Agent, Real-Time Token & Cost Observability Platform, Desktop Developer Copilot & B2B Exhibition Intelligence',
      tags: ['FastAPI / Python 3.10+', 'ReAct Agent Loop', 'Token Financial Meter ($/Rp)', 'SQLite / SQLAlchemy 2.0', 'Chart.js Analytics', 'WhatsApp Bot Gateway', 'psutil / Win32', 'Tkinter GUI'],
      tabs: {
        'overview': `
          <div class="mb-4">
            <h5 class="text-warning mb-2"><i class="fa-solid fa-compass me-2"></i> Executive Overview</h5>
            <p><strong>NexusAgent &amp; PamerAi Ecosystem</strong> adalah platform kecerdasan buatan enterprise end-to-end yang mengotomasi alur kerja developer, memberikan transparansi 100% atas biaya dan konsumsi token LLM multi-mata uang ($ USD &amp; Rp IDR), serta menyediakan layanan informasi pameran B2B omnichannel berbasis PDF RAG.</p>
          </div>

          <div class="mb-4 rounded-3 overflow-hidden border border-secondary">
            <img src="assets/images/project-nexusagent.png" alt="NexusAgent Web Dashboard" class="w-100" />
            <div class="p-2 bg-dark text-center text-muted small"><i class="fa-solid fa-chart-line me-1"></i> Real-Time Glassmorphic Observability Web Dashboard &amp; Token Analytics (Chart.js &amp; FastAPI)</div>
          </div>

          <div class="row g-3">
            <div class="col-md-6">
              <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100">
                <div class="text-warning fw-bold small mb-1"><i class="fa-solid fa-brain me-1"></i> Multi-Step Autonomous Reasoning</div>
                <div class="h6 mb-2">ReAct Agent Execution Loop</div>
                <p class="small text-muted mb-0">Mengurai instruksi kompleks menjadi sub-tugas, evaluasi bertahap (*self-reflection*), dan auto error recovery.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100">
                <div class="text-warning fw-bold small mb-1"><i class="fa-solid fa-calculator me-1"></i> Financial Observability</div>
                <div class="h6 mb-2">USD ($) &amp; IDR (Rp) Cost Meter</div>
                <p class="small text-muted mb-0">Pelacakan token presisi per panggilan API dengan katalog harga dinamis dan visualisasi deret waktu Chart.js.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100">
                <div class="text-warning fw-bold small mb-1"><i class="fa-solid fa-laptop-code me-1"></i> Full-Stack DX Copilot</div>
                <div class="h6 mb-2">Live @ai File Watcher</div>
                <p class="small text-muted mb-0">Memantau komentar kode secara real-time dan mengeksekusi sintesis kode otomatis disertai CLI terminal sandbox.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100">
                <div class="text-warning fw-bold small mb-1"><i class="fa-solid fa-comments me-1"></i> Omnichannel Intelligence</div>
                <div class="h6 mb-2">PamerAi &amp; WhatsApp Bot</div>
                <p class="small text-muted mb-0">Grounding 7 klaster industri pameran Informa Markets dengan PDF RAG reader dan WhatsApp 2-way bot.</p>
              </div>
            </div>
          </div>
        `,
        'architecture': `
          <div class="mb-4">
            <h5 class="text-warning mb-2"><i class="fa-solid fa-sitemap me-2"></i> High-Level Multi-Tier Architecture</h5>
            <p>Arsitektur modular berlapis memisahkan antarmuka pengguna, API gateway asinkron, agen penalaran ReAct, eksekusi tool aman, observabilitas token, dan gateway provider LLM.</p>
          </div>

          <div class="d-flex flex-column gap-3">
            <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary d-flex gap-3 align-items-center">
              <div class="fs-3 text-warning"><i class="fa-solid fa-desktop"></i></div>
              <div>
                <h6 class="mb-1 text-white">1. Client Interfaces &amp; Channels Layer</h6>
                <p class="small text-muted mb-0">Modern Glassmorphism Web Dashboard • Standalone Desktop GUI (Tkinter) • Global Hotkey Floating Copilot (Ctrl+Shift+A) • Inline File Watcher (@ai) • WhatsApp Bot Engine.</p>
              </div>
            </div>

            <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary d-flex gap-3 align-items-center">
              <div class="fs-3 text-info"><i class="fa-solid fa-bolt"></i></div>
              <div>
                <h6 class="mb-1 text-white">2. Asynchronous API Gateway (FastAPI &amp; Uvicorn)</h6>
                <p class="small text-muted mb-0">High-performance ASGI runtime • Lifespan database session manager • Pydantic v2 schemas • Asynchronous event streams.</p>
              </div>
            </div>

            <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary d-flex gap-3 align-items-center">
              <div class="fs-3 text-primary"><i class="fa-solid fa-brain"></i></div>
              <div>
                <h6 class="mb-1 text-white">3. Core NexusAgent Intelligence Engine</h6>
                <p class="small text-muted mb-0">ReAct Loop (Thought ➡️ Action ➡️ Observation ➡️ Answer) • Autonomous Goal Planner &amp; Decomposer • Long-Term Persistent Semantic Memory.</p>
              </div>
            </div>

            <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary d-flex gap-3 align-items-center">
              <div class="fs-3 text-success"><i class="fa-solid fa-toolbox"></i></div>
              <div>
                <h6 class="mb-1 text-white">4. Dynamic Tool Registry (Safe Execution Sandbox)</h6>
                <p class="small text-muted mb-0">Fullstack File I/O &amp; Git Diff • Whitelisted CLI Terminal Sandbox • Windows WMI &amp; psutil Hardware Telemetry • PamerAi PDF Extraction &amp; RAG.</p>
              </div>
            </div>
          </div>
        `,
        'features': `
          <div class="row g-3">
            <div class="col-md-6">
              <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100">
                <h6 class="text-warning mb-2"><i class="fa-solid fa-list-check me-2"></i> 1. Autonomous ReAct Engine</h6>
                <p class="small text-muted mb-0">Menerapkan paradigma Reasoning + Acting. Agen merencanakan urutan aksi, memvalidasi hasil observasi, dan melakukan auto-recovery jika instruksi gagal dieksekusi.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100">
                <h6 class="text-warning mb-2"><i class="fa-solid fa-coins me-2"></i> 2. Token &amp; Cost Metering</h6>
                <p class="small text-muted mb-0">Menghitung Prompt Tokens, Completion Tokens, Total Tokens, dan Latensi (ms) per request. Menghasilkan estimasi biaya USD ($) dan Rupiah (Rp) instan.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100">
                <h6 class="text-warning mb-2"><i class="fa-solid fa-eye me-2"></i> 3. Real-Time File Watcher</h6>
                <p class="small text-muted mb-0">Cukup mengetik <code># @ai buat fungsi validasi email</code> dan sistem langsung mengganti komentar tersebut dengan kode hasil inferensi AI secara live.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary h-100">
                <h6 class="text-warning mb-2"><i class="fa-brands fa-whatsapp me-2"></i> 4. Exhibition WhatsApp Bot</h6>
                <p class="small text-muted mb-0">Knowledge base ter-grounding untuk 7 klaster industri pameran B2B PT Pamerindo Indonesia dengan PDF RAG extraction dan bridge WhatsApp 2 arah.</p>
              </div>
            </div>
          </div>
        `,
        'specs': `
          <div class="mb-3">
            <h5 class="text-warning mb-2"><i class="fa-solid fa-code me-2"></i> Key REST API Endpoints</h5>
            <div class="table-responsive">
              <table class="table table-dark table-striped table-bordered small">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Fungsi &amp; Deskripsi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><span class="badge bg-success">POST</span></td><td><code>/api/agent/chat</code></td><td>Eksekusi ReAct agent dengan reasoning step log &amp; tool execution</td></tr>
                  <tr><td><span class="badge bg-success">POST</span></td><td><code>/api/agent/autonomous</code></td><td>Eksekusi misi otonom dengan multi-step goal decomposition</td></tr>
                  <tr><td><span class="badge bg-primary">GET</span></td><td><code>/api/stats/overview</code></td><td>Ringkasan KPI Token (Total Tokens, Biaya USD/IDR, Total Calls, Latensi)</td></tr>
                  <tr><td><span class="badge bg-primary">GET</span></td><td><code>/api/stats/charts</code></td><td>Data deret waktu pemakaian token &amp; distribusi pangsa model untuk Chart.js</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        `
      }
    },
    'orion-erp': {
      badge: '<i class="fa-solid fa-cubes me-1"></i> Enterprise Architecture • ERP System',
      title: 'Orion ERP IBM iSeries Integrated System',
      subtitle: 'Modern Web Front-End Bridge, IBM AS/400 DB2 Connectivity & Multi-Department Automation for Enterprise Scale Operations',
      tags: ['IBM AS/400 DB2', 'PHP Enterprise', 'REST API Bridge', 'Oracle SQL', 'Bootstrap 5', 'Role-Based Access Control', 'Automated Invoicing'],
      tabs: {
        'overview': `
          <div class="mb-4">
            <h5 class="text-warning mb-2"><i class="fa-solid fa-compass me-2"></i> Executive Overview</h5>
            <p><strong>Orion ERP IBM iSeries System</strong> adalah solusi modernisasi enterprise yang menjembatani sistem inti lawas <em>IBM AS/400 (iSeries DB2)</em> dengan antarmuka web modern yang intuitif, aman, dan responsif. Sistem ini menyatukan alur kerja Finance, Procurement, Inventory Warehouse, dan Sales Order ke dalam satu panel terpadu.</p>
          </div>
          <div class="mb-4 rounded-3 overflow-hidden border border-secondary">
            <img src="assets/images/project-orion-erp.png" alt="Orion ERP Dashboard" class="w-100" />
            <div class="p-2 bg-dark text-center text-muted small"><i class="fa-solid fa-layer-group me-1"></i> Orion ERP Master Executive Operations &amp; Financial Flow Portal</div>
          </div>
        `,
        'architecture': `
          <div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary mb-3">
            <h6 class="text-warning"><i class="fa-solid fa-server me-2"></i> IBM DB2 Real-Time ODBC Bridge</h6>
            <p class="small text-muted mb-0">Koneksi langsung dua arah ke database IBM AS/400 tanpa mengorbankan integritas data transaksional ACID.</p>
          </div>
        `,
        'features': `
          <div class="row g-3">
            <div class="col-md-6"><div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary"><h6 class="text-warning">Finance &amp; General Ledger</h6><p class="small text-muted mb-0">Otomatisasi jurnal akuntansi, penutupan buku akhir bulan otomatis, dan laporan laba rugi multi-cabang.</p></div></div>
            <div class="col-md-6"><div class="p-3 rounded-3 bg-black bg-opacity-50 border border-secondary"><h6 class="text-warning">Procurement &amp; Warehouse</h6><p class="small text-muted mb-0">Siklus PR ➡️ PO ➡️ GR dengan multi-tier approval pimpinan via email alert dan FIFO/LIFO tracking.</p></div></div>
          </div>
        `,
        'specs': `
          <p class="small text-muted">Kompatibel dengan IBM DB2 for i (AS/400), PHP 8.2+, Redis session caching, dan LDAP Single Sign-On.</p>
        `
      }
    },
    'cv-examiner': {
      badge: '<i class="fa-solid fa-file-lines me-1"></i> AI Recruiting Platform • SaaS',
      title: 'CV Examiner AI Pro Platform',
      subtitle: 'Automated Resume Parsing, Semantic ATS Scoring, Candidate Match Engine & Executive Hiring Intelligence',
      tags: ['Python / FastAPI', 'OpenAI & Gemini API', 'PDF / DOCX Parser', 'Semantic Match', 'ATS Analyzer', 'Chart.js', 'Export Engine'],
      tabs: {
        'overview': `
          <div class="mb-4">
            <h5 class="text-warning mb-2"><i class="fa-solid fa-compass me-2"></i> Executive Overview</h5>
            <p><strong>CV Examiner AI Pro</strong> adalah platform evaluasi rekrutmen berbasis AI yang menganalisis resume ribuan kandidat secara otomatis. Sistem membaca struktur teks CV dalam format PDF maupun DOCX, mencocokkannya dengan kualifikasi lowongan pekerjaan (*Job Description*), serta menghitung skor kecocokan semantik ATS.</p>
          </div>
          <div class="mb-4 rounded-3 overflow-hidden border border-secondary">
            <img src="assets/images/project-cv-examiner.png" alt="CV Examiner AI Showcase" class="w-100" />
          </div>
        `
      }
    },
    'monitor-tablet': {
      badge: '<i class="fa-solid fa-tablet-screen-button me-1"></i> IoT Architecture • Remote Telemetry',
      title: 'Enterprise IoT & Multi-Device Monitoring Hub',
      subtitle: 'Sub-Second Device Health Telemetry, WebSocket Real-Time Dashboard, Remote Device Management & Fleet Observability',
      tags: ['WebSocket / Asynchronous I/O', 'FastAPI & Python', 'psutil & WMI', 'Chart.js Live Streaming', 'Multi-Device Fleet', 'Alert Dispatcher'],
      tabs: {
        'overview': `
          <div class="mb-4">
            <h5 class="text-warning mb-2"><i class="fa-solid fa-compass me-2"></i> Executive Overview</h5>
            <p><strong>Enterprise IoT &amp; Multi-Device Remote Monitoring System</strong> adalah platform pemantauan perangkat keras terdistribusi yang dirancang untuk memantau armada tablet pameran, perangkat POS, dan workstation operasional secara real-time melalui koneksi WebSocket asinkron dengan latensi sub-detik.</p>
          </div>
          <div class="mb-4 rounded-3 overflow-hidden border border-secondary">
            <img src="assets/images/project-monitor-tablet.png" alt="Enterprise IoT Dashboard" class="w-100" />
          </div>
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

    const tabContent = (project.tabs && project.tabs[tabKey]) || (project.tabs && project.tabs['overview']) || '<p>Content in preparation.</p>';
    modalBody.innerHTML = tabContent;

    if (modalFooterTags) {
      modalFooterTags.innerHTML = project.tags.map(t => `<span class="tech-tag me-1 mb-1 d-inline-block">${t}</span>`).join('');
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

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pKey = btn.getAttribute('data-project') || btn.getAttribute('data-modal') || 'nexusagent';
      openModal(pKey);
    });
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
