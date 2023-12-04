(function($) {
	$(document).ready(function() {
		"use strict";
		// HERO FADE
		var div = $('.header');
			$(window).on('scroll', function() {
			var st = $(this).scrollTop();
			div.css({ 'opacity' : (1 - st/500) });
		});

		var divs = $('.page-header');
			$(window).on('scroll', function() {
			var st = $(this).scrollTop();
			divs.css({ 'opacity' : (1) });
		});
		
		
		// PARALLAX LAYERS
		$('#parallax').parallax({
			invertX: true,
			invertY: true,
			scalarX: 10,
			 frictionY: .1
		});


		
		// TYPEWRITER
		$("#typewriter").typewriter({
			prefix : "",
			text : ["Please wait", "Still loading", "Almost done"],
			typeDelay : 100,
			waitingTime : 1500,
			blinkSpeed : 800
		});
		
		// NAV LINK HOVER AUDIO
		// $(".navigation-menu a")
		// 	.each(function(i) {
		// 	if (i != 0) {
		// 	  $("#hover-audio")
		// 		.clone()
		// 		.attr("id", "hover-audio" + i)
		// 		.appendTo($(this).parent());
		// 	}
		// 	$(this).data("beeper", i);
		// }).mouseenter(function() {
		// 	$("#hover-audio" + $(this).data("beeper"))[0].play();
		// 	});
		// 	$("#hover-audio").attr("id", "hover-audio0");

		// 	// SANDWICH MENU AUDIO
		// 	document.getElementById("sandwich-btn").addEventListener('click', function(e) {
		// 	document.getElementById("link").play();
	  	// });
		

		// PAGE TRANSITION
		// $('.navigation-menu ul li a').on('click', function(e) {
		// $('.transition-overlay').toggleClass("open");
		// });
		// $('.navigation-menu ul li a').on('click', function(e) {
		// 	e.preventDefault();                  
		// 	var goTo = this.getAttribute("href"); 
		// 	setTimeout(function(){
		// 		window.location = goTo;
		// 	},1000);       
		// });	




		// HIDE NAVBAR
		$(window).scroll(function () {
			if ($(this).scrollTop() < 300) {
				$('.navbar').addClass('hide');
				$('.navbar').css('transition-delay', '0s');
				$('.sandwich-btn .index-span').css('background-color', '#fff');
				$('.navbar .logo').css('visibility', 'visible');
				if ($(".navigation-menu").hasClass("open")) {
					$('.sandwich-btn span').css('background-color', '#000');

				}else{
					$('.sandwich-btn .index-span').css('background-color', '#fff');
				}
				if ($(window).width() < 600) {
					$('.button').css('display','none');
				 }
				 else {
					$('.button').css('display','flex');
				 }
			} else {
				$('.navbar').removeClass('hide');
				$('.navbar .logo').css('visibility', 'hidden');
				$('.button').css('display','none');
				$('.sandwich-btn span').css('background-color', '#000');
			}
		});


		// SANDWICH BUTTON
		$('.sandwich-btn').on('click', function(e) {
			if ($(".navigation-menu").hasClass("open")) {
				$("body").removeClass('overflow');
				$(".navigation-menu").removeClass('open');
				$(".page-loaded").css('overflow','inherit');
				$('.navigation-menu .black-layer').css('transition-delay', '0.4s');
				$('.inner .content-ul-1 .content-ul-1-display').css('display', 'none');
				// $('.inner').css('opacity', '1');
				if ($(window).scrollTop() > 300) {
					$('.navbar').addClass('hide');
					$('.navbar').css('transition-delay', '0s');
				}else{
					$('.sandwich-btn .index-span').css('background-color', '#fff');
				}
			} else
			{
				$(".navigation-menu").addClass('open');
				$("body").addClass('overflow');
				$(".page-loaded").css('overflow','hidden');
				$('.navigation-menu .black-layer').css('transition-delay', '-0.1s');
				$('.inner .content-ul-1 .content-ul-1-display').css('display', 'table-cell');
				$('.sandwich-btn span').css('background-color', '#000');
				$('.navbar').removeClass('hide');
				$("html, body").animate({
                    scrollTop:0
                }, 1000);
			

			}
			$(this).toggleClass("open");
		});


		// aboutus
		$('#aboutuss').on('click', function(e) {
			if ($(".navigation-menu").hasClass("open")) {
				$("body").removeClass('overflow');
				$(".page-loaded").css('overflow','inherit');
				$(".navigation-menu").removeClass('open');
				$('.navigation-menu .black-layer').css('transition-delay', '0.4s');
				$('.inner .content-ul-1 .content-ul-1-display').css('display', 'none');
				// $('.inner').css('opacity', '1');
				if ($(window).scrollTop() > 300) {
					$('.navbar').addClass('hide');
					$('.navbar').css('transition-delay', '0s');
				}
			} else
			{
				$(".navigation-menu").addClass('open');
				$("body").addClass('overflow');
				$('.navigation-menu .black-layer').css('transition-delay', '-0.1s');
				$('.inner .content-ul-1 .content-ul-1-display').css('display', 'table-cell');
				// $('.inner').css('opacity', '0');
				$('.navbar').removeClass('hide');
		

			}
			$('.sandwich-btn').toggleClass("open");
		});

		var swiper = new Swiper(".mySwiper", {
			slidesPerView: 1,
			grabCursor: true,
			loop: true,
			autoplay: {
			  delay: 5000, // Autoplay delay in milliseconds
			},
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
			navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev",
			},
		  });
		  
		  $(".swiper-button-next").html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path></svg>');
		  $(".swiper-button-prev").html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>');
		  
		
		// Custom SVG icons for navigation buttons
		
		
		// SANDWICH BUTTON2
		// $('.sandwich-btn2').on('click', function(e) {
		// 	if ($(".navigation-menu").hasClass("open")) {
		// 		$("body").removeClass('overflow');
		// 		$(".navigation-menu").removeClass('open');
		// 		$('.navigation-menu .black-layer').css('transition-delay', '0.4s');
		// 		$('.navbar').addClass('hide');
		// 		$('.sandwich-btn2 span').css('background-color', '#000');
		// 		$('.navbar2').css('transition-delay', '0s');
		// 		$('.navbar2').css('background-color', '#fff');
		// 		$('.navbar2').css('border-bottom', '1.5px solid rgba(0,0,0,.3)');
		// 		if ($(window).width() < 600) {
		// 			$('.common-btn-top2').css('display','none');
		// 		}else
		// 			$('.common-btn-top2').css('display','inline-block');
				
		// 	} else
		// 	{
		// 		$(".navigation-menu").addClass('open');
		// 		$("body").addClass('overflow');
		// 		$('.navigation-menu .black-layer').css('transition-delay', '0.4s');
		// 		$('.navbar2').removeClass('hide');
		// 		$('.common-btn-top2').css('display','none');
		// 		$('.sandwich-btn2 span').css('background-color', '#fff');
		// 		$('.navbar2').css('background-color', 'transparent');
		// 		$('.navbar2').css('border-bottom', 'none');
		// 		if ($(window).width() < 600) {
		// 			$('.sandwich-btn2 span').css('background-color', '#000');
		// 		 }
		// 		 else {
		// 			$('.sandwich-btn2 span').css('background-color', '#fff');
		// 		 }
				
				
		// 	}
		// 	$(this).toggleClass("open");
		// });


		if ($(window).scrollTop() > 300) {
			$('.sandwich-btn .index-span').css('background-color', '#000');
			$('.navbar .logo').css('visibility', 'hidden');
			$('.button').css('display','none');
		}else{
			$('.sandwich-btn .index-span').css('background-color', '#fff');
			$('.navbar .logo').css('visibility', 'visible');
			if ($(window).width() < 600) {
				$('.button').css('display','none');
			 }
			 else {
				$('.button').css('display','flex');
			 }
		}


		 //ripple effect
		// var rippleeffect =true
		// $(".contact-form-submit").on('mouseover', function(e) {

		// 	if ($(this).find('span').length === 0) {
	
		// 		$(this).append('<span></span>');
	
		// 		var ripple = $(this).find('span'),
		// 			size = ( $(this).innerWidth() > $(this).innerHeight() ) ? $(this).innerWidth()*2 : $(this).innerHeight()*2,
		// 			clickY = $(this).offset().top,
		// 			clickX = $(this).offset().left,
		// 			x = e.pageX - clickX,
		// 			y = e.pageY - clickY;
	
		// 		ripple.css({
		// 			'top': y +'px',
		// 			'left': x +'px',
		// 		});
	
		// 		ripple.animate({
		// 			'width': size +'px',
		// 			'height': size +'px',
		// 			'margin-top': -size/2 +'px',
		// 			'margin-left': -size/2 +'px',
		// 			'opacity': 0,
		// 		}, 600, function() {
		// 			$(this).remove();
		// 		});
	
		// 	}
			
		// });






		
		// DOTS FILTER
		// $('.dots-menu').on('click', function(e) {
    	// 	$(this).toggleClass("active");
    	// 	$('.works-filter').toggleClass("active");
		// });


		
		
		
		// SMOOTH SCROLL
	// 	$('.case-details .case-navbar ul li a').bind('click', function(event) {
    //     var $anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: $($anchor.attr('href')).offset().top
    //     }, 1000, 'easeInOutExpo');
    //     event.preventDefault();
    // });
		
			
	});
	// END JQUERY		

	


	





























	
	// PRELOADER
	var width = 0,
		perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
		EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
		time = parseInt((EstimatedTime/1000)%10, 1000)*100;

	// $(".loadbar").animate({
	//   	width: width + "%"
	// 	}, time);

	// function animateValue(id, start, end, duration) {

	// var range = end - start,
	//   	current = start,
	//   	increment = end > start? 1 : -1,
	//   	stepTime = Math.abs(Math.floor(duration / range)),
	//   	obj = $(id);

	// var timer = setInterval(function() {
	// 	current += increment;
	// 	$(obj).text(current + "%");
	// 	if (current == end) {
	// 		clearInterval(timer);
	// 	}
	// }, stepTime);
	// }

	setTimeout(function(){
		$("body").addClass("page-loaded");
	}, time);

	// DATA BACKGROUND IMAGE
	var pageSection = $(".bg-image");
	pageSection.each(function(indx){
		if ($(this).attr("data-background")){
			$(this).css("background-image", "url(" + $(this).data("background") + ")");
		}
	});

	// WOW ANIMATION 
	var wow = new WOW(
	{
		animateClass: 'animated',
		offset:       50
	}
	);
	wow.init();

	// MASONRY
	// var $container = $('.gallery-section ul').imagesLoaded( function() {
	// 	$container.isotope({
	// 	  itemSelector: '.gallery-section ul li',
	// 	  layoutMode: 'masonry'
	// 	});
	// });

	// ISOTOPE FILTER
	// var $container = $('.gallery-section ul');
	// $container.isotope({
	// filter: '*',
	// animationOptions: {
	// duration: 750,
	// easing: 'linear',
	// queue: false
	// }
	// });

	$('.works-filter li a').on('click', function(e) {
	$('.works-filter li a.current').removeClass('current');
	$(this).addClass('current');



	var selector = $(this).attr('data-filter');
	$container.isotope({
		filter: selector,
		animationOptions: {
		duration: 750,
		easing: 'linear',
		queue: false
		}
	});
	return false;
	});  

	// COUNTER 
	// if (!document.getElementById("counter")) {
	// } 
	// else {

	// var lastWasLower = false;
	// 	$(document).scroll(function(){

	// 	var p = $( "#counter" );
	// 	var position = p.position();
	// 	var position2 = position.top;

	// 	if ($(document).scrollTop() > position2-300){
	// 	if (!lastWasLower)
	// 		$('#1').html("21");
	// 		$('#2').html("37");
	// 		$('#3').html("78");

	// 	lastWasLower = true;
	// 		} else {
	// 	lastWasLower = false;
	// 	}
	// 	});		
	// }

	// SLIDER
	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 0,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		autoplay: {
		delay: 4500,
		disableOnInteraction: false,
		},
		loop: true,
		loopedSlides: 3,
		thumbs: {
        swiper: galleryThumbs
      }
	});

	// SLIDER CONTROL
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 10,
		centeredSlides: true,
		slidesPerView: 3,
		touchRatio: 0.2,
		slideToClickedSlide: true,
			direction: 'vertical',
		loop: true,
		loopedSlides: 3,
		breakpoints: {
        1024: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 3
        },
        640: {
          slidesPerView: 1
        },
        320: {
          slidesPerView: 1
        }
      }
		});
	
	if ($(".gallery-top")[0]){
		galleryTop.controller.control = galleryThumbs;
		galleryThumbs.controller.control = galleryTop;
		} 
	else {

		}
	

	// MAGNET EFFECT 
	document.addEventListener("mousemove", function(e){
	  magnetize('.circle', e);
	});

	function magnetize(el, e){
	  var mX = e.pageX,
		  mY = e.pageY;
	  var items = document.querySelectorAll(el);

	  [].forEach.call(items, function(item) {
		var customDist = item.getAttribute('dist') * 20 || 120;
		var centerX = item.offsetLeft + (item.clientWidth/2);
		var centerY = item.offsetTop + (item.clientHeight/2);

		var deltaX = Math.floor((centerX - mX)) * -0.45;
		var deltaY = Math.floor((centerY - mY)) * -0.45;

		var distance = calculateDistance(item, mX, mY);

		if(distance < customDist){
		  TweenMax.to(item, 0.3, {y: deltaY, x: deltaX, scale:1.1});
		  item.classList.add('magnet');
		}
		else {
		  TweenMax.to(item, 0.45, {y: 0, x: 0, scale:1});
		  item.classList.remove('magnet');
		}     
	   });
	}

	function calculateDistance(elem, mouseX, mouseY) {
	  return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offsetLeft+(elem.clientWidth/2)), 2) + Math.pow(mouseY - (elem.offsetTop+(elem.clientHeight/2)), 2)));
	}
	
	
	// PARTICLES JS
	if( document.getElementById("particles-js") ) {
        particlesJS('particles-js',

            {
                "particles": {
                    "number": {
                        "value": 161,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#2f2f2f"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#c3c3c3",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            }
        );
    }
})(jQuery);




//   goodmorning
var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs >= 4 && hrs <= 12)
  greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 16)
  greet = 'Good Afternoon';
