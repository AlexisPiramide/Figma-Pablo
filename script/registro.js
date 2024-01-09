document.addEventListener("DOMContentLoaded", registro);

function registro() {
    document.getElementById('login-form').addEventListener('submit', formularioregistro);
}

function formularioregistro(e) {
    e.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;
    var cfpassword = document.getElementById('cfpassword').value;

    if(password == password){
    
    
    let url = 'http://52.204.24.4:3000/usuarios';
     
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if(data){
            data.forEach(usuario => {    
            if (usuario.password == password) {
                var fechavalidez = new Date();
                fechavalidez.setDate(fechavalidez.getDate() + 7);
                
                let datosusuario = {
                    usuario: username,
                    fechaexpiracion: fechavalidez.toISOString(),
                    imagenUrl: usuario.imagen
                };
                
                localStorage.setItem('datosusuario', JSON.stringify(datosusuario));
                window.location.href = 'index.html';
            } else {
                alert('Nombre de usuario o contraseña incorrectos, por favor intente nuevamente');
            }
        });
        }else{
            alert("El usuario no existe")
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Se produjo un error durante el inicio de sesión, por favor intente nuevamente');
    });
    }
    else{
        alert("Las contraseñas no coinciden")
    }
}

function compcontraseña(contraseña){
    if(contraseña.lenght < 8){

    }
}