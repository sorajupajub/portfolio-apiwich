// Theme toggle (Dark/Light)
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved) document.documentElement.setAttribute('data-theme', saved);
themeToggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Animate skill bars on scroll
const bars = document.querySelectorAll('.bar > span');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const pct = e.target.getAttribute('data-pct') || 0;
      e.target.style.width = pct + '%';
    }
  });
}, { threshold: 0.4 });
bars.forEach(b => io.observe(b));

// Contact form (client-side only demo)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  if (!data.name || !data.email) {
    statusEl.textContent = 'กรุณากรอกชื่อและอีเมลให้ครบถ้วน';
    statusEl.style.color = 'var(--warn)';
    return;
  }
  statusEl.textContent = 'ส่งสำเร็จ! (ตัวอย่างฝั่ง client — ยังไม่เชื่อม backend)';
  statusEl.style.color = 'var(--ok)';
  form.reset();
});

// Print/Save as PDF
document.getElementById('printBtn').addEventListener('click', () => window.print());
