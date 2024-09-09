const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const phoneError = document.querySelector(".phone-error");
const passwordError = document.querySelector(".password-error");

document.querySelector(".login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const phoneInput = document.querySelector(".phone input").value;
  const passwordInput = document.querySelector(".password input").value;

  if (!phoneInput) {
    phoneError.innerHTML = "Phone number is required.";
  } else if (!isValidPhone(phoneInput)) {
    phoneError.innerHTML = "Please enter a valid phone number.";
  } else {
    phoneError.innerHTML = "";
  }

  if (!passwordInput) {
    passwordError.innerHTML = "Password is required.";
  } else if (Number(passwordInput.length) < 8) {
    passwordError.innerHTML = "Password should not less than 8 charachters.";
  } else {
    passwordError.innerHTML = "";
  }
}

document.querySelectorAll(".login-form input").forEach((input) => {
  input.addEventListener("input", validateForm);
});
