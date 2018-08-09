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
      