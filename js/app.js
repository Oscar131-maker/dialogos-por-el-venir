//Vars
const btnMenu = document.querySelector('.icon-header');
const principalHeader = document.querySelector('header#header');
const menuPrincipal = document.querySelector('.principal-menu');
const closeMenu = document.querySelector('.close-menu');
const goTop = document.querySelector('.go-top');
const linksRel = document.querySelectorAll('a');

//Event listeners
EventListener();
function EventListener(){

   //Link

   //Principal menu
   ShowMenu();

   //Close menu
   HideMenu();

   //Menu scroll
   ScrollMenu();

   //Go top
   GoTop();

}

//Functions
linksRel.forEach(element => {
  element.setAttribute('rel', 'noopener noreferrer');
});

//Show menú
function ShowMenu() {
  
  if(menuPrincipal.style.right = "-100%"){
    btnMenu.addEventListener('click', () => {
        menuPrincipal.style.right = "0";
        menuPrincipal.style.transition = "400ms";
    });
  }

}

//Close menu
function HideMenu(){
   closeMenu.addEventListener('click', () => {
    menuPrincipal.style.right = "-100%";
    menuPrincipal.style.transition = "400ms";
   });
}

//Scroll menú
function ScrollMenu(){
  
  window.onscroll = () =>{
    const scroll = window.pageYOffset;
    
    if(scroll >= 70){
      principalHeader.style.backgroundColor = "#0e0e0e";
    }else{
      principalHeader.style.backgroundColor = "transparent"; 
    }
    
    if(scroll >= 700){
      goTop.style.right = "0%";
      goTop.style.transition = "400ms";
    }else{
      goTop.style.right = "-100%";
      goTop.style.transition = "400ms";
    }

  }
}

//Go top
function GoTop(){
  goTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  });
}


