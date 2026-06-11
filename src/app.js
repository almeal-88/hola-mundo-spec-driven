import { generarSaludo } from './saludo.js';

const btnSaludar = document.getElementById('btnSaludar');
const inputNombre = document.getElementById('nombre');
const mensaje = document.getElementById('mensaje');

function mostrarSaludo() {
  const nombre = inputNombre.value;
  mensaje.textContent = generarSaludo(nombre);
}

btnSaludar.addEventListener('click', mostrarSaludo);

inputNombre.addEventListener('keydown', (event) => {
  if (event.code === 'KeyH') {
    mostrarSaludo();
  }
});