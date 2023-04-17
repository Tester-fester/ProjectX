const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  const username = document.querySelector('#username');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');

  let errors = [];

  if (!isValidEmail(email.value)) {
    errors.push('Please enter a valid email address');
  }

  if (!isValidPassword(password.value)) {
    errors.push('Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number');
  }

  if (errors.length > 0) {
    event.preventDefault();
    displayErrors(errors);
  }
});

function isValidEmail(email) {
  // Use a regular expression to validate the email address
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}

function isValidPassword(password) {
  // Use a regular expression to validate the password
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return regex.test(password);
}

function displayErrors(errors) {
  // Display error messages to the user
  const errorContainer = document.querySelector('#error-container');
  errorContainer.innerHTML = '';
  
  errors.forEach(error => {
    const errorElement = document.createElement('p');
    errorElement.textContent = error;
    errorContainer.appendChild(errorElement);
  });
}
``
