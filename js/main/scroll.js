// JavaScript Document

'use strict';

const fadeshow = function () {

  window.addEventListener("scroll", function () {
    let scroll = document.querySelectorAll('.content');

    let scrollValue = window.pageYOffset;

    let windowHeight = window.innerHeight;

    let value = 70;

    for (var i = 0; i < scroll.length; i++) {
      let scrollTop = scroll[i].getBoundingClientRect().top + scrollValue;
      if (scrollValue > scrollTop - windowHeight + value) {
        scroll[i].classList.add('show');
      }
    }
  })
}

fadeshow();