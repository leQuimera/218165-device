'use strict';

(function() {

  var buttonFeedback = document.querySelector(".js__btn");
  var buttonMap = document.querySelector(".info__map");
  var modalWindow = document.querySelector(".modal-feedback");
  var mapWindow = document.querySelector(".modal-map");
  var screenCover = document.querySelector(".modal__overlay");
  var buttonFeedbackClose = modalWindow.querySelector(".modal-btn__close");
  var buttonMapClose = mapWindow.querySelector(".modal-btn__close");

  var closeWindow = function (obj) {
    if (obj === 'feedback') {
      modalWindow.classList.remove("modal-feedback--show");
    }
    if (obj === 'map') {
      mapWindow.classList.remove("modal-map--show");
    }
    screenCover.classList.remove("modal__overlay--show");
  };

  buttonFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    screenCover.classList.add("modal__overlay--show");
    modalWindow.classList.add("modal-feedback--show");
  });

  buttonMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    screenCover.classList.add("modal__overlay--show");
    mapWindow.classList.add("modal-map--show");
  });

  buttonFeedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    closeWindow('feedback');
  });

  buttonMapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    closeWindow('map');
  });

  screenCover.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (modalWindow.classList.contains("modal-feedback--show")) {
      closeWindow('feedback');
    }
    if (mapWindow.classList.contains("modal-map--show")) {
      closeWindow('map');
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalWindow.classList.contains("modal-feedback--show")) {
        closeWindow('feedback');
      }
      if (mapWindow.classList.contains("modal-map--show")) {
        closeWindow('map');
      }
    }
  })
})();
