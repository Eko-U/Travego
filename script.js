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

///////////////////////////////////////////////////
// Smooth Scroll

nav.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    const scoord = document.querySelector(id).getBoundingClientRect();

    // window.scrollTo({
    //   left: scoord.left + window.pageXOffset,
    //   top: scoord.top + window.pageYOffset,
    //   behavior: 'smooth',
    // });

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////////////////
// Smooth Scroll to sidebar

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

/*
  Prevent default behavior for all links,
  just like to do 
*/

[...document.querySelectorAll('a')].forEach((el) =>
  el.addEventListener('click', function (e) {
    e.preventDefault();
  })
);

/////////////////////////////////////////
// Sticky Navigation

const hero = document.querySelector('.hero');
const navHeight = header.getBoundingClientRect().height;

const obsFunction = function (entries, observer) {
  const [entry] = entries;

  if (entry.isIntersecting) header.classList.remove('sticky');
  else header.classList.add('sticky');
};

const observer = new IntersectionObserver(obsFunction, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

observer.observe(hero);

////////////////////////////////////////
/// Modal box

const btnSignup = document.querySelector('.btn--register');
const formContainer = document.querySelector('.form__container');
const closeForm = document.querySelector('.form-close');

btnSignup.addEventListener('click', function (e) {
  e.preventDefault();

  console.log('click');

  overlay.classList.remove('hidden');
  formContainer.classList.remove('hidden');
});

closeForm.addEventListener('click', function (e) {
  overlay.classList.add('hidden');
  formContainer.classList.add('hidden');
});

/////////////////////////////////////////////
// Tabbed Component

const tabContainer = document.querySelector('.form__tabs');

tabContainer.addEventListener('click', function (e) {
  if (!e.target.classList.contains('form__tab')) return;
  console.log(e.target);

  console.log(document.querySelectorAll('.form__tab'));
  document
    .querySelectorAll('.form__tab')
    .forEach((t) => t.classList.remove('form__tab--active'));
  e.target.classList.add('form__tab--active');

  document
    .querySelectorAll('.form')
    .forEach((f) => f.classList.remove('form--active'));

  document
    .querySelector(`.form--${e.target.dataset.id}`)
    .classList.add('form--active');
});

/////////////////////////////////////
// Cookies

const html = `<div class="cookie"><span class="body-copy body-copy--small cookie--message">We can't help you book the perfect Trip without informations.</span><button class="btn cookie--btn">Got it !</button></div>`;

document.body.insertAdjacentHTML('afterend', html);
const cookie = document.querySelector('.cookie');
document.querySelector('.cookie--btn ').addEventListener('click', function (e) {
  e.preventDefault();
  // cookie.parentElement.removeChild(cookie);
  cookie.remove();
});

overlay.addEventListener('click', function () {
  overlay.classList.add('hidden');
  formContainer.classList.add('hidden');
  navMenu.classList.add('hidden');
});
