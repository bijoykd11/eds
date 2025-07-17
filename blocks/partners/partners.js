export default function decorate(block) {
  block.classList.add('partners-container');

  const partnerItems = block.querySelectorAll('div > div');

  partnerItems.forEach((item) => {
    item.classList.add('partner-logo');

    const img = item.querySelector('img');
    if (img) {
      img.setAttribute('alt', 'Partner logo');
    }
  });
}
