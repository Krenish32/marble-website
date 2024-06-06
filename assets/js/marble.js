
//   Hero Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    fadeEffect: {
        crossFade: true,
    },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class=" hero-swiper-counter-total  ' + totalClass + '"></span>' +
                '<span class=" hero-swiper-counter-current ' + currentClass + '"></span>';
        }
    },
    speed: 1800,
});


//   Brand icon Swiper
var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 2,
    spaceBetween: 5,
    loop: true,
    watchOverflow: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    breakpoints: {
        500: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        770: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        990: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 60,
        },
    },
});

//   Product Swiper
var swiper = new Swiper(".mySwiper3", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        770: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

//   project Swiper
var swiper = new Swiper(".mySwiper4", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//   teamcard Swiper
var swiper = new Swiper(".teamcardSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});

//   testimonialcard Swiper
var swiper = new Swiper(".testimonialcardSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: false,
    loop: true,

    autoplay: {
        delay: 250000000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        220: {
            slidesPerView: 1,
        },
        996: {
            slidesPerView: 2,
        },
    }
});