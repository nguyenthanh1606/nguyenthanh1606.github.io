// buttom search
$("#search-btn").click(function(){
    if($("#search-btn i").hasClass("fa-search")){                
        $("#search-btn i").removeClass("fa-search");
        $("#search-btn i").addClass("fa-times");
        $("#search-form").addClass("show");                
    }
    else{
        $("#search-btn i").addClass("fa-search");
        $("#search-btn i").removeClass("fa-times");
        $("#search-form").removeClass("show");
    }
});


$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

$('.groupMenu').slick({
    dots: false,
    loop: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true
});

//popup images
$(document).ready(function(){
            
    $('.p-content').on('click', function(){
        open($(this));
    });

    $(document).on('click', '.popup img', function(){
        return false;
    }).on('click', '.popup', function(){
        close();
    });

    function open($content){
        $('.container').addClass('pop');
        var $gallery = $content.clone().prop({class:'popup'});
        $('body').append($gallery);
        $gallery.append('<div class="close-btn"><i class="icon-cancel"></i></div>');
        $gallery.children().wrapAll("<article></article>");
        
        setTimeout(function(){
            $('.popup').addClass('pop');
        }, 100);
    }
    function close(){
        var $closer = $('article').find('img, .close-btn');
        $closer.addClass('closepopup');
        setTimeout(function(){
            $('.container').removeClass('pop');
            $('.popup').remove()
        }, 200);
    }
})

//menu mobile
function pushMenu(){
    var a = document.getElementById('menuPush');
    var b = document.getElementById('menu-mobile');
    if(a.style.left == '0px'){
        a.style.left = '-218px';
        b.style.right = '0';
    }
    else{
        a.style.left = '0px';
        b.style.right = '-100%';
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

// window.onscroll = function() {myFunction()};
// var header = document.getElementById("menu-pro");
// var sticky = $('.header').height() + $('#banner').height();
// var foo = $('html').height() - $('footer').height() - header.offsetHeight;
// function myFunction() {
//     if (window.pageYOffset > sticky && window.pageYOffset < foo) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// }

// var elem = document.querySelector('.m-p-g');

// document.addEventListener('DOMContentLoaded', function() {
//     var gallery = new MaterialPhotoGallery(elem);
// });

// var sliderIndex = 1;
// showSlides(sliderIndex);

// //next/pre controls
// function plusSlide(n){
//     showSlides(sliderIndex+=n);
// }

// // thumbnail image controls
// function currentSlide(n){
//     showSlides(sliderIndex=n)
// }

// //main showslider
// function showSlides(n){
//     var i;
//     var slides = document.getElementsByClassName("mySliders");
//     var dots = document.getElementsByClassName("dot");


//     for(i = 0; i < slides.length; i++){
//         slides[i].style.display = "none";
//     }

//     for(i = 0; i < dots.length; i++){
//         dots[i].className = dots[i].className.replace(" active","");
//     }

//     slides[sliderIndex - 1].style.display = "block";
//     dots[sliderIndex - 1].className += " active";

//     if(sliderIndex == 1){
//         document.getElementsByClassName("pre")[0].style.display = "none";
//     }
//     else{
//         document.getElementsByClassName("pre")[0].style.display = "block";
//     }
    
//     if(sliderIndex == slides.length){
//         document.getElementsByClassName("next")[0].style.display = "none";
//     }
//     else{
//         document.getElementsByClassName("next")[0].style.display = "block";
//     }
// }

