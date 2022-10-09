

export const unicasFechas = (listaTareas)=>{
    const unicaFecha = [];

    listaTareas.forEach((tarea)=>{
        if(!unicaFecha.includes(tarea.calendarioFormatFecha)){
            unicaFecha.push(tarea.calendarioFormatFecha);
        }
    });

    return unicaFecha;
}


export const ordenarFechas = (fechas)=>{
    return fechas.sort((a,b)=>{
        const firstFechas = moment(a, "DD/MM/YYYY");
        const secondFechas = moment(b, "DD/MM/YYYY");
        return firstFechas - secondFechas;
    });

}