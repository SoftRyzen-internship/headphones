import $ from 'jquery';
import 'slick-carousel';

window.jQuery = window.$ = $;

$(document).ready(function () {
  $('.buy__slider-image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.buy__slider-nav',
  });
  $('.buy__slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.buy__slider-image',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
  });
});
