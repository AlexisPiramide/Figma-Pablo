document.addEventListener("DOMContentLoaded", function() {
    var zona = document.getElementById("zona-usuario");
    
    let datosusuario = JSON.parse(localStorage.getItem('datosusuario'));
    console.log('datosusuario:', datosusuario);

    if (datosusuario) {
        let usuario = datosusuario.username;
        console.log('usuario:', usuario);
        zona.innerHTML = usuario;
    
    } else {
        zona.innerHTML = "Zona <br> Usuario";
    }
});
