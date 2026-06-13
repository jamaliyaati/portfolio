/* ============================================================
   DATA
   ============================================================ */
const TIMELINE = [
   {
    year: "2021 – 2023",
    tag: "Freelance",
    title: "Fiverr",
    desc: "Built real-world experience working with clients across different industries. Learned to manage projects, communicate effectively, and deliver results under pressure — all while building a reputation from scratch.",
    tags: ["Freelance", "Clients", "Projects"]
  },
  {
    year: "2022 – 2023",
    tag: "Professional",
    title: "Intern — CollegeSync.co",
    desc: "Interned at a firm helping students navigate college applications. Sharpened professional communication, research skills, and student-focused problem solving in a fast-paced, detail-oriented environment.",
    tags: ["Social Media Management", "Communication"]
  },
  {
    year: "2022 – Present",
    tag: "Volunteer",
    title: "Madat Balochistan",
    desc: "Worked at a grassroot level to help flood affectees, Helped raise donations on social media platforms ",
    tags: ["Non-Profit", "Community", "Leadership"]
  },
  {
    year: "2023 – present",
    tag: "athlete",
    title: "Marathoner - IRU SpeedSquad",
    desc: "What started as a personal challenge grew into something bigger. Consistent training and discipline led to being scouted and recruited by IslamabadRunWithUs as an athlete. Running taught me more about consistency than any book ever did.",
    tags: ["Athletics", "Discipline", "Growth"]
  },
  {
    year: "2024",
    tag: "Climate",
    title: "COP29 — Baku, Azerbaijan",
    desc: "Attended the UN Climate Conference and engaged with global conversations on sustainability, policy, and international collaboration. One of the most eye-opening experiences — sitting at the table where the world negotiates its future.",
    tags: ["Climate", "Global", "Advocacy"]
  },
  {
  year: "Dec 2024 – Dec 2025",
  tag: "Climate",
  title: "Climate Research Volunteer — Fridays For Future Pakistan",
  desc: "Researched and cataloged systemic root causes, structural variables, and direct environmental impacts of climate-driven disasters within Pakistan. Synthesized complex climate data into digestible educational content and asset copy for national digital awareness campaigns.",
  tags: ["Climate", "Research", "Advocacy"]
},
  
  {
    year: "ongoing",
    tag: "Projects",
    title: "Personal development projects",
    desc: "Building small tools and experiments to learn, break things, and solve problems I actually have. Python scripts, Linux configs, automation tools — each project teaches something new.",
    tags: ["Linux", "Python","Dot Files", "Learning"]
  }
];
 


const PROJECTS = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>`,
    title: "Hyprland dotfiles",
    desc: "Curated dotfiles and config files for a clean, productive Arch Linux desktop. Includes shell aliases, vim config, and window manager settings.",
    tags: ["Linux", "Shell", "Config"],
    cat: "linux",
    github: true
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    title: "Automation Scripts",
    desc: "Created multiple scripts to automate repetitive tasks — file organization, data processing, and automatic data backup .",
    tags: ["Python", "Automation", "CLI"],
    cat: "python",
    github: true
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>`,
    title: "Film Club",
    desc: "GTA in School — a creative live-action video produced for my school’s media club, featuring cinematic editing, game-inspired effects, and storytelling.",
    tags: ["Video", "Editing", "Creative"],
    cat: "creative",
    github: false
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    title: "Thailand Pavilion - COP 29",
    desc: "Represented youth perspectives as a panelist at the Thailand Pavilion during COP29, contributing to discussions on climate action, youth engagement, and international climate policy.",
    tags: ["Climate", "Research", "Writing"],
    cat: "research",
    github: false
  },
];

const ALL_CATS = ["all", "linux", "python", "creative", "research"];

/* ============================================================
   STATE
   ============================================================ */
let tlMode = "guided";
let tlIdx  = 0;
let currentCat = "all";

/* ============================================================
   PRELOADER
   ============================================================ */
(function runPreloader() {
  const fill    = document.getElementById("preloader-fill");
  const pct     = document.getElementById("preloader-percent");
  const loader  = document.getElementById("preloader");
  let progress  = 0;

  const tick = setInterval(() => {
    progress += Math.random() * 12 + 4;
    if (progress >= 100) {
      progress = 100;
      clearInterval(tick);
      fill.style.width = "100%";
      pct.textContent  = "100%";
      setTimeout(() => {
        loader.classList.add("hidden");
        initReveal();
        initTimeline();
        initProjects();
      }, 500);
    }
    fill.style.width = progress + "%";
    pct.textContent  = Math.floor(progress) + "%";
  }, 60);
})();

/* ============================================================
   CURSOR
   ============================================================ */
const cursor   = document.getElementById("cursor");
const follower = document.getElementById("cursor-follower");
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener("mousemove", e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + "px";
  cursor.style.top  = my + "px";
});

(function animateCursor() {
  fx += (mx - fx) * 0.12;
  fy += (my - fy) * 0.12;
  follower.style.left = fx + "px";
  follower.style.top  = fy + "px";
  requestAnimationFrame(animateCursor);
})();

/* ============================================================
   NAV
   ============================================================ */
const nav     = document.getElementById("nav");
const menuBtn = document.getElementById("nav-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  mobileMenu.classList.toggle("open");
  document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
});

mobileMenu.querySelectorAll(".mobile-nav-link").forEach(link => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
  });
});

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".reveal-up").forEach(el => observer.observe(el));
}

/* ============================================================
   TIMELINE
   ============================================================ */
function initTimeline() {
  renderDots();
  renderCard();
  renderAllItems();
}

