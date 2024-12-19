const storageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

populateFormFromStorage();

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function handleInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

function populateFormFromStorage() {
  const savedData = localStorage.getItem(storageKey);

  if (savedData) {
    try {
      formData = JSON.parse(savedData);
      form.elements.email.value = formData.email.trim() || '';
      form.elements.message.value = formData.message.trim() || '';
    } catch (error) {
      console.error('Error parsing JSON from localStorage:', error);
    }
  }
}
/* ==== валідація введення даних і очищення форми ==== */
function handleSubmit(event) {
  event.preventDefault();

  const { email, message } = formData;

  if (email === '' || message === '') {
    return alert('Fill please all fields!');
  }

  console.log(formData);
  localStorage.removeItem(storageKey);
  formData = { email: '', message: '' };
  form.reset();
}
/* ==== стилізація форми ==== */
const inputEmailFeedback = document.querySelector('input');
inputEmailFeedback.classList.add('inputEmailField');
const lableFeedback = document.querySelector('label');
lableFeedback.classList.add('lableFeedback');
/* ==== помилкові ==== */
const inputMessageFeedback = document.querySelector('textarea');
inputMessageFeedback.classlist.add('inputMessageFeedback');
const buttonSubmitInForm = document.querySelector('button');
buttonSubmitInForm.classlist.add('buttonSubmitInForm');
