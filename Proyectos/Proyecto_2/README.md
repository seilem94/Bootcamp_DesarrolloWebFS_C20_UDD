# Proyecto Encuestas en JavaScript

Este proyecto permite a los usuarios crear encuestas, votar y ver resultados en tiempo real.  
El desarrollo se realizó en dos enfoques distintos:

- Programación Orientada a Objetos (POO)
- Programación Funcional (PF)

Si bien se utilizán dos enfoques distintos para la programación del codigo que permitirá las votaciones a traves del navegador, la interacción con el usuario será similar (por no decir igual).

Primero, el usuario se enfrentará a un Menú con X opciones:\
    1) Crear Encuesta/Preguntas\
    2) Responder Preguntas\
    3) Ver Votaciones de la(s) Encuesta(s)\
    4) Salir\



------------------------------------------------------------
## Estructura del Proyecto

Proyect_2/\
|── poo/\
|    ├── index.html   # Solución con Programación Orientada a Objetos\
|    └── index.js\
|
|── pf/\
|    ├── index.html   # Solución con Programación Funcional\
|    └── index.js\
└── README.md\

------------------------------------------------------------
## Requisitos Cumplidos

- Permitir a los usuarios crear encuestas con opciones de respuesta
- Permitir a los usuarios votar en las encuestas
- Mostrar los resultados en tiempo real
- Almacenar datos en variables y estructuras de datos
- Encuestas con mínimo 8 preguntas
- Implementación en POO y PF


------------------------------------------------------------
## Vista Previa

Enfoque POO
- Se utiliza "class" para modelar Encuesta, Pregunta y Opción.
- Los votos actualizan en tiempo real en el DOM.

Enfoque PF
- Se usan funciones puras e inmutabilidad.
- Los votos generan nuevos estados y se renderizan dinámicamente.


