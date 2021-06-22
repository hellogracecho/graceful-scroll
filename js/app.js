// *** Slick Slider ***
let $slider = $('.js-slider');

if ($slider.length) {
  $slider.slick({
    arrows: true,
    prevArrow: $slider
      .siblings('.js-options-slider-nav')
      .children('.js-options-slider-prev'),
    nextArrow: $slider
      .siblings('.js-options-slider-nav')
      .children('.js-options-slider-next'),
    fade: true,
    speed: 700,
    cssEase: 'linear',
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0,
  });
}
