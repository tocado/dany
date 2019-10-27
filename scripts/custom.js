$(window).on('load',function(){
	setTimeout(function(){$('#page-build').css('display','block');},25)
	setTimeout(function(){$("#preloader").addClass('hide-preloader');},450);// will fade out the white DIV that covers the website.
});
var preloader_on = function () {
    setTimeout(function(){$('#page-build').css('display','none');},25)
    setTimeout(function(){$("#preloader").removeClass('hide-preloader');},450);
};

var preloader_off = function () {
    setTimeout(function(){$('#page-build').css('display','block');},25)
    setTimeout(function(){$("#preloader").addClass('hide-preloader');},450);
};
var	cerrarMenu = function () {
	$('.menu-hider').removeClass('active-menu-hider');
	$('.menu').removeClass('active-menu-box-full active-menu-full-top active-menu-full-bottom active-menu-box-top active-menu-box-bottom active-menu-box-modal active-menu-full active-sidebar-left-over active-sidebar-left-push active-sidebar-right-push active-sidebar-left-parallax active-sidebar-right-parallax active-sidebar-right-over');
	$('.page-content, .header').removeClass('header-zindex active-body-left-push active-body-right-push active-body-left-parallax active-body-right-parallax')
	$('.menu').css({'margin-top':''})
    $('.page-content').css('transform','');
    $('.header').css('transform','');
    return false;
};
$(document).ready(function(){
    'use strict'
	
    function init_template(){
		var	cerrarMenu = function () {
			$('.menu-hider').removeClass('active-menu-hider');
			$('.menu').removeClass('active-menu-box-full active-menu-full-top active-menu-full-bottom active-menu-box-top active-menu-box-bottom active-menu-box-modal active-menu-full active-sidebar-left-over active-sidebar-left-push active-sidebar-right-push active-sidebar-left-parallax active-sidebar-right-parallax active-sidebar-right-over');
			$('.page-content, .header').removeClass('header-zindex active-body-left-push active-body-right-push active-body-left-parallax active-body-right-parallax')
			$('.menu').css({'margin-top':''})
		    $('.page-content').css('transform','');
		    $('.header').css('transform','');
		    return false;
		};
		//Demo Purposes.
		$('a').on('click', function(){var attrs = $(this).attr('href');	if(attrs === '#'){return false;}});
        var democs = 'gradient-body-1 gradient-body-2 gradient-body-3 gradient-body-4 gradient-body-5 gradient-body-6 gradient-body-7 gradient-body-8 gradient-body-9';
        $('.democ-1').on('click', function(){$('.page-bg, .menu-bg').removeClass(democs).addClass('gradient-body-1');});      
        $('.democ-2').on('click', function(){$('.page-bg, .menu-bg').removeClass(democs).addClass('gradient-body-2');});      
        $('.democ-3').on('click', function(){$('.page-bg, .menu-bg').removeClass(democs).addClass('gradient-body-3');});      
        $('.democ-4').on('click', function(){$('.page-bg, .menu-bg').removeClass(democs).addClass('gradient-body-4');});      
        $('.democ-5').on('click', function(){$('.page-bg, .menu-bg').removeClass(democs).addClass('gradient-body-5');});      
        $('.democ-6').on('click', function(){$('.page-bg, .menu-bg').removeClass(democs).addClass('gradient-body-6');});      
        $('.democ-7').on('click', function(){$('.page-bg, .menu-bg').removeClass(democs).addClass('gradient-body-7');});      
        $('.democ-8').on('click', function(){$('.page-bg, .menu-bg').removeClass(democs).addClass('gradient-body-8');});      
        $('.democ-9').on('click', function(){$('.page-bg, .menu-bg').removeClass(democs).addClass('gradient-body-9');});      
        
        //FastClick
        $(function() {FastClick.attach(document.body);});

        //Preload Image
        $(function() {$(".preload-image").lazyload({threshold : 500});});

		//Copyright Year
        var dteNow = new Date();
        var intYear = dteNow.getFullYear();
        $('#copyright-year, .copyright-year').html(intYear);

		//Back Button
		$('.back-button').on('click', function(){
			$('#page-transitions').addClass('back-button-clicked');
			$('#page-transitions').removeClass('back-button-not-clicked');
			window.history.go(-1);
			return false;
		});

		//Menu Settings
		setTimeout(function(){$('.menu').show(0);},300);
        if(!$('.menu-hider').length){
            $('body').append('<div class="menu-hider"></div>');
        };  
        if(!$('.page-bg').length){
            $('body').prepend('<div class="page-bg gradient-body-1"></div>');
        };
        
		$('.menu-box-bottom').each(function(){
			var menuBoxID = $(this).attr('id')
			var menuBoxHeight = $('[data-menu='+menuBoxID+']').data('menu-height');
			$(this).css('bottom',(menuBoxHeight+50)*(-1));
			$(this).css('height',menuBoxHeight);
		});

		$('.menu-box-top').each(function(){
			var menuBoxID = $(this).attr('id')
			var menuBoxHeight = $(this).data('menu-height');
			$(this).css('height',menuBoxHeight);
			$(this).css('-webkit-transform','translate(0%, '+(menuBoxHeight*(-1))+'px)');
		});

		$('.menu-box-bottom').each(function(){
			var menuBoxID = $(this).attr('id')
			var menuBoxHeight = $(this).data('menu-height');
			$(this).css('height',menuBoxHeight);
			$(this).css('-webkit-transform','translate(-50%, '+(menuBoxHeight)+'px)');
		});
        
        $('.submenu').prepend('<div class="submenu-line"></div>');
        $('.menu-item, .submenu a').append('<i class="fa fa-angle-right"></i>');
        if($('.menu-item span').length ){
            $('.menu-item span').parent().find('.fa-angle-right').hide();
            $('.menu-item span').parent().addClass('remove-dot');
        }
            
		$('[data-menu]').on('click',function(){
			$('.menu').removeClass('active-menu-box-top active-menu-box-bottom active-menu-box-modal active-menu-full active-sidebar-left-over active-sidebar-left-push active-sidebar-right-push active-sidebar-left-parallax active-sidebar-right-parallax active-sidebar-right-over');
			$('.page-content, .header').removeClass('active-body-left-push active-body-right-push active-body-left-parallax active-body-right-parallax')
			$('.menu').css({'margin-top':''})

			$('.menu-hider').addClass('active-menu-hider');
			var menuType = $(this).data('menu-type');
			var menuID = $(this).data('menu');
			var menuSize = $('#'+menuID).data('menu-height');
            var bodyEffect = ($('#'+menuID).data('menu-height')) / 6;

			if(menuType === 'menu-full-bottom'){
				$('#'+menuID).toggleClass('active-menu-full-bottom');
				if(!$('#'+menuID).hasClass('active-menu-full-bottom')){
					$('.menu-hider').removeClass('active-menu-hider');
				}
			}
			if(menuType === 'menu-full-top'){
				$('#'+menuID).toggleClass('active-menu-full-top');
				if(!$('#'+menuID).hasClass('active-menu-full-top')){
					$('.menu-hider').removeClass('active-menu-hider');
				}
			}
			if(menuType === 'menu-box-modal'){
				$('#'+menuID).css({"height": menuSize});
				$('#'+menuID).css({"margin-top": (menuSize/2)*(-1)});
				$('#'+menuID).toggleClass('active-menu-box-modal');
			}	
            if(menuType === 'menu-box-full'){
				$('#'+menuID).toggleClass('active-menu-box-full');
			}
			if(menuType === 'menu-box-bottom'){
                $('#'+menuID).toggleClass('active-menu-box-bottom');
                $('.page-content').css('transform','translateY('+bodyEffect*(-1)+'px)');
                $('.header').css('transform','translateY('+(-90)+'px)');  
            }
			if(menuType === 'menu-box-top'){
                $('#'+menuID).toggleClass('active-menu-box-top');
                $('.page-content').css('transform','translateY('+bodyEffect+'px)');                
                $('.header').css('transform','translateY('+(-90)+'px)');                
            }
			if(menuType === 'menu-sidebar-left-over'){$('#'+menuID).toggleClass('active-sidebar-left-over').addClass('menu-sidebar-shadow');}
			if(menuType === 'menu-sidebar-left-push'){$('#'+menuID).toggleClass('active-sidebar-left-push'); $('.page-content, .header').toggleClass('active-body-left-push');}
			if(menuType === 'menu-sidebar-left-parallax'){$('#'+menuID).toggleClass('active-sidebar-left-parallax').addClass('menu-sidebar-shadow'); $('.page-content, .header').toggleClass('active-body-left-parallax');}
			if(menuType === 'menu-sidebar-right-parallax'){$('#'+menuID).toggleClass('active-sidebar-right-parallax').addClass('menu-sidebar-shadow'); $('.page-content, .header').toggleClass('active-body-right-parallax');}
			if(menuType === 'menu-sidebar-right-over'){$('#'+menuID).toggleClass('active-sidebar-right-over').addClass('menu-sidebar-shadow');}
			if(menuType === 'menu-sidebar-right-push'){$('#'+menuID).toggleClass('active-sidebar-right-push');$('.page-content, .header').toggleClass('active-body-right-push');}
            return false;
        });

		$('.menu-hider, .close-menu, .menu-bar').on('click',function(){
			return cerrarMenu();
		});

        $('.menu-hider').removeClass('active-menu-hider');

		$('a[data-submenu]').each(function(){
			var submenuTarget = $(this).data('submenu');
			var submenuCount = $('#'+submenuTarget+ '>a').length;
			$(this).find('span').html(submenuCount)
		});

		$('a[data-submenu]').on('click',function(){
			$(this).toggleClass('active-menu');
			var submenuID = $(this).data('submenu');
			var submenuItems = $('#'+submenuID+ '>a').length;
			var submenuHeight = $('#'+submenuID).height();
			if($('#'+submenuID).height() == 0){
				$('#'+submenuID).css({'height': (submenuItems*50)});
			} else {
				$('#'+submenuID).css({'height': '0px' });
			}
		});
        
        setTimeout(function(){
            if($('a[data-submenu]').hasClass('active-menu')){
                var submenuID = $('.active-menu').data('submenu');
                var submenuItems = $('#'+submenuID+ '>a').length;
                var submenuHeight = $('#'+submenuID).height();
                if($('#'+submenuID).height() == 0){
                    $('#'+submenuID).css({'height': (submenuItems*50)});
                } else {
                    $('#'+submenuID).css({'height': '0px' });
                }
            };
        },500);

        //Back to top Badge
        $('.back-to-top-badge, .back-to-top').on( "click", function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, universalTransitionTime);
			return false;
        });

		function header_card(){
			if ($(".header-card").length){
				$('.header').addClass('hide-header-card');
			} else {
				$('.header').removeClass('hide-header-card');
			}
		}
		header_card();

		//Accordion
		$('a[data-accordion]').on( "click", function(){
			console.log('test');
			var accordion_number = $(this).data('accordion');
			$('.accordion-content').slideUp(200);
			$('.accordion i').removeClass('rotate-180');
			if($('#'+accordion_number).is(":visible")){
				$('#'+accordion_number).slideUp(200);
				$(this).find('i:last-child').removeClass('rotate-180');
			}else{
				$('#'+accordion_number).slideDown(200);
				$(this).find('i:last-child').addClass('rotate-180');
  			}
		});

		//Mobile Ads
		setTimeout(function(){
			$('.ad-300x50-fixed').fadeIn(350);
		},2500);
		$('.close-ad-button').on('click', function(){
			$('.ad-300x50-fixed').fadeOut(250);
		});

        //Show Back To Home When Scrolling
        $(window).on('scroll', function () {
            var total_scroll_height = document.body.scrollHeight
            var inside_header = ($(this).scrollTop() <= 150);
            var passed_header = ($(this).scrollTop() >= 0); //250
            var passed_header2 = ($(this).scrollTop() >= 150); //250
            var footer_reached = ($(this).scrollTop() >= (total_scroll_height - ($(window).height() + 600 )));

            if (inside_header === true) {
				$('.store-product-button-fixed').removeClass('show-store-product-button');
				$('.back-to-top-badge').removeClass('back-to-top-badge-visible');
				header_card();
			}
			else if(passed_header === true){
				$('.store-product-button-fixed').addClass('show-store-product-button');
				$('.back-to-top-badge').addClass('back-to-top-badge-visible');
            }
            if (footer_reached == true){
				$('.store-product-button-fixed').removeClass('show-store-product-button');
				$('.back-to-top-badge').removeClass('back-to-top-badge-visible');
			}
        });

		//Owl Carousel Sliders
		setTimeout(function(){
			$('.home-thumb-slider, .single-slider').css({'padding':'0px 15px'});
			$('.home-thumb-slider').owlCarousel({lazyLoad:true, center: false, items:2, loop:false,	startPosition:0, margin:20, responsive:{600:{items:4}}});
			$('.single-slider').owlCarousel({loop:true, items:1, center:true, margin:50, nav:false, lazyload:true, autoHeight:true, lazyLoad:true, items:1, autoplay: false, autoplayTimeout:3500});
			$('.quote-slider').owlCarousel({loop:true, items:1, margin:20, nav:false, autoHeight:true, lazyLoad:true, items:1, autoplay: false, autoplayTimeout:3500});
			$('.single-slider-no-timeout').owlCarousel({loop:true, margin:0, nav:false, dots:false, items:1, autoHeight:true});
			$('.single-store-slider').owlCarousel({loop:false, margin:10, nav:false, autoHeight:true, lazyLoad:true, items:1, autoplay: true, autoplayTimeout:3500});
			$('.double-slider').owlCarousel({loop:true, margin:20, nav:false, autoHeight:true, lazyLoad:true, items:2, autoplay: true, autoplayTimeout:3500});
			$('.thumb-slider').owlCarousel({loop:true, margin:10, nav:false, autoHeight:true, lazyLoad:true, items:3, autoplay: true, autoplayTimeout:3500});
			$('.cover-slider').owlCarousel({loop:true, nav:false, lazyLoad:true, items:1, autoplay: true, autoplayTimeout:3500});
			$('.cover-walkthrough-slider').owlCarousel({loop:false, nav:false, lazyLoad:true, items:1, autoplay: false, autoplayTimeout:3500});
			$('.cover-slider-full').owlCarousel({loop:false, nav:false, dots:false, mouseDrag:false, touchDrag:false, pullDrag:false, lazyLoad:true, items:1, autoplay: true, autoplayTimeout:3500});
			$('.timeline-slider').owlCarousel({loop:true, lazyLoad:true, nav:false, items:1, autoplay: true, autoplayTimeout:3500});
			$('.next-slide, .next-slide-arrow, .next-slide-text, .next-slide-custom').on('click',function(){$(this).parent().find('.owl-carousel').trigger('next.owl.carousel');});
			$('.prev-slide, .prev-slide-arrow, .prev-slide-text, .prev-slide-custom').on('click',function(){$(this).parent().find('.owl-carousel').trigger('prev.owl.carousel');});
		},100);

		//Coverpage
		setTimeout(function(){resize_coverpage();},301);
		$(window).on('resize', function(){resize_coverpage();})

		function resize_coverpage(){
			var cover_height = $(window).height();
			var cover_width = $(window).width();
			if($('.page-content-full').length > 0){
				var header_height = "0";
				$('.page-content, #page-transitions').css({"min-height": cover_height});
			} else{
				var header_height = "0";
				$('.page-content, #page-transitions').css({"min-height": cover_height});
			}
			$('.cover-item').css({"height":(cover_height - header_height), "width":cover_width})
			$('.cover-item-full').css({"margin-top": header_height * (-1), "height":cover_height, "width":cover_width})
			$('.coverpage-full .cover-item').css({"height":cover_height, "width":cover_width});
			$('.coverpage-full').css({"margin-top": header_height * (-1)});

			$('.cover-content-center').each(function(){
				var cover_content_center_height = $(this).innerHeight();
				var cover_content_center_width = $(this).innerWidth();
				$(this).css({"margin-left": (cover_content_center_width/2)*(-1), "margin-top": ((cover_content_center_height/2)*(-1)) })
			});
			$('.cover-content-center-full').each(function(){
				var cover_content_center_height = $(this).innerHeight();
				$(this).css({"margin-top": (cover_content_center_height/2)*(-1)})
			});
		}

		//Galleries
		baguetteBox.run('.gallery', {});
		baguetteBox.run('.profile-gallery', {});

		if($('.gallery-filter').length > 0){$('.gallery-filter').filterizr();}
		$('.gallery-filter-controls li').on('click',function(){
			$('.gallery-filter-controls li').removeClass('gallery-filter-active color-blue-dark');
			$(this).addClass('gallery-filter-active color-blue-dark');
		})

		//Contact Form
        var formSubmitted = "false";
        jQuery(document).ready(function(e) {
            function t(t, n) {
                formSubmitted = "true";
                var r = e("#" + t).serialize();
                e.post(e("#" + t).attr("action"), r, function(n) {
                    e("#" + t).hide();
                    e("#formSuccessMessageWrap").fadeIn(500)
                })
            }

            function n(n, r) {
                e(".formValidationError").hide();
                e(".fieldHasError").removeClass("fieldHasError");
                e("#" + n + " .requiredField").each(function(i) {
                    if (e(this).val() == "" || e(this).val() == e(this).attr("data-dummy")) {
                        e(this).val(e(this).attr("data-dummy"));
                        e(this).focus();
                        e(this).addClass("fieldHasError");
                        e("#" + e(this).attr("id") + "Error").fadeIn(300);
                        return false
                    }
                    if (e(this).hasClass("requiredEmailField")) {
                        var s = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                        var o = "#" + e(this).attr("id");
                        if (!s.test(e(o).val())) {
                            e(o).focus();
                            e(o).addClass("fieldHasError");
                            e(o + "Error2").fadeIn(300);
                            return false
                        }
                    }
                    if (formSubmitted == "false" && i == e("#" + n + " .requiredField").length - 1) {
                        t(n, r)
                    }
                })
            }
            e("#formSuccessMessageWrap").hide(0);
            e(".formValidationError").fadeOut(0);
            e('input[type="text"], input[type="password"], textarea').focus(function() {
                if (e(this).val() == e(this).attr("data-dummy")) {
                    e(this).val("")
                }
            });
            e("input, textarea").blur(function() {
                if (e(this).val() == "") {
                    e(this).val(e(this).attr("data-dummy"))
                }
            });
            e("#contactSubmitButton").click(function() {
                n(e(this).attr("data-formId"));
                return false
            })
        })

		//Universal Transition Time
		var universalTransitionTime = 350;
		$('.header, .footer').css({
			WebkitTransition : 'all ' + universalTransitionTime + 'ms ease',
			MozTransition    : 'all ' + universalTransitionTime + 'ms ease',
			MsTransition     : 'all ' + universalTransitionTime + 'ms ease',
			OTransition      : 'all ' + universalTransitionTime + 'ms ease',
			transition       : 'all ' + universalTransitionTime + 'ms ease'
		});

        //Detect if iOS WebApp Engaged and permit navigation without deploying Safari
        (function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")

        //Detecting Mobiles//
		$('head').append('<meta charset="utf-8">');
		$('head').append('<meta name="apple-mobile-web-app-capable" content="yes">');
        var isMobile = {
            Android: function() {return navigator.userAgent.match(/Android/i);},
            iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
            Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
            any: function() {return (isMobile.Android()  || isMobile.iOS() || isMobile.Windows());}
        };
        if( !isMobile.any() ){
            $('.show-blackberry, .show-ios, .show-windows, .show-android').addClass('disabled');
            $('.show-no-detection').removeClass('disabled');
        }
        if(isMobile.Android()) {
            //Status Bar Color for Android
            $('head').append('<meta name="theme-color" content="#000000"> />');
            $('.show-android').removeClass('disabled');
            $('.show-blackberry, .show-ios, .show-windows, .show-download').addClass('disabled');
            $('.sidebar-scroll').css('right', '0px');
            $('.set-today').addClass('mobile-date-correction');
        }
        if(isMobile.iOS()) {
            $('.show-ios').removeClass('disabled');
            $('.show-blackberry, .show-android, .show-windows, .show-download').addClass('disabled');
            $('.set-today').addClass('mobile-date-correction');
        }
        if(isMobile.Windows()) {
            $('.show-windows').removeClass('disabled');
            $('.show-blackberry, .show-ios, .show-android, .show-download').addClass('disabled');
        }

		//Dropdowns
		$('.inner-link-list').on('click',function(){
			$(this).parent().find('.link-list').slideToggle(250);
            $(this).find('.fa-plus, .fa-angle-down').toggleClass('rotate-180');
		});

		//Font Awesome
		window.FontAwesomeConfig = {
			searchPseudoElements: true
		}

		//Notifications
		$('.close-notification').on('click',function(){
            $(this).parent().addClass('hide-notification');
        });

		//Charts
		if($('.chart').length > 0){
			var loadJS = function(url, implementationCode, location){
				var scriptTag = document.createElement('script');
				scriptTag.src = url;
				scriptTag.onload = implementationCode;
				scriptTag.onreadystatechange = implementationCode;
				location.appendChild(scriptTag);
			};
			var call_charts_to_page = function(){
				new Chart(document.getElementById("pie-chart"), {
					type: 'pie',
					data: {
					  labels: ["Facebook", "Twitter", "Google Plus", "Pinterest", "WhatsApp"],
					  datasets: [{
						backgroundColor: ["#4A89DC", "#4FC1E9", "#FC6E51", "#ED5565", "#A0D468"],
						borderColor:"rgba(255,255,255,1)",
						data: [7000,3000,1000,2000,2000]
					  }]
					},
					options: {
						legend: {display: true, position:'bottom', labels:{fontSize:13, padding:15,boxWidth:12},},
						tooltips:{enabled:true}, animation:{duration:1500}
					}
				});

				new Chart(document.getElementById("doughnut-chart"), {
					type: 'doughnut',
					data: {
					  labels: ["Apple Inc.", "Samsung", "Google", "One Plus", "Huawei"],
					  datasets: [{
						backgroundColor: ["#CCD1D9", "#5D9CEC","#FC6E51", "#434A54", "#4FC1E9"],
						borderColor:"rgba(255,255,255,1)",
						data: [5500,4000,2000,3000,1000]
					  }]
					},
					options: {
						legend: {display: true, position:'bottom', labels:{fontSize:13, padding:15,boxWidth:12},},
						tooltips:{enabled:true}, animation:{duration:1500}, layout:{ padding: {bottom: 30}}
					}
				});

				new Chart(document.getElementById("polar-chart"), {
					type: 'polarArea',
					data: {
					  labels: ["Windows", "Mac", "Linux"],
					  datasets: [{
						backgroundColor: ["#CCD1D9", "#5D9CEC","#FC6E51"],
						borderColor:"rgba(255,255,255,1)",
						data: [7000,10000,5000]
					  }]
					},
					options: {
						legend: {display: true, position:'bottom', labels:{fontSize:13, padding:15,boxWidth:12},},
						tooltips:{enabled:true}, animation:{duration:1500}, layout:{ padding: {bottom: 30}}
					}
				});

				new Chart(document.getElementById("vertical-chart"), {
					type: 'bar',
					data: {
					  labels: ["2010", "2015", "2020", "2025"],
					  datasets: [
						{
						  label: "iOS",
						  backgroundColor: "#A0D468",
						  data: [900,1000,1200,1400]
						}, {
						  label: "Android",
						  backgroundColor: "#4A89DC",
						  data: [890,950,1100,1300]
						}
					  ]
					},
					options: {
						legend: {display: true, position:'bottom', labels:{fontSize:13, padding:15,boxWidth:12},},
						title: {display: false}
					}
				});

				new Chart(document.getElementById("horizontal-chart"), {
					type: 'horizontalBar',
					data: {
					  labels: ["2010", "2013", "2016", "2020"],
					  datasets: [
						{
						  label: "Mobile",
						  backgroundColor: "#BF263C",
						  data: [330,400,580,590]
						}, {
						  label: "Responsive",
						  backgroundColor: "#EC87C0",
						  data: [390,450,550,570]
						}
					  ]
					},
					options: {
						legend: {display: true, position:'bottom', labels:{fontSize:13, padding:15,boxWidth:12},},
						title: {display: false}
					}
				});

				new Chart(document.getElementById("line-chart"), {
				  type: 'line',
				  data: {
					labels: [2000,2005,2010,2015,2010],
					datasets: [{
						data: [500,400,300,200,300],
						label: "Desktop Web",
						borderColor: "#D8334A"
					  }, {
						data: [0,100,300,400,500],
						label: "Mobile Web",
						borderColor: "#4A89DC"
					  }
					]
				  },
				  options: {
					legend: {display: true, position:'bottom', labels:{fontSize:13, padding:15,boxWidth:12},},
					title: {display: false}
				  }
				});
			}
			loadJS('scripts/charts.js', call_charts_to_page, document.body);
		}

		//Cookie Box
		function createCookie(e,t,n){if(n){var o=new Date;o.setTime(o.getTime()+48*n*60*60*1e3);var r="; expires="+o.toGMTString()}else var r="";document.cookie=e+"="+t+r+"; path=/"}function readCookie(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var r=n[o];" "==r.charAt(0);)r=r.substring(1,r.length);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return null}function eraseCookie(e){createCookie(e,"",-1)}
        //Activate Menu and Enable Cookie
        
        if (!readCookie('enabled_cookie_active_menu123')) {
            setTimeout(function(){
            if($('.activate-menu').length){
                $('.activate-menu').trigger('click')
            }},500)
		}
		if (readCookie('enabled_cookie_active_menu123')) {
            setTimeout(function(){
            if($('.activate-menu').length){
                $('.activate-menu').removeClass('activate-menu')
            }},500)
		}
		$('.close-cookie-menu').click(function() {
		    $('.cookie-policy').fadeOut(300);
		    createCookie('enabled_cookie_active_menu123', true, 1)
		});
            
		//Reading Time
		$(window).scroll(function() {
			var wintop = $(window).scrollTop(), docheight = $('.page-content').height(), winheight = $(window).height();
			var totalScroll = (wintop/(docheight-winheight))*100;
			$(".reading-line").css("width",totalScroll+"%");
		});
		$(function() {
			var $article = $('.reading-time-box');
			$article.readingTime({
				readingTimeAsNumber: true,
				readingTimeTarget: $article.find('.reading-time'),
				wordCountTarget: $article.find('.reading-words'),
				wordsPerMinute: 1075,
				round: false,
				lang: 'en',
			});
		});

		//Snackbars
		$('a[data-deploy-snack]').on( "click", function(){
			var snack_number = $(this).data('deploy-snack');
			$('#'+snack_number).addClass('active-snack');
			setTimeout(function(){$('#'+snack_number).removeClass('active-snack');},5000);
		});
		$('.snackbar a').on('click', function(){$(this).parent().removeClass('active-snack');});
		$('.snb').on( "click", function(){var snb_height = $('.notification-bar').height(); $('.notification-bar').toggleClass('toggle-notification-bar');});

		//Sortable List
		if( $('#sortable').length ){var list = document.getElementById("sortable"); Sortable.create(list);}

		//Search List
		$('[data-search]').on('keyup', function() {
			var searchVal = $(this).val();
			var filterItems = $(this).parent().parent().find('[data-filter-item]');
			if ( searchVal != '' ) {
				$(this).parent().parent().find('.search-results').removeClass('disabled-search-list');
				$(this).parent().parent().find('[data-filter-item]').addClass('disabled-search');
				$(this).parent().parent().find('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('disabled-search');
			} else {
				$(this).parent().parent().find('.search-results').addClass('disabled-search-list');
				$(this).parent().parent().find('[data-filter-item]').removeClass('disabled-search');
			}
		});

		//Tabs
		$('.active-tab').slideDown(0);
		$('a[data-tab]').on( "click", function(){
			var tab_number = $(this).data('tab');
			$(this).parent().find('[data-tab]').removeClass('active-tab-button');
			$(this).parent().parent().find('.tab-titles a').removeClass('active-tab-button');
			$(this).addClass('active-tab-button');
			$(this).parent().parent().find('.tab-item').slideUp(200);
			$('#'+tab_number).slideDown(200);
		});


		$('a[data-tab-pill]').on( "click", function(){
			var tab_number = $(this).data('tab-pill');
			var tab_bg = $(this).parent().parent().find('.tab-pill-titles').data('active-tab-pill-background');
			$(this).parent().find('[data-tab-pill]').removeClass('active-tab-pill-button ' + tab_bg);
			$(this).parent().parent().find('.tab-titles a').removeClass('active-tab-pill-button ' + tab_bg);
			$(this).addClass('active-tab-pill-button ' + tab_bg);
			$(this).parent().parent().find('.tab-item').slideUp(200);
			$('#'+tab_number).slideDown(200);
		});

		//Toast Boxes
		$('a[data-toast]').on( "click", function(){
			$('.toast').removeClass('show-toast');
			var toast_number = $(this).data('toast');
			$('#'+toast_number).addClass('show-toast');
			setTimeout(function(){$('#'+toast_number).removeClass('show-toast');},3000);
		});

		//Toggles
		$('.toggle-trigger, .toggle-title').on('click', function(){
			$(this).parent().toggleClass('toggle-active');
			$(this).parent().find('.toggle-content').slideToggle(250);
		});

		//FAQ
		$('.faq-question').on('click', function(){
			$(this).parent().find('.faq-answer').slideToggle(300);
			$(this).find('.fa-plus').toggleClass('rotate-45');
			$(this).find('.fa-chevron-down').toggleClass('rotate-180');
			$(this).find('.fa-arrow-down').toggleClass('rotate-180');
		})

		//Article Card
		if ($('.article-card, .instant-box').length) {
			//var activate_clone = window.location.hash.substring(1);
			setTimeout(function(){
				$('[data-article-card="'+activate_clone+'"]').addClass('active-card');
				$('[data-instant="'+activate_clone+'"]').addClass('active-instant');
			},0);
		}
		$('[data-article-card]').clone().addClass('article-clone').removeClass('article-card-round').appendTo('#page-transitions');
		$('.article-clone .article-header').append('<span class="article-back"><i class="fa fa-angle-left"></i> Back</span>');
		$('[data-deploy-card]').on('click',function(){
			$('.article-clone a').removeAttr('data-deploy-card');
			var data_card = $(this).data('deploy-card');
			$('[data-article-card="'+data_card+'"]').addClass('active-card');
			//window.location.hash = data_card;
            $('.article-card').animate({scrollTop: 0}, 0);
		});
		$('.article-clone .article-back, .close-article').on('click', function(){
			$('.article-clone').removeClass('active-card');
			return false;
			//window.location.href.substr(0, window.location.href.indexOf('#'));
		});

		//Instant Box
		$('.instant-box').clone().addClass('instant-box-clone').appendTo('#page-transitions');
		$('[data-deploy-instant]').on('click',function(){
			$('.instant-box-clone .instant-content').removeAttr('data-deploy-instant');
			var data_card = $(this).data('deploy-instant');
			$('[data-instant="'+data_card+'"]').addClass('active-instant');
			//window.location.hash = data_card;
            $('.instant-box').animate({scrollTop: 0}, 0);
		});
		$('.instant-clone').remove('instant-hidden-large');
		$('.close-instant').on('click', function(){
			$('.instant-box-clone').removeClass('active-instant');
			//window.location.href.substr(0, window.location.href.indexOf('#'));
			return false;
		});

		//Progress Bar
		if($('.progress-bar').length > 0){
			$('.progress-bar-wrapper').each(function(){
				var progress_height = $(this).data('progress-height');
				var progress_border = $(this).data('progress-border');
				var progress_round = $(this).attr('data-progress-round');
				var progress_color = $(this).data('progress-bar-color');
				var progress_bg = $(this).data('progress-bar-background');
				var progress_complete = $(this).data('progress-complete');
				var progress_text_visible = $(this).attr('data-progress-text-visible');
				var progress_text_color = $(this).attr('data-progress-text-color');
				var progress_text_size = $(this).attr('data-progress-text-size');
				var progress_text_position = $(this).attr('data-progress-text-position');
				var progress_text_before= $(this).attr('data-progress-text-before');
				var progress_text_after= $(this).attr('data-progress-text-after');

				if (progress_round ==='true'){
					$(this).find('.progress-bar').css({'border-radius':progress_height})
					$(this).css({'border-radius':progress_height})
				}

				if( progress_text_visible === 'true'){
					$(this).append('<em>'+ progress_text_before + progress_complete +'%' + progress_text_after + '</em>')
					$(this).find('em').css({
						"color":progress_text_color,
						"text-align":progress_text_position,
						"font-size":progress_text_size + 'px',
						"height": progress_height +'px',
						"line-height":progress_height + progress_border +'px'
					});
				}

				$(this).css({
					"height": progress_height + progress_border,
					"background-color": progress_bg,
				})

				$(this).find('.progress-bar').css({
					"width":progress_complete + '%',
					"height": progress_height - progress_border,
					"background-color": progress_color,
					"border-left-color":progress_bg,
					"border-right-color":progress_bg,
					"border-left-width":progress_border,
					"border-right-width":progress_border,
					"margin-top":progress_border,
				})
			});
		}

		//Countdown
		function countdown(dateEnd) {
		  var timer, years, days, hours, minutes, seconds;
		  dateEnd = new Date(dateEnd);
		  dateEnd = dateEnd.getTime();
		  if ( isNaN(dateEnd) ) {return;}
		  timer = setInterval(calculate, 1);
		  function calculate() {
			var dateStart = new Date();
			var dateStart = new Date(dateStart.getUTCFullYear(), dateStart.getUTCMonth(), dateStart.getUTCDate(), dateStart.getUTCHours(), dateStart.getUTCMinutes(), dateStart.getUTCSeconds());
			var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

			if ( timeRemaining >= 0 ) {
			  years    = parseInt(timeRemaining / 31536000);
			  timeRemaining   = (timeRemaining % 31536000);
			  days    = parseInt(timeRemaining / 86400);
			  timeRemaining   = (timeRemaining % 86400);
			  hours   = parseInt(timeRemaining / 3600);
			  timeRemaining   = (timeRemaining % 3600);
			  minutes = parseInt(timeRemaining / 60);
			  timeRemaining   = (timeRemaining % 60);
			  seconds = parseInt(timeRemaining);

				if($('.countdown').length > 0){
				  $(".countdown #years")[0].innerHTML    = parseInt(years, 10);
				  $(".countdown #days")[0].innerHTML    = parseInt(days, 10);
				  $(".countdown #hours")[0].innerHTML   = ("0" + hours).slice(-2);
				  $(".countdown #minutes")[0].innerHTML = ("0" + minutes).slice(-2);
				  $(".countdown #seconds")[0].innerHTML = ("0" + seconds).slice(-2);
				}
			} else { return; }}
		  function display(days, hours, minutes, seconds) {}
		}
		countdown('01/19/2030 03:14:07 AM');

		//Show Map
		$('.show-map, .hide-map').on('click',function(){
			$('.map-full .cover-content').toggleClass('deactivate-map');
			$('.map-full .cover-overlay').toggleClass('deactivate-map');
			$('.map-but-1, .map-but-2').toggleClass('deactivate-map');
			$('.map-full .hide-map').toggleClass('activate-map');
		});

		//Toggle Box
		$('[data-toggle-box]').on('click',function(){
			var toggle_box = $(this).data('toggle-box');
			if($('#'+toggle_box).is(":visible")){
				$('#'+toggle_box).slideUp(250);
			}else{
				$("[id^='box']").slideUp(250);
				$('#'+toggle_box).slideDown(250);
			}
		});

		//Read More Box
		$('.read-more-show').on('click',function(){
			$(this).hide();
			$(this).parent().parent().find('.read-more-box').show();
		});

		var share_link = window.location.href;
		$('.shareToFacebook').prop("href", "https://www.facebook.com/sharer/sharer.php?u="+share_link)
		$('.shareToGooglePlus').prop("href", "https://plus.google.com/share?url="+share_link)
		$('.shareToTwitter').prop("href", "https://twitter.com/home?status="+share_link)
		$('.shareToPinterest').prop("href", "https://pinterest.com/pin/create/button/?url=" + share_link)
		$('.shareToWhatsApp').prop("href", "whatsapp://send?text=" + share_link)
		$('.shareToMail').prop("href", "mailto:?body=" + share_link)
	}

	setTimeout(init_template, 0);//Activating all the plugins
    $(function(){
		'use strict';
		var options = {
			prefetch: true,
			prefetchOn: 'mouseover',
			cacheLength: 100,
			scroll: true,
			blacklist: '.default-link' && '.show-gallery',
			forms: 'contactForm',
			onStart: {
				duration:350, // Duration of our animation
				render: function ($container) {
				$container.addClass('is-exiting');// Add your CSS animation reversing class
					$('.page-change-preloader').addClass('show-change-preloader');
                    $('.menu-hider').removeClass('active-menu-hider');
                    $('.menu').removeClass('active-menu-box-full active-menu-full-top active-menu-full-bottom active-menu-box-top active-menu-box-bottom active-menu-box-modal active-menu-full active-sidebar-left-over active-sidebar-left-push active-sidebar-right-push active-sidebar-left-parallax active-sidebar-right-parallax active-sidebar-right-over');
                    $('.page-content, .header').removeClass('header-zindex active-body-left-push active-body-right-push active-body-left-parallax active-body-right-parallax')
                    $('.menu').css({'margin-top':''})
                    $('.page-content').css('transform','');
                    $('.header').css('transform','');

					return false;
				}
			},
			onReady: {
				duration: 50,
				render: function ($container, $newContent) {
					$container.removeClass('is-exiting');// Remove your CSS animation reversing class
					$container.html($newContent);// Inject the new content
					$('#page-build').remove();
					$('.page-change-preloader').addClass('show-change-preloader');
				}
			},
			onAfter: function($container, $newContent) {
				setTimeout(init_template, 0)//Timeout required to properly initiate all JS Functions.
				setTimeout(function(){
				$('.page-change-preloader').removeClass('show-change-preloader');
				},150);
			}
      	};
      var smoothState = $('#page-transitions').smoothState(options).data('smoothState');
    });
	$('body').append('<div class="page-change-preloader preloader-light"><div id="preload-spinner" class="spinner-red"></div></div>');
});

