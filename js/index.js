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
  slidesPerView: 1.3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2.5,
    },
    900: {
      slidesPerView: 3,
    },
  },
});

// RECOMMEND SLIDER

const recommendSwiper = new Swiper(".recommend-swiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3.5,
    },
  },
});
