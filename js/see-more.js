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
