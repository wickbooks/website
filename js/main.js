$(document).ready(function() {
	
	 // Mobile Menu
	 
		 jQuery('.mobilemenu nav').meanmenu();
	 
	 // Accordion
	 
		$(".accordion_example2").smk_Accordion({
			closeAble: true, 
		});
		
		$(".accordion_example3").smk_Accordion({
			closeAble: true, 
		});
	
	// Youtube Popup
	
		 $('.popup-youtube').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
		 });
	 
	// Contact Popup
	
		$('.popup-with-form').magnificPopup({
			  type: 'inline',
			  preloader: false,
			  focus: '#name',
			  callbacks: {
				beforeOpen: function() {
				  if($(window).width() < 700) {
					this.st.focus = false;
				  } else {
					this.st.focus = '#name';
				  }
				}
			  }
		});
	
	// Scrolling Nav
	
		 $('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	
	// Nav Fixed
	
		 var header = $(".header");
		  $(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 50) {
				header.removeClass('header').addClass("header-fixed");
			} else {
				header.removeClass("header-fixed").addClass('header');
			}
		 });
	
	
	// Slider
	
		$('#img-1').css('display','block')
			
			$("#content-1").mouseenter(function() {
			   $('.img-1').css('display','none');
			   $('#img-1').fadeToggle()
			})
			$("#content-2").mouseenter(function() {
			   $('.img-1').css('display','none');
			   $('#img-2').fadeToggle()
			})
			$("#content-3").mouseenter(function() {
			   $('.img-1').css('display','none');
			   $('#img-3').fadeToggle()
			})
			$("#content-4").mouseenter(function() {
				$('.img-1').css('display','none');
				$('#img-4').fadeToggle()
		});
	
});	