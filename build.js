// build.js
// این اسکریپت رو با دستور: node build.js اجرا کن
// تا همه‌ی فایل‌های پروژه با آیکون‌های Lucide ساخته بشن

const fs = require("fs");
const path = require("path");

const files = {
  "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DigiNotes — Your Digital Library</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Vazirmatn:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body>
  <!-- Animated background -->
  <div class="bg-orbs">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
  </div>

  <!-- Header -->
  <header class="glass header">
    <div class="logo">
      <i data-lucide="book-open" class="logo-icon"></i>
      <span class="logo-text">Digi<span class="accent">Notes</span></span>
    </div>
    <div class="search-wrap">
      <i data-lucide="search" class="search-icon"></i>
      <input type="text" id="searchInput" placeholder="Search notes..." />
    </div>
    <div class="header-actions">
      <button class="icon-btn" id="themeToggle" title="Toggle theme">
        <i data-lucide="moon" id="themeIcon"></i>
      </button>
    </div>
  </header>

  <!-- Hero -->
  <section class="hero">
    <h1 class="hero-title">Your <span class="accent">Digital</span> Library</h1>
    <p class="hero-sub">Beautifully crafted study notes, all in one place.</p>
  </section>

  <!-- Categories -->
  <section class="categories glass">
    <h2 class="section-title">
      <i data-lucide="folder-kanban" class="title-icon"></i> Categories
    </h2>
    <div class="category-grid" id="categoryGrid"></div>
  </section>

  <!-- Notes Grid -->
  <section class="notes-section">
    <h2 class="section-title">
      <i data-lucide="sparkles" class="title-icon"></i> All Notes
      <span class="note-count" id="noteCount">0</span>
    </h2>
    <div class="notes-grid" id="notesGrid"></div>
  </section>

  <!-- Note Reader Modal -->
  <div class="modal" id="noteModal">
    <div class="modal-backdrop"></div>
    <div class="modal-content glass">
      <div class="modal-header">
        <div class="modal-title-wrap">
          <div class="modal-icon" id="modalIcon">
            <i data-lucide="book-marked"></i>
          </div>
          <div>
            <h3 class="modal-title" id="modalTitle"></h3>
            <p class="modal-meta" id="modalMeta"></p>
          </div>
        </div>
        <button class="icon-btn close-btn" id="closeModal">
          <i data-lucide="x"></i>
        </button>
      </div>
      <div class="modal-body" id="modalBody"></div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="glass footer">
    <p>Crafted with <i data-lucide="heart" class="footer-heart"></i> — DigiNotes © 2026</p>
  </footer>

  <script src="notes.js"></script>
  <script src="app.js"></script>
</body>
</html>`,

  "style.css": `/* ===== Reset & Base ===== */
* { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg-1: #0a0a1f;
  --bg-2: #1a0a2e;
  --glass-bg: rgba(255, 255, 255, 0.06);
  --glass-border: rgba(255, 255, 255, 0.12);
  --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  --text: #f0f0ff;
  --text-dim: #a0a0c0;
  --accent: #a78bfa;
  --accent-2: #60a5fa;
  --accent-3: #f472b6;
  --glow: 0 0 40px rgba(167, 139, 250, 0.3);
}

body.light {
  --bg-1: #e8eaf6;
  --bg-2: #f5f3ff;
  --glass-bg: rgba(255, 255, 255, 0.5);
  --glass-border: rgba(255, 255, 255, 0.8);
  --text: #1a1a2e;
  --text-dim: #5a5a7a;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, var(--bg-1), var(--bg-2));
  color: var(--text);
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  transition: background 0.4s ease, color 0.4s ease;
}

/* ===== Lucide Icons Base ===== */
[data-lucide] {
  width: 1em;
  height: 1em;
  stroke-width: 2;
  stroke: currentColor;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* ===== Animated Orbs ===== */
.bg-orbs {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  animation: float 20s infinite ease-in-out;
}
.orb-1 { width: 400px; height: 400px; background: var(--accent); top: -100px; left: -100px; }
.orb-2 { width: 500px; height: 500px; background: var(--accent-2); bottom: -150px; right: -150px; animation-delay: -7s; }
.orb-3 { width: 300px; height: 300px; background: var(--accent-3); top: 50%; left: 50%; animation-delay: -14s; }

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(50px, -50px) scale(1.1); }
  66% { transform: translate(-30px, 40px) scale(0.95); }
}

/* ===== Glass Effect ===== */
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  box-shadow: var(--glass-shadow);
}

/* ===== Layout ===== */
main, header, section, footer { position: relative; z-index: 1; }

