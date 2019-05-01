$(document).ready(function () {
    /* js scroll top */
    jQuery(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').addClass('show');
        } else {
            $('.scrollToTop').removeClass('show');
        }
    });
    //Click event to scroll to top
    jQuery('.scrollToTop').on('click', function () {
        jQuery("html, body").animate({ scrollTop: 0 }, "slow");
    });
});