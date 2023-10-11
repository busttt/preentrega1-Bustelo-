
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); 

  
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;

       

 
        alert(`Nombre: ${nombre}\nEmail: ${email}`);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
     
      successMessage.style.display = "block";
  
      
    });
  });
  