/* ===== Header ===== */
.header {
  position: sticky;
  top: 10px;
  margin: 10px 20px;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 1.3rem;
}
.logo-icon {
  font-size: 1.8rem;
  color: var(--accent);
  filter: drop-shadow(0 0 10px var(--accent));
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
.accent {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.search-wrap {
  flex: 1;
  position: relative;
  max-width: 400px;
}
.search-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.1rem;
  color: var(--text-dim);
}
#searchInput {
  width: 100%;
  padding: 10px 16px 10px 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  color: var(--text);
  font-family: inherit;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.3s;
}
#searchInput:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.2);
}

.icon-btn {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid var(--glass-border);
  background: rgba(255, 255, 255, 0.05);
  color: var(--text);
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}
.icon-btn:hover {
  background: var(--accent);
  color: white;
  transform: translateY(-2px);
  box-shadow: var(--glow);
}

/* ===== Hero ===== */
.hero {
  text-align: center;
  padding: 60px 20px 40px;
}
.hero-title {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 12px;
}
.hero-sub {
  color: var(--text-dim);
  font-size: 1.1rem;
  max-width: 500px;
  margin: 0 auto;
}

/* ===== Section Titles ===== */
.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 20px;
}
.title-icon {
  font-size: 1.6rem;
  color: var(--accent);
  filter: drop-shadow(0 0 8px var(--accent));
}
.note-count {
  margin-left: auto;
  font-size: 0.85rem;
  padding: 4px 12px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  border-radius: 20px;
  font-weight: 600;
  color: white;
}

/* ===== Categories ===== */
.categories {
  margin: 20px;
  padding: 24px;
}
.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 14px;
}
.category-card {
  padding: 18px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}
.category-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent, rgba(167, 139, 250, 0.1));
  opacity: 0;
  transition: opacity 0.3s;
}
.category-card:hover::before { opacity: 1; }
.category-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
  box-shadow: var(--glow);
}
.category-card.active {
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.2), rgba(96, 165, 250, 0.2));
  border-color: var(--accent);
}
.category-icon {
  font-size: 2.2rem;
  margin-bottom: 8px;
  display: block;
  color: var(--accent);
}
.category-name {
  font-weight: 600;
  font-size: 0.95rem;
}
.category-count {
  font-size: 0.8rem;
  color: var(--text-dim);
  margin-top: 4px;
}

/* ===== Notes Section ===== */
.notes-section {
  margin: 40px 20px;
}
.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.note-card {
  padding: 22px;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}
.note-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent-3));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s;
}
.note-card:hover::before { transform: scaleX(1); }
.note-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), var(--glow);
  border-color: var(--accent);
}

.note-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}
.note-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: white;
  box-shadow: 0 4px 15px rgba(167, 139, 250, 0.4);
}
.note-title {
  font-size: 1.15rem;
  font-weight: 700;
  font-family: 'Vazirmatn', sans-serif;
  direction: rtl;
}
.note-category {
  font-size: 0.75rem;
  color: var(--text-dim);
  margin-top: 2px;
}
.note-desc {
  color: var(--text-dim);
  font-size: 0.9rem;
  line-height: 1.6;
  font-family: 'Vazirmatn', sans-serif;
  direction: rtl;
  text-align: right;
  margin-bottom: 14px;
}
.note-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid var(--glass-border);
}
.note-tag {
  font-size: 0.75rem;
  padding: 4px 10px;
  background: rgba(167, 139, 250, 0.15);
  border-radius: 10px;
  color: var(--accent);
  font-weight: 600;
}
.read-more {
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* ===== Modal ===== */
.modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.modal.open { display: flex; }
.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
}
.modal-content {
  position: relative;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 28px;
  animation: modalIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes modalIn {
  from { opacity: 0; transform: translateY(30px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--glass-border);
}
.modal-title-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}
.modal-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  box-shadow: 0 4px 20px rgba(167, 139, 250, 0.5);
}
.modal-title {
  font-size: 1.5rem;
  font-weight: 800;
  font-family: 'Vazirmatn', sans-serif;
  direction: rtl;
}
.modal-meta {
  color: var(--text-dim);
  font-size: 0.85rem;
  margin-top: 4px;
}
.close-btn {
  background: rgba(255, 100, 100, 0.1);
  border-color: rgba(255, 100, 100, 0.3);
}
.close-btn:hover {
  background: #ff6464;
  border-color: #ff6464;
}

