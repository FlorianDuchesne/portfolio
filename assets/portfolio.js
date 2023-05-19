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