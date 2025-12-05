
// button en nav vinden
const menuBtn = document.querySelector(".navbtn");
const deNav = document.querySelector(".menusmallscreen");

// event voor op de button toevoegen
menuBtn.addEventListener("click", toggleMenu);

// wat het event moet doen als er op de button geklikt wordt
function toggleMenu() {
    deNav.classList.toggle("is-open");
    menuBtn.classList.toggle("is-open");
}

// de select met de filter categorien zoeken
let deSelect = document.querySelector('select');

// de ul met alle articles zoeken
let deLijst = document.querySelector('ul');

// event voor het veranderen van de filter toevoegen
deSelect.addEventListener("change", filter);

function filter(event) {
// het event de taget value class toe laten voegen aan de ul
  deLijst.dataset.filter = event.target.value;
}