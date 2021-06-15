const navbar = document.querySelector('.navbar')
document.addEventListener('scroll', () => {
  if (window.innerWidth < 992) {
    navbar.style.backgroundColor = '#072753f2'
  }
  else if (window.scrollY > window.innerHeight / 2) {
    navbar.style.backgroundColor = '#072753f2'
  } else {
    navbar.style.backgroundColor = 'transparent'
  }
})
