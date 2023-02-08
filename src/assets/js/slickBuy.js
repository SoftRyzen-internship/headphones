import $ from 'jquery';
import 'slick-carousel';

$('.buy__slider-image').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  arrows: true,
  fade: true,
  asNavFor: '.buy__slider-nav',
});
$('.buy__slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  mobileFirst: true,
  asNavFor: '.buy__slider-image',
  dots: false,
  arrows: false,
  focusOnSelect: true,
});
