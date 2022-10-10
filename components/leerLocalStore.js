import {createTask} from "./todaLaLista.js";
import mostrarFecha from "./mostrarFecha.js";
import {unicasFechas, ordenarFechas} from "../servicios/unicaFecha.js"




//convertir en un objeto de JavaScript JSON.parse()
export const leerLocalStore = ()=>{
    const crearList = document.querySelector("[data-list]");
    const almacenamientoTareas = JSON.parse(localStorage.getItem("tareas")) || [];
    const fechas = unicasFechas(almacenamientoTareas);
    ordenarFechas(fechas);
   
    fechas.forEach((fecha)=>{
        crearList.appendChild(mostrarFecha(fecha));
        const fechaMoment = moment(fecha,"DD/MM/YYYY");
        almacenamientoTareas.forEach((tarea) => {
            
            const fechaTarea = moment(tarea.calendarioFormatFecha, "DD/MM/YYYY");
            const diferencia= fechaMoment.diff(fechaTarea);
            if(diferencia == 0){
                crearList.appendChild(createTask(tarea));
            }
         });
    });

}