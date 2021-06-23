// *** Slick Slider ***
const $slider = $('.js-slider');

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

// Add item box images to trigger slick as well
const updateNavWithImages = () => {
  let curr = $('.js-slider__single.slick-current');
  /* check if there is previous sibling, otherwise get last "a" in previous "LI"*/
  let prev = curr.prev().length
    ? curr.prev()
    : curr.parent().find('.js-slider__single').last();
  let next = curr.next().length
    ? curr.next()
    : curr.parent().find('.js-slider__single').first();

  const newPrevHtml = prev.find('.item__img').data('item-nav');
  const newNextHtml = next.find('.item__img').data('item-nav');
  $('#item-nav__prev').html('<img src = "' + newPrevHtml + '" />');
  $('#item-nav__next').html('<img src = "' + newNextHtml + '" />');
};

// Init the function
updateNavWithImages();

// Add slick method on the nav images
$('#item-nav__prev').on('click', function () {
  $slider.slick('slickPrev');
});
$('#item-nav__next').on('click', function () {
  $slider.slick('slickNext');
});

// Run the function when slick is fired
$slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
  console.log('slick fired');
  updateNavWithImages();
});
