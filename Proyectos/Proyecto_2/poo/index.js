// ======================
// Clase Respuesta
// ======================
class Respuesta {
  constructor(texto) {
    this.texto = texto;
    this.votos = 0;
  }

  votar() {
    this.votos++;
  }

  mostrarResultado() {
    console.log(`   ${this.texto}: ${this.votos} votos`);
  }
}

// ======================
// Clase Pregunta
// ======================
class Pregunta {
  constructor(texto) {
    this.texto = texto;
    this.respuestas = [];
  }

  agregarRespuesta(respuesta) {
    this.respuestas.push(respuesta);
  }

  votar(indiceRespuesta) {
    if (indiceRespuesta >= 0 && indiceRespuesta < this.respuestas.length) {
      this.respuestas[indiceRespuesta].votar();
    }
  }

  mostrarResultados() {
    console.log(`\n${this.texto}`);
    this.respuestas.forEach(r => r.mostrarResultado());
  }
}

// ======================
// Clase Encuesta
// ======================
class Encuesta {
  constructor(titulo) {
    this.titulo = titulo;
    this.preguntas = [];
  }

  agregarPregunta(pregunta) {
    this.preguntas.push(pregunta);
  }

  responder() {
    this.preguntas.forEach((pregunta, i) => {
      let indiceOpcion;
      while (true) {
        const opciones = pregunta.respuestas
          .map((r, j) => `${j + 1}) ${r.texto}`)
          .join("\n");

        const entrada = prompt(
          `Pregunta ${i + 1}:\n${pregunta.texto}\n\n${opciones}\n\nElige una opción:`
        );

        indiceOpcion = parseInt(entrada, 10) - 1;
        if (!isNaN(indiceOpcion) && indiceOpcion >= 0 && indiceOpcion < pregunta.respuestas.length) {
          break;
        }
        alert("Opción inválida, intente nuevamente.");
      }

      pregunta.votar(indiceOpcion);
    });

    alert("¡Gracias por responder la encuesta!");
  }

  mostrarResultados() {
    console.log(`\n=== ENCUESTA: ${this.titulo} ===`);
    this.preguntas.forEach(p => p.mostrarResultados());
  }
}

// ======================
// Clase SistemaEncuestas
// ======================
class SistemaEncuestas {
  constructor() {
    this.encuestas = [];
  }

  crearEncuesta() {
    const titulo = prompt("=== CREAR ENCUESTA ===\n\nTítulo de la encuesta:");
    if (!titulo) return;

    let numPreguntas;
    while (true) {
      const entrada = prompt("¿Cuántas preguntas tendrá? (mínimo 8):");
      numPreguntas = parseInt(entrada, 10);
      if (!isNaN(numPreguntas) && numPreguntas >= 8) break;
      alert("Debe ingresar un número válido, mínimo 8.");
    }

    const encuesta = new Encuesta(titulo);

    for (let i = 0; i < numPreguntas; i++) {
      // Texto de la pregunta
      let texto;
      while (true) {
        texto = prompt(`Pregunta ${i + 1} de ${numPreguntas}:\nEscribe el enunciado:`);
        if (texto && texto.trim() !== "") break;
        alert("El enunciado no puede estar vacío.");
      }

      // Número de opciones (mínimo 2)
      let numOpc;
      while (true) {
        const entrada = prompt(`Pregunta ${i + 1}:\n${texto}\n¿Cuántas opciones tendrá? (mínimo 2):`);
        numOpc = parseInt(entrada, 10);
        if (!isNaN(numOpc) && numOpc >= 2) break;
        alert("Debe ingresar un número válido, mínimo 2.");
      }

      // Crear pregunta y opciones
      const pregunta = new Pregunta(texto);
      for (let j = 0; j < numOpc; j++) {
        let op;
        while (true) {
          op = prompt(`Pregunta ${i + 1}:\n${texto}\nOpción ${j + 1} de ${numOpc}:`);
          if (op && op.trim() !== "") break;
          alert("El texto de la opción no puede estar vacío.");
        }
        pregunta.agregarRespuesta(new Respuesta(op));
      }

      encuesta.agregarPregunta(pregunta);
    }

    this.encuestas.push(encuesta);
    alert("Encuesta creada correctamente.");
  }

  responderEncuesta() {
    if (this.encuestas.length === 0) {
      alert("No hay encuestas disponibles.");
      return;
    }

    let indiceEncuesta;
    while (true) {
      const listado = this.encuestas
        .map((e, i) => `${i + 1}) ${e.titulo}`)
        .join("\n");

      const entrada = prompt(`=== RESPONDER ENCUESTA ===\n\n${listado}\n\nElija encuesta:`);
      indiceEncuesta = parseInt(entrada, 10) - 1;
      if (!isNaN(indiceEncuesta) && indiceEncuesta >= 0 && indiceEncuesta < this.encuestas.length) break;
      alert("Selección inválida, intente nuevamente.");
    }

    this.encuestas[indiceEncuesta].responder();
  }

  mostrarResultados() {
    if (this.encuestas.length === 0) {
      alert("No hay encuestas disponibles.");
      return;
    }

    console.clear(); // Limpia la consola antes de mostrar todas las encuestas
    this.encuestas.forEach(encuesta => encuesta.mostrarResultados());
    alert("Resultados mostrados en la consola.");
  }

  ejecutar() {
    let salir = false;
    while (!salir) {
      const opcion = prompt(
        "=== MENÚ PRINCIPAL ===\n\n" +
        "1) Crear encuesta\n" +
        "2) Responder encuesta\n" +
        "3) Ver resultados\n" +
        "4) Salir\n\n" +
        "Seleccione una opción:"
      );

      switch (opcion) {
        case "1":
          this.crearEncuesta();
          break;
        case "2":
          this.responderEncuesta();
          break;
        case "3":
          this.mostrarResultados();
          break;
        case "4":
          salir = true;
          alert("¡Hasta luego!");
          break;
        default:
          alert("Opción inválida, intente nuevamente.");
      }
    }
  }
}
// ======================
// Inicializar sistema
// ======================
const sistema = new SistemaEncuestas();
sistema.ejecutar();
