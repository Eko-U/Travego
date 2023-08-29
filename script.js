'use strict';

const sidebar = document.querySelector('.nav-menu-btn');
const header = document.querySelector('.header');
const navMenu = document.querySelector('.sidebar');
const sidebarClose = document.querySelector('.sidebar-close');
const overlay = document.querySelector('.overlay');

const nav = document.querySelector('.nav');
const sideMenu = document.querySelector('.sidebar-menu');

const btnHero = document.querySelector('.hero__btn');
const sectionDestination = document.querySelector('.section-destination');

sidebar.addEventListener('click', function () {
  navMenu.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
});

sidebarClose.addEventListener('click', function () {
  navMenu.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
});

// Get current year
const yearEl = [...document.querySelectorAll('.year')];
const curYear = new Date().getFullYear();
yearEl.forEach((el) => (el.textContent = curYear));

///////////////////////////////////////////////////
// scrollTo

btnHero.addEventListener('click', function (e) {
  e.preventDefault();

  const sectionBound = sectionDestination.getBoundingClientRect();

  window.scrollTo({
    left: sectionBound.left + window.pageXOffset,
    top: sectionBound.top + window.pageYOffset,
    behavior: 'smooth',
  });
});

// nav.addEventListener('click', function (e) {
//   e.preventDefault();

//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     const scoord = document.querySelector(id).getBoundingClientRect();

//     window.scrollTo({
//       left: scoord.left + window.pageXOffset,
//       top: scoord.top + window.pageYOffset,
//       behavior: 'smooth',
//     });
//   }
// });

nav.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    const scoord = document.querySelector(id).getBoundingClientRect();

    window.scrollTo({
      left: scoord.left + window.pageXOffset,
      top: scoord.top + window.pageYOffset,
      behavior: 'smooth',
    });
  }
});

const sideBarMenu = document.querySelector('.sidebar-menu');

sideBarMenu.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('sidebar__link')) {
    const id = e.target.getAttribute('href');
    const scoord = document.querySelector(id).getBoundingClientRect();

    console.log(id);

    window.scrollTo({
      left: scoord.left + window.pageXOffset,
      top: scoord.top + window.pageYOffset,
      behavior: 'smooth',
    });

    overlay.classList.add('hidden');
    navMenu.classList.add('hidden');
  }
});
sideMenu;
