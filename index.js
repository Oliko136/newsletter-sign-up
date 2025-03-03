const form = document.getElementById('form');
const errorEl = document.getElementById('email-error');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email } = Object.fromEntries(formData);

    console.log(email);
    validateEmail(email);
}

function validateEmail(email) {
    if (!email) {
        renderError('Please enter an email address');
    }

    const emailRegex = /^\S+@\S+$/g;
    if (!emailRegex.test(email)) {
        renderError('Valid email required');
    }
}

function renderError(message) {
    errorEl.textContent = message;
}