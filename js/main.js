/* ============================================
   EXECUTIVE PORTFOLIO INTERACTIVE CONTROLLER
   Rikkardo L. Tobing | Executive Portfolio
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollProgress();
  initBackToTop();
  initPortfolioFilter();
  initTestimonialsSlider();
  initThemeToggle();
  initContactForm();
  initArchitectureModal();
});

/* ── 1. Navbar Sticky & Mobile Toggle ── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }
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

/* ── 4. Portfolio Filter System ── */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filterValue === 'all' || category === filterValue || (category && category.split(' ').includes(filterValue))) {
          card.style.display = 'flex';
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
            card.style.display = 'none';
          }, 260);
        }
      });
    });
  });
}

/* ── 5. Testimonials Slider ── */
function initTestimonialsSlider() {
  const track = document.getElementById('testimonials-track');
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');
  const dots = document.querySelectorAll('.slider-dot');

  if (!track || !dots.length) return;

  let currentIndex = 0;
  const slideCount = dots.length;

  function updateSlider(index) {
    currentIndex = (index + slideCount) % slideCount;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => updateSlider(currentIndex - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => updateSlider(currentIndex + 1));
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index') || '0', 10);
      updateSlider(index);
    });
  });
}

/* ── 6. Luxury Theme Switcher (Dark / Light) ── */
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

/* ── 7. Executive Contact Form ── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (!btn) return;

    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Transmitting Message...';

    setTimeout(() => {
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Inquiry Received';
      btn.style.background = '#10B981';
      btn.style.color = '#fff';

      form.reset();

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.style.color = '';
      }, 4000);
    }, 1200);
  });
}

/* ============================================
   8. ARCHITECTURE & TECHNICAL SHOWCASE MODAL
   ============================================ */
