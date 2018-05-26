var burger = document.querySelector(".site-list-actions__close");
var header = document.querySelector(".page-header");
var sitelist = document.querySelector(".site-list");
var wrapper = document.querySelector(".page-header-wrapper");
var menu = document.querySelector(".site-list-actions__menu");
var def = document.querySelector(".page-header--default");
var hand = document.querySelector(".page-header--hand");
var cross = document.querySelector(".site-list-actions__close-image--close");
var hamburger = document.querySelector(".site-list-actions__close-image--hamburger");

var menutoggle = function() {
  sitelist.classList.toggle("site-list--show");
  header.classList.toggle("page-header--show");
  burger.classList.toggle("site-list-actions__close--show");
  wrapper.classList.toggle("page-header-wrapper--show");
  menu.classList.toggle("site-list-actions__menu--open");
  hamburger.classList.toggle("site-list-actions__close-image--hamburger-hidden");
};

menutoggle();
burger.addEventListener('click', function () {
  menutoggle();
  cross.classList.toggle("site-list-actions__close-image--close-hidden");
  if (def) {
    def.classList.toggle("page-header--show-default");
  };

  if (hand) {
    hand.classList.toggle("page-header--show-hand");
  };
});
