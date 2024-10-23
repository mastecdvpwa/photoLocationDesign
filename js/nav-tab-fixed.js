import { resaltaSiEstasEn } from "../lib/js/resaltaSiEstasEn.js"

export class NavTabFixed extends HTMLElement {

 connectedCallback() {
  this.classList.add("md-tab", "fixed")

  this.innerHTML = /* HTML */`
   <a ${resaltaSiEstasEn(["/index.html", "", "/"])} href="index.html">
    <span class="material-symbols-outlined">pin_drop</span>
    Geolocalización
   </a>

   <a ${resaltaSiEstasEn(["/archivos.html"])} href="archivos.html">
    <span class="material-symbols-outlined">upload_file</span>
    Archivos
   </a>

   <a ${resaltaSiEstasEn(["/camara.html"])} href="camara.html">
    <span class="material-symbols-outlined">camera</span>
    Cámara
   </a>

   <a ${resaltaSiEstasEn(["/ayuda.html"])} href="ayuda.html">
    <span class="material-symbols-outlined">help</span>
    Ayuda
   </a>`
 }

}

customElements.define("nav-tab-fixed", NavTabFixed)