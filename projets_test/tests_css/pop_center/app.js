const startAnimationButtonElt = document.querySelector("#animation-start-btn");
const closeAnimationButtonElt = document.querySelector("#pop-down-btn");
const popUpElt = document.querySelector(".pop-up");

startAnimationButtonElt.addEventListener("click", function () {
  popUpElt.classList.toggle("hidden");
  popUpElt.classList.toggle("popping-up");
});

closeAnimationButtonElt.addEventListener("click", function () {
  popUpElt.classList.toggle("popping-up");
  popUpElt.classList.toggle("popping-down");
});