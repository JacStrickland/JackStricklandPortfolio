// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.textContent = links.classList.contains('open') ? '\u2715' : '\u2630';
  });
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.textContent = '\u2630';
    })
  );
}

// Scroll reveal
const els = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && els.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
} else {
  els.forEach(el => el.classList.add('in'));
}

// Autoplay clips only while on screen, so a gallery page doesn't
// download every video up front. Videos use preload="none" and
// start loading the first time they scroll near the viewport.
const clips = document.querySelectorAll('video[data-autoplay]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const tryPlay = v => { const p = v.play(); if (p) p.catch(() => {}); };
if ('IntersectionObserver' in window && clips.length) {
  const vo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      const v = e.target;
      if (e.isIntersecting) {
        if (reduceMotion) { v.preload = 'metadata'; v.controls = true; }
        else tryPlay(v);
      } else if (!v.paused) {
        v.pause();
      }
    });
  }, { rootMargin: '200px 0px' });
  clips.forEach(v => vo.observe(v));
} else {
  clips.forEach(tryPlay);
}
