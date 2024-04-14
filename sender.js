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


// Colocación de los parámetros recibidos en la URL en los campos del formulario

function insertData () {
    nombreLocal.value = local
    posicionLocal.value = code
}


// Manejo de datos almacenados en el formulario

function sendParams (e) {
    e.preventDefault()
    let message = ''
    let form =new FormData(this)
    form.forEach(element => {
        
        message += element + '\n'
        
    });
    alert('\n Se envió alerta con la siguiente información:\n\n' + message)
}

senderForm.addEventListener('submit', sendParams)

