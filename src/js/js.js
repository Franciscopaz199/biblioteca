/* recuperar todos los elementos con la clase "unah-button-action" */

const unahButtonAction = document.querySelectorAll(".unah-button-action");

/* recorrer todos los elementos con la clase "unah-button-action" */

unahButtonAction.forEach((unahButtonAction) => {
  unahButtonAction.addEventListener("click", () => {
    const naveMenu = document.getElementById(unahButtonAction.getAttribute('divid'));
    naveMenu.classList.toggle("unah-nave-menu_visible");
  });
});

const unahOcultar = document.querySelectorAll(".unah-ocultar");
/* recorrer todos los elementos con la clase "unah-button-action" */
unahOcultar.forEach((unahOcultar) => {
  unahOcultar.addEventListener("click", () => {
    const naveMenu = document.getElementById(unahOcultar.getAttribute('unah-ocultar-id'));
    naveMenu.classList.toggle("unah-invisible");
  });
});



