const STORAGE_KEY = "huaPortfolioContentV2";
const AUTH_KEY = "huaPortfolioAdminAuthed";
const ADMIN_CREDENTIALS = { username: "huaadmin", password: "HuaPortfolio2026!" };

const DRIVE_IDS = {
  portfolio: "1BLY5dTNo9Eqz1kgcpFwxO7pl5sJmGaNw",
  videoOg1: "1jTzsCmNa-16zUy7PYeoH_w2p00X7HScy",
  videoOg2: "1pUeAcYZmaisC8diy86jRhfzIXli06z2E",
  video3: "1UeSD0hED-E6L3eYRG8b6IUwGJYJFWxtY",
  video4: "1gWcRUBGk51DIxHpvvDKuTN03-lPDlUW1",
  video5: "15QN020WLvpRstIgsZ41NbaMeMa_bhiHG"
};

function drivePreview(id) { return `https://drive.google.com/file/d/${id}/preview`; }
function driveView(id) { return `https://drive.google.com/file/d/${id}/view`; }

const defaultContent = {
  heroEyebrow: "3D Animator & Visual Storyteller",
  heroTitle: "Hi, I'm Hua Shi — I bring characters and worlds to life.",
  heroDescription: "I create visual stories and 3D assets using a mix of tools, with a focus on making characters and worlds feel fun, expressive, and alive. Currently studying Computer Animation at Ringling College of Art & Design.",
  aboutParagraph1: "I'm currently studying Computer Animation at Ringling College of Art and Design, where I focus on 3D animation, visual development, and lighting. I like combining traditional and digital techniques in my work, which lets me explore storytelling in different ways.",
  aboutParagraph2: "I'm especially interested in character-driven stories, visual development, and 3D animation. Outside of animation, I also enjoy poetry, music, and life drawing — all of which influence how I think about storytelling and visuals.",
  contactEmail: "hshi@c.ringling.edu",
  contactPhone: "+1 (941) 225-1558",
  contactLocation: "Sarasota, FL",
  linkedinUrl: "https://www.linkedin.com/in/hua-shi-b1738a389/",
  visualDevPdfUrl: driveView(DRIVE_IDS.portfolio),
  cvPdfUrl: driveView(DRIVE_IDS.portfolio),
  sketchbookIntro: "Life drawing, plein air studies, silhouette explorations, and observational work from my sketchbooks.",
  animationProjects: [
    { title: "Short Scene Study", description: "A 20-second scene demonstrating weight, force, and character emotion through pose-to-pose animation.", tags: ["Character Acting", "Maya", "Lighting"], link: driveView(DRIVE_IDS.videoOg1), embedId: DRIVE_IDS.videoOg1, year: "2025", medium: "3D Animation" },
    { title: "Final Animation Sequence", description: "A polished sequence with cinematic framing, environment mood, and stylized character movement.", tags: ["Cinematography", "Blocking", "Final Render"], link: driveView(DRIVE_IDS.videoOg2), embedId: DRIVE_IDS.videoOg2, year: "2025", medium: "Animation Reel" },
    { title: "Animation Reel III", description: "Character acting and movement study showcasing weight, force, and expressive pose-to-pose animation.", tags: ["Character Acting", "Maya", "Lighting"], link: driveView(DRIVE_IDS.video3), embedId: DRIVE_IDS.video3, year: "2025", medium: "3D Animation" },
    { title: "Animation Reel IV", description: "Cinematic sequence with stylized character movement, environment mood, and polished final render.", tags: ["Cinematography", "Blocking", "Final Render"], link: driveView(DRIVE_IDS.video4), embedId: DRIVE_IDS.video4, year: "2025", medium: "3D Animation" },
    { title: "Animation Reel V", description: "Short film sequence exploring narrative timing, dynamic camera work, and emotional character performance.", tags: ["Storytelling", "Camera", "Performance"], link: driveView(DRIVE_IDS.video5), embedId: DRIVE_IDS.video5, year: "2025", medium: "3D Animation" }
  ],
  visualDevProjects: [
    { title: "Archetype Character Design", description: "Mythological archetype characters combining cultural motifs with personality-driven silhouettes.", tags: ["Character Design", "Concept Art", "Cultural Motifs"], thumbnail: "./assets/archetype_characters.jpg", year: "2025", medium: "Character Design" },
    { title: "Design Lab — Character Lineup", description: "Clean line-art explorations for a fish, crocodile, and female character — focusing on appeal and expression.", tags: ["Line Art", "Character Design", "Appeal"], thumbnail: "./assets/design_lab.jpg", year: "2025", medium: "Design Lab" },
    { title: "Value Lab — Character Studies", description: "Grayscale value paintings exploring form, light direction, and mood across three distinct character designs.", tags: ["Value Painting", "Lighting", "Character"], thumbnail: "./assets/value_lab.jpg", year: "2025", medium: "Value Studies" },
    { title: "Pitch Painting — Sea Monster", description: "Full-color pitch painting depicting a dramatic confrontation between a lone figure and a massive sea creature.", tags: ["Pitch Painting", "Environment", "Narrative"], thumbnail: "./assets/pitch_painting.jpg", year: "2025", medium: "Pitch Painting" },
    { title: "Lip Sync Character Design", description: "Full character sheet with expression studies and a T-pose turnaround for a Day of the Dead-inspired girl.", tags: ["Expression Sheet", "Turnaround", "Character"], thumbnail: "./assets/lipsync_character.jpg", year: "2025", medium: "Character Sheet" },
    { title: "Worldbuilding Project", description: "Complete visual development package — creature designs, character turnarounds, environment paintings, and props.", tags: ["Worldbuilding", "Environment", "Creature Design"], thumbnail: "./assets/worldbuilding.jpg", year: "2025", medium: "Visual Development" },
    { title: "Pitch Painting — Process", description: "Storyboard thumbnails, compositional sketches, value studies, and color keys from rough to final.", tags: ["Process", "Thumbnails", "Color Keys"], thumbnail: "./assets/pitch_progress.jpg", year: "2025", medium: "Process Work" },
    { title: "Character Turnaround Sheet", description: "Front, three-quarter, and back views of the lip sync character — ready for 3D modeling reference.", tags: ["Turnaround", "Model Sheet", "Production"], thumbnail: "./assets/lipsync_turnaround.jpg", year: "2025", medium: "Model Sheet" }
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
    name: "Hua Shi", role: "3D Animator & Visual Development Artist", location: "Sarasota, FL",
    email: "hshi@c.ringling.edu", phone: "+1 (941) 225-1558", linkedin: "linkedin.com/in/hua-shi-b1738a389",
    education: [{ school: "Ringling College of Art and Design", detail: "BFA in Computer Animation, Expected May 2027" }],
    experience: [
      { title: "Computer Animator", org: "Ringling College of Art and Design", date: "Aug 2023 — Present", bullets: ["Produced short animation scenes demonstrating believable weight, force, and character emotion.", "Designed characters and environments, planned shots with thumbnails, and developed lighting schemes.", "Modeled, textured, lit, and animated assets end-to-end using a production workflow."] },
      { title: "Character Designer", org: "Ringling College of Art and Design", date: "Sep 2023 — Present", bullets: ["Developed character design variations for narrative and worldbuilding requirements.", "Pitched concepts with supporting visual references and iterated from critique."] },
      { title: "Concept Artist", org: "Ringling College of Art and Design", date: "Sep 2024 — May 2025", bullets: ["Built an original worldbuilding project from concept ideation to presentation boards."] },
      { title: "Freelance Artist", org: "Multiple Clients (Remote)", date: "2017 — Present", bullets: ["Delivered commissioned character illustrations and design packages for independent clients.", "Created custom fashion and costume concepts for pre-existing character IPs."] }
    ],
    additional: ["Personal Tour Guide, China (Nov — Dec 2025)", "Member, Photography Club & Table Tennis Club, Ringling College"],
    skills: { software: "Autodesk Maya, Adobe Premiere Pro, Adobe Photoshop, Nuke, 3D Coat, ZBrush", languages: "Mandarin (Native), English (Professional Proficiency)" }
  }
};

