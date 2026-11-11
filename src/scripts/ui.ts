/**
 * Kleine Interaktionen für alle Seiten:
 *  - Scroll-Reveal: Elemente mit data-reveal blenden beim Scrollen ein
 *  - Zähler: Elemente mit data-count="25" zählen hoch
 * Bei "Bewegung reduzieren" (Systemeinstellung) wird nichts animiert.
 */
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// --- Scroll-Reveal --------------------------------------------------------
const revealEls = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (reduced || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealEls.forEach((el) => io.observe(el));
}

// --- Zähler ---------------------------------------------------------------
const counters = document.querySelectorAll<HTMLElement>('[data-count]');
const fmt = new Intl.NumberFormat('de-DE');
const run = (el: HTMLElement) => {
  const target = Number(el.dataset.count);
  if (reduced) return void (el.textContent = fmt.format(target));
  const dur = 1400;
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 4);
    el.textContent = fmt.format(Math.round(target * eased));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
if ('IntersectionObserver' in window) {
  const co = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          run(e.target as HTMLElement);
          co.unobserve(e.target);
        }
      });
    },
    { threshold: 0.6 },
  );
  counters.forEach((c) => co.observe(c));
}
