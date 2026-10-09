/* ================================================================
   CONSTANTS & CREDENTIALS
   ================================================================ */
const CONTENT_VERSION = 2;
const DRIVE_IDS = { showreel:"14SnLHaeOO3eQqNEVK3KOj6QMDMW23d3H", portfolio:"1BLY5dTNo9Eqz1kgcpFwxO7pl5sJmGaNw", v1:"1jTzsCmNa-16zUy7PYeoH_w2p00X7HScy", v2:"1pUeAcYZmaisC8diy86jRhfzIXli06z2E", v3:"1UeSD0hED-E6L3eYRG8b6IUwGJYJFWxtY", v4:"1gWcRUBGk51DIxHpvvDKuTN03-lPDlUW1", v5:"15QN020WLvpRstIgsZ41NbaMeMa_bhiHG" };
function dp(id){return`https://drive.google.com/file/d/${id}/preview`}
function dv(id){return`https://drive.google.com/file/d/${id}/view`}

/* ================================================================
   DEFAULT CONTENT — sections are data-driven
   ================================================================ */
const defaultContent = {
  heroEyebrow:"3D Animator & Visual Storyteller",
  heroTitle:"Hi, I'm Hua Shi — I bring characters and worlds to life.",
  heroDescription:"I create visual stories and 3D assets using a mix of tools, with a focus on making characters and worlds feel fun, expressive, and alive. Currently studying Computer Animation at Ringling College of Art & Design.",
  aboutParagraph1:"I'm currently studying Computer Animation at Ringling College of Art and Design, where I focus on 3D animation, visual development, and lighting. I like combining traditional and digital techniques in my work, which lets me explore storytelling in different ways.",
  aboutParagraph2:"I'm especially interested in character-driven stories, visual development, and 3D animation. Outside of animation, I also enjoy poetry, music, and life drawing — all of which influence how I think about storytelling and visuals.",
  contentVersion:CONTENT_VERSION,
  contactEmail:"hshi@c.ringling.edu", contactEmailAlt:"hshi2634@gmail.com", contactLocation:"Sarasota, FL",
  linkedinUrl:"https://www.linkedin.com/in/huashianimation",
  visualDevPdfUrl:dv(DRIVE_IDS.portfolio), cvPdfUrl:"./assets/Hua_Shi_Resume.pdf",

  sections:[
    {id:"showreel",type:"showreel",embedId:DRIVE_IDS.showreel,title:"Showreel",number:"01",subtitle:"A look at my latest 3D animation work.",dark:true},
    {id:"animation",type:"projectGrid",dataKey:"animationProjects",title:"3D Animation",number:"02",subtitle:"Selected animation projects and movement studies.",dark:true,bgImage:"./assets/render_character_3d.png",layout:"2col"},
    {id:"visual-dev",type:"projectGrid",dataKey:"visualDevProjects",title:"Visual Development",number:"03",subtitle:"Worldbuilding, character design, and concept art. Click any piece to enlarge.",dark:false,alt:true,layout:"2col",showPortfolioBtn:true,showcaseImage:"./assets/digital_paintings.jpg",pdfSrc:"https://drive.google.com/file/d/1BLY5dTNo9Eqz1kgcpFwxO7pl5sJmGaNw/preview"},
    {id:"sketchbook",type:"sketchGrid",dataKey:"sketchbookImages",title:"Sketchbook",number:"04",subtitle:"Life drawing, plein air studies, silhouette explorations, and observational work.",dark:true,bgImage:"./assets/personal_work.jpg",layout:"3col"},
    {id:"about",type:"about",number:"05"},
    {id:"cv",type:"cv",number:"06"}
  ],

  animationProjects:[
    {title:"Short Scene Study",description:"A 20-second scene demonstrating weight, force, and character emotion through pose-to-pose animation.",tags:["Character Acting","Maya","Lighting"],embedId:DRIVE_IDS.v1,year:"2025",medium:"3D Animation"},
    {title:"Final Animation Sequence",description:"A polished sequence with cinematic framing, environment mood, and stylized character movement.",tags:["Cinematography","Blocking","Final Render"],embedId:DRIVE_IDS.v2,year:"2025",medium:"Animation Reel"},
    {title:"Animation Reel III",description:"Character acting and movement study showcasing weight, force, and expressive animation.",tags:["Character Acting","Maya","Lighting"],embedId:DRIVE_IDS.v3,year:"2025",medium:"3D Animation"},
    {title:"Animation Reel IV",description:"Cinematic sequence with stylized character movement, environment mood, and polished final render.",tags:["Cinematography","Blocking","Final Render"],embedId:DRIVE_IDS.v4,year:"2025",medium:"3D Animation"},
    {title:"Animation Reel V",description:"Short film sequence exploring narrative timing, dynamic camera work, and emotional character performance.",tags:["Storytelling","Camera","Performance"],embedId:DRIVE_IDS.v5,year:"2025",medium:"3D Animation"}
  ],
  visualDevProjects:[
    {title:"Archetype Character Design",description:"Mythological archetype characters combining cultural motifs with personality-driven silhouettes.",tags:["Character Design","Concept Art","Cultural Motifs"],thumbnail:"./assets/archetype_characters.jpg",year:"2025",medium:"Character Design"},
    {title:"Design Lab — Character Lineup",description:"Clean line-art explorations for a fish, crocodile, and female character — focusing on appeal and expression.",tags:["Line Art","Character Design","Appeal"],thumbnail:"./assets/design_lab.jpg",year:"2025",medium:"Design Lab"},
    {title:"Value Lab — Character Studies",description:"Grayscale value paintings exploring form, light direction, and mood across three distinct character designs.",tags:["Value Painting","Lighting","Character"],thumbnail:"./assets/value_lab.jpg",year:"2025",medium:"Value Studies"},
    {title:"Pitch Painting — Sea Monster",description:"Full-color pitch painting depicting a dramatic confrontation between a lone figure and a massive sea creature.",tags:["Pitch Painting","Environment","Narrative"],thumbnail:"./assets/pitch_painting.jpg",year:"2025",medium:"Pitch Painting"},
    {title:"Lip Sync Character Design",description:"Full character sheet with expression studies and a T-pose turnaround for a Day of the Dead-inspired girl.",tags:["Expression Sheet","Turnaround","Character"],thumbnail:"./assets/lipsync_character.jpg",year:"2025",medium:"Character Sheet"},
    {title:"Worldbuilding Project",description:"Complete visual development package — creature designs, character turnarounds, environment paintings, and props.",tags:["Worldbuilding","Environment","Creature Design"],thumbnail:"./assets/worldbuilding.jpg",year:"2025",medium:"Visual Development"},
    {title:"Pitch Painting — Process",description:"Storyboard thumbnails, compositional sketches, value studies, and color keys from rough to final.",tags:["Process","Thumbnails","Color Keys"],thumbnail:"./assets/pitch_progress.jpg",year:"2025",medium:"Process Work"},
    {title:"Character Turnaround Sheet",description:"Front, three-quarter, and back views of the lip sync character — ready for 3D modeling reference.",tags:["Turnaround","Model Sheet","Production"],thumbnail:"./assets/lipsync_turnaround.jpg",year:"2025",medium:"Model Sheet"}
  ],
  sketchbookImages:[
    {image:"./assets/sketch_cityscape.jpg",caption:"Pen & ink cityscape — plein air, 2025"},
    {image:"./assets/sketch_red_trees.jpg",caption:"Colored pencil — red trees & cat, 2025"},
    {image:"./assets/sketch_pastel_trees.jpg",caption:"Soft pastel landscape — night garden"},
    {image:"./assets/silhouettes_1.jpg",caption:"Silhouette studies #57–86 — shape language"},
    {image:"./assets/silhouettes_2.jpg",caption:"Silhouette studies #87–124 — continued"},
    {image:"./assets/personal_work.jpg",caption:"Personal work — figure drawing, environments, character sketches"},
    {image:"./assets/storytelling.jpg",caption:"Storytelling images — narrative storyboards"},
    {image:"./assets/digital_paintings.jpg",caption:"Digital paintings — portraits, landscapes, fan art"}
  ],
  cv:{name:"Hua Shi",role:"3D Animator & Visual Development Artist",location:"Sarasota, FL",email:"hshi@c.ringling.edu",linkedin:"linkedin.com/in/huashianimation",education:[{school:"Ringling College of Art and Design, Sarasota, FL",detail:"Bachelor of Fine Arts in Computer Animation, May 2027"}],experienceGroups:[{heading:"Campus & Freelance Experience",entries:[{title:"Character Designer",org:"Ringling College of Art and Design",date:"Sept 2023 — Present",bullets:["Developed character design variations for worldbuilding and story development.","Pitched concepts to class with supporting visuals under time-sensitive deadlines."]},{title:"Computer Animator",org:"Ringling College of Art and Design",date:"Aug 2023 — Present",bullets:["Produced 20-second animated scenes demonstrating weight, force, and character emotion.","Designed characters and environments, planned shots with thumbnails, and developed lighting schemes.","Modeled and textured characters, environments, and props; lit scenes and animated pose-to-pose."]},{title:"Freelance Artist",org:"Multiple Clients, Nationwide",date:"2017 — Present",bullets:["Delivered commissioned character designs, sketches, and illustrations for writing and personal projects.","Produced a series of fashion designs for existing characters under client request."]}]},{heading:"Industry & Research Experience",entries:[{title:"Animation / AI Research Volunteer",org:"Bournemouth University, Remote",date:"Sept 2026",bullets:["Tested an AI-driven lip-sync animation tool in Maya and evaluated the quality and accuracy of generated results.","Contributed animator-focused insights to support development and refinement of AI-assisted animation workflows.","Communicated with the Bournemouth University research team on testing results, workflows, and tool development."]},{title:"Animator Intern",org:"4399 Game, Guangzhou, China",date:"June 2026 — Sept 2026",bullets:["Animated character–environment interactions, including tree-chopping, jumping, and walk/run cycles, for in-game use.","Created prop and creature animations, including hit reactions for plants and animals, to support gameplay feedback.","Rigged characters and props for gameplay implementation, ensuring rigs supported the range of motion needed for interaction animations.","Partnered across disciplines to resolve technical setup challenges and finalize engine-ready files."]}]}],skills:{software:"Autodesk Maya, Adobe Premiere Pro, Adobe Photoshop, Nuke, 3D Coat, ZBrush",languages:"Mandarin (Native), English (Professional Proficiency)"}}
};

