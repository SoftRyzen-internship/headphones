(() => {
  const openMenuBtn = document.querySelector('[data-menu-btn]');
  const mobileMenu = document.querySelector('[data-menu]');
  const btnMenuClose = document.querySelector('[data-menu-close-btn]');
  const body = document.querySelector('body');
  const menuLink = document.querySelectorAll('.mobile-menu .nav-link');

  openMenuBtn.addEventListener('click', () => {
    toggleMenu();
    // adds a listener to close btn
    btnMenuClose.addEventListener('click', toggleMenu);
  });

  menuLink.forEach(function (link) {
    link.addEventListener('click', () => {
      toggleMenu();
    });
  });

  function toggleMenu() {
    if (window.innerWidth < 768) {
      const expanded = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;

      openMenuBtn.classList.toggle('is-active');
      openMenuBtn.setAttribute('aria-expanded', !expanded);

      mobileMenu.classList.toggle('is-open');
      body.classList.toggle('scroll-hidden');
    }

    // removes a listener to close btn
    btnMenuClose.removeEventListener('click', toggleMenu);
  }
})();
