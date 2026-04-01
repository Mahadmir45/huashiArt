const STORAGE_KEY = "huaPortfolioContentV1";
const AUTH_KEY = "huaPortfolioAdminAuthed";

const ADMIN_CREDENTIALS = {
  username: "huaadmin",
  password: "HuaPortfolio2026!"
};

const DRIVE_IDS = {
  portfolio: "1BLY5dTNo9Eqz1kgcpFwxO7pl5sJmGaNw",
  video1: "1jTzsCmNa-16zUy7PYeoH_w2p00X7HScy",
  video2: "1pUeAcYZmaisC8diy86jRhfzIXli06z2E"
};

function drivePreview(id) { return `https://drive.google.com/file/d/${id}/preview`; }
function driveView(id) { return `https://drive.google.com/file/d/${id}/view`; }

const defaultContent = {
  heroEyebrow: "3D Animator & Visual Storyteller",
  heroTitle: "Hi, I'm Hua Shi — I bring characters and worlds to life.",
  heroDescription:
    "I create visual stories and 3D assets using a mix of tools, with a focus on making characters and worlds feel fun, expressive, and alive. Currently studying Computer Animation at Ringling College of Art & Design.",
  aboutParagraph1:
    "I'm currently studying Computer Animation at Ringling College of Art and Design, where I focus on 3D animation, visual development, and lighting. I like combining traditional and digital techniques in my work, which lets me explore storytelling in different ways.",
  aboutParagraph2:
    "I'm especially interested in character-driven stories, visual development, and 3D animation. Outside of animation, I also enjoy poetry, music, and life drawing — all of which influence how I think about storytelling and visuals.",
  contactEmail: "hshi@c.ringling.edu",
  contactPhone: "+1 (941) 225-1558",
  contactLocation: "Sarasota, FL",
  linkedinUrl: "https://www.linkedin.com/in/hua-shi-b1738a389/",
  visualDevPdfUrl: driveView(DRIVE_IDS.portfolio),
  cvPdfUrl: driveView(DRIVE_IDS.portfolio),
  sketchbookIntro:
    "Life drawing, plein air studies, silhouette explorations, and observational work from my sketchbooks.",
  animationProjects: [
    {
      title: "Short Scene Study",
      description:
        "A 20-second scene demonstrating weight, force, and character emotion through pose-to-pose animation.",
      tags: ["Character Acting", "Maya", "Lighting"],
      link: driveView(DRIVE_IDS.video1),
      embedId: DRIVE_IDS.video1,
      year: "2025",
      medium: "3D Animation"
    },
    {
      title: "Final Animation Sequence",
      description:
        "A polished sequence with cinematic framing, environment mood, and stylized character movement.",
      tags: ["Cinematography", "Blocking", "Final Render"],
      link: driveView(DRIVE_IDS.video2),
      embedId: DRIVE_IDS.video2,
      year: "2025",
      medium: "Animation Reel"
    },
    {
      title: "3D Character — Fire Alarm Frog",
      description:
        "Modeled, textured, and lit 3D character render. A small frog trapped inside a fire alarm box — expressive face and moody red lighting.",
      tags: ["3D Modeling", "Texturing", "Lighting"],
      link: driveView(DRIVE_IDS.portfolio),
      thumbnail: "./assets/render_frog_3d.png",
      year: "2025",
      medium: "3D Render"
    },
    {
      title: "3D Character — Temple Guardian",
      description:
        "Fully rendered 3D character with detailed costume, subsurface scattering skin, and dramatic environment lighting.",
      tags: ["Maya", "ZBrush", "Character Render"],
      link: driveView(DRIVE_IDS.portfolio),
      thumbnail: "./assets/render_character_3d.png",
      year: "2025",
      medium: "3D Render"
    }
  ],
  visualDevProjects: [
    {
      title: "Archetype Character Design",
      description:
        "Mythological archetype characters combining cultural motifs with personality-driven silhouettes. Full color concept art with unique costumes and props.",
      tags: ["Character Design", "Concept Art", "Cultural Motifs"],
      link: driveView(DRIVE_IDS.portfolio),
      thumbnail: "./assets/archetype_characters.jpg",
      year: "2025",
      medium: "Character Design"
    },
    {
      title: "Design Lab — Character Lineup",
      description:
        "Clean line-art explorations for a fish, crocodile, and female character — focusing on appeal, silhouette clarity, and expression.",
      tags: ["Line Art", "Character Design", "Appeal"],
      link: driveView(DRIVE_IDS.portfolio),
      thumbnail: "./assets/design_lab.jpg",
      year: "2025",
      medium: "Design Lab"
    },
    {
      title: "Value Lab — Character Studies",
      description:
        "Grayscale value paintings exploring form, light direction, and mood across three distinct character designs.",
      tags: ["Value Painting", "Lighting", "Character"],
      link: driveView(DRIVE_IDS.portfolio),
      thumbnail: "./assets/value_lab.jpg",
      year: "2025",
      medium: "Value Studies"
    },
    {
      title: "Pitch Painting — Sea Monster",
      description:
        "Full-color pitch painting depicting a dramatic confrontation between a lone figure in a boat and a massive sea creature emerging from a cavern.",
      tags: ["Pitch Painting", "Environment", "Narrative"],
      link: driveView(DRIVE_IDS.portfolio),
      thumbnail: "./assets/pitch_painting.jpg",
      year: "2025",
      medium: "Pitch Painting"
    },
    {
      title: "Lip Sync Character Design",
      description:
        "Full character sheet with expression studies and a T-pose turnaround for a Day of the Dead-inspired girl with face paint and traditional costume.",
      tags: ["Expression Sheet", "Turnaround", "Character"],
      link: driveView(DRIVE_IDS.portfolio),
      thumbnail: "./assets/lipsync_character.jpg",
      year: "2025",
      medium: "Character Sheet"
    },
    {
      title: "Worldbuilding Project",
      description:
        "Complete visual development package — creature designs, character turnarounds, environment paintings, prop sheets, and narrative composition frames.",
      tags: ["Worldbuilding", "Environment", "Creature Design"],
      link: driveView(DRIVE_IDS.portfolio),
      thumbnail: "./assets/worldbuilding.jpg",
      year: "2025",
      medium: "Visual Development"
    },
    {
      title: "Pitch Painting — Process",
      description:
        "Storyboard thumbnails, compositional sketches, value studies, and color keys showing the full development pipeline from rough to final.",
      tags: ["Process", "Thumbnails", "Color Keys"],
      link: driveView(DRIVE_IDS.portfolio),
      thumbnail: "./assets/pitch_progress.jpg",
      year: "2025",
      medium: "Process Work"
    },
    {
      title: "Character Turnaround Sheet",
      description:
        "Front, three-quarter, and back views of the lip sync character on a lined turnaround sheet — ready for 3D modeling reference.",
      tags: ["Turnaround", "Model Sheet", "Production"],
      link: driveView(DRIVE_IDS.portfolio),
      thumbnail: "./assets/lipsync_turnaround.jpg",
      year: "2025",
      medium: "Model Sheet"
    }
  ],
  sketchbookImages: [
    { image: "./assets/sketch_cityscape.jpg", caption: "Pen & ink cityscape — plein air, 2025" },
    { image: "./assets/sketch_red_trees.jpg", caption: "Colored pencil — red trees & cat, 2025" },
    { image: "./assets/sketch_pastel_trees.jpg", caption: "Soft pastel landscape — night garden" },
    { image: "./assets/silhouettes_1.jpg", caption: "Silhouette studies #57–86 — shape language" },
    { image: "./assets/silhouettes_2.jpg", caption: "Silhouette studies #87–124 — continued" },
    { image: "./assets/personal_work.jpg", caption: "Personal work — figure drawing, environments, character sketches" },
    { image: "./assets/storytelling.jpg", caption: "Storytelling images — narrative storyboards" },
    { image: "./assets/digital_paintings.jpg", caption: "Digital paintings — portraits, landscapes, fan art" }
  ],
  cv: {
    name: "Hua Shi",
    role: "3D Animator & Visual Development Artist",
    location: "Sarasota, FL",
    email: "hshi@c.ringling.edu",
    phone: "+1 (941) 225-1558",
    linkedin: "linkedin.com/in/hua-shi-b1738a389",
    education: [
      {
        school: "Ringling College of Art and Design",
        detail: "BFA in Computer Animation, Expected May 2027"
      }
    ],
    experience: [
      {
        title: "Computer Animator",
        org: "Ringling College of Art and Design",
        date: "Aug 2023 — Present",
        bullets: [
          "Produced short animation scenes demonstrating believable weight, force, and character emotion.",
          "Designed characters and environments, planned shots with thumbnails, and developed lighting schemes.",
          "Modeled, textured, lit, and animated assets end-to-end using a production workflow."
        ]
      },
      {
        title: "Character Designer",
        org: "Ringling College of Art and Design",
        date: "Sep 2023 — Present",
        bullets: [
          "Developed character design variations for narrative and worldbuilding requirements.",
          "Pitched concepts with supporting visual references and iterated from critique."
        ]
      },
      {
        title: "Concept Artist",
        org: "Ringling College of Art and Design",
        date: "Sep 2024 — May 2025",
        bullets: [
          "Built an original worldbuilding project from concept ideation to presentation boards."
        ]
      },
      {
        title: "Freelance Artist",
        org: "Multiple Clients (Remote)",
        date: "2017 — Present",
        bullets: [
          "Delivered commissioned character illustrations and design packages for independent clients.",
          "Created custom fashion and costume concepts for pre-existing character IPs."
        ]
      }
    ],
    additional: [
      "Personal Tour Guide, China (Nov — Dec 2025)",
      "Member, Photography Club & Table Tennis Club, Ringling College"
    ],
    skills: {
      software: "Autodesk Maya, Adobe Premiere Pro, Adobe Photoshop, Nuke, 3D Coat, ZBrush",
      languages: "Mandarin (Native), English (Professional Proficiency)"
    }
  }
};

