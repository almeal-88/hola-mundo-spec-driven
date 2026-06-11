/**
 * Genera un saludo personalizado.
 * @param {string|null} nombre - El nombre del usuario.
 * @returns {string} "Hola, [nombre]" o "Hola Mundo" si el nombre está vacío.
 */
export function generarSaludo(nombre) {
  if (!nombre || nombre.trim() === '') {
    return 'Hola Mundo';
  }
  return `Hola, ${nombre.trim()}`;
}