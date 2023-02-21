'use strict';

// function fontsize() {
//     let block = document.querySelector('.js-fontsize');
//     let text1 = document.querySelector('.js-fontsize .js-text-1');
//     let w = block.offsetWidth;
//     text1.style.fontSize = w/2.4  + "%";
//     //text1.style.top = w/38 + "px";
//     //text1.style.left = w/9 + "px";

//     let text2 = document.querySelector('.js-fontsize .js-text-2');
//     text2.style.fontSize = w/2.4  + "%";
// }


function fontsize() {
  let block = document.querySelector('.js-fontsize');  
  let w = block.offsetWidth;
  let text = document.querySelectorAll('.js-fontsize .js-text');
  for (let i = 0; i < text.length; i++) {
    text[i].style.fontSize = w/2.3  + "%";
    }
}

window.onload = fontsize;
window.onresize = fontsize; 