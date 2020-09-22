'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

	/*------------------
		Masonry
	--------------------*/
	var $container = $('.gallery-warp');
		$container.imagesLoaded().progress( function() {
			$container.isotope({
				masonry: {
					columnWidth: '.grid-sizer',
  					itemSelector: '.gallery-item'
				}
			});
		});

	$('.gallery-filter li').on("click", function(){
		$(".gallery-filter li").removeClass("active");
		$(this).addClass("active");
		var selector = $(this).attr('data-filter');
		$container.imagesLoaded().progress( function() {
			$container.isotope({
				filter: selector,
			});
		});
		return false;
	});

	var $blog_grid = $('.blog-grid-warp');

	$blog_grid.imagesLoaded().progress( function() {
		$blog_grid.isotope({
			masonry: {
				columnWidth: '.blog-grid-sizer',
				itemSelector: '.blog-grid'
			}
		});
	});

});

(function($) {
	
	/*------------------
		Navigation
	--------------------*/
	$(".menu-switch").on('click', function () {
		$('.side-menu-wrapper').addClass('active');
		$('.menu-wrapper').addClass('hide-left');
	});

	$(".menu-close").on('click', function () {
		$('.side-menu-wrapper').removeClass('active');
		$('.menu-wrapper').removeClass('hide-left');
	});


	function hero() {
		var window_w = $(window).innerWidth();
		
		if(window_w > 1300) {
			var pana_w = 180;
		} else if( window_w > 1200 ) {
			var pana_w = 100;
		} else {
			var pana_w = 60;
		}

		var hero_w = $('.hero-section').innerWidth();
		var pa_length = (($('.pana-accordion-item').length - 1) * pana_w);
		var hero_iw = hero_w - pa_length;

		var window_h = $(window).innerHeight();
		$('.pana-accordion-item').each(function() {
			$(this).height(window_h);
		});
		accordion.init({
			id: 'accordion',
			expandWidth: hero_iw,
			itemWidth: pana_w,
			autoPlay: false,
			borderWidth: 0
		});
		
	}
	
	hero();

	$(window).resize(function(){
		if($('.hero-section').length > 0) {
			if($(window).innerWidth() > 767) {
				location.reload();
			}
		}
	});
	

	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		autoplay: true,
		smartSpeed: 1000,
	});    
})(jQuery);
