import $ from 'jquery';

$(document).ready(function () {
  const openPopupBtn = document.querySelectorAll('.send__btn');
  const popup = document.querySelector('[data-popup]');
  const closePopupBtn = document.querySelector('[data-popup-close]');
  const body = document.querySelector('body');
  const backdrop = document.querySelector('.backdrop-popup');

  openPopupBtn.forEach(function (btn) {
    btn.addEventListener('click', e => {
      e.preventDefault();
      // setTimeout(() => {
      toggleModal();
      // }, 500);
    });
  });

  function toggleModal() {
    popup.classList.toggle('is-hidden');
    body.classList.toggle('scroll-hidden');
  }

  function handleKey(e) {
    if (!popup.classList.contains('is-hidden')) {
      if (e.key === 'Escape') {
        toggleModal();
      }
    }
    return;
  }

  function handleClose(e) {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
    return;
  }

  document.addEventListener('keydown', handleKey);
  backdrop.addEventListener('mousedown', handleClose);
  closePopupBtn.addEventListener('click', toggleModal);
});
