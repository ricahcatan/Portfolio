 function openLightbox(src, alt) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    img.alt = alt || '';
    lb.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    const lb = document.getElementById('lightbox');
    lb.style.display = 'none';
    document.getElementById('lightbox-img').src = '';
    document.body.style.overflow = '';
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });
// Custom cursor


  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top = e.clientY + 'px';
  });

  // Falling petals
  const petalsContainer = document.getElementById('petals');
  const colors = ['#ffb3c6','#ff6b9d','#ffe0ec','#ff8fb3','#f9a8d4'];
  for (let i = 0; i < 25; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.top = Math.random() * 100 + 'vh';
    petal.style.animationDelay = Math.random() * 15 + 's';
    petal.style.animationDuration = (8 + Math.random() * 10) + 's';
    petal.style.background = colors[Math.floor(Math.random() * colors.length)];
    petal.style.width = (6 + Math.random() * 8) + 'px';
    petal.style.height = (9 + Math.random() * 10) + 'px';
    petalsContainer.appendChild(petal);
  }

  // Intersection observer for reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  // Modal functions
  function openModal(id) {
    const overlay = document.getElementById(id);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(id) {
    const overlay = document.getElementById(id);
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  function handleOverlayClick(e, id) {
    if (e.target === document.getElementById(id)) closeModal(id);
  }
  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(m => {
        m.classList.remove('open');
        document.body.style.overflow = '';
      });
    }
  });