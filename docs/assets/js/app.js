(function ($) {
 "use strict";
$(document).ready(function(){
	  
		/*
		Mean Menu Responsive
		============================*/		
        jQuery('nav#main-menu').meanmenu();		
		
		/*
		Happy Client Testimonial Crousel Js
		============================*/ 	
         $('.client-active').owlCarousel({
			    loop:true,
				autoplay:true,
			    nav:false,
				dots:false,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:2
			        },
			        1000:{
			            items:3
			        }
			    }
			})	
		/*
		Apps Screenshot slick Crousel
		============================*/ 	
		$('.all-apps-screenshots').slick({
		  centerMode: true,
		  centerPadding: '0px',
		  slidesToShow: 3,
		  autoplay:true,
		  arrows: false,
		  responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				centerMode: true,
				autoplay:true,
				centerPadding: '0px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				centerMode: true,
				autoplay:true,
				centerPadding: '0px',
				slidesToShow: 1
			  }
			}
		  ]
		});

		/*
		Team slick Crousel 
		============================*/ 
		$('.all-team').slick({
		  centerMode: true,
		  centerPadding: '0px',
		  slidesToShow: 3,
		  responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 3
			  }
			},	
			{
			  breakpoint: 767,
			  settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 1
			  }
			},
			{
			  breakpoint: 460,
			  settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '0px',
				slidesToShow: 1
			  }
			}
		  ]
		});			
	
 
		/*
		Stikey Js
		============================*/ 
		(function () {
			var nav = $('.menu-sticky');
			var scrolled = false;
			$(window).scroll(function () {
				if (120 < $(window).scrollTop() && !scrolled) {
					nav.addClass('sticky_menu animated fadeInDown').animate({ 'margin-top': '0px' });
					scrolled = true;
				}
				if (120 > $(window).scrollTop() && scrolled) {
					nav.removeClass('sticky_menu animated fadeInDown').css('margin-top', '0px');
					scrolled = false;
				}
			});
		}());		
		
		/*
		Magnific Popup
		============================*/ 		
        $('.gallery-photo').magnificPopup({
            type: 'image',
            gallery: {
              enabled: true
            },
        });	 

		/*
		Ripples Watter Effect Js
		============================*/ 
		$('.themeix-screenshots').ripples({
			resolution: 512,
			dropRadius: 20,
			perturbance: 0.04,
		});	
		
		/*
		Anchor Link Scrolling Js
		============================*/ 		
		$('a[href^="#"]').on('click',function (e) {
			e.preventDefault();

			var target = this.hash;
			var $target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 900, 'swing', function () {
				window.location.hash = target;
			});
		});
		
	 
		/*
		Youtube video Background Js
		============================*/ 	
		$('#video-bg').YTPlayer({
			fitToBackground: true,
			videoId: 'gVKEM4K8J8A',
			 playerVars: {
      modestbranding: 0,
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      branding: 0,
      rel: 0,
      autohide: 0
      }
			 
			
		});
					
		/*
		Preeloader
		============================*/
		$(window).on("load", function() {
			$('#preloader').fadeOut();
			$('#preloader-status').delay(200).fadeOut('slow');
			$('body').delay(200).css({'overflow-x':'hidden'});
		});

	
    /*
    ============================================
    Infinite Scroll For Post 
    ============================================
    */
    $('.infinite-scroll').infiniteScroll({
        path: function path() {
            var pageNumber = this.loadCount + 2;
            return '/pages/' + pageNumber + '/index.html';
        },
        append: '.blog-post',
        button: '.loadmore-btn',
        scrollThreshold: false

    });


		
	});	
})(jQuery);

