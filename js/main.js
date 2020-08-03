var hotelSlider = new Swiper(".hotel-slider", {
  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: false,
  // },
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  effect: "coverflow",
});
var reviewsSlider = new Swiper(".reviews-slider", {
  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: false,
  // },
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
});
