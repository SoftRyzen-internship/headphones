import $ from 'jquery';

$(document).ready(function () {
  const openPopupSocial = document.querySelectorAll(
    '.footer-social__list-link, .footer-contacts__list-item',
  );
  const popupSocial = document.querySelector('[data-popup-social]');
  const closePopupBtnSocial = document.querySelector('[data-popup-close-social]');
  const body = document.querySelector('body');
  const backdropSocial = document.querySelector('.backdrop-popup-social');

  openPopupSocial.forEach(function (social) {
    social.addEventListener('click', e => {
      e.preventDefault();
      toggleModalSocial();
    });
  });

  function toggleModalSocial() {
    popupSocial.classList.toggle('is-hidden');
    body.classList.toggle('scroll-hidden');
  }

  function handleKeySocial(e) {
    if (!popupSocial.classList.contains('is-hidden')) {
      if (e.key === 'Escape') {
        toggleModalSocial();
      }
    }
    return;
  }

  function handleCloseSocial(e) {
    if (e.target === e.currentTarget) {
      toggleModalSocial();
    }
    return;
  }

  document.addEventListener('keydown', handleKeySocial);
  backdropSocial.addEventListener('mousedown', handleCloseSocial);
  closePopupBtnSocial.addEventListener('click', toggleModalSocial);
});
