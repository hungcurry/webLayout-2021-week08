"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// 首頁
var courseSwiper = new Swiper(".courseSwiper", {
  slidesPerView: "auto",
  grid: {
    rows: 2
  },
  spaceBetween: 16,
  breakpoints: {
    768: {
      spaceBetween: 24,
      grid: {
        rows: 2
      }
    },
    992: {
      spaceBetween: 30,
      grid: {
        rows: 0
      }
    }
  }
});
var recommendSwiper = new Swiper(".recommendSwiper", {
  slidesPerView: "auto",
  grid: {
    rows: 3
  },
  spaceBetween: 8,
  breakpoints: {
    768: {
      spaceBetween: 16,
      grid: {
        rows: 2
      }
    },
    992: {
      spaceBetween: 30,
      grid: {
        rows: 2
      }
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
}); // 課程介紹

var courseIntroduceSwiper = new Swiper(".courseIntroduceSwiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  grid: {
    rows: 4
  },
  breakpoints: {
    768: {
      spaceBetween: 30,
      grid: {
        rows: 0
      }
    }
  }
}); // 瑜珈空間

var envRecommendSwiper = new Swiper(".envRecommendSwiper", {
  slidesPerView: "auto",
  spaceBetween: 30
}); // 立即預約

var allBtn = document.querySelectorAll('.js-schemeBtn');
var reserveSwiper = document.querySelector('.reservationSwiper');
var swiperOuter = document.querySelector('.js-swiperOuter');
var allItem = document.querySelectorAll('.js-reservationSwiperItem');
var courseTitle = document.querySelector('.js-courseTitle');
var choose = document.querySelector('.js-choose');
var courseStr = "";

if (allBtn && allItem && choose) {
  choose.classList.add('d-none');
  allBtn.forEach(function (item) {
    item.addEventListener('click', reserveCollapseFn);
  });
  allItem.forEach(function (item) {
    item.addEventListener('click', reserveSwiperFn);
  });
} // collapse


function reserveCollapseFn() {
  var clickItem = this;
  var clickCard = clickItem.parentElement.parentElement;
  var isExpanded = clickItem.getAttribute('aria-expanded');

  if (isExpanded === 'true') {
    choose.classList.remove('d-none');
    allBtn.forEach(function (item) {
      item.setAttribute("disabled", true);
      item.parentElement.parentElement.parentElement.classList.add('d-none');
    });
    clickItem.removeAttribute('disabled'); // 抓取課程

    courseStr = clickItem.getAttribute('data-course');
    courseTitle.textContent = "".concat(courseStr, "\u8AB2\u7A0B-\u57FA\u790E ");
    clickCard.classList.add('active');
    clickCard.parentElement.classList.remove('d-none'); // 滾到選擇課程階級

    scrollToCollapseFn();
  } else {
    choose.classList.add('d-none');
    allBtn.forEach(function (item) {
      item.removeAttribute('disabled');
      item.parentElement.parentElement.parentElement.classList.remove('d-none');
    });
    clickCard.classList.remove('active');
  }
}

; //reservationSwiper

function reserveSwiperFn() {
  var clickItem = this;
  var activeItem = getActive(allItem);
  var text = clickItem.dataset.text;

  if (clickItem.classList.contains("active")) {
    clickItem.classList.remove('active');
    choose.classList.add('disabled');
  } else {
    if (_typeof(activeItem) === "object") {
      activeItem.classList.remove('active');
    }

    clickItem.classList.add('active');
    choose.classList.remove('disabled');
    courseTitle.textContent = "".concat(courseStr, "\u8AB2\u7A0B-").concat(text, " ");
  }
}

;

function getActive(allItem) {
  var ary = Array.from(allItem).find(function (item) {
    return item.classList.contains('active');
  });
  return ary === undefined ? false : ary;
}

;

function scrollToCollapseFn() {
  var top = swiperOuter.offsetTop;
  window.scrollTo({
    top: top - 74,
    behavior: 'smooth'
  });
}

;
var reservationSwiper = new Swiper(".reservationSwiper", {
  slidesPerView: "auto",
  spaceBetween: 24,
  grid: {
    rows: 3
  },
  breakpoints: _defineProperty({
    768: {
      spaceBetween: 30,
      grid: {
        rows: 0
      }
    }
  }, "768", {
    spaceBetween: 20,
    grid: {
      rows: 0
    }
  })
}); // scroll

var backBtn = document.querySelector('.topBack');
backBtn.addEventListener('click', scrollToTopFn);
window.addEventListener('scroll', scrollFn);

function scrollFn() {
  var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

  if (scrollTop >= 40) {
    backBtn.classList.add('show');
  } else {
    backBtn.classList.remove('show');
  }
}

;

function scrollToTopFn() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

;
//# sourceMappingURL=all.js.map
