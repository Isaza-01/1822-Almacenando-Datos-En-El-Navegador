//creación del icono de darle check list, o tarea completada

export const checkComplete = (id) => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', (event)=> completeTask(event,id));
  return i;
};


// con toggle, al dar clic busca si existe el estilo CSS  si esta lo quita y si no esta lo crea
const completeTask = (event,id) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
 
  //verificación de posición en Local 
  const tareas = JSON.parse(localStorage.getItem("tareas"));
  const index = tareas.findIndex( item => item.id == id); //posición dentro del arreglo

  //accediendo al arreglo, en la propiedad tareaCompletada, al negarse !tareas e ingresando a la propiedad
  //`tareaCompletada` se logra cambiar de false a true
  tareas[index][`tareaCompletada`] = !tareas[index][`tareaCompletada`];

  //almacenando el cambio en el localStore
  localStorage.setItem("tareas", JSON.stringify(tareas));

};


