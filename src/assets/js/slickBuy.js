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
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
});

const colorBtnList = document.querySelector('.buy__color-list');
const buttons = document.querySelectorAll('button[data-color]');
const images = document.querySelectorAll('.buy__image');
const sources = document.querySelectorAll('.buy__slick-container source ');

const replacePartOfString = (string, searchStr, replaceStr) =>
  string.split(searchStr).join(replaceStr);

const replaceImgPath = (elemList, replaceAttr, searchStr, replaceStr) => {
  elemList.forEach(item => {
    item[replaceAttr] = replacePartOfString(item[replaceAttr], searchStr, replaceStr);
  });
};

const colorClickHandler = e => {
  const clickedButton = e.target;
  if (
    !clickedButton.classList.contains('buy__color-button') |
    clickedButton.classList.contains('current')
  ) {
    return;
  } else {
    const clickedColor = e.target.dataset.color;
    let oldColor = '';
    buttons.forEach(button => {
      if (button.classList.contains('current')) {
        button.classList.remove('current');
        oldColor = button.dataset.color;
      }
    });
    clickedButton.classList.add('current');

    replaceImgPath(sources, 'srcset', oldColor, clickedColor);
    replaceImgPath(images, 'src', oldColor, clickedColor);
  }
};

colorBtnList.addEventListener('click', colorClickHandler);
