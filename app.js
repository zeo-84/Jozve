// ===== State =====
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
    return `
      <div class="category-card ${currentCategory === c.id ? 'active' : ''}" data-cat="${c.id}">
        <i data-lucide="${c.icon}" class="category-icon"></i>
        <div class="category-name">${c.name}</div>
        <div class="category-count">${count} note${count !== 1 ? 's' : ''}</div>
      </div>
    `;
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
    notesGrid.innerHTML = `
      <div class="empty-state">
        <i data-lucide="search-x" class="empty-icon"></i>
        <h3>No notes found</h3>
        <p>Try a different search or category.</p>
      </div>
    `;
    initIcons();
    return;
  }

  notesGrid.innerHTML = filtered.map(n => `
    <article class="note-card" data-id="${n.id}">
      <div class="note-header">
        <div class="note-icon">
          <i data-lucide="${n.icon || 'book-open'}"></i>
        </div>
        <div>
          <h3 class="note-title">${n.title}</h3>
          <div class="note-category">${n.category}</div>
        </div>
      </div>
      <p class="note-desc">${n.description}</p>
      <div class="note-footer">
        <span class="note-tag">${n.tag || 'Note'}</span>
        <span class="read-more">Read more <i data-lucide="arrow-right"></i></span>
      </div>
    </article>
  `).join('');

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
  modalMeta.textContent = `${note.category} • ${note.date || '2026'}`;
  modalIcon.innerHTML = `<i data-lucide="${note.icon || 'book-marked'}"></i>`;
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
