export default async function decorate(block) {
  const rows = [...block.querySelectorAll('tr')];
  if (rows.length === 0) return;

  const headers = [...rows[0].children].map((th) => th.textContent.trim().toLowerCase());
  const data = rows.slice(1).map((row) => {
    const cells = [...row.children];
    const obj = {};
    headers.forEach((key, idx) => {
      obj[key] = cells[idx]?.textContent.trim();
    });
    return obj;
  });

  const form = document.createElement('form');
  form.action = '/thankyou.plain.html';
  form.method = 'GET';
  form.className = 'eds-subscribe-form';

  data.forEach((field) => {
    if (field.type === 'submit') {
      const btn = document.createElement('button');
      btn.type = 'submit';
      btn.textContent = field.label || 'Submit';
      form.appendChild(btn);
    } else {
      const label = document.createElement('label');
      label.textContent = field.label;

      const input = document.createElement('input');
      input.type = field.type || 'text';
      input.name = field.name;
      input.placeholder = field.placeholder || '';
      if (field.required === 'true') input.required = true;

      form.appendChild(label);
      form.appendChild(input);
    }
  });

  block.innerHTML = '';
  block.appendChild(form);
}
