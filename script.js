// Set footer year
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('y');
  if (y) y.textContent = new Date().getFullYear();
});

// Scrollspy for subnav
const links = Array.from(document.querySelectorAll('.subnav a'));
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = '#' + entry.target.id;
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
    }
  });
}, { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 });

sections.forEach(sec => io.observe(sec));
