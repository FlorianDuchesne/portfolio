import '/node_modules/swiper/swiper-bundle.min.js';

const swiper = new Swiper('.swiper', {

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let hamburger = document.querySelector(".fa-bars");
let closeHamburger = document.querySelector(".fa-times");
let nav = document.querySelector("nav");
let menuItems = nav.querySelectorAll("li");
hamburger.addEventListener('click', function (event){
  nav.classList.add("revealMenu");
  closeHamburger.addEventListener('click', function(event){
    removeMenu();
  });
  menuItems.forEach(element => {
    element.addEventListener('click', function (event){
      removeMenu();
    })
  });
});

function removeMenu(){
  nav.classList.remove("revealMenu");
}

function closeModal(projetToDisplay){
  if (projetToDisplay.querySelector('.smallPics') !== null){
    let firstPic = projetToDisplay.querySelector('.smallPics').firstElementChild;
    projetToDisplay.querySelector('.bigPic').src = firstPic.src;  
  } 
  document.body.style.overflow = "auto";
  backGround.classList.add('backgroundNone');
  setTimeout(function() {
    backGround.classList.remove('background');
    backGround.classList.remove('backgroundNone');
  }, 1000);
  projetToDisplay.classList.remove("revealProjetIndex");  
  projetToDisplay.classList.remove("revealProjet");  
}

let projets = document.querySelectorAll(".projet");
let backGround = document.querySelector("#backgroundSingleProjet");

projets.forEach(element => {
  element.addEventListener('click', function(event){
    backGround.classList.add('background');
    let id = element.id.slice(15);
    let projetToDisplay = "#projetDetail" + id;
    projetToDisplay = document.querySelector(projetToDisplay);
    projetToDisplay.classList.add("revealProjetIndex");
    setTimeout(function() {
      projetToDisplay.classList.add('revealProjet');
    }, 10);
    document.body.style.overflow = "hidden";

    let smallPics = projetToDisplay.querySelectorAll('.smallPics img');
    let bigPic = projetToDisplay.querySelector('.bigPic');
    smallPics.forEach(element => {
      element.addEventListener('click', function(event){
        bigPic.src = element.src;
      })
    })

    let closeItem = projetToDisplay.querySelector('.fa-times');
    closeItem.addEventListener('click', function(event){
      closeModal(projetToDisplay);
    })
    backGround.addEventListener('click', function(e){
      closeModal(projetToDisplay);
    }); 
  })
});