let content = loadContent();
let isAuthed = localStorage.getItem(AUTH_KEY) === "true";

function loadContent() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(defaultContent);
  try {
    return Object.assign(structuredClone(defaultContent), JSON.parse(raw));
  } catch (_) {
    return structuredClone(defaultContent);
  }
}

function saveContent() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}

function setTextByKey() {
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    if (key && content[key]) el.textContent = content[key];
  });
}

function renderTopInfo() {
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };
  set("contactEmail", content.contactEmail);
  set("contactPhone", content.contactPhone);
  set("contactLocation", content.contactLocation);
  set("footerEmail", content.contactEmail);
  set("footerPhone", content.contactPhone);
  set("year", new Date().getFullYear());

  const linkedin = document.getElementById("linkedinLink");
  if (linkedin) linkedin.href = content.linkedinUrl;
  const vdPdf = document.getElementById("visualDevPdfLink");
  if (vdPdf) vdPdf.href = content.visualDevPdfUrl;
  const cvPdf = document.getElementById("cvPdfLink");
  if (cvPdf) cvPdf.href = content.cvPdfUrl;
}

function renderProjects(list, rootId) {
  const root = document.getElementById(rootId);
  if (!root) return;
  root.innerHTML = "";
  list.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    const tags = (project.tags || []).map((t) => `<span>${t}</span>`).join("");

    let visual;
    if (project.embedId) {
      visual = `<div class="project-embed">
        <iframe src="${drivePreview(project.embedId)}" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>`;
    } else {
      const thumb = project.thumbnail
        ? `<img src="${project.thumbnail}" alt="${project.title}" loading="lazy" />`
        : "";
      visual = `<div class="project-thumb">
        ${thumb}
        <div class="project-overlay">
          <a href="${project.link}" target="_blank" rel="noreferrer">Open &nearr;</a>
        </div>
      </div>`;
    }

    card.innerHTML = `
      ${visual}
      <div class="project-body">
        <div class="project-meta">
          <span>${project.medium || "Project"}</span>
          <span>${project.year || ""}</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">${tags}</div>
      </div>
    `;
    root.appendChild(card);
  });
}