/* ================================================================
   STATE
   ================================================================ */
let C;
let isAuthed = false;
let editMode = false;
let snapshot = null;

async function loadContent(){
  try{
    const res = await fetch("/.netlify/functions/get-content");
    if(res.ok){
      const data = await res.json();
      if(data && Object.keys(data).length) return migrateContent(Object.assign(structuredClone(defaultContent),data),data.contentVersion);
    }
  }catch(_err){}
  return structuredClone(defaultContent);
}

/* Saved content from before v2 has the old section order and old CV; bring it
   up to date while keeping any other edits made through the admin panel. */
function migrateContent(c,savedVersion){
  if((savedVersion||1)>=CONTENT_VERSION) return c;
  const d=defaultContent;
  ["cv","cvPdfUrl","linkedinUrl","contactEmail","contactEmailAlt"].forEach(k=>c[k]=structuredClone(d[k]));
  delete c.contactPhone;
  const secs=(c.sections||[]).filter(x=>x.type!=="showreel"&&x.type!=="about"&&x.type!=="cv");
  const num={animation:"02","visual-dev":"03",sketchbook:"04"};
  secs.forEach(x=>{if(num[x.id])x.number=num[x.id];});
  c.sections=[structuredClone(d.sections[0]),...secs,...structuredClone(d.sections.slice(-2))];
  c.contentVersion=CONTENT_VERSION;
  return c;
}

