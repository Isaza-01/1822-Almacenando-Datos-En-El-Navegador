import {todaLaLista} from "./components/todaLaLista.js";
import {leerLocalStore} from "./components/leerLocalStore.js"; 




const btn = document.querySelector('[data-form-btn]');

btn.addEventListener('click', todaLaLista);

leerLocalStore();
