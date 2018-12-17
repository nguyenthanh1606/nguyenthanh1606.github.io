$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: true,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });
    $(document).ready(function () {
        $('.single-item').slick();
    });;
});

function pushMenuOpen(){
    let b = document.getElementById('menu-mobile');
    b.style.right = '0';
    let c = document.getElementById('hide-w');
    c.style.display = 'block';
}
function pushMenuClose(){
    let b = document.getElementById('menu-mobile');
    b.style.right = '-100%';
    let c = document.getElementById('hide-w');
    c.style.display = 'none';
}

$(document).ready(function(){

    //Check to see if the window is top if not then display button
    // $(window).scroll(function(){
    //     if ($(this).scrollTop() > 200) {
    //         $('.scrollToTop').fadeIn();
    //     } else {
    //         $('.scrollToTop').fadeOut();
    //     }
    // });

    //Click event to scroll to top
    // $('.scrollToTop').click(function(){
    //     $('html, body').animate({scrollTop : 0},500);
    //     return false;
    // });

    $('#hide-w').click(function(){
        $('#menu-mobile').css('right','-100%');
        $('#hide-w').css('display',('none'));
    });

});