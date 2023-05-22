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
    let closeItem = projetToDisplay.querySelector('.fa-times');
    closeItem.addEventListener('click', function(event){
      closeModal(projetToDisplay);
    })
    backGround.addEventListener('click', function(e){
      closeModal(projetToDisplay);
    }); 
  })
});