/* ================================================================
   STATE
   ================================================================ */
let content = loadContent();
let isAuthed = localStorage.getItem(AUTH_KEY) === "true";
let editMode = false;
let editSnapshot = null;
let dragState = null;

function loadContent() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(defaultContent);
  try { return Object.assign(structuredClone(defaultContent), JSON.parse(raw)); }
  catch (_) { return structuredClone(defaultContent); }
}
function saveContent() { localStorage.setItem(STORAGE_KEY, JSON.stringify(content)); }

/* ================================================================
   RENDER — builds the visible page from content
   ================================================================ */
function setTextByKey() {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (key && content[key]) el.textContent = content[key];
  });
}

function renderTopInfo() {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set("contactEmail", content.contactEmail);
  set("contactPhone", content.contactPhone);
  set("contactLocation", content.contactLocation);
  set("footerEmail", content.contactEmail);
  set("footerPhone", content.contactPhone);
  set("year", new Date().getFullYear());
  const linkedin = document.getElementById("linkedinLink"); if (linkedin) linkedin.href = content.linkedinUrl;
  const vdPdf = document.getElementById("visualDevPdfLink"); if (vdPdf) vdPdf.href = content.visualDevPdfUrl;
  const cvPdf = document.getElementById("cvPdfLink"); if (cvPdf) cvPdf.href = content.cvPdfUrl;
}

