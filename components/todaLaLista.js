
import {checkComplete} from './checkComplete.js';
import {deleteIcon} from './deleteIcon.js';
import {leerLocalStore} from "./leerLocalStore.js";


 export const todaLaLista= (evento) =>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const calendario = document.querySelector('[data-form-date]');
    const list = document.querySelector('[data-list]');

    const value = input.value;
    const date= calendario.value;
    const calendarioFormatFecha = moment(date).format(`DD/MM/YYYY`);

 //validando si no se llena tarea y fecha
    if(value == "" || date == ""){
        return;
    }

    input.value = "";
    calendario.value = "";

    const tareaCompletada = false;

        const estructura_Objet = {
            value,
            calendarioFormatFecha,
            tareaCompletada
        }
    
        list.innerHTML = "";

    const almacenamientoTareas = JSON.parse(localStorage.getItem("tasks")) || [];
            almacenamientoTareas.push(estructura_Objet);

    localStorage.setItem("tasks",JSON.stringify(almacenamientoTareas));
    
    leerLocalStore();

  }
  
  
  export const createTask = ({ value,calendarioFormatFecha,tareaCompletada }) => {
        const task = document.createElement('li');
              task.classList.add('card');

    const taskContent = document.createElement('div');

    console.log(tareaCompletada);
    const titleTask = document.createElement('span');
            titleTask.classList.add('task');
            titleTask.innerText = value;
            taskContent.appendChild(checkComplete());
            taskContent.appendChild(titleTask);
        
    const elementCalendario = document.createElement("span");
            elementCalendario.innerHTML = calendarioFormatFecha;
            task.appendChild(taskContent);
            task.appendChild(elementCalendario);
            task.appendChild(deleteIcon());
    return task;
  };


  

  
 /*creación de la estructura 
  
    data-form-input => es el input para crear la tarea
    data-form-date => es  el input de calendario
    data-list => es la etiqueta ul para las listas de tareas
  
    */

     // creación del objeto para almacenar datos en la web
    //anteriormente se creaba la llave (value:) y luego su valor (value,)seguido de coma hasta el antepenultimo propiedad


     //metodo setItem recibe como parametros la llave y el valor, pero deben ser string o cadena de texto
    //JSON.stringify() convierte el objeto de JavaScript en string o cadena de texto
  
    //sessionStorage.setItem("tasks",JSON.stringify(estructura_Objet));