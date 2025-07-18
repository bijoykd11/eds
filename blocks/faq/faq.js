export default function decorate(block) {
  const faqData = [
   {
    question: "Who can register for the GreenWorld Sustainability Summit 2025?",
    answer: "The summit is open to sustainability enthusiasts, environmental professionals, students, researchers, and anyone passionate about creating a greener future."
  },
  {
    question: "Is there a registration fee?",
    answer: "No, registration for the summit is completely free. However, prior registration is mandatory to receive access credentials and summit updates."
  },
  {
    question: "Where will the summit be held?",
    answer: "The summit will be hosted virtually, allowing participants from around the world to attend sessions, engage with speakers, and explore exhibitions online."
  },
  {
    question: "Will I receive a participation certificate?",
    answer: "Yes, all registered participants who attend the summit will receive a digital certificate of participation after the event."
  },
  {
    question: "What topics will be covered during the summit?",
    answer: "Topics will include climate change solutions, green energy innovations, circular economy, sustainable urban development, biodiversity, and more."
  },
  {
    question: "How can I become a speaker or panelist at the summit?",
    answer: "If you're interested in speaking at the summit, please reach out to the organizing team through the official registration portal or contact page."
  },
  {
    question: "Can I attend only selected sessions?",
    answer: "Yes, you're free to attend any sessions that interest you. The schedule will be shared in advance so you can plan accordingly."
  }
  ];

  const faqContainer = document.createElement('div');
  faqContainer.classList.add('faq-container');

  const title = document.createElement('h2');
  title.className = 'faq-title';
  title.textContent = 'Frequently Asked Questions';
  faqContainer.appendChild(title);

  const para = document.createElement('p');
  para.className = 'faq-para';
  para.textContent = 'We understand that you may have a few questions before joining us for the GreenWorld Sustainability Summit 2025. To make your experience smoother, weve compiled answers to the most common queries about registration, participation, and what to expect during the summit. Whether youre attending for the first time or returning as a past participant, this section is here to guide you every step of the way.';
  faqContainer.appendChild(para);
  
  const faqList = document.createElement('div');
  faqList.className = 'faq-list';

  faqData.forEach(({ question, answer }) => {
    const item = document.createElement('div');
    item.className = 'faq-item';

    const q = document.createElement('button');
    q.className = 'faq-question';
    q.textContent = question;

    const a = document.createElement('div');
    a.className = 'faq-answer';
    a.textContent = answer;

    q.addEventListener('click', () => {
      item.classList.toggle('open');
    });

    item.appendChild(q);
    item.appendChild(a);
    faqList.appendChild(item);
  });

  faqContainer.appendChild(faqList);

  const footer = document.createElement('p');
  footer.className = 'faq-footer';
  footer.textContent = 'If your questions have not been answered above or you are looking for more specific information about the GreenWorld Sustainability Summit 2025, we are here for you. Whether it is about the registration process, session timings, speaker details, or how to get involved, do not hesitate to reach out. Our team is more than happy to assist you and ensure your summit experience is smooth, engaging, and valuable. For any further queries, feel free to contact us at info@greenworldsummit.org — we will get back to you as soon as possible.';
  faqContainer.appendChild(footer);

  block.appendChild(faqContainer);
}
