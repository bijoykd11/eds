export default function decorate(block) {
  block.innerHTML = ''; // Clear any placeholder text
  block.classList.add('agenda-block');

  const data = [
    { time: '4PM', session: 'Delwin', topic: 'Religion' },
    { time: '5PM', session: 'Panel Discussion' },
    { time: '6PM', session: 'Wrap-up' },
  ];

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  thead.innerHTML = '<tr><th>Time</th><th>Session</th><th>Topic</th></tr>';
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  data.forEach(({ time, session, topic }) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${time}</td><td>${session}</td><td>${topic}</td>`;
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  block.appendChild(table);
}
