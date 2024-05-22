//Plantilla de eventos (HTML) en el DOM mediante JS


//Funciones para insertar el evento (plantilla) en el listado

const listado = document.querySelector('#lista-eventos');


var nombre = "Nombre de local"
var numero = "Posición"
var serv = "Emergencias"

function crearEvento (nombre, numero, serv) {

    let evento = document.createElement("article");
    evento.setAttribute("class", "evento blink");
    evento.setAttribute("id", "evento");

    let datos = document.createElement("div");
    datos.setAttribute("class", "datos");
    
    let encabezadoEvento = document.createElement("span");
    encabezadoEvento.setAttribute("id", "encabezado-evento");
    encabezadoEvento.setAttribute("class", "encabezado-evento");
    
    let nombreLocal = document.createElement("H3");
    nombreLocal.setAttribute("class", "nombre-local");
    nombreLocal.textContent = nombre;
    let numeroLocal = document.createElement("p");

    numeroLocal.setAttribute("class", "numero-local");
    numeroLocal.textContent = numero;

    let servicio = document.createElement("span");
    servicio.setAttribute("class", "servicio");

    let textoServicio = document.createElement("p");
    textoServicio.setAttribute("class", "texto-servicio");
    textoServicio.textContent = serv;

    let horario = document.createElement("div");
    horario.setAttribute("class", "horario");

    let horaEvento = document.createElement("label");
    horaEvento.setAttribute("for", "reloj")
    horaEvento.setAttribute("class", "hora-evento");
    horaEvento.setAttribute("id", "hora-evento");
    horaEvento.innerHTML = "HORA"

    let now = new Date();
    let hora = now.getHours()<10? "0" + now.getHours() : now.getHours();
    let minutos = now.getMinutes()<10? "0" + now.getMinutes() : now.getMinutes();
    let segundos = now.getSeconds()<10? "0" + now.getSeconds() : now.getSeconds();
    let reloj =  hora + ":" + minutos + ":" + segundos

    let textoHora = document.createElement("p");
    textoHora.setAttribute("class", "reloj");
    textoHora.setAttribute("id", "reloj");
    textoHora.innerHTML = reloj;

    evento.append(datos, horario);
    datos.append(encabezadoEvento,servicio);
        encabezadoEvento.append(nombreLocal, numeroLocal);
        servicio.appendChild(textoServicio);
    horario.append(horaEvento,textoHora);

    evento.addEventListener('click', function() {
        evento.classList.remove('blink');
    })

    return evento
};

item = crearEvento()
//agregar al listado el evento y limitar la cantidad de hijos en el elemento padre.

function listarEvento (nombre, numero, serv){
    listado.prepend(crearEvento(nombre, numero, serv))

    if (listado.childNodes.length > 11) {
        listado.lastElementChild.remove()
    }
};


// Manejar los datos del formulario

