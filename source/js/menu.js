var burger = document.querySelector(".site-list-actions__close");
var burgerindex = document.querySelector(".site-list-actions__button--index");
var header = document.querySelector(".page-header");
var handh = document.querySelector(".page-header--hand");
var sitelist = document.querySelector(".site-list");
var actions = document.querySelector(".site-list-actions");
var wrapper = document.querySelector(".page-header-wrapper");
var btn = document.querySelector(".site-list-actions__button");
var menu = document.querySelector(".site-list-actions__menu");

btn.addEventListener('click', function() {
  menu.classList.toggle("site-list-actions__menu--open");
})

if (burger) {
  burger.addEventListener("click", function (evt) {
      evt.preventDefault();
      sitelist.classList.toggle("site-list--show");
      header.classList.toggle("page-header--show");
      actions.classList.toggle("site-list-actions--show");
      burger.classList.toggle("site-list-actions__close--show");
      wrapper.classList.toggle("page-header-wrapper--show");
    });
};

var phhand = document.querySelector(".page-header__hand");
if (burgerindex) {
  burger.addEventListener("click", function(evt) {
    evt.preventDefault();
    phhand.classList.toggle("page-header__hand--show");
    handh.classList.toggle("page-header--hand-show");
  });
};
