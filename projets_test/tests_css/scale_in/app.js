const modalFormElt = document.querySelector("#modal-form");

const openModalBtnElt = document.querySelector("#open-modal-btn");
const closeModalBtnElt = document.querySelector("#close-modal-btn");

openModalBtnElt.addEventListener("click", function () {
  modalFormElt.classList.add("entering");
  if (modalFormElt.classList.contains("exiting")) {
    modalFormElt.classList.remove("exiting");
  }
  console.log(`cliqué sur btn Ouvrir, classList : [${modalFormElt.classList}]`);
});

closeModalBtnElt.addEventListener("click", function () {
  modalFormElt.classList.remove("entering");
  modalFormElt.classList.add("exiting");
  console.log(`cliqué sur btn Fermer, classList : [${modalFormElt.classList}]`);
});