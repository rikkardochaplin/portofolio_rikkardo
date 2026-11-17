/* ==========================================================================
   DRIVEFOLIO 3D ISLAND ENGINE v2.0 — RIKKARDO L. TOBING EDITION
   Symmetrical Circular Resort & Circuit Island + High-Detail Sculpted 3D Cars
   (MeshPhysicalMaterial Clearcoat Paint, Wheel Arches, Alloy Rims, Brake Calipers,
   Grand Circular Boulevard, 4 Radial Avenues, Central Fountain Rotunda & Lighthouse)
   ========================================================================== */

(function () {
  'use strict';

  // ── Circle Geometry Constants ──
  const ISLAND_RADIUS = 148;
  const OUTER_ROAD_RADIUS = 102;
  const OUTER_ROAD_WIDTH = 14;
  const INNER_RING_RADIUS = 34;

  // ── Complete Island Stops & Billboards Dataset (Evenly Spaced 360° Circle) ──
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
      accent: '#E8B931'
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
      accent: '#06B6D4'
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
      accent: '#6366F1'
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
      accent: '#A855F7'
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
      accent: '#10B981'
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
      accent: '#D9624A'
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
      accent: '#F59E0B'
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
      accent: '#3B82F6'
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
      accent: '#76948C'
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
      accent: '#14B8A6'
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
      accent: '#EC4899'
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
      accent: '#F97316'
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
      accent: '#8B5CF6'
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
      accent: '#38BDF8'
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
      accent: '#F43F5E'
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
      accent: '#22C55E'
    }
  ].map((stop, idx, arr) => ({
    ...stop,
    // Evenly distribute all 16 stops around the 360-degree circular boulevard!
    // Offset slightly from 0° so cardinal arches at 0°, 90°, 180°, 270° sit cleanly between stops
    angle: ((idx + 0.5) / arr.length) * Math.PI * 2
  }));

  // Metallic Automotive Paint Presets
  const CAR_COLORS = [
    { name: 'Rosso Corsa Red', hex: 0xE11D48, css: '#E11D48' },
    { name: 'Solaris Gold', hex: 0xF59E0B, css: '#F59E0B' },
    { name: 'Miami Cyber Blue', hex: 0x06B6D4, css: '#06B6D4' },
    { name: 'Verde Mantis Green', hex: 0x10B981, css: '#10B981' },
    { name: 'Obsidian Stealth', hex: 0x1E293B, css: '#1E293B' },
    { name: 'Alpine Pearl White', hex: 0xF8FAFC, css: '#F8FAFC' }
  ];

  // 3 Sculpted 3D Vehicle Archetypes
  const VEHICLE_TYPES = [
    { id: 'supercar', label: 'GT Supercar', icon: 'fa-car-side' },
    { id: 'suv', label: 'Cyber 4x4 SUV', icon: 'fa-truck-monster' },
    { id: 'formula', label: 'Aero Hypercar', icon: 'fa-gauge-high' }
  ];

  const TIME_MODES = ['day', 'sunset', 'night'];

  // Pure Circular Boulevard Parametric Function (R = 102)
  function getRoadPoint(t) {
    const x = Math.cos(t) * OUTER_ROAD_RADIUS;
    const z = Math.sin(t) * OUTER_ROAD_RADIUS;
    // Unit tangent along increasing t
    const tx = -Math.sin(t);
    const tz = Math.cos(t);
    // Outward unit normal (pointing away from island center)
    const nx = Math.cos(t);
    const nz = Math.sin(t);
    return { x, z, tx, tz, nx, nz };
  }

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
    let vehicleTypeIndex = 0;
    let audioEnabled = false;
    let audioCtx = null;
    let engineOsc = null;
    let engineGain = null;

    const hour = new Date().getHours();
    let timeModeIndex = (hour >= 19 || hour < 6) ? 2 : (hour >= 16 && hour < 19) ? 1 : 0;

    // ── Scene, Camera, Renderer ──
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x7EC8E3);
    scene.fog = new THREE.FogExp2(0x7EC8E3, 0.0018);

    // Create procedural studio reflection CubeTexture for metallic clearcoat car paint!
    const envTexture = createStudioEnvCubeTexture();
    scene.environment = envTexture;

    const camera = new THREE.PerspectiveCamera(44, container.clientWidth / container.clientHeight, 0.5, 1000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    container.appendChild(renderer.domElement);

    // ── Lighting ──
    const hemiLight = new THREE.HemisphereLight(0xFFFFFF, 0x3B6E4C, 0.85);
    hemiLight.position.set(0, 140, 0);
    scene.add(hemiLight);

    const sunLight = new THREE.DirectionalLight(0xFFF8E7, 1.35);
    sunLight.position.set(110, 145, 95);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 15;
    sunLight.shadow.camera.far = 450;
    const shadowBound = 170;
    sunLight.shadow.camera.left = -shadowBound;
    sunLight.shadow.camera.right = shadowBound;
    sunLight.shadow.camera.top = shadowBound;
    sunLight.shadow.camera.bottom = -shadowBound;
    sunLight.shadow.bias = -0.0005;
    scene.add(sunLight);

    // Sun / Moon Orb
    const celestialOrb = new THREE.Mesh(
      new THREE.SphereGeometry(15, 28, 28),
      new THREE.MeshBasicMaterial({ color: 0xFFE875 })
    );
    celestialOrb.position.set(240, 155, -250);
    scene.add(celestialOrb);

    // Night Starfield Dome
    const starsGroup = createStarfield();
    starsGroup.visible = false;
    scene.add(starsGroup);

    // ── Ocean, Turquoise Coral Lagoon & Concentric Wave Rings ──
    const oceanMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1800, 1800).rotateX(-Math.PI / 2),
      new THREE.MeshStandardMaterial({
        color: 0x0E7490,
        roughness: 0.18,
        metalness: 0.22
      })
    );
    oceanMesh.position.y = -2.2;
    oceanMesh.receiveShadow = true;
    scene.add(oceanMesh);

    // Shallow turquoise coral reef ring around circular island
    const lagoonMesh = new THREE.Mesh(
      new THREE.RingGeometry(ISLAND_RADIUS - 2, ISLAND_RADIUS + 26, 96).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({
        color: 0x22D3EE,
        transparent: true,
        opacity: 0.34,
        side: THREE.DoubleSide
      })
    );
    lagoonMesh.position.y = -2.05;
    scene.add(lagoonMesh);

    // Animated shoreline white foam rings
    const foamRing1 = new THREE.Mesh(
      new THREE.RingGeometry(ISLAND_RADIUS + 1.5, ISLAND_RADIUS + 3.8, 96).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({
        color: 0xF0FDFA,
        transparent: true,
        opacity: 0.65,
        side: THREE.DoubleSide
      })
    );
    foamRing1.position.y = -1.95;
    scene.add(foamRing1);

    const foamRing2 = new THREE.Mesh(
      new THREE.RingGeometry(ISLAND_RADIUS + 7, ISLAND_RADIUS + 8.6, 96).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({
        color: 0xE0F2FE,
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide
      })
    );
    foamRing2.position.y = -1.98;
    scene.add(foamRing2);

    // ── Symmetrical Circular Island World ──
    const islandGroup = new THREE.Group();
    scene.add(islandGroup);

    // Tier 1: Circular Golden Sand Beach Base
    const sandCyl = new THREE.Mesh(
      new THREE.CylinderGeometry(ISLAND_RADIUS, ISLAND_RADIUS + 5, 2.3, 96),
      new THREE.MeshStandardMaterial({ color: 0xF3DFB6, roughness: 0.86 })
    );
    sandCyl.position.y = -1.1;
    sandCyl.receiveShadow = true;
    islandGroup.add(sandCyl);

    // Tier 2: Architectural Stone Retaining Wall & Main Emerald Parkland Disc
    const stoneWallCyl = new THREE.Mesh(
      new THREE.CylinderGeometry(138.5, 139.5, 1.3, 96),
      new THREE.MeshStandardMaterial({ color: 0xD6D0C4, roughness: 0.7 })
    );
    stoneWallCyl.position.y = -0.35;
    stoneWallCyl.receiveShadow = true;
    islandGroup.add(stoneWallCyl);

    const grassCyl = new THREE.Mesh(
      new THREE.CylinderGeometry(137.5, 138.2, 1.2, 96),
      new THREE.MeshStandardMaterial({ color: 0x4EA860, roughness: 0.82 })
    );
    grassCyl.position.y = -0.25;
    grassCyl.receiveShadow = true;
    islandGroup.add(grassCyl);

    // Invisible Raycast Plane for Click-to-Drive
    const raycastPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(400, 400).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    raycastPlane.position.y = 0.38;
    scene.add(raycastPlane);

    // ── Build Circular Boulevard, Rumble Curbs, 4 Radial Spokes & Central Rotunda ──
    const fountainDrops = [];
    let monumentGlobe = null;
    let lighthouseBeamPivot = null;
    let lighthouseSpotLight = null;
    const streetLampBulbs = [];
    const streetLampLights = [];

    const worldRefs = buildCircularHighwayAndLandmarks(
      islandGroup,
      fountainDrops,
      streetLampBulbs,
      streetLampLights
    );
    monumentGlobe = worldRefs.monumentGlobe;
    lighthouseBeamPivot = worldRefs.lighthouseBeamPivot;
    lighthouseSpotLight = worldRefs.lighthouseSpotLight;

    // ── Build All 16 Symmetrical Outer-Ring Billboards ──
    const stopObjects = [];
    const textureLoader = new THREE.TextureLoader();

    ISLAND_STOPS.forEach((stop, index) => {
      const pt = getRoadPoint(stop.angle);
      // Place all billboards symmetrically along the OUTER showcase ring (R = 122)
      // facing inward toward the circular boulevard so the camera never gets blocked!
      const billboardRadius = OUTER_ROAD_RADIUS + 18.5;
      const bx = pt.nx * billboardRadius;
      const bz = pt.nz * billboardRadius;

      // Pit-stop trigger bay on the outer lane of the circular road
      const parkRadius = OUTER_ROAD_RADIUS + 4.4;
      const parkX = pt.nx * parkRadius;
      const parkZ = pt.nz * parkRadius;

      const stopGroup = new THREE.Group();
      stopGroup.position.set(bx, 0.35, bz);
      // Face toward the approaching car on the circular boulevard
      const lookX = pt.x - pt.tx * 7;
      const lookZ = pt.z - pt.tz * 7;
      stopGroup.lookAt(lookX, 0.35, lookZ);
      islandGroup.add(stopGroup);

      // Architectural Lay-By Stage Base
      const stageBase = new THREE.Mesh(
        new THREE.BoxGeometry(15.2, 0.45, 5.2),
        new THREE.MeshStandardMaterial({ color: 0x25231F, roughness: 0.65 })
      );
      stageBase.position.set(0, 0.22, 0.8);
      stageBase.receiveShadow = true;
      stopGroup.add(stageBase);

      const stageTrim = new THREE.Mesh(
        new THREE.BoxGeometry(15.5, 0.14, 5.4),
        new THREE.MeshStandardMaterial({
          color: new THREE.Color(stop.accent),
          emissive: new THREE.Color(stop.accent),
          emissiveIntensity: 0.35
        })
      );
      stageTrim.position.set(0, 0.46, 0.8);
      stopGroup.add(stageTrim);

      // Glowing Ground Pit-Stop Ring on Road
      const ringMesh = new THREE.Mesh(
        new THREE.RingGeometry(4.0, 4.75, 40).rotateX(-Math.PI / 2),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color(stop.accent),
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.72
        })
      );
      ringMesh.position.set(parkX, 0.44, parkZ);
      islandGroup.add(ringMesh);

      const discMesh = new THREE.Mesh(
        new THREE.CircleGeometry(4.0, 40).rotateX(-Math.PI / 2),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color(stop.accent),
          transparent: true,
          opacity: 0.15
        })
      );
      discMesh.position.set(parkX, 0.42, parkZ);
      islandGroup.add(discMesh);

      // Twin Steel Gantry Columns
      const pillarGeo = new THREE.CylinderGeometry(0.34, 0.42, 9.2, 16);
      const pillarMat = new THREE.MeshStandardMaterial({
        color: 0x1E293B,
        metalness: 0.75,
        roughness: 0.25
      });
      [-4.6, 4.6].forEach(px => {
        const pillar = new THREE.Mesh(pillarGeo, pillarMat);
        pillar.position.set(px, 4.6, 0);
        pillar.castShadow = true;
        stopGroup.add(pillar);
      });

      // Billboard Frame Casing
      const boardWidth = 12.6;
      const boardHeight = 7.3;
      const frameMesh = new THREE.Mesh(
        new THREE.BoxGeometry(boardWidth + 0.8, boardHeight + 0.8, 0.65),
        new THREE.MeshStandardMaterial({
          color: 0x18181B,
          roughness: 0.35,
          metalness: 0.45
        })
      );
      frameMesh.position.set(0, 7.8, 0);
      frameMesh.castShadow = true;
      stopGroup.add(frameMesh);

      // Glowing Accent Crown Bar
      const topBarMesh = new THREE.Mesh(
        new THREE.BoxGeometry(boardWidth + 1.1, 0.5, 0.88),
        new THREE.MeshStandardMaterial({
          color: new THREE.Color(stop.accent),
          emissive: new THREE.Color(stop.accent),
          emissiveIntensity: 0.32,
          roughness: 0.25
        })
      );
      topBarMesh.position.set(0, 7.8 + boardHeight * 0.5 + 0.4, 0);
      stopGroup.add(topBarMesh);

      // High-DPI Billboard Face Texture
      const boardTexture = createBillboardCanvasTexture(stop, index + 1, textureLoader);
      const faceMat = new THREE.MeshStandardMaterial({
        map: boardTexture,
        roughness: 0.22,
        metalness: 0.05,
        emissive: new THREE.Color(0xFFFFFF),
        emissiveMap: boardTexture,
        emissiveIntensity: 0.18
      });

      const frontFace = new THREE.Mesh(new THREE.PlaneGeometry(boardWidth, boardHeight), faceMat);
      frontFace.position.set(0, 7.8, 0.35);
      stopGroup.add(frontFace);

      const backFace = new THREE.Mesh(new THREE.PlaneGeometry(boardWidth, boardHeight), faceMat);
      backFace.position.set(0, 7.8, -0.35);
      backFace.rotation.y = Math.PI;
      stopGroup.add(backFace);

      // Floating 3D Status Gem Above Billboard
      const isVisited = visitedProjects.has(stop.id);
      const markerMat = new THREE.MeshStandardMaterial({
        color: isVisited ? 0x10B981 : new THREE.Color(stop.accent),
        emissive: isVisited ? 0x059669 : new THREE.Color(stop.accent),
        emissiveIntensity: 0.55,
        roughness: 0.15,
        metalness: 0.3
      });
      const markerMesh = new THREE.Mesh(new THREE.OctahedronGeometry(0.9, 0), markerMat);
      markerMesh.position.set(0, 13.2, 0);
      stopGroup.add(markerMesh);

      // Symmetrical Ornamental Cypress Trees Flanking Each Billboard
      [-6.8, 6.8].forEach(tx => {
        const ornamentalTree = createOrnamentalTree(1.05);
        ornamentalTree.position.set(tx, 0.2, 0.6);
        stopGroup.add(ornamentalTree);
      });

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

    // ── Sky Clouds Ring ──
    const cloudsGroup = new THREE.Group();
    scene.add(cloudsGroup);
    populateSkyClouds(cloudsGroup);

    // ── Click-to-Drive Waypoint Ring ──
    const waypointGroup = new THREE.Group();
    waypointGroup.visible = false;
    const wpRing = new THREE.Mesh(
      new THREE.RingGeometry(1.5, 2.2, 32).rotateX(-Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: 0xF59E0B, side: THREE.DoubleSide })
    );
    wpRing.position.y = 0.45;
    waypointGroup.add(wpRing);
    scene.add(waypointGroup);

    // ── Build Sculpted 3D Player Car (with Switchable Chassis!) ──
    const startAngle = ISLAND_STOPS[0].angle - 0.055;
    const startPt = getRoadPoint(startAngle);

    const carRoot = new THREE.Group();
    carRoot.position.set(startPt.x, 0.38, startPt.z);
    scene.add(carRoot);

    let carBuilder = buildSculptedVehicle(
      VEHICLE_TYPES[vehicleTypeIndex].id,
      CAR_COLORS[carColorIndex].hex,
      envTexture
    );
    carRoot.add(carBuilder.group);

    function rebuildPlayerVehicle() {
      const prevHeadlightIntensity = carBuilder.headLightLeft.intensity;
      carRoot.remove(carBuilder.group);
      carBuilder = buildSculptedVehicle(
        VEHICLE_TYPES[vehicleTypeIndex].id,
        CAR_COLORS[carColorIndex].hex,
        envTexture
      );
      carBuilder.headLightLeft.intensity = prevHeadlightIntensity;
      carBuilder.headLightRight.intensity = prevHeadlightIntensity;
      carRoot.add(carBuilder.group);
    }

    // Car Physics State
    const carState = {
      x: startPt.x,
      z: startPt.z,
      heading: Math.atan2(startPt.tx, startPt.tz),
      speed: 0,
      maxSpeed: 0.78,
      boostMaxSpeed: 1.18,
      accel: 0.024,
      ReverseMax: -0.38,
      friction: 0.962,
      steerAngle: 0,
      wheelRotation: 0
    };

    // Exhaust & Nitro Flame Particle Pool + Tire Skid Marks Pool
    const particles = [];
    const particleGeo = new THREE.SphereGeometry(0.28, 10, 10);
    for (let i = 0; i < 36; i++) {
      const pMat = new THREE.MeshBasicMaterial({
        color: 0xF8FAFC,
        transparent: true,
        opacity: 0
      });
      const pMesh = new THREE.Mesh(particleGeo, pMat);
      pMesh.visible = false;
      scene.add(pMesh);
      particles.push({ mesh: pMesh, life: 0, maxLife: 1, vx: 0, vy: 0, vz: 0 });
    }
    let particleSpawnTimer = 0;

    // Tire Skid Marks Pool
    const skidMarks = [];
    const skidGeo = new THREE.PlaneGeometry(0.42, 1.3).rotateX(-Math.PI / 2);
    const skidMat = new THREE.MeshBasicMaterial({
      color: 0x111318,
      transparent: true,
      opacity: 0.45
    });
    for (let i = 0; i < 60; i++) {
      const sm = new THREE.Mesh(skidGeo, skidMat);
      sm.visible = false;
      scene.add(sm);
      skidMarks.push(sm);
    }
    let skidIndex = 0;

    // ── Input Controls ──
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
      if (autopilotActive) setAutopilot(false);
      if (clickWaypoint) {
        clickWaypoint = null;
        waypointGroup.visible = false;
      }
    }

    // Raycast Click-to-Drive
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

      const hits = raycaster.intersectObjects(islandGroup.children, true);
      for (const hit of hits) {
        for (const so of stopObjects) {
          if (hit.object.material === so.faceMat || hit.object === so.markerMesh) {
            driveToStop(so.index);
            return;
          }
        }
      }

      const groundHits = raycaster.intersectObject(raycastPlane);
      if (groundHits.length > 0) {
        const pt = groundHits[0].point;
        const r = Math.hypot(pt.x, pt.z);
        if (r < 134 && r > 18) {
          if (autopilotActive) setAutopilot(false);
          clickWaypoint = { x: pt.x, z: pt.z };
          waypointGroup.position.set(pt.x, 0, pt.z);
          waypointGroup.visible = true;
        }
      }
    });

    // ── Bind HUD Controls ──
    bindHUDControls();
    applyTimeOfDay(TIME_MODES[timeModeIndex]);
    updateVisitedHUD();

    // ── Camera State ──
    const camPos = new THREE.Vector3(startPt.x - startPt.tx * 22, 13.5, startPt.z - startPt.tz * 22);
    const camLook = new THREE.Vector3(startPt.x, 2.4, startPt.z);

    // ── Minimap 2D Canvas ──
    const minimapCanvas = document.getElementById('drivefolio-minimap');
    const minimapCtx = minimapCanvas ? minimapCanvas.getContext('2d') : null;
    if (minimapCanvas) {
      minimapCanvas.addEventListener('click', (e) => {
        const rect = minimapCanvas.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const mz = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        const worldX = mx * 155;
        const worldZ = mz * 155;
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
        } else if (Math.hypot(worldX, worldZ) < 134) {
          if (autopilotActive) setAutopilot(false);
          clickWaypoint = { x: worldX, z: worldZ };
          waypointGroup.position.set(worldX, 0, worldZ);
          waypointGroup.visible = true;
        }
      });
    }

    // ── Main Render & Physics Loop ──
    const clock = new THREE.Clock();
    let elapsed = 0;

    function animate() {
      requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);
      elapsed += dt;

      // 1. Autopilot Curve-Following along Circular Boulevard or Click Waypoint
      let autoThrottle = 0;
      let autoSteer = 0;

      if (autopilotActive) {
        const targetStop = stopObjects[autopilotTargetIndex];
        if (targetStop) {
          const dx = targetStop.parkX - carState.x;
          const dz = targetStop.parkZ - carState.z;
          const dist = Math.hypot(dx, dz);

          if (dist < 4.6) {
            carState.speed *= 0.78;
            if (!targetStop._autopilotPauseTimer) {
              targetStop._autopilotPauseTimer = elapsed;
              markStopVisited(targetStop.stop);
            } else if (elapsed - targetStop._autopilotPauseTimer > 3.0) {
              targetStop._autopilotPauseTimer = 0;
              autopilotTargetIndex = (autopilotTargetIndex + 1) % stopObjects.length;
              updateAutopilotStatusBanner();
            }
          } else {
            // Follow circular road smoothly toward target stop angle!
            const currentAngle = Math.atan2(carState.z, carState.x);
            const targetAngle = targetStop.stop.angle;
            let angularDiff = normalizeAngle(targetAngle - currentAngle);
            if (angularDiff < -0.15) angularDiff += Math.PI * 2;

            // Aim at a lookahead point along the circular road
            const lookAheadAngle = Math.abs(angularDiff) > 0.35
              ? currentAngle + Math.sign(angularDiff || 1) * 0.24
              : targetAngle;
            const aimX = Math.cos(lookAheadAngle) * (OUTER_ROAD_RADIUS + 2.2);
            const aimZ = Math.sin(lookAheadAngle) * (OUTER_ROAD_RADIUS + 2.2);

            const desiredHeading = Math.atan2(aimX - carState.x, aimZ - carState.z);
            const headingErr = normalizeAngle(desiredHeading - carState.heading);
            autoSteer = Math.max(-1, Math.min(1, headingErr * 2.6));
            autoThrottle = dist > 16 ? 0.86 : 0.52;
          }
        }
      } else if (clickWaypoint) {
        const dx = clickWaypoint.x - carState.x;
        const dz = clickWaypoint.z - carState.z;
        const dist = Math.hypot(dx, dz);
        wpRing.scale.setScalar(1 + 0.2 * Math.sin(elapsed * 6));

        if (dist < 3.6) {
          clickWaypoint = null;
          waypointGroup.visible = false;
        } else {
          const desiredAngle = Math.atan2(dx, dz);
          const angleDiff = normalizeAngle(desiredAngle - carState.heading);
          autoSteer = Math.max(-1, Math.min(1, angleDiff * 2.5));
          autoThrottle = dist > 14 ? 0.85 : 0.5;
        }
      }

      // 2. Manual + Joystick + Auto Input Integration
      const forwardInput = keys.forward ? 1 : (joystickVector.active && joystickVector.y < -0.15 ? -joystickVector.y : autoThrottle);
      const backwardInput = keys.backward ? 1 : (joystickVector.active && joystickVector.y > 0.15 ? joystickVector.y : 0);
      const steerInput = (keys.left ? 1 : 0) - (keys.right ? 1 : 0) +
                         (joystickVector.active ? -joystickVector.x : 0) +
                         autoSteer;

      const currentMax = keys.boost ? carState.boostMaxSpeed : carState.maxSpeed;

      if (keys.brake) {
        carState.speed *= 0.86;
        // Leave tire skid marks when braking/drifting at speed!
        if (Math.abs(carState.speed) > 0.2) {
          dropTireSkidMarks(carState);
        }
      } else if (forwardInput > 0) {
        carState.speed = Math.min(currentMax * forwardInput, carState.speed + carState.accel * (keys.boost ? 1.75 : 1));
      } else if (backwardInput > 0) {
        carState.speed = Math.max(carState.ReverseMax * backwardInput, carState.speed - carState.accel * 0.88);
      } else {
        carState.speed *= carState.friction;
        if (Math.abs(carState.speed) < 0.002) carState.speed = 0;
      }

      const targetSteer = Math.max(-1, Math.min(1, steerInput)) * 0.048;
      carState.steerAngle += (targetSteer - carState.steerAngle) * 0.24;

      if (Math.abs(carState.speed) > 0.005) {
        const dirSign = carState.speed >= 0 ? 1 : -1;
        const speedFactor = Math.min(1, Math.abs(carState.speed) / 0.32);
        carState.heading += carState.steerAngle * dirSign * speedFactor * (dt * 60);
      }

      const nextX = carState.x + Math.sin(carState.heading) * carState.speed * (dt * 60);
      const nextZ = carState.z + Math.cos(carState.heading) * carState.speed * (dt * 60);

      // Circular Island Boundary Clamp
      const distFromOrigin = Math.hypot(nextX, nextZ);
      if (distFromOrigin < 134 && distFromOrigin > 15.5) {
        carState.x = nextX;
        carState.z = nextZ;
      } else if (distFromOrigin <= 15.5) {
        // Bounce gently off central fountain basin
        const pushAngle = Math.atan2(nextX, nextZ);
        carState.x = Math.sin(pushAngle) * 15.7;
        carState.z = Math.cos(pushAngle) * 15.7;
        carState.speed *= 0.45;
      } else {
        // Outer stone retaining wall
        const pullAngle = Math.atan2(nextX, nextZ);
        carState.x = Math.sin(pullAngle) * 133.8;
        carState.z = Math.cos(pullAngle) * 133.8;
        carState.speed *= -0.35;
      }

      // Apply Car Transform & Dynamic Suspension Pitch/Roll
      carRoot.position.set(carState.x, 0.38, carState.z);
      carRoot.rotation.y = carState.heading;

      carBuilder.bodyPivot.rotation.x = -carState.speed * 0.055;
      carBuilder.bodyPivot.rotation.z = carState.steerAngle * carState.speed * 1.5;

      // Spin & Steer Multi-Spoke Wheels
      carState.wheelRotation += carState.speed * 1.25;
      carBuilder.wheels.forEach((w, idx) => {
        w.spinGroup.rotation.x = carState.wheelRotation;
        if (idx < 2) {
          w.steerPivot.rotation.y = carState.steerAngle * 7.8;
        }
      });

      // Dynamic Turbo Camera FOV Warp
      const targetFov = (keys.boost && Math.abs(carState.speed) > 0.35) ? 52 : 44;
      if (Math.abs(camera.fov - targetFov) > 0.1) {
        camera.fov += (targetFov - camera.fov) * 0.12;
        camera.updateProjectionMatrix();
      }

      // Speedometer & Audio
      updateSpeedometerHUD(carState.speed, keys.boost);
      updateEngineSound(carState.speed, keys.boost);

      // Exhaust & Nitro Flame Particles
      particleSpawnTimer += dt;
      if (Math.abs(carState.speed) > 0.06 && particleSpawnTimer > (keys.boost ? 0.025 : 0.065)) {
        particleSpawnTimer = 0;
        spawnExhaustParticle(carState, keys.boost);
      }
      updateExhaustParticles(dt);

      // 3. Smooth Chase Camera Follow
      const camDist = 21.5 + Math.abs(carState.speed) * 4.2;
      const camHeight = 11.8 + Math.abs(carState.speed) * 1.5;
      const targetCamX = carState.x - Math.sin(carState.heading) * camDist;
      const targetCamZ = carState.z - Math.cos(carState.heading) * camDist;

      camPos.x += (targetCamX - camPos.x) * 0.095;
      camPos.y += (camHeight - camPos.y) * 0.095;
      camPos.z += (targetCamZ - camPos.z) * 0.095;
      camera.position.copy(camPos);

      const targetLookX = carState.x + Math.sin(carState.heading) * 6.8;
      const targetLookZ = carState.z + Math.cos(carState.heading) * 6.8;
      camLook.x += (targetLookX - camLook.x) * 0.15;
      camLook.y += (2.3 - camLook.y) * 0.15;
      camLook.z += (targetLookZ - camLook.z) * 0.15;
      camera.lookAt(camLook);

      // 4. Check Billboard Proximity & Animate World Landmarks
      let closestStopObj = null;
      let closestDist = 12.2;

      stopObjects.forEach((so, i) => {
        so.markerMesh.position.y = 13.0 + Math.sin(elapsed * 2.8 + i) * 0.45;
        so.markerMesh.rotation.y += dt * 1.5;

        const dToPark = Math.hypot(carState.x - so.parkX, carState.z - so.parkZ);
        const dToBoard = Math.hypot(carState.x - so.bx, carState.z - so.bz);
        const dMin = Math.min(dToPark, dToBoard * 0.75);

        if (dMin < closestDist) {
          closestDist = dMin;
          closestStopObj = so;
        }

        const isCurrent = closestStopObj === so;
        const pulse = isCurrent ? (1.1 + 0.08 * Math.sin(elapsed * 7.5)) : 1.0;
        so.ringMesh.scale.setScalar(pulse);
        so.discMesh.material.opacity = isCurrent ? 0.36 : 0.13;
      });

      if (closestStopObj !== activeStop) {
        activeStop = closestStopObj;
        updateProximityHUDCard(activeStop ? activeStop.stop : null);
        if (activeStop && activeStop.stop.type === 'project') {
          markStopVisited(activeStop.stop);
        }
      }

      // 5. Animate Central Fountain Jets, Monument Globe, Lighthouse & Ocean Waves
      fountainDrops.forEach((fd, idx) => {
        const phase = (elapsed * 1.8 + idx * 0.17) % 1;
        const r = 2.5 + phase * 6.2;
        fd.position.x = Math.cos(fd.userData.angle) * r;
        fd.position.z = Math.sin(fd.userData.angle) * r;
        fd.position.y = 1.6 + Math.sin(phase * Math.PI) * 5.2;
        fd.scale.setScalar(0.7 + (1 - phase) * 0.6);
      });

      if (monumentGlobe) {
        monumentGlobe.rotation.y = elapsed * 0.9;
        monumentGlobe.position.y = 13.8 + Math.sin(elapsed * 2.2) * 0.4;
      }

      if (lighthouseBeamPivot) {
        lighthouseBeamPivot.rotation.y = elapsed * 1.1;
      }

      const waveScale1 = 1 + Math.sin(elapsed * 1.8) * 0.014;
      foamRing1.scale.set(waveScale1, waveScale1, 1);
      const waveScale2 = 1 + Math.cos(elapsed * 1.5) * 0.018;
      foamRing2.scale.set(waveScale2, waveScale2, 1);

      cloudsGroup.rotation.y = elapsed * 0.01;

      // 6. Render Circular Radar Minimap
      if (minimapCtx) {
        drawMinimap(minimapCtx, minimapCanvas.width, minimapCanvas.height, carState, stopObjects, activeStop);
      }

      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
      if (!container.clientWidth || !container.clientHeight) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });

    // =========================================================================
    // WORLD SCOPE HELPERS
    // =========================================================================

    function dropTireSkidMarks(state) {
      const backDist = -1.55;
      [-0.95, 0.95].forEach(latOffset => {
        const sm = skidMarks[skidIndex];
        skidIndex = (skidIndex + 1) % skidMarks.length;
        const sx = state.x + Math.sin(state.heading) * backDist + Math.cos(state.heading) * latOffset;
        const sz = state.z + Math.cos(state.heading) * backDist - Math.sin(state.heading) * latOffset;
        sm.position.set(sx, 0.4, sz);
        sm.rotation.y = state.heading;
        sm.visible = true;
      });
    }

    function markStopVisited(stop) {
      if (stop.type !== 'project') return;
      if (!visitedProjects.has(stop.id)) {
        visitedProjects.add(stop.id);
        localStorage.setItem('drivefolio_visited', JSON.stringify(Array.from(visitedProjects)));
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
      if (countEl) countEl.textContent = `${count} of ${totalProjects} Seen`;
      if (barEl) barEl.style.width = `${Math.min(100, Math.round((count / totalProjects) * 100))}%`;
    }

    function updateSpeedometerHUD(speed, isBoost) {
      const kmh = Math.min(220, Math.round(Math.abs(speed) * 165));
      const speedValEl = document.getElementById('drivefolio-speed-val');
      const gearEl = document.getElementById('drivefolio-gear-badge');
      if (speedValEl) speedValEl.textContent = kmh;
      if (gearEl) {
        if (isBoost && Math.abs(speed) > 0.1) {
          gearEl.textContent = 'NITRO';
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
          visitBtn.target = '_blank';
          visitBtn.innerHTML = `Visit Live Site <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i>`;
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
      if (banner) banner.classList.toggle('active', autopilotActive);
      if (autopilotActive) updateAutopilotStatusBanner();
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
        scene.background.setHex(0x7EC8E3);
        scene.fog.color.setHex(0x7EC8E3);
        starsGroup.visible = false;
        hemiLight.color.setHex(0xFFFFFF);
        hemiLight.groundColor.setHex(0x3B6E4C);
        hemiLight.intensity = 0.88;
        sunLight.color.setHex(0xFFF8E7);
        sunLight.intensity = 1.35;
        sunLight.position.set(110, 145, 95);
        celestialOrb.material.color.setHex(0xFFE875);
        celestialOrb.position.set(240, 155, -250);
        oceanMesh.material.color.setHex(0x0E7490);
        carBuilder.headLightLeft.intensity = 0;
        carBuilder.headLightRight.intensity = 0;
        if (lighthouseSpotLight) lighthouseSpotLight.intensity = 0;
        streetLampBulbs.forEach(b => b.material.emissiveIntensity = 0.1);
        streetLampLights.forEach(l => l.intensity = 0);
        stopObjects.forEach(so => so.faceMat.emissiveIntensity = 0.16);
        if (btn) btn.innerHTML = `<i class="fa-solid fa-sun me-1"></i> Day`;
      } else if (mode === 'sunset') {
        scene.background.setHex(0xF97316);
        scene.fog.color.setHex(0xEA580C);
        starsGroup.visible = true;
        hemiLight.color.setHex(0xFDBA74);
        hemiLight.groundColor.setHex(0x312E81);
        hemiLight.intensity = 0.68;
        sunLight.color.setHex(0xFB923C);
        sunLight.intensity = 1.2;
        sunLight.position.set(-145, 52, -115);
        celestialOrb.material.color.setHex(0xFF4500);
        celestialOrb.position.set(-240, 44, -210);
        oceanMesh.material.color.setHex(0x1E3A8A);
        carBuilder.headLightLeft.intensity = 2.0;
        carBuilder.headLightRight.intensity = 2.0;
        if (lighthouseSpotLight) lighthouseSpotLight.intensity = 2.5;
        streetLampBulbs.forEach(b => b.material.emissiveIntensity = 0.9);
        streetLampLights.forEach(l => l.intensity = 0.8);
        stopObjects.forEach(so => so.faceMat.emissiveIntensity = 0.36);
        if (btn) btn.innerHTML = `<i class="fa-solid fa-cloud-sun me-1"></i> Sunset`;
      } else {
        scene.background.setHex(0x090D16);
        scene.fog.color.setHex(0x090D16);
        starsGroup.visible = true;
        hemiLight.color.setHex(0x38BDF8);
        hemiLight.groundColor.setHex(0x090D16);
        hemiLight.intensity = 0.42;
        sunLight.color.setHex(0x60A5FA);
        sunLight.intensity = 0.48;
        sunLight.position.set(-85, 115, -95);
        celestialOrb.material.color.setHex(0xE0F2FE);
        celestialOrb.position.set(-180, 135, -220);
        oceanMesh.material.color.setHex(0x061226);
        carBuilder.headLightLeft.intensity = 3.8;
        carBuilder.headLightRight.intensity = 3.8;
        if (lighthouseSpotLight) lighthouseSpotLight.intensity = 4.2;
        streetLampBulbs.forEach(b => b.material.emissiveIntensity = 1.5);
        streetLampLights.forEach(l => l.intensity = 1.45);
        stopObjects.forEach(so => so.faceMat.emissiveIntensity = 0.6);
        if (btn) btn.innerHTML = `<i class="fa-solid fa-moon me-1"></i> Night`;
      }
    }

    function bindHUDControls() {
      const gpsSelect = document.getElementById('df-gps-select');
      if (gpsSelect) {
        gpsSelect.innerHTML = `<option value="">📍 GPS Drive to Stop (16)...</option>` +
          ISLAND_STOPS.map((s, idx) => `<option value="${idx}">${idx + 1}. ${s.title} (${s.badge})</option>`).join('');
        gpsSelect.addEventListener('change', () => {
          const idx = parseInt(gpsSelect.value, 10);
          if (!isNaN(idx)) {
            driveToStop(idx);
            gpsSelect.value = '';
          }
        });
      }

      const autoBtn = document.getElementById('df-autopilot-btn');
      if (autoBtn) {
        autoBtn.addEventListener('click', () => {
          if (!autopilotActive) {
            const nextUnvisited = stopObjects.findIndex(so => so.stop.type === 'project' && !visitedProjects.has(so.stop.id));
            autopilotTargetIndex = nextUnvisited >= 0 ? nextUnvisited : ((activeStop ? activeStop.index + 1 : 0) % stopObjects.length);
          }
          setAutopilot(!autopilotActive);
        });
      }

      const nextStopBtn = document.getElementById('df-card-next-btn');
      if (nextStopBtn) {
        nextStopBtn.addEventListener('click', () => {
          const nextIdx = activeStop ? (activeStop.index + 1) % stopObjects.length : 0;
          driveToStop(nextIdx);
        });
      }

      const timeBtn = document.getElementById('df-time-btn');
      if (timeBtn) {
        timeBtn.addEventListener('click', () => {
          timeModeIndex = (timeModeIndex + 1) % TIME_MODES.length;
          applyTimeOfDay(TIME_MODES[timeModeIndex]);
        });
      }

      // Car Model Switcher (GT Supercar / Cyber SUV / Aero Hypercar)
      const modelBtn = document.getElementById('df-car-model-btn');
      if (modelBtn) {
        modelBtn.addEventListener('click', () => {
          vehicleTypeIndex = (vehicleTypeIndex + 1) % VEHICLE_TYPES.length;
          const vType = VEHICLE_TYPES[vehicleTypeIndex];
          rebuildPlayerVehicle();
          modelBtn.innerHTML = `<i class="fa-solid ${vType.icon} me-1"></i> ${vType.label}`;
        });
      }

      // Car Paint Switcher
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

      const mode3dBtn = document.getElementById('df-mode-3d-btn');
      const modeClassicBtn = document.getElementById('df-mode-classic-btn');
      if (mode3dBtn && modeClassicBtn) {
        mode3dBtn.addEventListener('click', () => {
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
      p.maxLife = isBoost ? 0.38 : 0.6;
      const sidePipe = (Math.random() > 0.5 ? 0.55 : -0.55);
      const backX = state.x - Math.sin(state.heading) * 2.75 + Math.cos(state.heading) * sidePipe;
      const backZ = state.z - Math.cos(state.heading) * 2.75 - Math.sin(state.heading) * sidePipe;
      p.mesh.position.set(backX, 0.65, backZ);
      p.mesh.scale.setScalar(isBoost ? 0.95 : 0.55);
      p.mesh.material.color.setHex(isBoost ? (Math.random() > 0.4 ? 0x38BDF8 : 0xF97316) : 0xE2E8F0);
      p.mesh.material.opacity = isBoost ? 0.9 : 0.5;
      p.mesh.visible = true;
      p.vx = (Math.random() - 0.5) * 1.1;
      p.vy = 1.1 + Math.random() * 1.0;
      p.vz = (Math.random() - 0.5) * 1.1;
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
            p.mesh.scale.addScalar(dt * 1.5);
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
        engineOsc.type = 'sawtooth';
        engineOsc.frequency.value = 58;
        engineGain.gain.value = 0.018;
        engineOsc.connect(engineGain);
        engineGain.connect(audioCtx.destination);
        engineOsc.start();
      } catch (err) {
        audioEnabled = false;
      }
    }

    function updateEngineSound(speed, isBoost) {
      if (!audioEnabled || !audioCtx || !engineOsc || !engineGain) return;
      const freq = 54 + Math.abs(speed) * 125 + (isBoost ? 42 : 0);
      engineOsc.frequency.setTargetAtTime(freq, audioCtx.currentTime, 0.06);
      const gain = 0.012 + Math.min(0.04, Math.abs(speed) * 0.035);
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
  // HIGH-DETAIL SCULPTED 3D VEHICLES (GT SUPERCAR, CYBER SUV, AERO HYPERCAR)
  // ===========================================================================

  function buildSculptedVehicle(vehicleId, hexColor, envTexture) {
    const group = new THREE.Group();
    const bodyPivot = new THREE.Group();
    group.add(bodyPivot);

    // Real Automotive Clearcoat Metallic Paint (MeshPhysicalMaterial)
    const paintMat = new THREE.MeshPhysicalMaterial({
      color: hexColor,
      metalness: 0.68,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.06,
      reflectivity: 1.0,
      envMap: envTexture,
      envMapIntensity: 1.35
    });

    const carbonMat = new THREE.MeshStandardMaterial({
      color: 0x18181B,
      roughness: 0.38,
      metalness: 0.45,
      envMap: envTexture
    });

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x0F172A,
      metalness: 0.15,
      roughness: 0.05,
      clearcoat: 1.0,
      envMap: envTexture,
      envMapIntensity: 1.6
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xF8FAFC,
      metalness: 0.92,
      roughness: 0.12,
      envMap: envTexture
    });

    const hlMat = new THREE.MeshStandardMaterial({
      color: 0xFFFBEB,
      emissive: 0xFEF08A,
      emissiveIntensity: 1.8
    });

    const tlMat = new THREE.MeshStandardMaterial({
      color: 0xEF4444,
      emissive: 0xDC2626,
      emissiveIntensity: 2.0
    });

    const neonCyanMat = new THREE.MeshStandardMaterial({
      color: 0x22D3EE,
      emissive: 0x06B6D4,
      emissiveIntensity: 1.6
    });

    if (vehicleId === 'suv') {
      buildCyberSUVBody(bodyPivot, paintMat, carbonMat, glassMat, chromeMat, hlMat, tlMat);
    } else if (vehicleId === 'formula') {
      buildAeroHypercarBody(bodyPivot, paintMat, carbonMat, glassMat, chromeMat, hlMat, tlMat, neonCyanMat);
    } else {
      buildGTSupercarBody(bodyPivot, paintMat, carbonMat, glassMat, chromeMat, hlMat, tlMat, neonCyanMat);
    }

    // Headlight SpotLights
    const headLightLeft = new THREE.SpotLight(0xFFF6D6, 0, 48, Math.PI / 5, 0.45, 1.2);
    headLightLeft.position.set(-0.95, 0.9, 2.5);
    headLightLeft.target.position.set(-0.95, 0.1, 18);
    group.add(headLightLeft, headLightLeft.target);

    const headLightRight = new THREE.SpotLight(0xFFF6D6, 0, 48, Math.PI / 5, 0.45, 1.2);
    headLightRight.position.set(0.95, 0.9, 2.5);
    headLightRight.target.position.set(0.95, 0.1, 18);
    group.add(headLightRight, headLightRight.target);

    // 4 Sculpted Alloy Wheels with Brake Calipers & Ventilated Discs
    const wheels = [];
    const wheelRadius = vehicleId === 'suv' ? 0.66 : 0.56;
    const wheelWidth = vehicleId === 'formula' ? 0.56 : 0.46;
    const wheelX = vehicleId === 'formula' ? 1.46 : 1.38;
    const wheelZ = 1.68;

    const wheelCoords = [
      { x: -wheelX, y: wheelRadius, z: wheelZ, isLeft: true },
      { x: wheelX, y: wheelRadius, z: wheelZ, isLeft: false },
      { x: -wheelX, y: wheelRadius, z: -wheelZ, isLeft: true },
      { x: wheelX, y: wheelRadius, z: -wheelZ, isLeft: false }
    ];

    wheelCoords.forEach(pos => {
      const wObj = createDetailedAlloyWheel(wheelRadius, wheelWidth, pos.isLeft, chromeMat, carbonMat);
      wObj.steerPivot.position.set(pos.x, pos.y, pos.z);
      group.add(wObj.steerPivot);
      wheels.push(wObj);
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

  function buildGTSupercarBody(bodyPivot, paintMat, carbonMat, glassMat, chromeMat, hlMat, tlMat, neonCyanMat) {
    // 1. Extruded Aerodynamic Side Profile with Carved Wheel Arches
    const bodyShape = new THREE.Shape();
    bodyShape.moveTo(-2.7, 0.28);
    bodyShape.lineTo(-2.82, 0.68);
    bodyShape.quadraticCurveTo(-2.7, 1.08, -2.05, 1.15); // Rear deck
    bodyShape.lineTo(-0.95, 1.66); // Fastback roofline
    bodyShape.quadraticCurveTo(-0.1, 1.74, 0.55, 1.62);  // Roof arch
    bodyShape.lineTo(1.55, 1.05);  // Sloped windshield
    bodyShape.quadraticCurveTo(2.35, 0.92, 2.78, 0.62);  // Sculpted hood
    bodyShape.lineTo(2.85, 0.28);  // Front nose
    bodyShape.lineTo(-2.7, 0.28);

    // Cut out front & rear wheel arches
    const rearArch = new THREE.Path();
    rearArch.absarc(-1.68, 0.34, 0.64, 0, Math.PI, false);
    bodyShape.holes.push(rearArch);

    const frontArch = new THREE.Path();
    frontArch.absarc(1.68, 0.34, 0.64, 0, Math.PI, false);
    bodyShape.holes.push(frontArch);

    const bodyGeo = new THREE.ExtrudeGeometry(bodyShape, {
      steps: 2,
      depth: 2.15,
      bevelEnabled: true,
      bevelThickness: 0.24,
      bevelSize: 0.2,
      bevelSegments: 5
    });
    // Center X extrusion and orient along Z axis (front = +Z)
    bodyGeo.translate(0, 0, -2.15 * 0.5);
    bodyGeo.rotateY(Math.PI / 2);

    const mainShell = new THREE.Mesh(bodyGeo, paintMat);
    mainShell.castShadow = true;
    mainShell.receiveShadow = true;
    bodyPivot.add(mainShell);

    // 2. Panoramic Tinted Glass Cockpit Canopy
    const cabinShape = new THREE.Shape();
    cabinShape.moveTo(-1.92, 1.12);
    cabinShape.lineTo(-0.88, 1.69);
    cabinShape.quadraticCurveTo(-0.1, 1.77, 0.52, 1.65);
    cabinShape.lineTo(1.48, 1.07);
    cabinShape.lineTo(-1.92, 1.12);

    const cabinGeo = new THREE.ExtrudeGeometry(cabinShape, {
      steps: 1,
      depth: 1.68,
      bevelEnabled: true,
      bevelThickness: 0.14,
      bevelSize: 0.12,
      bevelSegments: 4
    });
    cabinGeo.translate(0, 0, -1.68 * 0.5);
    cabinGeo.rotateY(Math.PI / 2);
    const cabinGlass = new THREE.Mesh(cabinGeo, glassMat);
    cabinGlass.castShadow = true;
    bodyPivot.add(cabinGlass);

    // 3. Widebody Flared Wheel Fenders (4 Arches)
    const fenderGeo = new THREE.CylinderGeometry(0.68, 0.68, 0.42, 24, 1, false, 0, Math.PI);
    fenderGeo.rotateZ(Math.PI / 2);
    [
      { x: -1.22, z: 1.68 },
      { x: 1.22, z: 1.68 },
      { x: -1.22, z: -1.68 },
      { x: 1.22, z: -1.68 }
    ].forEach(fp => {
      const fender = new THREE.Mesh(fenderGeo, paintMat);
      fender.position.set(fp.x, 0.56, fp.z);
      fender.castShadow = true;
      bodyPivot.add(fender);
    });

    // 4. Carbon-Fiber Front Splitter, Side Skirts & Rear Diffuser
    const frontSplitter = new THREE.Mesh(new THREE.BoxGeometry(2.68, 0.12, 0.65), carbonMat);
    frontSplitter.position.set(0, 0.26, 2.75);
    bodyPivot.add(frontSplitter);

    const sideSkirtL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.14, 2.3), carbonMat);
    sideSkirtL.position.set(-1.32, 0.28, 0);
    bodyPivot.add(sideSkirtL);
    const sideSkirtR = sideSkirtL.clone();
    sideSkirtR.position.x = 1.32;
    bodyPivot.add(sideSkirtR);

    const rearDiffuser = new THREE.Mesh(new THREE.BoxGeometry(2.52, 0.26, 0.48), carbonMat);
    rearDiffuser.position.set(0, 0.34, -2.68);
    bodyPivot.add(rearDiffuser);

    // 5. Front Honeycomb Grille & Angular LED Headlights
    const grille = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.28, 0.12), carbonMat);
    grille.position.set(0, 0.48, 2.95);
    bodyPivot.add(grille);

    [-0.92, 0.92].forEach(hx => {
      const hl = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.16, 0.18), hlMat);
      hl.position.set(hx, 0.72, 2.86);
      hl.rotation.y = hx > 0 ? -0.18 : 0.18;
      bodyPivot.add(hl);
    });

    // 6. Full-Width Cyberpunk LED Taillight Bar & Quad Chrome Exhausts
    const tailBar = new THREE.Mesh(new THREE.BoxGeometry(2.38, 0.16, 0.12), tlMat);
    tailBar.position.set(0, 0.88, -2.86);
    bodyPivot.add(tailBar);

    const pipeGeo = new THREE.CylinderGeometry(0.11, 0.11, 0.35, 16);
    pipeGeo.rotateX(Math.PI / 2);
    [-0.72, -0.46, 0.46, 0.72].forEach(px => {
      const pipe = new THREE.Mesh(pipeGeo, chromeMat);
      pipe.position.set(px, 0.36, -2.88);
      bodyPivot.add(pipe);
    });

    // 7. Active GT Swan-Neck Rear Spoiler Wing + Side Mirrors
    [-0.65, 0.65].forEach(sx => {
      const pylon = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.42, 0.32), carbonMat);
      pylon.position.set(sx, 1.24, -2.42);
      pylon.rotation.x = -0.25;
      bodyPivot.add(pylon);
    });
    const gtWing = new THREE.Mesh(new THREE.BoxGeometry(2.62, 0.09, 0.52), carbonMat);
    gtWing.position.set(0, 1.44, -2.52);
    gtWing.rotation.x = 0.12;
    gtWing.castShadow = true;
    bodyPivot.add(gtWing);

    // Wing Endplates
    [-1.32, 1.32].forEach(ex => {
      const plate = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.28, 0.58), paintMat);
      plate.position.set(ex, 1.44, -2.52);
      bodyPivot.add(plate);
    });

    // Aerodynamic Side Mirrors
    [-1.28, 1.28].forEach(mx => {
      const mirror = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.14, 0.2), paintMat);
      mirror.position.set(mx, 1.16, 0.82);
      bodyPivot.add(mirror);
    });
  }

  function buildCyberSUVBody(bodyPivot, paintMat, carbonMat, glassMat, chromeMat, hlMat, tlMat) {
    // Rugged G-Wagon / Cyber Off-Roader 4x4 SUV
    const lowerBody = new THREE.Mesh(new THREE.BoxGeometry(2.62, 0.95, 5.1), paintMat);
    lowerBody.position.set(0, 0.88, 0);
    lowerBody.castShadow = true;
    bodyPivot.add(lowerBody);

    const upperCabin = new THREE.Mesh(new THREE.BoxGeometry(2.36, 0.88, 3.35), glassMat);
    upperCabin.position.set(0, 1.72, -0.52);
    upperCabin.castShadow = true;
    bodyPivot.add(upperCabin);

    const roofCap = new THREE.Mesh(new THREE.BoxGeometry(2.42, 0.14, 3.42), paintMat);
    roofCap.position.set(0, 2.2, -0.52);
    bodyPivot.add(roofCap);

    // Roof Expedition Rack + Off-Road LED Lightbar
    const rackFrame = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.14, 2.6), carbonMat);
    rackFrame.position.set(0, 2.34, -0.55);
    bodyPivot.add(rackFrame);

    const roofLedBar = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.14, 0.16), hlMat);
    roofLedBar.position.set(0, 2.36, 0.82);
    bodyPivot.add(roofLedBar);

    // Heavy Bullbar & Grille
    const bullbar = new THREE.Mesh(new THREE.BoxGeometry(2.74, 0.45, 0.35), carbonMat);
    bullbar.position.set(0, 0.58, 2.62);
    bodyPivot.add(bullbar);

    [-0.92, 0.92].forEach(hx => {
      const hl = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.12, 20).rotateX(Math.PI / 2), hlMat);
      hl.position.set(hx, 0.98, 2.56);
      bodyPivot.add(hl);
    });

    // Rear Tailgate Spare Wheel Carrier
    const spareTire = new THREE.Mesh(
      new THREE.CylinderGeometry(0.55, 0.55, 0.36, 24).rotateX(Math.PI / 2),
      carbonMat
    );
    spareTire.position.set(0, 1.25, -2.68);
    bodyPivot.add(spareTire);

    const tailBar = new THREE.Mesh(new THREE.BoxGeometry(2.45, 0.2, 0.12), tlMat);
    tailBar.position.set(0, 0.82, -2.56);
    bodyPivot.add(tailBar);
  }

  function buildAeroHypercarBody(bodyPivot, paintMat, carbonMat, glassMat, chromeMat, hlMat, tlMat, neonCyanMat) {
    // Low-Slung Le Mans / Formula Prototype Hypercar
    const noseCone = new THREE.Mesh(
      new THREE.ConeGeometry(0.95, 3.2, 6).rotateX(Math.PI / 2),
      paintMat
    );
    noseCone.scale.set(1.25, 0.52, 1);
    noseCone.position.set(0, 0.62, 1.45);
    noseCone.castShadow = true;
    bodyPivot.add(noseCone);

    const sidepods = new THREE.Mesh(new THREE.BoxGeometry(2.75, 0.58, 3.2), paintMat);
    sidepods.position.set(0, 0.62, -0.45);
    sidepods.castShadow = true;
    bodyPivot.add(sidepods);

    // Teardrop Cockpit Bubble
    const canopy = new THREE.Mesh(new THREE.SphereGeometry(0.88, 24, 18), glassMat);
    canopy.scale.set(0.92, 0.68, 1.65);
    canopy.position.set(0, 1.05, -0.1);
    bodyPivot.add(canopy);

    // LMP Dorsal Shark Fin
    const sharkFin = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.68, 1.95), carbonMat);
    sharkFin.position.set(0, 1.28, -1.55);
    bodyPivot.add(sharkFin);

    // Front Tri-Plane Aero Wing
    const frontWing = new THREE.Mesh(new THREE.BoxGeometry(2.85, 0.1, 0.72), carbonMat);
    frontWing.position.set(0, 0.28, 2.75);
    bodyPivot.add(frontWing);

    const frontNeon = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.08, 0.12), hlMat);
    frontNeon.position.set(0, 0.55, 2.55);
    bodyPivot.add(frontNeon);

    // Massive Rear Aero Wing
    const rearWing = new THREE.Mesh(new THREE.BoxGeometry(2.88, 0.1, 0.65), carbonMat);
    rearWing.position.set(0, 1.38, -2.48);
    rearWing.rotation.x = 0.16;
    bodyPivot.add(rearWing);

    const rearLed = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.14, 0.12), tlMat);
    rearLed.position.set(0, 0.68, -2.12);
    bodyPivot.add(rearLed);
  }

  function createDetailedAlloyWheel(radius, width, isLeft, chromeMat, carbonMat) {
    const steerPivot = new THREE.Group();
    const spinGroup = new THREE.Group();
    steerPivot.add(spinGroup);

    // 1. Rubber Tire Barrel
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x141417, roughness: 0.82 });
    const tire = new THREE.Mesh(
      new THREE.CylinderGeometry(radius, radius, width, 28).rotateZ(Math.PI / 2),
      tireMat
    );
    tire.castShadow = true;
    spinGroup.add(tire);

    // 2. Alloy Rim Outer Barrel
    const rimRadius = radius * 0.68;
    const rim = new THREE.Mesh(
      new THREE.CylinderGeometry(rimRadius, rimRadius, width + 0.02, 24).rotateZ(Math.PI / 2),
      chromeMat
    );
    spinGroup.add(rim);

    // 3. Dark Inner Brake Rotor Disc + Red Brembo Brake Caliper (Fixed on SteerPivot!)
    const sign = isLeft ? -1 : 1;
    const caliperMat = new THREE.MeshStandardMaterial({ color: 0xEF4444, roughness: 0.3, metalness: 0.4 });
    const caliper = new THREE.Mesh(new THREE.BoxGeometry(0.12, radius * 0.55, radius * 0.35), caliperMat);
    caliper.position.set(sign * (width * 0.38), radius * 0.15, -radius * 0.25);
    steerPivot.add(caliper);

    // 4. 5-Spoke Star Alloy Face & Center Cap
    const spokeGeo = new THREE.BoxGeometry(0.06, rimRadius * 1.82, 0.09);
    for (let s = 0; s < 5; s++) {
      const spoke = new THREE.Mesh(spokeGeo, chromeMat);
      spoke.position.x = sign * (width * 0.48);
      spoke.rotation.x = (s / 5) * Math.PI;
      spinGroup.add(spoke);
    }

    const centerCap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.13, 0.13, width + 0.05, 16).rotateZ(Math.PI / 2),
      carbonMat
    );
    spinGroup.add(centerCap);

    return { steerPivot, spinGroup };
  }

  // ===========================================================================
  // SYMMETRICAL CIRCULAR ISLAND ARCHITECTURE, LANDMARKS & STUDIO ENVIRONMENT
  // ===========================================================================

  function buildCircularHighwayAndLandmarks(islandGroup, fountainDrops, streetLampBulbs, streetLampLights) {
    // 1. Main Grand Circular Boulevard Asphalt Ring (R = 102, width = 14)
    const innerR = OUTER_ROAD_RADIUS - OUTER_ROAD_WIDTH * 0.5;
    const outerR = OUTER_ROAD_RADIUS + OUTER_ROAD_WIDTH * 0.5;

    // Stone Walkways / Curbs flanking the circular highway
    const curbRingMesh = new THREE.Mesh(
      new THREE.RingGeometry(innerR - 1.6, outerR + 1.6, 128).rotateX(-Math.PI / 2),
      new THREE.MeshStandardMaterial({ color: 0xD6D0C4, roughness: 0.75 })
    );
    curbRingMesh.position.y = 0.37;
    curbRingMesh.receiveShadow = true;
    islandGroup.add(curbRingMesh);

    // Alternating Motorsport Red & White Curb Rumble Strips
    const rumbleCount = 96;
    for (let i = 0; i < rumbleCount; i++) {
      const a1 = (i / rumbleCount) * Math.PI * 2;
      const a2 = ((i + 1) / rumbleCount) * Math.PI * 2;
      const rumbleColor = i % 2 === 0 ? 0xDC2626 : 0xFAF8F1;
      const rumbleMat = new THREE.MeshStandardMaterial({ color: rumbleColor, roughness: 0.6 });

      const innerStrip = new THREE.Mesh(
        new THREE.RingGeometry(innerR - 0.65, innerR, 2, 1, a1, a2 - a1).rotateX(-Math.PI / 2),
        rumbleMat
      );
      innerStrip.position.y = 0.385;
      islandGroup.add(innerStrip);

      const outerStrip = new THREE.Mesh(
        new THREE.RingGeometry(outerR, outerR + 0.65, 2, 1, a1, a2 - a1).rotateX(-Math.PI / 2),
        rumbleMat
      );
      outerStrip.position.y = 0.385;
      islandGroup.add(outerStrip);
    }

    // Main Circular Asphalt Road Surface
    const roadRingMesh = new THREE.Mesh(
      new THREE.RingGeometry(innerR, outerR, 128).rotateX(-Math.PI / 2),
      new THREE.MeshStandardMaterial({ color: 0x262930, roughness: 0.72 })
    );
    roadRingMesh.position.y = 0.39;
    roadRingMesh.receiveShadow = true;
    islandGroup.add(roadRingMesh);

    // Center Dashed White Lane Dividers around the Circle
    const dashGeo = new THREE.PlaneGeometry(0.45, 2.8).rotateX(-Math.PI / 2);
    const dashMat = new THREE.MeshBasicMaterial({ color: 0xFAF8F1 });
    for (let i = 0; i < 96; i++) {
      const t = (i / 96) * Math.PI * 2;
      const pt = getRoadPoint(t);
      const dash = new THREE.Mesh(dashGeo, dashMat);
      dash.position.set(pt.x, 0.41, pt.z);
      dash.rotation.y = Math.atan2(pt.tx, pt.tz);
      islandGroup.add(dash);
    }

    // 2. Inner Roundabout Ring (R = 34) + 4 Radial Avenues (N, E, S, W Spokes)
    const innerRoundabout = new THREE.Mesh(
      new THREE.RingGeometry(INNER_RING_RADIUS - 4.5, INNER_RING_RADIUS + 4.5, 72).rotateX(-Math.PI / 2),
      new THREE.MeshStandardMaterial({ color: 0x2D3139, roughness: 0.75 })
    );
    innerRoundabout.position.y = 0.385;
    innerRoundabout.receiveShadow = true;
    islandGroup.add(innerRoundabout);

    // 4 Cardinal Radial Avenues connecting Inner Roundabout to Main Circular Highway
    const spokeLength = innerR - (INNER_RING_RADIUS + 4.2);
    const spokeGeo = new THREE.PlaneGeometry(8.5, spokeLength).rotateX(-Math.PI / 2);
    const spokeMat = new THREE.MeshStandardMaterial({ color: 0x2D3139, roughness: 0.75 });
    [0, Math.PI * 0.5, Math.PI, Math.PI * 1.5].forEach(ang => {
      const midR = (INNER_RING_RADIUS + 4.2 + innerR) * 0.5;
      const spoke = new THREE.Mesh(spokeGeo, spokeMat);
      spoke.position.set(Math.cos(ang) * midR, 0.385, Math.sin(ang) * midR);
      spoke.rotation.y = -ang + Math.PI * 0.5;
      spoke.receiveShadow = true;
      islandGroup.add(spoke);
    });

    // 3. Central Executive Rotunda & Animated Water Fountain (R = 0 to 29)
    const plazaDisc = new THREE.Mesh(
      new THREE.CylinderGeometry(29.5, 30.2, 0.35, 64),
      new THREE.MeshStandardMaterial({ color: 0xF2EBDD, roughness: 0.75 })
    );
    plazaDisc.position.y = 0.4;
    plazaDisc.receiveShadow = true;
    islandGroup.add(plazaDisc);

    // Fountain Outer Stone Basin & Turquoise Pool
    const basinWall = new THREE.Mesh(
      new THREE.CylinderGeometry(14.8, 15.4, 1.4, 48),
      new THREE.MeshStandardMaterial({ color: 0x25231F, roughness: 0.5 })
    );
    basinWall.position.y = 0.9;
    basinWall.castShadow = true;
    islandGroup.add(basinWall);

    const poolWater = new THREE.Mesh(
      new THREE.CylinderGeometry(14.0, 14.0, 1.25, 48),
      new THREE.MeshStandardMaterial({
        color: 0x06B6D4,
        roughness: 0.15,
        metalness: 0.25,
        emissive: 0x0891B2,
        emissiveIntensity: 0.25
      })
    );
    poolWater.position.y = 1.05;
    islandGroup.add(poolWater);

    // Animated Water Fountain Droplets Ring
    const dropGeo = new THREE.SphereGeometry(0.32, 8, 8);
    const dropMat = new THREE.MeshBasicMaterial({ color: 0xE0F2FE, transparent: true, opacity: 0.85 });
    for (let i = 0; i < 24; i++) {
      const drop = new THREE.Mesh(dropGeo, dropMat);
      drop.userData.angle = (i / 24) * Math.PI * 2;
      islandGroup.add(drop);
      fountainDrops.push(drop);
    }

    // Central Monument Tower & 4-Sided Executive Stat Board
    const monumentTex = createMonumentCanvasTexture();
    const monumentMat = new THREE.MeshStandardMaterial({
      map: monumentTex,
      roughness: 0.28,
      emissive: 0xFFFFFF,
      emissiveMap: monumentTex,
      emissiveIntensity: 0.24
    });

    const monumentCore = new THREE.Mesh(new THREE.BoxGeometry(11.5, 7.6, 11.5), monumentMat);
    monumentCore.position.set(0, 5.8, 0);
    monumentCore.castShadow = true;
    islandGroup.add(monumentCore);

    const monumentPedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(6.8, 8.2, 2.2, 32),
      new THREE.MeshStandardMaterial({ color: 0x1E293B, roughness: 0.4, metalness: 0.5 })
    );
    monumentPedestal.position.set(0, 1.6, 0);
    islandGroup.add(monumentPedestal);

    // Floating Golden Crown Octahedron Above Central Rotunda
    const monumentGlobe = new THREE.Mesh(
      new THREE.OctahedronGeometry(2.2, 0),
      new THREE.MeshStandardMaterial({
        color: 0xE8B931,
        emissive: 0xD97706,
        emissiveIntensity: 0.5,
        metalness: 0.8,
        roughness: 0.15
      })
    );
    monumentGlobe.position.set(0, 13.8, 0);
    islandGroup.add(monumentGlobe);

    // 4. Grand Start/Finish Overhead Gantry Arch at Angle = 0°
    buildHighwayOverheadArch(
      islandGroup,
      0,
      'RIKKARDO L. TOBING • DRIVEFOLIO CIRCUIT',
      '8+ B2B PORTALS • 500K+ VISITORS • 99.9% UPTIME SLA',
      '#E8B931'
    );

    // District Arches at 90° and 270°
    buildHighwayOverheadArch(
      islandGroup,
      Math.PI * 0.5,
      'AI, ERP & ENTERPRISE SYSTEMS SECTOR',
      'FASTAPI • REACT AGENTS • IBM AS/400 DB2 • IOT TELEMETRY',
      '#06B6D4'
    );

    buildHighwayOverheadArch(
      islandGroup,
      Math.PI * 1.5,
      'INFORMA MARKETS B2B EXHIBITION BOULEVARD',
      'PAMERINDO • FHI • LAB INDO • FHT BALI • COSMOBEAUTE',
      '#D9624A'
    );

    // 5. Coastal Lighthouse & Viewing Pier at Angle = 180° (West/South Coast)
    const lighthouseRefs = buildCoastalLighthouseAndPier(islandGroup, Math.PI);

    // 6. Symmetrical Inner Boulevard Street Lamps & Park Tree Rings
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x1E293B, metalness: 0.7, roughness: 0.3 });
    for (let i = 0; i < 16; i++) {
      const a = ((i + 0.5) / 16) * Math.PI * 2;
      const pt = getRoadPoint(a);
      // Inner sidewalk edge lamp
      const lx = pt.nx * (innerR - 2.2);
      const lz = pt.nz * (innerR - 2.2);

      const lampGroup = new THREE.Group();
      lampGroup.position.set(lx, 0.35, lz);
      lampGroup.lookAt(pt.x, 0.35, pt.z);

      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 6.6, 10), poleMat);
      pole.position.y = 3.3;
      pole.castShadow = true;
      lampGroup.add(pole);

      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.15, 1.8), poleMat);
      arm.position.set(0, 6.5, 0.8);
      lampGroup.add(arm);

      const bulbMat = new THREE.MeshStandardMaterial({
        color: 0xFFFBEB,
        emissive: 0xFDE047,
        emissiveIntensity: 0.1
      });
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), bulbMat);
      bulb.position.set(0, 6.3, 1.6);
      lampGroup.add(bulb);
      streetLampBulbs.push(bulb);

      if (i % 2 === 0) {
        const ptLight = new THREE.PointLight(0xFDE047, 0, 28, 1.8);
        ptLight.position.set(0, 5.8, 1.6);
        lampGroup.add(ptLight);
        streetLampLights.push(ptLight);
      }

      islandGroup.add(lampGroup);

      // Symmetrical Inner Park Ring Trees (R = 66) — avoiding the 4 radial avenues
      if (Math.abs(Math.sin(a * 2)) > 0.25) {
        const tree1 = createOrnamentalTree(1.25);
        tree1.position.set(pt.nx * 68, 0.35, pt.nz * 68);
        islandGroup.add(tree1);

        const tree2 = createOrnamentalTree(1.05);
        tree2.position.set(pt.nx * 50, 0.35, pt.nz * 50);
        islandGroup.add(tree2);
      }
    }

    return {
      monumentGlobe,
      lighthouseBeamPivot: lighthouseRefs.beamPivot,
      lighthouseSpotLight: lighthouseRefs.spotLight
    };
  }

  function buildHighwayOverheadArch(islandGroup, angle, titleText, subText, accentHex) {
    const pt = getRoadPoint(angle);
    const archGroup = new THREE.Group();
    archGroup.position.set(pt.x, 0.38, pt.z);
    archGroup.rotation.y = Math.atan2(pt.tx, pt.tz);
    islandGroup.add(archGroup);

    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x1E293B, metalness: 0.75, roughness: 0.25 });
    [-8.6, 8.6].forEach(px => {
      const col = new THREE.Mesh(new THREE.BoxGeometry(0.9, 9.2, 0.9), pillarMat);
      col.position.set(px, 4.6, 0);
      col.castShadow = true;
      archGroup.add(col);
    });

    // Overhead Banner Canvas
    const c = document.createElement('canvas');
    c.width = 1024;
    c.height = 192;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#18181B';
    ctx.fillRect(0, 0, 1024, 192);
    ctx.strokeStyle = accentHex;
    ctx.lineWidth = 10;
    ctx.strokeRect(8, 8, 1008, 176);

    ctx.fillStyle = '#FAF8F1';
    ctx.font = 'bold 42px "Space Grotesk", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(titleText, 512, 88);

    ctx.fillStyle = accentHex;
    ctx.font = 'bold 26px "DM Sans", sans-serif';
    ctx.fillText(subText, 512, 142);

    const tex = new THREE.CanvasTexture(c);
    const bannerMat = new THREE.MeshStandardMaterial({
      map: tex,
      emissive: 0xFFFFFF,
      emissiveMap: tex,
      emissiveIntensity: 0.35
    });
    const beam = new THREE.Mesh(new THREE.BoxGeometry(18.2, 2.5, 1.1), bannerMat);
    beam.position.set(0, 8.6, 0);
    beam.castShadow = true;
    archGroup.add(beam);
  }

  function buildCoastalLighthouseAndPier(islandGroup, angle) {
    const lx = Math.cos(angle) * 134;
    const lz = Math.sin(angle) * 134;
    const group = new THREE.Group();
    group.position.set(lx, 0.35, lz);
    group.rotation.y = -angle;
    islandGroup.add(group);

    // Striped Lighthouse Tower
    const redMat = new THREE.MeshStandardMaterial({ color: 0xDC2626, roughness: 0.5 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xFAF8F1, roughness: 0.5 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x1E293B, roughness: 0.4 });

    for (let s = 0; s < 5; s++) {
      const rBot = 3.2 - s * 0.35;
      const rTop = 3.2 - (s + 1) * 0.35;
      const seg = new THREE.Mesh(
        new THREE.CylinderGeometry(rTop, rBot, 3.2, 24),
        s % 2 === 0 ? redMat : whiteMat
      );
      seg.position.y = 1.6 + s * 3.2;
      seg.castShadow = true;
      group.add(seg);
    }

    // Lantern Gallery Deck & Glass Dome
    const deck = new THREE.Mesh(new THREE.CylinderGeometry(2.1, 2.1, 0.4, 24), darkMat);
    deck.position.y = 16.2;
    group.add(deck);

    const lantern = new THREE.Mesh(
      new THREE.CylinderGeometry(1.4, 1.4, 2.2, 20),
      new THREE.MeshBasicMaterial({ color: 0xFEF08A })
    );
    lantern.position.y = 17.4;
    group.add(lantern);

    const roof = new THREE.Mesh(new THREE.ConeGeometry(1.9, 2.0, 24), redMat);
    roof.position.y = 19.4;
    group.add(roof);

    // Rotating Beacon Pivot
    const beamPivot = new THREE.Group();
    beamPivot.position.set(0, 17.4, 0);
    group.add(beamPivot);

    const spotLight = new THREE.SpotLight(0xFEF08A, 0, 95, Math.PI / 6, 0.5, 1.2);
    spotLight.position.set(0, 0, 0);
    spotLight.target.position.set(35, -12, 0);
    beamPivot.add(spotLight, spotLight.target);

    return { beamPivot, spotLight };
  }

  function createOrnamentalTree(scale) {
    const tree = new THREE.Group();
    tree.scale.setScalar(scale);

    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.32, 0.48, 2.6, 10),
      new THREE.MeshStandardMaterial({ color: 0x5C3A21, roughness: 0.85 })
    );
    trunk.position.y = 1.3;
    trunk.castShadow = true;
    tree.add(trunk);

    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x2E7D32, roughness: 0.7 });
    const f1 = new THREE.Mesh(new THREE.SphereGeometry(1.75, 14, 12), foliageMat);
    f1.position.y = 3.4;
    f1.scale.y = 1.25;
    f1.castShadow = true;
    tree.add(f1);

    const f2 = new THREE.Mesh(new THREE.SphereGeometry(1.25, 14, 12), foliageMat);
    f2.position.y = 5.2;
    f2.scale.y = 1.3;
    f2.castShadow = true;
    tree.add(f2);

    return tree;
  }

  function createMonumentCanvasTexture() {
    const signCanvas = document.createElement('canvas');
    signCanvas.width = 1024;
    signCanvas.height = 640;
    const sctx = signCanvas.getContext('2d');

    sctx.fillStyle = '#18181B';
    sctx.fillRect(0, 0, 1024, 640);
    sctx.strokeStyle = '#E8B931';
    sctx.lineWidth = 14;
    sctx.strokeRect(20, 20, 984, 600);

    sctx.fillStyle = '#E8B931';
    sctx.font = 'bold 30px "Space Grotesk", sans-serif';
    sctx.textAlign = 'center';
    sctx.fillText('INFORMA MARKETS ASIA • PT PAMERINDO INDONESIA', 512, 96);

    sctx.fillStyle = '#FAF8F1';
    sctx.font = 'bold 72px "Space Grotesk", sans-serif';
    sctx.fillText('RIKKARDO L. TOBING', 512, 195);

    sctx.fillStyle = '#06B6D4';
    sctx.font = 'bold 32px "DM Sans", sans-serif';
    sctx.fillText('Senior Web Developer • Data & Tech Support • AI Builder', 512, 260);

    const stats = [
      { v: '8+', l: 'B2B PORTALS' },
      { v: '500K+', l: 'VISITORS' },
      { v: '99.9%', l: 'UPTIME SLA' },
      { v: '5+ YRS', l: 'EXPERIENCE' }
    ];
    stats.forEach((st, idx) => {
      const bx = 64 + idx * 228;
      const by = 330;
      sctx.fillStyle = '#FAF8F1';
      sctx.fillRect(bx, by, 208, 220);
      sctx.fillStyle = '#18181B';
      sctx.font = 'bold 52px "Space Grotesk", sans-serif';
      sctx.fillText(st.v, bx + 104, by + 110);
      sctx.fillStyle = '#D9624A';
      sctx.font = 'bold 22px "Space Grotesk", sans-serif';
      sctx.fillText(st.l, bx + 104, by + 168);
    });

    return new THREE.CanvasTexture(signCanvas);
  }

  function createStudioEnvCubeTexture() {
    // Generate 6 procedural HDR-style studio reflection faces for metallic car paint!
    const faces = [];
    for (let i = 0; i < 6; i++) {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext('2d');
      const grad = ctx.createLinearGradient(0, 0, 0, 256);
      if (i === 2) {
        // Top sky highlight
        grad.addColorStop(0, '#FFFFFF');
        grad.addColorStop(1, '#BAE6FD');
      } else if (i === 3) {
        // Ground bounce
        grad.addColorStop(0, '#334155');
        grad.addColorStop(1, '#0F172A');
      } else {
        // Horizon studio softbox strip
        grad.addColorStop(0, '#E0F2FE');
        grad.addColorStop(0.46, '#FFFFFF');
        grad.addColorStop(0.54, '#38BDF8');
        grad.addColorStop(1, '#1E293B');
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 256);
      faces.push(c);
    }
    const cubeTex = new THREE.CubeTexture(faces);
    cubeTex.needsUpdate = true;
    return cubeTex;
  }

  function createStarfield() {
    const group = new THREE.Group();
    const starGeo = new THREE.BufferGeometry();
    const count = 450;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 0.42;
      const r = 420;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi) + 25;
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 2.2 });
    group.add(new THREE.Points(starGeo, starMat));
    return group;
  }

  function createBillboardCanvasTexture(stop, stopNumber, textureLoader) {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 594;
    const ctx = canvas.getContext('2d');
    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 4;

    function drawCard(loadedImg) {
      ctx.fillStyle = '#FAF8F1';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = '#18181B';
      ctx.lineWidth = 10;
      ctx.strokeRect(14, 14, canvas.width - 28, canvas.height - 28);

      const imgX = 36;
      const imgY = 38;
      const imgW = 450;
      const imgH = canvas.height - 76;

      ctx.fillStyle = '#18181B';
      ctx.fillRect(imgX - 4, imgY - 4, imgW + 8, imgH + 8);

      if (loadedImg) {
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
        const grad = ctx.createLinearGradient(imgX, imgY, imgX + imgW, imgY + imgH);
        grad.addColorStop(0, stop.accent);
        grad.addColorStop(1, '#18181B');
        ctx.fillStyle = grad;
        ctx.fillRect(imgX, imgY, imgW, imgH);
      }

      ctx.fillStyle = '#18181B';
      ctx.fillRect(imgX + 14, imgY + 14, 102, 44);
      ctx.fillStyle = '#E8B931';
      ctx.font = 'bold 24px "Space Grotesk", sans-serif';
      ctx.fillText(`STOP #${String(stopNumber).padStart(2, '0')}`, imgX + 24, imgY + 44);

      const rx = 516;
      const rw = canvas.width - rx - 42;

      ctx.fillStyle = stop.accent;
      ctx.fillRect(rx, 46, Math.min(rw, 390), 42);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 21px "Space Grotesk", sans-serif';
      ctx.fillText(stop.badge.toUpperCase(), rx + 16, 74);

      ctx.fillStyle = '#18181B';
      ctx.font = 'bold 40px "Space Grotesk", sans-serif';
      const nextY = wrapCanvasText(ctx, stop.title, rx, 140, rw, 46, 2);

      ctx.fillStyle = '#D9624A';
      ctx.font = '600 21px "DM Sans", sans-serif';
      const subY = wrapCanvasText(ctx, stop.subtitle, rx, nextY + 12, rw, 28, 2);

      ctx.fillStyle = '#4A463F';
      ctx.font = '21px "DM Sans", sans-serif';
      wrapCanvasText(ctx, stop.desc, rx, subY + 18, rw, 29, 4);

      let tx = rx;
      const ty = canvas.height - 122;
      ctx.font = 'bold 18px "Space Grotesk", sans-serif';
      (stop.tags || []).slice(0, 3).forEach(tag => {
        const tw = ctx.measureText(tag).width + 24;
        if (tx + tw < canvas.width - 36) {
          ctx.fillStyle = '#F2EBDD';
          ctx.fillRect(tx, ty, tw, 34);
          ctx.strokeStyle = '#18181B';
          ctx.lineWidth = 2;
          ctx.strokeRect(tx, ty, tw, 34);
          ctx.fillStyle = '#18181B';
          ctx.fillText(tag, tx + 12, ty + 23);
          tx += tw + 10;
        }
      });

      ctx.fillStyle = '#18181B';
      ctx.fillRect(rx, canvas.height - 74, rw, 42);
      ctx.fillStyle = '#E8B931';
      ctx.font = 'bold 20px "Space Grotesk", sans-serif';
      ctx.fillText('PARK IN RING OR PRESS [E] TO OPEN CASE STUDY ➔', rx + 16, canvas.height - 46);

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

  function populateSkyClouds(cloudsGroup) {
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      roughness: 0.92,
      flatShading: true
    });
    for (let i = 0; i < 16; i++) {
      const cGroup = new THREE.Group();
      const angle = (i / 16) * Math.PI * 2;
      const dist = 185 + (i % 3) * 35;
      cGroup.position.set(Math.cos(angle) * dist, 56 + (i % 4) * 7, Math.sin(angle) * dist);

      const p1 = new THREE.Mesh(new THREE.DodecahedronGeometry(5.8, 1), cloudMat);
      const p2 = new THREE.Mesh(new THREE.DodecahedronGeometry(4.4, 1), cloudMat);
      p2.position.set(4.6, -0.6, 1.2);
      const p3 = new THREE.Mesh(new THREE.DodecahedronGeometry(4.2, 1), cloudMat);
      p3.position.set(-4.4, -0.8, -1.0);
      cGroup.add(p1, p2, p3);
      cGroup.scale.y = 0.56;
      cloudsGroup.add(cGroup);
    }
  }

  function drawMinimap(ctx, w, h, carState, stopObjects, activeStop) {
    ctx.clearRect(0, 0, w, h);

    const cx = w * 0.5;
    const cy = h * 0.5;
    const scale = (Math.min(w, h) * 0.45) / ISLAND_RADIUS;

    ctx.save();
    // Circular Island Disc
    ctx.beginPath();
    ctx.arc(cx, cy, 138 * scale, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(78, 168, 96, 0.35)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(243, 223, 182, 0.75)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // 4 Radial Avenues
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2.5;
    [0, Math.PI * 0.5, Math.PI, Math.PI * 1.5].forEach(ang => {
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(ang) * INNER_RING_RADIUS * scale, cy + Math.sin(ang) * INNER_RING_RADIUS * scale);
      ctx.lineTo(cx + Math.cos(ang) * OUTER_ROAD_RADIUS * scale, cy + Math.sin(ang) * OUTER_ROAD_RADIUS * scale);
      ctx.stroke();
    });

    // Inner Roundabout Ring
    ctx.beginPath();
    ctx.arc(cx, cy, INNER_RING_RADIUS * scale, 0, Math.PI * 2);
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Main Circular Highway Loop
    ctx.beginPath();
    ctx.arc(cx, cy, OUTER_ROAD_RADIUS * scale, 0, Math.PI * 2);
    ctx.strokeStyle = '#1E293B';
    ctx.lineWidth = 5.5;
    ctx.stroke();

    // All 16 Symmetrical Billboard Stops
    stopObjects.forEach(so => {
      const sx = cx + so.parkX * scale;
      const sy = cy + so.parkZ * scale;
      const isCurrent = activeStop === so;
      ctx.beginPath();
      ctx.arc(sx, sy, isCurrent ? 5.2 : 3.3, 0, Math.PI * 2);
      ctx.fillStyle = isCurrent ? '#E8B931' : so.stop.accent;
      ctx.fill();
      ctx.strokeStyle = '#0F172A';
      ctx.lineWidth = 1.2;
      ctx.stroke();
    });

    // Player Car Arrow
    const px = cx + carState.x * scale;
    const py = cy + carState.z * scale;
    ctx.translate(px, py);
    ctx.rotate(-carState.heading + Math.PI);
    ctx.beginPath();
    ctx.moveTo(0, -6.5);
    ctx.lineTo(4.8, 5.2);
    ctx.lineTo(0, 2.8);
    ctx.lineTo(-4.8, 5.2);
    ctx.closePath();
    ctx.fillStyle = '#E11D48';
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

    ctx.fillStyle = '#FAF8F1';
    ctx.fillRect(0, 0, out.width, out.height);

    ctx.strokeStyle = '#18181B';
    ctx.lineWidth = 8;
    ctx.strokeRect(16, 16, out.width - 32, out.height - 32);

    ctx.drawImage(glCanvas, 44, 44, out.width - 88, out.height - 190);
    ctx.strokeRect(44, 44, out.width - 88, out.height - 190);

    ctx.fillStyle = '#18181B';
    ctx.font = 'bold 30px "Space Grotesk", sans-serif';
    ctx.fillText(`📍 ${stopTitle}`, 52, out.height - 88);

    ctx.fillStyle = '#D9624A';
    ctx.font = '600 21px "DM Sans", sans-serif';
    ctx.fillText(`Rikkardo L. Tobing — Interactive 3D Drivefolio Island (${timeMode.toUpperCase()} EDITION)`, 52, out.height - 48);

    ctx.fillStyle = '#E8B931';
    ctx.fillRect(out.width - 280, out.height - 118, 226, 68);
    ctx.strokeStyle = '#18181B';
    ctx.lineWidth = 3;
    ctx.strokeRect(out.width - 280, out.height - 118, 226, 68);
    ctx.fillStyle = '#18181B';
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
