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
    speed: 900,
    cssEase: 'linear',
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0,
  });
}

// On slide change
$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  console.log(currentSlide);
  $('.slick-slide').removeClass('is-active');
  $('.slick-current').addClass('is-active');
});
