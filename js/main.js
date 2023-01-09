'use strict';

const swiperClients1 = new Swiper('.v-clients-slider', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
  delay: 0,
  disableOnInteraction: false,
  },
  speed: 105000,
  spaceBetween: 10,
  //slidesPerView: 5,
  grabCursor: false,
  slidesPerGroup: 20,
  simulateTouch: false,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
    1600: {
      slidesPerView: 5,
    }
  }
  });
  
const swiperClients2 = new Swiper('.v2-clients-slider', {
direction: 'horizontal',
loop: true,
autoplay: {
delay: 0,
disableOnInteraction: false,
},
speed: 110000,
spaceBetween: 10,
// slidesPerView: 7,
grabCursor: false,
slidesPerGroup: 20,
simulateTouch: false,
breakpoints: {
  320: {
    slidesPerView: 2,
  },
  480: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
  },
  1280: {
    slidesPerView: 6,
  },
  1600: {
    slidesPerView: 7,
  }
}
});

const swiperTeam = new Swiper('.v-team-slider', {
  direction: 'horizontal',
  loop: true,
    autoplay: {
    delay: 2000,
    // прокрутка после взаимодействия с кнопками
    disableOnInteraction: false,
  },
  speed: 1000,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    528: {
      slidesPerView: 2,
    },
    942: {
      slidesPerView: 3,
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },  
  // остановится при наведении мыши
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },  
});

const swiperCase = new Swiper('.v-portfolio-case-slider', {
  //direction: 'horizontal',
  loop: true,
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },    
});

// Отзывы
const swiperReviews = new Swiper('.v-reviews-slider', {
  direction: 'horizontal',
  loop: true,
  //   autoplay: {
  //   delay: 2000,
  //   // прокрутка после взаимодействия с кнопками
  //   disableOnInteraction: false,
  // },
  speed: 1000,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    942: {
      slidesPerView: 2,
    }
  },
  pagination: {
  el: '.swiper-pagination',
  type: 'bullets',
  clickable: true,      
  },    
});

// слайдеры процесса
var sliderprocmini = new Swiper(".slider-proc-mini", {
  direction: 'horizontal',
  spaceBetween: 15,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  // breakpoints: {
  //   320: {
  //     direction: 'horizontal',
  //   },
  //   481: {
  //     direction: 'vertical',
  //   },
  //},
});
var sliderprocmain = new Swiper(".slider-proc-main", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: sliderprocmini,
  },
});