else if (hrs >= 16 && hrs <= 20)
  greet = 'Good Evening';
else if (hrs >= 20 && hrs <= 24)
  greet = 'Hello Night Stalker!';
else if (hrs >= 0 && hrs <= 4)
  greet = 'Hello Night Stalker!';

document.getElementById('greetings').innerHTML = greet;




////inner h1
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
  }).add({
	targets:'.h2anime',
	opacity:1
  }).add({
    targets: '.h2anime .h2anime-2span',
    opacity: 1,
    duration: 500,
    easing: "easeOutExpo",
  }).add({
    targets: '.h2anime',
    opacity: 1,
    duration: 500,
    easing: "easeOutExpo",
  })
  .add({
    targets: '.h2anime',
    opacity: 0,
    duration: 100,
    easing: "easeOutExpo",
  })
  .add({
    targets: '.h3anime',
    opacity: 1,
    duration: 500,
    easing: "easeOutExpo",
  }).add({
    targets: '.h3anime',
    opacity: 0,
    duration: 100,
    easing: "easeOutExpo",
  })
  .add({
    targets: '.h4anime',
    opacity: 1,
    duration: 500,
    easing: "easeOutExpo",
  }).add({
    targets: '.h4anime',
    opacity: 0,
    duration: 100,
    easing: "easeOutExpo",
  })
  .add({
    targets: '.h5anime',
    opacity: 1,
    duration: 500,
    easing: "easeOutExpo",
  }).add({
    targets: '.h5anime',
    opacity: 0,
    duration: 100,
    easing: "easeOutExpo",
  })
  .add({
    targets: '.h6anime',
    opacity: 1,
    duration: 500,
    easing: "easeOutExpo",
  })
  .add({
    targets: '.h6anime',
    opacity: 0,
    duration: 100,
    easing: "easeOutExpo",
  })
  .add({
    targets: '.h7anime',
    opacity: 1,
    duration: 500,
    easing: "easeOutExpo",
  })
  .add({
    targets: '.h7anime',
    opacity: 0,
    duration: 100,
    easing: "easeOutExpo",
  })
  .add({
    targets: '.h8anime',
    opacity: 1,
    duration: 500,
    easing: "easeOutExpo",
  })
  .add({
    targets: '.h8anime',
    opacity: 0,
    duration: 100,
    easing: "easeOutExpo",
  })
  .add({
    targets: '.h9anime',
    opacity: 1,
    duration: 500,
    easing: "easeOutExpo",
  })
  .add({
    targets: '.h9anime',
    opacity: 0,
    duration: 100,
    easing: "easeOutExpo",
  })
  .add({
    targets: '.h10anime',
    opacity: 1,
    duration: 500,
    easing: "easeOutExpo",
  })
  .add({
    targets: '.h10anime',
    opacity: 0,
    duration: 100,
    easing: "easeOutExpo",
  })
  .add({
    targets: '.h11anime',
    opacity: 1,
    duration: 500,
    easing: "easeOutExpo",
  })
  .add({
    targets: '.h11anime',
    opacity: 0,
    duration: 100,
    easing: "easeOutExpo",
  })
  .add({
    targets: '.h12anime',
    opacity: 1,
    duration: 500,
    easing: "easeOutExpo",
  })
  .add({
    targets: '.h12anime',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
  });


  var restartAnim = anime({
	targets: '#restartAnim .el',
	translateX: [250,0],
	delay: function(el, i, l) { return (i) * 100; },
	direction: 'alternative',
	opacity:[0,1],
	duration: 1500,
	elasticity: 600,
	loop: 1
  });
  


  
  document.querySelector('.sandwich-btn').onclick = restartAnim.restart;




  
  
  