function renderProjects(list, rootId) {
  const root = document.getElementById(rootId);
  if (!root) return;
  const gridKey = root.dataset.grid;
  root.innerHTML = "";
  list.forEach((project, idx) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.dataset.idx = idx;
    card.dataset.grid = gridKey;
    const tags = (project.tags || []).map(t => `<span>${t}</span>`).join("");

    let visual;
    if (project.embedId) {
      visual = `<div class="project-embed"><iframe src="${drivePreview(project.embedId)}" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
    } else {
      const thumb = project.thumbnail ? `<img src="${project.thumbnail}" alt="${project.title}" loading="lazy" />` : "";
      visual = `<div class="project-thumb">${thumb}</div>`;
    }

    card.innerHTML = `
      ${editMode ? `<div class="card-controls"><button class="cc-btn cc-drag" title="Drag to reorder">⠿</button><button class="cc-btn cc-edit" title="Edit card">✎</button><button class="cc-btn cc-delete" title="Delete card">✕</button></div>` : ""}
      ${visual}
      <div class="project-body">
        <div class="project-meta"><span>${project.medium || "Project"}</span><span>${project.year || ""}</span></div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">${tags}</div>
      </div>`;

    if (!editMode && project.thumbnail && !project.embedId) {
      card.style.cursor = "pointer";
      card.addEventListener("click", () => openLightbox(project.thumbnail, project.title));
    }

    if (editMode) {
      card.setAttribute("draggable", "true");
      card.addEventListener("dragstart", onDragStart);
      card.addEventListener("dragover", onDragOver);
      card.addEventListener("drop", onDrop);
      card.addEventListener("dragend", onDragEnd);
      card.querySelector(".cc-edit").addEventListener("click", e => { e.stopPropagation(); openCardEditor(gridKey, idx); });
      card.querySelector(".cc-delete").addEventListener("click", e => { e.stopPropagation(); deleteCard(gridKey, idx); });
    }

    root.appendChild(card);
  });

  if (editMode) {
    const addBtn = document.createElement("button");
    addBtn.className = "add-card-btn reveal visible";
    addBtn.innerHTML = `<span class="add-icon">+</span><span>Add Card</span>`;
    addBtn.addEventListener("click", () => openCardEditor(gridKey, -1));
    root.appendChild(addBtn);
  }
}

function renderSketchbook() {
  const root = document.getElementById("sketchbookGrid");
  if (!root) return;
  const gridKey = "sketchbookImages";
  root.innerHTML = "";
  content.sketchbookImages.forEach((item, idx) => {
    const card = document.createElement("article");
    card.className = "sketch-card reveal";
    card.dataset.idx = idx;
    card.dataset.grid = gridKey;
    card.innerHTML = `
      ${editMode ? `<div class="card-controls"><button class="cc-btn cc-drag" title="Drag">⠿</button><button class="cc-btn cc-edit" title="Edit">✎</button><button class="cc-btn cc-delete" title="Delete">✕</button></div>` : ""}
      <img src="${item.image}" alt="${item.caption}" loading="lazy" />
      <p>${item.caption}</p>`;

    if (!editMode) card.addEventListener("click", () => openLightbox(item.image, item.caption));

    if (editMode) {
      card.setAttribute("draggable", "true");
      card.addEventListener("dragstart", onDragStart);
      card.addEventListener("dragover", onDragOver);
      card.addEventListener("drop", onDrop);
      card.addEventListener("dragend", onDragEnd);
      card.querySelector(".cc-edit").addEventListener("click", e => { e.stopPropagation(); openCardEditor(gridKey, idx); });
      card.querySelector(".cc-delete").addEventListener("click", e => { e.stopPropagation(); deleteCard(gridKey, idx); });
    }
    root.appendChild(card);
  });

  if (editMode) {
    const addBtn = document.createElement("button");
    addBtn.className = "add-card-btn sketch-add reveal visible";
    addBtn.innerHTML = `<span class="add-icon">+</span><span>Add Sketch</span>`;
    addBtn.addEventListener("click", () => openCardEditor(gridKey, -1));
    root.appendChild(addBtn);
  }
}

function renderCv() {
  const cv = content.cv; const el = document.getElementById("cvPreview"); if (!el) return;
  const edu = cv.education.map(e => `<li><strong>${e.school}</strong> — ${e.detail}</li>`).join("");
  const exp = cv.experience.map(e => { const b = e.bullets.map(b => `<li>${b}</li>`).join(""); return `<div class="cv-entry"><h4>${e.title}, ${e.org} <span>${e.date}</span></h4><ul>${b}</ul></div>`; }).join("");
  const add = cv.additional.map(a => `<li>${a}</li>`).join("");
  el.innerHTML = `<div class="cv-header"><h3>${cv.name}</h3><p>${cv.role} &middot; ${cv.location} &middot; <a href="mailto:${cv.email}">${cv.email}</a> &middot; ${cv.phone} &middot; <a href="https://${cv.linkedin}" target="_blank" rel="noreferrer">${cv.linkedin}</a></p></div><p class="cv-section-title">Education</p><ul>${edu}</ul><p class="cv-section-title">Experience</p>${exp}<p class="cv-section-title">Additional Experience &amp; Activities</p><ul>${add}</ul><p class="cv-section-title">Skills</p><p><strong>Software:</strong> ${cv.skills.software}</p><p><strong>Languages:</strong> ${cv.skills.languages}</p>`;
}

function renderAll() {
  setTextByKey(); renderTopInfo();
  renderProjects(content.animationProjects, "animationGrid");
  renderProjects(content.visualDevProjects, "visualDevGrid");
  renderSketchbook(); renderCv(); observeReveals();
  if (editMode) enableInlineEditing();
}

/* ================================================================
   LIGHTBOX
   ================================================================ */
function openLightbox(src, alt) {
  if (editMode) return;
  const lb = document.getElementById("lightbox");
  document.getElementById("lightboxImg").src = src;
  document.getElementById("lightboxImg").alt = alt || "";
  lb.classList.add("open"); lb.setAttribute("aria-hidden", "false");
}
function closeLightbox() {
  const lb = document.getElementById("lightbox");
  lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true");
  document.getElementById("lightboxImg").src = "";
}
document.querySelector(".lightbox-close")?.addEventListener("click", closeLightbox);
document.getElementById("lightbox")?.addEventListener("click", e => { if (e.target === e.currentTarget) closeLightbox(); });

/* ================================================================
   SCROLL REVEAL / HEADER / NAV
   ================================================================ */
function observeReveals() {
  const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }); }, { threshold: 0.12 });
  document.querySelectorAll(".reveal:not(.visible)").forEach(el => obs.observe(el));
}
function initHeader() {
  const h = document.getElementById("siteHeader"); if (!h) return;
  const fn = () => h.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", fn, { passive: true }); fn();
}
function initActiveNav() {
  const links = document.querySelectorAll(".site-nav a[href^='#']");
  const secs = [...links].map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  function update() { let cur = ""; secs.forEach(s => { if (s.getBoundingClientRect().top <= 160) cur = s.id; }); links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${cur}`)); }
  window.addEventListener("scroll", update, { passive: true }); update();
}
function initMobileMenu() {
  const toggle = document.getElementById("menuToggle"), nav = document.getElementById("siteNav");
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}

