var feedbackButton = document.querySelector(".feedback-button");
var modalFeedback = document.querySelector(".modal-feedback");
var modalFeedbackClose = modalFeedback.querySelector(".button-feedback-close");
var userName = modalFeedback.querySelector(".user-name");
var modalFeedbackForm = modalFeedback.querySelector(".modal-feedback-form");
var userEmail = modalFeedback.querySelector(".user-email");
var textarea = modalFeedback.querySelector(".textarea");
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

//Модальное окно в каталоге не работает почему-то
var buy = document.querySelectorAll(".buy");
var modalBasket = document.querySelector(".modal-basket");
var modalBasketClose = modalBasket.querySelector(".modal-basket-close");
var addToBasket = document.querySelector(".basket");
var next = modalBasket.querySelector(".continue");
for (var i = 0; i <= buy.length; i++) {
  buy[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBasket.classList.add("modal-show");
  next.focus();
  addToBasket.classList.add("basket-add");
});

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

};
