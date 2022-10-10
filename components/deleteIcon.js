import { leerLocalStore } from "./leerLocalStore.js";

export const deleteIcon = (id) => {
  const i = document.createElement('i');
  i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
  i.addEventListener('click',()=> deleteTask (id));
  return i;
};



const deleteTask = (id) => {
  const lista = document.querySelector(`[data-list]`);
  const tareas = JSON.parse(localStorage.getItem("tareas"));
  const index = tareas.findIndex((items)=> items.id == id);
  tareas.splice(index,1);
  lista.innerHTML = "";
  localStorage.setItem(`tareas`, JSON.stringify(tareas));
  leerLocalStore();
};

//tareas.spllice(id,1);  el (uno) significa la cantidad de posiciones a borrar






/*
const deleteTask = (event) => {
  const parent = event.target.parentElement;
  parent.remove();
};

export default deleteIcon;
*/