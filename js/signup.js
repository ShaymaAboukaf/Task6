// Form Validation
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const phoneError = document.querySelector(".phone-error");
const passwordError = document.querySelector(".password-error");
const firstNameError = document.querySelector(".firstname-error");
const lastNameError = document.querySelector(".lastname-error");

document.querySelectorAll(".signup-form").forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm();
  });
});

function validateForm() {
  const firstName = document.querySelector(".first-name").value;
  const lastName = document.querySelector(".last-name").value;
  const phoneInput = document.querySelector(".phone input").value;
  const passwordInput = document.querySelector(".password input").value;
  if (!firstName) {
    firstNameError.innerHTML = "First name is required";
  } else {
    firstNameError.innerHTML = "";
  }

  if (!lastName) {
    lastNameError.innerHTML = "Last name is required";
  } else {
    lastNameError.innerHTML = "";
  }

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

  return (
    !passwordError.innerHTML &&
    !phoneError.innerHTML &&
    !firstNameError.innerHTML &&
    !lastNameError.innerHTML
  );
}

document.querySelectorAll(".required").forEach((input) => {
  input.addEventListener("input", validateForm);
});

// Multistep From
let currentTab = 0;
let isLogin = localStorage.getItem("isLogin") || false;
const accountType = localStorage.getItem("account-type") || null;

const tabs = document.getElementsByClassName("tab");

document.querySelectorAll(".next-btn").forEach((btn) => {
  btn.addEventListener("click", next);
});

if (isLogin) {
  currentTab = 1;
}
showTab(currentTab);

function showTab(tabNumber) {
  tabs[tabNumber].style.display = "flex";
  document.querySelector(`#${accountType}`).checked = true;
  fixStepIndicator(tabNumber);
}

function fixStepIndicator(tabNumber) {
  const steps = document.getElementsByClassName("step");
  for (let i = 0; i < steps.length; i++) {
    steps[i].className = steps[i].className.replace(" active", "");
    steps[i].className = steps[i].className.replace(" finish", "");
  }

  steps[tabNumber].className += " active";

  if (currentTab > 0) {
    for (let i = 0; i < tabNumber; i++) {
      document.getElementsByClassName("step")[i].className += " finish";
    }
  }
}

function next() {
  const tabs = document.getElementsByClassName("tab");

  if (currentTab == tabs.length - 1) {
    const checked = document.querySelector(".look-chk:checked").value;
    localStorage.setItem("account-type", checked);
    localStorage.setItem("isLogin", true);
    window.location = "see-more.html";
    return;
  }

  if (!validateForm()) return false;

  tabs[currentTab].style.display = "none";
  currentTab++;
  showTab(currentTab);
}

function goToTab(tabNumber) {
  if (tabNumber > currentTab) return;
  tabs[currentTab].style.display = "none";
  currentTab = tabNumber;
  showTab(currentTab);
}
