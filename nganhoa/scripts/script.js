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

//color ramdom
var randomColor = Math.floor(Math.random()*16777215).toString(16);

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