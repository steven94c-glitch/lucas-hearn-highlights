document.getElementById('year').textContent = new Date().getFullYear();

const fadeIn = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = 1;
      e.target.style.transform = 'translateY(0)';
      fadeIn.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.section-head, .card, .trophy, .g-item, .reel-frame').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  fadeIn.observe(el);
});

document.querySelectorAll('.g-item img').forEach(img => {
  img.addEventListener('error', () => {
    img.style.display = 'none';
    img.parentElement.style.background = 'linear-gradient(135deg, #111, #1a1a1a)';
    img.parentElement.style.display = 'flex';
    img.parentElement.style.alignItems = 'center';
    img.parentElement.style.justifyContent = 'center';
    img.parentElement.innerHTML = '<span style="color:#333;font-size:11px;letter-spacing:2px;font-weight:700">PHOTO</span>';
  });
});
