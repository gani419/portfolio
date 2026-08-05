/* ==========================================================================
   PORTFOLIO ENGINE - GANGODI GANESH
   ========================================================================== */

let portfolioData = {
  personal: {
    name: "Gangodi Ganesh",
    title: "Senior Cross-Platform Developer",
    startDate: "2018-10-18",
    primaryFramework: "React Native",
    tagline: "Building high-performance mobile & web apps with React Native, Flutter, Ionic & Nuxt.js.",
    about: "Senior Cross-Platform Developer with over 7 years of hands-on expertise building enterprise mobile & web applications. Started in October 2018 as a Native Android Developer, specializing in React Native (primary framework), Flutter, Ionic, and Nuxt.js. Proven track record of engineering published app releases on Google Play Store and Apple App Store, real-time LiveKit streaming, automated WhatsApp CRM engines, and multi-gateway payment infrastructures.",
    mobile: "+91 6362389840",
    email: "ganeshgangodi@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    profilePhoto: "assets/images/profile-avatar.png",
    profileScreen: "assets/images/qspiders-profile-screen.png"
  },
  stats: [
    { label: "Years Experience", value: "7+", id: "exp-counter" },
    { label: "Primary Framework", value: "React Native" },
    { label: "App Store Releases", value: "3 Apps" },
    { label: "Enterprise Projects", value: "25+" }
  ],
  publishedApps: [
    {
      id: "student-android",
      title: "QSpiders Student App (Android)",
      platform: "Android",
      store: "Google Play Store",
      storeUrl: "https://play.google.com/store/apps/details?id=com.qsp.student&pli=1",
      iconClass: "fa-brands fa-google-play",
      badgeColor: "#01875f",
      summary: "Official Android learning app for QSpiders students featuring course enrollments, attendance, and batch tracking.",
      tags: ["React Native", "Android Native", "Razorpay", "Socket.io"],
      screenshot: "assets/images/qspiders-profile-screen.png"
    },
    {
      id: "trainer-android",
      title: "QSpiders Trainer App (Android)",
      platform: "Android",
      store: "Google Play Store",
      storeUrl: "https://play.google.com/store/apps/details?id=com.qspiders.trainer",
      iconClass: "fa-brands fa-google-play",
      badgeColor: "#01875f",
      summary: "Trainer companion mobile app for scheduling live classes, managing attendance, and posting batch feedback.",
      tags: ["React Native", "LiveKit", "WebSockets", "Firebase"],
      screenshot: "assets/images/qspiders-batches-screen.png"
    },
    {
      id: "student-ios",
      title: "Student QSpiders (iOS)",
      platform: "iOS",
      store: "Apple App Store",
      storeUrl: "https://apps.apple.com/in/app/student-qspiders/id6473621668",
      iconClass: "fa-brands fa-apple",
      badgeColor: "#0070c9",
      summary: "Official iOS app on Apple App Store providing seamless learning workflows and payment gateways for iPhone & iPad.",
      tags: ["React Native iOS", "Swift Native Modules", "In-App Purchases"],
      screenshot: "assets/images/qspiders-courses-screen.png"
    }
  ],
  appScreenshots: [
    {
      id: "screen-profile",
      title: "Profile & 100% Completion Module",
      category: "Profile & Settings",
      description: "Comprehensive student profile UI featuring registration progress, personal details accordion, and contact information.",
      image: "assets/images/qspiders-profile-screen.png"
    },
    {
      id: "screen-courses",
      title: "Enrolled Courses & Fee Payment Portal",
      category: "Courses & Payments",
      description: "Interactive course enrollment dashboard with one-shot / partial payment breakdowns, branch details, and transaction history.",
      image: "assets/images/qspiders-courses-screen.png"
    },
    {
      id: "screen-batches",
      title: "Active Batches & Attendance Tracker",
      category: "Live Classroom",
      description: "Real-time class schedule management showing attendance percentages, online class join links, trainer feedback, and QR code access.",
      image: "assets/images/qspiders-batches-screen.png"
    },
    {
      id: "screen-registration",
      title: "User Registration & OTP Verification",
      category: "Authentication",
      description: "Sleek onboarding screen with WhatsApp number validation, double OTP verification (Mobile & Email), and password strength indicators.",
      image: "assets/images/qspiders-registration-screen.png"
    }
  ],
  skills: {
    mobile: [
      { name: "React Native", level: 95, badge: "Primary Framework" },
      { name: "Flutter", level: 90, badge: "Core Specialist" },
      { name: "Native Android (Java/Kotlin)", level: 92, badge: "Foundation (Oct 2018)" },
      { name: "iOS / Swift Bridge", level: 88, badge: "App Store Releases" }
    ],
    web: [
      { name: "Nuxt.js / Vue.js", level: 90, badge: "Web Framework" },
      { name: "JavaScript / TypeScript", level: 95, badge: "Language Core" },
      { name: "HTML5 / Advanced CSS3", level: 95, badge: "Responsive UI" }
    ],
    realtime: [
      { name: "LiveKit Video Streaming", level: 92, badge: "Real-time Media" },
      { name: "WebSockets / Socket.io", level: 94, badge: "Bidirectional Data" }
    ],
    gateways: [
      { name: "Razorpay Payment Gateway", level: 95, badge: "Fintech" },
      { name: "Zoho Payments", level: 90, badge: "Fintech" },
      { name: "Airtel Payments", level: 88, badge: "Fintech" },
      { name: "MSG91 SMS Gateway", level: 92, badge: "Messaging" },
      { name: "WhatsApp Business API", level: 94, badge: "CRM Automation" }
    ]
  },
  projects: [
    {
      id: "qspiders-app-ecosystem",
      title: "QSpiders Published App Ecosystem (Android & iOS)",
      category: "mobile",
      framework: "React Native, Android & iOS",
      summary: "Enterprise EdTech suite live on Play Store and App Store with 100k+ student & trainer users.",
      description: "Architected and delivered the core QSpiders mobile application suite available on Android (Student & Trainer apps) and iOS. Integrated real-time attendance, live video classroom streaming, multi-gateway fee payments, and automated WhatsApp registration pipelines.",
      highlights: [
        "Published Student Android app on Google Play Store (com.qsp.student)",
        "Published Trainer Android app on Google Play Store (com.qspiders.trainer)",
        "Published Student iOS app on Apple App Store (id6473621668)",
        "Cross-platform React Native code architecture with custom native Android & iOS modules",
        "Integrated dual OTP verification (MSG91 + WhatsApp API) & Razorpay/Zoho payment flows"
      ],
      tags: ["React Native", "Play Store", "App Store", "Android Native", "iOS Swift", "Razorpay"],
      icon: "fa-mobile-screen-button",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.qsp.student&pli=1",
      appStoreUrl: "https://apps.apple.com/in/app/student-qspiders/id6473621668",
      screenshot: "assets/images/qspiders-profile-screen.png"
    },
    {
      id: "live-classroom",
      title: "Interactive Live Classroom & Video Streaming Hub",
      category: "mobile",
      framework: "React Native & LiveKit",
      summary: "Real-time low-latency video streaming platform connecting trainers & students.",
      description: "Engineered a high-concurrency real-time live classroom streaming application. Built with LiveKit SDK, WebSockets, and Socket.io for bidirectional student-trainer interactions, live chat, hand-raising, and dynamic adaptive streaming across React Native mobile and Nuxt.js web apps.",
      highlights: [
        "Sub-second latency video/audio room broadcasting with LiveKit",
        "Interactive real-time student-trainer Q&A via Socket.io",
        "Cross-platform support for mobile (React Native) and desktop web (Nuxt.js)",
        "Bandwidth-adaptive streaming optimized for low-network environments"
      ],
      tags: ["React Native", "LiveKit", "WebSockets", "Socket.io", "Nuxt.js"],
      icon: "fa-video",
      screenshot: "assets/images/qspiders-batches-screen.png"
    },
    {
      id: "whatsapp-crm",
      title: "WhatsApp Promotional & Counselor CRM Platform",
      category: "web",
      framework: "Nuxt.js & WhatsApp API",
      summary: "Automated WhatsApp course promotional system with real-time counselor response desk.",
      description: "Architected a dual-component marketing and CRM web solution built using Nuxt.js. Automatically dispatches targeted course details and promotional broadcasts to prospective students. When students reply back, incoming messages are routed to active counselors in real-time via Socket.io.",
      highlights: [
        "Automated WhatsApp promotion dispatcher for targeted student outreach",
        "Instant messaging routing to counselor dashboard upon student response",
        "Real-time status tracking & conversion analytics built with Nuxt.js",
        "Integrated MSG91 fallback SMS verification triggers"
      ],
      tags: ["Nuxt.js", "WhatsApp API", "Socket.io", "MSG91", "Node.js"],
      icon: "fa-comments",
      screenshot: "assets/images/qspiders-registration-screen.png"
    },
    {
      id: "fintech-engine",
      title: "Multi-Gateway Payment & Subscription Infrastructure",
      category: "integrations",
      framework: "Razorpay, Zoho, Airtel & MSG91",
      summary: "Unified payment processing, automated invoicing, and SMS transactional alert engine.",
      description: "Integrated a multi-provider payment ecosystem supporting Razorpay, Zoho Payments, Airtel Money, and MSG91 SMS alerts. Designed resilient payment flows, auto-reconciliation, webhook listeners, and instant OTP verification.",
      highlights: [
        "Seamless integration with Razorpay, Zoho Payments, and Airtel Money",
        "Automated instant receipt generation and SMS notifications via MSG91",
        "Resilient webhooks handling payment confirmation retries",
        "Universal integration module used across React Native, Flutter, and Nuxt.js applications"
      ],
      tags: ["Razorpay", "Zoho", "Airtel Payments", "MSG91", "React Native", "Flutter"],
      icon: "fa-credit-card",
      screenshot: "assets/images/qspiders-courses-screen.png"
    }
  ],
  experience: [
    {
      period: "2022 - PRESENT",
      role: "Senior Cross-Platform Developer",
      company: "Test Yantra Software Solutions",
      details: "Cross-platform developer overseeing cross-platform mobile applications (React Native, Flutter) published on Google Play Store and Apple App Store, and Nuxt.js web apps. Spearheaded real-time streaming architectures (LiveKit) and complex gateway integrations (Razorpay, Zoho, MSG91, WhatsApp Business)."
    },
    {
      period: "2020 - 2022",
      role: "Senior Mobile Developer (React Native / Flutter)",
      company: "Test Yantra Software Solutions",
      details: "Engineered hybrid & cross-platform apps for iOS and Android using React Native as primary framework. Built Socket.io chat apps, payment gateways, and push notification pipelines."
    },
    {
      period: "OCT 18, 2018 - 2020",
      role: "Native Android Developer",
      company: "Test Yantra Software Solutions",
      details: "Began professional career on October 18, 2018 developing native Android applications using Java/Kotlin, Android SDK, SQLite, Retrofit, and Material Design."
    }
  ]
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadSavedCustomization();
  calculateYearsOfExperience();
  renderStats();
  renderPublishedApps();
  renderScreenshots();
  renderSkills('all');
  renderProjects('all');
  renderTimeline();
  setupEventListeners();
});

