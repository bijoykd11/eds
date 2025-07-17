export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  const slider = document.createElement('div');
  slider.classList.add('testimonials-slider');

  rows.forEach((row) => {
    const cells = [...row.children];
    const quote = cells[0]?.textContent?.trim() || '';
    const author = cells[1]?.textContent?.trim() || '';
    const imgTag = cells[2]?.querySelector('img');

    const card = document.createElement('div');
    card.className = 'testimonials-card';

    if (imgTag) {
      const img = document.createElement('img');
      img.src = imgTag.src;
      img.alt = author || 'Author photo';
      img.className = 'author-photo';
      card.appendChild(img);
    }

    const quoteDiv = document.createElement('div');
    quoteDiv.className = 'quote';
    quoteDiv.textContent = quote;
    card.appendChild(quoteDiv);

    const authorDiv = document.createElement('div');
    authorDiv.className = 'author';
    authorDiv.textContent = author;
    card.appendChild(authorDiv);

    slider.appendChild(card);
  });

  block.appendChild(slider);

  // Auto-scroll logic
  let scrollAmount = 0;
  const scrollStep = 310; // card width + gap
  const scrollInterval = 3000; // 3 seconds

  setInterval(() => {
    if (scrollAmount + scrollStep >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0;
    } else {
      scrollAmount += scrollStep;
    }
    slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }, scrollInterval);
}
