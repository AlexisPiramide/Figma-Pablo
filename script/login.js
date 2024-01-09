document.addEventListener("DOMContentLoaded", login);

function login() {
    document.getElementById('login-form').addEventListener('submit', formulariologin);
}

function formulariologin(e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    
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

