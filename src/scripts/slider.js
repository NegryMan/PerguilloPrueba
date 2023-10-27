document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".objetos-slider");
    const adelante = document.querySelector(".botonA");
    const atras = document.querySelector(".botonAt");
  
    adelante.addEventListener("click", function() {
      slider.style.transform = "translateX(-100%)";
    });
  
    atras.addEventListener("click", function() {
      slider.style.transform = "translateX(0)";
    });
  });