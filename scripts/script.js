
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

// // de select met de filter categorien zoeken
// let deSelect = document.querySelector('select');

// // de ul met alle articles zoeken
// let deLijst = document.querySelector('ul');

// // event voor het veranderen van de filter toevoegen
// deSelect.addEventListener("change", filter);

// function filter(event) {
// // het event de taget value class toe laten voegen aan de ul
//   deLijst.dataset.filter = event.target.value;
// }

// de select met de filter categorien zoeken
let allSelect = document.querySelectorAll('select');

let deBoeken = document.querySelectorAll('li');
// console.log(deBoeken);

// de ul met alle articles zoeken
// let deLijst = document.querySelector('ul');

// event voor het veranderen van de filter toevoegen
allSelect.forEach(function (select) {
  select.addEventListener("change", filter);
})


function filter(event) {

  // let Filter = event.target.value;

  let auteurFilter = allSelect[0].value;
  let jaarFilter = allSelect[1].value;
  let plaatsFilter = allSelect[2].value;


  //   if (hetFilter == "all") {
  //     deBoeken.forEach(eenBoek => {
  //         eenBoek.classList.remove("hidden");
  //     });



// else {
deBoeken.forEach(eenBoek => {

  if (
    //         auteur of all

    (eenBoek.classList.contains(auteurFilter) || auteurFilter == "all")
    // en

    &&
    //         jaar of all
    (eenBoek.classList.contains(jaarFilter) || jaarFilter == "all")
    // en

    &&
    //         plaats of all
    (eenBoek.classList.contains(plaatsFilter) || plaatsFilter == "all")
  ) {
    eenBoek.classList.remove("hidden");
  } else {
    eenBoek.classList.add("hidden");
  }
});
}

//change event
//alleen titels tonen waar de zoektern in voor komt

let items = document.querySelectorAll("ul li")
console.log(items);
let search = document.querySelector("input")
// console.log(search);

search.addEventListener('keyup', zoeken);

function zoeken(e) {
  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
      console.log(items);
      item.style.display ='block';
    } else {
      item.style.display = 'none'
    }
  })
}