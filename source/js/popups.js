var open = document.querySelector(".contest__submit");
var failure = document.querySelector(".pop-up--failure");
var success = document.querySelector(".pop-up--success");
var center = document.querySelector(".pop-up-center");
var form = document.querySelector("form");
var fname = document.querySelector("[name=first-name]");
var lname = document.querySelector("[name=last-name]");
var email = document.querySelector("[name=e-mail]");
var sclose = document.querySelector(".pop-up__button--success");
var eclose = document.querySelector(".pop-up__button--failure");
form.addEventListener("submit", function (evt) {
  if (!fname.value || !lname.value || !email.value ) {
  evt.preventDefault();
  email.classList.add("form__text-input--required");
  lname.classList.add("form__text-input--required");
  fname.classList.add("form__text-input--required");
  failure.classList.add("pop-up-show");
  lname.classList.add("error");
  email.classList.add("error");
} else {
      evt.preventDefault();
      success.classList.add("pop-up-show");
      email.classList.remove("form__text-input--required");
      lname.classList.remove("form__text-input--required");
      fname.classList.remove("form__text-input--required");
}
});
if (eclose) {
  eclose.addEventListener("click", function (evt) {
      evt.preventDefault();
      failure.classList.remove("pop-up-show");
    });
};

if (sclose) {
  sclose.addEventListener("click", function (evt) {
      evt.preventDefault();
      success.classList.remove("pop-up-show");
    });
};
