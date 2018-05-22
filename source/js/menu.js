var burger = document.querySelector(".site-list-actions__close");
var header = document.querySelector(".page-header");
var sitelist = document.querySelector(".site-list");
var wrapper = document.querySelector(".page-header-wrapper");
var menu = document.querySelector(".site-list-actions__menu");


var menutoggle = function() {
  sitelist.classList.toggle("site-list--show");
  header.classList.toggle("page-header--show");
  burger.classList.toggle("site-list-actions__close--show");
  wrapper.classList.toggle("page-header-wrapper--show");
  menu.classList.toggle("site-list-actions__menu--open");
};

menutoggle();
burger.addEventListener('click', function () {
  menutoggle();
  menu.classList.toggle("site-list-actions__menu--no-cross");
});
