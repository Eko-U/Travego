'use strict';

const sidebar = document.querySelector('.nav-menu-btn');
const header = document.querySelector('.header');
const navMenu = document.querySelector('.sidebar');
const sidebarClose = document.querySelector('.sidebar-close');
const overlay = document.querySelector('.overlay');

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
