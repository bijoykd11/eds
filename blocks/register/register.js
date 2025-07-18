export default async function decorate(block) {
  const response = await fetch('/register.json');
  const json = await response.json();

  const form = document.createElement('form');
  form.className = 'register-now-form';

  json.data.forEach((field) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'form-field';

    if (field.Type === 'radio') {
      const options = (field.Placeholder || '').split(',').map(opt => opt.trim());

      const fieldset = document.createElement('fieldset');
      fieldset.className = 'radio-group';

      const legend = document.createElement('legend');
      legend.textContent = field.Label;
      fieldset.appendChild(legend);

      options.forEach(opt => {
        const radioWrapper = document.createElement('div');
        radioWrapper.className = 'radio-option';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = field.Name;
        input.value = opt;
        input.id = `${field.Name}-${opt}`;
        if (field.Required === 'true') input.required = true;

        const label = document.createElement('label');
        label.textContent = opt;
        label.setAttribute('for', input.id);

        radioWrapper.appendChild(input);
        radioWrapper.appendChild(label);
        fieldset.appendChild(radioWrapper);
      });

      form.appendChild(fieldset);
    } else if (field.Type === 'checkbox') {
  const options = (field.Placeholder || '').split(',').map(opt => opt.trim());

  const fieldset = document.createElement('fieldset');
  fieldset.className = 'checkbox-group';

  const legend = document.createElement('legend');
  legend.textContent = field.Label;
  fieldset.appendChild(legend);

  options.forEach(opt => {
    const checkboxWrapper = document.createElement('div');
    checkboxWrapper.className = 'checkbox-option';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = field.Name;
    input.value = opt;
    input.id = `${field.Name}-${opt}`;
    if (field.Required === 'true') input.required = true;

    const label = document.createElement('label');
    label.textContent = opt;
    label.setAttribute('for', input.id);

    checkboxWrapper.appendChild(input);
    checkboxWrapper.appendChild(label);
    fieldset.appendChild(checkboxWrapper);
  });

  form.appendChild(fieldset);
} else {
      if (field.Type !== 'submit') {
        const label = document.createElement('label');
        label.textContent = field.Label;
        label.setAttribute('for', field.Name);
        label.className = 'form-label';
        wrapper.appendChild(label);
      }

      const input = document.createElement('input');
      input.type = field.Type;
      input.name = field.Name;
      input.placeholder = field.Placeholder || '';
      input.className = `form-input ${field.Type}`;
      if (field.Required === 'true') input.required = true;

      wrapper.appendChild(input);
      form.appendChild(wrapper);
    }
  });

  // Submit handler with redirect
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // You can send form data here if needed
    setTimeout(() => {
      window.location.href = '/thankyou';
    }, 300);
  });

  block.innerHTML = ''; // remove placeholder text
  block.appendChild(form);
}
