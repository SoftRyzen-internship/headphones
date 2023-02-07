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

// const productsList = document.querySelector('.products__list');
// const productsItem = document.querySelectorAll('.products__item');

// const addSlickCarousel = () => {
//   if(window.innerWidth <= 767){
//     productsList.classList.add('slick-carousel');
//     productsItem.forEach(item => item.classList.add('slick-slide'))

//     $('.slick-carousel').slick({
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: true,
//       dots: true,
//       fade: true,
//       cssEase: 'linear',
//       speed: 500,
//     });
//   }

//   if(window.innerWidth >= 768){
//     productsList.classList.remove('slick-carousel');
//     productsItem.forEach(item => item.classList.remove('slick-slide'))
//   }
// }

// window.addEventListener('resize', addSlickCarousel)