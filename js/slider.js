var rightArrow = document.querySelector(".slider-controls-middle-right");
var leftArrow = document.querySelector(".slider-controls-middle-left");
var sliderDots = document.querySelectorAll(".slider-controls-bottom-button");
var slideFirst = document.querySelector(".slide-first");
var slideSecond = document.querySelector(".slide-second");

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
