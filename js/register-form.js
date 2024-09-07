let currentTab = 0;
showTab(currentTab);

function showTab(n) {
  const x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

  fixStepIndicator(n);
}
let wrapper = 1;
function next() {
  const x = document.getElementsByClassName("tab");
  if (!validateForm()) return false;

  if (currentTab == x.length - 1) {
    window.location = "homepage.html";
    return;
  }

  x[currentTab].style.display = "none";

  currentTab++;

  const checkboxes = document.querySelectorAll(".lookfor-input");
  const tabWrappers = document.querySelectorAll(".tab-3");

  if (currentTab == 2) {
    checkboxes.forEach((item, index) => {
      if (item.checked && index == 0) {
        tabWrappers[0].style.display = "flex";
        tabWrappers[1].style.display = "none";
        tabWrappers[2].style.display = "none";
        wrapper = 1;
        return;
      }
      if (item.checked && index == 1) {
        tabWrappers[1].style.display = "flex";
        tabWrappers[0].style.display = "none";
        tabWrappers[2].style.display = "none";
        wrapper = 2;
        initSlider();
        return;
      }
      if (item.checked && index == 2) {
        tabWrappers[2].style.display = "flex";
        tabWrappers[0].style.display = "none";
        tabWrappers[1].style.display = "none";
        wrapper = 3;
        initSlider();
        return;
      }
    });
  }
  showTab(currentTab);
}

function fixStepIndicator(n) {
  let i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
    x[i].className = x[i].className.replace(" finish", "");
  }

  x[n].className += " active";

  if (currentTab > 0) {
    for (i = 0; i < n; i++) {
      document.getElementsByClassName("step")[i].className += " finish";
    }
  }
}

function goToTab(n) {
  // if (n > currentTab) return false;
  const x = document.getElementsByClassName("tab");
  document.querySelector(".my-label").classList.add("move-label");
  document.querySelector(".my-button").classList.add("move-btn");
  setTimeout(() => {
    document.querySelector(".my-label").classList.remove("move-label");
    document.querySelector(".my-button").classList.remove("move-btn");
    x[currentTab].style.display = "none";
    currentTab = n;
    showTab(currentTab);
    fixStepIndicator(n);
  }, 300);
}

function validateForm() {
  let tabs,
    inputs,
    selects,
    i,
    valid = true;
  tabs = document.getElementsByClassName("tab");
  inputs = tabs[currentTab].getElementsByTagName("input");
  selects = tabs[currentTab].querySelectorAll(".select-menu");

  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      inputs[i].className += " invalid";
      valid = false;
    }
  }

  for (i = 0; i < selects.length; i++) {
    if (selects[i].querySelector(".sBtn-text").dataset.value == "") {
      selects[i].className += " invalid";
      valid = false;
    }
  }
  if (currentTab == 1) {
    valid = false;
    const checkboxes = document.querySelectorAll(".lookfor-input");

    checkboxes.forEach((item) => {
      if (item.checked) {
        valid = true;
        return valid;
      }
    });
    checkboxes.forEach((item) => {
      item.classList += " invalid";
    });
  }

  return valid;
}

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", function () {
    this.classList.remove("invalid");
  });
});

document
  .querySelector("#register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
  });

const optionMenu = document.querySelector(".select-menu"),
  selectBtn = document.querySelector(".select-btn"),
  options = document.querySelectorAll(".option"),
  sBtn_text = document.querySelector(".sBtn-text");

const menus = document.querySelectorAll(".select-btn");

menus.forEach((select) => {
  select.addEventListener(
    "click",
    function (e) {
      e.target.parentNode.classList.toggle("active");
    },
    true
  );
});

options.forEach((option) => {
  option.addEventListener("click", function (e) {
    let selectedOption = e.target.innerText;
    document.querySelector(".active .sBtn-text").innerText = selectedOption;
    document.querySelector(".active .sBtn-text").dataset.value = selectedOption;

    option.parentNode.parentNode.classList.remove("active");

    if (selectedOption !== "") {
      option.parentNode.parentNode.classList.remove("invalid");
    }
  });
});

let preferPeople = 2;

const number = document.querySelector(`.wrapper-${wrapper} .number`);

document.querySelector(".decrement-btn").addEventListener("click", function () {
  if (preferPeople > 0) {
    preferPeople--;
    number.innerText = preferPeople;
  }
});

document.querySelector(".increment-btn").addEventListener("click", function () {
  preferPeople++;
  number.innerText = preferPeople;
});

const minGap = 0;
let priceInputMin, priceInputMax, range, sliderMinValue, sliderMaxValue;
function initSlider() {
  minVal = document.querySelector(`.wrapper-${wrapper} .min-val`);
  maxVal = document.querySelector(`.wrapper-${wrapper} .max-val`);
  priceInputMin = document.querySelector(`.wrapper-${wrapper} .min-input`);
  priceInputMax = document.querySelector(`.wrapper-${wrapper} .max-input`);

  range = document.querySelector(`.wrapper-${wrapper} .slider-track`);
  sliderMinValue = parseInt(minVal.min);
  sliderMaxValue = parseInt(maxVal.max);

  slideMin();
  slideMax();
}

function slideMin() {
  let gap = parseInt(maxVal.value) - parseInt(minVal.value);
  if (gap <= minGap) {
    minVal.value = parseInt(maxVal.value) - minGap;
  }

  priceInputMin.value = minVal.value;
  setArea();
}

function slideMax() {
  let gap = parseInt(maxVal.value) - parseInt(minVal.value);
  if (gap <= minGap) {
    maxVal.value = parseInt(minVal.value) + minGap;
  }

  priceInputMax.value = maxVal.value;
  setArea();
}

function setArea() {
  range.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
  range.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + "%";
}

function setMinInput() {
  let minPrice = parseInt(priceInputMin.value);
  if (minPrice < sliderMinValue) {
    priceInputMin.value = sliderMinValue;
  }

  minVal.value = priceInputMin.value;
  slideMin();
}

function setMaxInput() {
  let maxPrice = parseInt(priceInputMax.value);
  if (maxPrice > sliderMaxValue) {
    priceInputMax.value = sliderMaxValue;
  }

  maxVal.value = priceInputMax.value;
  slideMax();
}
