const form = document.getElementById('form');
const errorEl = document.getElementById('email-error');

form.addEventListener('submit', handleSubmit);

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
}

function renderSuccess(email) {

}