async function saveContent(){
  const user = window.netlifyIdentity?.currentUser();
  if(!user){ showToast("Not signed in — changes not saved."); return false; }
  try{
    const res = await fetch("/.netlify/functions/save-content", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${user.token.access_token}` },
      body: JSON.stringify(C)
    });
    if(!res.ok){ showToast("Save failed — you may not be authorized."); return false; }
    return true;
  }catch(_err){ showToast("Save failed — network error."); return false; }
}

/* ================================================================
   SECTION RENDERERS — each returns a DOM element
   ================================================================ */
function buildShowreel(cfg){
  const s=document.createElement("section"); s.id=cfg.id; s.className="section showreel-section"+(cfg.dark?" section-dark":"");
  s.innerHTML=`<div class="container showreel-container">
    <div class="section-label reveal"><span class="section-number">${cfg.number||""}</span><h2>${cfg.title||""}</h2><p class="section-sub">${cfg.subtitle||""}</p></div>
    <div class="showreel-frame reveal"><iframe src="${dp(cfg.embedId)}" title="Hua Shi showreel" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe></div>
  </div>`;
  return s;
}

function buildAbout(cfg){
  const s=document.createElement("section"); s.id="about"; s.className="section section-alt";
  s.innerHTML=`<div class="container about-grid">
    <div class="about-visual reveal"><img src="./assets/hua_portrait.png" alt="Hua Shi" class="about-hero-img" /></div>
    <div class="about-body">
      <div class="about-label reveal"><span class="section-number">${cfg.number||""}</span><h2>About</h2></div>
      <p class="about-lead reveal" data-key="aboutParagraph1"></p>
      <p class="reveal" data-key="aboutParagraph2"></p>
      <div class="about-details reveal">
        <div class="detail-col"><h4>Contact</h4><p><a id="aboutEmail" class="contact-link" href="mailto:${C.contactEmail}">${C.contactEmail}</a></p><p><a id="aboutEmailAlt" class="contact-link" href="mailto:${C.contactEmailAlt}">${C.contactEmailAlt}</a></p><p data-editable="contactLocation"></p></div>
        <div class="detail-col"><h4>Interests</h4><p>Character-driven stories</p><p>Visual development</p><p>Poetry &amp; life drawing</p></div>
        <div class="detail-col"><h4>Education</h4><p>Ringling College of Art &amp; Design</p><p>BFA Computer Animation</p><p>Expected May 2027</p></div>
      </div>
    </div></div>`;
  return s;
}

function buildProjectGrid(cfg, secIdx){
  const items=C[cfg.dataKey]||[];
  const s=document.createElement("section");
  s.id=cfg.id; s.className="section"+(cfg.dark?" section-dark":"")+(cfg.alt?" section-alt":"");
  let bg="";
  let extras="";
  if(cfg.showPortfolioBtn) extras+=`<div class="visdev-cta reveal"><a id="visualDevPdfLink" class="btn primary" href="${C.visualDevPdfUrl}" target="_blank" rel="noreferrer">View Full Portfolio PDF &nearr;</a></div>`;

  s.innerHTML=`${bg}<div class="container">
    <div class="section-label reveal"><span class="section-number">${cfg.number||""}</span><h2>${cfg.title||""}</h2><p class="section-sub">${cfg.subtitle||""}</p></div>
    ${extras}
    <div id="${cfg.id}Grid" class="project-grid" data-grid="${cfg.dataKey}" data-layout="${cfg.layout||'2col'}"></div>
    ${cfg.showcaseImage?`<div class="showcase-strip reveal"><img src="${cfg.showcaseImage}" alt="Showcase" class="showcase-img" /></div>`:""}
    ${cfg.pdfSrc?`<div class="pdf-viewer reveal"><iframe src="${cfg.pdfSrc}" loading="lazy" title="Visual development portfolio" allow="autoplay"></iframe></div>`:""}
  </div>`;

  const grid=s.querySelector(".project-grid");
  items.forEach((p,i)=>{
    const card=document.createElement("article");
    card.className="project-card reveal"; card.dataset.idx=i; card.dataset.grid=cfg.dataKey;
    const tags=(p.tags||[]).map(t=>`<span>${t}</span>`).join("");
    let vis;
    if(p.embedId) vis=`<div class="project-embed"><iframe src="${dp(p.embedId)}" loading="lazy" title="${p.title}" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
    else{ const th=p.thumbnail?`<img src="${p.thumbnail}" alt="${p.title}" loading="lazy" />`:""; vis=`<div class="project-thumb">${th}</div>`; }

    card.innerHTML=`${editMode?cardControls(cfg.dataKey):""}${vis}<div class="project-body"><div class="project-meta"><span>${p.medium||""}</span><span>${p.year||""}</span></div><h3>${p.title}</h3><p class="card-desc">${p.description}</p><div class="project-tags">${tags}</div></div>`;

    if(editMode) wireCardEdit(card,cfg.dataKey,i);
    else if(p.thumbnail&&!p.embedId){card.style.cursor="pointer"; card.addEventListener("click",()=>openLightbox(p.thumbnail,p.title));}

    if(editMode&&p.thumbnail){
      const thumb=card.querySelector(".project-thumb");
      const rb=document.createElement("label"); rb.className="quick-replace"; rb.innerHTML='Replace<input type="file" accept="image/*">';
      rb.querySelector("input").addEventListener("change",async function(){const d=await compressImage(this.files[0]);C[cfg.dataKey][i].thumbnail=d;reRenderSections();});
      thumb.appendChild(rb);
    }
    grid.appendChild(card);
  });
  if(editMode){const ab=addCardBtn(cfg.dataKey);grid.appendChild(ab);}
  return s;
}

