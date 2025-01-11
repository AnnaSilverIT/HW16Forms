let form = document.forms.myForm
let button = form.elements.button
const userNameInput = form.elements.userName;
const emailInput = form.elements.email;
const userPassword = form.elements.password
const agreeCheckbox = form.elements.agreement;

const userNameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  let hasError = false;

  if (userNameInput.value === '') {
    userNameError.textContent = 'Введите имя пользователя.';
    userNameError.style.display = 'block';
    hasError = true;
    button.disabled = true
  }

  // if (validateEmail(emailInput.value) === false) {
  //   emailError.textContent = 'Введите корректный email.';
  //   emailError.style.display = 'block';
  //   hasError = true;
  //   button.disabled = true
  // }

  if (agreeCheckbox.checked === false) {
    termsError.textContent = 'Необходимо согласие с условиями.';
    termsError.style.display = 'block';
    hasError = true;
    button.disabled = true
  }

  if (hasError === false) {
    alert('Форма успешно отправлена!');
    button.disabled = false
  }
});
