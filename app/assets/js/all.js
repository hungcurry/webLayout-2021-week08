let swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  initialSlide: 0,
  spaceBetween: 15,
  slidesPerGroup: 1,
  loop: true,
  breakpoints: {
    1024: {
      spaceBetween: 30,
      slidesPerGroup: 3
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  }
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
