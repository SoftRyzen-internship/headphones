import $ from 'jquery';

$(document).ready(function () {
  const openModalBtn = document.querySelectorAll('.buy__btn');
  const modal = document.querySelector('[data-modal]');
  const modalWindow = document.querySelector('.modal');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const body = document.querySelector('body');
  const backdrop = document.querySelector('.backdrop');
  const sendBtn = document.querySelector('.send__btn');
  const popup = document.querySelector('.popup');

  const form = document.getElementById('form');
  const username = document.getElementById('name');
  const phone = document.getElementById('telephone');

  openModalBtn.forEach(function (btn) {
    btn.addEventListener('click', e => {
      e.preventDefault();

      //remove values in form
      form[0].value = '';
      form[1].value = '';
      //remove success and error classes
      username.parentElement.classList.remove('success');
      username.parentElement.classList.remove('error');
      phone.parentElement.classList.remove('success');
      phone.parentElement.classList.remove('error');

      toggleModal();
    });
  });

  function toggleModal() {
    modal.classList.toggle('is-hidden');
    modalWindow.classList.toggle('is-hidden');
    body.classList.toggle('scroll-hidden');
  }

  function togglePopup() {
    popup.classList.toggle('is-hidden');
    body.classList.toggle('scroll-hidden');
  }

  function handleKey(e) {
    if (
      !modal.classList.contains('is-hidden') &&
      !modalWindow.classList.contains('is-hidden') &&
      popup.classList.contains('is-hidden')
    ) {
      if (e.key === 'Escape') {
        toggleModal();
      }
    }

    if (
      !modal.classList.contains('is-hidden') &&
      modalWindow.classList.contains('is-hidden') &&
      !popup.classList.contains('is-hidden')
    ) {
      if (e.key === 'Escape') {
        modal.classList.add('is-hidden');
        togglePopup();
      }
    }
    return;
  }

  function handleClose(e) {
    if (e.target === e.currentTarget && popup.classList.contains('is-hidden')) {
      toggleModal();
    }

    if (e.target === e.currentTarget && !popup.classList.contains('is-hidden')) {
      modal.classList.add('is-hidden');
      togglePopup();
    }
    return;
  }

  document.addEventListener('keydown', handleKey);
  backdrop.addEventListener('mousedown', handleClose);
  closeModalBtn.addEventListener('click', toggleModal);
});

/*
import $ from 'jquery';

$(document).ready(function () {
  const openModalBtn = document.querySelectorAll('.buy__btn');
  const modal = document.querySelector('[data-modal]');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const body = document.querySelector('body');
  const backdrop = document.querySelector('.backdrop');
  const sendBtn = document.querySelector('.send__btn');

  const form = document.getElementById('form');
  const username = document.getElementById('name');
  const phone = document.getElementById('telephone');

  openModalBtn.forEach(function (btn) {
    btn.addEventListener('click', e => {
      e.preventDefault();

      //remove values in form
      form[0].value = '';
      form[1].value = '';
      //remove success and error classes
      username.parentElement.classList.remove('success');
      username.parentElement.classList.remove('error');
      phone.parentElement.classList.remove('success');
      phone.parentElement.classList.remove('error');

      toggleModal();
    });
  });

  function toggleModal() {
    modal.classList.toggle('is-hidden');
    body.classList.toggle('scroll-hidden');
  }

  function handleKey(e) {
    if (!modal.classList.contains('is-hidden')) {
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
  closeModalBtn.addEventListener('click', toggleModal);
  sendBtn.addEventListener('click', toggleModal);
});
*/
