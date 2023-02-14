import $ from 'jquery';

$(document).ready(function () {
  $('.hero__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    speed: 500,
  });
});