/* ================================================================
   INLINE EDITING — contenteditable for text
   ================================================================ */
function enableInlineEditing() {
  document.querySelectorAll("[data-key]").forEach(el => {
    el.contentEditable = "true";
    el.classList.add("inline-editable");
  });
  document.querySelectorAll("[data-editable]").forEach(el => {
    el.contentEditable = "true";
    el.classList.add("inline-editable");
  });
}

function disableInlineEditing() {
  document.querySelectorAll("[contenteditable]").forEach(el => {
    el.removeAttribute("contenteditable");
    el.classList.remove("inline-editable");
  });
}

function captureInlineEdits() {
  document.querySelectorAll("[data-key][contenteditable]").forEach(el => {
    content[el.dataset.key] = el.textContent.trim();
  });
  document.querySelectorAll("[data-editable][contenteditable]").forEach(el => {
    content[el.dataset.editable] = el.textContent.trim();
  });
}

/* ================================================================
   DRAG & DROP — reorder cards within a grid
   ================================================================ */
function onDragStart(e) {
  const card = e.currentTarget;
  dragState = { grid: card.dataset.grid, idx: parseInt(card.dataset.idx) };
  card.classList.add("dragging");
  e.dataTransfer.effectAllowed = "move";
}
function onDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  const card = e.currentTarget;
  if (card.dataset.grid === dragState?.grid) card.classList.add("drag-over");
}
function onDrop(e) {
  e.preventDefault();
  const target = e.currentTarget;
  target.classList.remove("drag-over");
  if (!dragState || target.dataset.grid !== dragState.grid) return;
  const fromIdx = dragState.idx;
  const toIdx = parseInt(target.dataset.idx);
  if (fromIdx === toIdx) return;

  const arr = content[dragState.grid];
  const [moved] = arr.splice(fromIdx, 1);
  arr.splice(toIdx, 0, moved);
  reRenderGrid(dragState.grid);
}
function onDragEnd(e) {
  e.currentTarget.classList.remove("dragging");
  document.querySelectorAll(".drag-over").forEach(el => el.classList.remove("drag-over"));
  dragState = null;
}

