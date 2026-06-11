

Errores encontrados
> hola-mundo-vitest-tdd@1.0.0 test
> vitest run


 RUN  v4.1.8 C:/Users/User/Desktop/Practica-AIDriven/hola-mundo-spec-driven

 ✓ tests/unit/saludo.test.js (3 tests) 3ms
 ❯ tests/integration/dom.test.js (4 tests | 4 failed) 30ms
     × CA-01 / RF-01: Al cargar la página, el contenedor principal debe decir "Hola Mundo" 15ms
     × RF-02 / RF-03: Los elementos interactivos requeridos deben estar presentes 9ms
     × CA-02 / RF-04: Flujo completo al escribir un nombre y pulsar el botón 3ms
     × CA-03 / RF-05: Flujo cuando se presiona el botón manteniendo el campo vacío 2ms

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 4 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
 FAIL  tests/integration/dom.test.js > Tests de Integración - Interfaz de Usuario (DOM) > CA-01 / RF-01: Al cargar la página, el contenedor principal debe decir "Hola Mundo"
Error: Invalid Chai property: toBeInTheDocument
 ❯ tests/integration/dom.test.js:22:20
     20|   test('CA-01 / RF-01: Al cargar la página, el contenedor principal debe decir "Hola Mundo"', () => {
     21|     const mensaje = document.getElementById('mensaje');
     22|     expect(mensaje).toBeInTheDocument();
       |                    ^
     23|     expect(mensaje.textContent).toBe('Hola Mundo');
     24|   });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/4]⎯
 FAIL  tests/integration/dom.test.js > Tests de Integración - Interfaz de Usuario (DOM) > RF-02 / RF-03: Los elementos interactivos requeridos deben estar presentes
TestingLibraryElementError: Unable to find an element with the placeholder text of: /escribe tu nombre/i

Ignored nodes: comments, script, style
<body />
 ❯ Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 ❯ node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 ❯ node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 ❯ node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 ❯ tests/integration/dom.test.js:27:26
     25|
     26|   test('RF-02 / RF-03: Los elementos interactivos requeridos deben estar presentes', () => {
     27|     const input = screen.getByPlaceholderText(/escribe tu nombre/i);
       |                          ^
     28|     const boton = screen.getByRole('button', { name: /saludar/i });
     29|

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/4]⎯
 FAIL  tests/integration/dom.test.js > Tests de Integración - Interfaz de Usuario (DOM) > CA-02 / RF-04: Flujo completo al escribir un nombre y pulsar el botón
TestingLibraryElementError: Unable to find an element with the placeholder text of: /escribe tu nombre/i

Ignored nodes: comments, script, style
<body />
 ❯ Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 ❯ node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 ❯ node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 ❯ node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 ❯ tests/integration/dom.test.js:35:26
     33|
     34|   test('CA-02 / RF-04: Flujo completo al escribir un nombre y pulsar el botón', async () => {
     35|     const input = screen.getByPlaceholderText(/escribe tu nombre/i);
       |                          ^
     36|     const boton = screen.getByRole('button', { name: /saludar/i });
     37|     const mensaje = document.getElementById('mensaje');

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/4]⎯
 FAIL  tests/integration/dom.test.js > Tests de Integración - Interfaz de Usuario (DOM) > CA-03 / RF-05: Flujo cuando se presiona el botón manteniendo el campo vacíoTestingLibraryElementError: Unable to find an element with the placeholder text of: /escribe tu nombre/i

Ignored nodes: comments, script, style
<body />
 ❯ Object.getElementError node_modules/@testing-library/dom/dist/config.js:37:19
 ❯ node_modules/@testing-library/dom/dist/query-helpers.js:76:38
 ❯ node_modules/@testing-library/dom/dist/query-helpers.js:52:17
 ❯ node_modules/@testing-library/dom/dist/query-helpers.js:95:19
 ❯ tests/integration/dom.test.js:46:26
     44|
     45|   test('CA-03 / RF-05: Flujo cuando se presiona el botón manteniendo el campo vacío', () => {
     46|     const input = screen.getByPlaceholderText(/escribe tu nombre/i);
       |                          ^
     47|     const boton = screen.getByRole('button', { name: /saludar/i });
     48|     const mensaje = document.getElementById('mensaje');

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/4]⎯

 Test Files  1 failed | 1 passed (2)
      Tests  4 failed | 3 passed (7)
   Start at  11:13:51
   Duration  1.10s (transform 70ms, setup 41ms, import 212ms, tests 34ms, environment 1.30s)