const refs = {
  list: document.querySelector('.hero__slider-list'),
  items: document.querySelectorAll('.hero__slider-item'),
  img: document.querySelectorAll('.hero__img'),
};

let existingImg = refs.img[0];
let exitingItem = refs.items[0];

const handleClick = e => {
  const { img } = refs;
  const expr = e.target.getAttribute('data-action');

  switch (expr) {
    case 'blue':
      if (!e.target.classList.contains('hero__slider-item-active')) {
        e.target.style.setProperty('--border', '1px solid #14709E');
        e.target.classList.add('hero__slider-item-active');
        exitingItem.classList.remove('hero__slider-item-active');
        exitingItem = e.target;
      }

      existingImg.classList.add('visually-hidden');
      img[0].classList.remove('visually-hidden');
      existingImg = img[0];

      break;

    case 'pink':
      if (!e.target.classList.contains('hero__slider-item-active')) {
        e.target.style.setProperty('--border', '1px solid #7a0554');
        e.target.classList.add('hero__slider-item-active');
        exitingItem.classList.remove('hero__slider-item-active');
        exitingItem = e.target;
      }

      existingImg.classList.add('visually-hidden');
      img[1].classList.remove('visually-hidden');
      existingImg = img[1];

      break;

    case 'black':
      if (!e.target.classList.contains('hero__slider-item-active')) {
        e.target.style.setProperty('--border', '1px solid #000');
        e.target.classList.add('hero__slider-item-active');
        exitingItem.classList.remove('hero__slider-item-active');
        exitingItem = e.target;
      }

      existingImg.classList.add('visually-hidden');
      img[2].classList.remove('visually-hidden');
      existingImg = img[2];

      break;

    case 'violet':
      if (!e.target.classList.contains('hero__slider-item-active')) {
        e.target.style.setProperty('--border', '1px solid #823FBD');
        e.target.classList.add('hero__slider-item-active');
        exitingItem.classList.remove('hero__slider-item-active');
        exitingItem = e.target;
      }

      existingImg.classList.add('visually-hidden');
      img[3].classList.remove('visually-hidden');
      existingImg = img[3];

      break;

    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
};

refs.list.addEventListener('click', handleClick);

// import $ from "jquery";
// import 'slick-carousel';

// $('.hero-carousel').slick({
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   dots: true,
//   fade: true,
//   cssEase: 'linear',
//   speed: 500,
//   variableWidth: true,
// });
