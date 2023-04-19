const mainHeader = document.querySelector('.main-header');
const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const headerLogo = document.querySelector('.main-header__link-logo');
const mainBlock = document.querySelector('.main-block__wrapper');
const navList = document.querySelector('.main-nav__list');
const headerWrapper = document.querySelector('.main-header__wrapper');
const navWrapper = document.querySelector('.main-nav__wrapper');

mainHeader.classList.remove('main-header--nojs');
mainNav.classList.remove('main-nav--nojs');

// Функция закрытия меню
const closesMenu = () => {
  mainNav.classList.add('main-nav--closed');
  mainNav.classList.remove('main-nav--opened');
  headerLogo.classList.remove('main-header__link-logo--opened-mobile');
  mainBlock.classList.remove('main-block__wrapper--opened-mobile');
  document.body.style.overflow = '';
};

const menu = () => {
  navToggle.addEventListener('click', () => {
    if (mainNav.classList.contains('main-nav--closed')) {
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--opened');
      headerLogo.classList.add('main-header__link-logo--opened-mobile');
      mainBlock.classList.add('main-block__wrapper--opened-mobile');
      document.body.style.overflow = 'hidden';
      navWrapper.style.overflow = 'auto';
    } else {
      closesMenu();
    }
  });
};

// Скрывает в mobile меню при нажатии на ссылку
const hidesMenu = () => {
  navList.addEventListener('click', () => {
    if (mainNav.classList.contains('main-nav--opened')) {
      closesMenu();
    }
  });
};

// Скрывает в mobile меню при нажатии на overlay
const hidesMenuOverlay = () => {
  headerWrapper.addEventListener('click', (evt) => {
    let target = evt.target;
    if (mainNav.classList.contains('main-nav--opened') && !target.classList.contains('main-nav__wrapper') && !target.classList.contains('main-nav__toggle')) {
      closesMenu();
    }
  });
};

export {menu, hidesMenu, hidesMenuOverlay};
