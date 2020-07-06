var arrowRight = document.querySelector(".controls-middle-right");
var arrowLeft = document.querySelector(".controls-middle-left");
var sliderToggles = document.querySelectorAll(".controls-bottom-button");
var firstSlide = document.querySelector(".slide-first");
var secondSlide = document.querySelector(".slide-second");

arrowRight.addEventListener("click", function (evt) {
    evt.preventDefault;
    firstSlide.classList.remove("slide-current");
    sliderToggles[0].classList.remove("controls-current");
    secondSlide.classList.add("slide-current");
    sliderToggles[1].classList.add("controls-current");
});

arrowLeft.addEventListener("click", function (evt) {
    evt.preventDefault;
    secondSlide.classList.remove("slide-current");
    sliderToggles[1].classList.remove("controls-current");
    firstSlide.classList.add("slide-current");
    sliderToggles[0].classList.add("controls-current");
});

sliderToggles[1].addEventListener("click", function (evt) {
    evt.preventDefault;
    firstSlide.classList.remove("slide-current");
    sliderToggles[0].classList.remove("controls-current");
    secondSlide.classList.add("slide-current");
    sliderToggles[1].classList.add("controls-current");
});

sliderToggles[0].addEventListener("click", function (evt) {
    evt.preventDefault;
    secondSlide.classList.remove("slide-current");
    sliderToggles[1].classList.remove("controls-current");
    firstSlide.classList.add("slide-current");
    sliderToggles[0].classList.add("controls-current");
});
