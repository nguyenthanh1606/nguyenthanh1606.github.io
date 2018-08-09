window.onscroll = function() {fixed()};
var header = document.getElementById("menu");
var sticky = header.offsetTop;
function fixed() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},500);
        return false;
    });

    $('#hide').click(function(){
        $('#menu-mobile').css('left','-100%');
        $('#hide').css('display',('none'));
    });

});
function search(){
    let search = document.getElementById('ico-search');
    let formsearch = document.getElementById('fsearch');
    if(search.classList == 'fas fadeIn fa-search')
    {
        search.classList.remove('fa-search');
        search.classList.add('fa-times');
        formsearch.classList.remove('searchOff');
        formsearch.classList.add('searchOn');        
    }
    else{
        search.classList.remove('fa-times');
        search.classList.add('fa-search');
        formsearch.classList.remove('searchOn');
        formsearch.classList.add('searchOff');        
    }
} 

function pushMenuOpen(){
    let b = document.getElementById('menu-mobile');
    b.style.left = '0';
    let c = document.getElementById('hide');
    c.style.display = 'block';
}
function pushMenuClose(){
    let b = document.getElementById('menu-mobile');
    b.style.left = '-100%';
    let c = document.getElementById('hide');
    c.style.display = 'none';
}
function searchmb(){
    let fsearch = document.getElementById('search-mobi');
    let icoSearch = document.getElementById('ico-s');
    if(fsearch.classList == 'form-control sOn')
    {
        fsearch.classList.remove('sOn');
        fsearch.classList.add('sOff');
        icoSearch.classList.remove('fa-search');
        icoSearch.classList.add('fa-times');
    }
    else{
        fsearch.classList.remove('sOff');
        fsearch.classList.add('sOn');
        icoSearch.classList.remove('fa-times');
        icoSearch.classList.add('fa-search');
    }
}