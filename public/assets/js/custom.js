jQuery(document).ready(function($) {
    AOS.init();

    $(".site-testimonial-slider").owlCarousel({
        margin: 10,
        loop: true,
        dots: true,
        nav: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true
    });

});


// Header
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 150) {
        jQuery('.header').addClass('fixed');
    } else {
        jQuery('.header').removeClass('fixed');
    }
});




// Loader

$(function() {
    $(window).on('load', function(e) {
        $('.loader-wrap').fadeOut();
    });
}());
