// JavaScript Document
'use strict';

$(window).on('load', function() {
	$('.loader').fadeIn(1000);
	setTimeout(function() {
		$('#loading').fadeOut();
	},2300)
});
