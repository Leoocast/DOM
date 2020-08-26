import { show, hide, slideDown, slideUp } from "./animaciones.js";

document.querySelector("#btnValidar").addEventListener('click', ()=>{
    slideDown('div1', 500)
})

document.querySelector("#btnLimpiar").addEventListener('click', ()=>{
    slideUp('div1', 500)
})