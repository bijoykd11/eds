export default function decorate(block) {
  const attendees = [
    {
      title: "🎓",
      desc: "Students & Young Leaders"
    },
    {
      title: "🏛️",
      desc: "Policymakers & Government Officials"
    },
    {
      title: "🌱",
      desc: "Environmental Activists & NGOs"
    },
    {
      title: "💼",
      desc: "Corporate Sustainability Professionals"
    }, 
    {
      title: "🧠",
      desc: "Scientists & Researchers"
    }, 
    {
      title: "💻",
      desc: "Tech Innovators & Green Entrepreneurs"
    }
  ];

  const wrapper = document.createElement('div');
  wrapper.className = 'attendees-wrapper';

  attendees.forEach((attendees) => {
    const card = document.createElement('div');
    card.className = 'attendees-card';

    const h3 = document.createElement('h3');
    h3.textContent = attendees.title;

    const p = document.createElement('p');
    p.textContent = attendees.desc;

    card.append(h3, p);
    wrapper.appendChild(card);
  });

  block.appendChild(wrapper);
}