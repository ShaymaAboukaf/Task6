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

// POPULAR SLIDER
const popularSwiper = new Swiper(".popular-swiper", {
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// RECOMMEND SLIDER
const recommendSwiper = new Swiper(".recommend-swiper", {
  slidesPerView: 1.2,
  spaceBetween: 12,

  breakpoints: {
    400: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    600: {
      slidesPerView: 2.5,
      spaceBetween: 25,
    },

    900: {
      slidesPerView: 3.5,
      spaceBetween: 35,
    },
  },
});

// AVAILABLE SLIDER
const availableSwiper = new Swiper(".available-swiper", {
  slidesPerView: 1,
  spaceBetween: 15,

  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    700: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },

    900: {
      slidesPerView: 3,
      spaceBetween: 5,
    },

    1200: {
      slidesPerView: 2.5,
      spaceBetween: 5,
    },
  },
});

function removeActiveClass() {
  document
    .querySelectorAll(" .available-swiper .swiper-slide")
    .forEach((item) => {
      item.classList.remove("active");
    });
}

document.querySelectorAll(".available-swiper .swiper-slide").forEach((item) => {
  item.addEventListener("click", function (e) {
    removeActiveClass();
    e.target.classList.add("active");
  });
});
