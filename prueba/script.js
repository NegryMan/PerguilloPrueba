const anuario = document.querySelector(".anuario");
const paginas = document.querySelectorAll(".pagina");
const btnAnterior = document.getElementById("anterior");
const btnSiguiente = document.getElementById("siguiente");
let paginaActual = 0;

btnAnterior.addEventListener("click", () => {
    if (paginaActual > 0) {
        paginaActual--;
        actualizarPagina();
    }
});

btnSiguiente.addEventListener("click", () => {
    if (paginaActual < paginas.length - 1) {
        paginaActual++;
        actualizarPagina();
    }
});

function actualizarPagina() {
    const paginaDeseada = -paginaActual * 100;
    anuario.style.transform = `translateX(${paginaDeseada}%)`;
}
