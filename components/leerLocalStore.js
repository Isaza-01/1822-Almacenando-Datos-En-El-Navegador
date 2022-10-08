import {createTask} from "./todaLaLista.js";
import mostrarFecha from "./mostrarFecha.js";
import {unicasFechas} from "../servicios/unicaFecha.js"




//convertir en un objeto de JavaScript JSON.parse()
export const leerLocalStore = ()=>{
    const crearList = document.querySelector("[data-list]");
    const almacenamientoTareas = JSON.parse(localStorage.getItem("tasks")) || [];
    const fechas = unicasFechas(almacenamientoTareas);

    fechas.forEach((fecha)=>{
        console.log(fecha);
    });

     almacenamientoTareas.forEach((tarea) => {
        crearList.appendChild(mostrarFecha(tarea.calendarioFormatFecha));
        crearList.appendChild(createTask(tarea));
     });
}