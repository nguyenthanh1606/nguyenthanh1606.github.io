function pushMenu(){
    var a = document.getElementById('menuPush');
    var b = document.getElementById('menu-mobile');
    if(a.style.left == '0px'){
        a.style.left = '218px';
        b.style.left = '0';
    }
    else{
        a.style.left = '0px';
        b.style.left = '-100%';
    }

    var x = document.getElementById('ico-bar');
    if(x.classList[1] == 'fa-bars'){
        x.classList.remove('fa-bars');
        x.classList.add('fa-times');
    }
    else{
        x.classList.remove('fa-times');
        x.classList.add('fa-bars');
    }
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
        $('#menu-mobile').css('left','-100%');
        $('#hide-w').css('display',('none'));
    });

});