function buildSketchGrid(cfg, secIdx){
  const items=C[cfg.dataKey]||[];
  const s=document.createElement("section");
  s.id=cfg.id; s.className="section"+(cfg.dark?" section-dark":"");
  let bg="";
  s.innerHTML=`${bg}<div class="container">
    <div class="section-label reveal"><span class="section-number">${cfg.number||""}</span><h2>${cfg.title||""}</h2><p class="section-sub">${cfg.subtitle||""}</p></div>
    <div id="${cfg.id}Grid" class="sketch-grid" data-grid="${cfg.dataKey}" data-layout="${cfg.layout||'3col'}"></div>
  </div>`;

  const grid=s.querySelector(".sketch-grid");
  items.forEach((item,i)=>{
    const card=document.createElement("article");
    card.className="sketch-card reveal"; card.dataset.idx=i; card.dataset.grid=cfg.dataKey;
    card.innerHTML=`${editMode?cardControls(cfg.dataKey):""}
      <img src="${item.image}" alt="${item.caption}" loading="lazy" />
      <p class="sketch-caption">${item.caption}</p>`;
    if(!editMode) card.addEventListener("click",()=>openLightbox(item.image,item.caption));
    if(editMode){
      wireCardEdit(card,cfg.dataKey,i);
      const img=card.querySelector("img");
      const rb=document.createElement("label"); rb.className="quick-replace"; rb.innerHTML='Replace<input type="file" accept="image/*">';
      rb.querySelector("input").addEventListener("change",async function(){const d=await compressImage(this.files[0]);C[cfg.dataKey][i].image=d;reRenderSections();});
      img.parentElement.style.position="relative"; img.insertAdjacentElement("afterend",rb);
    }
    grid.appendChild(card);
  });
  if(editMode){const ab=addCardBtn(cfg.dataKey);ab.classList.add("sketch-add");grid.appendChild(ab);}
  return s;
}

function buildCv(cfg){
  const cv=C.cv; const s=document.createElement("section"); s.id="cv"; s.className="section";
  const edu=cv.education.map(e=>`<li><strong>${e.school}</strong> — ${e.detail}</li>`).join("");
  const entry=e=>{const b=e.bullets.map(x=>`<li>${x}</li>`).join("");return`<div class="cv-entry"><h4>${e.title}, ${e.org} <span>${e.date}</span></h4><ul>${b}</ul></div>`;};
  const groups=cv.experienceGroups||[{heading:"Experience",entries:cv.experience||[]}];
  const exp=groups.map(g=>`<p class="cv-section-title">${g.heading}</p>${g.entries.map(entry).join("")}`).join("");
  s.innerHTML=`<div class="container">
    <div class="section-label reveal"><span class="section-number">${cfg.number||""}</span><h2>Curriculum Vitae</h2><p class="section-sub">Education, experience, and skills.</p></div>
    <div class="cv-actions reveal"><a id="cvPdfLink" class="btn primary" href="${C.cvPdfUrl}" target="_blank" rel="noreferrer">Download CV &nearr;</a><a class="btn outline" href="./cv.tex" target="_blank" rel="noreferrer">LaTeX Source</a></div>
    <article class="cv-card reveal"><div class="cv-header"><h3>${cv.name}</h3><p>${cv.role} &middot; ${cv.location} &middot; <a href="mailto:${cv.email}">${cv.email}</a> &middot; <a href="https://${cv.linkedin}" target="_blank" rel="noreferrer">${cv.linkedin}</a></p></div><p class="cv-section-title">Education</p><ul>${edu}</ul>${exp}<p class="cv-section-title">Skills</p><p><strong>Software:</strong> ${cv.skills.software}</p><p><strong>Languages:</strong> ${cv.skills.languages}</p></article>
  </div>`;
  return s;
}

