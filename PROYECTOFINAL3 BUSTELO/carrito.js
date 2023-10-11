// carrito.js
function toggleCarrito() {
  var carritoSection = document.getElementById("carrito-section");
  carritoSection.style.display = (carritoSection.style.display === "block") ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelectorAll(".cart-item");
  
    cartItems.forEach((item) => {
      const minusButton = item.querySelector(".minus-button");
      const plusButton = item.querySelector(".plus-button");
      const quantityInput = item.querySelector(".quantity-input");
      const removeButton = item.querySelector(".remove-button");
      const priceElement = item.querySelector(".price");
      const totalElement = document.querySelector(".cart-total h3");
  
      // Obtener precio del producto
      const price = parseFloat(priceElement.textContent.split("$")[1]);
  
      // Actualizar el total al cargar la página
      updateTotal();
  
      // Evento para el botón "Menos"
      minusButton.addEventListener("click", function () {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 0) {
          quantity--;
          quantityInput.value = quantity;
          updateTotal();
        }
      });
  
      // Evento para el botón "Más"
      plusButton.addEventListener("click", function () {
        let quantity = parseInt(quantityInput.value);
        quantity++;
        quantityInput.value = quantity;
        updateTotal();
      });

  
      // Función para actualizar el total
      function updateTotal() {
        const quantities = Array.from(document.querySelectorAll(".quantity-input"));
        let total = 0;
        quantities.forEach((input) => {
          total += price * parseInt(input.value);
        });
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
      }
    });
  });
  