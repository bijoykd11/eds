import { createOptimizedPicture } from '../../scripts/aem.js';

export default async function decorate(block) {
  const sheetUrl = 'https://opensheet.elk.sh/1yvitl1RdhGyGGv07Tc8Rmg3-LSXsfdPW0BxygrVzOxA/speakers';
  const resp = await fetch(sheetUrl);
  const data = await resp.json();

  if (!Array.isArray(data)) {
    console.error('Data is not an array:', data);
    return;
  }

  const container = document.createElement('div');
  container.className = 'speakers-carousel';

  data.forEach((item, index) => {
    const speakerCard = document.createElement('div');
    speakerCard.className = 'speaker-card';

    const img = createOptimizedPicture(item['Image URL'], item['Name'], 'speaker-image');
    const name = document.createElement('h3');
    name.className = 'speaker-name';
    name.textContent = item['Name'];

    const shortInfo = document.createElement('p');
    shortInfo.className = 'speaker-shortinfo';
    shortInfo.textContent = item['ShortInfo'];

    const readMore = document.createElement('button');
    readMore.className = 'read-more';
    readMore.textContent = 'Read More';
    readMore.addEventListener('click', () => showModal(item['Name'], item['FullBio']));

    speakerCard.append(img, name, shortInfo, readMore);
    container.appendChild(speakerCard);
  });

  block.innerHTML = '';
  block.append(container);
  addModalHTML();

  // ✅ Auto Slide Logic
  const cards = container.children;
  let currentIndex = 0;
  setInterval(() => {
    if (!cards.length) return;
    container.scrollTo({
      left: cards[currentIndex].offsetLeft,
      behavior: 'smooth',
    });
    currentIndex = (currentIndex + 1) % cards.length;
  }, 2000);
}

function showModal(name, fullBio) {
  const modal = document.getElementById('bio-modal');
  const modalName = document.getElementById('modal-name');
  const modalBio = document.getElementById('modal-bio');

  modalName.textContent = name;
  modalBio.textContent = fullBio;
  modal.classList.add('show');
}

function addModalHTML() {
  const modal = document.createElement('div');
  modal.id = 'bio-modal';
  modal.className = 'modal';

  modal.innerHTML = `
    <div class="modal-content">
      <span class="modal-close">&times;</span>
      <h2 id="modal-name"></h2>
      <p id="modal-bio"></p>
    </div>
  `;

  document.body.appendChild(modal);

  document.querySelector('.modal-close').addEventListener('click', () => {
    modal.classList.remove('show');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('show');
  });
}