function initArchitectureModal() {
  const backdrop = document.getElementById('arch-modal-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');
  const closeBtnBottom = document.getElementById('modal-close-btn-bottom');
  const tabBtns = document.querySelectorAll('.arch-tab-btn');
  const modalBadge = document.getElementById('modal-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalBody = document.getElementById('modal-body');
  const modalFooterTags = document.getElementById('modal-footer-tags');
  const openButtons = document.querySelectorAll('.btn-open-modal');

  if (!backdrop || !modalBody) return;

  let currentProjectKey = 'nexusagent';
  let currentTabKey = 'overview';

  // Projects Architecture Data Repository
  const projectsData = {
    'nexusagent': {
      badge: '<i class="fa-solid fa-robot"></i> Autonomous AI Platform • AI Agent',
      title: 'NexusAgent & PamerAi Ecosystem',
      subtitle: 'Autonomous ReAct Multi-Step Agent, Real-Time Token & Cost Observability Platform, Desktop Developer Copilot & B2B Exhibition Intelligence',
      tags: ['FastAPI / Python 3.10+', 'ReAct Agent', 'Token Tracker', 'SQLAlchemy 2.0 / SQLite', 'Chart.js', 'WhatsApp Bot', 'psutil / Win32', 'Tkinter'],
      tabs: {
        'overview': `
          <div class="arch-card">
            <h4 class="arch-card-title"><i class="fa-solid fa-compass"></i> Executive Overview</h4>
            <p><strong>NexusAgent & PamerAi Ecosystem</strong> adalah platform kecerdasan buatan mutakhir yang dirancang end-to-end untuk menyelesaikan 3 tantangan utama di lingkungan enterprise: mengotomasi alur kerja developer, memberikan transparansi 100% atas biaya dan konsumsi token LLM multi-mata uang ($ USD & Rp IDR), serta menyediakan layanan informasi pameran B2B omnichannel berbasis PDF RAG.</p>
          </div>

          <div class="arch-img-box">
            <img src="assets/images/project-nexusagent.png" alt="NexusAgent & PamerAi Web Dashboard" />
            <div class="arch-img-caption"><i class="fa-solid fa-chart-line"></i> Real-Time Glassmorphic Observability Web Dashboard & Token Analytics (Chart.js & FastAPI)</div>
          </div>

          <div class="arch-grid-2">
            <div class="arch-stat-chip">
              <span class="arch-stat-label"><i class="fa-solid fa-brain" style="color:var(--text-gold);"></i> Multi-Step Autonomous Reasoning</span>
              <span class="arch-stat-value">ReAct Agent Execution Loop</span>
              <p style="font-size:0.84rem; color:var(--text-secondary); margin-top:4px;">Mengurai instruksi kompleks menjadi sub-tugas, evaluasi bertahap (*self-reflection*), dan auto error recovery.</p>
            </div>
            <div class="arch-stat-chip">
              <span class="arch-stat-label"><i class="fa-solid fa-calculator" style="color:var(--text-gold);"></i> Financial Observability</span>
              <span class="arch-stat-value">USD ($) & IDR (Rp) Cost Meter</span>
              <p style="font-size:0.84rem; color:var(--text-secondary); margin-top:4px;">Pelacakan token presisi per panggilan API dengan katalog harga dinamis dan visualisasi deret waktu Chart.js.</p>
            </div>
            <div class="arch-stat-chip">
              <span class="arch-stat-label"><i class="fa-solid fa-laptop-code" style="color:var(--text-gold);"></i> Full-Stack DX Copilot</span>
              <span class="arch-stat-value">Live @ai File Watcher</span>
              <p style="font-size:0.84rem; color:var(--text-secondary); margin-top:4px;">Memantau komentar kode secara real-time dan mengeksekusi sintesis kode otomatis disertai CLI terminal sandbox.</p>
            </div>
            <div class="arch-stat-chip">
              <span class="arch-stat-label"><i class="fa-solid fa-comments" style="color:var(--text-gold);"></i> Omnichannel Intelligence</span>
              <span class="arch-stat-value">PamerAi & WhatsApp Bot</span>
              <p style="font-size:0.84rem; color:var(--text-secondary); margin-top:4px;">Grounding 7 klaster industri pameran Informa Markets dengan PDF RAG reader dan WhatsApp 2-way bot.</p>
            </div>
          </div>
        `,
        'architecture': `
          <div class="arch-card">
            <h4 class="arch-card-title"><i class="fa-solid fa-sitemap"></i> High-Level Multi-Tier Architecture</h4>
            <p>Arsitektur modular berlapis memisahkan antarmuka pengguna, API gateway asinkron, agen penalaran ReAct, eksekusi tool aman, observabilitas token, dan gateway provider LLM.</p>
          </div>

          <div class="arch-flow-diagram">
            <div class="arch-flow-step">
              <div class="arch-flow-icon"><i class="fa-solid fa-desktop"></i></div>
              <div class="arch-flow-info">
                <h5>1. Client Interfaces & Channels Layer</h5>
                <p>Modern Glassmorphism Web Dashboard • Standalone Desktop GUI (Tkinter) • Global Hotkey Floating Copilot (Ctrl+Shift+A) • Inline File Watcher (@ai) • WhatsApp Bot Engine.</p>
              </div>
            </div>

            <div class="arch-flow-step">
              <div class="arch-flow-icon"><i class="fa-solid fa-bolt"></i></div>
              <div class="arch-flow-info">
                <h5>2. Asynchronous API Gateway (FastAPI & Uvicorn)</h5>
                <p>High-performance ASGI runtime • Lifespan database session manager • Pydantic v2 data validation schemas • Asynchronous event streams.</p>
              </div>
            </div>

            <div class="arch-flow-step">
              <div class="arch-flow-icon"><i class="fa-solid fa-brain"></i></div>
              <div class="arch-flow-info">
                <h5>3. Core NexusAgent Intelligence Engine</h5>
                <p>ReAct Loop (Thought ➡️ Action ➡️ Observation ➡️ Answer) • Autonomous Goal Planner & Decomposer • Long-Term Persistent Semantic Memory Store.</p>
              </div>
            </div>

            <div class="arch-flow-step">
              <div class="arch-flow-icon"><i class="fa-solid fa-toolbox"></i></div>
              <div class="arch-flow-info">
                <h5>4. Dynamic Tool Registry (Safe Execution Sandbox)</h5>
                <p>Fullstack File I/O & Git Diff • Whitelisted CLI Terminal Sandbox • Windows WMI & psutil Hardware Telemetry • PamerAi PDF Extraction & RAG Engine.</p>
              </div>
            </div>

            <div class="arch-flow-step">
              <div class="arch-flow-icon"><i class="fa-solid fa-chart-pie"></i></div>
              <div class="arch-flow-info">
                <h5>5. Financial Observability & Storage Layer</h5>
                <p>SQLite Storage (token_tracker.db) • Dynamic per-million-token Pricing Matrix ($/Rp) • Time-series analytics aggregation.</p>
              </div>
            </div>

            <div class="arch-flow-step">
              <div class="arch-flow-icon"><i class="fa-solid fa-network-wired"></i></div>
              <div class="arch-flow-info">
                <h5>6. Multi-LLM Provider Layer</h5>
                <p>OpenAI (GPT-4o) • Google Gemini (2.0 Flash / 1.5 Pro) • Anthropic Claude • Groq LPU • Ollama (Local Offline) • Elysia Simulated Engine.</p>
              </div>
            </div>
          </div>
        `,
        'features': `
          <div class="arch-grid-2">
            <div class="arch-card">
              <h4 class="arch-card-title"><i class="fa-solid fa-list-check"></i> 1. Autonomous ReAct Engine</h4>
              <p>Menerapkan paradigma *Reasoning + Acting*. Agen tidak hanya menjawab teks tetapi merencanakan urutan aksi, memvalidasi hasil observasi (*self-reflection*), dan memulihkan diri (*auto-recovery*) jika instruksi gagal dieksekusi.</p>
            </div>

            <div class="arch-card">
              <h4 class="arch-card-title"><i class="fa-solid fa-coins"></i> 2. Token & Cost Metering</h4>
              <p>Menghitung Prompt Tokens, Completion Tokens, Total Tokens, dan Latensi (ms) per request. Menghasilkan estimasi biaya USD ($) dan Rupiah (Rp) secara instan, dilengkapi grafik tren harian dan paginasi log audit.</p>
            </div>

            <div class="arch-card">
              <h4 class="arch-card-title"><i class="fa-solid fa-eye"></i> 3. Real-Time File Watcher</h4>
              <p>Engine <code>watcher.py</code> mendengarkan modifikasi file. Pengembang cukup mengetik <code># @ai buat fungsi validasi email</code> dan sistem langsung mengganti komentar tersebut dengan kode hasil inferensi AI secara live.</p>
            </div>

            <div class="arch-card">
              <h4 class="arch-card-title"><i class="fa-solid fa-gauge"></i> 4. Hardware Telemetry Widget</h4>
              <p>Mengintegrasikan <code>psutil</code> dan Windows Win32 ctypes API untuk memantau utilitas CPU, RAM, Disk, dan baterai. Widget desktop always-on-top dapat dipanggil kapan saja dengan hotkey <code>Ctrl + Shift + A</code>.</p>
            </div>

            <div class="arch-card" style="grid-column: 1 / -1;">
              <h4 class="arch-card-title"><i class="fa-brands fa-whatsapp"></i> 5. PamerAi Exhibition Intelligence & WhatsApp 2-Way Bot</h4>
              <p>Knowledge base ter-grounding untuk 7 klaster industri pameran B2B PT Pamerindo Indonesia (Manufaktur, Energi/Mining, F&B/FHI, Beauty/Cosmobeauté, Lab Indonesia 2026, dll.) dengan PDF RAG extraction dan bridge pesan WhatsApp 2 arah otomatis.</p>
            </div>
          </div>
        `,
        'specs': `
          <div class="arch-card">
            <h4 class="arch-card-title"><i class="fa-solid fa-code"></i> Key REST API Endpoints Specification</h4>
            <p>FastAPI melayani REST API asinkron dengan dokumentasi OpenAPI / Swagger UI interaktif:</p>
            
            <div class="arch-table-wrap">
              <table class="arch-table">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Fungsi &amp; Deskripsi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="arch-method-post">POST</span></td>
                    <td><code>/api/agent/chat</code></td>
                    <td>Eksekusi ReAct agent dengan reasoning step log &amp; tool execution</td>
                  </tr>
                  <tr>
                    <td><span class="arch-method-post">POST</span></td>
                    <td><code>/api/agent/autonomous</code></td>
                    <td>Eksekusi misi otonom dengan multi-step goal decomposition</td>
                  </tr>
                  <tr>
                    <td><span class="arch-method-get">GET</span></td>
                    <td><code>/api/stats/overview</code></td>
                    <td>Ringkasan KPI Token (Total Tokens, Biaya USD/IDR, Total Calls, Latensi)</td>
                  </tr>
                  <tr>
                    <td><span class="arch-method-get">GET</span></td>
                    <td><code>/api/stats/charts</code></td>
                    <td>Data deret waktu pemakaian token &amp; distribusi pangsa model untuk Chart.js</td>
                  </tr>
                  <tr>
                    <td><span class="arch-method-get">GET</span></td>
                    <td><code>/api/logs</code></td>
                    <td>Riwayat log transaksi token dengan paginasi, filter model &amp; pencarian</td>
                  </tr>
                  <tr>
                    <td><span class="arch-method-get">GET</span></td>
                    <td><code>/api/system/telemetry</code></td>
                    <td>Telemetri real-time hardware laptop (CPU %, RAM %, Disk, Baterai, Latensi)</td>
                  </tr>
                  <tr>
                    <td><span class="arch-method-get">GET</span></td>
                    <td><code>/api/fullstack/structure</code></td>
                    <td>Inspeksi struktur pohon hierarki file proyek secara rekursif</td>
                  </tr>
                  <tr>
                    <td><span class="arch-method-post">POST</span></td>
                    <td><code>/api/pamerai/chat</code></td>
                    <td>Interaksi chatbot bilingual dengan grounding pameran Pamerindo &amp; PDF RAG</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="arch-card">
            <h4 class="arch-card-title"><i class="fa-solid fa-terminal"></i> 1-Click Unified Orchestrator</h4>
            <p>Seluruh ekosistem (FastAPI Backend, Web Dashboard, dan WhatsApp Bot Engine) dapat dijalankan terpadu tanpa tabrakan port menggunakan script:</p>
            <pre style="background:#060A12; border:1px solid var(--glass-border); padding:12px 16px; border-radius:10px; color:var(--text-gold); font-family:monospace; font-size:0.88rem;">python run_all.py  # Atau klik ganda: Jalankan_Semua_Fitur.bat</pre>
          </div>
        `
      }
    },

    'orion-erp': {
      badge: '<i class="fa-solid fa-microchip"></i> Enterprise Manufacturing ERP • AS/400 RPG Simulator',
      title: 'Orion ERP & IBM iSeries Simulator',
      subtitle: 'Full-Scale Manufacturing ERP, Material Requirements Planning (MRP), BOM Explosion & DB2 Console',
      tags: ['IBM iSeries (AS/400)', 'RPG IV / ILE RPG', 'RPG Free Format', 'DB2 for i', 'SQL (STRSQL)', 'QAUDJRN', 'Node.js / React', 'WRKSPLF / WRKACTJOB'],
      tabs: {
        'overview': `
          <div class="arch-card">
            <h4 class="arch-card-title"><i class="fa-solid fa-compass"></i> Enterprise ERP & AS/400 Overview</h4>
            <p><strong>Orion ERP & IBM iSeries Simulator</strong> adalah sistem manufaktur berskala enterprise yang dirancang khusus untuk memodelkan proses bisnis manufaktur berat, MRP, alur kerja perintah kerja (*MES Work Orders*), ledakan Bill of Materials (BOM), dan emulasi terminal AS/400 5250.</p>
          </div>

          <div class="arch-img-box">
            <img src="assets/images/project-orion-erp.png" alt="Orion ERP Dashboard" />
            <div class="arch-img-caption"><i class="fa-solid fa-industry"></i> Orion Manufacturing ERP & IBM iSeries (AS/400) RPG Simulation Studio</div>
          </div>

          <div class="arch-grid-2">
            <div class="arch-stat-chip">
              <span class="arch-stat-label">Production Engine</span>
              <span class="arch-stat-value">MRP & Multi-Level BOM</span>
              <p style="font-size:0.84rem; color:var(--text-secondary); margin-top:4px;">Kalkulasi net demand terhadap safety stock dan alokasi komponen perakitan Finished Goods.</p>
            </div>
            <div class="arch-stat-chip">
              <span class="arch-stat-label">OS/400 Operations</span>
              <span class="arch-stat-value">WRKSPLF & WRKACTJOB</span>
              <p style="font-size:0.84rem; color:var(--text-secondary); margin-top:4px;">Emulasi antrean spooled file 132-kolom green-bar dan pemantau subsistem aktif IBM i.</p>
            </div>
            <div class="arch-stat-chip">
              <span class="arch-stat-label">Relational Database</span>
              <span class="arch-stat-value">DB2 for i & STRSQL</span>
              <p style="font-size:0.84rem; color:var(--text-secondary); margin-top:4px;">Konsol query interaktif DB2 dan physical files terstruktur (INVMSTP, BOMMSTP, WKHEDP).</p>
            </div>
            <div class="arch-stat-chip">
              <span class="arch-stat-label">Security & Audit</span>
              <span class="arch-stat-value">OS/400 RBAC & QAUDJRN</span>
              <p style="font-size:0.84rem; color:var(--text-secondary); margin-top:4px;">Profil pengguna (QSECOFR, FIN_MGR, WHS_OPER) dan jurnal audit transaksi persisten.</p>
            </div>
          </div>
        `,
        'architecture': `
          <div class="arch-card">
            <h4 class="arch-card-title"><i class="fa-solid fa-layer-group"></i> AS/400 RPG Free & DB2 Data Architecture</h4>
            <p>Struktur program ILE RPG dan physical file relational yang merefleksikan arsitektur sistem IBM iSeries enterprise:</p>
            
            <div class="arch-grid-2" style="margin-top:16px;">
              <div class="arch-card" style="padding:16px;">
                <h5 style="color:var(--text-gold); font-size:0.95rem; margin-bottom:8px;"><i class="fa-solid fa-file-code"></i> RPG Free Programs</h5>
                <ul style="list-style:none; display:flex; flex-direction:column; gap:6px; font-size:0.85rem; color:var(--text-secondary);">
                  <li>• <code>INV_REORDER_AUTO.RPGLE</code>: Auto stock reorder trigger</li>
                  <li>• <code>MRP_ENGINE.RPGLE</code>: Net requirements calculation</li>
                  <li>• <code>BOM_EXPLODE.RPGLE</code>: Recursive multi-tier BOM explosion</li>
                  <li>• <code>GL_POST_BATCH.RPGLE</code>: General ledger journal voucher batch</li>
                </ul>
              </div>

              <div class="arch-card" style="padding:16px;">
                <h5 style="color:var(--text-gold); font-size:0.95rem; margin-bottom:8px;"><i class="fa-solid fa-database"></i> DB2 Physical Files</h5>
                <ul style="list-style:none; display:flex; flex-direction:column; gap:6px; font-size:0.85rem; color:var(--text-secondary);">
                  <li>• <code>INVMSTP</code>: Master item & safety stock</li>
                  <li>• <code>BOMMSTP</code>: Component assembly matrix</li>
                  <li>• <code>WKHEDP</code>: Manufacturing execution work orders</li>
                  <li>• <code>SECAUDP</code>: OS/400 Security journaling audit log</li>
                </ul>
              </div>
            </div>
          </div>
        `,
        'features': `
          <div class="arch-grid-2">
            <div class="arch-card">
              <h4 class="arch-card-title"><i class="fa-solid fa-industry"></i> MES Work Orders & BOM</h4>
              <p>Mendukung perakitan bertingkat dengan validasi ketersediaan bahan baku, reservasi kuantitas gudang (Bin Locations), dan posting output Finished Goods secara otomatis.</p>
            </div>
            <div class="arch-card">
              <h4 class="arch-card-title"><i class="fa-solid fa-print"></i> WRKSPLF Spool Viewer</h4>
              <p>Renders laporan 132-kolom green-bar ASCII autentik untuk Inventory Valuation (INVAUDIT), Trial Balance (GLPOST), dan MRP Purchase Requisition.</p>
            </div>
            <div class="arch-card">
              <h4 class="arch-card-title"><i class="fa-solid fa-network-wired"></i> WRKACTJOB Controller</h4>
              <p>Memantau utilitas CPU subsistem (QINTER, QBATCH, QCTL), status pekerjaan (RUN, TIMW), serta fitur penangguhan pekerjaan interaktif (HLDJOB).</p>
            </div>
            <div class="arch-card">
              <h4 class="arch-card-title"><i class="fa-solid fa-lock"></i> 5250 Sign-On Security</h4>
              <p>Emulasi layar Sign-On IBM i v7r4 dengan penegakan izin berbasis profil pengguna dan pencegahan injeksi SQL berbahaya.</p>
            </div>
          </div>
        `,
        'specs': `
          <div class="arch-card">
            <h4 class="arch-card-title"><i class="fa-solid fa-terminal"></i> Interactive DB2 STRSQL Console</h4>
            <p>Konsol eksekusi query SQL dinamis yang terhubung langsung ke dataset relasional aktif dengan filter keamanan:</p>
            <pre style="background:#060A12; border:1px solid var(--glass-border); padding:12px 16px; border-radius:10px; color:#4ade80; font-family:monospace; font-size:0.86rem;">SELECT ITEM_NO, DESCR, QTY_ON_HAND, REORDER_PT FROM INVMSTP WHERE QTY_ON_HAND <= REORDER_PT;</pre>
          </div>
        `
      }
    },

    'cv-examiner': {
      badge: '<i class="fa-solid fa-brain"></i> Enterprise AI SaaS • Career Intelligence',
      title: 'CV Examiner AI Pro Platform',
      subtitle: 'Enterprise AI CV Scoring, ATS Keyword Gap Analyzer, STAR Method Rewriter & Automated Technical Interview Studio',
      tags: ['GPT-4o', 'FastAPI', 'React 18', 'Python 3.11+', 'AWS Cognito OAuth2', 'Informa AI Engine', 'Tailwind / Glassmorphism'],
      tabs: {
        'overview': `
          <div class="arch-card">
            <h4 class="arch-card-title"><i class="fa-solid fa-compass"></i> Career Intelligence Platform</h4>
            <p><strong>CV Examiner AI Pro</strong> adalah platform SaaS cerdas berbasis GPT-4o untuk evaluasi CV, audit keselarasan kata kunci ATS, restrukturisasi pencapaian ke format STAR kuantitatif, dan studio simulasi wawancara teknis.</p>
          </div>

          <div class="arch-img-box">
            <img src="assets/images/project-cv-examiner.png" alt="CV Examiner AI Showcase" />
            <div class="arch-img-caption"><i class="fa-solid fa-file-shield"></i> CV Examiner AI Pro Dashboard & Analysis Studio</div>
          </div>

          <div class="arch-grid-2">
            <div class="arch-stat-chip">
              <span class="arch-stat-label">ATS Optimization</span>
              <span class="arch-stat-value">Keyword Gap Scoring</span>
              <p style="font-size:0.84rem; color:var(--text-secondary); margin-top:4px;">Audit kata kunci target job dan kalkulasi skor kecocokan ATS (0–100).</p>
            </div>
            <div class="arch-stat-chip">
              <span class="arch-stat-label">Impact Formulation</span>
              <span class="arch-stat-value">STAR Rewriter Engine</span>
              <p style="font-size:0.84rem; color:var(--text-secondary); margin-top:4px;">Mengubah poin pasif menjadi format Situation, Task, Action, Result terukur.</p>
            </div>
            <div class="arch-stat-chip">
              <span class="arch-stat-label">Interactive Studio</span>
              <span class="arch-stat-value">AI Interview Prep</span>
              <p style="font-size:0.84rem; color:var(--text-secondary); margin-top:4px;">Prediksi pertanyaan teknis/perilaku dan evaluator respon langsung.</p>
            </div>
            <div class="arch-stat-chip">
              <span class="arch-stat-label">Personal Branding</span>
              <span class="arch-stat-value">LinkedIn Alignment</span>
              <p style="font-size:0.84rem; color:var(--text-secondary); margin-top:4px;">Sinkronisasi headline & bio LinkedIn dengan narasi pencapaian karier.</p>
            </div>
          </div>
        `,
        'architecture': `
          <div class="arch-card">
            <h4 class="arch-card-title"><i class="fa-solid fa-network-wired"></i> End-to-End SaaS Pipeline</h4>
            <p>Frontend berbasis React 18 + Vite terhubung dengan backend asynchronous FastAPI yang mengalirkan hasil analisis via Server-Sent Events (SSE) dari engine GPT-4o terlindungi AWS Cognito OAuth2.</p>
          </div>
        `,
        'features': `
          <div class="arch-grid-2">
            <div class="arch-card">
              <h4 class="arch-card-title"><i class="fa-solid fa-magnifying-glass"></i> ATS Keyword Audit</h4>
              <p>Mendeteksi missing keywords industri spesifik dan memberikan rekomendasi penempatan alami pada section pengalaman kerja.</p>
            </div>
            <div class="arch-card">
              <h4 class="arch-card-title"><i class="fa-solid fa-star"></i> STAR Rewriter</h4>
              <p>Menghitung persentase peningkatan metrik bisnis dan menambahkan formula aksi proaktif yang terverifikasi.</p>
            </div>
            <div class="arch-card">
              <h4 class="arch-card-title"><i class="fa-solid fa-comments"></i> Technical Interview Prep</h4>
              <p>Menghasilkan skenario studi kasus teknis dan panduan jawaban ideal berdasarkan celah pengalaman pada CV.</p>
            </div>
            <div class="arch-card">
              <h4 class="arch-card-title"><i class="fa-solid fa-language"></i> Bilingual ID / EN</h4>
              <p>Dukungan penuh antarmuka dan hasil audit dalam Bahasa Indonesia dan English dengan tema Dark/Light Glassmorphism.</p>
            </div>
          </div>
        `,
        'specs': `
          <div class="arch-card">
            <h4 class="arch-card-title"><i class="fa-solid fa-code-branch"></i> API Endpoints & Auth</h4>
            <p>FastAPI asynchronous endpoints: <code>/api/analyze-cv</code>, <code>/api/star-rewrite</code>, <code>/api/interview-eval</code>, <code>/api/linkedin-audit</code> dengan otentikasi token bearer.</p>
          </div>
        `
      }
    },

    'monitor-tablet': {
      badge: '<i class="fa-solid fa-tablet-screen-button"></i> Enterprise IoT & Remote Admin • Multi-Device Hub',
      title: 'Enterprise IoT & Multi-Device Remote Monitoring System',
      subtitle: 'Low-Latency Asynchronous Remote Administration & Real-Time Health Telemetry Hub for Android Tablets and Windows Kiosks/PCs',
      tags: ['FastAPI (Python 3.10+)', 'Kotlin & Jetpack Compose', 'Android Accessibility API', 'MediaProjection Stream', 'PyAutoGUI', 'psutil', 'In-Memory RAM Cache', 'Sub-200ms Latency'],
      tabs: {
        'overview': `
          <div class="arch-card">
            <h4 class="arch-card-title"><i class="fa-solid fa-compass"></i> Executive Overview</h4>
            <p><strong>Enterprise Multi-Device IoT Monitoring & Remote Administration System</strong> adalah platform pemantauan dan kendali jarak jauh terpusat berlatensi ultra-rendah (<em>sub-200ms</em>) yang dibangun untuk mendukung operasional puluhan tablet kiosk registrasi mandiri dan PC pameran pada event berskala internasional <strong>PT Pamerindo Indonesia (Informa Markets Asia)</strong>.</p>
          </div>

          <div class="arch-img-box">
            <img src="assets/images/project-monitor-tablet.png" alt="Enterprise IoT & Multi-Device Monitoring Dashboard" />
            <div class="arch-img-caption"><i class="fa-solid fa-display"></i> Real-Time Multi-Slot IT Admin Command Center & Live Screen Mirroring Modal</div>
          </div>

          <div class="arch-grid-2">
            <div class="arch-stat-chip">
              <span class="arch-stat-label"><i class="fa-solid fa-bolt" style="color:var(--text-gold);"></i> Sub-200ms Low Latency</span>
              <span class="arch-stat-value">Conflated Channel Streaming</span>
              <p style="font-size:0.84rem; color:var(--text-secondary); margin-top:4px;">Transmisi frame JPEG adaptif 720p/1024p (25–45 KB/frame) dengan zero buffer-bloat pada Wi-Fi venue yang padat.</p>
            </div>
            <div class="arch-stat-chip">
              <span class="arch-stat-label"><i class="fa-solid fa-hand-pointer" style="color:var(--text-gold);"></i> Zero-Root Android Control</span>
              <span class="arch-stat-value">AccessibilityService Gestures</span>
              <p style="font-size:0.84rem; color:var(--text-secondary); margin-top:4px;">Injeksi perintah sentuh jarak jauh (Click, Double-Click, Multi-point Swipe, System Home) tanpa perlu root perangkat komersial.</p>
            </div>
            <div class="arch-stat-chip">
              <span class="arch-stat-label"><i class="fa-solid fa-heart-pulse" style="color:var(--text-gold);"></i> Proactive Health Guard</span>
              <span class="arch-stat-value">Real-Time Telemetry & Watchdog</span>
              <p style="font-size:0.84rem; color:var(--text-secondary); margin-top:4px;">Memantau level baterai, utilisasi RAM, CPU load, dan deteksi otomatis perangkat offline dalam 7 detik.</p>
            </div>
            <div class="arch-stat-chip">
              <span class="arch-stat-label"><i class="fa-solid fa-trophy" style="color:var(--text-gold);"></i> Measurable Business ROI</span>
              <span class="arch-stat-value">96% Faster MTTR (&lt; 30s)</span>
              <p style="font-size:0.84rem; color:var(--text-secondary); margin-top:4px;">Mengurangi rata-rata downtime kiosk dari 4.5 jam menjadi &lt; 15 menit per pameran dan meningkatkan kapasitas supervisi IT 4x lipat.</p>
            </div>
          </div>
        `,
        'architecture': `
          <div class="arch-card">
            <h4 class="arch-card-title"><i class="fa-solid fa-sitemap"></i> High-Level Multi-Tier System Architecture</h4>
            <p>Sistem dirancang dengan pemisahan independen antara jalur telemetri berkecepatan tinggi, antrean perintah asinkron (FIFO), dan streaming visual berbasis in-memory caching untuk mencegah latensi disk:</p>
          </div>

          <div class="arch-flow-diagram">
            <div class="arch-flow-step">
              <div class="arch-flow-icon"><i class="fa-solid fa-tablet-screen-button"></i></div>
              <div class="arch-flow-info">
                <h5>1. Field Client Layer (Android Tablets & Windows PC Kiosks)</h5>
                <p><strong>Android Client:</strong> Kotlin + Jetpack Compose UI, Foreground MediaProjection Service, Coroutine Conflated Channel JPEG Stream, dan AccessibilityService gesture executor.<br>
                <strong>Windows PC Client:</strong> Python standalone (<code>pc_client.py</code> / <code>pc_client.exe</code>) dengan thread-isolated command polling (100ms), background capture worker (5 FPS), dan psutil CPU sampler.</p>
              </div>
            </div>

            <div class="arch-flow-step">
              <div class="arch-flow-icon"><i class="fa-solid fa-server"></i></div>
              <div class="arch-flow-info">
                <h5>2. Central Engine & In-Memory Hub (FastAPI)</h5>
                <p>Asynchronous REST API Gateway • Zero-Disk-I/O In-Memory RAM Screenshot Cache (<code>screenshots_cache[device_id]</code>) dengan latency respon &lt;5ms • Dynamic 7s Heartbeat Watchdog • FIFO Per-Device Command Queue Dispatcher.</p>
              </div>
            </div>

            <div class="arch-flow-step">
              <div class="arch-flow-icon"><i class="fa-solid fa-desktop"></i></div>
              <div class="arch-flow-info">
                <h5>3. IT Admin Command Center (Glassmorphic Web Portal)</h5>
                <p>Multi-slot dynamic monitoring grid dengan live heartbeat pulse • Real-time battery & hardware telemetry bars • Live mirror popup modal dengan DPI scaling-safe coordinate mapping (0–100%) dan virtual keyboard/hotkey toolbar.</p>
              </div>
            </div>
          </div>
        `,
        'features': `
          <div class="arch-grid-2">
            <div class="arch-card">
              <h4 class="arch-card-title"><i class="fa-solid fa-hand-pointer"></i> Zero-Root Gesture Injection</h4>
              <p>Memanfaatkan Android <code>AccessibilityService</code> API untuk mengeksekusi sentuhan native, swipe arah ganda, dan tombol kembali/Home tanpa membahayakan integritas sistem operasi.</p>
            </div>
            <div class="arch-card">
              <h4 class="arch-card-title"><i class="fa-solid fa-crosshairs"></i> DPI-Scaling Safe Mapping</h4>
              <p>Mengonversi klik mouse admin menjadi rasio koordinat persentase (0–100%), menjamin akurasi klik sentuh 100% presisi pada berbagai resolusi layar tablet maupun display PC vertikal/horizontal.</p>
            </div>
            <div class="arch-card">
              <h4 class="arch-card-title"><i class="fa-solid fa-keyboard"></i> Remote Keyboard & Hotkey Bar</h4>
              <p>Mendukung pengiriman teks interaktif (<code>TYPE</code>) dan shortcut keyboard esensial (<code>Ctrl+L</code>, <code>Ctrl+T</code>, <code>Ctrl+W</code>, <code>Ctrl+R</code>, <code>Alt+F4</code>, <code>ENTER</code>, <code>ESC</code>) langsung ke PC Kiosk.</p>
            </div>
            <div class="arch-card">
              <h4 class="arch-card-title"><i class="fa-solid fa-memory"></i> In-Memory RAM Caching</h4>
              <p>Snapshot layar disimpan langsung dalam memori server FastAPI untuk zero-disk write cycle, memungkinkan transmisi mirror real-time hingga 5–10 frame per detik tanpa membebani storage.</p>
            </div>
          </div>
        `,
        'specs': `
          <div class="arch-card">
            <h4 class="arch-card-title"><i class="fa-solid fa-network-wired"></i> Core RESTful API Endpoints</h4>
            <div class="arch-table-wrap">
              <table class="arch-table">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Fungsi & Payload</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="arch-method-post">POST</span></td>
                    <td><code>/api/report</code></td>
                    <td>Heartbeat telemetri klien (device_id, battery_level, is_charging, ram_usage, cpu_usage)</td>
                  </tr>
                  <tr>
                    <td><span class="arch-method-get">GET</span></td>
                    <td><code>/api/command</code></td>
                    <td>Polling antrean perintah FIFO per device_id (Click, Swipe, Key, Type, Home)</td>
                  </tr>
                  <tr>
                    <td><span class="arch-method-post">POST</span></td>
                    <td><code>/api/command</code></td>
                    <td>Enqueue perintah kendali baru dari IT Admin Dashboard</td>
                  </tr>
                  <tr>
                    <td><span class="arch-method-post">POST</span></td>
                    <td><code>/api/upload_screenshot</code></td>
                    <td>Multipart JPEG frame streaming langsung ke buffer RAM in-memory server</td>
                  </tr>
                  <tr>
                    <td><span class="arch-method-get">GET</span></td>
                    <td><code>/api/devices</code></td>
                    <td>Daftar seluruh perangkat terdaftar beserta status Online/Offline & metrik kesehatan</td>
                  </tr>
                  <tr>
                    <td><span class="arch-method-get">GET</span></td>
                    <td><code>/api/screenshot/{device_id}</code></td>
                    <td>Pengambilan snapshot frame visual terkini untuk live rendering modal admin (&lt;5ms)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="arch-card">
            <h4 class="arch-card-title"><i class="fa-solid fa-rocket"></i> Deployment & Quick Execution</h4>
            <p>Ekosistem siap dijalankan di jaringan lokal / LAN pameran dengan instruksi sederhana:</p>
            <pre style="background:#060A12; border:1px solid var(--glass-border); padding:12px 16px; border-radius:10px; color:var(--text-gold); font-family:monospace; font-size:0.86rem; line-height:1.6;"># 1. Start Server Hub
python main.py  # Server aktif pada http://localhost:8000

# 2. Windows Client (Python atau Standalone EXE)
python pc_client.py   # Atau cukup klik ganda pc_client.exe

# 3. Android Tablet Client
Install app-debug.apk -&gt; Masukkan IP Server -&gt; Aktifkan Accessibility &amp; MediaProjection</pre>
          </div>
        `
      }
    }
  };

  // Render Project into Modal
  function renderProjectModal(projectKey, tabKey = 'overview') {
    const data = projectsData[projectKey];
    if (!data) return;

    currentProjectKey = projectKey;
    currentTabKey = tabKey;

    modalBadge.innerHTML = data.badge;
    modalTitle.innerHTML = data.title;
    modalSubtitle.innerHTML = data.subtitle;

    // Render active tab content
    modalBody.innerHTML = data.tabs[tabKey] || data.tabs['overview'];
    modalBody.scrollTop = 0;

    // Update tab button states
    tabBtns.forEach(btn => {
      if (btn.getAttribute('data-tab') === tabKey) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Render footer tags
    modalFooterTags.innerHTML = data.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');
  }

  // Open Modal Event
  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectKey = btn.getAttribute('data-modal');
      renderProjectModal(projectKey || 'nexusagent', 'overview');
      backdrop.classList.add('active');
      document.body.classList.add('modal-open');
    });
  });

  // Tab Switch Event
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabKey = btn.getAttribute('data-tab');
      renderProjectModal(currentProjectKey, tabKey);
    });
  });

  // Close Modal Handler
  function closeModal() {
    backdrop.classList.remove('active');
    document.body.classList.remove('modal-open');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (closeBtnBottom) closeBtnBottom.addEventListener('click', closeModal);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('active')) {
      closeModal();
    }
  });
}

