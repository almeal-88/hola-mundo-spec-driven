# SPEC.md

## Descripción

Desarrollar una aplicación web sencilla que muestre el mensaje "Hola Mundo" al cargar la página. La aplicación incluirá un campo de entrada para que el usuario escriba su nombre y un botón "Saludar". Al pulsar el botón, se mostrará un saludo personalizado si se ha introducido un nombre. Si el campo está vacío, el mensaje permanecerá como "Hola Mundo".

---

## Requisitos Funcionales

### RF-01: Mensaje inicial

* La aplicación debe mostrar el texto **"Hola Mundo"** al cargarse.

### RF-02: Campo de nombre

* La aplicación debe incluir un campo de texto donde el usuario pueda introducir su nombre.

### RF-03: Botón Saludar

* La aplicación debe incluir un botón etiquetado como **"Saludar"**.

### RF-04: Saludo personalizado

* Al pulsar el botón "Saludar", si el campo contiene un nombre, la aplicación debe mostrar el mensaje:

  * "Hola, [nombre]"

### RF-05: Campo vacío

* Si el usuario pulsa el botón "Saludar" con el campo vacío, la aplicación debe seguir mostrando:

  * "Hola Mundo"

---

## Casos de Uso

### CU-01: Ver mensaje inicial

**Actor:** Usuario

**Flujo principal:**

1. El usuario abre la aplicación.
2. La aplicación muestra "Hola Mundo".

### CU-02: Obtener saludo personalizado

**Actor:** Usuario

**Flujo principal:**

1. El usuario escribe un nombre en el campo de texto.
2. El usuario pulsa el botón "Saludar".
3. La aplicación muestra "Hola, [nombre]".

**Ejemplo:**

* Entrada: Ana
* Resultado: "Hola, Ana"

### CU-03: Saludar con campo vacío

**Actor:** Usuario

**Flujo principal:**

1. El usuario deja vacío el campo de texto.
2. El usuario pulsa el botón "Saludar".
3. La aplicación mantiene el mensaje "Hola Mundo".

---

## Criterios de Aceptación

### CA-01

**Dado** que el usuario abre la aplicación
**Cuando** la página termina de cargar
**Entonces** se muestra el texto "Hola Mundo".

### CA-02

**Dado** que el usuario escribe "Ana" en el campo de nombre
**Cuando** pulsa el botón "Saludar"
**Entonces** se muestra el texto "Hola, Ana".

### CA-03

**Dado** que el campo de nombre está vacío
**Cuando** el usuario pulsa el botón "Saludar"
**Entonces** el texto mostrado permanece como "Hola Mundo".

### CA-04

**Dado** que el usuario introduce cualquier nombre válido
**Cuando** pulsa el botón "Saludar"
**Entonces** el texto mostrado debe ser "Hola, [nombre introducido]".

---

## Mejora Opcional

### MO-01: Saludo automático con tecla Enter

Permitir que el usuario obtenga el saludo personalizado pulsando la tecla **H** dentro del campo de texto, sin necesidad de hacer clic en el botón "Saludar".
