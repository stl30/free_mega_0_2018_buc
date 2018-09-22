
$(document).ready(function() {
	'use strict';
	/*-----------------------------------------------------------------------------------*/
    /*	STICKY HEADER
    /*-----------------------------------------------------------------------------------*/
	if ($(".navbar").length) {
    	var options = {
	        offset: 350,
	        offsetSide: 'top',
	        classes: {
	            clone: 'banner--clone fixed',
	            stick: 'banner--stick',
	            unstick: 'banner--unstick'
	        },
	        onStick: function() {
	            $($.SmartMenus.Bootstrap.init);
	        },
	        onUnstick: function() {
	            $('.navbar .btn-group').removeClass('open');
	        }
	    };
	    var banner = new Headhesive('.navbar', options);
	}
    /*-----------------------------------------------------------------------------------*/
    /*	HAMBURGER MENU ICON
    /*-----------------------------------------------------------------------------------*/
    $(".nav-bars").on( "click", function() {
        $(".nav-bars").toggleClass("is-active");
    });
    /*-----------------------------------------------------------------------------------*/
	/*	DROPDOWN MENU
	/*-----------------------------------------------------------------------------------*/
    $('.navbar .nav .btn-group .dropdown-menu').on('click', function(e) {
        e.stopPropagation();
    });	   
	/*-----------------------------------------------------------------------------------*/
	/*	SLICK
	/*-----------------------------------------------------------------------------------*/
	$('.slick-wrapper').each(function(idx, item) {
		var carouselId = "carousel" + idx;
		this.id = carouselId;
		$(this).find('.slick').slick({
			dots: true,
			infinite: true,
			adaptiveHeight: true,
			touchThreshold: 10,
			swipeToSlide: true,
			slide: "#" + carouselId + " .slick .item",
			appendArrows: "#" + carouselId + " .slick-nav",
			appendDots: "#" + carouselId + " .slick-nav",
			prevArrow: '<div class="slick-prev-wrapper"><span class="slick-prev"></span></div>',
			nextArrow: '<div class="slick-next-wrapper"><span class="slick-next"></span></div>',
			customPaging: function(slider, i) {
				return '';
			}
		});
	});	
	/*-----------------------------------------------------------------------------------*/
    /*	SLIDER REVOLUTION
    /*-----------------------------------------------------------------------------------*/
    var revapi1 = jQuery('#slider').show().revolution(
    {
        sliderType: "standard",
        sliderLayout: "fullscreen",
        fullScreenOffsetContainer: ".navbar:not(.fixed)",
        spinner: "spinner",
        delay: 9000,
        shadow: 0,
        gridwidth:[1170, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true
            },
            touch: { 
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true		 
		    },
            bullets: {
                enable: true,
                hide_onleave: true,
                hide_onmobile: true,
                h_align: "center",
                v_align: "bottom",
                space: 8,
                h_offset: 0,
                v_offset: 20,
                tmp: ''
            }
        }   
    });
    var api1 = revapi1.on('revolution.slide.onchange', function(e, data) { 
		api1.removeClass('rs-nav-light rs-nav-dark').addClass( 
			'rs-nav-' + api1.find('li').eq(data.slideIndex - 1).attr('data-nav-color') 
		); 
	});
	var revapi2 = jQuery('#slider2').show().revolution(
    {
        sliderType: "standard",
        sliderLayout: 'fullwidth',
        spinner: "spinner",
        delay: 9000,
        shadow: 0,
        gridwidth:[1170, 1024, 778, 480],
		gridheight:[600, 525, 400, 400],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true
            },
            touch: { 
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true		 
		    },
            bullets: {
                enable: true,
                hide_onleave: true,
                h_align: "center",
                v_align: "bottom",
                space: 8,
                h_offset: 0,
                v_offset: 20,
                tmp: ''
            }
        }   
    });
    var api2 = revapi2.on('revolution.slide.onchange', function(e, data) { 
		api2.removeClass('rs-nav-light rs-nav-dark').addClass( 
			'rs-nav-' + api2.find('li').eq(data.slideIndex - 1).attr('data-nav-color') 
		); 
	});
	var revapi3 = jQuery('#slider3').show().revolution(
    {
        sliderType: "standard",
        sliderLayout: "auto",
        spinner: "spinner",
        delay: 9000,
        shadow: 0,
        gridwidth:[1170, 1024, 778, 480],
		gridheight:[600, 525, 400, 400],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true
            },
            touch: { 
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true		 
		    },
            bullets: {
                enable: true,
                hide_onleave: true,
                h_align: "center",
                v_align: "bottom",
                space: 8,
                h_offset: 0,
                v_offset: 20,
                tmp: ''
            }
        }   
    });
    var api3 = revapi3.on('revolution.slide.onchange', function(e, data) { 
		api3.removeClass('rs-nav-light rs-nav-dark').addClass( 
			'rs-nav-' + api3.find('li').eq(data.slideIndex - 1).attr('data-nav-color') 
		); 
	});
	var revapi4 = jQuery('#slider4').show().revolution(
    {
        sliderType: "standard",
        sliderLayout: 'fullwidth',
        spinner: "spinner",
        delay: 9000,
        shadow: 0,
        gridwidth:[1170, 1024, 778, 480],
		gridheight:[750, 525, 400, 400],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: false
            },
            touch: { 
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true		 
		    },
            bullets: {
                enable: false
            }
        }   
    });
    var revapi5 = jQuery('#slider5').show().revolution(
    {
        sliderType: "standard",
        sliderLayout: "fullscreen",
        fullScreenOffsetContainer: ".navbar:not(.fixed)",
        spinner: "spinner",
        delay: 9000,
        shadow: 0,
        gridwidth:[1170, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: false
            },
            touch: { 
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true		 
		    },
            bullets: {
                enable: false
            }
        }    
    });
    var api5 = revapi5.on('revolution.slide.onchange', function(e, data) { 
		api5.removeClass('rs-nav-light rs-nav-dark').addClass( 
			'rs-nav-' + api5.find('li').eq(data.slideIndex - 1).attr('data-nav-color') 
		); 
	});
	var revapi6 = jQuery('#slider6').show().revolution(
    {
        sliderType: "standard",
        sliderLayout: "auto",
        spinner: "spinner",
        delay: 9000,
        shadow: 0,
        gridwidth:[1170, 1024, 778, 480],
		gridheight:[600, 525, 400, 400],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: false
            },
            touch: { 
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true		 
		    },
            bullets: {
                enable: false
            }
        }   
    });
    var api6 = revapi6.on('revolution.slide.onchange', function(e, data) { 
		api6.removeClass('rs-nav-light rs-nav-dark').addClass( 
			'rs-nav-' + api6.find('li').eq(data.slideIndex - 1).attr('data-nav-color') 
		); 
	});
	var revapi7 = jQuery('#slider7').show().revolution(
    {
        sliderType: "standard",
        sliderLayout: "fullscreen",
        spinner: "spinner",
        delay: 9000,
        shadow: 0,
        gridwidth:[1170, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: false
            },
            touch: { 
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true		 
		    },
            bullets: {
                enable: false
            }
        }    
    });
    var api7 = revapi7.on('revolution.slide.onchange', function(e, data) { 
		api7.removeClass('rs-nav-light rs-nav-dark').addClass( 
			'rs-nav-' + api7.find('li').eq(data.slideIndex - 1).attr('data-nav-color') 
		); 
	});
	var revapi8 = jQuery('#slider8').show().revolution(
    {
        sliderType: "standard",
        sliderLayout: "fullscreen",
        spinner: "spinner",
        delay: 9000,
        shadow: 0,
        gridwidth:[1170, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true
            },
            touch: { 
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true		 
		    },
            bullets: {
                enable: true,
                hide_onleave: true,
                hide_onmobile: true,
                h_align: "center",
                v_align: "bottom",
                space: 8,
                h_offset: 0,
                v_offset: 20,
                tmp: ''
            }
        }   
    });
    var api8 = revapi8.on('revolution.slide.onchange', function(e, data) { 
		api8.removeClass('rs-nav-light rs-nav-dark').addClass( 
			'rs-nav-' + api1.find('li').eq(data.slideIndex - 1).attr('data-nav-color') 
		); 
	});
	var revapi9 = jQuery('#slider9').show().revolution(
    {
        sliderType: "standard",
        sliderLayout: 'fullwidth',
        spinner: "spinner",
        delay: 9000,
        shadow: 0,
        gridwidth:[1170, 1024, 778, 480],
		gridheight:[700, 525, 400, 400],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: false
            },
            touch: { 
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true		 
		    },
            bullets: {
                enable: false
            }
        }   
    });
	/*-----------------------------------------------------------------------------------*/
    /*	AOS
    /*-----------------------------------------------------------------------------------*/
	AOS.init({
        easing: 'ease-in-out-sine',
        duration: 1000,
        once: true
      });
	/*-----------------------------------------------------------------------------------*/
    /*	COCOEN
    /*-----------------------------------------------------------------------------------*/
	$('.cocoen').cocoen();
	/*-----------------------------------------------------------------------------------*/
    /*	PLYR
    /*-----------------------------------------------------------------------------------*/
	plyr.setup('.js-player');
	/*-----------------------------------------------------------------------------------*/
    /*	ACCORDION / COLLAPSE
    /*-----------------------------------------------------------------------------------*/
    $('.panel-group').find('.panel:has(".in")').addClass('panel-active');
    $('.panel-group').on('shown.bs.collapse', function(e) {
        $(e.target).closest('.panel').addClass(' panel-active');
    }).on('hidden.bs.collapse', function(e) {
        $(e.target).closest('.panel').removeClass(' panel-active');
    });
	/*-----------------------------------------------------------------------------------*/
    /*	IMAGE PARALLAX
	/*-----------------------------------------------------------------------------------*/
    parallaxInit('.parallax');
    /*-----------------------------------------------------------------------------------*/
    /*	VIDEO PARALLAX
    /*-----------------------------------------------------------------------------------*/
    $('.video-parallax video').backgroundVideo({
        $outerWrap: $('.video-parallax'),
        pauseVideoOnViewLoss: false,
        parallaxOptions: {
            effect: 3
        }
    });
    /*-----------------------------------------------------------------------------------*/
    /*	PATTERN WRAPPER
    /*-----------------------------------------------------------------------------------*/
    $(".pattern-wrapper").css('background-image', function () {
	    var bg = ('url(' + $(this).data("image-src") + ')');
	    return bg;
	});
    /*-----------------------------------------------------------------------------------*/
    /*	COUNTDOWN
	/*-----------------------------------------------------------------------------------*/
	$(".countdown").countdown();
    /*-----------------------------------------------------------------------------------*/
    /*	COUNTER
    /*-----------------------------------------------------------------------------------*/
    $('.counter .value').counterUp({
        delay: 50,
        time: 1000
    });
    /*-----------------------------------------------------------------------------------*/
    /*	PROGRESSBAR
	/*-----------------------------------------------------------------------------------*/
    var $pcircle = $('.progressbar.full-circle');
    var $psemi = $('.progressbar.semi-circle');
    var $pline = $('.progressbar.line');
    
    $pcircle.each(function(i) {
        var circle = new ProgressBar.Circle(this, {
            strokeWidth: 4,
            trailWidth: 4,
            duration: 2000,
            easing: 'easeInOut',
            step: function(state, circle, attachment) {
                circle.setText(Math.round(circle.value() * 100));
            }
        });
        
        var value = ($(this).attr('data-value') / 100);
        $pcircle.waypoint(function() {
            circle.animate(value);
        }, {
            offset: "100%"
        })
    });
    $psemi.each(function(i) {
        var semi = new ProgressBar.SemiCircle(this, {
            strokeWidth: 4,
            trailWidth: 4,
            duration: 2000,
            easing: 'easeInOut',
            step: function(state, circle, attachment) {
                circle.setText(Math.round(circle.value() * 100));
            }
        });
        
        var value = ($(this).attr('data-value') / 100);
        $psemi.waypoint(function() {
            semi.animate(value);
        }, {
            offset: "100%"
        })
    });
    $pline.each(function(i) {
        var line = new ProgressBar.Line(this, {
            strokeWidth: 3,
            trailWidth: 3,
            duration: 3000,
            easing: 'easeInOut',
            text: {
                style: {
                    color: 'inherit',
                    position: 'absolute',
                    right: '0',
                    top: '-30px',
                    padding: 0,
                    margin: 0,
                    transform: null
                },
                autoStyleContainer: false
            },
            step: function(state, line, attachment) {
                line.setText(Math.round(line.value() * 100) + ' %');
            }
        });
        var value = ($(this).attr('data-value') / 100);
        $pline.waypoint(function() {
            line.animate(value);
        }, {
            offset: "100%"
        })
    });
    /*-----------------------------------------------------------------------------------*/
    /*	CIRCLE INFO BOX
    /*-----------------------------------------------------------------------------------*/
    $("#dial1").s8CircleInfoBox({
	    autoSlide: false,
	    action: "click"
	});
	$("#dial2").s8CircleInfoBox({
	    autoSlide: false,
	    action: "click"
	});
	/*-----------------------------------------------------------------------------------*/
    /*	IMAGE ICON HOVER
    /*-----------------------------------------------------------------------------------*/
    $('.overlay').prepend('<span class="bg"></span>');
    /*-----------------------------------------------------------------------------------*/
    /*	TOOLTIP
    /*-----------------------------------------------------------------------------------*/
    $('.has-tooltip').tooltip();
    $('.has-popover').popover({
	    trigger: 'focus'
    });
    /*-----------------------------------------------------------------------------------*/
    /*	VANILLA
    /*-----------------------------------------------------------------------------------*/
    var myForm;
    myForm = new VanillaForm($("form.vanilla-form"));
    /*-----------------------------------------------------------------------------------*/
	/*	INCREMENT
	/*-----------------------------------------------------------------------------------*/
    $('.qtyplus').on('click', function(e){
        e.preventDefault();
        var fieldName = $(this).attr('field');
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        if (!isNaN(currentVal)) {
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            $('input[name='+fieldName+']').val(0);
        }
    });
    $(".qtyminus").on('click', function(e) {
        e.preventDefault();
        var fieldName = $(this).attr('field');
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            $('input[name='+fieldName+']').val(0);
        }
    }); 
    /*-----------------------------------------------------------------------------------*/
    /*	PRETTIFY
    /*-----------------------------------------------------------------------------------*/
    window.prettyPrint && prettyPrint();
    /*-----------------------------------------------------------------------------------*/
    /*	INSTAGRAM
    /*-----------------------------------------------------------------------------------*/
    var instagramFeed = new Instafeed({
        target: 'instafeed-widget',
        get: 'user',
        limit: 6,
        userId: 1215763826,
        accessToken: '1215763826.f1627ea.512d3a9b334a4c91ac2e83d4f4d9b291',
        resolution: 'low_resolution',
        template: '<div class="item col-xs-4 col-sm-6 col-md-4"><figure class="overlay overlay1"><a href="{{link}}" target="_blank"></a><img src="{{image}}" /><figcaption><i class="et-link from-top icon-xs"></i></figcaption></figure></div>',
        after: function() {
            $('#instafeed-widget figure.overlay').prepend('<span class="bg"></span>');
        }
    });
    $('#instafeed-widget').each(function() {
        instagramFeed.run();
    });
    var instagramFeed2 = new Instafeed({
        target: 'instafeed',
        get: 'user',
        limit: 6,
        userId: 1215763826,
        accessToken: '1215763826.f1627ea.512d3a9b334a4c91ac2e83d4f4d9b291',
        resolution: 'low_resolution',
        template: '<div class="item col-xs-6 col-sm-4 col-md-2"><figure class="overlay overlay1"><a href="{{link}}" target="_blank"></a><img src="{{image}}" /><figcaption><i class="et-link from-top icon-xs"></i></figcaption></figure></div>',
        after: function() {
            $('#instafeed figure.overlay').prepend('<span class="bg"></span>');
        }
    });
    $('#instafeed').each(function() {
        instagramFeed2.run();
    });
    /*-----------------------------------------------------------------------------------*/
	/*	FLICKR
	/*-----------------------------------------------------------------------------------*/
    $('.flickr-feed').dcFlickr({
        limit: 6,
        q: {
            id: '51789731@N07',
            lang: 'en-us',
            format: 'json',
            jsoncallback: '?'
        },
			onLoad : function() {
				$('.flickr-feed figure.overlay').prepend('<span class="bg"></span>');
			}
    });
	/*-----------------------------------------------------------------------------------*/
	/*	DRIBBBLE
	/*-----------------------------------------------------------------------------------*/
    jribbble.shots({token: "a78e71084428335514da5e9880089715c8890217e0a65cd44e2e3512d18363d7", per_page: 6}, function(shots) {
	  document.querySelector(".dribbble-feed").innerHTML = shots.reduce(function(html, shot) {
	    return html + '<div class="item col-xs-6 col-sm-4 col-md-2"><figure class="overlay overlay1"><a href="' + shot.html_url + '" target="_blank"></a><img src="' + shot.images.normal + '"><figcaption><i class="et-link from-top icon-xs"></i></figcaption></figure></div>';
	  }, "");
	  $('.dribbble-feed figure.overlay').prepend('<span class="bg"></span>');
	});
    /*-----------------------------------------------------------------------------------*/
    /*	LIGHTGALLERY
    /*-----------------------------------------------------------------------------------*/
    var $lg = $('.light-gallery');
        $lg.lightGallery({
            thumbnail: false,
            selector: 'a',
            download: false,
            autoplayControls: false,
            zoom: false,
            fullScreen: true,
            videoMaxWidth: '1000px',
            loop: false,
            hash: true,
            mousewheel: true,
            videojs: true
        });
    /*-----------------------------------------------------------------------------------*/
    /*	ISOTOPE BLOG GRID
	/*-----------------------------------------------------------------------------------*/
    var $bloggrid = $('.blog .isotope');
    $bloggrid.isotope({
        itemSelector: '.item',
        percentPosition: true,
        transitionDuration: '0.7s',
        masonry: {
            columnWidth: $bloggrid.width() / 12
        },
        layoutMode: 'masonry'
    });
    $(window).resize(function() {
        $bloggrid.isotope({
            masonry: {
                columnWidth: $bloggrid.width() / 12
            }
        });
    });
    $(window).on("load", function() {
		$bloggrid.isotope({
            masonry: {
                columnWidth: $bloggrid.width() / 12
            }
        });
	});
    $bloggrid.imagesLoaded(function() {
        $bloggrid.isotope('layout');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	ISOTOPE PORTFOLIO GRID
    /*-----------------------------------------------------------------------------------*/
	function enableIsotope() {
	  var $portfoliogrid = $('.portfolio .isotope');
	  $('.portfolio .isotope-filter').each( function( i, buttonGroup ) {
	    var $buttonGroup = $( buttonGroup );
	
	    var grid = $buttonGroup.data('target');
	    $(grid).imagesLoaded( function() {
	      $(grid).isotope({
	        itemSelector: '.item',
	        percentPosition: true,
	        transitionDuration: '0.7s',
	        masonry: {
	            columnWidth: $portfoliogrid.width() / 12
	        },
	        layoutMode: 'masonry'
	      })
	    });
	    $(window).resize(function() {
	        $portfoliogrid.isotope({
	            masonry: {
	                columnWidth: $portfoliogrid.width() / 12
	            }
	        });
	    });
	    $(window).on("load", function() {
			$portfoliogrid.isotope({
	            masonry: {
	                columnWidth: $portfoliogrid.width() / 12
	            }
	        });
		});
	    $buttonGroup.on( 'click', '.button', function() {
	      var $this = $( this );
	      var filterValue = $this.attr('data-filter');
	      $(grid).isotope({ filter: filterValue })
	      $buttonGroup.find('.active').removeClass('active');
	      $this.addClass('active');
	    });
	  });
	
	};
	enableIsotope();
    /*-----------------------------------------------------------------------------------*/
    /*	FOTORAMA
	/*-----------------------------------------------------------------------------------*/
    $('.fotorama').fotorama({
        spinner: {
            color: 'rgba(0, 0, 0, 0)'
        }
    });
    $('.fotorama-item').append(' ');
    /*-----------------------------------------------------------------------------------*/
    /*	PAGE LOADING
    /*-----------------------------------------------------------------------------------*/
	$('.page-loading').delay(350).fadeOut('slow');
    $('.page-loading .status').fadeOut('slow');    
    /*-----------------------------------------------------------------------------------*/
    /*	GO TO TOP
    /*-----------------------------------------------------------------------------------*/
    $.scrollUp({
        scrollName: 'scrollUp',
        // Element ID
        scrollDistance: 300,
        // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',
        // 'top' or 'bottom'
        scrollSpeed: 300,
        // Speed back to top (ms)
        easingType: 'linear',
        // Scroll to top easing (see http://easings.net/)
        animation: 'fade',
        // Fade, slide, none
        animationInSpeed: 200,
        // Animation in speed (ms)
        animationOutSpeed: 200,
        // Animation out speed (ms)
        scrollText: '<span class="btn btn-square btn-rounded btn-icon"><i class="et-chevron-small-up"></i></span>',
        // Text for element, can contain HTML
        scrollTitle: false,
        // Set a custom <a> title if required. Defaults to scrollText
        scrollImg: false,
        // Set true to use image
        activeOverlay: false,
        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 1001 // Z-Index for the overlay
    });
    /*-----------------------------------------------------------------------------------*/
    /*	COLLAGEPLUS
    /*-----------------------------------------------------------------------------------*/
    collage();
    function collage() {
        $('#collage-large').removeWhitespace().collagePlus({
            'fadeSpeed': 5000,
            'targetHeight': 350,
            'direction': 'vertical',
            'allowPartialLastRow': true
        });
        $('#collage-medium').removeWhitespace().collagePlus({
            'fadeSpeed': 5000,
            'targetHeight': 300,
            'direction': 'vertical',
            'allowPartialLastRow': true
        });
    };
    var resizeTimer = null;
    $(window).on('resize', function() {
        $('.collage .collage-image-wrapper').css("opacity", 0);
        if (resizeTimer) clearTimeout(resizeTimer);
        resizeTimer = setTimeout(collage, 200);
    }); 
    /*-----------------------------------------------------------------------------------*/
    /*	ONEPAGE HEADER OFFSET
    /*-----------------------------------------------------------------------------------*/	
    var header_height = $('.navbar:not(.banner--clone)').outerHeight();
    var shrinked_header_height = 64;
    var firstStyle = {
        'padding-top': '' + shrinked_header_height + 'px',
        'margin-top': '-' + shrinked_header_height + 'px'
    };
    $('.onepage section').css(firstStyle);
    var secondStyle = {
        'padding-top': '' + header_height + 'px',
        'margin-top': '-' + header_height + 'px'
    };
    $('.onepage section:first-of-type').css(secondStyle);
	/*-----------------------------------------------------------------------------------*/
    /*	ONEPAGE NAV LINKS
    /*-----------------------------------------------------------------------------------*/	
	var empty_a = $('.onepage .navbar ul.navbar-nav a[href="#"]');	
	empty_a.on('click', function(e) {
	    e.preventDefault();
	});
    $('.onepage .navbar .nav li a').on('click', function() {
        $('.navbar .navbar-collapse.in').collapse('hide');
        $('.nav-bars').removeClass('is-active');
    });
    /*-----------------------------------------------------------------------------------*/
	/*	ONEPAGE SMOOTH SCROLL
	/*-----------------------------------------------------------------------------------*/	
	$(function() {
	  setTimeout(function() {
	    if (location.hash) {
	      window.scrollTo(0, 0);
	      var target = location.hash.split('#');
	      smoothScrollTo($('#'+target[1]));
	    }
	  }, 1);  
	  $('a.scroll[href*=#]:not([href=#])').on('click', function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      smoothScrollTo($(this.hash));
	      return false;
	    }
	  });  
	  function smoothScrollTo(target) {
	    var target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    
	    if (target.length) {
	      $('html,body').animate({
	        scrollTop: target.offset().top
	      }, 1500, 'easeInOutExpo');
	    }
	  }
	});  
});