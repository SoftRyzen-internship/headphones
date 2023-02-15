const logo = document.querySelector('.header .icon-logo-header')

logo.addEventListener('click', (e) => {
  e.preventDefault()
  location.reload()
})