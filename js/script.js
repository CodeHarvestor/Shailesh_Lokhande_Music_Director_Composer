// ===== Year
document.getElementById('yr').textContent = new Date().getFullYear();

// ===== Theme Toggle with persistence
(function themeInit(){
  const btn = document.getElementById('themeToggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);
  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', current);
    localStorage.setItem('theme', current);
  });
})();

// ===== Typing effect for tagline
(function typing(){
  const el = document.getElementById('typing');
  const phrases = [
    'Composer of Emotions',
    'Music Director & Storyteller',
    'Crafting Tunes that Move'
  ];
  let i = 0, j = 0, deleting = false;

  function tick(){
    const p = phrases[i];
    if(!deleting){
      el.textContent = p.slice(0, j++);
      if (j > p.length + 8) deleting = true;
    } else {
      el.textContent = p.slice(0, j--);
      if (j === 0){ deleting = false; i = (i+1) % phrases.length; }
    }
    setTimeout(tick, deleting ? 50 : 90);
  }
  tick();
})();

// ===== AOS (scroll animations)
AOS.init({
  once: true,
  duration: 700,
  offset: 80,
  easing: 'ease-out'
});

// ===== Parallax subtle on hero background
(function parallax(){
  const bg = document.querySelector('.hero-bg');
  if(!bg) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY * 0.15;
    bg.style.transform = `translateY(${y}px)`;
  });
})();

// ===== Inject Play Button overlay for all video thumbs
(function addPlayOverlays(){
  document.querySelectorAll('.video-thumb').forEach(t => {
    const wrap = document.createElement('span');
    wrap.className = 'play-btn';
    wrap.innerHTML = `<span class="dot"><span class="triangle"></span></span>`;
    t.appendChild(wrap);
  });
})();

// ===== Inline YouTube player on click (replaces thumbnail)
(function inlinePlayers(){
  function createIframe(id){
    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.loading = 'lazy';
    iframe.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.style.border = '0';
    iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    return iframe;
  }

  document.querySelectorAll('.work-item').forEach(item => {
    const link = item.querySelector('.video-thumb');
    if(!link) return;
    const ytId = link.getAttribute('data-video');
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // replace the image with iframe
      if (item.querySelector('iframe')) return; // already replaced
      const iframe = createIframe(ytId);
      link.replaceWith(iframe);
    });
  });
})();

// OPTIONAL: Autoplay first video silently as hero banner? (We keep it off by default)
// If you want: create a hero video container and inject muted autoplay loop.

// ===== Small tilt effect on cards (subtle)
(function tilt(){
  const els = document.querySelectorAll('.tilt');
  els.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const rx = ((y / r.height) - 0.5) * -4; // rotation X
      const ry = ((x / r.width) - 0.5) * 4;  // rotation Y
      el.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
})();
