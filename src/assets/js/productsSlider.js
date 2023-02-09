import $ from "jquery";
import 'slick-carousel';

$('.slick-carousel').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  fade: true,
  cssEase: 'linear',
  speed: 500,
});