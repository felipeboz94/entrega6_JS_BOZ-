//declaración de variables y constantes globales
// array de usuarios auxiliar usados para el contraste


//declaración de botones para eventos
const PATH_USUARIOS_REGISTRADOS = "json/usuariosRegistrados.json"
let botCerrarSesion= document.getElementById('botCerrarSesion')
botCerrarSesion.addEventListener('click',cerrarSesion)
const {nombre, apellido, mail, usuario, pass, estado, intentos} = constructorUsuarioLoginExitoso()
let div = document.getElementById('infUsuario')
div.innerHTML = `<p><strong> Usuario: ${usuario}</strong></p>
<p><strong> Mail: ${mail}</strong></p>
`    
let bienvenida = document.getElementById('bienvenida')
bienvenida.innerText = ` ¡Bienvenido a la página, ${nombre}!` 


//--------FUNCIONES SOBRE JSON---------------

function aLogin(){
    window.location.href='../login.html'
}

//--------FUNCIONES EN LOGIN---------------

function constructorUsuarioLoginExitoso(){
    let usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'))

    return usuarioLogueado
}

function cerrarSesion(){
    localStorage.removeItem('usuarioLogueado')
    aLogin()
}

