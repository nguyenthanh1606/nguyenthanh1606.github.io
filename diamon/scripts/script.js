var swiper = new Swiper('.slider-partner', {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 2,
        }
    }
});
