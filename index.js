/*Plantilla de eventos (HTML) en el DOM mediante JS*/

var evento = document.createElement("article");
evento.setAttribute("class", "evento");
evento.setAttribute("id", "evento");

var datos = document.createElement("div");
datos.setAttribute("class", "datos");

var encabezadoEvento = document.createElement("span");
encabezadoEvento.setAttribute("id", "encabezado-evento");
encabezadoEvento.setAttribute("class", "encabezado-evento");

var nombreLocal = document.createElement("H3");
nombreLocal.setAttribute("class", "nombre-local");
nombreLocal.textContent = "Mimo & Co.";

var numeroLocal = document.createElement("p");
numeroLocal.setAttribute("class", "numero-local");
numeroLocal.textContent = "(SOLE-N00-LO129)";

var servicio = document.createElement("span");
servicio.setAttribute("class","servicio");

var textoServicio = document.createElement("p");
textoServicio.setAttribute("class","texto-servicio");
textoServicio.textContent = "Seguridad";

var horario = document.createElement("div");
horario.setAttribute("class", "horario");

var horaEvento = document.createElement("span");
horaEvento.setAttribute("class","hora-evento");
horaEvento.setAttribute("id","hora-evento");

var textoHora = document.createElement("p");
textoHora.setAttribute("class","texto-hora");
textoHora.textContent = "Hora \n 13:50";


evento.append(datos, horario);
    datos.append(encabezadoEvento,servicio);
        encabezadoEvento.append(nombreLocal, numeroLocal);
        servicio.appendChild(textoServicio);
    horario.appendChild(horaEvento);
        horaEvento.appendChild(textoHora);


/* Funciones para insertar el evento en el listado*/
let listado = document.querySelector("#lista-eventos");

function armarListado(){
    let arrayEventos = [];

    if( arrayEventos = []){
        arrayEventos.push(evento)
    } else{
        arrayEventos.unshift(evento)
    }
};






