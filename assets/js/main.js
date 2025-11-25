/**
 * Template Name: Moderna - v2.0.0
 * Template URL: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function($) {
    "use strict";

    // Toggle .header-scrolled class to #header when page is scrolled
    var headerH = $('#header').height();
    /*$('section.Home').css('margin-top', headerH);

    $(window).on('load resize', function() {
        headerH = $('#header').height();
        $('section.Home').css('margin-top', headerH);
    });*/
    $(window).scroll(function() {
        headerH = $('#header').height();
        // $('section.Home').css('margin-top', headerH);
        if ($(this).scrollTop() > headerH + 50) {
            // $('body').addClass('header-scrolled');
        } else {
            $('body').removeClass('header-scrolled');
        }
    });

    $(document).on('click', '.nav-menu>ul>.drop-down', function() {
        //console.log($(this).find('ul').length);
        if ($(this).find('ul').length > 0) {
            if (!$(this).hasClass('hover')) {
                $('.nav-menu>ul>.drop-down').removeClass('hover');
                $(this).addClass('hover');
            } else {
                $(this).removeClass('hover');
            }
        }
    });

    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            e.preventDefault();
            var target = $(this.hash);
            if (target.length) {

                var scrollto = target.offset().top;
                var scrolled = 20;

                if ($('#header').length) {
                    scrollto -= $('#header').outerHeight()

                    if (!$('#header').hasClass('header-scrolled')) {
                        scrollto += scrolled;
                    }
                }

                if ($(this).attr("href") == '#header') {
                    scrollto = 0;
                }

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
                    $('.mobile-nav-overly').fadeOut();
                }
                return false;
            }
        }
    });

    // Mobile Navigation
    function loadMobileNav() {
        if ($('.nav-menu').length) {
            var $mobile_nav = $('.nav-menu').clone().prop({
                class: 'mobile-nav d-lg-none'
            });
            $('body').append($mobile_nav);
            $('body').append('<div class="mobile-nav-overly"></div>');

            $(document).on('click', '.mobile-nav-toggle', function(e) {
                $('body').toggleClass('mobile-nav-active');
                $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
                $('.mobile-nav-overly').toggle();
            });

            $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
                e.preventDefault();
                $(this).next().slideToggle(300);
                $(this).parent().toggleClass('active');
            });

            $(document).click(function(e) {
                var container = $(".mobile-nav, .mobile-nav-toggle");
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    if ($('body').hasClass('mobile-nav-active')) {
                        $('body').removeClass('mobile-nav-active');
                        $('.mobile-nav-toggle i').toggleClass('bx-menu bx-x');
                        $('.mobile-nav-overly').fadeOut();
                    }
                }
            });
        } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
            $(".mobile-nav, .mobile-nav-toggle").hide();
        }
        // Real view height for mobile devices
        if (window.matchMedia("(max-width: 767px)").matches) {
            $('#hero').css({
                height: $(window).height()
            });
        }
    }

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    $('.linkto').click(function(e) {
        e.preventDefault();
        let hid = $(this).attr('href');
        let htop = $(hid).offset();
        console.log(htop.top)
        $('html, body').animate({
            scrollTop: htop.top - 100
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // Initiate the venobox plugin
    $(window).on('load', function() {
        loadMobileNav();
    });

    // Initi AOS
    AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-in-out-back"
    });

    //footer dropdown-menu
    $('.toggle_menu').hover(function(){
        $(this).next().toggleClass('show');
    });
    $('footer .dropdown-menu').hover(function(){
        $(this).addClass('show');
    }, function(){
        $(this).removeClass('show');
    });

})(jQuery);