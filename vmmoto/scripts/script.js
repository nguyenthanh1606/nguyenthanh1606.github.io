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
