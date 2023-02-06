import $ from 'jquery';
import 'slick-carousel';

window.jQuery = window.$ = $;

$(document).ready(function () {
  $('.slider-image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-image',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
  });
});
