// 首頁
let courseSwiper= new Swiper(".courseSwiper", {
  slidesPerView: "auto",
  grid: {
    rows: 2,
  },
  spaceBetween: 16,
  breakpoints: {
    768:{
      spaceBetween: 24,
      grid: {
        rows: 2,
      },
    },
    992:{
      spaceBetween: 30,
      grid: {
        rows: 0,
      },
    },
  },
});

let recommendSwiper = new Swiper(".recommendSwiper", {
  slidesPerView: "auto",
  grid: {
    rows: 3,
  },
  spaceBetween: 8,
  breakpoints: {
    768:{
      spaceBetween: 16,
      grid: {
        rows: 2,
      },
    },
    992:{
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 課程介紹
let courseIntroduceSwiper = new Swiper(".courseIntroduceSwiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  grid: {
    rows: 4,
  },
  breakpoints: {
    768:{
      spaceBetween: 30,
      grid: {
        rows: 0,
      },
    },
  },
});


// 瑜珈空間
let envRecommendSwiper = new Swiper(".envRecommendSwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
});




