let navbar = document.querySelector('.navbar');
let burger = document.querySelector('.burger-nav');
let nav = document.querySelector('.nav');

let products = document.querySelector('.nav .products');
let navProducts = document.querySelector('.nav-products');

let filterNav = document.querySelector('.filter-nav');

burger.addEventListener('click', function () {
  if (nav.style.display == 'none') {
    nav.style.display = 'block';
    filterNav.style.display = 'block';
    burger.style.color = '#FFF';
  } else {
    nav.style.display = 'none';
    filterNav.style.display = 'none';
    burger.style.color = 'rgb(20, 20, 20)';
  }
});

window.addEventListener('resize', function () {
  if (window.innerWidth >= 950) {
    nav.style.display = 'block';
  }

  if (window.innerWidth <= 950) {
    nav.style.display = 'none';
  }
})