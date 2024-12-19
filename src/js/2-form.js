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
      form.elements.email.value = formData.email || '';
      form.elements.message.value = formData.message || '';
    } catch (error) {
      console.error('Error parsing JSON from localStorage:', error);
    }
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const { email, message } = formData;

  if (email === '' || message === '') {
    return alert('Fill please all fields!');
  }

  /*console.log(formData);

  localStorage.removeItem(storageKey); 
  formData = { email: '', message: '' }; 
  form.reset();*/
}
