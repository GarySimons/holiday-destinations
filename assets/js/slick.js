//main banner slider

$('.main-body__slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay: true,
  autoplaySpeed: 6000,
  arrows: false,
  dots: false,
  rows: 0
});

//holiday packages slider

$('.packages__slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 6000,
    dots: false,
    arrows: false,
    rows: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        },
        ]
});

//about us -- testemonials slider

$('.main-body__about-us__slick').slick({
    centerMode: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    focusOnSelect: false,
    responsive: [
        {
            breakpoint: 830,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
            }
        }
    ]
});