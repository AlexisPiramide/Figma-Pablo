class CustomNav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav>
    <div>
        <img src="../../img/Logo.png" alt="">
        <img src="../../img/Menu.png" alt="">
    </div>
    <h2><a href="../../index.html">Inicio</a></h2>
    <div class="navegador">
        <input type="text" placeholder="">
        <button type="submit">
            <img src="/../../img/Search.png" onmouseover="this.src='../../img/AlternativeSearch.png'"
                onmouseout="this.src='../../img/Search.png'">
        </button>
    </div>
    <h2><a href="../../eleccion2.html"> Seccion Articulos</a></h2>
    <div class="usuario">
        <a href="../../eleccion.html">
            <img id="imgusuario" src="../../img/User.png">
            <h2 id="zona-usuario">Zona<br> Usuario</h2>
        </a>
    </div>
    <div class="logo">
        <img src="../../img/Logo.png" alt="">
    </div>
</nav>
      `;
    }
}

window.customElements.define('custom-nav', CustomNav)