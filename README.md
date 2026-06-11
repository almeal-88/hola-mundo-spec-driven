Hola Mundo — Spec-Driven Development con IA

Aplicación web sencilla que muestra un saludo personalizado. Desarrollada siguiendo un flujo de trabajo basado en especificación previa, generación de tests con IA e implementación guiada por IA.


¿Qué hace la aplicación?


Muestra el texto Hola Mundo al cargar la página.
Permite introducir un nombre en un campo de texto.
Al pulsar el botón Saludar, muestra Hola, <nombre>.
Si el campo está vacío al pulsar el botón, mantiene Hola Mundo.
Mejora: al pulsar la tecla H dentro del campo de texto, se activa el saludo automáticamente sin necesidad de hacer clic en el botón.



Instalación

Clona el repositorio e instala las dependencias:

bashgit clone https://github.com/TU_USUARIO/hola-mundo-spec-driven.git
cd hola-mundo-spec-driven
npm install


Ejecución

Abre el archivo src/index.html directamente en el navegador, o usa un servidor local:

bashnpx serve src


Tests

Este proyecto incluye tests unitarios y tests de integración. No se han incluido tests e2e dado el alcance reducido de la aplicación; los tests unitarios y de integración cubren todos los criterios de aceptación definidos en la especificación.

Para ejecutar los tests:

bashnpm test


Estructura del proyecto

hola-mundo-spec-driven/
├── SPEC.md              # Especificación de la aplicación
├── README.md            # Este archivo
├── package.json         # Dependencias y scripts
├── src/
│   ├── index.html       # Estructura de la aplicación
│   ├── main.js          # Lógica principal
│   └── style.css        # Estilos
└── tests/
    ├── saludo.unit.test.js        # Tests unitarios
    └── saludo.integration.test.js # Tests de integración


Uso de IA

Herramienta utilizada

Claude (Anthropic) a través de claude.ai.

Proceso seguido

Esta práctica se ha desarrollado sin programar manualmente la aplicación. El rol adoptado ha sido el de analista, especificador y revisor: definir qué debe hacer la app, pedir a la IA que genere tests y código, y validar que el resultado cumple la especificación.

Prompts principales

Para generar los tests:


"Tengo esta especificación en SPEC.md. Genera tests unitarios y tests de integración para una app web Hola Mundo. No implementes todavía la aplicación. Usa una estructura sencilla con npm y Vitest."



Para generar la aplicación:


"A partir de este SPEC.md y de estos tests, genera la aplicación web necesaria para que todos los tests pasen. No cambies los requisitos funcionales. Explica qué archivos has creado o modificado."



Para corregir errores:


"Estos tests están fallando. Analiza el error y propón los cambios mínimos necesarios para que pasen. No elimines tests salvo que estén mal definidos según la especificación."



Para añadir la mejora:


"Actualiza los tests y la implementación para añadir esta mejora. Mantén todos los tests anteriores pasando. Primero modifica la especificación, después los tests y por último el código."



Qué generó la IA


El archivo SPEC.md (revisado y ajustado por el alumno).
Los tests unitarios y de integración en tests/.
Los archivos src/index.html, src/main.js y src/style.css.
El package.json con las dependencias y scripts necesarios.
Los tests adicionales y la implementación de la mejora (tecla H).


Errores encontrados y cómo se corrigieron

Al ejecutar npm test por primera vez, aparecieron errores relacionados con la forma en que los tests accedían al DOM. La IA había generado los tests asumiendo una estructura HTML ligeramente diferente a la que luego generó en la implementación.

Se proporcionó el mensaje de error completo a la IA y se aplicaron los cambios mínimos sugeridos sin eliminar ningún test ni modificar los requisitos funcionales. En el segundo pase, todos los tests pasaron correctamente.
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

Decisiones tomadas por el alumno


Se decidió no incluir tests e2e (Playwright, Cypress) dado el alcance reducido de la aplicación. Los tests unitarios y de integración cubren todos los criterios de aceptación definidos en la especificación, y añadir tests e2e habría aumentado la complejidad de configuración sin aportar valor real en este caso.
La mejora elegida fue el saludo automático al pulsar la tecla H dentro del campo de texto. La especificación original sugería usar Enter, pero se optó por H como variante propia para diferenciar la práctica y demostrar que la especificación la define el alumno, no la IA.
En todo momento se mantuvo el principio de no programar directamente: todos los cambios en el código fueron sugeridos por la IA a partir de prompts o mensajes de error proporcionados por el alumno.



Historial de commits

#MensajeDescripción1chore: inicializar repositorioEstructura inicial, .gitignore y README.md vacío2docs: añadir especificación inicialPrimera versión de SPEC.md3test: añadir tests generados desde la especificaciónTests unitarios e integración generados con IA4feat: implementar aplicación generada por IAPrimera versión funcional de la app5.1test: ejecutar tests e identificar erroresResultado de npm test con fallos documentados5.2fix: corregir errores detectados por los testsCorrecciones aplicadas con ayuda de IA6docs: actualizar especificación con mejoraSPEC.md actualizado con la mejora (tecla H)7test: añadir tests para la mejoraNuevos tests para la mejora, manteniendo los anteriores8feat: implementar mejora con IAImplementación de la tecla H9docs: completar README con uso de IAEste archivo