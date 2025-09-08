# Proyecto Encuestas en JavaScript

Este proyecto permite a los usuarios crear encuestas, votar y ver resultados en tiempo real.\
El desarrollo se realizó en dos enfoques distintos:


Enfoque POO\
- Se utiliza "class" para modelar Encuesta, Pregunta y Opción.\
- Los votos actualizan en tiempo real, y se muestran por Consola\

Enfoque PF\
- Se usan funciones puras e inmutabilidad.\
- Los votos generan nuevos estados y se muestran por Consola.\


------------------------------------------------------------
## Vista Previa

Si bien se utilizán dos enfoques distintos para la programación del codigo que permitirá las votaciones a traves del navegador, la interacción con el usuario será similar (por no decir igual).


Primero, el usuario se enfrentará a un Menú con 4 opciones:\
    1) Crear Encuesta/Preguntas\
    2) Responder Preguntas\
    3) Ver Votaciones de la(s) Encuesta(s)\
    4) Salir

La opción 1) esta construida  con la siguiente estructura para el usuario:
    -Primero se preguntará por el nombre de la Encuesta a crear.\
    -Luego se solicitará que se ingrese la cantidad de preguntas, esta debe ser igual o mayor a 8. En caso de ser menor, o no ser un número, el programa arrojará un error.\
    -Luego, se solicita crear las preguntas.\
    -Luego de la creación de las preguntas, preguntará el número de alternativas de la pregunta.\
    -Despues seguirá con el mismo proceso por el resto de las preguntas.\

Con la opcion 2) se presentarán las Encuesta(s) creadas, y solicitará a Usuario seleccionar alguna para su votación.

Con la opción 3) se imprimirán los resultados de todas las encuestas por consola.

Se asume la capacidad de poder realizar N Encuestas, con sus respectivos nombres, pero por manejo de datos volatiles, cada vez que se recargue el navegador se perderan las Encuestas, con sus respectivas preguntas y respuestas.

La interacción de ingreso de datos con el usuario se hace a traves de la sentencia "prompt".

Cada vez que se realiza una votación, por consola se imprimen los votos en tiempo real. De igual manera, al seleccionar la opción 3, se pueden ver las votaciones de cada encuesta a traves de la consola.


------------------------------------------------------------
## Estructura del Proyecto

Se encontrarán los archivos del proyecto en Git, con la siguiente estructura. 

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



