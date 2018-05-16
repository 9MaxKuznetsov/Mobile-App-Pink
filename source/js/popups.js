var open = document.querySelector(".contest__submit");
var failure = document.querySelector(".pop-up--failure");
var success = document.querySelector(".pop-up--success");
var form = document.querySelector("form");
var fname = document.querySelector("[name=first-name]");
var lname = document.querySelector("[name=last-name]");
var email = document.querySelector("[name=e-mail]");
var sclose = document.querySelector(".pop-up__button--success");
var eclose = document.querySelector(".pop-up__button--failure");
form.addEventListener("submit", function (evt) {
  if (!fname.value || !lname.value || !email.value ) {
  evt.preventDefault();
  failure.classList.add("pop-up-show");
} else {
      evt.preventDefault();
      success.classList.add("pop-up-show");
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
