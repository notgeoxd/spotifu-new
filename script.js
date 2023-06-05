  // Obtener la barra de desplazamiento
var scrollbar = document.querySelector('::-webkit-scrollbar');

  // Agregar evento de ratón para ocultar la barra de desplazamiento
scrollbar.addEventListener('mouseenter', function() {
    this.style.opacity = '1'; // Mostrar la barra de desplazamiento cuando el ratón está sobre ella
});

scrollbar.addEventListener('mouseleave', function() {
    this.style.opacity = '0'; // Ocultar la barra de desplazamiento cuando el ratón sale de ella
});

  // Agregar evento de desplazamiento para mostrar la barra de desplazamiento
window.addEventListener('scroll', function() {
    scrollbar.style.opacity = '1'; // Mostrar la barra de desplazamiento cuando se realiza desplazamiento
});