function buildText(cfg){
  const s=document.createElement("section"); s.id=cfg.id; s.className="section"+(cfg.dark?" section-dark":"")+(cfg.alt?" section-alt":"");
  let bg=""; if(cfg.dark) bg=`<div class="section-bg-overlay" aria-hidden="true" style="background:rgba(17,17,19,0.85)"></div>`;
  s.innerHTML=`${bg}<div class="container" style="position:relative;z-index:2;">
    <div class="section-label reveal"><span class="section-number">${cfg.number||""}</span><h2>${cfg.title||""}</h2></div>
    <p class="text-block reveal" data-key="${cfg.dataKey||""}">${C[cfg.dataKey||""]||cfg.subtitle||""}</p>
  </div>`;
  return s;
}

/* ================================================================
   SECTION CONTROLS — toolbar per section in edit mode
   ================================================================ */
function addSectionToolbar(sectionEl, cfg, idx){
  const bar=document.createElement("div"); bar.className="sec-toolbar";
  const layouts=cfg.layout?`<div class="layout-btns">${["1col","2col","3col","4col"].map(l=>`<button class="lb${l===cfg.layout?" active":""}" data-l="${l}">${l[0]}</button>`).join("")}</div>`:"";
  bar.innerHTML=`<span class="sec-tb-title">${cfg.title||cfg.type}</span>
    <div class="sec-tb-actions">
      <button class="stb stb-up" title="Move up">↑</button>
      <button class="stb stb-down" title="Move down">↓</button>
      ${layouts}
      <button class="stb stb-del" title="Delete section">✕</button>
    </div>`;
  bar.querySelector(".stb-up").addEventListener("click",()=>{if(idx>0){[C.sections[idx-1],C.sections[idx]]=[C.sections[idx],C.sections[idx-1]];reRenderSections();}});
  bar.querySelector(".stb-down").addEventListener("click",()=>{if(idx<C.sections.length-1){[C.sections[idx],C.sections[idx+1]]=[C.sections[idx+1],C.sections[idx]];reRenderSections();}});
  bar.querySelector(".stb-del").addEventListener("click",()=>{if(!confirm(`Delete "${cfg.title||cfg.type}" section?`))return;C.sections.splice(idx,1);reRenderSections();});
  bar.querySelectorAll("[data-l]").forEach(b=>b.addEventListener("click",()=>{cfg.layout=b.dataset.l;reRenderSections();}));
  sectionEl.style.position="relative"; sectionEl.appendChild(bar);
}

function addSectionDivider(container, idx){
  const d=document.createElement("div"); d.className="add-sec-divider";
  d.innerHTML=`<button class="add-sec-trigger">+ Add Section</button>`;
  d.querySelector("button").addEventListener("click",()=>{addSecInsertIdx=idx;openAddSecModal();});
  container.appendChild(d);
}

/* ================================================================
   RENDER ALL SECTIONS
   ================================================================ */
function reRenderSections(){
  const container=document.getElementById("sectionsContainer");
  container.innerHTML="";
  C.sections.forEach((cfg,i)=>{
    if(editMode) addSectionDivider(container,i);
    let el;
    switch(cfg.type){
      case "showreel": el=buildShowreel(cfg); break;
      case "about": el=buildAbout(cfg); break;
      case "projectGrid": el=buildProjectGrid(cfg,i); break;
      case "sketchGrid": el=buildSketchGrid(cfg,i); break;
      case "cv": el=buildCv(cfg); break;
      case "text": el=buildText(cfg); break;
      default: return;
    }
    if(editMode) addSectionToolbar(el,cfg,i);
    container.appendChild(el);

    // Apply layout attribute to grids
    const g=el.querySelector("[data-layout]");
    if(g) g.setAttribute("data-layout",cfg.layout||"2col");
  });
  if(editMode) addSectionDivider(container,C.sections.length);

  setTextByKey(); renderTopInfo(); observeReveals();
  if(editMode) enableInlineEditing();
}

function setTextByKey(){
  document.querySelectorAll("[data-key]").forEach(el=>{
    const k=el.dataset.key; if(k&&C[k]) el.textContent=C[k];
  });
}
function renderTopInfo(){
  const s=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v};
  s("contactLocation",C.contactLocation);
  const fe=document.getElementById("footerEmail");if(fe)fe.innerHTML=[C.contactEmail,C.contactEmailAlt].filter(Boolean).map(e=>`<a href="mailto:${e}">${e}</a>`).join("<br>");
  s("year",new Date().getFullYear());
  const li=document.getElementById("linkedinLink");if(li)li.href=C.linkedinUrl;
  const vd=document.getElementById("visualDevPdfLink");if(vd)vd.href=C.visualDevPdfUrl;
  const cv=document.getElementById("cvPdfLink");if(cv)cv.href=C.cvPdfUrl;
}

/* ================================================================
   CARD HELPERS
   ================================================================ */
function cardControls(dk){return`<div class="card-controls"><button class="cc-btn cc-drag" title="Drag to reorder">⠿</button><button class="cc-btn cc-edit" title="Edit card">✎</button><button class="cc-btn cc-delete" title="Delete card">✕</button></div>`;}

function wireCardEdit(card,dk,i){
  card.setAttribute("draggable","true");
  card.addEventListener("dragstart",onDragStart);card.addEventListener("dragover",onDragOver);card.addEventListener("drop",onDrop);card.addEventListener("dragend",onDragEnd);
  card.querySelector(".cc-edit").addEventListener("click",e=>{e.stopPropagation();openCardEditor(dk,i);});
  card.querySelector(".cc-delete").addEventListener("click",e=>{e.stopPropagation();if(confirm("Delete this card?")){C[dk].splice(i,1);reRenderSections();}});

  // Inline editable card text
  const h3=card.querySelector("h3"); if(h3){h3.contentEditable="true";h3.classList.add("inline-editable");}
  const desc=card.querySelector(".card-desc"); if(desc){desc.contentEditable="true";desc.classList.add("inline-editable");}
  const cap=card.querySelector(".sketch-caption"); if(cap){cap.contentEditable="true";cap.classList.add("inline-editable");}
}

