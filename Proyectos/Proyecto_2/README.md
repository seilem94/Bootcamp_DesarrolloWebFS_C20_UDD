# Proyecto Encuestas en JavaScript

Este proyecto permite a los usuarios crear encuestas, votar y ver resultados en tiempo real.\
El desarrollo se realizó en dos enfoques distintos:


Enfoque POO
- Se utiliza "class" para modelar Encuesta, Pregunta y Opción.
- Los votos actualizan en tiempo real, y se muestran por Consola

Enfoque PF
- Se usan funciones puras e inmutabilidad.
- Los votos generan nuevos estados, y se muestran por Consola.

------------------------------------------------------------
## Explicacion de Cada Paradigma

### PF

### Funciones Puras

#### `agregarEncuesta(estado, encuesta)`
- **Parámetros:** `estado` actual y objeto `encuesta`.  
- **Función:** Retorna un **nuevo estado** con la encuesta agregada.  
- **Características:** No modifica el estado original (inmutabilidad).  

#### `votar(estado, indiceEncuesta, indicePregunta, indiceOpcion)`
- **Parámetros:** `estado` actual, índice de encuesta, índice de pregunta y opción elegida.  
- **Función:** Retorna un **nuevo estado** donde se incrementa el conteo de la opción seleccionada.  
- **Características:** Mantiene la inmutabilidad; no altera directamente los objetos originales.  

### Funciones de Interacción (con el usuario)

#### `crearEncuesta(estado)`
- **Función:** Permite al usuario crear una nueva encuesta mediante `prompt`.  
- **Validaciones:**  
  - Mínimo 8 preguntas.  
  - Mínimo 2 opciones por pregunta.  
  - Textos no vacíos.  
- **Retorna:** Un **nuevo estado** con la encuesta agregada.  

#### `responderEncuesta(estado)`
- **Función:** Permite al usuario seleccionar una encuesta existente y responder cada pregunta.  
- **Detalles:**  
  - Muestra preguntas y opciones con `prompt`.  
  - Usa `votar` para actualizar conteos de votos.  
- **Retorna:** Un **nuevo estado** con los votos actualizados.  

#### `mostrarResultados(estado)`
- **Función:** Recorre todas las encuestas y sus preguntas.  
- **Detalles:**  
  - Muestra en consola cada pregunta con las opciones y la cantidad de votos.  
- **Características:** No modifica el estado.  

### POO

Al comienzo se habái creado solo 3 Clases: Pregunta, Encuesta y SistemaEncuesta, pero para desacoplar más el sistema en el caso en que se necesite escalar el sistema en el futuro, se creó una cuarta clase: Respuesta. De esta forma el codigo final quedó con estas 4 clases que pasan de resumirse a continuación.

#### 1. Clase `Respuesta`
- **Propósito:** Representa una opción de respuesta dentro de una pregunta.  
- **Atributos:**  
  - `texto`: el contenido de la respuesta.  
  - `votos`: contador de votos que recibe la respuesta.  
- **Métodos:**  
  - `votar()`: incrementa el contador de votos en 1.  
  - `mostrarResultado()`: muestra en consola el texto de la respuesta y el número de votos.  

#### 2. Clase `Pregunta`
- **Propósito:** Representa una pregunta dentro de una encuesta.  
- **Atributos:**  
  - `texto`: enunciado de la pregunta.  
  - `respuestas`: array de objetos `Respuesta`.  
- **Métodos:**  
  - `agregarRespuesta(respuesta)`: agrega una opción a la pregunta.  
  - `votar(indiceRespuesta)`: registra un voto en la opción seleccionada.  
  - `mostrarResultados()`: imprime en consola la pregunta y los resultados de todas sus respuestas.  

#### 3. Clase `Encuesta`
- **Propósito:** Agrupa preguntas para formar una encuesta completa.  
- **Atributos:**  
  - `titulo`: título de la encuesta.  
  - `preguntas`: array de objetos `Pregunta`.  