function renderDots() {
  const el = document.getElementById("tl-dots");
  el.innerHTML = TIMELINE.map((_, i) => {
    const cls = i < tlIdx ? "done" : i === tlIdx ? "current" : "";
    return `<button class="tl-dot ${cls}" onclick="tlGoto(${i})">${String(i + 1).padStart(2, "0")}</button>`;
  }).join("");
}

function renderCard() {
  const t = TIMELINE[tlIdx];
  document.getElementById("tl-card").innerHTML = `
    <div class="tl-card-year">${t.year}</div>
    <span class="tl-card-tag">${t.tag}</span>
    <div class="tl-card-title">${t.title}</div>
    <div class="tl-card-desc">${t.desc}</div>
    <div class="tl-card-tags">${t.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
  `;
  document.getElementById("btn-prev").disabled = tlIdx === 0;
  document.getElementById("btn-next").disabled = tlIdx === TIMELINE.length - 1;
  document.getElementById("tl-counter").textContent = `${tlIdx + 1} of ${TIMELINE.length}`;
  document.getElementById("tl-progress-label").textContent =
    String(tlIdx + 1).padStart(2, "0") + " / " + String(TIMELINE.length).padStart(2, "0");
  renderDots();
}

function tlMove(dir) {
  tlIdx = Math.max(0, Math.min(TIMELINE.length - 1, tlIdx + dir));
  renderCard();
}

function tlGoto(i) {
  tlIdx = i;
  renderCard();
}

function renderAllItems() {
  document.getElementById("tl-all-list").innerHTML = TIMELINE.map((t, i) => `
    <div class="tla-item" id="tla-${i}">
      <div class="tla-year">${t.year}</div>
      <div>
        <div class="tla-title">${t.title}</div>
        <div class="tla-desc">${t.desc}</div>
        <div class="tla-tags">${t.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
      </div>
    </div>
  `).join("");
}

function setTlMode(mode) {
  tlMode = mode;
  document.getElementById("btn-guided").classList.toggle("active", mode === "guided");
  document.getElementById("btn-all").classList.toggle("active", mode === "all");
  document.getElementById("tl-guided").style.display = mode === "guided" ? "block" : "none";
  document.getElementById("tl-all").style.display    = mode === "all"    ? "block" : "none";
  document.getElementById("tl-progress-label").style.display = mode === "guided" ? "inline" : "none";

  if (mode === "all") {
    renderAllItems();
    setTimeout(() => {
      document.querySelectorAll(".tla-item").forEach((el, i) => {
        setTimeout(() => el.classList.add("visible"), i * 70);
      });
    }, 30);
  }
}

/* ============================================================
   PROJECTS
   ============================================================ */
function initProjects() {
  const filters = document.getElementById("proj-filters");
  filters.innerHTML = ALL_CATS.map(cat => `
    <button class="filter-btn ${cat === currentCat ? "active" : ""}" onclick="filterProj('${cat}')">${cat}</button>
  `).join("");
  renderProjects();
}

function filterProj(cat) {
  currentCat = cat;
  document.querySelectorAll("#proj-filters .filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.textContent === cat);
  });
  renderProjects();
}

function renderProjects() {
  const list = currentCat === "all" ? PROJECTS : PROJECTS.filter(p => p.cat === currentCat);
  document.getElementById("proj-grid").innerHTML = list.map(p => `
    <div class="proj-card">
      <div class="proj-card-header">
        <div class="proj-icon">${p.icon}</div>
        ${p.github ? `<span class="proj-link" title="GitHub">gh</span>` : ""}
      </div>
      <div class="proj-title">${p.title}</div>
      <div class="proj-desc">${p.desc}</div>
      <div class="proj-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </div>
  `).join("");
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
function openPhoto(src) {
  const lb  = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = src;
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closePhoto() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closePhoto();
});

/* ============================================================
   PHOTO EXPAND (hover preview)
   ============================================================ */
document.querySelectorAll('.photo-slot').forEach(slot => {
  const img = slot.querySelector('img');

  slot.addEventListener('mouseenter', () => {
    const rect = slot.getBoundingClientRect();
    const clone = img.cloneNode();
    clone.classList.add('photo-expand-clone');
    clone.style.position = 'fixed';
    clone.style.left = rect.left + 'px';
    clone.style.top = rect.top + 'px';
    clone.style.width = rect.width + 'px';
    clone.style.height = rect.height + 'px';
    clone.style.objectFit = 'contain';
    clone.style.zIndex = '8000';
    clone.style.margin = '0';
    clone.style.transition = 'all 0.5s cubic-bezier(0.4,0,0.2,1)';
    clone.style.borderRadius = '0';
    document.body.appendChild(clone);
    document.body.classList.add('photo-dimmed');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
clone.style.left = '5vw';
clone.style.top = '5vh';
clone.style.width = '80vw';
clone.style.height = '80vh';
        clone.style.filter = 'grayscale(0%) brightness(1)';
      });
    });

    slot._clone = clone;
  });

  slot.addEventListener('mouseleave', () => {
    const clone = slot._clone;
    if (!clone) return;
    const rect = slot.getBoundingClientRect();
    clone.style.left = rect.left + 'px';
    clone.style.top = rect.top + 'px';
    clone.style.width = rect.width + 'px';
    clone.style.height = rect.height + 'px';
    clone.style.filter = 'grayscale(15%) brightness(0.85)';
    clone.addEventListener('transitionend', () => clone.remove(), { once: true });
    slot._clone = null;
    document.body.classList.remove('photo-dimmed');
  });
});