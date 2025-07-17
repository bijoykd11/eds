export default function decorate(block) {
  const listItems = [...block.querySelectorAll('div')];

  // Create container
  const container = document.createElement('div');
  container.classList.add('highlight-carousel');
  block.innerHTML = '';
  block.appendChild(container);

  listItems.forEach((item, index) => {
    item.classList.add('highlight-slide');
    item.style.opacity = index === 0 ? 1 : 0;
    container.appendChild(item);
  });

  let current = 0;

  setInterval(() => {
    const next = (current + 1) % listItems.length;

    // Briefly hide the card holder
    container.classList.add('hidden');

    // Switch slides after brief gap
    setTimeout(() => {
      listItems[current].style.opacity = 0;
      listItems[next].style.opacity = 1;

      // Show the card holder again
      container.classList.remove('hidden');

      current = next;
  }); // Hide for just 300ms
  }, 2500);
}