// Calculate Exact Years of Experience from Oct 18, 2018
function calculateYearsOfExperience() {
  const startDate = new Date(portfolioData.personal.startDate);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - startDate);
  const diffYears = (diffTime / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);
  
  portfolioData.stats[0].value = `${diffYears}+ Yrs`;
  
  const expElement = document.getElementById('exp-counter');
  if (expElement) {
    expElement.textContent = `${diffYears}+ Yrs`;
  }
}

// Render Key Stats Bar
function renderStats() {
  const statsContainer = document.getElementById('stats-container');
  if (!statsContainer) return;

  statsContainer.innerHTML = portfolioData.stats.map(stat => `
    <div class="stat-item">
      <div class="stat-value" ${stat.id ? `id="${stat.id}"` : ''}>${stat.value}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');
}

// Render Published App Releases (Play Store & App Store icons)
function renderPublishedApps() {
  const container = document.getElementById('published-apps-container');
  if (!container) return;

  container.innerHTML = portfolioData.publishedApps.map(app => `
    <div class="app-card">
      <div class="app-card-header">
        <div class="app-store-badge" style="background: ${app.badgeColor};">
          <i class="${app.iconClass}"></i> ${app.store}
        </div>
        <span class="app-platform-pill">${app.platform}</span>
      </div>

      <div class="app-card-body">
        <h3 class="app-card-title">${app.title}</h3>
        <p class="app-card-summary">${app.summary}</p>
        
        <div class="project-tags" style="margin-bottom: 20px;">
          ${app.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>

      <div class="app-card-footer">
        <a href="${app.storeUrl}" target="_blank" class="btn btn-store-direct">
          <i class="${app.iconClass}"></i> Download on ${app.store}
        </a>
      </div>
    </div>
  `).join('');
}

// Render App Screenshots & UI Development Showcase
function renderScreenshots() {
  const container = document.getElementById('screenshots-container');
  if (!container) return;

  container.innerHTML = portfolioData.appScreenshots.map(screen => `
    <div class="screenshot-card" onclick="openImageLightbox('${screen.image}', '${screen.title}', '${screen.description}')">
      <div class="screenshot-img-wrap">
        <img src="${screen.image}" alt="${screen.title}" class="screenshot-img">
        <div class="screenshot-overlay">
          <i class="fa-solid fa-expand expand-icon"></i>
          <span>Click to Enlarge</span>
        </div>
      </div>
      <div class="screenshot-info">
        <div class="screenshot-category">${screen.category}</div>
        <h4 class="screenshot-title">${screen.title}</h4>
        <p class="screenshot-desc">${screen.description}</p>
      </div>
    </div>
  `).join('');
}

// Render Skills Matrix
function renderSkills(category) {
  const container = document.getElementById('skills-container');
  if (!container) return;

  let allSkills = [];
  if (category === 'all') {
    Object.keys(portfolioData.skills).forEach(cat => {
      allSkills = allSkills.concat(portfolioData.skills[cat]);
    });
  } else if (portfolioData.skills[category]) {
    allSkills = portfolioData.skills[category];
  }

  container.innerHTML = allSkills.map(skill => `
    <div class="skill-card">
      <div class="skill-header">
        <span class="skill-name">${skill.name}</span>
        <span class="skill-badge">${skill.badge}</span>
      </div>
      <div class="skill-bar-bg">
        <div class="skill-bar-fill" style="width: ${skill.level}%;"></div>
      </div>
      <div style="text-align: right; font-size: 0.75rem; color: var(--text-muted); margin-top: 6px; font-family: var(--font-code);">
        ${skill.level}% Mastered
      </div>
    </div>
  `).join('');
}

// Render Projects Showcase
function renderProjects(filter) {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const filteredProjects = filter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  container.innerHTML = filteredProjects.map(proj => `
    <div class="project-card">
      <div>
        ${proj.screenshot ? `
          <div class="project-card-banner" onclick="openImageLightbox('${proj.screenshot}', '${proj.title}', '${proj.summary}')">
            <img src="${proj.screenshot}" alt="${proj.title}">
            <div class="banner-overlay"><i class="fa-solid fa-eye"></i> View App Screenshot</div>
          </div>
        ` : ''}
        
        <div class="project-card-inner">
          <div class="project-icon-box">
            <i class="fa-solid ${proj.icon || 'fa-code'}"></i>
          </div>
          <h3 class="project-title">${proj.title}</h3>
          <div class="project-framework"><i class="fa-solid fa-layer-group"></i> ${proj.framework}</div>
          <p class="project-summary">${proj.summary}</p>
          
          <div class="project-tags">
            ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>

      <div class="project-card-footer">
        ${proj.playStoreUrl ? `
          <a href="${proj.playStoreUrl}" target="_blank" class="btn-mini-store playstore" title="Google Play Store">
            <i class="fa-brands fa-google-play"></i> Play Store
          </a>
        ` : ''}
        ${proj.appStoreUrl ? `
          <a href="${proj.appStoreUrl}" target="_blank" class="btn-mini-store appstore" title="Apple App Store">
            <i class="fa-brands fa-apple"></i> App Store
          </a>
        ` : ''}
        <button class="btn-link view-modal-btn" data-id="${proj.id}">
          View Architecture <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  `).join('');

  // Attach modal trigger listeners
  document.querySelectorAll('.view-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projId = e.currentTarget.getAttribute('data-id');
      openProjectModal(projId);
    });
  });
}

// Lightbox image viewer modal
function openImageLightbox(imgUrl, title, description) {
  const modalBody = document.getElementById('modal-body');
  const modalBackdrop = document.getElementById('project-modal');

  modalBody.innerHTML = `
    <div style="text-align: center; margin-bottom: 16px;">
      <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 6px;">${title}</h3>
      <p style="color: var(--text-muted); font-size: 0.9rem;">${description}</p>
    </div>
    <div style="max-height: 70vh; overflow-y: auto; text-align: center; background: #000; border-radius: 12px; padding: 12px; margin-bottom: 20px;">
      <img src="${imgUrl}" alt="${title}" style="max-width: 100%; max-height: 65vh; border-radius: 8px; object-fit: contain; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
    </div>
    <button class="btn btn-primary" onclick="closeProjectModal()" style="width: 100%; justify-content: center;">
      Close Preview
    </button>
  `;

  modalBackdrop.classList.add('active');
}

// Open Project Detail Modal
function openProjectModal(projId) {
  const proj = portfolioData.projects.find(p => p.id === projId);
  if (!proj) return;

  const modalBody = document.getElementById('modal-body');
  const modalBackdrop = document.getElementById('project-modal');

  modalBody.innerHTML = `
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
      <div class="project-icon-box" style="margin-bottom: 0;">
        <i class="fa-solid ${proj.icon}"></i>
      </div>
      <div>
        <h2 style="font-size: 1.5rem; font-weight: 800;">${proj.title}</h2>
        <div style="color: var(--primary-cyan); font-weight: 600; font-size: 0.9rem;">${proj.framework}</div>
      </div>
    </div>

    ${proj.screenshot ? `
      <div style="margin-bottom: 20px; text-align: center;">
        <img src="${proj.screenshot}" alt="${proj.title}" style="max-height: 250px; border-radius: 10px; border: 1px solid var(--border-glass);">
      </div>
    ` : ''}

    <p style="color: var(--text-muted); line-height: 1.7; margin-bottom: 24px; font-size: 0.95rem;">
      ${proj.description}
    </p>

    <h4 style="font-weight: 700; margin-bottom: 12px; color: var(--text-main);">Key Highlights & Engineering Features</h4>
    <ul style="margin-left: 20px; color: var(--text-muted); margin-bottom: 24px; line-height: 1.8; font-size: 0.9rem;">
      ${proj.highlights.map(h => `<li style="margin-bottom: 6px;">${h}</li>`).join('')}
    </ul>

    ${(proj.playStoreUrl || proj.appStoreUrl) ? `
      <h4 style="font-weight: 700; margin-bottom: 12px; color: var(--text-main);">Published App Links</h4>
      <div style="display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap;">
        ${proj.playStoreUrl ? `<a href="${proj.playStoreUrl}" target="_blank" class="btn btn-store-direct" style="background: #01875f;"><i class="fa-brands fa-google-play"></i> Google Play Store</a>` : ''}
        ${proj.appStoreUrl ? `<a href="${proj.appStoreUrl}" target="_blank" class="btn btn-store-direct" style="background: #0070c9;"><i class="fa-brands fa-apple"></i> Apple App Store</a>` : ''}
      </div>
    ` : ''}

    <button class="btn btn-primary" onclick="closeProjectModal()" style="width: 100%; justify-content: center;">
      Close Details
    </button>
  `;

  modalBackdrop.classList.add('active');
}

function closeProjectModal() {
  document.getElementById('project-modal').classList.remove('active');
}

// Render Experience Timeline
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = portfolioData.experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-period">${exp.period}</div>
        <div class="timeline-role">${exp.role}</div>
        <div class="timeline-company">${exp.company}</div>
        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">${exp.details}</p>
      </div>
    </div>
  `).join('');
}

// Setup Event Listeners
function setupEventListeners() {
  // Skill Tabs
  document.querySelectorAll('#skill-tabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('#skill-tabs .tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderSkills(e.target.getAttribute('data-category'));
    });
  });

  // Project Filters
  document.querySelectorAll('#project-filters .filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('#project-filters .filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderProjects(e.target.getAttribute('data-filter'));
    });
  });

  // Modal Close buttons
  document.getElementById('modal-close-btn').addEventListener('click', closeProjectModal);
  document.getElementById('project-modal').addEventListener('click', (e) => {
    if (e.target.id === 'project-modal') closeProjectModal();
  });

  // Theme Switcher Toggle Cycle (Executive Dark, Corporate Navy, Enterprise Light)
  const themes = [
    { name: 'dark', label: 'Executive Slate Dark' },
    { name: 'corporate-navy', label: 'Corporate Navy' },
    { name: 'light', label: 'Enterprise Light' }
  ];
  let currentThemeIndex = 0;
  document.getElementById('theme-toggle').addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const selectedTheme = themes[currentThemeIndex];
    document.documentElement.setAttribute('data-theme', selectedTheme.name);
    showToast(`Switched theme to ${selectedTheme.label}`);
  });

  // Customizer Drawer open/close
  const customizerDrawer = document.getElementById('customizer-drawer');
  document.getElementById('open-customizer').addEventListener('click', () => {
    populateCustomizerForm();
    customizerDrawer.classList.add('open');
  });
  document.getElementById('close-customizer').addEventListener('click', () => {
    customizerDrawer.classList.remove('open');
  });

  // Customizer Form submit
  document.getElementById('customizer-form').addEventListener('submit', (e) => {
    e.preventDefault();
    applyCustomization();
    customizerDrawer.classList.remove('open');
    showToast('Customized portfolio updated live!');
  });

  // Export JSON button
  document.getElementById('export-json-btn').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(portfolioData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "portfolio-data.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Portfolio configuration exported!');
  });

  // Copy Phone & Email Buttons
  const copyPhoneBtn = document.getElementById('copy-phone-btn');
  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(portfolioData.personal.mobile).then(() => {
        showToast(`Phone number ${portfolioData.personal.mobile} copied!`);
      }).catch(() => {
        showToast(`Mobile: ${portfolioData.personal.mobile}`);
      });
    });
  }

  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(portfolioData.personal.email).then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        showToast(`Email: ${portfolioData.personal.email}`);
      });
    });
  }
}

