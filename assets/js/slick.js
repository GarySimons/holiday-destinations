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
                slidesToShow: 4
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