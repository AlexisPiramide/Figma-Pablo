document.addEventListener("DOMContentLoaded", login);

function login() {
    document.getElementById('login-form').addEventListener('submit', formulariologin);
}

function formulariologin(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    fetch('/api/login', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {

        if (data.password === password) {
            var fechavalidez = new Date();
            fechavalidez.setDate(fechavalidez.getDate() + 7);
            /**Esto esta hecho para poner un token de forma basica por si acaso*/
            var token = generateToken(9);
            
            let datosusuario = {
                loginToken: token,
                usuario: username,
                fechaexpiracion: fechavalidez.toISOString(),
                imagenUrl: "https://example.com/path/to/image.jpg"
            };
            
            localStorage.setItem('datosusuario', JSON.stringify(datosusuario));
            alert('Inicio de sesión exitoso, recargue la página');
        } else {
            alert('Nombre de usuario o contraseña incorrectos, por favor intente nuevamente');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Se produjo un error durante el inicio de sesión, por favor intente nuevamente');
    });
}

/**Esto esta hecho para poner un token de forma basica por si acaso*/
function generateToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters.charAt(randomIndex);
    }

    return token;
}


