'use strict';

(function() {

  var buttonFeedback = document.querySelector(".js__btn");
  var modalWindow = document.querySelector(".modal-feedback");
  var screenCover = document.querySelector(".modal__overlay");
  var buttonFeedbackClose = modalWindow.querySelector(".modal-btn__close");

  buttonFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    screenCover.classList.add("modal__overlay--show");
    modalWindow.classList.add("modal-feedback--show");
  });

  buttonFeedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    screenCover.classList.remove("modal__overlay--show");
    modalWindow.classList.remove("modal-feedback--show");
  });

  screenCover.addEventListener("click", function (evt) {
    evt.preventDefault();
    screenCover.classList.remove("modal__overlay--show");
    modalWindow.classList.remove("modal-feedback--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalWindow.classList.contains("modal-feedback--show")) {
        screenCover.classList.remove("modal__overlay--show");
        modalWindow.classList.remove("modal-feedback--show");
      }
    }
  })
})();
