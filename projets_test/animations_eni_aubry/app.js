/* Fonctions utilitaires */

function basculerTexteBouton(btn) {
  if (btn.innerText === "Démarrer l'animation") {
    btn.innerText = "Stopper l'animation";
  } else {
    btn.innerText = "Démarrer l'animation";
  }
}

/* Déclenchement de l'animation de déplacement simple */

const divBoite = document.querySelector("#boite");
const bougeBoiteButton = document.querySelector("#bouge-boite-btn");

bougeBoiteButton.addEventListener("click", function (event) {
  // chaque clic sur le bouton ajoute ou ôte la classe d'animation selon qu'elle
  // est absente ou non
  divBoite.classList.toggle("boite-bouge");

  // et met à jour le texte du bouton
  basculerTexteBouton(event.target);
});

/* Déclenchement de l'animation de rotation et transparence */

const divImage = document.querySelector("#image");
const tourneImageButton = document.querySelector("#tourne-image-btn");

tourneImageButton.addEventListener("click", function (event) {
  divImage.classList.toggle("image-tourne");
  basculerTexteBouton(event.target);
});

/* Déclenchement de l'animation de clignotement */

const formElement = document.querySelector("#inscription");
const clignoteButton = document.querySelector("#clignote-form-btn");

clignoteButton.addEventListener("click", function (event) {
  formElement.classList.toggle("clignote");
  basculerTexteBouton(event.target);
});