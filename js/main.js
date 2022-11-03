'use strict';

const swiperClients1 = new Swiper('.v-clients-slider', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
  delay: 0,
  disableOnInteraction: false
  },
  speed: 105000,
  spaceBetween: 10,
  slidesPerView: 5,
  grabCursor: false,
  slidesPerGroup: 20,
  simulateTouch: false,
  
  });
  
const swiperClients2 = new Swiper('.v2-clients-slider', {
direction: 'horizontal',
loop: true,
autoplay: {
delay: 0,
disableOnInteraction: false
},
speed: 110000,
spaceBetween: 10,
slidesPerView: 7,
grabCursor: false,
slidesPerGroup: 20,
simulateTouch: false,
});

const swiperTeam = new Swiper('.v-team-slider', {
  direction: 'horizontal',
  loop: true,
    autoplay: {
    delay: 2000,
     
  },
  speed: 1000,
  spaceBetween: 30,
  slidesPerView: 3,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

    
});