function reRenderGrid(gridKey) {
  if (gridKey === "animationProjects") renderProjects(content.animationProjects, "animationGrid");
  else if (gridKey === "visualDevProjects") renderProjects(content.visualDevProjects, "visualDevGrid");
  else if (gridKey === "sketchbookImages") renderSketchbook();
  observeReveals();
  if (editMode) enableInlineEditing();
}

/* ================================================================
   CARD EDITOR MODAL
   ================================================================ */
let ceState = { grid: null, idx: -1, imgData: null };

function openCardEditor(gridKey, idx) {
  const modal = document.getElementById("cardEditorModal");
  const backdrop = document.getElementById("cardEditorBackdrop");
  ceState = { grid: gridKey, idx, imgData: null };

  const isNew = idx === -1;
  const isSketch = gridKey === "sketchbookImages";
  const isAnim = gridKey === "animationProjects";
  const item = isNew ? {} : content[gridKey][idx];

  document.getElementById("ceTitle").textContent = isNew ? "Add New Card" : "Edit Card";
  document.getElementById("ceFieldTitle").value = item.title || "";
  document.getElementById("ceFieldDesc").value = item.description || "";
  document.getElementById("ceFieldTags").value = (item.tags || []).join(", ");
  document.getElementById("ceFieldMedium").value = item.medium || "";
  document.getElementById("ceFieldYear").value = item.year || "";
  document.getElementById("ceFieldCaption").value = item.caption || "";
  document.getElementById("ceFieldEmbedId").value = item.embedId || "";
  document.getElementById("ceFieldImageUrl").value = item.thumbnail || item.image || "";

  const preview = document.getElementById("ceImgPreview");
  const imgSrc = item.thumbnail || item.image || "";
  preview.innerHTML = imgSrc ? `<img src="${imgSrc}" alt="preview" />` : "<p>No image</p>";

  document.getElementById("ceImageGroup").style.display = isAnim ? "none" : "";
  document.getElementById("ceVideoGroup").style.display = isAnim ? "" : "none";
  document.getElementById("ceFieldCaption").closest("label")?.previousElementSibling && true;
  document.getElementById("ceFieldCaption").parentElement.querySelector("label[for]")?.remove();
  document.getElementById("ceFieldTitle").closest("label")?.parentElement && true;

  const titleRow = document.getElementById("ceFieldTitle").parentElement;
  const descRow = document.getElementById("ceFieldDesc").parentElement;
  const tagsRow = document.getElementById("ceFieldTags").parentElement;
  const medRow = document.getElementById("ceFieldMedium").parentElement;
  const yearRow = document.getElementById("ceFieldYear").parentElement;
  const capRow = document.getElementById("ceFieldCaption").closest(".ce-body");

  if (isSketch) {
    document.getElementById("ceFieldTitle").closest("label").style.display = "none";
    document.getElementById("ceFieldTitle").style.display = "none";
    document.getElementById("ceFieldDesc").closest("label").style.display = "none";
    document.getElementById("ceFieldDesc").style.display = "none";
    document.getElementById("ceFieldTags").closest("label").style.display = "none";
    document.getElementById("ceFieldTags").style.display = "none";
    document.getElementById("ceFieldMedium").closest("label").style.display = "none";
    document.getElementById("ceFieldMedium").style.display = "none";
    document.getElementById("ceFieldYear").closest("label").style.display = "none";
    document.getElementById("ceFieldYear").style.display = "none";
  } else {
    document.querySelectorAll("#cardEditorModal .ce-body label, #cardEditorModal .ce-body input, #cardEditorModal .ce-body textarea").forEach(el => el.style.display = "");
    document.getElementById("ceFieldCaption").closest("label").style.display = isSketch ? "" : "none";
    document.getElementById("ceFieldCaption").style.display = isSketch ? "" : "none";
  }

  if (isSketch) {
    document.getElementById("ceFieldCaption").closest("label").style.display = "";
    document.getElementById("ceFieldCaption").style.display = "";
  }

  document.getElementById("ceDelete").style.display = isNew ? "none" : "";
  modal.classList.remove("hidden");
  backdrop.classList.remove("hidden");
}

