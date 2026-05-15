/* ── NAV SCROLL STATE ────────────────────────────────────── */
const navWrap = document.getElementById('navWrap');
window.addEventListener('scroll', () => {
  navWrap.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── MOBILE DRAWER ───────────────────────────────────────── */
const hamburger      = document.getElementById('hamburger');
const drawer         = document.getElementById('drawer');
const drawerOverlay  = document.getElementById('drawerOverlay');
const drawerClose    = document.getElementById('drawerClose');

function openDrawer() {
  drawer.classList.add('open');
  drawerOverlay.classList.add('show');
  hamburger.classList.add('open');
}
function closeDrawer() {
  drawer.classList.remove('open');
  drawerOverlay.classList.remove('show');
  hamburger.classList.remove('open');
}
hamburger.addEventListener('click', () => {
  drawer.classList.contains('open') ? closeDrawer() : openDrawer();
});
drawerClose.addEventListener('click', closeDrawer);

/* ── SCROLL REVEAL ───────────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      // stagger siblings
      const siblings = [...e.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
      const idx = siblings.indexOf(e.target);
      setTimeout(() => {
        e.target.classList.add('visible');
      }, idx * 80);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ── STAR RATINGS ────────────────────────────────────────── */
document.querySelectorAll('.star-row').forEach(widget => {
  const stars = [...widget.querySelectorAll('span')];
  const field = widget.dataset.field;
  const input = field ? document.querySelector(`input[name="${field}"]`) : null;
  let current = 0;

  stars.forEach((star, i) => {
    star.addEventListener('mouseenter', () => {
      stars.forEach((s, j) => s.classList.toggle('hover', j <= i));
    });
    star.addEventListener('mouseleave', () => {
      stars.forEach((s, j) => {
        s.classList.remove('hover');
        s.classList.toggle('lit', j < current);
      });
    });
    star.addEventListener('click', () => {
      current = i + 1;
      if (input) input.value = current;
      stars.forEach((s, j) => {
        s.classList.toggle('lit', j < current);
        s.classList.remove('hover');
      });
    });
  });
});

/* ── LOAD REVIEWS FROM reviews.json ─────────────────────── */
async function loadReviews() {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;

  let reviews = [];
  try {
    const res = await fetch('reviews.json');
    if (res.ok) reviews = await res.json();
  } catch (_) {}

  // Fallback sample reviews if file missing or empty
  if (!reviews.length) {
    reviews = [
      { reviewer_name: 'Sarah M.', service_used: 'Overnight House Sitting', pet_names: 'Biscuit & Mango', overall_rating: 5, review_text: 'Erika was absolutely wonderful with our two dogs. Daily photos, followed every instruction, and we came home to a spotless house. We will definitely be booking again.' },
      { reviewer_name: 'James T.', service_used: 'Extended Stay (5+ nights)', pet_names: 'Luna', overall_rating: 5, review_text: 'I was nervous about leaving my cat for two weeks but Erika sent videos every single day. My plants were thriving and the apartment was immaculate.' },
      { reviewer_name: 'Priya K.', service_used: 'Drop-In Visit', pet_names: 'Archie', overall_rating: 5, review_text: 'Punctual, communicative, and genuinely caring. Our dog has separation anxiety and Erika handled it with so much patience. We felt completely at ease the whole trip.' },
    ];
  }

  grid.innerHTML = reviews.map(r => `
    <div class="review-card reveal">
      <div class="r-stars">${'★'.repeat(r.overall_rating)}${'☆'.repeat(5 - r.overall_rating)}</div>
      <p class="r-text">"${r.review_text}"</p>
      <div class="r-author">${r.reviewer_name}</div>
      <div class="r-service">${r.service_used}${r.pet_names ? ' · ' + r.pet_names : ''}</div>
    </div>
  `).join('');

  // Observe new review cards
  grid.querySelectorAll('.review-card').forEach(card => revealObserver.observe(card));
}

loadReviews();

/* ── FORM HANDLING (Netlify) ─────────────────────────────── */
function handleForm(formId, successId) {
  const form    = document.getElementById(formId);
  const success = document.getElementById(successId);
  if (!form || !success) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      });
      form.style.display = 'none';
      success.style.display = 'block';
    } catch {
      alert('Something went wrong. Please email erika.s.huang@gmail.com directly.');
      if (btn) { btn.disabled = false; btn.textContent = 'Submit'; }
    }
  });
}

handleForm('bookingForm',  'bookingSuccess');
handleForm('reviewForm',   'reviewSuccess');
handleForm('contactForm',  'contactSuccess');

/* ── ACTIVE NAV LINK ─────────────────────────────────────── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.style.color = active ? 'var(--peach)' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
