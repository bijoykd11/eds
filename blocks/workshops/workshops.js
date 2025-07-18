export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  const slider = document.createElement('div');
  slider.classList.add('workshops-slider');

  rows.forEach((row) => {
    const cells = [...row.children];
    const speaker = cells[0]?.textContent?.trim() || '';
    const topic = cells[1]?.textContent?.trim() || '';
    const date = cells[2]?.textContent?.trim() || '';
    const imgTag = cells[3]?.querySelector('img');

    const card = document.createElement('div');
    card.className = 'workshops-card';

    if (imgTag) {
      const img = document.createElement('img');
      img.src = imgTag.src;
      img.alt = topic || 'Speaker photo';
      img.className = 'topic-photo';
      card.appendChild(img);
    }

    const speakerDiv = document.createElement('div');
    speakerDiv.className = 'speaker';
    speakerDiv.textContent = speaker;
    card.appendChild(speakerDiv);

    const topicDiv = document.createElement('div');
    topicDiv.className = 'topic';
    topicDiv.textContent = topic;
    card.appendChild(topicDiv);

    const dateDiv = document.createElement('div');
    dateDiv.className = 'date';
    dateDiv.textContent = date;
    
    card.appendChild(dateDiv);

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