function closeCardEditor() {
  document.getElementById("cardEditorModal").classList.add("hidden");
  document.getElementById("cardEditorBackdrop").classList.add("hidden");
  ceState = { grid: null, idx: -1, imgData: null };
}

function saveCardEditor() {
  const { grid, idx, imgData } = ceState;
  const isNew = idx === -1;
  const isSketch = grid === "sketchbookImages";
  const isAnim = grid === "animationProjects";

  if (isSketch) {
    const obj = isNew ? {} : { ...content[grid][idx] };
    const urlField = document.getElementById("ceFieldImageUrl").value.trim();
    obj.image = imgData || urlField || obj.image || "";
    obj.caption = document.getElementById("ceFieldCaption").value.trim();
    if (isNew) content[grid].push(obj); else content[grid][idx] = obj;
  } else {
    const obj = isNew ? {} : { ...content[grid][idx] };
    obj.title = document.getElementById("ceFieldTitle").value.trim();
    obj.description = document.getElementById("ceFieldDesc").value.trim();
    obj.tags = document.getElementById("ceFieldTags").value.split(",").map(s => s.trim()).filter(Boolean);
    obj.medium = document.getElementById("ceFieldMedium").value.trim();
    obj.year = document.getElementById("ceFieldYear").value.trim();
    if (isAnim) {
      obj.embedId = document.getElementById("ceFieldEmbedId").value.trim();
      if (obj.embedId) obj.link = driveView(obj.embedId);
    } else {
      const urlField = document.getElementById("ceFieldImageUrl").value.trim();
      obj.thumbnail = imgData || urlField || obj.thumbnail || "";
    }
    if (isNew) content[grid].push(obj); else content[grid][idx] = obj;
  }

  closeCardEditor();
  reRenderGrid(grid);
}

function deleteCard(gridKey, idx) {
  if (!confirm("Delete this card?")) return;
  content[gridKey].splice(idx, 1);
  reRenderGrid(gridKey);
}

document.getElementById("ceSave").addEventListener("click", saveCardEditor);
document.getElementById("ceCancel").addEventListener("click", closeCardEditor);
document.getElementById("ceClose").addEventListener("click", closeCardEditor);
document.getElementById("ceDelete").addEventListener("click", () => {
  if (ceState.idx >= 0) deleteCard(ceState.grid, ceState.idx);
  closeCardEditor();
});
document.getElementById("cardEditorBackdrop").addEventListener("click", closeCardEditor);

