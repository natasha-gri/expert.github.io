'use strict';

const swiperClients1 = new Swiper('.v-clients-slider', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    // пауза между прокрутками
    delay: 0,
    // отключить после ручного переключения
    disableOnInteraction: false
  },
  speed: 105000,
  spaceBetween: 10,
  slidesPerView: 5, 
  grabCursor: false,
  slidesPerGroup: 20,
  simulateTouch: false,
});

const swiperlients2 = new Swiper('.v2-clients-slider', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    // пауза между прокрутками
    delay: 0,
    // отключить после ручного переключения
    disableOnInteraction: false
  },
  speed: 150000,
  spaceBetween: 10,
  slidesPerView: 5.7, 
  grabCursor: false,
  slidesPerGroup: 15,
});
