let form = document.forms.myForm
let button = form.elements.button
const userNameInput = form.elements.userName;
const emailInput = form.elements.email;
const userPassword = form.elements.password
const agreeCheckbox = form.elements.agreement;

const userNameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const termsError = document.getElementById('agreementError')

userNameError.style.display = "none";
emailError.style.display = "none";
termsError.style.display = "none";

let emailInputError = true;
let userInputError = true;
let checkboxInputError = true;

const checkError = () => {
  console.log(emailInputError && userInputError && checkboxInputError);

  if (!emailInputError && !userInputError && !checkboxInputError) {
    button.removeAttribute("disabled");
  }
};

userNameInput.addEventListener('change', function() {
  if (userNameInput.value === '') {
    userNameError.textContent = 'Введите имя пользователя.';
    userNameError.style.display = 'block';
    userInputError = true;
  } else {
    userInputError = false;
  }
  checkError();
})
emailInput.addEventListener("change", function () {
  if (emailInput.value === "") {
    emailError.textContent = "Введите корректный email.";
    emailError.style.display = "block";
    emailInputError = true;
  } else {
    emailInputError = false;
  }
  checkError();
});

agreeCheckbox.addEventListener("change", function () {
  if (agreeCheckbox.checked === false) {
    termsError.textContent = "Необходимо согласие с условиями.";
    termsError.style.display = "block";
    checkboxInputError = true;
  } else {
    checkboxInputError = false;
  }
  checkError();
});
form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if (emailInputError === false && userInputError ===false && checkboxInputError ===false) {
    alert('Форма успешно отправлена!');
      form.reset()
    }
  
});

    