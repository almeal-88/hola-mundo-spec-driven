import { describe, test, expect, beforeEach, vi } from 'vitest';
import { fireEvent, screen } from '@testing-library/dom';
import fs from 'fs';
import path from 'path';

// Se lee el archivo HTML desde la ruta
const html = fs.readFileSync(path.resolve(__dirname, '../../src/index.html'), 'utf8');

describe('Tests de Integración - Interfaz de Usuario (DOM)', () => {
  
  beforeEach(async () => {
    const bodyContent = html.match(/<body>([\s\S]*)<\/body>/)[1];

    document.body.innerHTML = bodyContent;

    vi.resetModules();

    await import('../../src/app.js'); 
  });

  test('CA-01 / RF-01: Al cargar la página, el contenedor principal debe decir "Hola Mundo"', () => {
    const mensaje = document.getElementById('mensaje');
    expect(mensaje).toBeInTheDocument();
    expect(mensaje.textContent).toBe('Hola Mundo');
  });

  test('RF-02 / RF-03: Los elementos interactivos requeridos deben estar presentes', () => {
    const input = screen.getByPlaceholderText(/escribe tu nombre/i);
    const boton = screen.getByRole('button', { name: /saludar/i });

    expect(input).toBeInTheDocument();
    expect(boton).toBeInTheDocument();
  });

 test('CA-02 / RF-04: Flujo completo al escribir un nombre y pulsar el botón', async () => {
    // 1. Recuperar los elementos del DOM simulado usando Testing Library y selectores estándar
    const input = screen.getByPlaceholderText(/escribe tu nombre/i);
    const boton = screen.getByRole('button', { name: /saludar/i });
    const mensaje = document.getElementById('mensaje');

    // 2. Simular que el usuario escribe el nombre "Ana"
    // Usamos 'change' para asegurar que JSDOM actualice el atributo interno .value inmediatamente
    fireEvent.change(input, { target: { value: 'Ana' } });

    // 3. Simular el clic del usuario en el botón "Saludar"
    fireEvent.click(boton);

    // 4. Verificación (Aserción): El contenido del elemento #mensaje debe haber cambiado
    expect(mensaje.textContent).toBe('Hola, Ana');
  });

  test('CA-03 / RF-05: Flujo cuando se presiona el botón manteniendo el campo vacío', () => {
    const input = screen.getByPlaceholderText(/escribe tu nombre/i);
    const boton = screen.getByRole('button', { name: /saludar/i });
    const mensaje = document.getElementById('mensaje');

    fireEvent.input(input, { target: { value: '' } });
    fireEvent.click(boton);

    expect(mensaje.textContent).toBe('Hola Mundo');
  });

  test('MO-01: Debe mostrar el saludo al pulsar la tecla H dentro del campo de texto', () => {
    const input = screen.getByPlaceholderText(/escribe tu nombre/i);
    const mensaje = document.getElementById('mensaje');

    fireEvent.change(input, { target: { value: 'Ana' } });

    fireEvent.keyDown(input, {
      key: 'h',
      code: 'KeyH',
    });

    expect(mensaje.textContent).toBe('Hola, Ana');
  });

  test('MO-01: No debe saludar al pulsar una tecla distinta de H', () => {
    const input = screen.getByPlaceholderText(/escribe tu nombre/i);
    const mensaje = document.getElementById('mensaje');

    fireEvent.change(input, { target: { value: 'Ana' } });

    fireEvent.keyDown(input, {
      key: 'a',
      code: 'KeyA',
    });

    expect(mensaje.textContent).toBe('Hola Mundo');
  });
});