function renderSketchbook() {
  const root = document.getElementById("sketchbookGrid");
  if (!root) return;
  root.innerHTML = "";
  content.sketchbookImages.forEach((item) => {
    const card = document.createElement("article");
    card.className = "sketch-card reveal";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.caption}" loading="lazy" />
      <p>${item.caption}</p>
    `;
    card.addEventListener("click", () => openLightbox(item.image, item.caption));
    root.appendChild(card);
  });
}

function renderCv() {
  const cv = content.cv;
  const el = document.getElementById("cvPreview");
  if (!el) return;

  const edu = cv.education
    .map((e) => `<li><strong>${e.school}</strong> — ${e.detail}</li>`)
    .join("");

  const exp = cv.experience
    .map((e) => {
      const bullets = e.bullets.map((b) => `<li>${b}</li>`).join("");
      return `
        <div class="cv-entry">
          <h4>${e.title}, ${e.org} <span>${e.date}</span></h4>
          <ul>${bullets}</ul>
        </div>`;
    })
    .join("");

  const add = cv.additional.map((a) => `<li>${a}</li>`).join("");

  el.innerHTML = `
    <div class="cv-header">
      <h3>${cv.name}</h3>
      <p>${cv.role} &middot; ${cv.location} &middot;
        <a href="mailto:${cv.email}">${cv.email}</a> &middot; ${cv.phone} &middot;
        <a href="https://${cv.linkedin}" target="_blank" rel="noreferrer">${cv.linkedin}</a>
      </p>
    </div>
    <p class="cv-section-title">Education</p>
    <ul>${edu}</ul>
    <p class="cv-section-title">Experience</p>
    ${exp}
    <p class="cv-section-title">Additional Experience &amp; Activities</p>
    <ul>${add}</ul>
    <p class="cv-section-title">Skills</p>
    <p><strong>Software:</strong> ${cv.skills.software}</p>
    <p><strong>Languages:</strong> ${cv.skills.languages}</p>
  `;
}

function renderAll() {
  setTextByKey();
  renderTopInfo();
  renderProjects(content.animationProjects, "animationGrid");
  renderProjects(content.visualDevProjects, "visualDevGrid");
  renderSketchbook();
  renderCv();
  observeReveals();
}

/* ---- lightbox ---- */
function openLightbox(src, alt) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  img.src = src;
  img.alt = alt || "";
  lb.classList.add("open");
  lb.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden", "true");
  document.getElementById("lightboxImg").src = "";
}

document.querySelector(".lightbox-close")?.addEventListener("click", closeLightbox);
document.getElementById("lightbox")?.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeLightbox();
});

/* ---- scroll reveal ---- */
function observeReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => observer.observe(el));
}

/* ---- sticky header ---- */
function initHeader() {
  const header = document.getElementById("siteHeader");
  if (!header) return;
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---- active nav ---- */
function initActiveNav() {
  const links = document.querySelectorAll(".site-nav a[href^='#']");
  const sections = [...links].map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);

  function update() {
    let current = "";
    sections.forEach((sec) => {
      if (sec.getBoundingClientRect().top <= 160) current = sec.id;
    });
    links.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
    });
  }
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ---- admin panel ---- */
function initAdmin() {
  const panel = document.getElementById("adminPanel");
  const backdrop = document.getElementById("adminBackdrop");
  const openBtn = document.getElementById("adminOpenBtn");
  const closeBtn = document.getElementById("adminCloseBtn");
  const loginBtn = document.getElementById("adminLoginBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const saveBtn = document.getElementById("saveContentBtn");
  const resetBtn = document.getElementById("resetContentBtn");
  const loginView = document.getElementById("loginView");
  const editorView = document.getElementById("editorView");
  const editorFields = document.getElementById("editorFields");
  const loginError = document.getElementById("loginError");
  const editorStatus = document.getElementById("editorStatus");

  function open() {
    panel.classList.add("open");
    backdrop.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    backdrop.setAttribute("aria-hidden", "false");
    renderUi();
  }

  function close() {
    panel.classList.remove("open");
    backdrop.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
    backdrop.setAttribute("aria-hidden", "true");
  }

  function renderUi() {
    loginView.classList.toggle("hidden", isAuthed);
    editorView.classList.toggle("hidden", !isAuthed);
    if (!isAuthed) return;

    const fields = [
      "heroEyebrow", "heroTitle", "heroDescription",
      "aboutParagraph1", "aboutParagraph2",
      "contactEmail", "contactPhone", "contactLocation",
      "linkedinUrl", "visualDevPdfUrl", "cvPdfUrl", "sketchbookIntro"
    ];

    editorFields.innerHTML = fields.map((key) => {
      const val = content[key] || "";
      const long = val.length > 80;
      const ctrl = long
        ? `<textarea data-field="${key}">${val}</textarea>`
        : `<input data-field="${key}" value="${val}" />`;
      return `<div><label>${key}</label>${ctrl}</div>`;
    }).join("");

    const jsonKeys = ["animationProjects", "visualDevProjects", "sketchbookImages", "cv"];
    editorFields.innerHTML += jsonKeys.map((key) =>
      `<div><label>${key} (JSON)</label><textarea data-json-field="${key}" style="min-height:120px">${JSON.stringify(content[key], null, 2)}</textarea></div>`
    ).join("");
  }

  function handleLogin() {
    const u = document.getElementById("adminUsername").value.trim();
    const p = document.getElementById("adminPassword").value;
    if (u === ADMIN_CREDENTIALS.username && p === ADMIN_CREDENTIALS.password) {
      isAuthed = true;
      localStorage.setItem(AUTH_KEY, "true");
      loginError.textContent = "";
      editorStatus.textContent = "";
      renderUi();
      return;
    }
    loginError.textContent = "Invalid credentials.";
  }

  openBtn.addEventListener("click", (e) => { e.preventDefault(); open(); });
  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", close);
  loginBtn.addEventListener("click", handleLogin);
  document.getElementById("adminPassword").addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleLogin();
  });

  logoutBtn.addEventListener("click", () => {
    isAuthed = false;
    localStorage.setItem(AUTH_KEY, "false");
    editorStatus.textContent = "";
    renderUi();
  });

  saveBtn.addEventListener("click", () => {
    if (!isAuthed) return;
    editorFields.querySelectorAll("[data-field]").forEach((inp) => {
      content[inp.getAttribute("data-field")] = inp.value.trim();
    });
    try {
      editorFields.querySelectorAll("[data-json-field]").forEach((inp) => {
        content[inp.getAttribute("data-json-field")] = JSON.parse(inp.value);
      });
    } catch (_) {
      editorStatus.textContent = "Invalid JSON — please fix and try again.";
      return;
    }
    saveContent();
    renderAll();
    editorStatus.textContent = "Saved.";
  });

  resetBtn.addEventListener("click", () => {
    if (!isAuthed) return;
    content = structuredClone(defaultContent);
    saveContent();
    renderAll();
    renderUi();
    editorStatus.textContent = "Reset to defaults.";
  });

  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

/* ---- mobile menu ---- */
function initMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("siteNav");
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });
}

/* ---- boot ---- */
renderAll();
initHeader();
initActiveNav();
initAdmin();
initMobileMenu();
