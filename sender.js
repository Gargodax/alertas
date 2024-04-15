window.addEventListener('pageshow', insertData)

// Recuperar la información de la URL de la página

const params = window.location.search //recupero la información de la URL
const URLvalues = new URLSearchParams(params) // se crea nueva instancia de objeto
var local = URLvalues.get('nombrePosicion') // acceso al valor de "nombrePosicion"
var code = URLvalues.get('codigoPosicion') // acceso al valor de "codigoPosicion"


// Almacenar en variables elementos del DOM necesarios

const senderForm = document.querySelector('#sender-form')
var nombreLocal = document.querySelector('#nombrePosicion')
var posicionLocal = document.querySelector('#codigoPosicion')

const sendButton = document.querySelector('#send')

// Colocación de los parámetros recibidos en la URL en los campos del formulario

function insertData () {
    nombreLocal.value = local
    posicionLocal.value = code
}


// Manejo de datos almacenados en el formulario

function sendParams (e) {
    e.preventDefault()

    if ((nombreLocal.value == '') && (posicionLocal.value == '')) {
        alert('\nPara enviar la alerte debe escanear el código QR correspondiente.')
    } else {
        
    var message =''
    let formData =new FormData(this)
    let formArray = Array.from(formData)
    let propsArray = ['Nombre de local', 'Posición', 'Servicio solicitado']
    for (var prop in formArray) {
        message += '\n' + '    ' + propsArray[prop] + ': ' + formArray[prop][1]
    }
    alert('\nSe envió alerta con la siguiente información:\n' + message)};

};

senderForm.addEventListener('submit', sendParams)


