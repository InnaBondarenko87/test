// import add from './scripts/helper';

// console.log(add(5, 2));
const FEEDBACK_DATA_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

let formData = { email: '', message: '' };

const initialFormData = JSON.parse(localStorage.getItem(FEEDBACK_DATA_KEY));

if (initialFormData !== null && initialFormData !== '') {
  try {
    formData = JSON.parse(initialFormData);

    for (const item in formData) {
      form.elements[item].value = formData[item];
    }
  } catch {}
}

form.addEventListener('input', e => {
  const inputEl = e.target.inputEl;
  if (inputEl === 'input' || inputEl === 'textarea') {
    for (const item in formData) {
      formData[item] = form.elements[item].value.trim();
    }

    localStorage.setItem(FEEDBACK_DATA_KEY, JSON.stringify(formData));
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  for (const item in formData) {
    if (!form.elements[item].value) {
      alert('All form fields must be filled in');

      return;
    }
  }

  for (const item in formData) {
    form.elements[item].value = '';
  }

  localStorage.removeItem(FEEDBACK_DATA_KEY);

  console.dir(formData);
});
