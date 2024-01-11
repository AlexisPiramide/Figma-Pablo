document.addEventListener("DOMContentLoaded", registro);

function registro() {

    document.getElementById('password').addEventListener('change', comprobarContraseña())
}

function formularioregistro() {
    e.preventDefault();
}

function comprobarContraseña(){
    document.getElementById('password').addEventListener('change', comprobar8caracteres);
    document.getElementById('password').addEventListener('change', comprobarMayus);
    document.getElementById('password').addEventListener('change', comprobarNum);
    document.getElementById('password').addEventListener('change', comprobarEspecial);
    document.getElementById('cfpassword').addEventListener('change', contraseñaCoincide);
}

function contraseñaCoincide() {
    const password = document.getElementById('password').value;
    const cfpassword = document.getElementById('cfpassword').value;
    const coinciden = document.getElementById('coinciden');

    if (cfpassword === password) {
        coinciden.src = "/img/check.png";
        return true;
    } else {
        coinciden.src = "/img/cross.png";
        return false;
    }
}


function comprobar8caracteres() {
    const contraseña = document.getElementById('password').value;
    const caracteres = document.getElementById('caracteres');
    console.log('Contraseña:', contraseña);
    console.log('Contraseña:', contraseña.length);
    
    if (contraseña.length > 7) {
        caracteres.src = "/img/check.png";
        return true;
    } else {
        caracteres.src = "/img/cross.png";
        return false;
    }
}

function comprobarMayus() {
    const contraseña = document.getElementById('password').value;
    const mayus = document.getElementById('mayus');
   
    if (contraseña.match(/[A-Z]/g)) {
        mayus.src = "/img/check.png";
        return true;
    } else {
        mayus.src = "/img/cross.png";
        return false;
    }
}

function comprobarNum() {
    const contraseña = document.getElementById('password').value;
    const numero = document.getElementById('numero');

    if (contraseña.match(/.*[0-9]/)) {
        numero.src = "/img/check.png";
        return true;
    } else {
        numero.src = "/img/cross.png";
        return false;
    }
}

function comprobarEspecial() {
    const contraseña = document.getElementById('password').value;
    const especial = document.getElementById('especial');

    if (contraseña.match(/[^\w]/)) {
        especial.src = "/img/check.png";
        return true;
    } else {
        especial.src = "/img/cross.png";
        return false;
    }
}