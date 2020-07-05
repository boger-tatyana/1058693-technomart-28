var feedbackButton = document.querySelector(".feedback-button");
var modalFeedback = document.querySelector(".modal-feedback");
var modalFeedbackClose = !!modalFeedback && modalFeedback.querySelector(".button-feedback-close");
var userName = !!modalFeedback && modalFeedback.querySelector(".user-name");
var modalFeedbackForm = !!modalFeedback && modalFeedback.querySelector(".modal-feedback-form");
var userEmail = !!modalFeedback && modalFeedback.querySelector(".user-email");
var textarea = !!modalFeedback && modalFeedback.querySelector(".textarea");
if (feedbackButton != null) {
  feedbackButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.add("modal-show");
    userName.focus();
  });

  modalFeedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-show");
    modalFeedback.classList.remove("modal-error");
  });

  modalFeedbackForm.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value || !textarea.value) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-error");
      modalFeedback.offsetWidth = modalFeedback.offsetWidth;
      modalFeedback.classList.add("modal-error");
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalFeedback.classList.contains("modal-show")) {
        evt.preventDefault();
        modalFeedback.classList.remove("modal-show");
        modalFeedback.classList.remove("modal-error");
      }
    }
  });


  var mapLink = document.querySelector(".map");
  var modalMap = document.querySelector(".modal-map");
  var modalMapClose = modalMap.querySelector(".modal-map-close");
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-show");
  });

  modalMapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalMap.classList.contains("modal-show")) {
        evt.preventDefault();
        modalMap.classList.remove("modal-show");
        modalMap.classList.remove("modal-error");
      }
    }
  });
}

var buy = document.querySelectorAll(".buy");
var modalBasket = document.querySelector(".modal-basket");
var addToBasket = document.querySelector(".basket");
if (modalBasket != null) {
  for (var i = 0; i < buy.length; i++) {
    buy[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modalBasket.classList.add("modal-show");
      next.focus();
      addToBasket.classList.add("basket-add");
    });
    var next = modalBasket.querySelector(".continue");
    var modalBasketClose = modalBasket.querySelector(".modal-basket-close");
    modalBasketClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      modalBasket.classList.remove("modal-show");
    });
    next.addEventListener("click", function (evt) {
      evt.preventDefault();
      modalBasket.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (modalBasket.classList.contains("modal-show")) {
          evt.preventDefault();
          modalBasket.classList.remove("modal-show");
        }
      }
    });
  }
};


var rightArrow = document.querySelector(".slider-controls-middle-right");
var leftArrow = document.querySelector(".slider-controls-middle-left");
var sliderDots = document.querySelectorAll(".slider-controls-bottom-button");
var slideFirst = document.querySelector(".slide-first");
var slideSecond = document.querySelector(".slide-second");
if (rightArrow != null) {
  rightArrow.addEventListener("click", function (evt) {
    evt.preventDefault;
    slideFirst.classList.remove("slide-current");
    sliderDots[0].classList.remove("slider-controls-current");
    slideSecond.classList.add("slide-current");
    sliderDots[1].classList.add("slider-controls-current");
  });

  leftArrow.addEventListener("click", function (evt) {
    evt.preventDefault;
    slideSecond.classList.remove("slide-current");
    sliderDots[1].classList.remove("slider-controls-current");
    slideFirst.classList.add("slide-current");
    sliderDots[0].classList.add("slider-controls-current");
  });

  sliderDots[1].addEventListener("click", function (evt) {
    evt.preventDefault;
    slideFirst.classList.remove("slide-current");
    sliderDots[0].classList.remove("slider-controls-current");
    slideSecond.classList.add("slide-current");
    sliderDots[1].classList.add("slider-controls-current");
  });

  sliderDots[0].addEventListener("click", function (evt) {
    evt.preventDefault;
    slideSecond.classList.remove("slide-current");
    sliderDots[1].classList.remove("slider-controls-current");
    slideFirst.classList.add("slide-current");
    sliderDots[0].classList.add("slider-controls-current");
  });
}
