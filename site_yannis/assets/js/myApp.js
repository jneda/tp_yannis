// boutons

const openModalFormBtn = document.querySelector("#open-product-form-btn");
const closeModalFormBtn = document.querySelector("#close-product-form-btn");
const openConfirmationBtn = document.querySelector(
  "#open-confimation-modal-btn"
);
const fetchUsersBtn = document.querySelector("#open-users-list-btn");
const closeUsersBtn = document.querySelector("#users-list .close-btn");

// fenêtres modales

const modalOverlayElt = document.querySelector("#modal-form-overlay");
const productFormElt = document.querySelector("#product-form");
const confirmationSectionElt = document.querySelector("#confirmation-modal");
const checkmarkElt = document.querySelector(".checkmark");

// manipulation du DOM

const usersListElt = document.querySelector("#users-list");

// ouverture de la fenêtre modale du formulaire

function openModalForm() {
  if (modalOverlayElt.style.visibility !== "visible") {
    modalOverlayElt.style.visibility = "visible";
  }
  if (modalOverlayElt.classList.contains("fading-out")) {
    modalOverlayElt.classList.remove("fading-out");
  }
  modalOverlayElt.classList.add("fading-in");

  if (productFormElt.style.display === "none") {
    productFormElt.style.display = "block";
  }
  if (productFormElt.classList.contains("scaling-out")) {
    productFormElt.classList.remove("scaling-out");
  }
  productFormElt.classList.add("scaling-in");
}

openModalFormBtn.addEventListener("click", openModalForm);

// fermeture de la fenêtre modale du formulaire

function closeModalForm() {
  modalOverlayElt.classList.remove("fading-in");
  modalOverlayElt.classList.add("fading-out");

  productFormElt.classList.remove("scaling-in");
  productFormElt.classList.add("scaling-out");
}

closeModalFormBtn.addEventListener("click", closeModalForm);

// écouteurs d'événement pour les animations

modalOverlayElt.addEventListener("animationend", function (animation) {
  if (animation.animationName === "scale-out") {
    // console.log("Animation scale-out terminée");
    modalOverlayElt.style.visibility = "hidden";
  }
});

confirmationSectionElt.addEventListener("animationend", function (animation) {
  if (animation.animationName === "bounce-in-top") {
    // console.log("Animation scale-out terminée");
    checkmarkElt.style.display = "block";
  }
});

// entrée de la modale de confirmation

openConfirmationBtn.addEventListener("click", function () {
  productFormElt.style.display = "none";
  productFormElt.classList.remove("scaling-in");

  confirmationSectionElt.style.display = "block";
  confirmationSectionElt.classList.add("bouncing-in-top");

  checkmarkElt.classList.add("bouncing-in-backward");
});

// affichage de la liste d'utilisateurs

function showUsersList () {
  confirmationSectionElt.style.display = "none";
  confirmationSectionElt.classList.remove("bouncing-in-top");
  checkmarkElt.classList.remove("bouncing-in-backward");

  fetchUsersList();
  usersListElt.style.display = "block";
}

// requête AJAX

function fetchUsersList() {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const usersData = JSON.parse(xhr.responseText);
      console.log(usersData);
      updateUsersList(usersData);
    }
  };

  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
}

// manipulation du DOM

function updateUsersList(usersData) {
  for (const user of usersData) {
    html = `
    <article class="user-card">
      <p class="name">${user.name}</p>
      <p class="email">${user.email.toLowerCase()}</p>
      <p class="motto">${
        user.company.bs.charAt(0).toUpperCase() + user.company.bs.slice(1)
      }</p>
    </article>`;

    const liElt = document.createElement("li");
    liElt.innerHTML = html;
    usersListElt.querySelector("ul").appendChild(liElt);
  }
}

// rattachement au bouton

fetchUsersBtn.addEventListener("click", showUsersList);

// showUsersList();

// fermeture de la liste d'utilisateurs

closeUsersBtn.addEventListener("click", function () {
  usersListElt.style.display = "none";
  modalOverlayElt.style.visibility = "hidden";
});