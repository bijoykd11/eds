export default async function decorate(block) {
  const response = await fetch('/subscribe-form-config.json');
  const json = await response.json();

  const form = document.createElement('form');
  form.className = 'subscribe-form';

  json.data.forEach((field) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'form-field';

    if (field.Type !== 'submit') {
      const label = document.createElement('label');
      label.textContent = field.Label;
      label.setAttribute('for', field.Name);
      wrapper.appendChild(label);
    }

    const input = document.createElement('input');
    input.type = field.Type;
    input.name = field.Name;
    input.placeholder = field.Placeholder || '';
    if (field.Required === 'true') input.required = true;

    wrapper.appendChild(input);
    form.appendChild(wrapper);
  });

  block.innerHTML = ''; // clear the block content (like "# Subscribe")
  block.appendChild(form);
}
