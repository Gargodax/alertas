//Plantilla de eventos (HTML) en el DOM mediante JS


//Funciones para insertar el evento (plantilla) en el listado

const listado = document.querySelector("#lista-eventos");
var nombre = "Mimo & Co."
var numero = "(SOLE-N00-LO129)"
var serv = "Seguridad"


function crearEvento (nombre, numero, serv) {

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
    nombreLocal.textContent = nombre;
    var numeroLocal = document.createElement("p");

    numeroLocal.setAttribute("class", "numero-local");
    numeroLocal.textContent = numero;

    var servicio = document.createElement("span");
    servicio.setAttribute("class", "servicio");

    var textoServicio = document.createElement("p");
    textoServicio.setAttribute("class", "texto-servicio");
    textoServicio.textContent = serv;

    var horario = document.createElement("div");
    horario.setAttribute("class", "horario");

    var horaEvento = document.createElement("label");
    horaEvento.setAttribute("for", "reloj")
    horaEvento.setAttribute("class", "hora-evento");
    horaEvento.setAttribute("id", "hora-evento");
    horaEvento.innerHTML = "HORA"

    var now = new Date();
    var hora = now.getHours()<10? "0" + now.getHours() : now.getHours();
    var minutos = now.getMinutes()<10? "0" + now.getMinutes() : now.getMinutes();
    var segundos = now.getSeconds()<10? "0" + now.getSeconds() : now.getSeconds();
    var reloj =  hora + ":" + minutos + ":" + segundos

    var textoHora = document.createElement("p");
    textoHora.setAttribute("class", "reloj");
    textoHora.setAttribute("id", "reloj");
    textoHora.innerHTML = reloj;

    evento.append(datos, horario);
    datos.append(encabezadoEvento,servicio);
        encabezadoEvento.append(nombreLocal, numeroLocal);
        servicio.appendChild(textoServicio);
    horario.append(horaEvento,textoHora);

    
        return evento
};

const novedad = crearEvento(nombre, numero, serv);

function listarEvento (){
    listado.prepend(crearEvento(nombre, numero, serv))

    if (listado.childNodes.length > 4) {
        listado.lastElementChild.remove()
    }
};

