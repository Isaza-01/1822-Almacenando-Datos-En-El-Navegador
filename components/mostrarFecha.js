
export default (fecha)=>{
    const mostrarFecha = document.createElement("li");
    mostrarFecha.classList.add("fecha");

    mostrarFecha.innerHTML = fecha;
    return mostrarFecha;

}