var swiper = new Swiper(".reSwiper", {
  slidesPerView: "auto",
  slidesPerColumn: 3,
  spaceBetween: 30,
  breakpoints: {
    768:{
      spaceBetween: 15,
      slidesPerColumn: 2,
    },
    992:{
      spaceBetween: 30,
      slidesPerColumn: 2,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