var logueado = false;
var serverREMOTE = "http://192.168.100.9:8080/exdec/";
//var serverREMOTE = "http://panel.micomunidad.com.ar/";

var serverAPI=serverREMOTE + "api/";

var store = store || {};
/*
 * Store JWT
 */
store.setIDComercio = function (data) {
    this.idComercio=data;
};
store.setJWT = function(data) {
    this.JWT = data;
};
store.clear = function(data) {
    this.JWT = "";
    this.idComercio = "";
    this.u = "";
    this.tagNotificacion = "";
    logueado = false;
};
var crearNotificacion = function (opt) {
    /**
     * @opt  {object}
            opt.tag <id notificacion>
            opt.titulo <titulo>
            opt.cuerpo <texto cuerpo>
            opt.click <callback evento click>
            opt.icono <icono a mostrar>
     * @return muestra una notificacion
     */
    if ("Notification" in window) {
        Notification.requestPermission(function (permission) {
            // If the user accepts, let’s create a notification
            if (permission === "granted") {
                var notification = new Notification(opt.titulo, {
                    tag: opt.tag, 
                    body: opt.cuerpo,
                    icon: opt.icono
                }); 
                notification.onshow  = function() { console.log('show'); };
                notification.onclose = function() { console.log('close'); };
                notification.onclick = opt.click;
            }
        });
    } else {
        window.alert("no tengo notification");
    }
};
var deviceReady = function(){
	console.log("deviceready");
    if(window.MobileAccessibility){
        window.MobileAccessibility.usePreferredTextZoom(false);
    }
    $("#i_telefono").focus();
    procesarLoginDeLocal();
    document.addEventListener("online", cambioDeConexion, false);
    document.addEventListener("offline", cambioDeConexion, false);
}

