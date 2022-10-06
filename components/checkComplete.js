//creación del icono de darle check list, o tarea completada

const checkComplete = () => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon');
  i.addEventListener('click', completeTask);
  return i;
};


// con toggle, al dar clic busca si existe el estilo CSS  si esta lo quita y si no esta lo crea
const completeTask = (event) => {
  const element = event.target;
  element.classList.toggle('fas');
  element.classList.toggle('completeIcon');
  element.classList.toggle('far');
};

export default checkComplete;
