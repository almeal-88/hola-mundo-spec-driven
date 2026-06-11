import { describe, test, expect } from 'vitest';
import { generarSaludo } from '../../src/saludo.js';

describe('Tests Unitarios - Función generarSaludo', () => {

  test('RF-01 / RF-05: Debe devolver "Hola Mundo" si el parámetro está vacío o tiene espacios', () => {
    expect(generarSaludo('')).toBe('Hola Mundo');
    expect(generarSaludo('   ')).toBe('Hola Mundo');
    expect(generarSaludo(null)).toBe('Hola Mundo');
  });

  test('RF-04 / CA-02: Debe devolver "Hola, Ana" cuando se introduce el nombre "Ana"', () => {
    expect(generarSaludo('Ana')).toBe('Hola, Ana');
  });

  test('CA-04: Debe funcionar con cualquier otro string de nombre válido', () => {
    expect(generarSaludo('Carlos')).toBe('Hola, Carlos');
  });
});