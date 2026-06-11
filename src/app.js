import { generarSaludo } from './saludo.js';

const btnSaludar = document.getElementById('btnSaludar');
const inputNombre = document.getElementById('nombre');
const mensaje = document.getElementById('mensaje');

btnSaludar.addEventListener('click', () => {
  const nombre = inputNombre.value;
  mensaje.textContent = generarSaludo(nombre);
});