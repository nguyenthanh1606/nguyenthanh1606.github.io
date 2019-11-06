$(document).ready(function () {
    $('.list-htContact .collapse').collapse({ toggle: false });

    // get header height (without border)
    var getHeaderHeight = $('.headerContainerWrapper').outerHeight();

    // border height value (make sure to be the same as in your css)
    var borderAmount = 2;

    // shadow radius number (make sure to be the same as in your css)
    var shadowAmount = 30;

    // init variable for last scroll position
    var lastScrollPosition = 0;

    // set negative top position to create the animated header effect
    $('.headerContainerWrapper').css('top', '-' + (getHeaderHeight + shadowAmount + borderAmount) + 'px');

    $(window).scroll(function () {
        var currentScrollPosition = $(window).scrollTop();

        if ($(window).scrollTop() > 2 * (getHeaderHeight + shadowAmount + borderAmount)) {

            $('body').addClass('scrollActive').css('padding-top', getHeaderHeight);
            $('.pcx-2').addClass('show');
            $('.pcx').css('opacity', '0');

            $('.headerContainerWrapper').css('top', 0);

            if (currentScrollPosition < lastScrollPosition) {
                $('.headerContainerWrapper').css('top', '-' + (getHeaderHeight + shadowAmount + borderAmount) + 'px');
            }
            lastScrollPosition = currentScrollPosition;

        } else {
            $('.pcx').css({ 'opacity': '1', 'position': 'absolute' });
            $('body').removeClass('scrollActive').css('padding-top', 0);
            $('.pcx-2').removeClass('show');
        }
    });
});
$(document).ready(function () {
            var url = window.location;
            // Will only work if string in href matches with location
            $('.navbar-nav a[href="' + url + '"]').parents('li').addClass('active');

            // Will also work for relative and absolute hrefs
            $('.navbar-nav a').filter(function () {
                return this.href == url;
            }).parents('li').addClass('active');

            $(".lang a").removeAttr("data-ajax");

        });

var swiper = new Swiper('.slider-partner', {
    loop: true,
    speed: 1000,    
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.reviews-button-next',
        prevEl: '.reviews-button-prev',
    },
});

$(document).ready(function () {
    $('.widget-title').click(function () {
        $('#widget-booking').toggleClass("active");        
        $('.widget-title').toggleClass('hide');
        $('.widget-box').toggleClass('hide');
    });
});
//$(document).ready(function () {
//    var url = $(location).attr('href');
//    console.log(url);
//    if (url != 'http://bluediamondhotel.tabweb.vn') {
//        $('#widget-booking').addClass("active");
//        $('.widget-title').removeClass('hide');
//        $('.widget-box').removeClass('hide');
//    }
//});

$(window).scroll(function() {
    var $height = $(window).scrollTop();    
    if ($height > 300) {
        $('#widget-booking').removeClass("active");
        $('.widget-title').addClass('hide');
        $('.widget-box').addClass('hide');
    } else {
        $('#widget-booking').addClass("active");
        $('.widget-title').removeClass('hide');
        $('.widget-box').removeClass('hide');
    }
});

//$(document).ready(function () {
//    $('.widget-title').click(function () {
//        $('#widget-booking').toggleClass("active");
//        $('.widget-title').toggleClass('hide');
//        $('.widget-box').toggleClass('hide');
//    });
//});
function SignupNewsletterSuccess(data) {
    $('#singup-newsletter-area').html('<p class="text-left"> * ' + data.message + '</p>')
}

function ContactSuccess(data) {
    $('#contact-area').html('<p>' + data.msg + '</p>')
}

function ContactSuccess(result) {
    $('#alert-contact').text(result.msg);
}


$('#goTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
})


