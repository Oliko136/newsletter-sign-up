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
    const emailRegex = /^\S+@\S+$/g;
    
    emailRegex.test(email) ? renderSuccess(email) : renderError('Valid email required');
}

function renderError(message) {
    errorEl.textContent = message;
}

function renderSuccess(email) {
    document.body.innerHTML = `
    <div>
        <h2>Thanks for subscribing!</h2>
        <p>
            A confirmation email has been sent to ${email}. 
            Please open it and click the button inside to confirm your subscription.
        </p>
        <button type="button">Dismiss message</button>
    </div>`
}