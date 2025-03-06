const form = document.getElementById('form');
const cardEl = document.getElementById('card');
const errorEl = document.getElementById('email-error');
const successEl = document.getElementById('success');
const emailSuccess = document.getElementById('email-success');
const buttonDismiss = document.getElementById('button-dismiss');

form.addEventListener('submit', handleSubmit);
buttonDismiss.addEventListener('click', handleDismiss);

function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email } = Object.fromEntries(formData);

    validateEmail(email);
}

function validateEmail(email) {
    const emailRegex = /^\S+@\S+$/g;
    
    emailRegex.test(email) ? renderSuccess(email) : renderError('Valid email required');
}

function renderError(message) {
    errorEl.textContent = message;
    form.email.style.color = '#FF6155';
    form.email.style.backgroundColor = '#FFE7E6';
    form.email.style.borderColor = '#FF6155';
}

function renderSuccess(email) {
    cardEl.classList.add('is-hidden');
    successEl.classList.remove('is-hidden');

    emailSuccess.textContent = email;
    errorEl.textContent = '';
    form.reset();
    form.email.style.color = '';
    form.email.style.backgroundColor = '';
    form.email.style.borderColor = '';
}

function handleDismiss() {
    cardEl.classList.remove('is-hidden');
    successEl.classList.add('is-hidden');
}