.modal-body {
  font-family: 'Vazirmatn', sans-serif;
  direction: rtl;
  text-align: right;
  line-height: 2;
  font-size: 1rem;
  color: var(--text);
}
.modal-body h2 {
  font-size: 1.4rem;
  margin: 24px 0 12px;
  color: var(--accent);
  font-weight: 700;
  padding-right: 12px;
  border-right: 3px solid var(--accent);
}
.modal-body h3 {
  font-size: 1.15rem;
  margin: 18px 0 10px;
  color: var(--accent-2);
}
.modal-body p { margin-bottom: 12px; }
.modal-body ul, .modal-body ol {
  margin: 12px 20px 12px 0;
}
.modal-body li { margin-bottom: 8px; }
.modal-body code {
  background: rgba(167, 139, 250, 0.15);
  padding: 2px 8px;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  direction: ltr;
  display: inline-block;
}
.modal-body pre {
  background: rgba(0, 0, 0, 0.3);
  padding: 16px;
  border-radius: 12px;
  overflow-x: auto;
  margin: 14px 0;
  direction: ltr;
  text-align: left;
  border: 1px solid var(--glass-border);
}
.modal-body pre code {
  background: transparent;
  padding: 0;
}
.modal-body blockquote {
  border-right: 3px solid var(--accent-3);
  padding: 10px 16px;
  margin: 14px 0;
  background: rgba(244, 114, 182, 0.08);
  border-radius: 0 10px 10px 0;
  font-style: italic;
}
.modal-body .highlight {
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.2), rgba(96, 165, 250, 0.2));
  padding: 14px 18px;
  border-radius: 12px;
  margin: 14px 0;
  border: 1px solid var(--glass-border);
}

/* ===== Footer ===== */
.footer {
  margin: 40px 20px 20px;
  padding: 20px;
  text-align: center;
  color: var(--text-dim);
  font-size: 0.9rem;
}
.footer-heart {
  color: var(--accent-3);
  animation: heartbeat 1.5s infinite;
}
@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

/* ===== Empty State ===== */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-dim);
  grid-column: 1 / -1;
}
.empty-state .empty-icon {
  font-size: 4rem;
  margin-bottom: 16px;
  opacity: 0.5;
  color: var(--accent);
}

/* ===== Scrollbar ===== */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: var(--accent);
  border-radius: 4px;
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
  .header {
    flex-wrap: wrap;
    padding: 12px 16px;
    gap: 12px;
  }
  .search-wrap { order: 3; flex-basis: 100%; max-width: 100%; }
  .hero { padding: 40px 16px 24px; }
  .categories, .notes-section { margin: 16px; }
  .notes-grid { grid-template-columns: 1fr; }
  .modal-content { padding: 20px; }
  .modal-title { font-size: 1.2rem; }
}

@media (max-width: 480px) {
  .category-grid { grid-template-columns: repeat(2, 1fr); }
  .logo-text { font-size: 1.1rem; }
}
`,

  "app.js": `// ===== State =====
let currentCategory = 'all';
let searchQuery = '';

// ===== DOM Elements =====
const $ = (id) => document.getElementById(id);
const categoryGrid = $('categoryGrid');
const notesGrid = $('notesGrid');
const noteCount = $('noteCount');
const searchInput = $('searchInput');
const noteModal = $('noteModal');
const modalTitle = $('modalTitle');
const modalMeta = $('modalMeta');
const modalIcon = $('modalIcon');
const modalBody = $('modalBody');
const closeModalBtn = $('closeModal');
const themeToggle = $('themeToggle');

// ===== Initialize Lucide Icons =====
function initIcons() {
  lucide.createIcons();
}

