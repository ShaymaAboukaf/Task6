// HERO SLIDER

const heroSwiper = new Swiper(".hero-swiper", {
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
});

// SEEKERS SLIDER

const seekersSwiper = new Swiper(".seekers-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 25,
    },
  },
});

// MAP
const inputField = document.getElementById("coordinates");
const mapDiv = document.getElementById("map");
let map, marker;

inputField.addEventListener("click", () => {
  // Show map
  mapDiv.style.display = "block";

  // Initialize Leaflet map if it hasn't been initialized yet
  if (!map) {
    map = L.map("map").setView([51.505, -0.09], 13); // Default view

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add click event on map to get coordinates
    map.on("click", function (e) {
      const { lat, lng } = e.latlng;

      // If marker already exists, update its position, otherwise create a new one
      if (marker) {
        marker.setLatLng(e.latlng);
      } else {
        marker = L.marker([lat, lng]).addTo(map);
      }

      // Update the input field with the selected coordinates
      inputField.value = ` ${lat.toFixed(6)}, ${lng.toFixed(6)}`;

      // Optionally, hide the map after selection
      // mapDiv.style.display = 'none';
    });
  }
});

// CUSTOM MENU

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

// COUNTER
let preferPeople = 2;
const number = document.querySelector(".number");
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

// DOUBLE SLIDER RANGE
const minGap = 0;
let priceInputMin, priceInputMax, range, sliderMinValue, sliderMaxValue;
function initSlider() {
  minVal = document.querySelector(`.min-val`);
  maxVal = document.querySelector(`.max-val`);
  priceInputMin = document.querySelector(`.min-input`);
  priceInputMax = document.querySelector(`.max-input`);

  range = document.querySelector(`.slider-track`);
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
initSlider();
