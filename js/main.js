$(function () {

    // HEADER SLIDER    START

    $('.header-slider').slick({
        dots: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
        vertical: true,
        verticalSwiping: true,
        responsive: [{
            breakpoint: 361,
            settings: {
                arrows: false,
                dots: false,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    });

    // HEADER SLIDER    END

    // PRODUCT SLIDER    START

    $('.product__name').slick({
        slidesToShow: 4.5,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        // infinite: true,
        prevArrow: '<button type="button" class="prod-prev"><img src="images/prod-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="prod-next"><img src="images/prod-next.svg" alt=""></button>',
        responsive: [{
                breakpoint: 891,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            },
        ]
    });

    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.product__name',
    });

    // PRODUCT SLIDER    END

    // MENU BURGER START

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active')
    });

    // MENU BURGER END


});