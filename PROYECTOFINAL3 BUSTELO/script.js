const productos = document.querySelectorAll('.producto');
const cart = document.querySelector('.cart');
const totalElement = document.getElementById('total');
let total = 0;

productos.forEach(producto => {
  const sumarBtn = producto.querySelector('.sumar');
  const restarBtn = producto.querySelector('.restar');
  const cantidadInput = producto.querySelector('input');

  sumarBtn.addEventListener('click', () => {
    let cantidad = parseInt(cantidadInput.value);
    cantidad += 1;
    cantidadInput.value = cantidad;
    calcularSubtotal(producto);
  });

  restarBtn.addEventListener('click', () => {
    let cantidad = parseInt(cantidadInput.value);
    if (cantidad > 0) {
      cantidad -= 1;
      cantidadInput.value = cantidad;
      calcularSubtotal(producto);
    }
  });

  calcularSubtotal(producto);
});

function calcularSubtotal(producto) {
  const cantidadInput = producto.querySelector('input');
  const cantidad = parseInt(cantidadInput.value);
  const precio = 10; 
  const subtotal = cantidad * precio;
  const subtotalElement = producto.querySelector('.subtotal');

  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;


  total = 0;
  const subtotales = document.querySelectorAll('.subtotal');
  subtotales.forEach(subtotalElement => {
    total += parseFloat(subtotalElement.textContent.replace('$', ''));
  });

  totalElement.textContent = total.toFixed(2);
}
