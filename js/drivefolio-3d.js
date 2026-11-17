/* ==========================================================================
   DRIVEFOLIO 3D ISLAND ENGINE — RIKKARDO L. TOBING EDITION
   Inspired by drivefolio.framer.website
   Interactive 3D Car Island, Roadside Case Study Billboards, Autopilot Tour,
   Visited Tracker, Day/Sunset/Night Cycle, Postcard Snapshot & Radar Minimap
   ========================================================================== */

(function () {
  'use strict';

  // ── Complete Island Stops & Billboards Dataset (100% Real Portfolio Material) ──
  const ISLAND_STOPS = [
    {
      id: 'pamerindo',
      type: 'project',
      category: 'b2b',
      zone: 'B2B Exhibition Boulevard',
      badge: 'Flagship Corporate Portal',
      title: 'PT Pamerindo Indonesia',
      subtitle: 'Informa Markets Asia • 500K+ Trade Visitors • 99.9% Uptime SLA',
      desc: 'The primary digital gateway for Indonesia’s leading trade exhibition organizer, connecting 200+ international events and 500,000+ yearly trade visitors.',
      img: 'assets/images/project-pamerindo.png',
      url: 'https://www.pamerindo.com',
      tags: ['Enterprise WordPress', 'PHP 8.x', 'Technical SEO', 'Multilingual CMS'],
      accent: '#E8B931',
      angle: 0.15
    },
    {
      id: 'nexusagent',
      type: 'project',
      category: 'system',
      zone: 'AI & Enterprise District',
      badge: 'Autonomous AI & Observability',
      title: 'NexusAgent & PamerAi Ecosystem',
      subtitle: 'FastAPI • Python 3.10+ • ReAct Loop • Cost Tracker ($/Rp)',
      desc: 'End-to-end AI engineering platform featuring an autonomous ReAct agent, live token expense tracking in USD & IDR, developer copilot, and WhatsApp RAG assistant.',
      img: 'assets/images/project-nexusagent.png',
      url: null,
      tags: ['FastAPI', 'Python 3.10+', 'ReAct AI', 'SQLite & Chart.js', 'WhatsApp Bot'],
      accent: '#06B6D4',
      angle: 0.52
    },
    {
      id: 'orion-erp',
      type: 'project',
      category: 'system',
      zone: 'AI & Enterprise District',
      badge: 'Enterprise ERP & AS/400',
      title: 'Orion ERP & IBM iSeries Simulator',
      subtitle: 'IBM AS/400 • DB2 for i • RPG IV Free Format • MES & MRP',
      desc: 'Enterprise manufacturing ERP platform featuring live IBM AS/400 DB2 terminal connectivity, multi-level BOM explosion, MRP engine, and WRKSPLF/WRKACTJOB emulators.',
      img: 'assets/images/project-orion-erp.png',
      url: null,
      tags: ['IBM AS/400 DB2', 'RPG IV Free', 'MRP & BOM', '5250 Terminal'],
      accent: '#6366F1',
      angle: 0.90
    },
    {
      id: 'cv-examiner',
      type: 'project',
      category: 'system',
      zone: 'AI & Enterprise District',
      badge: 'AI Career Intelligence SaaS',
      title: 'CV Examiner AI Pro Platform',
      subtitle: 'GPT-4o Engine • React 18 • FastAPI • Semantic ATS Scoring',
      desc: 'AI-powered recruitment SaaS providing automated resume parsing, ATS keyword gap analysis, STAR-method bullet rewrites, and candidate match scoring.',
      img: 'assets/images/project-cv-examiner.png',
      url: null,
      tags: ['GPT-4o', 'FastAPI', 'React 18', 'ATS Analyzer'],
      accent: '#A855F7',
      angle: 1.28
    },
    {
      id: 'monitor-tablet',
      type: 'project',
      category: 'system',
      zone: 'AI & Enterprise District',
      badge: 'Enterprise IoT Telemetry',
      title: 'Enterprise IoT Remote Hub',
      subtitle: 'Sub-200ms WebSocket Hub • Kotlin Android & Windows Kiosks',
      desc: 'Low-latency device administration hub providing real-time WebSocket health telemetry and remote control for 30+ Android tablets and Windows event kiosks.',
      img: 'assets/images/project-monitor-tablet.png',
      url: null,
      tags: ['WebSocket', 'FastAPI', 'Kotlin', 'Fleet Telemetry'],
      accent: '#10B981',
      angle: 1.66
    },
    {
      id: 'about-scale',
      type: 'hub',
      category: 'about',
      zone: 'Engineering Hub',
      badge: 'About & Core Pillars',
      title: 'Bridging Web Engineering & Tech Ops',
      subtitle: '4 Core Pillars: High-Traffic Scale • Governance • SEO 95+ • Practical AI',
      desc: 'Computer Engineering graduate from Universitas Gunadarma & Data/Tech Support Executive at Informa Markets Asia building resilient digital ecosystems.',
      img: 'assets/images/profile.png',
      sectionId: '#about',
      tags: ['100K+ Concurrency', 'GDPR Governance', 'Core Web Vitals 95+', 'Production AI'],
      accent: '#D9624A',
      angle: 2.04
    },
    {
      id: 'fhi',
      type: 'project',
      category: 'b2b',
      zone: 'B2B Exhibition Boulevard',
      badge: 'B2B Trade Exhibition',
      title: 'Food & Hospitality Indonesia (FHI)',
      subtitle: 'JIEXPO Jakarta • 40,000+ Trade Attendees • 700+ Exhibitors',
      desc: 'Premier international trade platform for the F&B and HoReCa sectors, featuring digital exhibitor discovery and business matchmaking.',
      img: 'assets/images/project-fhi.png',
      url: 'https://www.foodhospitalityindonesia.com',
      tags: ['WordPress Multisite', 'Event Engine', 'High Traffic'],
      accent: '#F59E0B',
      angle: 2.42
    },
    {
      id: 'labindo',
      type: 'project',
      category: 'b2b',
      zone: 'B2B Exhibition Boulevard',
      badge: 'Scientific B2B Portal',
      title: 'Lab Indonesia',
      subtitle: 'ICE BSD • 22,000+ Attendees • Scientific Instrumentation',
      desc: 'Southeast Asia’s largest trade platform for laboratory technology and analytical instrumentation with searchable exhibitor catalogues.',
      img: 'assets/images/project-labindo.png',
      url: 'https://www.lab-indo.com',
      tags: ['CMS Architecture', 'Exhibitor Directory', 'Technical SEO'],
      accent: '#3B82F6',
      angle: 2.80
    },
    {
      id: 'service-web',
      type: 'hub',
      category: 'services',
      zone: 'Capabilities & Stack Garage',
      badge: 'Services & Tech Stack',
      title: 'Core Engineering Capabilities',
      subtitle: 'Web Architecture • Legacy ERP • AI Observability • Tech Operations',
      desc: 'Full-stack delivery combining WordPress Enterprise, PHP 8.2, Python FastAPI, ReAct AI Agents, IBM AS/400 DB2, WebSockets, and Technical SEO.',
      img: 'assets/images/project-pamerindo.png',
      sectionId: '#services',
      tags: ['WordPress & PHP 8.2', 'Python & FastAPI', 'IBM AS/400 DB2', 'WebSockets & SEO'],
      accent: '#76948C',
      angle: 3.18
    },
    {
      id: 'fhtbali',
      type: 'project',
      category: 'b2b',
      zone: 'B2B Exhibition Boulevard',
      badge: 'Hospitality & Tourism B2B',
      title: 'Food, Hotel & Tourism Bali (FHTB)',
      subtitle: 'BNDCC Nusa Dua Bali • Asia-Pacific Resort Hub',
      desc: 'High-traffic hospitality and tourism trade platform connecting international suppliers with luxury resort operators across Bali and Asia-Pacific.',
      img: 'assets/images/project-fhtbali.png',
      url: 'https://www.fhtbali.com',
      tags: ['WordPress', 'UI/UX', 'Speed Tuning'],
      accent: '#14B8A6',
      angle: 3.56
    },
    {
      id: 'cosmobeaute',
      type: 'project',
      category: 'b2b',
      zone: 'B2B Exhibition Boulevard',
      badge: 'Beauty & Aesthetics B2B',
      title: 'Cosmobeauté Indonesia',
      subtitle: 'ICE BSD • Indonesia’s Largest Beauty & Aesthetic Tech Hub',
      desc: 'The nation’s largest B2B beauty and medical aesthetic trade portal tailored for supplier networking, brand showcases, and visitor registration.',
      img: 'assets/images/project-cosmobeaute.png',
      url: 'https://www.cosmobeauteasia.com/indonesia/',
      tags: ['CMS Customization', 'Lead Capture', 'B2B Directory'],
      accent: '#EC4899',
      angle: 3.94
    },
    {
      id: 'stories-hub',
      type: 'stories',
      category: 'stories',
      zone: 'Jakarta Photography Vista',
      badge: '9 Visual Stories & Articles',
      title: 'Urban Stories & Perspectives',
      subtitle: 'Street Photography • Golden Hour • SCBD • Kebayoran • JIEXPO',
      desc: 'Moments captured through Rikkardo’s lens around Jakarta — everyday street scenes, golden hours, transit geometry, and quiet urban observations.',
      img: 'Photo/f732741c-ebf2-44c7-a695-bb22e67b1b09.jpeg',
      sectionId: '#stories',
      photoIndex: 0,
      tags: ['Gold in the Mist', 'SCBD Sunset', 'Kebayoran Station', 'JIEXPO Dusk'],
      accent: '#F97316',
      angle: 4.32
    },
    {
      id: 'vapefair',
      type: 'project',
      category: 'b2b',
      zone: 'B2B Exhibition Boulevard',
      badge: 'Industry Trade Hub',
      title: 'Vape Fair Indonesia',
      subtitle: 'Jakarta • International Trade & Consumer Expo',
      desc: 'Dedicated international trade portal for manufacturers, distributors, and consumers featuring age-verified digital ticketing.',
      img: 'assets/images/project-vapefair.png',
      url: 'https://www.vapefair.id',
      tags: ['WordPress', 'Age Verification', 'B2B Directory'],
      accent: '#8B5CF6',
      angle: 4.70
    },
    {
      id: 'cloudsfest',
      type: 'project',
      category: 'b2b',
      zone: 'B2B Exhibition Boulevard',
      badge: 'Lifestyle & Trade Show',
      title: 'Clouds Fest',
      subtitle: 'Southeast Asia • Pamerindo · Informa Markets',
      desc: 'Dynamic lifestyle and trade showcase platform for alternative consumer products across Southeast Asia.',
      img: 'assets/images/project-cloudsfest.png',
      url: 'https://www.cloudsfest.com',
      tags: ['WordPress CMS', 'Event Engine', 'Ticketing'],
      accent: '#38BDF8',
      angle: 5.08
    },
    {
      id: 'beautefestival',
      type: 'project',
      category: 'b2b',
      zone: 'B2B Exhibition Boulevard',
      badge: 'Beauty Lifestyle D2C',
      title: 'Beauté Festival',
      subtitle: 'Jakarta • Retail, Influencer Schedules & Brand Activations',
      desc: 'Consumer-facing beauty and wellness festival portal blending digital registration, brand activations, and live workshop schedules.',
      img: 'assets/images/project-beautefestival.png',
      url: 'https://www.beautefestival.com',
      tags: ['WordPress', 'D2C Portal', 'Brand Activations'],
      accent: '#F43F5E',
      angle: 5.46
    },
    {
      id: 'contact-hub',
      type: 'contact',
      category: 'contact',
      zone: 'Executive Dispatch & Journey',
      badge: 'Journey & Direct Contact',
      title: 'Experience, Education & Contact',
      subtitle: 'Informa Markets • Univ. Gunadarma (GPA 3.78) • Let’s Collaborate',
      desc: 'Connect directly via Email (rikkardotobing1@gmail.com), WhatsApp (+62 822-3174-5213), or dispatch an inquiry message straight from the island.',
      img: 'assets/images/profile.png',
      sectionId: '#contact',
      tags: ['rikkardotobing1@gmail.com', '+62 822-3174-5213', 'Jakarta, ID 🇮🇩', 'Resume PDF'],
      accent: '#22C55E',
      angle: 5.88
    }
  ];

  // Car color presets
  const CAR_COLORS = [
    { name: 'Artisan Coral', hex: 0xD9624A, css: '#D9624A' },
    { name: 'Washi Gold', hex: 0xE8B931, css: '#E8B931' },
    { name: 'Cyber Cyan', hex: 0x06B6D4, css: '#06B6D4' },
    { name: 'Botanical Sage', hex: 0x10B981, css: '#10B981' },
    { name: 'Stealth Ink', hex: 0x25231F, css: '#25231F' }
  ];

  // Time-of-day presets
  const TIME_MODES = ['day', 'sunset', 'night'];

  // Road parametric loop function: returns { x, z, tx, tz } for angle t in [0, 2*PI]
  function getRoadPoint(t) {
    // Organic rounded island loop with gentle curves
    const rx = 112 + 16 * Math.sin(2 * t) + 8 * Math.cos(3 * t);
    const rz = 88 + 14 * Math.cos(2 * t) - 7 * Math.sin(3 * t);
    const x = Math.cos(t) * rx;
    const z = Math.sin(t) * rz;

    const dt = 0.01;
    const rx2 = 112 + 16 * Math.sin(2 * (t + dt)) + 8 * Math.cos(3 * (t + dt));
    const rz2 = 88 + 14 * Math.cos(2 * (t + dt)) - 7 * Math.sin(3 * (t + dt));
    const x2 = Math.cos(t + dt) * rx2;
    const z2 = Math.sin(t + dt) * rz2;

    const dx = x2 - x;
    const dz = z2 - z;
    const len = Math.hypot(dx, dz) || 1;
    return {
      x,
      z,
      tx: dx / len,
      tz: dz / len,
      nx: -dz / len,
      nz: dx / len
    };
  }

  // Initialize when DOM and THREE are ready
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('drivefolio-canvas-wrap');
    if (!container || typeof THREE === 'undefined') return;
    initDrivefolioWorld(container);
  });

  function initDrivefolioWorld(container) {
    // ── State ──
    const visitedProjects = new Set(JSON.parse(localStorage.getItem('drivefolio_visited') || '[]'));
    let activeStop = null;
    let autopilotActive = false;
    let autopilotTargetIndex = 0;
    let clickWaypoint = null;
    let carColorIndex = 0;
    let audioEnabled = false;
    let audioCtx = null;
    let engineOsc = null;
    let engineGain = null;

    // Determine initial time mode from user's local hour
    const hour = new Date().getHours();
    let timeModeIndex = (hour >= 19 || hour < 6) ? 2 : (hour >= 16 && hour < 19) ? 1 : 0;

    // ── Scene, Camera, Renderer ──
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB);
    scene.fog = new THREE.FogExp2(0x87CEEB, 0.0022);

    const camera = new THREE.PerspectiveCamera(46, container.clientWidth / container.clientHeight, 0.5, 900);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      preserveDrawingBuffer: true, // Needed for Postcard Snapshot export!
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    container.appendChild(renderer.domElement);

    // ── Lighting ──
    const hemiLight = new THREE.HemisphereLight(0xFFFFFF, 0x3D6B48, 0.78);
    hemiLight.position.set(0, 120, 0);
    scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(0xFFF6E5, 1.25);
    sunLight.position.set(95, 130, 85);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 10;
    sunLight.shadow.camera.far = 420;
    const d = 175;
    sunLight.shadow.camera.left = -d;
    sunLight.shadow.camera.right = d;
    sunLight.shadow.camera.top = d;
    sunLight.shadow.camera.bottom = -d;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);

    // Sun / Moon visual orb in sky
    const celestialGeo = new THREE.SphereGeometry(14, 24, 24);
    const celestialMat = new THREE.MeshBasicMaterial({ color: 0xFFE680 });
    const celestialOrb = new THREE.Mesh(celestialGeo, celestialMat);
    celestialOrb.position.set(220, 145, -240);
    scene.add(celestialOrb);

    // ── Ocean & Shore Foam ──
    const oceanGeo = new THREE.PlaneGeometry(1600, 1600, 64, 64);
    oceanGeo.rotateX(-Math.PI / 2);
    const oceanMat = new THREE.MeshStandardMaterial({
      color: 0x1CA3EC,
      roughness: 0.22,
      metalness: 0.15
    });
    const oceanMesh = new THREE.Mesh(oceanGeo, oceanMat);
    oceanMesh.position.y = -2.2;
    oceanMesh.receiveShadow = true;
    scene.add(oceanMesh);

    // Foam ring around island
    const foamGeo = new THREE.RingGeometry(156, 166, 96);
    foamGeo.rotateX(-Math.PI / 2);
    const foamMat = new THREE.MeshBasicMaterial({
      color: 0xE6F7FF,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide
    });
    const foamMesh = new THREE.Mesh(foamGeo, foamMat);
    foamMesh.scale.set(1.18, 1, 0.96);
    foamMesh.position.y = -1.95;
    scene.add(foamMesh);

    // ── Island Terrain Layers ──
    const islandGroup = new THREE.Group();
    scene.add(islandGroup);

    // 1. Sandy beach base
    const sandShape = new THREE.Shape();
    const sandPts = 96;
    for (let i = 0; i <= sandPts; i++) {
      const a = (i / sandPts) * Math.PI * 2;
      const r = 158 + 14 * Math.sin(2 * a) + 7 * Math.cos(3 * a);
      const sx = Math.cos(a) * r * 1.12;
      const sy = Math.sin(a) * r * 0.92;
      if (i === 0) sandShape.moveTo(sx, sy);
      else sandShape.lineTo(sx, sy);
    }
    const sandExtrude = new THREE.ExtrudeGeometry(sandShape, {
      depth: 2.4,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 4.5,
      bevelThickness: 2.0
    });
    sandExtrude.rotateX(Math.PI / 2);
    const sandMat = new THREE.MeshStandardMaterial({
      color: 0xF0D9A8,
      roughness: 0.88,
      metalness: 0.02
    });
    const sandMesh = new THREE.Mesh(sandExtrude, sandMat);
    sandMesh.position.y = -0.3;
    sandMesh.receiveShadow = true;
    islandGroup.add(sandMesh);

    // 2. Lush Grass Main Island Plateau
    const grassShape = new THREE.Shape();
    for (let i = 0; i <= sandPts; i++) {
      const a = (i / sandPts) * Math.PI * 2;
      const r = 144 + 14 * Math.sin(2 * a) + 7 * Math.cos(3 * a);
      const gx = Math.cos(a) * r * 1.11;
      const gy = Math.sin(a) * r * 0.91;
      if (i === 0) grassShape.moveTo(gx, gy);
      else grassShape.lineTo(gx, gy);
    }
    const grassExtrude = new THREE.ExtrudeGeometry(grassShape, {
      depth: 1.6,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 2.2,
      bevelThickness: 1.2
    });
    grassExtrude.rotateX(Math.PI / 2);
    const grassMat = new THREE.MeshStandardMaterial({
      color: 0x56A962,
      roughness: 0.82,
      metalness: 0.02
    });
    const grassMesh = new THREE.Mesh(grassExtrude, grassMat);
    grassMesh.position.y = 0.0;
    grassMesh.receiveShadow = true;
    islandGroup.add(grassMesh);

    // Invisible ground plane for exact raycasting (Click-to-Drive)
    const raycastPlaneGeo = new THREE.PlaneGeometry(500, 500);
    raycastPlaneGeo.rotateX(-Math.PI / 2);
    const raycastPlane = new THREE.Mesh(
      raycastPlaneGeo,
      new THREE.MeshBasicMaterial({ visible: false })
    );
    raycastPlane.position.y = 0.15;
    scene.add(raycastPlane);

    // ── Road Loop & Dashed Center Lines ──
    const roadSegments = 260;
    const roadWidth = 12.5;
    const roadPositions = [];
    const roadIndices = [];
    const curbPositions = [];
    const curbIndices = [];

    for (let i = 0; i <= roadSegments; i++) {
      const t = (i / roadSegments) * Math.PI * 2;
      const pt = getRoadPoint(t);

      const lx = pt.x + pt.nx * (roadWidth * 0.5);
      const lz = pt.z + pt.nz * (roadWidth * 0.5);
      const rx = pt.x - pt.nx * (roadWidth * 0.5);
      const rz = pt.z - pt.nz * (roadWidth * 0.5);

      roadPositions.push(lx, 0.14, lz, rx, 0.14, rz);

      const clx = pt.x + pt.nx * (roadWidth * 0.5 + 0.9);
      const clz = pt.z + pt.nz * (roadWidth * 0.5 + 0.9);
      const crx = pt.x - pt.nx * (roadWidth * 0.5 + 0.9);
      const crz = pt.z - pt.nz * (roadWidth * 0.5 + 0.9);

      curbPositions.push(clx, 0.09, clz, crx, 0.09, crz);

      if (i < roadSegments) {
        const a = i * 2;
        const b = i * 2 + 1;
        const c = (i + 1) * 2;
        const dIdx = (i + 1) * 2 + 1;
        roadIndices.push(a, b, c, b, dIdx, c);
        curbIndices.push(a, b, c, b, dIdx, c);
      }
    }

    const curbGeo = new THREE.BufferGeometry();
    curbGeo.setAttribute('position', new THREE.Float32BufferAttribute(curbPositions, 3));
    curbGeo.setIndex(curbIndices);
    curbGeo.computeVertexNormals();
    const curbMesh = new THREE.Mesh(
      curbGeo,
      new THREE.MeshStandardMaterial({ color: 0xD9D2C5, roughness: 0.8 })
    );
    curbMesh.receiveShadow = true;
    islandGroup.add(curbMesh);

    const roadGeo = new THREE.BufferGeometry();
    roadGeo.setAttribute('position', new THREE.Float32BufferAttribute(roadPositions, 3));
    roadGeo.setIndex(roadIndices);
    roadGeo.computeVertexNormals();
    const roadMesh = new THREE.Mesh(
      roadGeo,
      new THREE.MeshStandardMaterial({ color: 0x2B2E36, roughness: 0.72 })
    );
    roadMesh.receiveShadow = true;
    islandGroup.add(roadMesh);

    // Center road dashes
    const dashGeo = new THREE.PlaneGeometry(0.45, 2.6);
    dashGeo.rotateX(-Math.PI / 2);
    const dashMat = new THREE.MeshBasicMaterial({ color: 0xF5EEDC });
    for (let i = 0; i < 120; i++) {
      const t = (i / 120) * Math.PI * 2;
      const pt = getRoadPoint(t);
      const dash = new THREE.Mesh(dashGeo, dashMat);
      dash.position.set(pt.x, 0.17, pt.z);
      dash.rotation.y = Math.atan2(pt.tx, pt.tz);
      islandGroup.add(dash);
    }

    // ── Central Island Hub Monument & Decorative Hills ──
    buildCentralIslandMonument(islandGroup);

    // ── Build All 16 Roadside Billboards & Checkpoints ──
    const stopObjects = [];
    const nightPointLights = [];
    const textureLoader = new THREE.TextureLoader();

    ISLAND_STOPS.forEach((stop, index) => {
      const pt = getRoadPoint(stop.angle);
      // Place billboard outside or inside the road loop alternately or on scenic outer side
      const side = (index % 2 === 0) ? 1 : -1;
      const billboardDist = 15.5;
      const bx = pt.x + pt.nx * side * billboardDist;
      const bz = pt.z + pt.nz * side * billboardDist;

      // Parking bay / trigger zone on the road edge
      const parkX = pt.x + pt.nx * side * 4.2;
      const parkZ = pt.z + pt.nz * side * 4.2;

      const stopGroup = new THREE.Group();
      stopGroup.position.set(bx, 0, bz);
      // Rotate billboard to face the road / approaching car
      const lookTargetX = pt.x - pt.tx * 8;
      const lookTargetZ = pt.z - pt.tz * 8;
      stopGroup.lookAt(lookTargetX, 0, lookTargetZ);
      islandGroup.add(stopGroup);

      // Paved pull-off pad under billboard
      const padMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(5.5, 5.8, 0.2, 24),
        new THREE.MeshStandardMaterial({ color: 0x3A3E47, roughness: 0.8 })
      );
      padMesh.position.set(0, 0.05, 2.2);
      padMesh.receiveShadow = true;
      stopGroup.add(padMesh);

      // Glowing Ground Proximity Ring on the road
      const ringGeo = new THREE.RingGeometry(4.2, 4.9, 36);
      ringGeo.rotateX(-Math.PI / 2);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(stop.accent),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.65
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.set(parkX, 0.2, parkZ);
      islandGroup.add(ringMesh);

      // Inner translucent disc on trigger pad
      const discGeo = new THREE.CircleGeometry(4.2, 36);
      discGeo.rotateX(-Math.PI / 2);
      const discMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(stop.accent),
        transparent: true,
        opacity: 0.14
      });
      const discMesh = new THREE.Mesh(discGeo, discMat);
      discMesh.position.set(parkX, 0.18, parkZ);
      islandGroup.add(discMesh);

      // Two Steel Pillars
      const pillarGeo = new THREE.CylinderGeometry(0.32, 0.38, 8.8, 12);
      const pillarMat = new THREE.MeshStandardMaterial({
        color: 0x25231F,
        metalness: 0.6,
        roughness: 0.35
      });
      const leftPillar = new THREE.Mesh(pillarGeo, pillarMat);
      leftPillar.position.set(-4.2, 4.4, 0);
      leftPillar.castShadow = true;
      stopGroup.add(leftPillar);

      const rightPillar = new THREE.Mesh(pillarGeo, pillarMat);
      rightPillar.position.set(4.2, 4.4, 0);
      rightPillar.castShadow = true;
      stopGroup.add(rightPillar);

      // Billboard Frame Box
      const boardWidth = 12.4;
      const boardHeight = 7.2;
      const frameMesh = new THREE.Mesh(
        new THREE.BoxGeometry(boardWidth + 0.7, boardHeight + 0.7, 0.55),
        new THREE.MeshStandardMaterial({
          color: 0x1F1E1B,
          roughness: 0.4,
          metalness: 0.3
        })
      );
      frameMesh.position.set(0, 7.6, 0);
      frameMesh.castShadow = true;
      frameMesh.receiveShadow = true;
      stopGroup.add(frameMesh);

      // Accent top bar
      const topBarMesh = new THREE.Mesh(
        new THREE.BoxGeometry(boardWidth + 0.9, 0.45, 0.75),
        new THREE.MeshStandardMaterial({
          color: new THREE.Color(stop.accent),
          roughness: 0.3
        })
      );
      topBarMesh.position.set(0, 7.6 + boardHeight * 0.5 + 0.35, 0);
      stopGroup.add(topBarMesh);

      // Dynamic High-DPI Canvas Texture for Billboard Face (front & back)
      const boardTexture = createBillboardCanvasTexture(stop, index + 1, textureLoader);
      const faceMat = new THREE.MeshStandardMaterial({
        map: boardTexture,
        roughness: 0.25,
        metalness: 0.05,
        emissive: new THREE.Color(0xFFFFFF),
        emissiveMap: boardTexture,
        emissiveIntensity: 0.18
      });

      const frontFace = new THREE.Mesh(new THREE.PlaneGeometry(boardWidth, boardHeight), faceMat);
      frontFace.position.set(0, 7.6, 0.31);
      stopGroup.add(frontFace);

      const backFace = new THREE.Mesh(new THREE.PlaneGeometry(boardWidth, boardHeight), faceMat);
      backFace.position.set(0, 7.6, -0.31);
      backFace.rotation.y = Math.PI;
      stopGroup.add(backFace);

      // Floating 3D Status Marker Above Billboard
      const markerGeo = new THREE.OctahedronGeometry(0.85, 0);
      const isVisited = visitedProjects.has(stop.id);
      const markerMat = new THREE.MeshStandardMaterial({
        color: isVisited ? 0x10B981 : new THREE.Color(stop.accent),
        emissive: isVisited ? 0x059669 : new THREE.Color(stop.accent),
        emissiveIntensity: 0.45,
        roughness: 0.2
      });
      const markerMesh = new THREE.Mesh(markerGeo, markerMat);
      markerMesh.position.set(0, 12.8, 0);
      stopGroup.add(markerMesh);

      stopObjects.push({
        stop,
        index,
        bx,
        bz,
        parkX,
        parkZ,
        ringMesh,
        discMesh,
        markerMesh,
        markerMat,
        faceMat
      });
    });

    // ── Populate Trees, Rocks, Street Lamps & Clouds ──
    const streetLampBulbs = [];
    const streetLampLights = [];
    populateIslandProps(islandGroup, streetLampBulbs, streetLampLights);

    const cloudsGroup = new THREE.Group();
    scene.add(cloudsGroup);
    populateSkyClouds(cloudsGroup);

    // ── Click-to-Drive Waypoint Indicator ──
    const waypointGroup = new THREE.Group();
    waypointGroup.visible = false;
    const wpRing = new THREE.Mesh(
      new THREE.RingGeometry(1.4, 2.0, 32).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: 0xE8B931, side: THREE.DoubleSide })
    );
    wpRing.position.y = 0.25;
    waypointGroup.add(wpRing);
    scene.add(waypointGroup);

    // ── Build Player 3D Car ──
    const startPt = getRoadPoint(0.09);
    const carBuilder = createPlayerCar(CAR_COLORS[carColorIndex].hex);
    const carGroup = carBuilder.group;
    carGroup.position.set(startPt.x, 0.16, startPt.z);
    scene.add(carGroup);

    // Car Physics State
    const carState = {
      x: startPt.x,
      z: startPt.z,
      heading: Math.atan2(startPt.tx, startPt.tz),
      speed: 0,
      maxSpeed: 0.72,
      boostMaxSpeed: 1.08,
      accel: 0.022,
      ReverseMax: -0.35,
      friction: 0.96,
      steerAngle: 0,
      wheelRotation: 0
    };

    // Exhaust Particle Pool
    const particles = [];
    const particleGeo = new THREE.SphereGeometry(0.28, 8, 8);
    for (let i = 0; i < 28; i++) {
      const pMat = new THREE.MeshBasicMaterial({
        color: 0xF2EBDD,
        transparent: true,
        opacity: 0
      });
      const pMesh = new THREE.Mesh(particleGeo, pMat);
      pMesh.visible = false;
      scene.add(pMesh);
      particles.push({ mesh: pMesh, life: 0, maxLife: 1, vx: 0, vy: 0, vz: 0 });
    }
    let particleSpawnTimer = 0;

    // ── Input Controls (Keyboard + Touch Joystick + Click-to-Drive) ──
    const keys = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      boost: false,
      brake: false
    };
    let joystickVector = { x: 0, y: 0, active: false };

    window.addEventListener('keydown', (e) => {
      // Ignore shortcuts if typing in form input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;
      const modalOpen = document.getElementById('arch-modal-backdrop')?.classList.contains('active') ||
                        document.getElementById('lightbox-backdrop')?.classList.contains('active') ||
                        document.getElementById('postcard-modal-backdrop')?.classList.contains('active');
      if (modalOpen) return;

      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          keys.forward = true;
          cancelAutopilotOnManualInput();
          if (e.code === 'ArrowUp') e.preventDefault();
          break;
        case 'KeyS':
        case 'ArrowDown':
          keys.backward = true;
          cancelAutopilotOnManualInput();
          if (e.code === 'ArrowDown') e.preventDefault();
          break;
        case 'KeyA':
        case 'ArrowLeft':
          keys.left = true;
          cancelAutopilotOnManualInput();
          if (e.code === 'ArrowLeft') e.preventDefault();
          break;
        case 'KeyD':
        case 'ArrowRight':
          keys.right = true;
          cancelAutopilotOnManualInput();
          if (e.code === 'ArrowRight') e.preventDefault();
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          keys.boost = true;
          break;
        case 'Space':
          keys.brake = true;
          if (window.scrollY < 120) e.preventDefault();
          break;
        case 'KeyE':
        case 'Enter':
          if (activeStop) {
            triggerStopAction(activeStop.stop);
          }
          break;
      }
    });

    window.addEventListener('keyup', (e) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          keys.forward = false;
          break;
        case 'KeyS':
        case 'ArrowDown':
          keys.backward = false;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          keys.left = false;
          break;
        case 'KeyD':
        case 'ArrowRight':
          keys.right = false;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          keys.boost = false;
          break;
        case 'Space':
          keys.brake = false;
          break;
      }
    });

    function cancelAutopilotOnManualInput() {
      if (autopilotActive) {
        setAutopilot(false);
      }
      if (clickWaypoint) {
        clickWaypoint = null;
        waypointGroup.visible = false;
      }
    }

    // Raycast Click-to-Drive on the 3D canvas
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let pointerDownPos = { x: 0, y: 0 };

    renderer.domElement.addEventListener('pointerdown', (e) => {
      pointerDownPos = { x: e.clientX, y: e.clientY };
    });

    renderer.domElement.addEventListener('pointerup', (e) => {
      const dist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
      if (dist > 8) return;

      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);

      // First check if user clicked directly on a 3D billboard
      const hits = raycaster.intersectObjects(islandGroup.children, true);
      for (const hit of hits) {
        for (const so of stopObjects) {
          if (isDescendant(hit.object, so.faceMat) || hit.object === so.markerMesh) {
            driveToStop(so.index);
            return;
          }
        }
      }

      // Otherwise click-to-drive on island ground
      const groundHits = raycaster.intersectObject(raycastPlane);
      if (groundHits.length > 0) {
        const pt = groundHits[0].point;
        // Clamp within island radius
        const r = Math.hypot(pt.x / 1.11, pt.z / 0.91);
        if (r < 146) {
          if (autopilotActive) setAutopilot(false);
          clickWaypoint = { x: pt.x, z: pt.z };
          waypointGroup.position.set(pt.x, 0, pt.z);
          waypointGroup.visible = true;
        }
      }
    });

    function isDescendant(obj, targetMat) {
      return obj && obj.material === targetMat;
    }

    // ── Bind HUD Elements & Controls ──
    bindHUDControls();
    applyTimeOfDay(TIME_MODES[timeModeIndex]);
    updateVisitedHUD();

    // ── Camera Tracking State ──
    const camPos = new THREE.Vector3(startPt.x - startPt.tx * 24, 15, startPt.z - startPt.tz * 24);
    const camLook = new THREE.Vector3(startPt.x, 2.5, startPt.z);

    // ── Minimap 2D Canvas Context ──
    const minimapCanvas = document.getElementById('drivefolio-minimap');
    const minimapCtx = minimapCanvas ? minimapCanvas.getContext('2d') : null;
    if (minimapCanvas) {
      minimapCanvas.addEventListener('click', (e) => {
        const rect = minimapCanvas.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const mz = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        const worldX = mx * 165;
        const worldZ = mz * 140;
        // Find nearest stop or drive to point
        let nearestIdx = -1;
        let minDist = 26;
        stopObjects.forEach((so, idx) => {
          const d = Math.hypot(so.parkX - worldX, so.parkZ - worldZ);
          if (d < minDist) {
            minDist = d;
            nearestIdx = idx;
          }
        });
        if (nearestIdx >= 0) {
          driveToStop(nearestIdx);
        } else {
          if (autopilotActive) setAutopilot(false);
          clickWaypoint = { x: worldX, z: worldZ };
          waypointGroup.position.set(worldX, 0, worldZ);
          waypointGroup.visible = true;
        }
      });
    }

    // ── Main Animation Loop ──
    let clock = new THREE.Clock();
    let elapsed = 0;

    function animate() {
      requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);
      elapsed += dt;

      // 1. Autopilot / Click-to-Drive Navigation Steering
      let autoThrottle = 0;
      let autoSteer = 0;

      if (autopilotActive) {
        const targetStop = stopObjects[autopilotTargetIndex];
        if (targetStop) {
          const dx = targetStop.parkX - carState.x;
          const dz = targetStop.parkZ - carState.z;
          const dist = Math.hypot(dx, dz);

          if (dist < 4.5) {
            // Reached stop in autopilot: pause briefly then advance to next billboard!
            carState.speed *= 0.78;
            if (!targetStop._autopilotPauseTimer) {
              targetStop._autopilotPauseTimer = elapsed;
              markStopVisited(targetStop.stop);
            } else if (elapsed - targetStop._autopilotPauseTimer > 3.2) {
              targetStop._autopilotPauseTimer = 0;
              autopilotTargetIndex = (autopilotTargetIndex + 1) % stopObjects.length;
              updateAutopilotStatusBanner();
            }
          } else {
            // Steer smoothly along the road or toward targetStop
            const desiredAngle = Math.atan2(dx, dz);
            let angleDiff = normalizeAngle(desiredAngle - carState.heading);
            autoSteer = Math.max(-1, Math.min(1, angleDiff * 2.4));
            autoThrottle = dist > 16 ? 0.85 : 0.55;
          }
        }
      } else if (clickWaypoint) {
        const dx = clickWaypoint.x - carState.x;
        const dz = clickWaypoint.z - carState.z;
        const dist = Math.hypot(dx, dz);
        wpRing.scale.setScalar(1 + 0.18 * Math.sin(elapsed * 6));

        if (dist < 3.6) {
          clickWaypoint = null;
          waypointGroup.visible = false;
        } else {
          const desiredAngle = Math.atan2(dx, dz);
          let angleDiff = normalizeAngle(desiredAngle - carState.heading);
          autoSteer = Math.max(-1, Math.min(1, angleDiff * 2.5));
          autoThrottle = dist > 14 ? 0.85 : 0.5;
        }
      }

      // 2. Combine Manual + Joystick + Auto Inputs
      const forwardInput = keys.forward ? 1 : (joystickVector.active && joystickVector.y < -0.15 ? -joystickVector.y : autoThrottle);
      const backwardInput = keys.backward ? 1 : (joystickVector.active && joystickVector.y > 0.15 ? joystickVector.y : 0);
      const steerInput = (keys.left ? 1 : 0) - (keys.right ? 1 : 0) +
                         (joystickVector.active ? -joystickVector.x : 0) +
                         autoSteer;

      const currentMax = keys.boost ? carState.boostMaxSpeed : carState.maxSpeed;

      if (keys.brake) {
        carState.speed *= 0.86;
      } else if (forwardInput > 0) {
        carState.speed = Math.min(currentMax * forwardInput, carState.speed + carState.accel * (keys.boost ? 1.65 : 1));
      } else if (backwardInput > 0) {
        carState.speed = Math.max(carState.ReverseMax * backwardInput, carState.speed - carState.accel * 0.85);
      } else {
        carState.speed *= carState.friction;
        if (Math.abs(carState.speed) < 0.002) carState.speed = 0;
      }

      // Steering
      const targetSteer = Math.max(-1, Math.min(1, steerInput)) * 0.046;
      carState.steerAngle += (targetSteer - carState.steerAngle) * 0.22;

      if (Math.abs(carState.speed) > 0.005) {
        const dirSign = carState.speed >= 0 ? 1 : -1;
        const speedFactor = Math.min(1, Math.abs(carState.speed) / 0.35);
        carState.heading += carState.steerAngle * dirSign * speedFactor * (dt * 60);
      }

      // Move Car
      const nextX = carState.x + Math.sin(carState.heading) * carState.speed * (dt * 60);
      const nextZ = carState.z + Math.cos(carState.heading) * carState.speed * (dt * 60);

      // Keep car inside island shoreline boundary
      const normRadius = Math.hypot(nextX / 1.11, nextZ / 0.91);
      if (normRadius < 146) {
        carState.x = nextX;
        carState.z = nextZ;
      } else {
        carState.speed *= -0.35;
      }

      // Prevent overlapping inside central monument plaza
      const centerDist = Math.hypot(carState.x, carState.z);
      if (centerDist < 17.5) {
        const pushAngle = Math.atan2(carState.x, carState.z);
        carState.x = Math.sin(pushAngle) * 17.6;
        carState.z = Math.cos(pushAngle) * 17.6;
        carState.speed *= 0.5;
      }

      // Apply Car Transforms & Suspension Tilt
      carGroup.position.set(carState.x, 0.16, carState.z);
      carGroup.rotation.y = carState.heading;

      // Subtle body pitch & roll for juicy driving feel
      carBuilder.bodyPivot.rotation.x = -carState.speed * 0.065;
      carBuilder.bodyPivot.rotation.z = carState.steerAngle * carState.speed * 1.4;

      // Spin & steer wheels
      carState.wheelRotation += carState.speed * 1.1;
      carBuilder.wheels.forEach((w, idx) => {
        w.mesh.rotation.x = carState.wheelRotation;
        if (idx < 2) {
          w.pivot.rotation.y = carState.steerAngle * 7.5;
        }
      });

      // Update Speedometer HUD
      updateSpeedometerHUD(carState.speed, keys.boost);
      updateEngineSound(carState.speed, keys.boost);

      // Exhaust Particles
      particleSpawnTimer += dt;
      if (Math.abs(carState.speed) > 0.08 && particleSpawnTimer > (keys.boost ? 0.03 : 0.07)) {
        particleSpawnTimer = 0;
        spawnExhaustParticle(carState, keys.boost);
      }
      updateExhaustParticles(dt);

      // 3. Smooth Chase Camera Follow
      const camDist = 23.5 + Math.abs(carState.speed) * 4.5;
      const camHeight = 13.5 + Math.abs(carState.speed) * 1.8;
      const targetCamX = carState.x - Math.sin(carState.heading) * camDist;
      const targetCamZ = carState.z - Math.cos(carState.heading) * camDist;

      camPos.x += (targetCamX - camPos.x) * 0.085;
      camPos.y += (camHeight - camPos.y) * 0.085;
      camPos.z += (targetCamZ - camPos.z) * 0.085;
      camera.position.copy(camPos);

      const targetLookX = carState.x + Math.sin(carState.heading) * 6.5;
      const targetLookZ = carState.z + Math.cos(carState.heading) * 6.5;
      camLook.x += (targetLookX - camLook.x) * 0.14;
      camLook.y += (2.4 - camLook.y) * 0.14;
      camLook.z += (targetLookZ - camLook.z) * 0.14;
      camera.lookAt(camLook);

      // 4. Check Billboard Proximity & Animate Markers
      let closestStopObj = null;
      let closestDist = 11.8;

      stopObjects.forEach((so, i) => {
        // Bob & rotate floating octahedron marker
        so.markerMesh.position.y = 12.6 + Math.sin(elapsed * 2.8 + i) * 0.45;
        so.markerMesh.rotation.y += dt * 1.4;

        const dToPark = Math.hypot(carState.x - so.parkX, carState.z - so.parkZ);
        const dToBoard = Math.hypot(carState.x - so.bx, carState.z - so.bz);
        const dMin = Math.min(dToPark, dToBoard * 0.78);

        if (dMin < closestDist) {
          closestDist = dMin;
          closestStopObj = so;
        }

        // Pulse ground ring when near
        const isCurrent = closestStopObj === so;
        const pulse = isCurrent ? (1.08 + 0.08 * Math.sin(elapsed * 7)) : 1.0;
        so.ringMesh.scale.setScalar(pulse);
        so.discMesh.material.opacity = isCurrent ? 0.34 : 0.12;
      });

      if (closestStopObj !== activeStop) {
        activeStop = closestStopObj;
        updateProximityHUDCard(activeStop ? activeStop.stop : null);
        if (activeStop && activeStop.stop.type === 'project') {
          markStopVisited(activeStop.stop);
        }
      }

      // 5. Animate Ocean Shimmer & Sky Clouds
      foamMesh.scale.set(
        1.18 + Math.sin(elapsed * 1.6) * 0.012,
        1,
        0.96 + Math.cos(elapsed * 1.6) * 0.012
      );
      foamMat.opacity = 0.36 + Math.sin(elapsed * 2.2) * 0.1;

      cloudsGroup.rotation.y = elapsed * 0.012;

      // 6. Render Minimap
      if (minimapCtx) {
        drawMinimap(minimapCtx, minimapCanvas.width, minimapCanvas.height, carState, stopObjects, activeStop);
      }

      renderer.render(scene, camera);
    }

    animate();

    // ── Handle Window Resize ──
    window.addEventListener('resize', () => {
      if (!container.clientWidth || !container.clientHeight) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });

    // =========================================================================
    // HELPER FUNCTIONS INSIDE WORLD SCOPE
    // =========================================================================

    function markStopVisited(stop) {
      if (stop.type !== 'project') return;
      if (!visitedProjects.has(stop.id)) {
        visitedProjects.add(stop.id);
        localStorage.setItem('drivefolio_visited', JSON.stringify(Array.from(visitedProjects)));
        // Update 3D marker color to emerald green
        const so = stopObjects.find(item => item.stop.id === stop.id);
        if (so) {
          so.markerMat.color.setHex(0x10B981);
          so.markerMat.emissive.setHex(0x059669);
        }
        updateVisitedHUD();
        playChimeSound();
      }
    }

    function updateVisitedHUD() {
      const totalProjects = ISLAND_STOPS.filter(s => s.type === 'project').length;
      const count = visitedProjects.size;
      const countEl = document.getElementById('drivefolio-visited-count');
      const barEl = document.getElementById('drivefolio-visited-bar');
      if (countEl) {
        countEl.textContent = `${count} of ${totalProjects} Seen`;
      }
      if (barEl) {
        barEl.style.width = `${Math.min(100, Math.round((count / totalProjects) * 100))}%`;
      }
    }

    function updateSpeedometerHUD(speed, isBoost) {
      const kmh = Math.min(180, Math.round(Math.abs(speed) * 145));
      const speedValEl = document.getElementById('drivefolio-speed-val');
      const gearEl = document.getElementById('drivefolio-gear-badge');
      if (speedValEl) speedValEl.textContent = kmh;
      if (gearEl) {
        if (isBoost && Math.abs(speed) > 0.1) {
          gearEl.textContent = 'TURBO';
          gearEl.className = 'drivefolio-gear-badge turbo';
        } else if (speed < -0.02) {
          gearEl.textContent = 'REV';
          gearEl.className = 'drivefolio-gear-badge rev';
        } else if (Math.abs(speed) > 0.02) {
          gearEl.textContent = 'DRIVE';
          gearEl.className = 'drivefolio-gear-badge drive';
        } else {
          gearEl.textContent = 'PARK';
          gearEl.className = 'drivefolio-gear-badge';
        }
      }
    }

    function updateProximityHUDCard(stop) {
      const card = document.getElementById('drivefolio-proximity-card');
      if (!card) return;

      if (!stop) {
        card.classList.remove('active');
        return;
      }

      const imgEl = document.getElementById('df-card-img');
      const badgeEl = document.getElementById('df-card-badge');
      const zoneEl = document.getElementById('df-card-zone');
      const titleEl = document.getElementById('df-card-title');
      const subEl = document.getElementById('df-card-sub');
      const descEl = document.getElementById('df-card-desc');
      const tagsEl = document.getElementById('df-card-tags');
      const primaryBtn = document.getElementById('df-card-primary-btn');
      const visitBtn = document.getElementById('df-card-visit-btn');

      if (imgEl) {
        imgEl.src = stop.img;
        imgEl.alt = stop.title;
      }
      if (badgeEl) {
        badgeEl.textContent = stop.badge;
        badgeEl.style.backgroundColor = stop.accent;
      }
      if (zoneEl) zoneEl.textContent = stop.zone;
      if (titleEl) titleEl.textContent = stop.title;
      if (subEl) subEl.textContent = stop.subtitle;
      if (descEl) descEl.textContent = stop.desc;
      if (tagsEl) {
        tagsEl.innerHTML = (stop.tags || [])
          .map(t => `<span class="df-tag-pill">${t}</span>`)
          .join('');
      }

      if (primaryBtn) {
        if (stop.type === 'project') {
          primaryBtn.innerHTML = `<i class="fa-solid fa-microchip me-1"></i> Open Case Study <span class="df-key-hint">[E]</span>`;
        } else if (stop.type === 'stories') {
          primaryBtn.innerHTML = `<i class="fa-solid fa-camera me-1"></i> Open Photo Lightbox <span class="df-key-hint">[E]</span>`;
        } else {
          primaryBtn.innerHTML = `<i class="fa-solid fa-compass me-1"></i> Inspect Section <span class="df-key-hint">[E]</span>`;
        }
        primaryBtn.onclick = () => triggerStopAction(stop);
      }

      if (visitBtn) {
        if (stop.url) {
          visitBtn.style.display = 'inline-flex';
          visitBtn.href = stop.url;
        } else if (stop.sectionId) {
          visitBtn.style.display = 'inline-flex';
          visitBtn.href = stop.sectionId;
          visitBtn.removeAttribute('target');
          visitBtn.innerHTML = `Scroll to Section <i class="fa-solid fa-arrow-down ms-1"></i>`;
        } else {
          visitBtn.style.display = 'none';
        }
      }

      card.classList.add('active');
    }

    function triggerStopAction(stop) {
      if (!stop) return;
      if (stop.type === 'stories') {
        const photoTrigger = document.querySelector(`[data-photo-index="${stop.photoIndex || 0}"]`);
        if (photoTrigger) {
          photoTrigger.click();
          return;
        }
      }
      if (stop.type === 'contact') {
        const contactSec = document.querySelector('#contact');
        if (contactSec) {
          contactSec.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      // Trigger the existing 4-Tab Architecture / Case Study Modal!
      const fakeTrigger = document.createElement('button');
      fakeTrigger.setAttribute('data-project', stop.id);
      fakeTrigger.style.display = 'none';
      document.body.appendChild(fakeTrigger);
      fakeTrigger.click();
      document.body.removeChild(fakeTrigger);
    }

    function driveToStop(index) {
      if (index < 0 || index >= stopObjects.length) return;
      autopilotTargetIndex = index;
      clickWaypoint = null;
      waypointGroup.visible = false;
      setAutopilot(true);
    }

    function setAutopilot(state) {
      autopilotActive = state;
      const btn = document.getElementById('df-autopilot-btn');
      const banner = document.getElementById('df-autopilot-banner');
      if (btn) {
        btn.classList.toggle('active', autopilotActive);
        btn.innerHTML = autopilotActive
          ? `<i class="fa-solid fa-circle-stop me-1"></i> Stop Autopilot`
          : `<i class="fa-solid fa-route me-1"></i> Autopilot Tour`;
      }
      if (banner) {
        banner.classList.toggle('active', autopilotActive);
      }
      if (autopilotActive) {
        updateAutopilotStatusBanner();
      }
    }

    function updateAutopilotStatusBanner() {
      const target = stopObjects[autopilotTargetIndex];
      const textEl = document.getElementById('df-autopilot-target-name');
      if (target && textEl) {
        textEl.textContent = `${target.stop.title} (${autopilotTargetIndex + 1}/${stopObjects.length})`;
      }
    }

    function applyTimeOfDay(mode) {
      const btn = document.getElementById('df-time-btn');
      if (mode === 'day') {
        scene.background.setHex(0x87CEEB);
        scene.fog.color.setHex(0x87CEEB);
        hemiLight.color.setHex(0xFFFFFF);
        hemiLight.groundColor.setHex(0x3D6B48);
        hemiLight.intensity = 0.82;
        sunLight.color.setHex(0xFFF8E7);
        sunLight.intensity = 1.28;
        sunLight.position.set(95, 130, 85);
        celestialOrb.material.color.setHex(0xFFE680);
        celestialOrb.position.set(220, 145, -240);
        oceanMat.color.setHex(0x1CA3EC);
        carBuilder.headLightLeft.intensity = 0;
        carBuilder.headLightRight.intensity = 0;
        streetLampBulbs.forEach(b => b.material.emissiveIntensity = 0.1);
        streetLampLights.forEach(l => l.intensity = 0);
        stopObjects.forEach(so => so.faceMat.emissiveIntensity = 0.15);
        if (btn) btn.innerHTML = `<i class="fa-solid fa-sun me-1"></i> Day`;
      } else if (mode === 'sunset') {
        scene.background.setHex(0xF08A5D);
        scene.fog.color.setHex(0xE87A5D);
        hemiLight.color.setHex(0xFFD19A);
        hemiLight.groundColor.setHex(0x3A2E39);
        hemiLight.intensity = 0.65;
        sunLight.color.setHex(0xFF7B47);
        sunLight.intensity = 1.15;
        sunLight.position.set(-140, 48, -110);
        celestialOrb.material.color.setHex(0xFF5733);
        celestialOrb.position.set(-240, 42, -210);
        oceanMat.color.setHex(0x145374);
        carBuilder.headLightLeft.intensity = 1.6;
        carBuilder.headLightRight.intensity = 1.6;
        streetLampBulbs.forEach(b => b.material.emissiveIntensity = 0.85);
        streetLampLights.forEach(l => l.intensity = 0.7);
        stopObjects.forEach(so => so.faceMat.emissiveIntensity = 0.35);
        if (btn) btn.innerHTML = `<i class="fa-solid fa-cloud-sun me-1"></i> Sunset`;
      } else {
        // Night Mode
        scene.background.setHex(0x0B132B);
        scene.fog.color.setHex(0x0B132B);
        hemiLight.color.setHex(0x3A506B);
        hemiLight.groundColor.setHex(0x0B132B);
        hemiLight.intensity = 0.38;
        sunLight.color.setHex(0x6C8CBF);
        sunLight.intensity = 0.42;
        sunLight.position.set(-80, 110, -90);
        celestialOrb.material.color.setHex(0xE0ECFF);
        celestialOrb.position.set(-180, 130, -220);
        oceanMat.color.setHex(0x071E3D);
        carBuilder.headLightLeft.intensity = 3.2;
        carBuilder.headLightRight.intensity = 3.2;
        streetLampBulbs.forEach(b => b.material.emissiveIntensity = 1.4);
        streetLampLights.forEach(l => l.intensity = 1.35);
        stopObjects.forEach(so => so.faceMat.emissiveIntensity = 0.58);
        if (btn) btn.innerHTML = `<i class="fa-solid fa-moon me-1"></i> Night`;
      }
    }

    function bindHUDControls() {
      // Populate GPS Quick Jump Select
      const gpsSelect = document.getElementById('df-gps-select');
      if (gpsSelect) {
        gpsSelect.innerHTML = `<option value="">📍 GPS Teleport / Drive to Stop...</option>` +
          ISLAND_STOPS.map((s, idx) => `<option value="${idx}">${idx + 1}. ${s.title} (${s.badge})</option>`).join('');
        gpsSelect.addEventListener('change', () => {
          const idx = parseInt(gpsSelect.value, 10);
          if (!isNaN(idx)) {
            driveToStop(idx);
            gpsSelect.value = '';
          }
        });
      }

      // Autopilot button
      const autoBtn = document.getElementById('df-autopilot-btn');
      if (autoBtn) {
        autoBtn.addEventListener('click', () => {
          if (!autopilotActive) {
            // Find nearest next unvisited or next stop
            const nextUnvisited = stopObjects.findIndex(so => so.stop.type === 'project' && !visitedProjects.has(so.stop.id));
            autopilotTargetIndex = nextUnvisited >= 0 ? nextUnvisited : ((activeStop ? activeStop.index + 1 : 0) % stopObjects.length);
          }
          setAutopilot(!autopilotActive);
        });
      }

      // Next Stop button on Proximity Card
      const nextStopBtn = document.getElementById('df-card-next-btn');
      if (nextStopBtn) {
        nextStopBtn.addEventListener('click', () => {
          const nextIdx = activeStop ? (activeStop.index + 1) % stopObjects.length : 0;
          driveToStop(nextIdx);
        });
      }

      // Time of day toggle
      const timeBtn = document.getElementById('df-time-btn');
      if (timeBtn) {
        timeBtn.addEventListener('click', () => {
          timeModeIndex = (timeModeIndex + 1) % TIME_MODES.length;
          applyTimeOfDay(TIME_MODES[timeModeIndex]);
        });
      }

      // Car Paint customizer
      const colorBtn = document.getElementById('df-color-btn');
      const colorDot = document.getElementById('df-color-dot');
      if (colorBtn) {
        colorBtn.addEventListener('click', () => {
          carColorIndex = (carColorIndex + 1) % CAR_COLORS.length;
          const preset = CAR_COLORS[carColorIndex];
          carBuilder.paintMat.color.setHex(preset.hex);
          if (colorDot) colorDot.style.backgroundColor = preset.css;
        });
      }

      // Postcard Snapshot Mode
      const postcardBtn = document.getElementById('df-postcard-btn');
      const postcardBackdrop = document.getElementById('postcard-modal-backdrop');
      const postcardClose = document.getElementById('postcard-close-btn');
      const postcardDownload = document.getElementById('postcard-download-btn');
      const postcardImg = document.getElementById('postcard-preview-img');
      const postcardCaption = document.getElementById('postcard-caption-text');

      if (postcardBtn && postcardBackdrop) {
        postcardBtn.addEventListener('click', () => {
          renderer.render(scene, camera);
          const dataUrl = composePostcardImage(
            renderer.domElement,
            activeStop ? activeStop.stop.title : 'Rikkardo L. Tobing — 3D Portfolio Island',
            TIME_MODES[timeModeIndex]
          );
          if (postcardImg) postcardImg.src = dataUrl;
          if (postcardCaption) {
            postcardCaption.textContent = activeStop
              ? `Greetings from ${activeStop.stop.title} • Rikkardo's Drivefolio Island`
              : `Greetings from Rikkardo L. Tobing's 3D Drivefolio Island • Jakarta, ID`;
          }
          if (postcardDownload) {
            postcardDownload.href = dataUrl;
            postcardDownload.download = `Rikkardo-Drivefolio-Postcard.png`;
          }
          postcardBackdrop.classList.add('active');
        });
      }
      if (postcardClose && postcardBackdrop) {
        postcardClose.addEventListener('click', () => postcardBackdrop.classList.remove('active'));
        postcardBackdrop.addEventListener('click', (e) => {
          if (e.target === postcardBackdrop) postcardBackdrop.classList.remove('active');
        });
      }

      // Sound toggle
      const soundBtn = document.getElementById('df-sound-btn');
      if (soundBtn) {
        soundBtn.addEventListener('click', () => {
          audioEnabled = !audioEnabled;
          soundBtn.classList.toggle('active', audioEnabled);
          soundBtn.innerHTML = audioEnabled
            ? `<i class="fa-solid fa-volume-high"></i>`
            : `<i class="fa-solid fa-volume-xmark"></i>`;
          if (audioEnabled && !audioCtx) {
            initWebAudio();
          } else if (!audioEnabled && engineGain && audioCtx) {
            engineGain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.05);
          }
        });
      }

      // View Mode Switcher (3D Island vs Classic Scroll Portfolio)
      const mode3dBtn = document.getElementById('df-mode-3d-btn');
      const modeClassicBtn = document.getElementById('df-mode-classic-btn');
      const heroStage = document.getElementById('drivefolio-stage');
      if (mode3dBtn && modeClassicBtn && heroStage) {
        mode3dBtn.addEventListener('click', () => {
          document.body.classList.remove('classic-portfolio-mode');
          mode3dBtn.classList.add('active');
          modeClassicBtn.classList.remove('active');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        modeClassicBtn.addEventListener('click', () => {
          modeClassicBtn.classList.add('active');
          mode3dBtn.classList.remove('active');
          const masthead = document.getElementById('masthead');
          if (masthead) masthead.scrollIntoView({ behavior: 'smooth' });
        });
      }

      // Mobile Virtual Joystick
      const joyZone = document.getElementById('df-joystick-zone');
      const joyKnob = document.getElementById('df-joystick-knob');
      if (joyZone && joyKnob) {
        let joyOrigin = { x: 0, y: 0 };
        const maxRadius = 38;

        joyZone.addEventListener('pointerdown', (e) => {
          e.stopPropagation();
          joyZone.setPointerCapture(e.pointerId);
          const rect = joyZone.getBoundingClientRect();
          joyOrigin = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
          joystickVector.active = true;
          cancelAutopilotOnManualInput();
        });

        joyZone.addEventListener('pointermove', (e) => {
          if (!joystickVector.active) return;
          const dx = e.clientX - joyOrigin.x;
          const dy = e.clientY - joyOrigin.y;
          const dist = Math.min(maxRadius, Math.hypot(dx, dy));
          const angle = Math.atan2(dy, dx);
          const kx = Math.cos(angle) * dist;
          const ky = Math.sin(angle) * dist;
          joyKnob.style.transform = `translate(${kx}px, ${ky}px)`;
          joystickVector.x = kx / maxRadius;
          joystickVector.y = ky / maxRadius;
        });

        const endJoy = () => {
          joystickVector.active = false;
          joystickVector.x = 0;
          joystickVector.y = 0;
          joyKnob.style.transform = `translate(0px, 0px)`;
        };
        joyZone.addEventListener('pointerup', endJoy);
        joyZone.addEventListener('pointercancel', endJoy);
      }

      // Mobile Boost Button
      const mobileBoostBtn = document.getElementById('df-mobile-boost-btn');
      if (mobileBoostBtn) {
        mobileBoostBtn.addEventListener('pointerdown', (e) => {
          e.stopPropagation();
          keys.boost = true;
          keys.forward = true;
        });
        const stopBoost = () => {
          keys.boost = false;
          keys.forward = false;
        };
        mobileBoostBtn.addEventListener('pointerup', stopBoost);
        mobileBoostBtn.addEventListener('pointercancel', stopBoost);
      }
    }

    function spawnExhaustParticle(state, isBoost) {
      const p = particles.find(item => item.life <= 0);
      if (!p) return;
      p.life = 1;
      p.maxLife = isBoost ? 0.45 : 0.65;
      const backX = state.x - Math.sin(state.heading) * 2.5 + (Math.random() - 0.5) * 0.6;
      const backZ = state.z - Math.cos(state.heading) * 2.5 + (Math.random() - 0.5) * 0.6;
      p.mesh.position.set(backX, 0.55, backZ);
      p.mesh.scale.setScalar(isBoost ? 0.9 : 0.6);
      p.mesh.material.color.setHex(isBoost ? 0xFF6B35 : 0xF2EBDD);
      p.mesh.material.opacity = isBoost ? 0.85 : 0.55;
      p.mesh.visible = true;
      p.vx = (Math.random() - 0.5) * 1.2;
      p.vy = 1.2 + Math.random() * 1.0;
      p.vz = (Math.random() - 0.5) * 1.2;
    }

    function updateExhaustParticles(dt) {
      particles.forEach(p => {
        if (p.life > 0) {
          p.life -= dt / p.maxLife;
          if (p.life <= 0) {
            p.mesh.visible = false;
          } else {
            p.mesh.position.x += p.vx * dt;
            p.mesh.position.y += p.vy * dt;
            p.mesh.position.z += p.vz * dt;
            p.mesh.scale.addScalar(dt * 1.6);
            p.mesh.material.opacity = p.life * 0.55;
          }
        }
      });
    }

    function initWebAudio() {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
        engineOsc = audioCtx.createOscillator();
        engineGain = audioCtx.createGain();
        engineOsc.type = 'triangle';
        engineOsc.frequency.value = 55;
        engineGain.gain.value = 0.02;
        engineOsc.connect(engineGain);
        engineGain.connect(audioCtx.destination);
        engineOsc.start();
      } catch (err) {
        audioEnabled = false;
      }
    }

    function updateEngineSound(speed, isBoost) {
      if (!audioEnabled || !audioCtx || !engineOsc || !engineGain) return;
      const freq = 52 + Math.abs(speed) * 115 + (isBoost ? 35 : 0);
      engineOsc.frequency.setTargetAtTime(freq, audioCtx.currentTime, 0.06);
      const gain = 0.015 + Math.min(0.045, Math.abs(speed) * 0.04);
      engineGain.gain.setTargetAtTime(gain, audioCtx.currentTime, 0.06);
    }

    function playChimeSound() {
      if (!audioEnabled || !audioCtx) return;
      try {
        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(783.99, audioCtx.currentTime + 0.18);
        g.gain.setValueAtTime(0.08, audioCtx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
        osc.connect(g);
        g.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.36);
      } catch (e) {}
    }
  }

  // ===========================================================================
  // 3D OBJECT BUILDERS & CANVAS TEXTURE GENERATORS
  // ===========================================================================

  function createPlayerCar(initialHexColor) {
    const group = new THREE.Group();
    const bodyPivot = new THREE.Group();
    group.add(bodyPivot);

    const paintMat = new THREE.MeshStandardMaterial({
      color: initialHexColor,
      roughness: 0.28,
      metalness: 0.25
    });
    const darkTrimMat = new THREE.MeshStandardMaterial({
      color: 0x1E1D1A,
      roughness: 0.6,
      metalness: 0.2
    });
    const cabinGlassMat = new THREE.MeshStandardMaterial({
      color: 0x1E293B,
      roughness: 0.12,
      metalness: 0.85
    });
    const bumperMat = new THREE.MeshStandardMaterial({
      color: 0xF2EBDD,
      roughness: 0.4,
      metalness: 0.3
    });

    // Lower Chassis
    const chassis = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.88, 4.9), paintMat);
    chassis.position.set(0, 0.78, 0);
    chassis.castShadow = true;
    chassis.receiveShadow = true;
    bodyPivot.add(chassis);

    // Side Skirts / Trim
    const trim = new THREE.Mesh(new THREE.BoxGeometry(2.68, 0.25, 4.96), darkTrimMat);
    trim.position.set(0, 0.42, 0);
    bodyPivot.add(trim);

    // Cabin Greenhouse
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.82, 2.55), cabinGlassMat);
    cabin.position.set(0, 1.52, -0.2);
    cabin.castShadow = true;
    bodyPivot.add(cabin);

    // Cabin Roof Cap
    const roof = new THREE.Mesh(new THREE.BoxGeometry(2.26, 0.14, 2.62), paintMat);
    roof.position.set(0, 1.96, -0.2);
    roof.castShadow = true;
    bodyPivot.add(roof);

    // Roof Rack Bars (Drivefolio Adventure vibe!)
    const rackLeft = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.12, 2.1), darkTrimMat);
    rackLeft.position.set(-0.85, 2.08, -0.2);
    bodyPivot.add(rackLeft);
    const rackRight = rackLeft.clone();
    rackRight.position.x = 0.85;
    bodyPivot.add(rackRight);

    // Sport Rear Spoiler
    const spoilerWing = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.1, 0.45), darkTrimMat);
    spoilerWing.position.set(0, 1.48, -2.25);
    bodyPivot.add(spoilerWing);

    // Front & Rear Bumpers
    const frontBumper = new THREE.Mesh(new THREE.BoxGeometry(2.72, 0.32, 0.35), bumperMat);
    frontBumper.position.set(0, 0.48, 2.45);
    bodyPivot.add(frontBumper);

    const rearBumper = new THREE.Mesh(new THREE.BoxGeometry(2.72, 0.32, 0.35), bumperMat);
    rearBumper.position.set(0, 0.48, -2.45);
    bodyPivot.add(rearBumper);

    // Headlight Emissive Lenses
    const hlMat = new THREE.MeshStandardMaterial({
      color: 0xFFFBEB,
      emissive: 0xFFF59D,
      emissiveIntensity: 1.5
    });
    const hlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.26, 0.1), hlMat);
    hlLeft.position.set(-0.85, 0.85, 2.46);
    bodyPivot.add(hlLeft);
    const hlRight = hlLeft.clone();
    hlRight.position.x = 0.85;
    bodyPivot.add(hlRight);

    // Taillight Emissive Lenses
    const tlMat = new THREE.MeshStandardMaterial({
      color: 0xEF4444,
      emissive: 0xDC2626,
      emissiveIntensity: 1.4
    });
    const tlLeft = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.24, 0.1), tlMat);
    tlLeft.position.set(-0.82, 0.88, -2.46);
    bodyPivot.add(tlLeft);
    const tlRight = tlLeft.clone();
    tlRight.position.x = 0.82;
    bodyPivot.add(tlRight);

    // Headlight SpotLights for Sunset/Night Driving
    const headLightLeft = new THREE.SpotLight(0xFFF6D6, 0, 42, Math.PI / 5, 0.45, 1.2);
    headLightLeft.position.set(-0.85, 0.9, 2.4);
    headLightLeft.target.position.set(-0.85, 0.1, 16);
    group.add(headLightLeft);
    group.add(headLightLeft.target);

    const headLightRight = new THREE.SpotLight(0xFFF6D6, 0, 42, Math.PI / 5, 0.45, 1.2);
    headLightRight.position.set(0.85, 0.9, 2.4);
    headLightRight.target.position.set(0.85, 0.1, 16);
    group.add(headLightRight);
    group.add(headLightRight.target);

    // 4 Wheels
    const wheels = [];
    const wheelGeo = new THREE.CylinderGeometry(0.54, 0.54, 0.46, 20);
    wheelGeo.rotateZ(Math.PI / 2);
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x18181B, roughness: 0.85 });
    const rimGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.48, 12);
    rimGeo.rotateZ(Math.PI / 2);
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xE5E7EB, metalness: 0.7, roughness: 0.25 });

    const wheelCoords = [
      { x: -1.32, y: 0.54, z: 1.55 },  // Front Left
      { x: 1.32, y: 0.54, z: 1.55 },   // Front Right
      { x: -1.32, y: 0.54, z: -1.55 }, // Rear Left
      { x: 1.32, y: 0.54, z: -1.55 }   // Rear Right
    ];

    wheelCoords.forEach(pos => {
      const pivot = new THREE.Group();
      pivot.position.set(pos.x, pos.y, pos.z);
      group.add(pivot);

      const tire = new THREE.Mesh(wheelGeo, tireMat);
      tire.castShadow = true;
      const rim = new THREE.Mesh(rimGeo, rimMat);
      tire.add(rim);
      pivot.add(tire);

      wheels.push({ pivot, mesh: tire });
    });

    return {
      group,
      bodyPivot,
      paintMat,
      wheels,
      headLightLeft,
      headLightRight
    };
  }

  function createBillboardCanvasTexture(stop, stopNumber, textureLoader) {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 594;
    const ctx = canvas.getContext('2d');
    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 4;

    function drawCard(loadedImg) {
      // Warm archival background card
      ctx.fillStyle = '#FAF8F1';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle border
      ctx.strokeStyle = '#25231F';
      ctx.lineWidth = 10;
      ctx.strokeRect(14, 14, canvas.width - 28, canvas.height - 28);

      // Left Image Frame
      const imgX = 36;
      const imgY = 38;
      const imgW = 450;
      const imgH = canvas.height - 76;

      ctx.fillStyle = '#1E1D1A';
      ctx.fillRect(imgX - 4, imgY - 4, imgW + 8, imgH + 8);

      if (loadedImg) {
        // Cover-fit image inside frame
        const imgRatio = loadedImg.width / loadedImg.height;
        const boxRatio = imgW / imgH;
        let sx = 0, sy = 0, sw = loadedImg.width, sh = loadedImg.height;
        if (imgRatio > boxRatio) {
          sw = loadedImg.height * boxRatio;
          sx = (loadedImg.width - sw) * 0.5;
        } else {
          sh = loadedImg.width / boxRatio;
          sy = (loadedImg.height - sh) * 0.5;
        }
        ctx.drawImage(loadedImg, sx, sy, sw, sh, imgX, imgY, imgW, imgH);
      } else {
        // Stylized placeholder while image loads
        const grad = ctx.createLinearGradient(imgX, imgY, imgX + imgW, imgY + imgH);
        grad.addColorStop(0, stop.accent);
        grad.addColorStop(1, '#25231F');
        ctx.fillStyle = grad;
        ctx.fillRect(imgX, imgY, imgW, imgH);
      }

      // Stop Number Badge on Image Corner
      ctx.fillStyle = '#25231F';
      ctx.fillRect(imgX + 14, imgY + 14, 96, 44);
      ctx.fillStyle = '#E8B931';
      ctx.font = 'bold 24px "Space Grotesk", sans-serif';
      ctx.fillText(`STOP #${String(stopNumber).padStart(2, '0')}`, imgX + 24, imgY + 44);

      // Right Column Content
      const rx = 516;
      const rw = canvas.width - rx - 42;

      // Category Stamp Pill
      ctx.fillStyle = stop.accent;
      ctx.fillRect(rx, 46, Math.min(rw, 380), 42);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 21px "Space Grotesk", sans-serif';
      ctx.fillText(stop.badge.toUpperCase(), rx + 16, 74);

      // Title (Wrapped)
      ctx.fillStyle = '#25231F';
      ctx.font = 'bold 40px "Space Grotesk", sans-serif';
      const nextY = wrapCanvasText(ctx, stop.title, rx, 140, rw, 46, 2);

      // Subtitle
      ctx.fillStyle = '#D9624A';
      ctx.font = '600 21px "DM Sans", sans-serif';
      const subY = wrapCanvasText(ctx, stop.subtitle, rx, nextY + 12, rw, 28, 2);

      // Description
      ctx.fillStyle = '#4A463F';
      ctx.font = '21px "DM Sans", sans-serif';
      wrapCanvasText(ctx, stop.desc, rx, subY + 18, rw, 29, 4);

      // Tech Tags Strip at Bottom
      let tx = rx;
      const ty = canvas.height - 122;
      ctx.font = 'bold 18px "Space Grotesk", sans-serif';
      (stop.tags || []).slice(0, 3).forEach(tag => {
        const tw = ctx.measureText(tag).width + 24;
        if (tx + tw < canvas.width - 36) {
          ctx.fillStyle = '#F2EBDD';
          ctx.fillRect(tx, ty, tw, 34);
          ctx.strokeStyle = '#25231F';
          ctx.lineWidth = 2;
          ctx.strokeRect(tx, ty, tw, 34);
          ctx.fillStyle = '#25231F';
          ctx.fillText(tag, tx + 12, ty + 23);
          tx += tw + 10;
        }
      });

      // Bottom Call-to-Action Bar
      ctx.fillStyle = '#25231F';
      ctx.fillRect(rx, canvas.height - 74, rw, 42);
      ctx.fillStyle = '#E8B931';
      ctx.font = 'bold 20px "Space Grotesk", sans-serif';
      ctx.fillText('DRIVE CLOSE OR PRESS [E] TO OPEN CASE STUDY ➔', rx + 16, canvas.height - 46);

      texture.needsUpdate = true;
    }

    drawCard(null);

    if (stop.img) {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => drawCard(img);
      img.src = stop.img;
    }

    return texture;
  }

  function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
    const words = (text || '').split(' ');
    let line = '';
    let linesDrawn = 0;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line.trim(), x, y);
        line = words[n] + ' ';
        y += lineHeight;
        linesDrawn++;
        if (maxLines && linesDrawn >= maxLines - 1) {
          // Truncate last line if needed
          const remaining = words.slice(n).join(' ');
          let clipped = remaining;
          while (ctx.measureText(clipped + '...').width > maxWidth && clipped.length > 0) {
            clipped = clipped.slice(0, -1);
          }
          ctx.fillText(clipped + (clipped.length < remaining.length ? '...' : ''), x, y);
          return y + lineHeight;
        }
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line.trim(), x, y);
    return y + lineHeight;
  }

  function buildCentralIslandMonument(islandGroup) {
    // Central Plaza Paving
    const plazaMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(17, 18.5, 0.5, 36),
      new THREE.MeshStandardMaterial({ color: 0xF2EBDD, roughness: 0.75 })
    );
    plazaMesh.position.set(0, 0.15, 0);
    plazaMesh.receiveShadow = true;
    islandGroup.add(plazaMesh);

    const innerRing = new THREE.Mesh(
      new THREE.CylinderGeometry(13.5, 14, 0.65, 36),
      new THREE.MeshStandardMaterial({ color: 0xD9624A, roughness: 0.6 })
    );
    innerRing.position.set(0, 0.2, 0);
    innerRing.receiveShadow = true;
    islandGroup.add(innerRing);

    // Monument Pedestal & Tower
    const basePedestal = new THREE.Mesh(
      new THREE.BoxGeometry(16, 2.4, 7.5),
      new THREE.MeshStandardMaterial({ color: 0x25231F, roughness: 0.5 })
    );
    basePedestal.position.set(0, 1.4, 0);
    basePedestal.castShadow = true;
    basePedestal.receiveShadow = true;
    islandGroup.add(basePedestal);

    // Central Monument Sign Board (Rikkardo L. Tobing Executive Monument)
    const signCanvas = document.createElement('canvas');
    signCanvas.width = 1024;
    signCanvas.height = 512;
    const sctx = signCanvas.getContext('2d');

    sctx.fillStyle = '#25231F';
    sctx.fillRect(0, 0, 1024, 512);
    sctx.strokeStyle = '#E8B931';
    sctx.lineWidth = 12;
    sctx.strokeRect(18, 18, 988, 476);

    sctx.fillStyle = '#E8B931';
    sctx.font = 'bold 28px "Space Grotesk", sans-serif';
    sctx.textAlign = 'center';
    sctx.fillText('INFORMA MARKETS ASIA • PT PAMERINDO INDONESIA', 512, 86);

    sctx.fillStyle = '#FAF8F1';
    sctx.font = 'bold 68px "Space Grotesk", sans-serif';
    sctx.fillText('RIKKARDO L. TOBING', 512, 175);

    sctx.fillStyle = '#D9624A';
    sctx.font = 'bold 30px "DM Sans", sans-serif';
    sctx.fillText('Senior Web Developer • Data & Tech Support • AI Builder', 512, 235);

    // 4 Stat boxes on monument
    const stats = [
      { v: '8+', l: 'B2B PORTALS' },
      { v: '500K+', l: 'ANNUAL VISITORS' },
      { v: '99.9%', l: 'UPTIME SLA' },
      { v: '5+ YRS', l: 'EXPERIENCE' }
    ];
    stats.forEach((st, idx) => {
      const bx = 68 + idx * 226;
      const by = 290;
      sctx.fillStyle = '#FAF8F1';
      sctx.fillRect(bx, by, 204, 155);
      sctx.fillStyle = '#25231F';
      sctx.font = 'bold 46px "Space Grotesk", sans-serif';
      sctx.fillText(st.v, bx + 102, by + 78);
      sctx.fillStyle = '#D9624A';
      sctx.font = 'bold 20px "Space Grotesk", sans-serif';
      sctx.fillText(st.l, bx + 102, by + 122);
    });

    const monumentTex = new THREE.CanvasTexture(signCanvas);
    const monumentBoard = new THREE.Mesh(
      new THREE.BoxGeometry(18.5, 9.2, 1.4),
      new THREE.MeshStandardMaterial({
        map: monumentTex,
        roughness: 0.3,
        emissive: 0xFFFFFF,
        emissiveMap: monumentTex,
        emissiveIntensity: 0.22
      })
    );
    monumentBoard.position.set(0, 7.2, 0);
    monumentBoard.castShadow = true;
    islandGroup.add(monumentBoard);

    // Scenic low-poly hills around the inner island
    const hillCoords = [
      { x: -46, z: -28, r: 19, h: 14 },
      { x: 48, z: -32, r: 21, h: 16 },
      { x: -42, z: 34, r: 17, h: 12 },
      { x: 44, z: 30, r: 18, h: 13 }
    ];
    const hillMat = new THREE.MeshStandardMaterial({ color: 0x4A9656, roughness: 0.85, flatShading: true });
    hillCoords.forEach(h => {
      const hill = new THREE.Mesh(new THREE.ConeGeometry(h.r, h.h, 7), hillMat);
      hill.position.set(h.x, h.h * 0.45, h.z);
      hill.castShadow = true;
      hill.receiveShadow = true;
      islandGroup.add(hill);
    });
  }

  function populateIslandProps(islandGroup, streetLampBulbs, streetLampLights) {
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x6B4423, roughness: 0.9 });
    const leafMats = [
      new THREE.MeshStandardMaterial({ color: 0x2E7D32, roughness: 0.75, flatShading: true }),
      new THREE.MeshStandardMaterial({ color: 0x388E3C, roughness: 0.75, flatShading: true }),
      new THREE.MeshStandardMaterial({ color: 0x43A047, roughness: 0.75, flatShading: true })
    ];

    function addStylizedTree(x, z, scale) {
      const tree = new THREE.Group();
      tree.position.set(x, 0, z);
      tree.scale.setScalar(scale);

      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.55, 2.6, 7), trunkMat);
      trunk.position.y = 1.3;
      trunk.castShadow = true;
      tree.add(trunk);

      const mat = leafMats[Math.floor(Math.random() * leafMats.length)];
      const c1 = new THREE.Mesh(new THREE.ConeGeometry(2.2, 3.6, 7), mat);
      c1.position.y = 3.4;
      c1.castShadow = true;
      tree.add(c1);

      const c2 = new THREE.Mesh(new THREE.ConeGeometry(1.65, 3.0, 7), mat);
      c2.position.y = 5.2;
      c2.castShadow = true;
      tree.add(c2);

      islandGroup.add(tree);
    }

    // Place trees inside and outside the road loop (avoiding road & billboards)
    for (let i = 0; i < 85; i++) {
      const a = (i / 85) * Math.PI * 2 + (i % 3) * 0.04;
      const pt = getRoadPoint(a);
      const isInner = i % 2 === 0;
      const offset = isInner ? -(23 + (i % 4) * 9) : (26 + (i % 3) * 6);
      const tx = pt.x + pt.nx * offset;
      const tz = pt.z + pt.nz * offset;

      // Avoid central monument & water
      const distCenter = Math.hypot(tx, tz);
      const normR = Math.hypot(tx / 1.11, tz / 0.91);
      if (distCenter > 24 && normR < 138) {
        addStylizedTree(tx, tz, 0.85 + (i % 5) * 0.14);
      }
    }

    // Street Lamps along the inner edge of the road
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x25231F, metalness: 0.6, roughness: 0.4 });
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2 + 0.08;
      const pt = getRoadPoint(a);
      const lx = pt.x - pt.nx * 8.2;
      const lz = pt.z - pt.nz * 8.2;

      const lampGroup = new THREE.Group();
      lampGroup.position.set(lx, 0, lz);
      lampGroup.lookAt(pt.x, 0, pt.z);

      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 6.2, 8), poleMat);
      pole.position.y = 3.1;
      pole.castShadow = true;
      lampGroup.add(pole);

      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 1.6), poleMat);
      arm.position.set(0, 6.1, 0.7);
      lampGroup.add(arm);

      const bulbMat = new THREE.MeshStandardMaterial({
        color: 0xFFFBEB,
        emissive: 0xFDE047,
        emissiveIntensity: 0.1
      });
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 12), bulbMat);
      bulb.position.set(0, 5.9, 1.4);
      lampGroup.add(bulb);
      streetLampBulbs.push(bulb);

      // Add subtle point light for every other lamp for night atmosphere
      if (i % 2 === 0) {
        const ptLight = new THREE.PointLight(0xFDE047, 0, 26, 1.8);
        ptLight.position.set(0, 5.5, 1.4);
        lampGroup.add(ptLight);
        streetLampLights.push(ptLight);
      }

      islandGroup.add(lampGroup);
    }

    // Coastal Rocks
    const rockMat = new THREE.MeshStandardMaterial({ color: 0x7A746B, roughness: 0.9, flatShading: true });
    for (let i = 0; i < 28; i++) {
      const a = (i / 28) * Math.PI * 2;
      const r = 146 + 14 * Math.sin(2 * a);
      const rx = Math.cos(a) * r * 1.1;
      const rz = Math.sin(a) * r * 0.9;
      const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(1.4 + (i % 3) * 0.8, 0), rockMat);
      rock.position.set(rx, 0.4, rz);
      rock.rotation.set(i, i * 0.5, 0);
      rock.scale.y = 0.65;
      rock.castShadow = true;
      islandGroup.add(rock);
    }
  }

  function populateSkyClouds(cloudsGroup) {
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      roughness: 0.95,
      flatShading: true
    });
    for (let i = 0; i < 14; i++) {
      const cGroup = new THREE.Group();
      const angle = (i / 14) * Math.PI * 2;
      const dist = 165 + (i % 3) * 45;
      cGroup.position.set(Math.cos(angle) * dist, 52 + (i % 4) * 8, Math.sin(angle) * dist);

      const p1 = new THREE.Mesh(new THREE.DodecahedronGeometry(5.5, 1), cloudMat);
      const p2 = new THREE.Mesh(new THREE.DodecahedronGeometry(4.2, 1), cloudMat);
      p2.position.set(4.5, -0.6, 1.2);
      const p3 = new THREE.Mesh(new THREE.DodecahedronGeometry(4.0, 1), cloudMat);
      p3.position.set(-4.2, -0.8, -1.0);
      cGroup.add(p1, p2, p3);
      cGroup.scale.y = 0.58;
      cloudsGroup.add(cGroup);
    }
  }

  function drawMinimap(ctx, w, h, carState, stopObjects, activeStop) {
    ctx.clearRect(0, 0, w, h);

    const cx = w * 0.5;
    const cy = h * 0.5;
    const scaleX = (w * 0.44) / 165;
    const scaleZ = (h * 0.44) / 140;

    // Island background silhouette
    ctx.save();
    ctx.beginPath();
    for (let i = 0; i <= 64; i++) {
      const a = (i / 64) * Math.PI * 2;
      const r = 144 + 14 * Math.sin(2 * a) + 7 * Math.cos(3 * a);
      const x = cx + Math.cos(a) * r * 1.11 * scaleX;
      const y = cy + Math.sin(a) * r * 0.91 * scaleZ;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(86, 169, 98, 0.35)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(238, 214, 167, 0.7)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Road Loop Path
    ctx.beginPath();
    for (let i = 0; i <= 90; i++) {
      const a = (i / 90) * Math.PI * 2;
      const pt = getRoadPoint(a);
      const x = cx + pt.x * scaleX;
      const y = cy + pt.z * scaleZ;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = '#2B2E36';
    ctx.lineWidth = 5;
    ctx.stroke();

    // Billboard Dots
    stopObjects.forEach(so => {
      const sx = cx + so.parkX * scaleX;
      const sy = cy + so.parkZ * scaleZ;
      const isCurrent = activeStop === so;
      ctx.beginPath();
      ctx.arc(sx, sy, isCurrent ? 5.2 : 3.4, 0, Math.PI * 2);
      ctx.fillStyle = isCurrent ? '#E8B931' : so.stop.accent;
      ctx.fill();
      ctx.strokeStyle = '#181614';
      ctx.lineWidth = 1.2;
      ctx.stroke();
    });

    // Player Car Arrow
    const px = cx + carState.x * scaleX;
    const py = cy + carState.z * scaleZ;
    ctx.translate(px, py);
    ctx.rotate(-carState.heading + Math.PI);
    ctx.beginPath();
    ctx.moveTo(0, -6.5);
    ctx.lineTo(4.8, 5.2);
    ctx.lineTo(0, 2.8);
    ctx.lineTo(-4.8, 5.2);
    ctx.closePath();
    ctx.fillStyle = '#D9624A';
    ctx.fill();
    ctx.strokeStyle = '#FAF8F1';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();
  }

  function composePostcardImage(glCanvas, stopTitle, timeMode) {
    const out = document.createElement('canvas');
    out.width = 1200;
    out.height = 820;
    const ctx = out.getContext('2d');

    // Vintage Polaroid / Postcard Paper Frame
    ctx.fillStyle = '#FAF8F1';
    ctx.fillRect(0, 0, out.width, out.height);

    ctx.strokeStyle = '#25231F';
    ctx.lineWidth = 8;
    ctx.strokeRect(16, 16, out.width - 32, out.height - 32);

    // Draw 3D Scene Snapshot
    ctx.drawImage(glCanvas, 44, 44, out.width - 88, out.height - 190);
    ctx.strokeRect(44, 44, out.width - 88, out.height - 190);

    // Postcard Stamp & Caption Footer
    ctx.fillStyle = '#25231F';
    ctx.font = 'bold 30px "Space Grotesk", sans-serif';
    ctx.fillText(`📍 ${stopTitle}`, 52, out.height - 88);

    ctx.fillStyle = '#D9624A';
    ctx.font = '600 21px "DM Sans", sans-serif';
    ctx.fillText(`Rikkardo L. Tobing — Interactive 3D Drivefolio Island (${timeMode.toUpperCase()} EDITION)`, 52, out.height - 48);

    // Right Stamp Badge
    ctx.fillStyle = '#E8B931';
    ctx.fillRect(out.width - 280, out.height - 118, 226, 68);
    ctx.strokeStyle = '#25231F';
    ctx.lineWidth = 3;
    ctx.strokeRect(out.width - 280, out.height - 118, 226, 68);
    ctx.fillStyle = '#25231F';
    ctx.font = 'bold 20px "Space Grotesk", sans-serif';
    ctx.fillText('JAKARTA • ID 🇮🇩', out.width - 252, out.height - 86);
    ctx.font = '16px "DM Sans", sans-serif';
    ctx.fillText('rikkardotobing.my.id', out.width - 248, out.height - 62);

    return out.toDataURL('image/png');
  }

  function normalizeAngle(a) {
    while (a > Math.PI) a -= Math.PI * 2;
    while (a < -Math.PI) a += Math.PI * 2;
    return a;
  }

})();
