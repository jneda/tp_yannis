const openModalFormBtn = document.querySelector("#open-product-form-btn");
const closeModalFormBtn = document.querySelector("#close-product-form-btn");

const modalOverlayElt = document.querySelector("#modal-form-overlay");
const productFormElt = document.querySelector("#product-form")

// ouverture de la fenêtre modale du formulaire

openModalFormBtn.addEventListener("click", function () {
  console.log(modalOverlayElt.style);
  if (modalOverlayElt.style.visibility !== "visible") {
    modalOverlayElt.style.visibility = "visible";
  }
  if (modalOverlayElt.classList.contains("fading-out")) {
    modalOverlayElt.classList.remove("fading-out");
  }
  modalOverlayElt.classList.add("fading-in");

  if (productFormElt.classList.contains("scaling-out")) {
    productFormElt.classList.remove("scaling-out");
  }
  productFormElt.classList.add("scaling-in");
});

closeModalFormBtn.addEventListener("click", function () {

  modalOverlayElt.classList.remove("fading-in");
  modalOverlayElt.classList.add("fading-out");

  productFormElt.classList.remove("scaling-in");
  productFormElt.classList.add("scaling-out");
});

// écouteur d'événement pour les animations

productFormElt.addEventListener("animationend", function (animation) {
  if (animation.animationName === "scale-out") {
    console.log("Animation scale-out terminée");
    modalOverlayElt.style.visibility = "hidden";
  }
});