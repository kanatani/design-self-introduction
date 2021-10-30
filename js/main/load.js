// JavaScript Document
'use strict';

$('.loader').fadeIn(1000);

$(window).on('load',function() {
  $('#loading').delay(1500).fadeOut(800);
});

$(function(){
  setTimeout('forceload()', 2000);
})

function forceload(){
  $('#loading').delay(900).fadeOut(800);
}