function addCardBtn(dk){
  const b=document.createElement("button"); b.className="add-card-btn reveal visible";
  b.innerHTML=`<span class="add-icon">+</span><span>Add Card</span>`;
  b.addEventListener("click",()=>openCardEditor(dk,-1));
  return b;
}

/* ================================================================
   DRAG & DROP
   ================================================================ */
let dragState=null;
function onDragStart(e){const c=e.currentTarget;dragState={grid:c.dataset.grid,idx:+c.dataset.idx};c.classList.add("dragging");e.dataTransfer.effectAllowed="move";}
function onDragOver(e){e.preventDefault();e.dataTransfer.dropEffect="move";const c=e.currentTarget;if(c.dataset.grid===dragState?.grid)c.classList.add("drag-over");}
function onDrop(e){e.preventDefault();const t=e.currentTarget;t.classList.remove("drag-over");if(!dragState||t.dataset.grid!==dragState.grid)return;const f=dragState.idx,to=+t.dataset.idx;if(f===to)return;const a=C[dragState.grid];const[m]=a.splice(f,1);a.splice(to,0,m);reRenderSections();}
function onDragEnd(e){e.currentTarget.classList.remove("dragging");document.querySelectorAll(".drag-over").forEach(el=>el.classList.remove("drag-over"));dragState=null;}

/* ================================================================
   CAPTURE INLINE EDITS — reads contenteditable back into C
   ================================================================ */
function captureAllEdits(){
  document.querySelectorAll("[data-key][contenteditable]").forEach(el=>{C[el.dataset.key]=el.textContent.trim();});
  document.querySelectorAll("[data-editable][contenteditable]").forEach(el=>{C[el.dataset.editable]=el.textContent.trim();});

  document.querySelectorAll(".project-card[data-grid][data-idx]").forEach(card=>{
    const dk=card.dataset.grid, i=+card.dataset.idx, item=C[dk]?.[i]; if(!item)return;
    const h3=card.querySelector("h3[contenteditable]"); if(h3)item.title=h3.textContent.trim();
    const d=card.querySelector(".card-desc[contenteditable]"); if(d)item.description=d.textContent.trim();
  });
  document.querySelectorAll(".sketch-card[data-grid][data-idx]").forEach(card=>{
    const i=+card.dataset.idx, item=C.sketchbookImages?.[i]||C[card.dataset.grid]?.[i]; if(!item)return;
    const p=card.querySelector(".sketch-caption[contenteditable]"); if(p)item.caption=p.textContent.trim();
  });

  // Capture section titles/subtitles
  document.querySelectorAll(".section-label h2[contenteditable]").forEach(h2=>{
    const sec=h2.closest("section"); if(!sec)return;
    const cfg=C.sections.find(s=>s.id===sec.id); if(cfg)cfg.title=h2.textContent.trim();
  });
  document.querySelectorAll(".section-sub[contenteditable]").forEach(p=>{
    const sec=p.closest("section"); if(!sec)return;
    const cfg=C.sections.find(s=>s.id===sec.id); if(cfg)cfg.subtitle=p.textContent.trim();
  });
}

/* ================================================================
   INLINE EDITING ENABLE/DISABLE
   ================================================================ */
function enableInlineEditing(){
  document.querySelectorAll("[data-key]").forEach(el=>{el.contentEditable="true";el.classList.add("inline-editable");});
  document.querySelectorAll("[data-editable]").forEach(el=>{el.contentEditable="true";el.classList.add("inline-editable");});
  document.querySelectorAll(".section-label h2, .section-sub").forEach(el=>{
    const sec=el.closest("section"); if(!sec||sec.id==="hero")return;
    el.contentEditable="true"; el.classList.add("inline-editable");
  });
}

/* ================================================================
   CARD EDITOR MODAL
   ================================================================ */
let ceState={grid:null,idx:-1,imgData:null};

function openCardEditor(dk,idx){
  ceState={grid:dk,idx,imgData:null};
  const isNew=idx===-1, isSketch=dk==="sketchbookImages"||dk.startsWith("custom_sketch_"), isAnim=dk==="animationProjects"||dk.startsWith("custom_project_");
  const item=isNew?{}:C[dk][idx];

  document.getElementById("ceTitle").textContent=isNew?"Add New Card":"Edit Card";
  document.getElementById("ceFieldTitle").value=item.title||"";
  document.getElementById("ceFieldDesc").value=item.description||"";
  document.getElementById("ceFieldTags").value=(item.tags||[]).join(", ");
  document.getElementById("ceFieldMedium").value=item.medium||"";
  document.getElementById("ceFieldYear").value=item.year||"";
  document.getElementById("ceFieldCaption").value=item.caption||"";
  document.getElementById("ceFieldEmbedId").value=item.embedId||"";
  document.getElementById("ceFieldImageUrl").value=item.thumbnail||item.image||"";
  const prev=document.getElementById("ceImgPreview");
  const src=item.thumbnail||item.image||"";
  prev.innerHTML=src?`<img src="${src}" />`:"<p>No image</p>";

  const hide=(id,v)=>document.getElementById(id).style.display=v?"":"none";
  hide("ceGroupTitle",!isSketch);hide("ceGroupDesc",!isSketch);hide("ceGroupTags",!isSketch);
  hide("ceGroupMedium",!isSketch);hide("ceGroupYear",!isSketch);
  hide("ceGroupImage",true);hide("ceGroupVideo",!isSketch&&(isAnim||dk.startsWith("custom_project_")));
  hide("ceGroupCaption",isSketch);
  document.getElementById("ceDelete").style.display=isNew?"none":"";
  document.getElementById("ceModal").classList.remove("hidden");
  document.getElementById("ceBackdrop").classList.remove("hidden");
}