- **Métodos:**  
  - `agregarPregunta(pregunta)`: agrega una pregunta a la encuesta.  
  - `responder()`: permite al usuario votar en cada pregunta usando `prompt`, validando la opción seleccionada.  
  - `mostrarResultados()`: muestra en consola el título de la encuesta y los resultados de todas las preguntas.  

#### 4. Clase `SistemaEncuestas`
- **Propósito:** Gestiona el flujo completo del sistema de encuestas.  
- **Atributos:**  
  - `encuestas`: array de objetos `Encuesta`.  
- **Métodos:**  
  - `crearEncuesta()`: permite al usuario crear una encuesta, agregar preguntas y opciones con validación.  
  - `responderEncuesta()`: permite seleccionar una encuesta y responder todas sus preguntas.  
  - `mostrarResultados()`: muestra los resultados de todas las encuestas en la consola.  
  - `ejecutar()`: bucle principal que muestra el menú, solicita opciones y ejecuta las acciones correspondientes.  


------------------------------------------------------------
### Vista Previa

Si bien se utilizán dos enfoques distintos para la programación del codigo que permitirá las votaciones a traves del navegador, la interacción con el usuario será similar (por no decir igual).


Primero, el usuario se enfrentará a un Menú con 4 opciones:

    1) Crear Encuesta/Preguntas
    2) Responder Preguntas
    3) Ver Votaciones de la(s) Encuesta(s)
    4) Salir

La opción 1) esta construida  con la siguiente estructura para el usuario:

    -Primero se preguntará por el nombre de la Encuesta a crear.
    -Luego se solicitará que se ingrese la cantidad de preguntas, esta debe ser igual o mayor a 8. En caso de ser menor, o no ser un número, el programa arrojará un error.
    -Luego, se solicita crear las preguntas.
    -Luego de la creación de las preguntas, preguntará el número de alternativas de la pregunta.
    -Despues seguirá con el mismo proceso por el resto de las preguntas.


Con la opcion 2) se presentarán las Encuesta(s) creadas, y solicitará a Usuario seleccionar alguna para su votación.
    
    -En esta opción se responde solo en base al número de la opcion y no en su contenido. Cualquier valor que sea un número fuera del rango u otro carácter sera una opción invalida.

Con la opción 3) se imprimirán los resultados de todas las encuestas por consola.
    
    -Al seleccionar la opción 3, se pueden ver las votaciones de cada encuesta a traves de la consola.
    -Se implementa el comando "console.clear()" al comienzo de la función para limpiar la consola y mostrar la información de forma ordenada, pero el navegador no lleva a cabo la instrucción. Se deja para futuras pruebas.


#### Consideraciones:
-   Se asume la capacidad de poder realizar N Encuestas, con sus respectivos nombres, pero por manejo de datos volatiles, cada vez que se recargue el navegador se perderan las Encuestas, con sus respectivas preguntas y respuestas.
-   Una vez creadas las preguntas y respuestas, la encuesta no puede ser modificada ni en cantidad de preguntas y/o respuestas de cada preguntas, ni en su contenido.
-   La interacción de ingreso de datos con el usuario se hace a traves de la sentencia "prompt".

------------------------------------------------------------
## Estructura del Proyecto

Se encontrarán los archivos del proyecto en Git, con la siguiente estructura. 

Proyecto_2/\
|\
|─ poo/ # Solución con Programación Orientada a Objetos\
|    ├── index.html\
|    └── index.js  \
|\
|─ pf/ # Solución con Programación Funcional\
|    ├── index.html\
|    └── index.js\
|\
└── README.md


------------------------------------------------------------
## Requisitos Cumplidos

- Permitir a los usuarios crear encuestas con opciones de respuesta
- Permitir a los usuarios votar en las encuestas
- Mostrar los resultados en tiempo real
- Almacenar datos en variables y estructuras de datos
- Encuestas con mínimo 8 preguntas
- Implementación en POO y PF


------------------------------------------------------------



