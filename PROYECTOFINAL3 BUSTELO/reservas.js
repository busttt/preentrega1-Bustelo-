// Función para mostrar un mensaje de éxito
function mostrarMensajeExito() {
    const mensajeExito = document.getElementById('mensaje-exito');
    mensajeExito.classList.remove('oculto');
}

// Event listener para el envío del formulario
document.getElementById('reserva-form').addEventListener('submit', function (event) {
    // Impide que el formulario se envíe de manera predeterminada (recargando la página)
    event.preventDefault();

    // Aquí puedes realizar cualquier procesamiento adicional del formulario si es necesario

    // Mostrar el mensaje de éxito
    mostrarMensajeExito();
});
