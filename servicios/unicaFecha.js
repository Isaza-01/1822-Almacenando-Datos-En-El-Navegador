

export const unicasFechas = (listaTareas)=>{
    const unicaFecha = [];

    listaTareas.forEach((tarea)=>{
        if(!unicaFecha.includes(tarea.calendarioFormatFecha)){
            unicaFecha.push(tarea.calendarioFormatFecha);
        }
    });

    return unicaFecha;
}