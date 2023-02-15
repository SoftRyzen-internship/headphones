import $ from 'jquery';

$(document).ready(function () {
  const openPopupBtn = document.querySelectorAll('.send__btn');
  const popup = document.querySelector('.popup');
  const closePopupBtn = document.querySelector('[data-popup-close]');
  const body = document.querySelector('body');
  const modal = document.querySelector('[data-modal]');
  const modalWindow = document.querySelector('.modal');

  openPopupBtn.forEach(function (btn) {
    btn.addEventListener('click', e => {
      e.preventDefault();

      modalWindow.classList.toggle('is-hidden');

      togglePopup();
    });
  });

  function togglePopup() {
    popup.classList.toggle('is-hidden');
    body.classList.toggle('scroll-hidden');
  }

  function closePopup() {
    togglePopup();
    modal.classList.add('is-hidden');
  }

  closePopupBtn.addEventListener('click', closePopup);
});
