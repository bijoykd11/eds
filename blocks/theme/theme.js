export default function decorate(block) {
  const themes = [
    {
      title: "Innovate",
      desc: "Unleashing creativity to address climate challenges with bold new ideas."
    },
    {
      title: "Implement",
      desc: "Turning plans into actionable policies, technologies, and habits."
    },
    {
      title: "Impact",
      desc: "Measuring real-world change through sustainability metrics and stories."
    }
  ];

  const wrapper = document.createElement('div');
  wrapper.className = 'theme-wrapper';

  themes.forEach((theme) => {
    const card = document.createElement('div');
    card.className = 'theme-card';

    const h3 = document.createElement('h3');
    h3.textContent = theme.title;

    const p = document.createElement('p');
    p.textContent = theme.desc;

    card.append(h3, p);
    wrapper.appendChild(card);
  });

  block.appendChild(wrapper);
}
