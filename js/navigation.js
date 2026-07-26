function initializeNavigation(){

const toggle=document.getElementById("navigation-toggle");

const menu=document.getElementById("navigation-menu");

toggle.addEventListener("click",()=>{

menu.classList.toggle("navigation-active");

});

}
