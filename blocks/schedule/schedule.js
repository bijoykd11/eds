export default async function decorate(block) {
  block.innerHTML = ''; // Clear block content
  block.classList.add('schedule-block');

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  thead.innerHTML = '<tr><th>Time</th><th>Session</th><th>Topic</th></tr>';
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  try {
    const response = await fetch('https://opensheet.elk.sh/15dNbJiLW_p5_WME2PB6vfkaksWTUZiinicyLnSqqZUw/Sheet1');
    const data = await response.json();

    if (Array.isArray(data)) {
      data.forEach(({ time, session, topic }) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${time}</td><td>${session}</td><td>${topic || ''}</td>`;
        tbody.appendChild(row);
      });
    } else {
      const error = document.createElement('p');
      error.textContent = 'Failed to load data: Sheet does not contain array';
      block.appendChild(error);
      return;
    }
  } catch (err) {
    const error = document.createElement('p');
    error.textContent = `Error loading schedule: ${err.message}`;
    block.appendChild(error);
    return;
  }

  table.appendChild(tbody);
  block.appendChild(table);
}