document.addEventListener('deviceready', deviceReady, false);
$(function () {
	console.log("onload Inicial");
	dibujarLogin();
    popularOpcionesSistema();
    window.setInterval(revisarNotificaciones,10000);//10 segundos

    $("#i_telefono").focus();
    $("#i_telefono").keyup(function (e) {
        leng = $(this).val().length;
        if (e.which == 13 || leng > 7) {
    		console.log("detecto el enter en el telefono y paso a monto");
            $("#i_monto").focus();
        }
    });
    $("#i_dni").keyup(function (e) {
        leng = $(this).val().length;
        if (e.which == 13 || leng > 7) {
    		console.log("detecto el enter en el DNI y paso a monto");
            $("#i_monto").focus();
        }
    });

    $("#i_telefono").on("blur",function (e) {
        leng = $(this).val().length;
        if (e.which == 13 || leng > 7) {
    		console.log("Blur en el telefono y traigo el id de cliente");
            var telefono = $("#i_area").val()+''+$(this).val();
            traerIdClienteTelefono(telefono);
        }

    });
    $("#i_dni").on("blur",function (e) {
        leng = $(this).val().length;
        if (e.which == 13 || leng > 7) {
    		console.log("Blur en el DNI y traigo el id de cliente");
            var dni = $(this).val();
            traerIdClienteDNI(dni);
        }
    });

    $("#i_monto").keyup(function (e) {
        if (e.which == 13) {
    		console.log("enter en el monto y proceso la carga");
            procesarCarga();
        }
    });
    $("#b_cargar").click(function () {
		console.log("click en carga y proceso la carga");
        procesarCarga();
    });
    $("#b_login").click(function () {
		console.log("click en login y proceso login");
        procesarLogin();
    });
    $("#b_abrirLogin").click(function () {
		console.log("hago foco en el usuario inmediatamente despues de hacer un click en abrirLogin (¿?)");
        $("#u_usuario").focus();
    });
    $("#p_pass,#u_usuario").keyup(function (e) {
        if (e.which == 13) {
			console.log("si apreta enter en el login o pass, procesa login");
            procesarLogin();
        }
    });
    $("#b_registracion").on("click",function () {
		console.log("si apreta en registrar, dibuja la registracion");
    	dibujarRegistro();
    });
    if (window.localStorage.u) {
		console.log("si el localStorage tiene un parametro u tonz procesaLoginDeLocal");
        procesarLoginDeLocal();
    } else {
		console.log("si el localStorage NO tiene un parametro u tonz procesaLoginDeLocal");
        $('#menu-login').show();
    }
    $("#b_logout").on("click",function () {
		console.log("click en logout, limpia todo");
        store.u = "";
        store.p = "";
        store.idComercio ="";
        store.JWT = "";
        opcionesSistema = [];
        window.localStorage.u = "";
        window.localStorage.p = "";
        store.clear();
        procesarLoginDeLocal();
    });
	$("#menu-registracion").hide();

	$("#m_listadoclientes").on("click", function () {
		console.log("click en listado de clientes");
		cerrarMenu();
		traerClientes(dibujarClientes);
	});
	$("#m_cargaclientes").on("click", function () {
		console.log("click en editar de cliente vacío");
		cerrarMenu();
		editarCliente({});
	});

});
var traerClientes = function (cb) {
    console.log("trayendo clientes");
    var data = {};
    data.action="list";
    data.object="cliente";
    data.recperpage="All";
    $.ajax({
        url: serverAPI,
        type: "POST",
        data: data,
        success: function(data, status, xhr) {
            if (data.cliente.length > 0) {
                console.log("traje clientes!");
                cb(data.cliente);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("problemas buscando los clientes");
        },
        beforeSend: function(request) { // Set JWT header
            request.setRequestHeader('X-Authorization', 'Bearer ' + store.JWT);
        }
    });
};
var dibujarClientes = function (clientes) {
    var i;
    var div = document.createElement("div");
    var cerrar = document.createElement("span");
    cerrar.setAttribute("class","button button-round button-green-3d button-green");
    cerrar.setAttribute("style","position:absolute;right:0px;");
    cerrar.appendChild(document.createTextNode("X"));
    $(cerrar).on("click",function () {
	    $("#body").show();
	    $("#tablaMensajes").hide();
    });
    div.appendChild(cerrar);
    div.setAttribute("class","content-box content-box-full bottom-0");
    var table = document.createElement("table");
    table.setAttribute("class","table-borders-dark top-15 bottom-30 round-element bg-white shadow-large");
    div.appendChild(table);
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
    var tr = document.createElement("tr");
    tbody.appendChild(tr);
    $(tr).append("<th>Nombre</th><th>DNI</th><th>Telefono</th><th> </th>");
    for(i = 0;i < clientes.length; i += 1) {
        m = clientes[i];
        trr = document.createElement("tr");

        td = document.createElement("td");
        td.appendChild(document.createTextNode(m.apellido+", "+m.nombre));
        trr.appendChild(td);

        td = document.createElement("td");
        td.appendChild(document.createTextNode(m.dni));
        trr.appendChild(td);

        td = document.createElement("td");
        td.appendChild(document.createTextNode(m.celular));
        trr.appendChild(td);

        td = document.createElement("td");
        a = document.createElement("span");
        a.appendChild(document.createTextNode("Editar"));
        a.setAttribute("class","button button-xxs button-round button-green-3d button-green");
        $(a).on("click",{msg:m}, function (e) {
           	editarCliente(e.data.msg);
        });
        td.appendChild(a);

        a = document.createElement("span");
        a.appendChild(document.createTextNode("Borrar"));
        a.setAttribute("class","button button-xxs button-round button-green-3d button-red");
        $(a).on("click",{msg:m}, function (e) {
           	borrarCliente(e.data.msg.m);
        });
        td.appendChild(a);


        trr.appendChild(td);
        tbody.appendChild(trr);
    }
    $("#tablaMensajes").html(" ");
    $("#tablaMensajes").append(div);
    $("#body").hide();
    $("#tablaMensajes").show();
};
var editarCliente = function (c) {
	dibujarEditar(c);//otra posibilidad es traer el registro por api  y despues dibujarlo
};
var dibujarEditar = function (c) {
	c.nombre = "nombre" in c?c.nombre:"";
	c.apellido = "apellido" in c?c.apellido:"";
	c.celular = "celular" in c?c.celular:"";
	c.dni = "dni" in c?c.dni:"";
	c.id = "id" in c?c.id:"";

	var edicion = `
        <div class="page-bg gradient-body-1">
            <div class="menu-scroll">
                <div class="page-login bg-white top-0 ">
                    <div class="content bottom-0">
                        <h3 class="uppercase ultrabold top-10 bottom-0">Ingreso</h3>
                        <p class="smaller-text bottom-15 text-red" id="e_mensaje_registro"></p>
                        <div class="page-login-field top-15">
                            <i class="fa fa-address-card"></i>
                            <input type="text" value="`+c.nombre+`" id="c_nombre" placeholder="Nombre">
                            <input type="hidden" value="`+c.id+`" id="c_id">
                            <em>(requerido)</em>
                        </div>
                        <div class="page-login-field top-15">
                            <i class="fa fa-address-card"></i>
                            <input type="text" value="`+c.apellido+`" id="c_apellido" placeholder="Apellido">
                            <em>(requerido)</em>
                        </div>
                        <div class="page-login-field top-15">
                            <i class="fa fa-address-card"></i>
                            <input type="text" value="`+c.dni+`" id="c_dni" placeholder="DNI">
                            <em>(requerido)</em>
                        </div>
                        <div class="page-login-field top-15">
                            <i class="fa fa-phone"></i>
                            <input type="text" value="`+c.celular+`" id="c_celular" placeholder="Telefono">
                            <em>(requerido)</em>
                        </div>
                        <a href="#" class="button button-green button-full shadow-icon-large button-round button-s uppercase ultrabold" id="c_agregar">Agregar</a>
                        <a href="#" class="button button-green button-full shadow-icon-large button-round button-s uppercase ultrabold" id="c_volver">VOLVER</a>
                    </div>
                </div>
            </div>
        </div>
 `;
	$("#menu-registracion").html(edicion);
	$("#menu-registracion").addClass("menu menu-scroll");
    $('#menu-registracion').show();
    $('#menu-login').hide();
	$("#c_agregar").on("click",function () {
		var c = {
			nombre: $("#c_nombre").val(),
			apellido: $("#c_apellido").val(),
			celular: $("#c_celular").val(),
			dni: $("#c_dni").val(),
			id: $("#c_id").val()
		};
		validarRegistroAltaCliente(c,enviarCliente);
	});    
	$("#c_volver").on("click", function () {
        $('#menu-registracion').hide();
        $("#menu-registracion").removeClass("menu menu-scroll");
		$('#menu-login').show();
	});
};
var validarRegistroAltaCliente = function (c,cb) {
	cb(c);
};
var enviarCliente = function (c) {
    console.log("guardando cliente");
    if (c.id.length > 0) {
	    var data = {};
	    data = c;
	    data.action="edit";
	    data.object="cliente";
	    console.log("estoy editando el cliente");
    } else {
	    var data = {};
	    data = c;
	    data.comercio_id = store.idComercio;
	    data.action="add";
	    data.object="cliente";
	    console.log("estoy agregando el cliente");
    }

    $.ajax({
        url: serverAPI,
        type: "POST",
        data: data,
        success: function(data, status, xhr) {
            console.log("guardé cliente");
            window.alert("cliente guardado");
	        $('#menu-registracion').hide();
	        $("#menu-registracion").removeClass("menu menu-scroll");
			$('#menu-login').show();
			traerClientes(dibujarClientes);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("problemas guardando los cliente");
            window.alert("problemas guardando el cliente");
	        $('#menu-registracion').hide();
	        $("#menu-registracion").removeClass("menu menu-scroll");
			$('#menu-login').show();
        },
        beforeSend: function(request) { // Set JWT header
            request.setRequestHeader('X-Authorization', 'Bearer ' + store.JWT);
        }
    });
}
var dibujarRegistro = function () {
	var login = `
        <div class="page-bg gradient-body-1">
            <div class="menu-scroll">
                <div class="page-login bg-white top-0 ">
                    <img class="preload-image login-bg shadow-large responsive-image bottom-0" src="images/pictures/9w.jpg" data-src="images/pictures/9w.jpg" alt="img">
                    <img class="preload-image login-image shadow-icon-large" src="images/pictures/0s.png" data-src="images/pictures/0s.png" alt="img">
                    <div class="content bottom-0">
                        <h3 class="uppercase ultrabold top-10 bottom-0">Ingreso</h3>
                        <p class="smaller-text bottom-15 text-red" id="e_mensaje_registro"></p>
                        <div class="page-login-field top-15">
                            <i class="fa fa-address-card"></i>
                            <input type="text" id="r_nombre" placeholder="Nombre completo">
                            <em>(requerido)</em>
                        </div>
                        <div class="page-login-field top-15">
                            <i class="fa fa-map-marker"></i>
                            <input type="text" id="r_direccion" placeholder="Direccion">
                            <em>(requerido)</em>
                        </div>
                        <div class="page-login-field top-15">
                            <i class="fa fa-at"></i>
                            <input type="text" id="r_email" placeholder="Email">
                            <em>(requerido)</em>
                        </div>
                        <div class="page-login-field top-15">
                            <i class="fa fa-user"></i>
                            <input type="text" id="r_usuario" placeholder="Usuario">
                            <em>(requerido)</em>
                        </div>
                        <div class="page-login-field top-15">
                            <i class="fa fa-lock"></i>
                            <input type="password" id="r_pass" placeholder="Contraseña">
                            <em>(requerido)</em>
                        </div>
                        <div class="page-login-field top-15">
                            <i class="fa fa-lock"></i>
                            <input type="password" id="r_pass2" placeholder="Contraseña (Repetir)">
                            <em>(requerido)</em>
                        </div>
                        <a href="#" class="button button-green button-full shadow-icon-large button-round button-s uppercase ultrabold" id="b_registrar">REGISTRARSE</a>
                        <a href="#" class="button button-green button-full shadow-icon-large button-round button-s uppercase ultrabold" id="r_volver">VOLVER</a>
                    </div>
                </div>
            </div>
        </div>
 `;
	$("#menu-registracion").html(login);
	$("#menu-registracion").addClass("menu menu-scroll");
    $('#menu-registracion').show();
    $('#menu-login').hide();
	$("#b_registrar").on("click",function () {
		validarRegistro(function() {
			traerTokenRegistro(enviarRegistracion)
		});
	});    
	$("#r_volver").on("click", function () {
        $('#menu-registracion').hide();
        $("#menu-registracion").removeClass("menu menu-scroll");
		$('#menu-login').show();
	});
};
var dibujarLogin = function () {
	var login = `
        <div class="page-bg gradient-body-1">
            <div class="cover-content-center">
                <div class="page-login bg-white top-0">
                    <img class="preload-image login-bg shadow-large responsive-image bottom-0" src="images/pictures/9w.jpg" data-src="images/pictures/9w.jpg" alt="img">
                    <img class="preload-image login-image shadow-icon-large" src="images/pictures/0s.png" data-src="images/pictures/0s.png" alt="img">
                    <div class="content bottom-0">
                        <h3 class="uppercase ultrabold top-10 bottom-0">Ingreso</h3>
                        <p class="smaller-text bottom-15 text-red" id="e_mensaje_login"></p>
                        <div class="page-login-field top-15">
                            <i class="fa fa-user"></i>
                            <input type="text" id="u_usuario" placeholder="Usuario">
                            <em>(requerido)</em>
                        </div>
                        <div class="page-login-field bottom-20">
                            <i class="fa fa-lock"></i>
                            <input type="password" id="p_pass" placeholder="Contraseña">
                            <em>(requerido)</em>
                        </div>
                        <a href="#" class="button button-green button-full shadow-icon-large button-round button-s uppercase ultrabold" id="b_login">LOGIN</a>
                        <a href="#" class="button button-green button-full shadow-icon-large button-round button-s uppercase ultrabold" id="b_registracion">REGISTRACION</a>
                    </div>
                </div>
            </div>
        </div>
 `;
	//var login = " <div class=\"page-bg gradient-body-1\">\n            <div class=\"cover-content-center\">\n                <div class=\"page-login bg-white top-0\">\n                    <img class=\"preload-image login-bg shadow-large responsive-image bottom-0\" src=\"images/pictures/9w.jpg\" data-src=\"images/pictures/9w.jpg\" alt=\"img\">\n                    <img class=\"preload-image login-image shadow-icon-large\" src=\"images/pictures/0s.png\" data-src=\"images/pictures/0s.png\" alt=\"img\">\n                    <div class=\"content bottom-0\">\n                        <h3 class=\"uppercase ultrabold top-10 bottom-0\">Ingreso</h3>\n                        <p class=\"smaller-text bottom-15 text-red\" id=\"e_mensaje_login\"></p>\n                        <div class=\"page-login-field top-15\">\n                            <i class=\"fa fa-user\"></i>\n                            <input type=\"text\" id=\"u_usuario\" placeholder=\"Usuario\">\n                            <em>(requerido)</em>\n                        </div>\n                        <div class=\"page-login-field bottom-20\">\n                            <i class=\"fa fa-lock\"></i>\n                            <input type=\"password\" id=\"p_pass\" placeholder=\"Contrase\xF1a\">\n                            <em>(requerido)</em>\n                        </div>\n                        <a href=\"#\" class=\"button button-green button-full shadow-icon-large button-round button-s uppercase ultrabold\" id=\"b_login\">LOGIN</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n";	
	$("#menu-login").html(login);
};
var marcarErrorRegistro = function (obj) {
	obj.o.next().css("color","red");
	obj.o.next().text(obj.texto);
};
var limpiarErrorRegistro = function (obj) {
	obj.o.next().css("color","#cacaca");
};

var validarRegistro = function (cb) {
	var errores = [];
	if ($("#r_nombre").val().length < 4) {
		errores.push(1);
		marcarErrorRegistro({o:$("#r_nombre"),texto:"Nombre demasiado corto"});
	} else {
		limpiarErrorRegistro({o:$("#r_nombre")});
	}

	if ($("#r_direccion").val().length < 6) {
		errores.push(1);
		marcarErrorRegistro({o:$("#r_direccion"),texto:"Direccion demasiado corta"});
	} else {
		limpiarErrorRegistro({o:$("#r_direccion")});
	}

	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if ($("#r_email").val().length < 7 || !regex.test($("#r_email").val())) {
		errores.push(1);
		marcarErrorRegistro({o:$("#r_email"),texto:"Email Invalido"});
	} else {
		limpiarErrorRegistro({o:$("#r_email")});
	}

	if ($("#r_usuario").val().length < 4) {
		errores.push(1);
		marcarErrorRegistro({o:$("#r_usuario"),texto:"Usuario demasiado corto"});
	} else {
		limpiarErrorRegistro({o:$("#r_usuario")});
	}

	if ($("#r_pass").val().length < 6) {
		errores.push(1);
		marcarErrorRegistro({o:$("#r_pass"),texto:"Contraseña demasiado corta"});
	} else {
		limpiarErrorRegistro({o:$("#r_pass")});
	}

	if ($("#r_pass2").val() != $("#r_pass").val()) {
		errores.push(1);
		marcarErrorRegistro({o:$("#r_pass2"),texto:"Las contraseñas no coinciden"});
	} else {
		limpiarErrorRegistro({o:$("#r_pass2")});
	}

	if (errores.length < 1) {
		cb();
	} else {
		window.alert("Se encontraron errores");
	}
}
var traerOpcionSistema = function (op) {
    opcion = store.opcionesSistema.find(function (e) {return e.nombre == op});
    if (opcion != undefined) {
        return opcion.valor;
    } else {
        return opcion;
    }
};
var popularOpcionesSistema = function () {
    console.log("revisando opciones de sistema");
    if (!window.localStorage.u) {
        store.clear();
        $('#menu-login').hide();
    }    
    var data = {};
    data.action="traerOpcionesSistema";
    $.ajax({
        url: serverAPI,
        type: "POST",
        data: data,
        success: function(data, status, xhr) {
            var out = (data && typeof data === 'object') ? JSON.stringify(data) : data;
            if (JSON.parse(data).length > 0) {
                store.opcionesSistema = JSON.parse(data);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("problemas revisando opciones de sistema");
        }
    });
};
var dibujarTablaMensajes = function (msg) {
    var i;
    var div = document.createElement("div");
    var cerrar = document.createElement("span");
    cerrar.setAttribute("class","button button-round button-green-3d button-green");
    cerrar.setAttribute("style","position:absolute;right:0px;");
    cerrar.appendChild(document.createTextNode("X"));
    $(cerrar).on("click",function () {
	    $("#body").show();
	    $("#tablaMensajes").hide();
    });
    div.appendChild(cerrar);
    div.setAttribute("class","content-box content-box-full bottom-0");
    var table = document.createElement("table");
    table.setAttribute("class","table-borders-dark top-15 bottom-30 round-element bg-white shadow-large");
    div.appendChild(table);
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
    var tr = document.createElement("tr");
    tbody.appendChild(tr);
    $(tr).append("<th>Nombre</th><th>Tipo</th><th> </th>");
    for(i = 0;i < msg.length; i += 1) {
        m = msg[i];
        trr = document.createElement("tr");

        td = document.createElement("td");
        td.appendChild(document.createTextNode(m.cliente));
        trr.appendChild(td);

        td = document.createElement("td");
        td.appendChild(document.createTextNode(m.celular_completo));
        trr.appendChild(td);

        td = document.createElement("td");
        a = document.createElement("span");
        a.appendChild(document.createTextNode("Enviar"));
        a.setAttribute("class","button button-xxs button-round button-green-3d button-green");
        $(a).on("click",{msg:msg[i]}, function (e) {
            //window.alert(e.data.msg.celular_completo);
            window.plugins.socialsharing.shareViaWhatsAppToPhone(e.data.msg.celular_completo, 
                e.data.msg.mensaje, 
                null, 
                null,
                function() {traerMensajesPendientes();}//aca deberia guardar el nuevo estado del msg y despues refrescar
            )
        });
        td.appendChild(a);

        a = document.createElement("span");
        a.appendChild(document.createTextNode("Rechazar"));
        a.setAttribute("class","button button-xxs button-round button-green-3d button-red");
        td.appendChild(a);


        trr.appendChild(td);
        tbody.appendChild(trr);
    }
    $("#tablaMensajes").html(" ");
    $("#tablaMensajes").append(div);
    $("#body").hide();
    $("#tablaMensajes").show();
};
var traerMensajesPendientes = function () {
    console.log("trayendo mensajes pendientes");
    var data = {};
    data.action="traerMensajesPorEstado";
    data.e = traerOpcionSistema("mensaje_estado_id_pendiente");
    data.c = store.idComercio;
    $.ajax({
        url: serverAPI,
        type: "POST",
        data: data,
        success: function(data, status, xhr) {
            var data = JSON.parse(data);
            var mensajes = [];
            if (data.length > 0) {
                console.log("traje mensajes!");
                dibujarTablaMensajes(data);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("problemas revisando opciones de sistema");
        },
        beforeSend: function(request) { // Set JWT header
            request.setRequestHeader('X-Authorization', 'Bearer ' + store.JWT);
        }
    });
};
var revisarNotificaciones = function () {
    if (!store.JWT) {
        console.log("no tengo session, no reviso");
        return false;
    }
    console.log("revisando");
    var data = {};
    data.action="traerCantidadMensajesPendientes";
    data.comercio_id=store.idComercio;
    $.ajax({
        url: serverAPI,
        type: "POST",
        data: data,
        success: function(data, status, xhr) {
            var out = (data && typeof data === 'object') ? JSON.stringify(data) : data;
            if (data.cantidad) {
                if (parseInt(data.cantidad,10) > 0) {
                    if (store.tagNotificacion == undefined || store.tagNotificacion.length < 1) {
                        store.tagNotificacion = "pendientes";
                        crearNotificacion({
                            tag: store.tagNotificacion,
                            titulo: traerOpcionSistema("app_notificacion_pendientes_titulo"),
                            texto: traerOpcionSistema("app_notificacion_pendientes_texto"),
                            click: function () {
                                traerMensajesPendientes();
                                //window.alert("mostrar listado");
                            }
                        });
                    }
                    $("#i_campana").show();
                    $("#i_campana").addClass("faa-ring");
                    $("#i_campana").addClass("animated");
                    $("#i_campana").addClass("encender");
                    $("#i_campana").removeClass("apagar");
                    $("#i_campana").click(function () {
						traerMensajesPendientes();
                    });
                } else {
                    $("#i_campana").hide();
                    $("#i_campana").removeClass("faa-ring");
                    $("#i_campana").removeClass("animated");
                    $("#i_campana").removeClass("encender");
                    $("#i_campana").addClass("apagar");
                    $( "body" ).off( "click", "#i_campana");
                }
            } else {
                $("#i_campana").hide();
                $("#i_campana").removeClass("faa-ring");
                $("#i_campana").removeClass("animated");
                $("#i_campana").removeClass("encender");
                $("#i_campana").addClass("apagar");
                $( "body" ).off( "click", "#i_campana");
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            usuarioNo("error inesperado en encabezados");
        },
        beforeSend: function(request) { // Set JWT header
            request.setRequestHeader('X-Authorization', 'Bearer ' + store.JWT);
        } 
    });
};
var traerIdClienteTelefono = function (t) {
    if (!store.idComercio) {
        store.clear();
        $('#menu-login').hide();
        alert("no tengo id de Comercio!");
        return false;
    }
    var data = {};
    data.action="traerIDCliente";
    data.telefono=t;
    data.comercio_id=store.idComercio;

    $.ajax({
        url: serverAPI,
        type: "POST",
        data: data,
        success: function(data, status, xhr) {
            if (parseInt(data.id) > 0) {
                store.tmp_cliente_id = data.id;
                traerDatosClienteDeId(mostrarDatosCliente,data.id);
            } else {
                $("#i_telefono").val("");
                $("#i_telefono").focus();
                alert("cliente no existe");
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            $("#i_telefono").val("");
            $("#i_telefono").focus();
            alert("cliente no existe");
        },
        beforeSend: function(request) { // Set JWT header
            request.setRequestHeader('X-Authorization', 'Bearer ' + store.JWT);
        }
    });
};

var traerIdClienteDNI = function (d) {
    if (!store.idComercio) {
        store.clear();
        $('#menu-login').hide();
        alert("no tengo id de Comercio!");
        return false;
    }
    var data = {};
    data.action="traerIDClienteDeDNI";
    data.dni=d;
    data.comercio_id=store.idComercio;

    $.ajax({
        url: serverAPI,
        type: "POST",
        data: data,
        success: function(data, status, xhr) {
            if (parseInt(data.id) > 0) {
                store.tmp_cliente_id = data.id;
                traerDatosClienteDeId(mostrarDatosCliente,data.id);
            } else {
                $("#i_dni").val("");
                $("#i_dni").focus();
                alert("cliente no existe");
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            $("#i_dni").val("");
            $("#i_dni").focus();
            alert("cliente no existe");
        },
        beforeSend: function(request) { // Set JWT header
            request.setRequestHeader('X-Authorization', 'Bearer ' + store.JWT);
        }
    });
};

var traerDatosClienteDeId = function (cb,id) {
    var data = {};
    data.action="traerClienteDeID";
    data.id=id;

    $.ajax({
        url: serverAPI,
        type: "POST",
        data: data,
        success: function(data, status, xhr) {
            if (parseInt(data.id) > 0) {
                cb(data);
            } else {
                alert("id no valido, cliente no existe");
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert("id no valido, cliente no existe");
        },
        beforeSend: function(request) { // Set JWT header
            request.setRequestHeader('X-Authorization', 'Bearer ' + store.JWT);
        }
    });
};

var mostrarDatosCliente = function (data) {
    //alert(data);
    $("#i_area").val(data.celular.substr(0,5));
    $("#i_telefono").val(data.celular.substr(5));
    $("#i_dni").val(data.dni);
    $("#l_nombre").text(data.apellido + ", " + data.nombre);
    $("#l_puntos").text(data.puntos);

};
var procesarLogin = function () {
    var c = {};
    c.u = $("#u_usuario").val();
    c.p = $("#p_pass").val();
    window.localStorage.u = c.u;
    window.localStorage.p = c.p;
    if(c.u.length < 1 || c.p.length < 1) {
        usuarioNo("Se requiere Usuario y Contraseña");
        return false;
    }
    comprobarCredenciales(c);
};
var cargarFormapago = function () {
    var i = 0,
        f;
        $("#formasDePago").html("");
    for (i = 0;i < store.formasdepago.length;i += 1) {
        f = store.formasdepago[i];
        $("#formasDePago").append('<div class="fac fac-radio fac-orange" style="font-size: 90%;font-weight: 500;"><span></span><input id="box'+i+'-fac-radio" type="radio" name="v_forma_pago" value="'+f.id+'"><label for="box'+i+'-fac-radio">'+f.nombre+'</label></div>');
    }
};

var traerFormasDePago = function () {
    var data = {};
    data.action="list";
    data.object="formapago";
    $.ajax({
        url: serverAPI,
        type: "GET",
        data: data,
        success: function(data, status, xhr) {
            var out = (data && typeof data === 'object') ? JSON.stringify(data) : data;
            if (data.success) {
                store.formasdepago = data.formapago;
                cargarFormapago();
            } else {
                alert("no existen formas de pago");
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert("error inesperado en encabezados de formas de pago");
        },
        beforeSend: function(request) { // Set JWT header
            request.setRequestHeader('X-Authorization', 'Bearer ' + store.JWT);
        } 
    });
};
var usuarioSi = function () {
    var data = {};
    data.action="list";
    data.object="comercio";
    $.ajax({
        url: serverAPI,
        type: "POST",
        data: data,
        success: function(data, status, xhr) {
            var out = (data && typeof data === 'object') ? JSON.stringify(data) : data;
            if (data.success) {
                store.setIDComercio(data.comercio[0].id);
                $("#u_usuario").val("");
                $("#p_pass").val("");
                $("#i_ok_login").show();
                $("#i_no_login").hide();
                traerFormasDePago();
                cerrarMenu();
                $("#i_telefono").focus();
            } else {
                usuarioNo(data.failureMessage);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            usuarioNo("error inesperado en encabezados");
        },
        beforeSend: function(request) { // Set JWT header
            request.setRequestHeader('X-Authorization', 'Bearer ' + store.JWT);
        } 
    });
}

var usuarioNo = function (mensaje) {
    store.clear();
    $("#i_ok_login").hide();
    $("#i_no_login").show();
    $("#e_mensaje_login").html("");
    $("#e_mensaje_login").append("<div style='margin-top:5px;margin-bottom:5px;padding:5px;' class='demo-line gradient-red-dark'>"+mensaje+"</div>");
    $("#u_usuario").focus();
}
var cargaSi = function (f) {
    $("#i_telefono").val("");
    $("#i_dni").val("");
    $("#i_monto").val("");
    $(window).scrollTop(0);
    $("#i_telefono").focus();
};
var cargaNo = function (m) {
    $("#resultado").html("");
    $("#resultado").append("<div class='demo-line gradient-red-dark'>"+m+"</div>");
};

var procesarCarga = function () {
    var f = {};
    f.telefono = $("#i_area").val() + "" + $("#i_telefono").val();
    f.monto = $("#i_monto").val();
    f.dni = $("#i_dni").val();
    if (f.telefono.length < 7 && f.dni.length < 7) {
        $("#i_telefono").focus();
        return false;
    }
    if (!store.JWT || store.JWT.length < 2) {
        store.clear();
        $('#menu-login').show();
        return false;
    }
    //f es el form
    
    if (parseInt(store.tmp_cliente_id) === 0) {
        return false;
    }
    f.id_cliente = store.tmp_cliente_id;

    enviarCarga(f);
    //ya tengo el id =)
    //conseguirId_telefono_y_enviar(f);
};

var conseguirId_telefono_y_enviar = function (f) {
    var data = {};
    data.action="traerIDCliente";
    data.telefono=f.telefono;
    data.comercio_id=store.idComercio;
    $.ajax({
        url: serverAPI,
        type: "POST",
        data: data,
        success: function(data, status, xhr) {
            if (parseInt(data.id) > 0) {
                f.id_cliente = data.id;
                enviarCarga(f);
            } else {
                alert("ERROR, No existe el cliente");
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert("ERROR interno");
        },
        beforeSend: function(request) { // Set JWT header
            request.setRequestHeader('X-Authorization', 'Bearer ' + store.JWT);
        }
    });
};
var enviarCarga = function (f) {
    // f.telefono
    // f.monto
    // f.rubros
    // f.id_cliente
    var date = new Date();
    var formattedDate = ('0' + date.getDate()).slice(-2);
    var formattedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
    var formattedYear = date.getFullYear().toString();
    var dateString = formattedMonth + "/" + formattedDate + "/" + formattedYear + " " + date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds();
    var fp = $("input[name='v_forma_pago']:checked").val();
    if (fp === undefined) {
        fp = 1;
    }
    var data = {
        cliente_id: f.id_cliente,
        comercio_id: store.idComercio,
        monto: f.monto,
        formapago_id: fp
    };

    $.ajax({
        url: serverAPI+"?action=add&object=compra",
        type: "POST",
        data: data,
        success: function(data, status, xhr) {
            if (data.success) {
                f.compra_id = data.compra.id;
                traerDatosClienteDeId(mostrarDatosCliente,store.tmp_cliente_id);
                cargaSi(f);
            } else {
                alert("ERROR en carga de compra");
            }                
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert("ERROR desconocido");
        },
        beforeSend: function(request) { // Set JWT header
            request.setRequestHeader('X-Authorization', 'Bearer ' + store.JWT);
        } 
    });
};

comprobarCredenciales = function (c) {
    //c.u = usuario
    //c.p = password
    //usuarioNo("mensaje");
    //usuarioSi();

    var data = 'username='+c.u+'&password='+c.p+'&action=login';
    $.post(serverAPI, data, function(data) {
        store.setJWT(data.JWT);
        usuarioSi();
    }).fail(function(xhr, status, error) {
        usuarioNo("Usuario o Contraseña no válidos "+error+"-"+status);
    });
    return false;
};


function cambioDeConexion() {
    procesarLoginDeLocal();
}

var procesarLoginDeLocal = function () {
    var c = {};
    c.p = window.localStorage.p;
    c.u = window.localStorage.u;
    $.post(serverAPI, 'username='+c.u+'&password='+c.p+'&action=login', function(data) {
        store.clear();
        store.setJWT(data.JWT);
        var data = {};
        data.action="list";
        data.object="comercio";
        $.ajax({
            url: serverAPI/*+"?action=list&object=comercio"*/,
            type: "POST",
            data: data,
            success: function(data, status, xhr) {
                var out = (data && typeof data === 'object') ? JSON.stringify(data) : data;
                if (data.success) {
                    store.setIDComercio(data.comercio[0].id);
                    $("#u_usuario").val("");
                    $("#p_pass").val("");
                    $("#i_ok_login").show();
                    $("#i_no_login").hide();
                    revisarNotificaciones();//corrida inicial
                    traerFormasDePago();
                } else {
                    store.clear();
                    window.localStorage.u = "";
                    $('#menu-login').show();
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                store.clear();
                $('#menu-login').show();
            },
            beforeSend: function(request) { // Set JWT header
                request.setRequestHeader('X-Authorization', 'Bearer ' + store.JWT);
            } 
        });
    }).fail(function(xhr, status, error) {
        store.clear();
        $('#menu-login').show();
    });
    return false;        
}
var traerTokenRegistro = function (cb) {
	$.ajax({
	        type:"get",
	        url:serverREMOTE+"register.php",
	        success: function (x,d) {
	                x=$(x);
	                token = x.find("input[name=\"token\"]").val();
	                cb(token);
	        }
	});
	return true;
}
var enviarRegistracion = function (token) {
	var data = {
		token: token,
		modal: 0,
		t: "comercio",
		action: "insert",
		x_nombre: $("#r_nombre").val(),
		x_direccion: $("#r_direccion").val(),
		x_nombre_remitente: $("#r_nombre").val(),
		x__email: $("#r_email").val(),
		x_nombre_owner: $("#r_nombre").val(),
		x_user: $("#r_usuario").val(),
		x_pass: $("#r_pass").val(),
		c_pass: $("#r_pass").val()
	};
	$.ajax({
	        type:"post",
	        data:data,
	        url:serverREMOTE+"register.php",
	        success: function (x,d) {
				window.alert("registrado correctamente");
                $('#menu-registracion').hide();
                $("#menu-registracion").removeClass("menu menu-scroll");
				$('#menu-login').show();
	        }
	});
}