function closeCardEditor(){document.getElementById("ceModal").classList.add("hidden");document.getElementById("ceBackdrop").classList.add("hidden");}

function saveCardEditor(){
  const{grid:dk,idx,imgData}=ceState; const isNew=idx===-1;
  const isSketch=dk==="sketchbookImages"||dk.startsWith("custom_sketch_");
  if(!C[dk])C[dk]=[];
  if(isSketch){
    const o=isNew?{}:{...C[dk][idx]};
    const url=document.getElementById("ceFieldImageUrl").value.trim();
    o.image=imgData||url||o.image||""; o.caption=document.getElementById("ceFieldCaption").value.trim();
    if(isNew)C[dk].push(o);else C[dk][idx]=o;
  }else{
    const o=isNew?{}:{...C[dk][idx]};
    o.title=document.getElementById("ceFieldTitle").value.trim();
    o.description=document.getElementById("ceFieldDesc").value.trim();
    o.tags=document.getElementById("ceFieldTags").value.split(",").map(s=>s.trim()).filter(Boolean);
    o.medium=document.getElementById("ceFieldMedium").value.trim();
    o.year=document.getElementById("ceFieldYear").value.trim();
    const eid=document.getElementById("ceFieldEmbedId").value.trim();
    if(eid){o.embedId=eid;delete o.thumbnail;}
    else{const url=document.getElementById("ceFieldImageUrl").value.trim();o.thumbnail=imgData||url||o.thumbnail||"";delete o.embedId;}
    if(isNew)C[dk].push(o);else C[dk][idx]=o;
  }
  closeCardEditor();reRenderSections();
}

document.getElementById("ceSave").addEventListener("click",saveCardEditor);
document.getElementById("ceCancel").addEventListener("click",closeCardEditor);
document.getElementById("ceClose").addEventListener("click",closeCardEditor);
document.getElementById("ceDelete").addEventListener("click",()=>{if(ceState.idx>=0&&confirm("Delete?")){C[ceState.grid].splice(ceState.idx,1);closeCardEditor();reRenderSections();}});
document.getElementById("ceBackdrop").addEventListener("click",closeCardEditor);
document.getElementById("ceFileInput").addEventListener("change",async function(){
  if(!this.files[0])return;const d=await compressImage(this.files[0]);ceState.imgData=d;
  document.getElementById("ceImgPreview").innerHTML=`<img src="${d}" />`;
});

async function compressImage(file,maxW=1200,q=0.75){
  return new Promise(r=>{const rd=new FileReader();rd.onload=e=>{const img=new Image();img.onload=()=>{const c=document.createElement("canvas");let w=img.width,h=img.height;if(w>maxW){h=h*maxW/w;w=maxW}c.width=w;c.height=h;c.getContext("2d").drawImage(img,0,0,w,h);r(c.toDataURL("image/jpeg",q))};img.src=e.target.result};rd.readAsDataURL(file)});
}

/* ================================================================
   ADD SECTION MODAL
   ================================================================ */
let addSecInsertIdx=0;
let addSecType="projectGrid";

document.querySelectorAll(".sec-type-card").forEach(c=>{
  c.addEventListener("click",()=>{
    document.querySelectorAll(".sec-type-card").forEach(x=>x.classList.remove("active"));
    c.classList.add("active"); addSecType=c.dataset.type;
  });
});
document.querySelectorAll(".theme-btn").forEach(b=>{
  b.addEventListener("click",()=>{document.querySelectorAll(".theme-btn").forEach(x=>x.classList.remove("active"));b.classList.add("active");});
});

function openAddSecModal(){document.getElementById("addSecModal").classList.remove("hidden");document.getElementById("addSecBackdrop").classList.remove("hidden");document.getElementById("addSecTitle").value="";document.getElementById("addSecSubtitle").value="";}
function closeAddSecModal(){document.getElementById("addSecModal").classList.add("hidden");document.getElementById("addSecBackdrop").classList.add("hidden");}

document.getElementById("addSecClose").addEventListener("click",closeAddSecModal);
document.getElementById("addSecBackdrop").addEventListener("click",closeAddSecModal);
document.getElementById("addSecConfirm").addEventListener("click",()=>{
  const title=document.getElementById("addSecTitle").value.trim();
  if(!title){alert("Enter a section title.");return;}
  const dark=document.querySelector(".theme-btn.active")?.dataset.theme==="dark";
  const uid="sec_"+Date.now();
  const dataKey="custom_"+(addSecType==="sketchGrid"?"sketch_":"project_")+uid;
  C[dataKey]=[];
  const num=String(C.sections.length+1).padStart(2,"0");
  const cfg={id:uid,type:addSecType,dataKey,title,number:num,subtitle:document.getElementById("addSecSubtitle").value.trim(),dark,layout:addSecType==="sketchGrid"?"3col":"2col"};
  if(addSecType==="text"){cfg.dataKey="text_"+uid;C["text_"+uid]="";}
  C.sections.splice(addSecInsertIdx,0,cfg);
  closeAddSecModal();reRenderSections();showToast(`Added "${title}" section.`);
});