// Populate Customizer Form inputs
function populateCustomizerForm() {
  document.getElementById('cust-name').value = portfolioData.personal.name;
  document.getElementById('cust-title').value = portfolioData.personal.title;
  document.getElementById('cust-phone').value = portfolioData.personal.mobile;
  document.getElementById('cust-email').value = portfolioData.personal.email;
  document.getElementById('cust-bio').value = portfolioData.personal.about;
}

// Apply Customization from Drawer inputs
function applyCustomization() {
  portfolioData.personal.name = document.getElementById('cust-name').value;
  portfolioData.personal.title = document.getElementById('cust-title').value;
  portfolioData.personal.mobile = document.getElementById('cust-phone').value;
  portfolioData.personal.email = document.getElementById('cust-email').value;
  portfolioData.personal.about = document.getElementById('cust-bio').value;

  // Save to LocalStorage
  localStorage.setItem('portfolio_custom_data', JSON.stringify(portfolioData));

  // Update DOM UI elements
  document.getElementById('nav-name').textContent = portfolioData.personal.name;
  document.getElementById('nav-title').textContent = portfolioData.personal.title;
  document.getElementById('hero-name').textContent = portfolioData.personal.name;
  document.getElementById('hero-main-title').textContent = portfolioData.personal.title;
  document.getElementById('hero-bio').textContent = portfolioData.personal.about;
  document.getElementById('send-mail-link').setAttribute('href', `mailto:${portfolioData.personal.email}`);

  // Re-render
  calculateYearsOfExperience();
  renderStats();
  renderPublishedApps();
  renderScreenshots();
}

// Load Saved Customization from LocalStorage if available
function loadSavedCustomization() {
  const saved = localStorage.getItem('portfolio_custom_data');
  if (saved) {
    try {
      portfolioData = JSON.parse(saved);
    } catch (e) {
      console.warn("Could not parse saved custom data");
    }
  }
}

// Toast notification helper
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
