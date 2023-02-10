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
  slidesToShow: 3,
  slidesToScroll: 1,
  mobileFirst: true,
  asNavFor: '.buy__slider-image',
  dots: false,
  arrows: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1444,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
});

const buttons = document.querySelectorAll('button[data-color]');
const images = document.querySelectorAll('.buy__image');
const sources = document.querySelectorAll('.buy__slick-container source ');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    let oldColor = '';
    if (button.classList.contains('current')) {
      return;
    } else {
      buttons.forEach(button => {
        if (button.classList.contains('current')) {
          button.classList.remove('current');
          oldColor = button.dataset.color;
        }
      });
      event.target.classList.add('current');
      const clickedColor = event.target.dataset.color;

      sources.forEach(source => {
        source.srcset = replaceAll(source.srcset, oldColor, clickedColor);
      });

      images.forEach(img => {
        img.src = replaceAll(img.src, oldColor, clickedColor);
      });
      $('.buy__slider-nav').slick('refresh');
    }
  });
});

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}
