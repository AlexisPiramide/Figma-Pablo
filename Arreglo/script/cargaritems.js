document.addEventListener("DOMContentLoaded", items);

function items() {
    document.getElementById('cartas').addEventListener(onload, ponercartas);
}


function cargaritems(e) {
    e.preventDefault();
    fetch('/api/items', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('items', JSON.stringify(data));
            cargar();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


function cargar() {
    cargaritems();
    let datositems = JSON.parse(localStorage.getItem('items'));


    var cartas = document.getElementById('cartas');
    var html = '';

    datositems.forEach(element => {

        var nombre = element.nombre;
        var link = element.link;
        var precio = element.precio;

        html += '<div class="carta">';
        html += ' <div class="superior">';
        html += '<img src="' + link + '">';
        html += '<p>' + nombre + '</p>';
        html += '</div>';
        html += '<div class="inferior">';
        html += '<img src="/img/delete.png">';
        html += '<p>' + precio + '</p>';
        html += '</div>';
        html += '</div>';
    });
    cartas.innerHTML = html;

}
