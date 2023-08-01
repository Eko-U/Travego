'use strict';

const sidebar = document.querySelector('.nav-menu-btn');
const navMenu = document.querySelector('.sidebar');
const sidebarClose = document.querySelector('.sidebar-close');
console.log(sidebar);

sidebar.addEventListener('click', function () {
  navMenu.classList.toggle('hidden');
});

sidebarClose.addEventListener('click', function () {
  navMenu.classList.toggle('hidden');
});