document.getElementById("ceFileInput").addEventListener("change", async function () {
  const file = this.files[0]; if (!file) return;
  const data = await compressImage(file);
  ceState.imgData = data;
  document.getElementById("ceImgPreview").innerHTML = `<img src="${data}" alt="preview" />`;
});

async function compressImage(file, maxW = 1200, quality = 0.75) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let w = img.width, h = img.height;
        if (w > maxW) { h = h * maxW / w; w = maxW; }
        canvas.width = w; canvas.height = h;
        canvas.getContext("2d").drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

/* ================================================================
   EDIT MODE — toolbar, enter/exit
   ================================================================ */
function enterEditMode() {
  editMode = true;
  editSnapshot = JSON.stringify(content);
  document.body.classList.add("edit-mode");
  document.getElementById("adminToolbar").classList.remove("hidden");
  renderAll();
}

function exitEditMode(save) {
  if (save) {
    captureInlineEdits();
    saveContent();
  } else {
    content = JSON.parse(editSnapshot);
  }
  editMode = false;
  editSnapshot = null;
  document.body.classList.remove("edit-mode");
  document.getElementById("adminToolbar").classList.add("hidden");
  disableInlineEditing();
  renderAll();
}

document.getElementById("toolbarSave").addEventListener("click", () => {
  captureInlineEdits();
  saveContent();
  editSnapshot = JSON.stringify(content);
  renderAll();
  showToast("Changes saved!");
});
document.getElementById("toolbarDiscard").addEventListener("click", () => {
  if (!confirm("Discard all unsaved changes?")) return;
  content = JSON.parse(editSnapshot);
  renderAll();
  showToast("Changes discarded.");
});
document.getElementById("toolbarReset").addEventListener("click", () => {
  if (!confirm("Reset everything to factory defaults? This cannot be undone.")) return;
  content = structuredClone(defaultContent);
  editSnapshot = JSON.stringify(content);
  saveContent();
  renderAll();
  showToast("Reset to defaults.");
});
document.getElementById("toolbarExit").addEventListener("click", () => {
  const changed = editSnapshot !== JSON.stringify(content);
  if (changed && !confirm("You have unsaved changes. Exit anyway?")) return;
  exitEditMode(false);
});

function showToast(msg) {
  let t = document.getElementById("editorToast");
  if (!t) { t = document.createElement("div"); t.id = "editorToast"; t.className = "editor-toast"; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}

/* ================================================================
   LOGIN MODAL
   ================================================================ */
function initAdmin() {
  const openBtn = document.getElementById("adminOpenBtn");
  const loginBtn = document.getElementById("adminLoginBtn");
  const closeBtn = document.getElementById("loginCloseBtn");
  const backdrop = document.getElementById("loginBackdrop");
  const modal = document.getElementById("loginModal");
  const loginError = document.getElementById("loginError");

  function openLogin() {
    if (isAuthed) { enterEditMode(); return; }
    modal.classList.remove("hidden");
    backdrop.classList.remove("hidden");
    loginError.textContent = "";
  }
  function closeLogin() {
    modal.classList.add("hidden");
    backdrop.classList.add("hidden");
  }
  function handleLogin() {
    const u = document.getElementById("adminUsername").value.trim();
    const p = document.getElementById("adminPassword").value;
    if (u === ADMIN_CREDENTIALS.username && p === ADMIN_CREDENTIALS.password) {
      isAuthed = true;
      localStorage.setItem(AUTH_KEY, "true");
      closeLogin();
      enterEditMode();
      return;
    }
    loginError.textContent = "Invalid credentials.";
  }

  openBtn.addEventListener("click", e => { e.preventDefault(); openLogin(); });
  loginBtn.addEventListener("click", handleLogin);
  closeBtn.addEventListener("click", closeLogin);
  backdrop.addEventListener("click", closeLogin);
  document.getElementById("adminPassword").addEventListener("keydown", e => { if (e.key === "Enter") handleLogin(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") { closeLogin(); closeCardEditor(); } });
}

/* ================================================================
   BOOT
   ================================================================ */
renderAll();
initHeader();
initActiveNav();
initAdmin();
initMobileMenu();
