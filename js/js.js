var pageHeader = document.querySelector('.page-header');
var mainNavigation = document.querySelector('.main-navigation');
var toggleNavigation = document.querySelector('.main-navigation__toggle');

pageHeader.classList.remove('page-header--nojs');
mainNavigation.classList.remove('main-navigation--nojs');


toggleNavigation.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }

  if (mainNavigation.classList.contains('main-navigation--closed')) {
    mainNavigation.classList.remove('main-navigation--closed');
    mainNavigation.classList.add('main-navigation--opened');
  } else {
    mainNavigation.classList.add('main-navigation--closed');
    mainNavigation.classList.remove('main-navigation--opened');
  }
});
