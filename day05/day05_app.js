(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const counter = document.querySelector('#counter');
  const title = document.querySelector('#slideTitle');
  const links = [...document.querySelectorAll('.toc a')];
  let active = 0;

  function setActive(index) {
    active = Math.max(0, Math.min(index, slides.length - 1));
    const slide = slides[active];
    counter.textContent = `${String(active + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    title.textContent = slide.dataset.title;
    links.forEach(link => link.classList.toggle('active', slide.id === link.getAttribute('href').slice(1)));
  }
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActive(slides.indexOf(visible.target));
  }, { threshold: .55 });
  slides.forEach(slide => observer.observe(slide));

  function move(direction) {
    const target = slides[Math.max(0, Math.min(active + direction, slides.length - 1))];
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  document.querySelector('#prev').addEventListener('click', () => move(-1));
  document.querySelector('#next').addEventListener('click', () => move(1));
  document.querySelector('#print').addEventListener('click', () => window.print());
  document.addEventListener('keydown', event => {
    if (event.target.matches('input, textarea')) return;
    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'ArrowRight' || event.key === ' ') { event.preventDefault(); move(1); }
    if (event.key.toLowerCase() === 'p') window.print();
  });
  setActive(0);
})();
