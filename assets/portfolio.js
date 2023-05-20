// import { forEach } from "core-js/core/array";

let hamburger = document.querySelector(".fa-bars");
let closeHamburger = document.querySelector(".fa-times");
let nav = document.querySelector("nav");
let menuItems = nav.querySelectorAll("li");
hamburger.addEventListener('click', function (event){
  nav.classList.add("revealMenu");
  closeHamburger.addEventListener('click', function(event){
    nav.classList.remove("revealMenu");
  });
  menuItems.forEach(element => {
    element.addEventListener('click', function (event){
      nav.classList.remove("revealMenu");
    })
  });
});

let projets = document.querySelectorAll(".projet");
let backGround = document.querySelector("#backgroundSingleProjet");
projets.forEach(element => {
  element.addEventListener('click', function(event){
    backGround.classList.add('background');
    let id = element.id.slice(15);
    let projetToDisplay = "#projetDetail" + id;
    console.log(projetToDisplay);
    projetToDisplay = document.querySelector(projetToDisplay);
    console.log(projetToDisplay);
    projetToDisplay.classList.remove("hiddenProjet");
    projetToDisplay.classList.add("revealProjet");
    document.body.style.overflow = "hidden";
    let closeItem = projetToDisplay.querySelector('.fa-times');
    closeItem.addEventListener('click', function(event){
      document.body.style.overflow = "auto";
      backGround.classList.remove('background');
      projetToDisplay.classList.add("hiddenProjet");
      projetToDisplay.classList.remove("revealProjet");  
    })
  })
})

// projetDetail
//projetThumbnail