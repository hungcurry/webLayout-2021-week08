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


// 立即預約
const allBtn = document.querySelectorAll('.js-schemeBtn');
const reserveSwiper = document.querySelector('.reservationSwiper');
const allItem = document.querySelectorAll('.js-reservationSwiperItem');
const courseTitle = document.querySelector('.js-courseTitle');
const choose = document.querySelector('.js-choose');
let courseStr = "";

if(allBtn && allItem && choose){
  choose.classList.add('d-none');
  allBtn.forEach((item)=>{
    item.addEventListener('click', reserveCollapseFn);
  });
  allItem.forEach((item)=>{
    item.addEventListener('click', reserveSwiperFn)
  });  
}
// collapse
function reserveCollapseFn(){
  let clickItem = this ;
  let clickCard = clickItem.parentElement.parentElement;
  let isExpanded = clickItem.getAttribute('aria-expanded');

  if(isExpanded === 'true'){ 
    choose.classList.remove('d-none');
    allBtn.forEach((item)=>{
      item.setAttribute("disabled" , true);
      item.parentElement.parentElement.parentElement.classList.add('d-none');
    });
    clickItem.removeAttribute('disabled');
    // 抓取課程
    courseStr = clickItem.getAttribute('data-course');
    courseTitle.textContent = `${courseStr}課程-基礎 `;
    clickCard.classList.add('active');
    clickCard.parentElement.classList.remove('d-none');

  }else{
    choose.classList.add('d-none');
    allBtn.forEach((item)=>{
      item.removeAttribute('disabled');
      item.parentElement.parentElement.parentElement.classList.remove('d-none');
    });
    clickCard.classList.remove('active');
  }
};
//reservationSwiper
function reserveSwiperFn(){
  let clickItem = this;
  let activeItem = getActive(allItem);
  let text = clickItem.dataset.text;
  if(clickItem.classList.contains("active")){
    clickItem.classList.remove('active');
    choose.classList.add('disabled');
  }
  else{
    if (typeof activeItem === "object") {
      activeItem.classList.remove('active');
    }
    clickItem.classList.add('active');
    choose.classList.remove('disabled');
    courseTitle.textContent = `${courseStr}課程-${text} `;
  }
};
function getActive(allItem){
  let ary = Array.from(allItem).find((item) => {
    return item.classList.contains('active');
  });
    return (ary === undefined) ? false : ary;
};
let reservationSwiper = new Swiper(".reservationSwiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  grid: {
    rows: 3,
  },
  breakpoints: {
    768:{
      spaceBetween: 30,
      grid: {
        rows: 0,
      },
    },
    768:{
      spaceBetween: 20,
      grid: {
        rows: 0,
      },
    },
  },
});


  // scroll
  const backBtn = document.querySelector('.topBack');
  backBtn.addEventListener('click',scrollToTopFn);
  window.addEventListener('scroll', scrollFn);
  function scrollFn(){
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if(scrollTop >= 40){
      backBtn.classList.add('show');
    }else{
      backBtn.classList.remove('show');
    }
  };
  function scrollToTopFn(){
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'});
  };
