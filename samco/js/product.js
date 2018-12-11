$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        navText: ["<img src='images/sanpham/arrow-pre.png'>","<img src='images/sanpham/arrow-next.png'>"],
        responsive:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $(document).ready(function(){
        $('.single-item').slick();
      });;
      var fixMenu = $('.menu').offset().top;
      $(window).on('scroll',function(){
          if($(window).scrollTop() > fixMenu){
              $('.menu').addClass('is-fixed');
          }
          else{
            $('.menu').removeClass('is-fixed');
          }
      })
});