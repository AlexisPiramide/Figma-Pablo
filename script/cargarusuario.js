document.addEventListener("DOMContentLoaded", function() {
    var zona = document.getElementById("zona-usuario");
    
    let datosusuario = JSON.parse(localStorage.getItem('datosusuario'));

    if (datosusuario) {
        let usuario = datosusuario.usuario;
        zona.innerHTML = usuario;
        if(datosusuario.imagenUrl){
            /**La logica funciona pero no el cambiar la imagen */
            var zonaimg = document.getElementById("zona-usuario");
            zonaimg.src= datosusuario.imagenUrl;

        }if(datosusuario.imagenUrl == "default"){
            var zonaimg = "../../img/User.png"
        }if(!datosusuario.imagenUrl){
            var zonaimg = "../../img/User.png"
 
        }
    } else {
        zona.innerHTML = "Zona <br> Usuario";
    }
});
