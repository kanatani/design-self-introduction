// JavaScript Document

'use strict';

$("#index").vegas({ // スライドショーにしたい要素指定
    slides: [
        { src: "../images/top/top_1.jpg" }, // 背景画像1枚目
        { src: "../images/top/top_2.jpg" }, // 背景画像2枚目
        { src: "../images/top/top_3.jpg"}, // 背景画像3枚目
    ],
	animation: 'kenburns',
	delay: 8000,
	animationDuration: 9000,
	transition: 'blur2',
  });