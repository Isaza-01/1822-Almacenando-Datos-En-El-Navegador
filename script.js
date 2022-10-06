import checkComplete from './components/checkComplete.js';
import deleteIcon from './components/deleteIcon.js';

const btn = document.querySelector('[data-form-btn]');


const todaLaLista= (evento) =>{

  const list = document.querySelector('[data-list]');
  const task = createTask(evento); // task es polimorfismo, para llamar a la función de crear toda la estructura
  list.appendChild(task);
}


//creación de un arreglo para alamacenar datos

const almacenamientoTareas = [];


const createTask = (evento) => {
  evento.preventDefault();

  /*creación de la estructura 

  data-form-input => es el input para crear la tarea
  data-form-date => es  el input de calendario
  data-list => es la etiqueta ul para las listas de tareas

  */
  const input = document.querySelector('[data-form-input]');
  const calendario = document.querySelector('[data-form-date]');
  const value = input.value;
  const date= calendario.value;
  const calendarioFormatFecha = moment(date).format(`DD/MM/YYYY`); 
  const task = document.createElement('li');
  task.classList.add('card');
  input.value = '';


  //backticks, creación de div,span dentro de la etiqueta <li>
  const taskContent = document.createElement('div');
  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  
  // creación del objeto para almacenar datos en la web

  //anteriormente se creaba la llave (value:) y luego su valor (value,)seguido de coma hasta el antepenultimo propiedad
  const estructura_Objet = {
    value,
    calendarioFormatFecha
  }

  //agregando datos de las tareas con el metodo pun push


  almacenamientoTareas.push(estructura_Objet);

  //metodo setItem recibe como parametros la llave y el valor, pero deben ser string o cadena de texto
  //JSON.stringify() convierte el objeto de JavaScript en string o cadena de texto

  //sessionStorage.setItem("tasks",JSON.stringify(estructura_Objet));

  localStorage.setItem("tasks",JSON.stringify(almacenamientoTareas));

  //creación del span que tendra el valor del calendario
  const elementCalendario = document.createElement("span");
  elementCalendario.innerHTML = calendarioFormatFecha;
  task.appendChild(taskContent);
  task.appendChild(elementCalendario);
  task.appendChild(deleteIcon());

  //list.appendChild(elementCalendario);
  
  return task;
};

//Arrow functions o funciones anonimas
//vamos a llamar con el clic toda la lista 
btn.addEventListener('click', todaLaLista);
