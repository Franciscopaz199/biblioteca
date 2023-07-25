const naveToggle = document.querySelector(".unah-button-menu");
const naveMenu = document.querySelector(".nave-menu");

naveToggle.addEventListener("click", () => {
  
  naveMenu.classList.toggle("nave-menu_visible");

  if (naveMenu.classList.contains("nave-menu_visible")) {
    naveToggle.setAttribute("aria-label", "Cerrar menú");
    
  } else {
    naveToggle.setAttribute("aria-label", "Abrir menú");
  }
});