/* ================================================================
   EDIT MODE
   ================================================================ */
function enterEditMode(){editMode=true;snapshot=JSON.stringify(C);document.body.classList.add("edit-mode");document.getElementById("adminToolbar").classList.remove("hidden");reRenderSections();}
async function exitEditMode(save){if(save){captureAllEdits();await saveContent();}else{C=JSON.parse(snapshot);}editMode=false;snapshot=null;document.body.classList.remove("edit-mode");document.getElementById("adminToolbar").classList.add("hidden");reRenderSections();}

document.getElementById("toolbarSave").addEventListener("click",async ()=>{captureAllEdits();const ok=await saveContent();if(ok){snapshot=JSON.stringify(C);reRenderSections();showToast("Saved!");}});
document.getElementById("toolbarDiscard").addEventListener("click",()=>{if(!confirm("Discard all unsaved changes?"))return;C=JSON.parse(snapshot);reRenderSections();showToast("Discarded.");});
document.getElementById("toolbarReset").addEventListener("click",async ()=>{if(!confirm("Reset everything to factory defaults?"))return;C=structuredClone(defaultContent);const ok=await saveContent();if(ok){snapshot=JSON.stringify(C);reRenderSections();showToast("Reset.");}});
document.getElementById("toolbarExit").addEventListener("click",()=>{exitEditMode(false);});

function showToast(msg){let t=document.getElementById("editorToast");if(!t){t=document.createElement("div");t.id="editorToast";t.className="editor-toast";document.body.appendChild(t);}t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200);}

/* ================================================================
   LOGIN
   ================================================================ */
function initAdmin(){
  const open=document.getElementById("adminOpenBtn");
  open.addEventListener("click",e=>{
    e.preventDefault();
    if(isAuthed){enterEditMode();return;}
    window.netlifyIdentity?.open("login");
  });

  window.netlifyIdentity?.on("init",user=>{isAuthed=!!user;});
  window.netlifyIdentity?.on("login",()=>{isAuthed=true;window.netlifyIdentity.close();enterEditMode();});
  window.netlifyIdentity?.on("logout",()=>{isAuthed=false;if(editMode)exitEditMode(false);});
  window.netlifyIdentity?.init();

  document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeCardEditor();closeAddSecModal();}});
}

/* ================================================================
   LIGHTBOX / HEADER / NAV
   ================================================================ */
function openLightbox(src,alt){if(editMode)return;const lb=document.getElementById("lightbox");document.getElementById("lightboxImg").src=src;document.getElementById("lightboxImg").alt=alt||"";lb.classList.add("open");lb.setAttribute("aria-hidden","false");}
function closeLightbox(){const lb=document.getElementById("lightbox");lb.classList.remove("open");lb.setAttribute("aria-hidden","true");document.getElementById("lightboxImg").src="";}
document.querySelector(".lightbox-close")?.addEventListener("click",closeLightbox);
document.getElementById("lightbox")?.addEventListener("click",e=>{if(e.target===e.currentTarget)closeLightbox();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLightbox();});
function observeReveals(){const o=new IntersectionObserver(en=>{let n=0;en.forEach(e=>{if(e.isIntersecting){e.target.style.setProperty("--d",Math.min(n++,4)*80+"ms");e.target.classList.add("visible");o.unobserve(e.target)}})},{threshold:0.1});document.querySelectorAll(".reveal:not(.visible)").forEach(el=>o.observe(el));}
function initHeader(){const h=document.getElementById("siteHeader");if(!h)return;const fn=()=>h.classList.toggle("scrolled",window.scrollY>40);window.addEventListener("scroll",fn,{passive:true});fn();}
function initActiveNav(){const lnk=document.querySelectorAll(".site-nav a[href^='#']"),secs=[...lnk].map(a=>document.querySelector(a.getAttribute("href"))).filter(Boolean);function u(){let c="";secs.forEach(s=>{if(s.getBoundingClientRect().top<=160)c=s.id});lnk.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+c))}window.addEventListener("scroll",u,{passive:true});u();}
/* Lazy images above the target can still be loading while we scroll there, which shifts the page.
   After the smooth scroll settles, nudge once more so the section lands right under the header. */
function initAnchorScroll(){document.addEventListener("click",e=>{const a=e.target.closest("a[href^='#']");if(!a||a.getAttribute("href").length<2)return;const t=document.querySelector(a.getAttribute("href"));if(!t)return;e.preventDefault();history.replaceState(null,"",a.getAttribute("href"));
  const go=b=>window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-60,behavior:b});go("smooth");
  let n=0;const fix=()=>{if(Math.abs(t.getBoundingClientRect().top-60)>4&&n++<3)go("auto");};setTimeout(fix,900);setTimeout(fix,1600);});}
function initMobileMenu(){const t=document.getElementById("menuToggle"),n=document.getElementById("siteNav");t.addEventListener("click",()=>n.classList.toggle("open"));n.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>n.classList.remove("open")));}

/* ================================================================
   BOOT
   ================================================================ */
(async function boot(){
  C = await loadContent();
  reRenderSections();
  initHeader(); initActiveNav(); initAdmin(); initMobileMenu(); initAnchorScroll();
})();
