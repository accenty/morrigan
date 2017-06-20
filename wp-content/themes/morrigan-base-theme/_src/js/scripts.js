//@prepros-prepend lib/jquery.min.js
//@prepros-prepend lib/jquery.flexslider.js
//@prepros-prepend lib/jquery.waypoints.js
//@prepros-prepend lib/jquery.magnific-popup.js

(function ($, root, undefined) {
	$(function(){
		parallax();
		stickyHeader();
		initTestimonialsSlider();
		initWaypoints();
		toTop();
		initBasicMfp();
		initGalleryMfp();
	});

	function parallax(){
		$(window).scroll(function(){
			var windowScroll = $(window).scrollTop();
	    $('.parallax').css({
	      'transform' : 'translate(0px, '+ windowScroll / 3 +'px)'
	    });
		});
	}

	function stickyHeader() {
		$(window).scroll(function(){
			var windowScroll = $(window).scrollTop();
			var titleHeight = $('.title-container').innerHeight();

			$('.header').toggleClass('sticky', windowScroll > titleHeight);
		});
	}

	function initTestimonialsSlider() {
	  $('.flexslider').flexslider({
	    animation: 'slide',
			controlsContainer: $('.slider-controls-container'),
    	customDirectionNav: $('.slider-navigation a'),
	  });
	}

	function initWaypoints() {
		$('.ce').each(function(index,element){
			$(this).waypoint(function(){
				$(element).addClass('transition');
			},{
				offset: '75%',
			});
		});
	}

	function toTop() {
		$(window).scroll(function(){
			var windowScroll = $(window).scrollTop();
			var height = 600;

			$('.to-top').toggleClass('visible',windowScroll > height);
		});

		$('.to-top').click(function(e){
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			},700);
		});
	}

	function initBasicMfp() {
		$('.lightbox-trigger').magnificPopup({
			type: 'image',
			titleSrc: 'title',
		});
	}

	function initGalleryMfp() {
		$('.image-gallery').magnificPopup({
		  delegate: '.lightbox-trigger-gallery',
		  type: 'image',
			gallery:{
				enabled:true
			}
		});
	}
})(jQuery, this);