// ===== Categories =====
function renderCategories() {
  const cats = [{ id: 'all', name: 'All Notes', icon: 'star' }];
  const seen = new Set();
  NOTES.forEach(n => {
    if (!seen.has(n.category)) {
      seen.add(n.category);
      cats.push({ id: n.category, name: n.category, icon: n.categoryIcon || 'folder' });
    }
  });

  categoryGrid.innerHTML = cats.map(c => {
    const count = c.id === 'all' ? NOTES.length : NOTES.filter(n => n.category === c.id).length;
    return \`
      <div class="category-card \${currentCategory === c.id ? 'active' : ''}" data-cat="\${c.id}">
        <i data-lucide="\${c.icon}" class="category-icon"></i>
        <div class="category-name">\${c.name}</div>
        <div class="category-count">\${count} note\${count !== 1 ? 's' : ''}</div>
      </div>
    \`;
  }).join('');

  initIcons();

  categoryGrid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      currentCategory = card.dataset.cat;
      renderCategories();
      renderNotes();
    });
  });
}

// ===== Notes =====
function renderNotes() {
  let filtered = NOTES;
  if (currentCategory !== 'all') {
    filtered = filtered.filter(n => n.category === currentCategory);
  }
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(n =>
      n.title.toLowerCase().includes(q) ||
      n.description.toLowerCase().includes(q) ||
      n.category.toLowerCase().includes(q)
    );
  }

  noteCount.textContent = filtered.length;

  if (filtered.length === 0) {
    notesGrid.innerHTML = \`
      <div class="empty-state">
        <i data-lucide="search-x" class="empty-icon"></i>
        <h3>No notes found</h3>
        <p>Try a different search or category.</p>
      </div>
    \`;
    initIcons();
    return;
  }

  notesGrid.innerHTML = filtered.map(n => \`
    <article class="note-card" data-id="\${n.id}">
      <div class="note-header">
        <div class="note-icon">
          <i data-lucide="\${n.icon || 'book-open'}"></i>
        </div>
        <div>
          <h3 class="note-title">\${n.title}</h3>
          <div class="note-category">\${n.category}</div>
        </div>
      </div>
      <p class="note-desc">\${n.description}</p>
      <div class="note-footer">
        <span class="note-tag">\${n.tag || 'Note'}</span>
        <span class="read-more">Read more <i data-lucide="arrow-right"></i></span>
      </div>
    </article>
  \`).join('');

  initIcons();

  notesGrid.querySelectorAll('.note-card').forEach(card => {
    card.addEventListener('click', () => openNote(card.dataset.id));
  });
}

// ===== Modal =====
function openNote(id) {
  const note = NOTES.find(n => n.id === id);
  if (!note) return;
  modalTitle.textContent = note.title;
  modalMeta.textContent = \`\${note.category} • \${note.date || '2026'}\`;
  modalIcon.innerHTML = \`<i data-lucide="\${note.icon || 'book-marked'}"></i>\`;
  modalBody.innerHTML = note.content;
  noteModal.classList.add('open');
  document.body.style.overflow = 'hidden';
  initIcons();
}

function closeNote() {
  noteModal.classList.remove('open');
  document.body.style.overflow = '';
}

closeModalBtn.addEventListener('click', closeNote);
noteModal.querySelector('.modal-backdrop').addEventListener('click', closeNote);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeNote();
});

// ===== Search =====
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderNotes();
});

// ===== Theme Toggle =====
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  $('themeIcon').setAttribute('data-lucide', isLight ? 'sun' : 'moon');
  initIcons();
});

// ===== Init =====
renderCategories();
renderNotes();
`,

  "notes.js": `// ===== NOTES DATA =====
// هر جزوه رو اینجا اضافه می‌کنیم
// ساختار هر جزوه:
// {
//   id: 'unique-id',
//   title: 'عنوان جزوه (فارسی)',
//   description: 'توضیح کوتاه (فارسی)',
//   category: 'نام دسته‌بندی (انگلیسی)',
//   categoryIcon: 'نام آیکون Lucide (انگلیسی)',
//   icon: 'نام آیکون Lucide (انگلیسی)',
//   tag: 'برچسب',
//   date: '2026',
//   content: 'محتوای HTML جزوه (فارسی)'
// }

const NOTES = [
  // نمونه اولیه — بعداً پاک می‌کنیم و جزوات واقعی رو اضافه می‌کنیم
  {
    id: 'welcome',
    title: 'به DigiNotes خوش آمدید',
    description: 'این یک جزوه نمونه است تا ساختار برنامه را ببینید. به زودی جزوات واقعی اضافه می‌شوند.',
    category: 'Getting Started',
    categoryIcon: 'rocket',
    icon: 'sparkles',
    tag: 'Welcome',
    date: '2026',
    content: \`
      <h2>سلام! 👋</h2>
      <p>به <strong>DigiNotes</strong> خوش آمدید — کتابخانه دیجیتال شما برای جزوات درسی.</p>
      <div class="highlight">
        💡 <strong>نکته:</strong> این یک جزوه نمونه است. به زودی جزوات واقعی رو با هم اضافه می‌کنیم.
      </div>
      <h3>ویژگی‌های برنامه:</h3>
      <ul>
        <li>🎨 طراحی مدرن با استایل Glassmorphism</li>
        <li>📱 کاملاً ریسپانسیو روی موبایل</li>
        <li>🔍 جستجوی سریع در جزوات</li>
        <li>🗂️ دسته‌بندی هوشمند</li>
        <li>🌙 حالت تاریک و روشن</li>
      </ul>
      <blockquote>هر وقت آماده بودی، بگو تا اولین جزوه واقعی رو اضافه کنیم!</blockquote>
    \`
  }
];
`,
};

// ===== Build Files =====
console.log("🚀 Building DigiNotes project with Lucide Icons...\n");

Object.entries(files).forEach(([filename, content]) => {
  fs.writeFileSync(filename, content, "utf8");
  console.log("✅ Created:", filename);
});

console.log("\n✨ Done! Run this command to open the project:");
console.log(
  '   → Start a local server (e.g., "python -m http.server" or "npx serve")'
);
console.log("   → Then open http://localhost:8000 in your browser\n");
console.log("💡 Next step: Tell me what note to add first! 📚");
