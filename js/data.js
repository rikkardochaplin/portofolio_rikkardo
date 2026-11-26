/* ==========================================================================
   CENTRALIZED PORTFOLIO DATA LAYER
   Rikkardo L. Tobing — Multi-disciplinary Technology Engineer
   Preserves 100% of verified project, story, experience & credential data.
   ========================================================================== */

window.PORTFOLIO_DATA = {
  meta: {
    name: 'Rikkardo L. Tobing',
    role: 'Multi-disciplinary Technology Engineer',
    tagline: 'Beyond Code. Across Technology.',
    domain: 'https://www.rikkardotobing.my.id/',
    location: 'Jakarta, Indonesia',
    email: 'rikkardotobing1@gmail.com',
    phone: '+62 822-3174-5213',
    whatsappUrl: 'https://wa.me/6282231745213',
    linkedinUrl: 'https://id.linkedin.com/in/rikkardo-l-tobing',
    githubUrl: 'https://github.com/rikkardochaplin',
    resumeUrl: 'assets/data/Rikkardo L. Tobing - Resume.pdf',
    profileImg: 'assets/images/profile.png',
    profileWebp: 'assets/images/webp/profile.webp'
  },

  stats: [
    { value: '8+', label: 'B2B Trade Portals' },
    { value: '500K+', label: 'Annual Trade Visitors' },
    { value: '99.9%', label: 'Platform Uptime' },
    { value: '5+ Yrs', label: 'Engineering Experience' }
  ],

  navigation: [
    { label: 'About', href: 'index.html#about' },
    { label: 'Expertise', href: 'index.html#expertise' },
    { label: 'Stack', href: 'index.html#stack' },
    { label: 'Projects', href: 'index.html#projects' },
    { label: 'Stories', href: 'index.html#stories' },
    { label: 'Experience', href: 'index.html#experience' },
    { label: 'Contact', href: 'index.html#contact' }
  ],

  philosophy: [
    {
      number: '01',
      title: 'Build with Purpose',
      description: 'Every website, automation workflow, or backend service starts from a clear operational or business requirement — never technology for its own sake.'
    },
    {
      number: '02',
      title: 'Engineer for Reliability',
      description: 'Trade exhibitions, enterprise infrastructure, and registration systems cannot afford downtime during peak hours. Stability, backups, and monitoring come first.'
    },
    {
      number: '03',
      title: 'Solve Real Problems',
      description: 'From bridging legacy IBM AS/400 data to reducing kiosk downtime across exhibition halls, engineering value is measured by how effectively friction is removed.'
    },
    {
      number: '04',
      title: 'Keep Learning and Improving',
      description: 'Continuously evolving across web architecture, cloud administration, cybersecurity fundamentals, and applied AI to stay adaptable across disciplines.'
    }
  ],

  expertise: [
    {
      id: 'service-web',
      code: 'A',
      icon: 'fa-solid fa-laptop-code',
      title: 'Web Development & Architecture',
      summary: 'Architecting and maintaining high-traffic WordPress multisite portals, custom CMS builds, responsive interfaces, and search-ready web platforms.',
      items: [
        'WordPress Development',
        'WordPress Multisite',
        'PHP Development',
        'JavaScript',
        'HTML5 and CSS3',
        'Responsive UI Development',
        'CMS Management',
        'Website Optimization',
        'Technical SEO'
      ],
      blueprintTitle: 'Web Architecture & CMS Engineering',
      blueprintSubtitle: 'Enterprise Multisite WordPress, High-Traffic Custom Themes, Core Web Vitals Optimization & CDN Networks',
      blueprintTags: ['WordPress Multisite', 'PHP 8.2+', 'Custom CMS', 'Core Web Vitals 95+', 'Cloudflare CDN', 'Nginx Cache'],
      blueprintOverview: `
        <p>I architect scalable corporate websites and multi-site CMS ecosystems that handle traffic spikes during regional trade exhibition dates. Every build incorporates clean semantic HTML5, async script loading, CSS containment, and responsive mobile architecture.</p>
        <ul class="blueprint-list">
          <li>Sub-second page load times on 3G/4G networks</li>
          <li>Zero-downtime database and asset backups</li>
          <li>Custom Gutenberg blocks and bespoke PHP templates</li>
        </ul>
      `
    },
    {
      id: 'service-ops',
      code: 'B',
      icon: 'fa-solid fa-server',
      title: 'IT Infrastructure & Technical Support',
      summary: 'Delivering hands-on technical troubleshooting, network diagnostics, workstation readiness, and resilient enterprise IT operations for teams and live venues.',
      items: [
        'Hardware and Software Troubleshooting',
        'Network Troubleshooting',
        'IT Infrastructure Maintenance',
        'Operating System Installation',
        'Printer and Peripheral Support',
        'Technical Incident Resolution',
        'Enterprise IT Operations'
      ],
      blueprintTitle: 'Tech Operations & Infrastructure Support',
      blueprintSubtitle: 'WebSocket Live Telemetry, Multi-Device Fleet Monitoring & Event-Day Technical Incident Support',
      blueprintTags: ['WebSocket Streams', 'Hardware Telemetry', 'Fleet Management', 'Incident Response', 'CRM Sync'],
      blueprintOverview: `
        <p>Delivering on-site and remote technical operations for international exhibition events and corporate environments. Managing device fleets, network troubleshooting, OS provisioning, telemetry streams, and database synchronizations with rapid incident resolution.</p>
      `
    },
    {
      id: 'service-cloud',
      code: 'C',
      icon: 'fa-solid fa-cloud',
      title: 'Cloud & Business Systems',
      summary: 'Supporting cloud administration, email security operations, CRM data synchronization, and enterprise application workflows across business teams.',
      items: [
        'Microsoft Azure',
        'Mimecast',
        'Cloud Administration',
        'Business Application Support',
        'System Integration',
        'Data and Reporting Operations'
      ],
      blueprintTitle: 'Cloud Administration & Business Systems',
      blueprintSubtitle: 'Microsoft Azure, Mimecast Security Operations, CRM Synchronization & Enterprise Legacy Modernization',
      blueprintTags: ['Microsoft Azure', 'Mimecast', 'Cloud Administration', 'CRM Sync', 'Data Reporting', 'System Integration'],
      blueprintOverview: `
        <p>Supporting enterprise cloud environments, email gateway administration with Mimecast, and Microsoft Azure operational workflows alongside data reporting pipelines and CRM synchronization across regional exhibition teams.</p>
      `
    },
    {
      id: 'service-ai',
      code: 'D',
      icon: 'fa-solid fa-microchip',
      title: 'Software Engineering & Automation',
      summary: 'Building practical API services, relational databases, internal business tools, IoT device hubs, and document-grounded AI integrations.',
      items: [
        'Python',
        'FastAPI',
        'MySQL',
        'API Development',
        'Business Process Automation',
        'IoT Solutions',
        'AI Integration',
        'Application Development'
      ],
      blueprintTitle: 'Software Engineering, AI & Legacy Integration',
      blueprintSubtitle: 'FastAPI Microservices, Autonomous ReAct Loops, IoT Fleet Telemetry & Enterprise Application Engineering',
      blueprintTags: ['Python 3.10+', 'FastAPI', 'MySQL / SQLite', 'REST APIs', 'IoT / ESP8266', 'AI Integration'],
      blueprintOverview: `
        <p>Engineering practical software solutions including FastAPI REST and WebSocket services, automated developer and business workflows, IoT monitoring systems, and LLM-powered tools with transparent token cost metering.</p>
      `
    }
  ],

  aboutPillars: [
    {
      id: 'about-scale',
      icon: 'fa-solid fa-network-wired',
      title: 'High-Traffic Web Scale',
      desc: 'Architecting WordPress multisite and custom CMS setups that reliably handle surges of 100K+ concurrent page views during major exhibition dates.',
      subtitle: 'Architecting WordPress Multisite & Custom CMS Ecosystems Capable of Handling 100K+ Concurrent Surges',
      tags: ['Multisite WordPress', 'High Concurrency', 'Redis Object Caching', 'Cloudflare CDN', 'Nginx Microcaching', '99.9% Uptime'],
      overview: '<p>During flagship B2B exhibition launches (e.g. FHI Jakarta, Lab Indonesia, FHTB Bali), platforms experience massive concurrent traffic spikes. I design and tune the web infrastructure with distributed caching, async database query optimizations, and global edge delivery to ensure zero downtime and sub-second response times.</p>'
    },
    {
      id: 'about-gov',
      icon: 'fa-solid fa-shield-halved',
      title: 'Governance & Stability',
      desc: 'Maintaining strict data privacy standards, GDPR-compliant consent workflows, automated backups, and resilient failover configurations.',
      subtitle: 'Strict Data Privacy, GDPR-Compliant Workflows, Automated Backups & Resilient Failover',
      tags: ['Data Privacy', 'GDPR Compliance', 'Automated Daily Backups', 'Disaster Recovery', 'Role-Based Access', 'Security Audits'],
      overview: '<p>Managing international trade event platforms requires enterprise-grade governance. I implement automated encrypted database backups, role-based user access controls, strict consent mechanisms, and automated failover routing to maintain system integrity and compliance.</p>'
    },
    {
      id: 'about-seo',
      icon: 'fa-solid fa-chart-line',
      title: 'SEO & Performance',
      desc: 'Driving organic discovery across Southeast Asia with structured schema markup, clean indexation, and Core Web Vitals optimization.',
      subtitle: 'Structured JSON-LD Schema, Crawl Budget Optimization & Core Web Vitals Tuning Across Southeast Asia',
      tags: ['JSON-LD Schemas', 'Core Web Vitals 95+', 'Lighthouse Optimization', 'Crawl Budget', 'Multilingual Indexing'],
      overview: '<p>Maximizing organic discovery for hundreds of thousands of international trade visitors. Every platform is audited for Core Web Vitals, featuring semantic HTML5 markup, event schema data, and canonical cross-domain indexing.</p>'
    },
    {
      id: 'about-ai',
      icon: 'fa-solid fa-robot',
      title: 'Practical AI Solutions',
      desc: 'Building production ReAct agents, real-time LLM cost-tracking dashboards, and document-grounded RAG assistants for business workflows.',
      subtitle: 'ReAct Agent Loops, Real-Time Token Cost Metering ($/Rp) & Document-Grounded RAG',
      tags: ['FastAPI Microservices', 'ReAct Agent Loop', 'Token Observability', 'Document RAG', 'WhatsApp Bot', 'Python 3.10+'],
      overview: '<p>Engineering production-ready AI tools that directly solve business problems: automated developer copilots, transparent LLM token expense meters in dual currencies ($ USD &amp; Rp IDR), and intelligent event assistants that ground visitor inquiries directly in official exhibition documentation.</p>'
    }
  ],

  techStack: [
    {
      category: 'Web & CMS',
      icon: 'fa-solid fa-globe',
      items: ['WordPress Enterprise', 'WordPress Multisite', 'Custom CMS Themes', 'HTML5', 'CSS3', 'Responsive UI', 'Bootstrap 5', 'Chart.js']
    },
    {
      category: 'Programming Languages',
      icon: 'fa-solid fa-code',
      items: ['PHP 8.x', 'JavaScript (ES6+)', 'Python 3.10+', 'SQL', 'Kotlin (Android Client)', 'RPG IV / ILE RPG (Sim)']
    },
    {
      category: 'AI & Python',
      icon: 'fa-solid fa-robot',
      items: ['FastAPI', 'Uvicorn', 'ReAct Agent Frameworks', 'Document RAG & PDF Extraction', 'Token Cost Metering ($/Rp)', 'YOLOv8 (Thesis)', 'PyAutoGUI / psutil']
    },
    {
      category: 'Databases & Systems',
      icon: 'fa-solid fa-database',
      items: ['MySQL / MariaDB', 'SQLite / SQLAlchemy', 'IBM AS/400 DB2 (Sim)', 'WebSockets', 'REST APIs', 'ODBC Integration', 'CRM Synchronization']
    },
    {
      category: 'Cloud & Infrastructure',
      icon: 'fa-solid fa-cloud',
      items: ['Microsoft Azure', 'Mimecast', 'Cloudflare CDN', 'Nginx / Redis Caching', 'Windows & Hardware Support', 'Network Troubleshooting', 'ESP8266 IoT']
    },
    {
      category: 'Operations & SEO',
      icon: 'fa-solid fa-chart-line',
      items: ['Technical SEO', 'JSON-LD Structured Data', 'Core Web Vitals Tuning', 'GDPR Consent Workflows', 'Event IT Infrastructure', 'Incident Resolution', 'Data & Reporting Ops']
    },
    {
      category: 'Development Tools',
      icon: 'fa-solid fa-terminal',
      items: ['Git & GitHub', 'Vercel', 'VS Code', 'Node.js', 'React 18 / Vite', 'Swagger / OpenAPI', 'Three.js (WebGL)']
    }
  ],

  projects: [
    {
      id: 'pamerindo',
      title: 'PT Pamerindo Indonesia',
      badge: 'Flagship Corporate Portal',
      metaLine: 'Informa Markets Asia • B2B Corporate Portal',
      categories: ['web', 'enterprise'],
      categoryLabel: 'Web Development • Corporate Portal',
      featured: true,
      featuredOrder: 1,
      shortDesc: 'The primary digital gateway for Indonesia’s leading trade exhibition organizer. Connects over 200 international events and 500,000+ yearly trade visitors with a fast, content-managed platform built for peak event traffic.',
      img: 'assets/images/project-pamerindo.png',
      webp: 'assets/images/webp/project-pamerindo.webp',
      width: 1280,
      height: 720,
      liveUrl: 'https://www.pamerindo.com',
      repoUrl: null,
      tags: ['Enterprise WordPress', 'PHP 8.x', 'Technical SEO', 'Multilingual CMS'],
      metrics: [
        { label: 'Organization', value: 'Informa Markets Asia' },
        { label: 'Annual Reach', value: '500K+ Trade Visitors' },
        { label: 'Reliability', value: '99.9% Uptime SLA' }
      ],
      caseStudy: {
        overview: 'PT Pamerindo Indonesia is the central corporate digital gateway connecting over 200 international B2B trade events and serving 500,000+ yearly trade visitors across Southeast Asia.',
        background: 'As part of Informa Markets Asia, Pamerindo Indonesia operates flagship exhibitions across manufacturing, energy, laboratory technology, hospitality, and beauty sectors.',
        problem: 'High-volume seasonal exhibition launches generate concentrated surges in visitor, exhibitor, and media traffic while requiring consistent brand governance, multilingual content updates, and strong search visibility.',
        role: 'Web Developer & Data/Tech Support Executive responsible for website content management, CMS updates, system optimization, performance tuning, and technical SEO continuity.',
        approach: 'Built and maintained on an Enterprise WordPress stack with custom PHP 8.x templates, structured JSON-LD schema, caching layers, Cloudflare CDN delivery, and GDPR-compliant visitor consent workflows.',
        implementation: 'Coordinated ongoing CMS releases, asset optimization, security hardening, and cross-event directory linking across Pamerindo’s corporate and sector-specific exhibition portals.',
        results: 'Maintained 99.9% platform uptime across major exhibition cycles and contributed to a documented 30% improvement in site load speed across managed event platforms.',
        screenshots: [
          { src: 'assets/images/project-pamerindo.png', webp: 'assets/images/webp/project-pamerindo.webp', caption: 'PT Pamerindo Indonesia Corporate Portal' }
        ]
      },
      tabs: {
        overview: `
          <div class="bp-section">
            <h5><i class="fa-solid fa-compass"></i> Corporate Showcase</h5>
            <p><strong>PT Pamerindo Indonesia</strong> is the corporate gateway connecting 200+ global trade exhibitions and over 500,000 yearly trade visitors across Southeast Asia. Designed for exceptional load speeds, high security, and high-volume event registrations.</p>
          </div>
          <div class="bp-media">
            <img src="assets/images/project-pamerindo.png" alt="PT Pamerindo Indonesia" loading="lazy" />
          </div>
          <div class="bp-footer-bar">
            <span>Status: Live in Production</span>
            <a href="https://www.pamerindo.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Visit Live Site <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        `,
        architecture: `
          <div class="bp-card">
            <h6><i class="fa-solid fa-server"></i> Enterprise WordPress &amp; Edge Delivery</h6>
            <p>Engineered on a secure WordPress Enterprise stack with Redis object caching, Cloudflare CDN, JSON-LD structured schemas, and GDPR-compliant visitor tracking.</p>
          </div>
        `,
        features: `
          <div class="bp-grid">
            <div class="bp-card"><h6>Multilingual Content Architecture</h6><p>Centralized corporate updates linking 200+ international B2B trade events across Indonesia and Asia.</p></div>
            <div class="bp-card"><h6>Peak Traffic Resilience</h6><p>Optimized asset delivery and caching rules supporting concurrent registration campaigns.</p></div>
          </div>
        `,
        specs: `<p class="bp-note">WordPress Enterprise • PHP 8.x • Technical SEO JSON-LD • Cloudflare CDN • 99.9% Uptime SLA.</p>`
      }
    },
    {
      id: 'nexusagent',
      title: 'NexusAgent & PamerAi Ecosystem',
      badge: 'Autonomous AI & Observability',
      metaLine: 'FastAPI • Python 3.10+ • ReAct Loop',
      categories: ['ai'],
      categoryLabel: 'AI & Automation • Agent Platform',
      featured: true,
      featuredOrder: 2,
      shortDesc: 'An end-to-end AI engineering platform featuring an autonomous ReAct agent, live token expense tracking in USD and IDR, a desktop developer companion, and a WhatsApp assistant grounded in exhibition documentation.',
      img: 'assets/images/project-nexusagent.png',
      webp: 'assets/images/webp/project-nexusagent.webp',
      width: 1280,
      height: 720,
      liveUrl: null,
      repoUrl: null,
      docFile: 'Project-AI Agent.md',
      tags: ['FastAPI', 'Python 3.10+', 'ReAct Architecture', 'SQLite & Chart.js', 'WhatsApp Gateway'],
      metrics: [
        { label: 'Architecture', value: 'ReAct Agent Loop' },
        { label: 'Observability', value: 'Live USD ($) & IDR (Rp)' },
        { label: 'Channels', value: 'Web, Desktop & WhatsApp' }
      ],
      caseStudy: {
        overview: 'NexusAgent & PamerAi is an end-to-end AI engineering platform combining an autonomous ReAct multi-step reasoning agent, real-time LLM token and cost observability analytics, a developer copilot with inline file watcher, and the PamerAi exhibition WhatsApp assistant.',
        background: 'Designed to bring transparency to LLM token expenditure across multiple providers while providing practical developer automation and domain-grounded B2B exhibition customer support.',
        problem: 'Organizations adopting multiple LLM providers lack granular visibility into per-request token costs in local currency (IDR/USD), while event visitors frequently ask repetitive questions across exhibition schedules and PDFs.',
        role: 'Lead Architect & Full-Stack Developer — designed the FastAPI backend, ReAct reasoning loop, SQLite cost-metering database, Chart.js observability dashboard, Tkinter desktop companion, and PamerAi PDF RAG pipeline.',
        approach: 'Decoupled multi-tier architecture separating client interfaces (Web Dashboard, Tkinter Desktop GUI, Global Hotkey Overlay, Inline @ai File Watcher, WhatsApp Bot via whatsapp-web.js) from an asynchronous FastAPI/Uvicorn engine and dynamic tool registry.',
        implementation: 'Implemented thought-action-observation agent cycles, SQLAlchemy 2.0 token logging with dynamic pricing catalog conversion (USD to IDR), psutil/Win32 hardware telemetry endpoints, and PDF extraction grounding across 7 Pamerindo exhibition industry clusters.',
        results: 'Documented in Project-AI Agent.md as a complete local/enterprise prototype supporting multi-provider LLM routing (Gemini, OpenAI, Claude, Groq, Ollama) and real-time cost observability. Production deployment metrics outside local testing are not publicly documented.',
        screenshots: [
          { src: 'assets/images/project-nexusagent.png', webp: 'assets/images/webp/project-nexusagent.webp', caption: 'NexusAgent Real-Time Observability Web Dashboard & Token Analytics' }
        ]
      },
      tabs: {
        overview: `
          <div class="bp-section">
            <h5><i class="fa-solid fa-compass"></i> System Overview</h5>
            <p><strong>NexusAgent &amp; PamerAi</strong> is an end-to-end AI platform built to streamline engineering workflows, provide granular transparency over LLM token consumption in dual currencies (USD $ and IDR Rp), and serve automated event intelligence to trade visitors via WhatsApp and PDF RAG retrieval.</p>
          </div>
          <div class="bp-media">
            <img src="assets/images/project-nexusagent.png" alt="NexusAgent Web Dashboard" loading="lazy" />
          </div>
          <div class="bp-grid">
            <div class="bp-card"><h6>Autonomous Reasoning</h6><p>ReAct execution loop breaks complex goals into subtasks with self-reflection and error recovery.</p></div>
            <div class="bp-card"><h6>USD ($) &amp; IDR (Rp) Cost Meter</h6><p>Tracks prompt/completion tokens per request with live currency conversion and time-series charts.</p></div>
            <div class="bp-card"><h6>Live @ai File Watcher</h6><p>Monitors code comments in real time, synthesizes implementations, and runs whitelisted CLI checks.</p></div>
            <div class="bp-card"><h6>PamerAi WhatsApp Assistant</h6><p>Grounds inquiries across 7 exhibition industry clusters using extracted PDF schedules and exhibitor data.</p></div>
          </div>
        `,
        architecture: `
          <div class="bp-stack-list">
            <div class="bp-card"><h6>1. Client Interfaces &amp; Channels</h6><p>Glassmorphism Web Dashboard • Standalone Desktop GUI (Tkinter) • Floating Copilot (Ctrl+Shift+A) • Inline @ai File Watcher • WhatsApp Bot (whatsapp-web.js).</p></div>
            <div class="bp-card"><h6>2. Asynchronous API Gateway (FastAPI &amp; Uvicorn)</h6><p>ASGI runtime with lifespan connection pooling, Pydantic v2 validation, and SSE streaming.</p></div>
            <div class="bp-card"><h6>3. Core NexusAgent Intelligence Engine</h6><p>ReAct Cycle (Thought → Action → Observation → Answer), Autonomous Goal Planner, and Persistent Memory Manager.</p></div>
            <div class="bp-card"><h6>4. Tool Registry &amp; Observability</h6><p>File I/O diff engine, whitelisted CLI runner, psutil/Win32 hardware telemetry, and SQLite/SQLAlchemy token tracker.</p></div>
          </div>
        `,
        features: `
          <div class="bp-grid">
            <div class="bp-card"><h6>1. Autonomous ReAct Engine</h6><p>Evaluates execution results step-by-step across multi-phase engineering tasks.</p></div>
            <div class="bp-card"><h6>2. Token &amp; Cost Metering</h6><p>Measures prompt tokens, completion tokens, latency (ms), and USD/IDR cost per API call.</p></div>
            <div class="bp-card"><h6>3. Live File Watcher (watcher.py)</h6><p>Detects <code># @ai</code> comments in source files and generates working implementations in place.</p></div>
            <div class="bp-card"><h6>4. Event WhatsApp Assistant</h6><p>Bilingual (ID/EN) assistant grounded in Pamerindo exhibition PDFs with auto-cleaning session locks.</p></div>
          </div>
        `,
        specs: `
          <div class="bp-table-wrap">
            <table class="bp-table">
              <thead><tr><th>Method</th><th>Endpoint</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td><span class="badge-method post">POST</span></td><td><code>/api/agent/chat</code></td><td>Executes ReAct reasoning steps with tool execution</td></tr>
                <tr><td><span class="badge-method post">POST</span></td><td><code>/api/agent/autonomous</code></td><td>Launches multi-step goal decomposition</td></tr>
                <tr><td><span class="badge-method get">GET</span></td><td><code>/api/stats/overview</code></td><td>Retrieves token KPIs, total costs ($/Rp), and latency averages</td></tr>
                <tr><td><span class="badge-method get">GET</span></td><td><code>/api/stats/charts</code></td><td>Provides time-series datasets and model distribution for Chart.js</td></tr>
              </tbody>
            </table>
          </div>
        `
      }
    },
    {
      id: 'fhi',
      title: 'Food & Hospitality Indonesia (FHI)',
      badge: 'B2B Exhibition',
      metaLine: 'JIEXPO Jakarta • 40,000+ Trade Attendees',
      categories: ['web'],
      categoryLabel: 'Web Development • B2B Exhibition',
      featured: false,
      shortDesc: 'Premier trade platform for the F&B and HoReCa sectors, featuring digital exhibitor discovery, seminar schedules, and business matchmaking.',
      img: 'assets/images/project-fhi.png',
      webp: 'assets/images/webp/project-fhi.webp',
      width: 1280,
      height: 720,
      liveUrl: 'https://www.foodhospitalityindonesia.com',
      repoUrl: null,
      tags: ['WordPress Multisite', 'Event Engine', 'Exhibitor Directory'],
      caseStudy: {
        overview: 'Food & Hospitality Indonesia (FHI) is the flagship international B2B trade platform for the food, beverage, and HoReCa industries at JIEXPO Kemayoran, Jakarta.',
        background: 'Serving 700+ international exhibitors and 40,000+ trade attendees, FHI acts as the primary pre-show discovery and visitor registration hub.',
        problem: 'Large-scale trade expos experience intense registration spikes ahead of show dates and require accurate exhibitor directory search, seminar schedules, and responsive mobile access.',
        role: 'Web Development & Technical Support — managing CMS architecture, content updates, exhibitor modules, performance optimization, and live show readiness.',
        approach: 'Maintained on WordPress Multisite with structured exhibitor/matchmaking templates, lead capture integrations, and high-traffic caching tuning.',
        implementation: 'Executed continuous page updates, landing page rollouts, SEO metadata improvements, and pre-event load readiness checks.',
        results: 'Supports 40,000+ trade attendees and 700+ exhibitors per cycle at JIEXPO Jakarta.',
        screenshots: [
          { src: 'assets/images/project-fhi.png', webp: 'assets/images/webp/project-fhi.webp', caption: 'Food & Hospitality Indonesia (FHI) Portal' }
        ]
      },
      tabs: {
        overview: `
          <div class="bp-section">
            <h5><i class="fa-solid fa-utensils"></i> Event Overview</h5>
            <p><strong>Food &amp; Hospitality Indonesia (FHI)</strong> gathers over 40,000 trade attendees and 700+ international exhibitors. The portal features interactive exhibitor directories, seminar registration, and automated VIP badges.</p>
          </div>
          <div class="bp-media"><img src="assets/images/project-fhi.png" alt="Food & Hospitality Indonesia" loading="lazy" /></div>
          <div class="bp-footer-bar">
            <span>JIEXPO Jakarta • 40,000+ Trade Attendees</span>
            <a href="https://www.foodhospitalityindonesia.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Visit Live Platform <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        `
      }
    },
    {
      id: 'labindo',
      title: 'Lab Indonesia',
      badge: 'Scientific B2B',
      metaLine: 'ICE BSD • 22,000+ Attendees',
      categories: ['web'],
      categoryLabel: 'Web Development • Scientific B2B',
      featured: false,
      shortDesc: 'Southeast Asia’s largest trade platform for laboratory technology and scientific instrumentation, equipped with searchable exhibitor catalogues.',
      img: 'assets/images/project-labindo.png',
      webp: 'assets/images/webp/project-labindo.webp',
      width: 1280,
      height: 720,
      liveUrl: 'https://www.lab-indo.com',
      repoUrl: null,
      tags: ['CMS Architecture', 'Exhibitor Directory', 'Technical SEO'],
      caseStudy: {
        overview: 'Lab Indonesia is Southeast Asia’s benchmark trade exhibition website for laboratory equipment, analytical systems, and scientific instrumentation at ICE BSD.',
        background: 'Connects over 22,000 researchers, laboratory managers, and international scientific manufacturers across regional markets.',
        problem: 'Technical buyers and scientific delegates need fast, structured search across specialized instrumentation categories alongside bilingual event information.',
        role: 'Web Developer — developed and maintained the modern site build for Lab Indonesia (as well as contributing to Lab Vietnam) with CMS customization and SEO tuning.',
        approach: 'Structured WordPress CMS architecture with searchable exhibitor directories, technical SEO schema, and optimized media pipelines.',
        implementation: 'Delivered new site updates, responsive layouts, exhibitor catalogue integration, and visitor analytics tracking.',
        results: 'Serves 22,000+ trade attendees and regional scientific exhibitors; contributed to overall 30% load speed improvement across managed event sites.',
        screenshots: [
          { src: 'assets/images/project-labindo.png', webp: 'assets/images/webp/project-labindo.webp', caption: 'Lab Indonesia Exhibition Platform' }
        ]
      },
      tabs: {
        overview: `
          <div class="bp-section">
            <h5><i class="fa-solid fa-flask"></i> Event Overview</h5>
            <p><strong>Lab Indonesia</strong> is the benchmark exhibition for scientific instrumentation in Southeast Asia, connecting over 22,000 researchers, lab managers, and global manufacturers.</p>
          </div>
          <div class="bp-media"><img src="assets/images/project-labindo.png" alt="Lab Indonesia" loading="lazy" /></div>
          <div class="bp-footer-bar">
            <span>ICE BSD • 22,000+ Attendees</span>
            <a href="https://www.lab-indo.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Visit Live Platform <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        `
      }
    },
    {
      id: 'fhtbali',
      title: 'Food, Hotel & Tourism Bali (FHTB)',
      badge: 'Tourism B2B',
      metaLine: 'BNDCC Bali • Asia-Pacific Hub',
      categories: ['web'],
      categoryLabel: 'Web Development • Hospitality & Tourism',
      featured: false,
      shortDesc: 'High-traffic hospitality and tourism trade platform connecting international suppliers with resort operators across Bali and the Asia-Pacific.',
      img: 'assets/images/project-fhtbali.png',
      webp: 'assets/images/webp/project-fhtbali.webp',
      width: 1280,
      height: 720,
      liveUrl: 'https://www.fhtbali.com',
      repoUrl: null,
      tags: ['WordPress', 'UI/UX', 'Speed Tuning'],
      caseStudy: {
        overview: 'Food, Hotel & Tourism Bali (FHTB) serves as the eastern Indonesian and Asia-Pacific procurement hub for hospitality, resort operations, and culinary technology at BNDCC Nusa Dua, Bali.',
        background: 'Designed for international hospitality buyers, hoteliers, and F&B suppliers across Bali and the wider Asia-Pacific region.',
        problem: 'Required responsive mobile UX and fast page delivery for international visitors accessing exhibitor info and registration funnels on varied mobile networks.',
        role: 'Web Developer — managed CMS operations, responsive UX refinements, speed optimization, and lead funnel integrations.',
        approach: 'Enterprise WordPress setup with asset compression, caching optimization, and clear exhibitor/visitor registration pathways.',
        implementation: 'Maintained bilingual schedules, sponsor showcases, and conversion-focused registration pages.',
        results: 'Active regional hospitality trade gateway serving Bali and Asia-Pacific delegates; specific private conversion metrics are not publicly documented.',
        screenshots: [
          { src: 'assets/images/project-fhtbali.png', webp: 'assets/images/webp/project-fhtbali.webp', caption: 'Food, Hotel & Tourism Bali Portal' }
        ]
      },
      tabs: {
        overview: `
          <div class="bp-section">
            <h5><i class="fa-solid fa-hotel"></i> Event Overview</h5>
            <p><strong>FHT Bali</strong> serves as the eastern Indonesian and Asia-Pacific hub for hospitality procurement, connecting luxury resort operators and culinary experts with global food &amp; hotel tech brands.</p>
          </div>
          <div class="bp-media"><img src="assets/images/project-fhtbali.png" alt="FHT Bali" loading="lazy" /></div>
          <div class="bp-footer-bar">
            <span>BNDCC Bali • Asia-Pacific Hub</span>
            <a href="https://www.fhtbali.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Visit Live Platform <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        `
      }
    },
    {
      id: 'cosmobeaute',
      title: 'Cosmobeauté Indonesia',
      badge: 'Beauty B2B',
      metaLine: 'ICE BSD • Aesthetic Tech Hub',
      categories: ['web'],
      categoryLabel: 'Web Development • Beauty & Aesthetics',
      featured: false,
      shortDesc: 'The nation’s largest B2B beauty and aesthetic trade portal, tailored for supplier networking, brand showcases, and visitor registration.',
      img: 'assets/images/project-cosmobeaute.png',
      webp: 'assets/images/webp/project-cosmobeaute.webp',
      width: 1280,
      height: 720,
      liveUrl: 'https://www.cosmobeauteasia.com/indonesia/',
      repoUrl: null,
      tags: ['CMS Customization', 'Lead Capture', 'B2B Directory'],
      caseStudy: {
        overview: 'Cosmobeauté Indonesia is Indonesia’s largest B2B beauty, aesthetic technology, and salon distribution exhibition portal hosted at ICE BSD.',
        background: 'Connects aesthetic medical specialists, spa operators, and beauty distributors with international OEM/ODM manufacturers and equipment brands.',
        problem: 'Needed a dedicated, modernized Indonesian regional edition portal integrated with exhibitor lead capture and brand showcase workflows.',
        role: 'Web Developer — contributed to building and maintaining the Cosmobeauté Indonesia site, CMS templates, and lead capture workflows.',
        approach: 'Custom WordPress CMS modules supporting brand directories, exhibitor inquiries, and responsive visitor registration flows.',
        implementation: 'Deployed tailored page templates, optimized visual showcases, and coordinated multi-team content updates ahead of annual editions.',
        results: 'Successfully launched and maintained for annual ICE BSD editions; private commercial lead totals are not publicly documented.',
        screenshots: [
          { src: 'assets/images/project-cosmobeaute.png', webp: 'assets/images/webp/project-cosmobeaute.webp', caption: 'Cosmobeauté Indonesia Portal' }
        ]
      },
      tabs: {
        overview: `
          <div class="bp-section">
            <h5><i class="fa-solid fa-spa"></i> Event Overview</h5>
            <p><strong>Cosmobeauté Indonesia</strong> connects aesthetic medical specialists, spa owners, and beauty distributors with international brands and equipment manufacturers.</p>
          </div>
          <div class="bp-media"><img src="assets/images/project-cosmobeaute.png" alt="Cosmobeauté Indonesia" loading="lazy" /></div>
          <div class="bp-footer-bar">
            <span>ICE BSD • Aesthetic Tech Hub</span>
            <a href="https://www.cosmobeauteasia.com/indonesia/" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Visit Live Platform <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        `
      }
    },
    {
      id: 'vapefair',
      title: 'Vape Fair Indonesia',
      badge: 'Industry Hub',
      metaLine: 'Jakarta • Trade & Consumer Expo',
      categories: ['web'],
      categoryLabel: 'Web Development • Industry Expo',
      featured: false,
      shortDesc: 'Dedicated international trade portal for manufacturers, distributors, and consumers, featuring age-verified digital ticketing.',
      img: 'assets/images/project-vapefair.png',
      webp: 'assets/images/webp/project-vapefair.webp',
      width: 1280,
      height: 720,
      liveUrl: 'https://www.vapefair.id',
      repoUrl: null,
      tags: ['WordPress', 'Age Verification', 'B2B Directory'],
      caseStudy: {
        overview: 'Vape Fair Indonesia is a dedicated international exhibition portal connecting alternative consumer product manufacturers, distributors, and adult attendees in Jakarta.',
        background: 'Requires regulatory age-gate compliance alongside seamless digital ticketing and exhibitor showcase pages.',
        problem: 'Balancing strict age-verification gating with fast mobile load times and high-traffic ticketing flows during event announcements.',
        role: 'Web Developer — maintained WordPress platform, age-verification UI flow, ticketing links, and performance tuning.',
        approach: 'WordPress implementation featuring lightweight client-side age-gate persistence, B2B directory layout, and mobile-first optimization.',
        implementation: 'Updated annual event branding, exhibitor listings, and high-traffic ticket funnel links.',
        results: 'Live production portal at vapefair.id; internal ticket conversion metrics are not publicly documented.',
        screenshots: [
          { src: 'assets/images/project-vapefair.png', webp: 'assets/images/webp/project-vapefair.webp', caption: 'Vape Fair Indonesia Website' }
        ]
      },
      tabs: {
        overview: `
          <div class="bp-section">
            <h5><i class="fa-solid fa-wind"></i> Event Overview</h5>
            <p><strong>Vape Fair Indonesia</strong> is an international exhibition portal connecting manufacturers, distributors, and consumers, featuring age-verified digital ticket booking.</p>
          </div>
          <div class="bp-media"><img src="assets/images/project-vapefair.png" alt="Vape Fair Indonesia" loading="lazy" /></div>
          <div class="bp-footer-bar">
            <span>Jakarta • Industry Exhibition</span>
            <a href="https://www.vapefair.id" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Visit Live Platform <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        `
      }
    },
    {
      id: 'cloudsfest',
      title: 'Clouds Fest',
      badge: 'Lifestyle Trade',
      metaLine: 'Southeast Asia • Pamerindo · Informa',
      categories: ['web'],
      categoryLabel: 'Web Development • Lifestyle Trade',
      featured: false,
      shortDesc: 'Dynamic lifestyle and trade showcase platform for alternative consumer products across Southeast Asia.',
      img: 'assets/images/project-cloudsfest.png',
      webp: 'assets/images/webp/project-cloudsfest.webp',
      width: 1280,
      height: 720,
      liveUrl: 'https://www.cloudsfest.com',
      repoUrl: null,
      tags: ['WordPress CMS', 'Event Engine', 'Ticketing'],
      caseStudy: {
        overview: 'Clouds Fest is a regional lifestyle and trade showcase platform under PT Pamerindo Indonesia / Informa Markets serving Southeast Asian audiences.',
        background: 'Combines trade exhibition directories with festival lineups, stage schedules, and ticket booking workflows.',
        problem: 'Delivering rich visual festival lineups on mobile devices without degrading scroll smoothness or page speed.',
        role: 'Web Developer — managed CMS modules, responsive mobile tuning, event schedule sections, and ticketing integrations.',
        approach: 'WordPress CMS setup with modular schedule components, mobile viewport optimization, and fast media loading.',
        implementation: 'Maintained lineup schedules, brand exhibitor blocks, and cross-linked ticketing CTAs.',
        results: 'Live production festival portal at cloudsfest.com; attendance figures are not publicly documented.',
        screenshots: [
          { src: 'assets/images/project-cloudsfest.png', webp: 'assets/images/webp/project-cloudsfest.webp', caption: 'Clouds Fest Portal' }
        ]
      },
      tabs: {
        overview: `
          <div class="bp-section">
            <h5><i class="fa-solid fa-cloud"></i> Event Overview</h5>
            <p><strong>Clouds Fest</strong> offers interactive event schedules, musical performer lineups, and exhibitor booths for regional lifestyle trade audiences.</p>
          </div>
          <div class="bp-media"><img src="assets/images/project-cloudsfest.png" alt="Clouds Fest" loading="lazy" /></div>
          <div class="bp-footer-bar">
            <span>Southeast Asia • Informa Markets</span>
            <a href="https://www.cloudsfest.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Visit Live Platform <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        `
      }
    },
    {
      id: 'beautefestival',
      title: 'Beauté Festival',
      badge: 'Beauty Lifestyle',
      metaLine: 'Jakarta • Retail & Activations',
      categories: ['web'],
      categoryLabel: 'Web Development • D2C Festival',
      featured: false,
      shortDesc: 'Consumer-facing beauty and wellness festival portal blending digital registration, brand activations, and influencer schedules.',
      img: 'assets/images/project-beautefestival.png',
      webp: 'assets/images/webp/project-beautefestival.webp',
      width: 1280,
      height: 720,
      liveUrl: 'https://www.beautefestival.com',
      repoUrl: null,
      tags: ['WordPress', 'D2C Portal', 'Brand Activations'],
      caseStudy: {
        overview: 'Beauté Festival is a consumer-facing beauty and wellness festival portal in Jakarta uniting skincare brands, influencers, workshop bookings, and live masterclass schedules.',
        background: 'Created as a D2C complement to Pamerindo’s B2B beauty trade portfolio.',
        problem: 'High mobile social-media referral traffic requiring instant schedule browsing, brand activation highlights, and frictionless registration.',
        role: 'Web Developer — managed WordPress theme customization, D2C registration links, and mobile visual polish.',
        approach: 'Responsive WordPress architecture structured around brand activation grids and masterclass timetables.',
        implementation: 'Deployed editorial event blocks, influencer schedule modules, and campaign tracking.',
        results: 'Live production portal at beautefestival.com; private registration numbers are not publicly documented.',
        screenshots: [
          { src: 'assets/images/project-beautefestival.png', webp: 'assets/images/webp/project-beautefestival.webp', caption: 'Beauté Festival Portal' }
        ]
      },
      tabs: {
        overview: `
          <div class="bp-section">
            <h5><i class="fa-solid fa-heart"></i> Event Overview</h5>
            <p><strong>Beauté Festival</strong> brings together beauty enthusiasts, influencers, and leading skincare brands with interactive workshop bookings and live masterclass schedules.</p>
          </div>
          <div class="bp-media"><img src="assets/images/project-beautefestival.png" alt="Beauté Festival" loading="lazy" /></div>
          <div class="bp-footer-bar">
            <span>Jakarta • Retail &amp; Activations</span>
            <a href="https://www.beautefestival.com" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Visit Live Platform <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
        `
      }
    },
    {
      id: 'orion-erp',
      title: 'Orion ERP & IBM iSeries Simulator',
      badge: 'Enterprise ERP',
      metaLine: 'IBM AS/400 • DB2 • RPG IV Free Format',
      categories: ['enterprise'],
      categoryLabel: 'Enterprise Systems • ERP & Mainframe',
      featured: false,
      shortDesc: 'Enterprise manufacturing ERP platform featuring live IBM AS/400 DB2 terminal connectivity, multi-level BOM explosion, MRP engine, and WRKSPLF/WRKACTJOB emulators.',
      img: 'assets/images/project-orion-erp.png',
      webp: 'assets/images/webp/project-orion-erp.webp',
      width: 1280,
      height: 720,
      liveUrl: null,
      repoUrl: null,
      docFile: 'Project-ERP.md',
      tags: ['IBM AS/400 DB2', 'RPG IV Free', 'MRP & BOM', '5250 Terminal'],
      caseStudy: {
        overview: 'Orion ERP & IBM iSeries Simulator is an enterprise manufacturing ERP platform and AS/400 RPG simulator designed around real manufacturing & supply-chain workflows (Inventory, MES, MRP, Purchasing, Sales, General Ledger, and OS/400 Security).',
        background: 'Built as a comprehensive candidate engineering portfolio package demonstrating IBM iSeries (AS/400), RPG IV Free Format (**FREE), DB2 for i relational modeling, and modern web UI integration.',
        problem: 'Legacy AS/400 ERP environments often lack accessible modern interfaces for cross-departmental visibility while requiring strict transactional integrity, RBAC, and audit journaling.',
        role: 'Sole Designer & Full-Stack Engineer — modeled DB2 relational tables (INVMSTP, BOMMSTP, MRPMSTP, WKHEDP, POHEDP, VCHDTLP, SECAUDP), authored RPG Free simulation modules, and built the 5250 terminal & executive dashboard UI.',
        approach: 'Combined a modern web operations frontend (HTML5, CSS3, Vanilla JS, LocalStorage persistence) with authentic IBM i workflows including WRKSPLF 132-column green-bar print spooling, WRKACTJOB subsystem control, STRSQL console, and 5250 sign-on lock screen.',
        implementation: 'Implemented BOM explosion (BOM_EXPLODE.RPGLE), net-demand MRP planning (MRP_ENGINE.RPGLE), auto-reorder triggers (INV_REORDER_AUTO), batch GL voucher posting (GL_POST_BATCH.RPGLE), and RBAC enforcement blocking destructive SQL statements.',
        results: 'Complete interactive 12-module ERP & AS/400 simulation verified with screenshots and technical documentation in portfolio_presentation.md. Designed as a technical showcase/simulator rather than a live factory deployment.',
        screenshots: [
          { src: 'assets/images/project-orion-erp.png', webp: 'assets/images/webp/project-orion-erp.webp', caption: 'Orion ERP Executive Operations & AS/400 Dashboard' }
        ]
      },
      tabs: {
        overview: `
          <div class="bp-section">
            <h5><i class="fa-solid fa-compass"></i> System Overview</h5>
            <p><strong>Orion ERP</strong> is an enterprise manufacturing and IBM iSeries (AS/400) RPG simulator unifying Inventory (<code>INVMSTP</code>), MES &amp; BOM explosion, Material Requirements Planning (MRP), Purchasing/Sales, General Ledger (AR/AP/GL), and OS/400 Security Journaling (<code>QAUDJRN</code>).</p>
          </div>
          <div class="bp-media"><img src="assets/images/project-orion-erp.png" alt="Orion ERP Dashboard" loading="lazy" /></div>
        `,
        architecture: `
          <div class="bp-card">
            <h6><i class="fa-solid fa-server"></i> IBM AS/400 DB2 &amp; OS/400 Subsystem Emulation</h6>
            <p>Structured around DB2 for i physical files (<code>INVMSTP</code>, <code>BOMMSTP</code>, <code>WKHEDP</code>, <code>VCHDTLP</code>, <code>SECAUDP</code>) with WRKSPLF print queues (<code>QPRINT</code>, <code>ORIONPRT</code>), WRKACTJOB subsystem controls (<code>QINTER</code>, <code>QBATCH</code>), and interactive STRSQL query console.</p>
          </div>
        `,
        features: `
          <div class="bp-grid">
            <div class="bp-card"><h6>MRP &amp; BOM Explosion</h6><p>Multi-level BOM allocation (<code>BOM_EXPLODE.RPGLE</code>) and net demand calculation against safety stock.</p></div>
            <div class="bp-card"><h6>Finance &amp; General Ledger</h6><p>Batch voucher posting (<code>GL_POST_BATCH.RPGLE</code>) validating debit/credit balance integrity to <code>GLMSTP</code>.</p></div>
            <div class="bp-card"><h6>WRKSPLF &amp; WRKACTJOB</h6><p>132-column green-bar spooled file viewer and active job subsystem management emulator.</p></div>
            <div class="bp-card"><h6>RBAC &amp; 5250 Lock Screen</h6><p>Role-based user profiles (<code>QSECOFR</code>, <code>FIN_MGR</code>, <code>WHS_OPER</code>) with SQL injection blocking.</p></div>
          </div>
        `,
        specs: `<p class="bp-note">Simulated IBM iSeries AS/400 • RPG IV Free Format (**FREE) • CLP • DB2 for i / STRSQL • Modern HTML5/CSS3/JS UI.</p>`
      }
    },
    {
      id: 'cv-examiner',
      title: 'CV Examiner AI Pro Platform',
      badge: 'AI SaaS',
      metaLine: 'GPT-4o Engine • Career Intelligence SaaS',
      categories: ['ai'],
      categoryLabel: 'AI & Automation • Career SaaS',
      featured: false,
      shortDesc: 'AI-powered recruitment SaaS providing automated resume parsing, ATS keyword gap analysis, STAR-method suggestions, and candidate scoring.',
      img: 'assets/images/project-cv-examiner.png',
      webp: 'assets/images/webp/project-cv-examiner.webp',
      width: 1280,
      height: 720,
      liveUrl: null,
      repoUrl: null,
      docFile: 'Project-CV.md',
      tags: ['GPT-4o', 'FastAPI', 'React 18', 'ATS Analyzer'],
      caseStudy: {
        overview: 'CV Examiner AI Pro is a bilingual (Indonesian / English) SaaS platform powered by GPT-4o via FastAPI and React 18 that audits resumes, computes ATS scores (0–100), rewrites bullet points into STAR format, and conducts LinkedIn profile & interview preparation.',
        background: 'Built to help professionals and hiring workflows systematically identify keyword gaps, resume weaknesses, and interview readiness.',
        problem: 'Manual CV review is time-consuming and inconsistent, and job seekers rarely receive structured feedback on ATS keyword alignment or measurable STAR phrasing.',
        role: 'Full-Stack & AI Engineer — architected the React 18 / Vite frontend components (AtsAudit, LinkedInAudit, InterviewPrepStudio, StarRewriter, WeaknessFixer, ExportModal) and FastAPI GPT-4o SSE backend.',
        approach: 'Modular React 18 UI with i18n translations (ID/EN) and Dark/Light themes paired with a FastAPI server integrating Informa AI Engine / AWS Cognito OAuth2 token flows.',
        implementation: 'Built multi-format file upload (PDF/DOCX/TXT), structured JSON/Text/PDF-ready export, automated Puppeteer screenshot capture pipeline, and 6 specialized analysis studios.',
        results: 'Complete full-stack SaaS application documented in Project-CV.md with 9 verified UI module captures. External public usage metrics are not publicly documented.',
        screenshots: [
          { src: 'assets/images/project-cv-examiner.png', webp: 'assets/images/webp/project-cv-examiner.webp', caption: 'CV Examiner AI Pro Dashboard' }
        ]
      },
      tabs: {
        overview: `
          <div class="bp-section">
            <h5><i class="fa-solid fa-compass"></i> System Overview</h5>
            <p><strong>CV Examiner AI Pro</strong> parses PDF, DOCX, and TXT resumes, benchmarks qualifications against target job descriptions, computes ATS scores (0–100), and delivers actionable STAR rewrites, LinkedIn audits, and AI interview prep.</p>
          </div>
          <div class="bp-media"><img src="assets/images/project-cv-examiner.png" alt="CV Examiner AI Pro" loading="lazy" /></div>
        `,
        architecture: `
          <div class="bp-card">
            <h6><i class="fa-solid fa-sitemap"></i> React 18 + Vite Frontend &amp; FastAPI GPT-4o Backend</h6>
            <p>Frontend state orchestrates <code>CVUploadForm</code>, <code>AnalysisDashboard</code>, and 6 modular audit views with bilingual <code>translations.js</code> (ID/EN), backed by Python FastAPI (<code>server.py</code>) and Cognito OAuth2 SSE streaming.</p>
          </div>
        `,
        features: `
          <div class="bp-grid">
            <div class="bp-card"><h6>ATS Smart Keyword Audit</h6><p>Detects missing target keywords and scores ATS readability (0–100).</p></div>
            <div class="bp-card"><h6>STAR Rewriter Engine</h6><p>Rewrites experience bullets into Situation, Task, Action, and Result impact statements.</p></div>
            <div class="bp-card"><h6>AI Interview Prep Studio</h6><p>Generates role-specific technical and behavioral questions with ideal answer guides.</p></div>
            <div class="bp-card"><h6>LinkedIn &amp; Weakness Fixer</h6><p>Audits CV-to-LinkedIn alignment and surfaces prioritized fixes with multi-format export.</p></div>
          </div>
        `,
        specs: `<p class="bp-note">React 18 • Vite 5 • FastAPI 0.111 • Python 3.11+ • GPT-4o • Bilingual (ID/EN).</p>`
      }
    },
    {
      id: 'monitor-tablet',
      title: 'Enterprise IoT Remote Hub',
      badge: 'Enterprise IoT',
      metaLine: 'IoT & Tech Ops • Sub-200ms Remote Hub',
      categories: ['iot', 'enterprise'],
      categoryLabel: 'IoT & Technology Operations',
      featured: false,
      shortDesc: 'Low-latency device administration hub providing real-time health telemetry and non-root remote control for 30+ Android tablets and Windows event kiosks.',
      img: 'assets/images/project-monitor-tablet.png',
      webp: 'assets/images/webp/project-monitor-tablet.webp',
      width: 1280,
      height: 720,
      liveUrl: null,
      repoUrl: null,
      docFile: 'Project-Monitor Tablet.md',
      tags: ['FastAPI', 'Kotlin', 'PyAutoGUI', 'Device Telemetry'],
      caseStudy: {
        overview: 'Enterprise IoT & Multi-Device Remote Monitoring System is a low-latency (sub-200ms) remote administration and telemetry hub built for Android tablets and Windows kiosks deployed across large-scale exhibition halls.',
        background: 'At major Pamerindo trade exhibitions, dozens of Android tablets and Windows PCs operate simultaneously as self-registration kiosks, exhibitor directories, and interactive hall displays.',
        problem: 'Field staff could not immediately detect frozen kiosks, battery drops, or network disconnects, and commercial Android tablets cannot be rooted while requiring remote troubleshooting across large exhibition halls.',
        role: 'System Architect & Developer — built the FastAPI central hub, native Kotlin/Jetpack Compose Android client, and multi-threaded Python Windows kiosk client.',
        approach: 'Asynchronous Client-Server architecture with in-memory screenshot caching, 100–150ms heartbeat/command polling, and conflated coroutine JPEG streaming.',
        implementation: 'Used Android AccessibilityService + MediaProjection API (no root required) on tablets, thread-isolated PyAutoGUI/psutil workers on Windows PCs, and percentage-normalized coordinates (0–100%) for DPI-accurate remote clicks and virtual keyboard control.',
        results: 'Documented in Project-Monitor Tablet.md: achieved sub-200ms frame transmission latency, <2% CPU overhead on Windows kiosks, and ~90% reduction in downtime response time by allowing one IT technician to monitor and control kiosks from a central console.',
        screenshots: [
          { src: 'assets/images/project-monitor-tablet.png', webp: 'assets/images/webp/project-monitor-tablet.webp', caption: 'Multi-Slot IT Admin Telemetry Dashboard' },
          { src: 'assets/images/project-monitor-tablet-2.png', webp: 'assets/images/webp/project-monitor-tablet-2.webp', caption: 'Live Device Fleet Health & Battery Status' },
          { src: 'assets/images/project-monitor-tablet-3.png', webp: 'assets/images/webp/project-monitor-tablet-3.webp', caption: 'Interactive Remote Screen & Control Modal' },
          { src: 'assets/images/project-monitor-tablet-4.png', webp: 'assets/images/webp/project-monitor-tablet-4.webp', caption: 'Android Tablet Client & Connectivity State' }
        ]
      },
      tabs: {
        overview: `
          <div class="bp-section">
            <h5><i class="fa-solid fa-tablet-screen-button"></i> System Overview</h5>
            <p><strong>Enterprise IoT &amp; Multi-Device Remote Hub</strong> monitors battery, RAM, CPU, and live screen state across 30+ Android exhibition tablets and Windows kiosks with sub-200ms latency and non-root remote control.</p>
          </div>
          <div class="bp-media"><img src="assets/images/project-monitor-tablet.png" alt="Enterprise IoT Hub" loading="lazy" /></div>
        `,
        architecture: `
          <div class="bp-card">
            <h6><i class="fa-solid fa-network-wired"></i> Asynchronous Hub + Android Kotlin &amp; Windows Python Clients</h6>
            <p>Central FastAPI hub exposes <code>/api/report</code>, <code>/api/command</code>, <code>/api/upload_screenshot</code> (in-memory RAM cache), and <code>/api/devices</code> with 7-second heartbeat timeout detection.</p>
          </div>
        `,
        features: `
          <div class="bp-grid">
            <div class="bp-card"><h6>Non-Root Android Control</h6><p>Uses Android <code>AccessibilityService</code> + <code>MediaProjection</code> with <code>Channel.CONFLATED</code> to drop stale frames on busy Wi-Fi.</p></div>
            <div class="bp-card"><h6>Thread-Isolated PC Client</h6><p>Decouples command loop (100ms), JPEG capture loop, and <code>psutil</code> CPU sampler (&lt;2% CPU usage) with DPI-safe 0–100% click mapping.</p></div>
          </div>
        `,
        specs: `<p class="bp-note">Python 3.10+ • FastAPI • Uvicorn • Kotlin &amp; Jetpack Compose • PyAutoGUI • psutil • Sub-200ms Streaming.</p>`
      }
    }
  ],

  stories: [
    {
      id: 'gold-in-the-mist',
      title: 'Gold in the Mist: The Unseen Workers',
      tag: 'Street Photography',
      filterCat: 'street',
      cat: 'Street & Everyday Life',
      location: 'Jakarta, Indonesia',
      date: 'August 2026',
      mood: 'Golden Hour Mist • Liquid Gold',
      img: 'Photo/f732741c-ebf2-44c7-a695-bb22e67b1b09.jpeg',
      webp: 'Photo/webp/f732741c-ebf2-44c7-a695-bb22e67b1b09.webp',
      width: 1400,
      height: 1050,
      excerpt: 'Under the afternoon heat, fine water spray turns into a shimmering veil of mist, catching a fleeting moment of honest daily work.',
      content: `
        <p>Under the relentless afternoon heat in Jakarta, the city's pulse never slows down. This photograph captures a humble yet deeply resonant moment of daily dedication beneath the glowing afternoon sunlight.</p>
        <blockquote class="story-quote">"Sunlight never chooses where to fall — it illuminates every drop of water and every effort with equal grace."</blockquote>
        <p>As water is sprayed to wash down the street, fine droplets catch the warm slant of the setting sun, momentarily transforming the spray into a shimmering veil of liquid gold. The entire scene lasted only a few fleeting seconds before the breeze shifted its shape.</p>
        <p>Through this lens, I wanted to document the quiet beauty found in everyday, overlooked corners of the metropolis — reminding us that amidst the urban rush, there is always poetry between human effort and natural light.</p>
      `
    },
    {
      id: 'silhouettes-scbd',
      title: 'Silhouettes of Ambition: Sunset Over SCBD',
      tag: 'Urban Sunset',
      filterCat: 'golden-hour',
      cat: 'Architecture & Sunset',
      location: 'SCBD Sudirman, Jakarta',
      date: 'July 2026',
      mood: 'Deep Amber • Skyline Silhouette',
      img: 'Photo/70422342-1920-42e3-93aa-901bd73044f4.jpeg',
      webp: 'Photo/webp/70422342-1920-42e3-93aa-901bd73044f4.webp',
      width: 1400,
      height: 1050,
      excerpt: 'As the sun drops between concrete towers, the city settles into a bold silhouette before the evening rush begins.',
      content: `
        <p>A dramatic perspective of Jakarta as the sun descends directly between the glass and steel monoliths of the SCBD financial district. Towering skyscrapers stand in sharp, grounded silhouette against the dying light.</p>
        <blockquote class="story-quote">"Every high-rise carries thousands of dreams, and dusk arrives as a gentle reminder that every hard day's work deserves a moment of rest."</blockquote>
        <p>The sky transitions through a rich spectrum from warm amber to cool slate gray, casting a reflective mood across modern architecture. It captures the transition from the bustling daytime tempo to the luminous energy of Jakarta at night.</p>
      `
    },
    {
      id: 'kebayoran-station',
      title: 'Golden Hour at Platform 2: Kebayoran Station',
      tag: 'Transit Series',
      filterCat: 'architecture',
      cat: 'Urban Commute & Transit',
      location: 'Kebayoran Station, Jakarta',
      date: 'June 2026',
      mood: 'Warm Amber • Quiet Commute',
      img: 'Photo/1c5ec77c-2dbb-4c94-8972-b37be21b970b.jpeg',
      webp: 'Photo/webp/1c5ec77c-2dbb-4c94-8972-b37be21b970b.webp',
      width: 1400,
      height: 1050,
      excerpt: 'Long shadows stretch across quiet train tracks as warm amber light greets commuters heading home after a long day.',
      content: `
        <p>Railway stations in the late afternoon carry countless quiet stories. Low-angled sunlight filters through the canopy beams of Kebayoran Station, casting elongated shadows across the platform and tracks.</p>
        <blockquote class="story-quote">"The rails represent our destinations, but the platform at dusk is where we quietly reflect on the journey itself."</blockquote>
        <p>A peaceful stillness takes over Platform 2 just before the arrival of the next commuter train. The interplay of industrial steel geometry and natural warmth creates a grounding moment for commuters heading home.</p>
      `
    },
    {
      id: 'welcome-to-isekai',
      title: 'Welcome to Isekai: Among Books & Dreams',
      tag: 'Culture & Imagination',
      filterCat: 'street',
      cat: 'Interior & Literature',
      location: 'Gramedia Jakarta',
      date: 'May 2026',
      mood: 'Warm Wooden Tones • Imagination',
      img: 'Photo/ac62e452-a485-48c3-8910-3121f9d75b12.jpeg',
      webp: 'Photo/webp/ac62e452-a485-48c3-8910-3121f9d75b12.webp',
      width: 1400,
      height: 1050,
      excerpt: 'Towering wooden bookshelves filled with stories and parallel worlds — a quiet haven away from the city’s fast pace.',
      content: `
        <p>Tall wooden bookshelves reach toward the ceiling, lined with thousands of books and stories. Stepping into this space feels like crossing into an alternate realm (<em>isekai</em>) — a quiet sanctuary away from the relentless noise of the capital.</p>
        <blockquote class="story-quote">"Reading is travel without boundaries. Between these shelves, every title is an open doorway to another adventure."</blockquote>
        <p>The structured lines and warm ambient lighting invite anyone who enters to slow down and immerse themselves in literature, imagination, and quiet contemplation.</p>
      `
    },
    {
      id: 'sun-and-bulb',
      title: 'Two Sources of Light: Sun & Filament',
      tag: 'Minimalist Perspective',
      filterCat: 'minimalist',
      cat: 'Minimalist & Perspective',
      location: 'Rooftop Vista, Jakarta',
      date: 'April 2026',
      mood: 'Monochrome Skies • Conceptual',
      img: 'Photo/927d476c-ebb0-4711-a1b9-5663bb9dc8e8.jpeg',
      webp: 'Photo/webp/927d476c-ebb0-4711-a1b9-5663bb9dc8e8.webp',
      width: 1400,
      height: 1050,
      excerpt: 'A hanging light bulb aligns in clean balance above the overcast sun — a minimalist study of natural and artificial light.',
      content: `
        <p>A study in conceptual alignment and perspective. A simple hanging filament bulb aligns in vertical symmetry directly above the natural sun, glowing softly behind a blanket of cloud cover.</p>
        <blockquote class="story-quote">"Humanity crafted the light bulb to pierce the dark, yet nature remains the original source of all radiance."</blockquote>
        <p>This minimalist composition invites the viewer to reflect on the quiet balance between human engineering and the natural world in clean visual harmony.</p>
      `
    },
    {
      id: 'jiexpo-dusk',
      title: 'Dusk Over JIEXPO Kemayoran',
      tag: 'Exhibition Hub',
      filterCat: 'architecture',
      cat: 'Exhibition & Skyline',
      location: 'JIEXPO Kemayoran, Jakarta',
      date: 'March 2026',
      mood: 'Twilight Horizon • Exhibition Hub',
      img: 'Photo/d4b42879-a92f-4b67-b5ab-276e1b17499b.jpeg',
      webp: 'Photo/webp/d4b42879-a92f-4b67-b5ab-276e1b17499b.webp',
      width: 1400,
      height: 1050,
      excerpt: 'After thousands of trade visitors leave the halls, calm evening twilight settles over Southeast Asia’s busiest exhibition center.',
      content: `
        <p>After thousands of international trade visitors and business delegates depart the exhibition halls, the evening twilight rests gently over the architectural facade of JIEXPO Kemayoran.</p>
        <blockquote class="story-quote">"Trade exhibitions bring people and future ideas together; dusk brings an elegant close to a day of meaningful connections."</blockquote>
        <p>Overseeing the digital event infrastructure and web operations here, moments like these at dusk offer a grounding sense of accomplishment and calm after high-energy event days.</p>
      `
    },
    {
      id: 'crimson-skyline',
      title: 'Crimson Skyline: Fiery Horizon Over Jakarta',
      tag: 'Sunset Series',
      filterCat: 'golden-hour',
      cat: 'Atmospheric Landscape',
      location: 'South Jakarta Canopy',
      date: 'February 2026',
      mood: 'Vivid Tangerine & Crimson Glow',
      img: 'Photo/670a2ccb-33de-4b97-b830-467f1d16b05f.jpeg',
      webp: 'Photo/webp/670a2ccb-33de-4b97-b830-467f1d16b05f.webp',
      width: 1400,
      height: 1050,
      excerpt: 'A fiery band of deep orange cuts through evening clouds above silhouetted tree canopies, revealing the city’s dramatic dusk palette.',
      content: `
        <p>The Jakarta sky turns into a fiery canvas as deep tangerine and crimson gradients cut across evening cloud banks, contrasting sharply with the silhouettes of lush tree canopies below.</p>
        <blockquote class="story-quote">"There is magic when the twilight sky blazes — as if reminding us that at the end of every demanding day, beauty awaits."</blockquote>
        <p>This atmospheric phenomenon showcases a dramatic side of the capital rarely captured in full. The intense warm glow blankets the skyline just before twilight fades to night.</p>
      `
    },
    {
      id: 'golden-corona',
      title: 'Golden Corona: The Piercing Sun',
      tag: 'Golden Hour',
      filterCat: 'golden-hour',
      cat: 'Solar & Cloud Study',
      location: 'West Jakarta Sky',
      date: 'January 2026',
      mood: 'Radiant Solar Amber • Atmospheric Haze',
      img: 'Photo/cab028f6-9277-47ab-863f-b52cd385f268.jpeg',
      webp: 'Photo/webp/cab028f6-9277-47ab-863f-b52cd385f268.webp',
      width: 1400,
      height: 1050,
      excerpt: 'Intense afternoon sunlight breaks through atmospheric dust and light cloud cover, creating a radiant solar halo above the horizon.',
      content: `
        <p>Intense late afternoon sunlight pierces through fine atmospheric haze and cloud layers over West Jakarta, generating an ethereal, radiant golden corona across the horizon.</p>
        <blockquote class="story-quote">"Even through the thickest veil of haze, true light never loses its power to pierce through and illuminate."</blockquote>
        <p>Warm amber light bathes the upper atmosphere in a deep solar glow, turning an ordinary urban horizon into an evocative, surreal study of light and atmosphere.</p>
      `
    },
    {
      id: 'amber-horizon',
      title: 'Amber Horizon: Solitude of the Street Lamp',
      tag: 'Urban Geometry',
      filterCat: 'minimalist',
      cat: 'Minimalism & Street Architecture',
      location: 'Central Jakarta Promenade',
      date: 'August 2026',
      mood: 'Pastel Dusk • Geometric Harmony',
      img: 'Photo/cb5bf88a-7803-481b-a2e6-abdaa241dadb.jpeg',
      webp: 'Photo/webp/cb5bf88a-7803-481b-a2e6-abdaa241dadb.webp',
      width: 1400,
      height: 1050,
      excerpt: 'A clean Y-shaped street lamp frames a warm copper sunset between quiet tree branches and geometric pillars.',
      content: `
        <p>A solitary Y-shaped street lamp stands along the promenade edge, framing a warm copper-toned sun nestled between delicate branches and clean vertical pillars.</p>
        <blockquote class="story-quote">"Man-made geometric precision and organic natural forms meet in effortless balance when united by evening sunlight."</blockquote>
        <p>The soft sunset glow casts gentle peach and amber hues across the sky, offering a clean, structured, and peaceful visual rhythm.</p>
      `
    }
  ],

  experience: [
    {
      period: 'Jul 2024 — Present',
      role: 'Data & Tech Support',
      company: 'Informa Markets Asia',
      location: 'Jakarta, Indonesia',
      description: 'Diagnosing and resolving complex technical issues across multiple platforms, managing data reporting pipelines, CRM synchronizations, Microsoft Azure and Mimecast administration, enterprise IT support, and supporting cross-functional teams across regional B2B exhibition operations.',
      highlights: ['Technical Troubleshooting', 'Data Reporting & CRM Sync', 'Microsoft Azure & Mimecast', 'Regional Exhibition IT Operations']
    },
    {
      period: 'Oct 2023 — Present',
      role: 'Web Development',
      company: 'PT Pamerindo Indonesia',
      location: 'Jakarta, Indonesia',
      description: 'Managing website content, CMS updates, and system optimization across 7 major event platforms serving 100,000+ visitors. Improved site load speed by 30% and developed new sites for Lab Indonesia, Lab Vietnam, and Cosmobeauté Indonesia.',
      highlights: ['7+ Major Event Platforms', '30% Load Speed Improvement', 'Lab Indonesia & Lab Vietnam', 'Cosmobeauté Indonesia']
    }
  ],

  education: [
    {
      period: 'Apr 2023 — Feb 2024',
      degree: "Bachelor's Degree in Computer Engineering / Sistem Komputer",
      institution: 'Universitas Gunadarma · Depok',
      gpa: 'GPA: 3.78/4.00',
      badge: 'Full Scholarship Recipient',
      description: 'Thesis: Traveling Violation Detection System in Basketball Matches using Deep Learning (YOLOv8 Algorithm).'
    },
    {
      period: 'Sep 2019 — Aug 2022',
      degree: 'Diploma in Computer Engineering',
      institution: 'Universitas Gunadarma · Depok',
      gpa: 'GPA: 3.77/4.00',
      badge: 'Full Scholarship Recipient • Former Head of Student Association',
      description: 'Final Project: Housing Access Control System with IoT & ESP8266 Microcontroller.'
    }
  ],

  certifications: [
    { name: 'Fortinet NSE 1 & NSE 2', issuer: 'Fortinet Network Security' },
    { name: 'Fortinet Certified Fundamentals in Cybersecurity', issuer: 'Fortinet' },
    { name: 'BNSP Junior Computer Network Technician', issuer: 'BNSP (2022)' },
    { name: 'ServiceNow Fundamentals', issuer: 'ServiceNow' },
    { name: 'Azure Fundamentals', issuer: 'Microsoft Azure' },
    { name: 'TOEFL Computer-Based, Score 513', issuer: 'English Proficiency' }
  ]
};
