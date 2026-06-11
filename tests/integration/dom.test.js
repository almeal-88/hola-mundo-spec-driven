import { describe, test, expect, beforeEach, vi } from 'vitest';
import { fireEvent, screen } from '@testing-library/dom';
import fs from 'fs';
import path from 'path';

// Se lee el archivo HTML desde la nueva ruta en src/
const html = fs.readFileSync(path.resolve(__dirname, '../../src/index.html'), 'utf8');

describe('Tests de Integración - Interfaz de Usuario (DOM)', () => {
  
  beforeEach(() => {
    // Restablecer el DOM simulado antes de cada test
    document.documentElement.innerHTML = html.toString();
    
    // Resetear módulos e importar la lógica de control del DOM en src/
    vi.resetModules();
    import('../../src/app.js'); 
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
    const input = screen.getByPlaceholderText(/escribe tu nombre/i);
    const boton = screen.getByRole('button', { name: /saludar/i });
    const mensaje = document.getElementById('mensaje');

    fireEvent.input(input, { target: { value: 'Ana' } });
    fireEvent.click(boton);

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
});