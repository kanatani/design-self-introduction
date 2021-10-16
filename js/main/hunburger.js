// JavaScript Document
//
'use strict';

const hum = document.getElementById('hamburger');

const nav = document.getElementById('navi');

hum.addEventListener('click',function(){
	hum.classList.toggle('active');
	nav.classList.toggle('nav-active');
});