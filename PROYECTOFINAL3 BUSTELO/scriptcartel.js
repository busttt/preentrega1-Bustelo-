document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("miFormulario");
    const mensajeExito = document.getElementById("mensajeExito");
  
    formulario.addEventListener("submit", function (event) {
      event.preventDefault(); 
  
    
      mensajeExito.style.display = "block";
  
    
    });
  });
  