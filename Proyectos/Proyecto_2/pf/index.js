// ======================
// Estado inicial
// ======================
const estadoInicial = {
  encuestas: []
};

// ======================
// Funciones puras (no alteran el estado directamente)
// ======================
const agregarEncuesta = (estado, encuesta) => ({
  ...estado,
  encuestas: [...estado.encuestas, encuesta]
});

const votar = (estado, indiceEncuesta, indicePregunta, indiceOpcion) => {
  const encuestas = estado.encuestas.map((enc, i) => {
    if (i !== indiceEncuesta) return enc;

    const preguntas = enc.preguntas.map((preg, j) => {
      if (j !== indicePregunta) return preg;

      const conteo = preg.conteo.map((c, k) =>
        k === indiceOpcion ? c + 1 : c
      );

      return { ...preg, conteo };
    });

    return { ...enc, preguntas };
  });

  return { ...estado, encuestas };
};

// ======================
// Interacción con el usuario
// ======================
const crearEncuesta = (estado) => {
  const titulo = prompt("=== CREAR ENCUESTA ===\n\nTítulo de la encuesta:");
  if (!titulo) return estado;

  // Número de preguntas
  let numPreguntas;
  while (true) {
    const entrada = prompt("¿Cuántas preguntas tendrá? (mínimo 8):");
    numPreguntas = parseInt(entrada, 10);
    if (!isNaN(numPreguntas) && numPreguntas >= 8) break;
    alert("Debe ingresar un número válido, mínimo 8.");
  }

  const preguntas = [];
  for (let i = 0; i < numPreguntas; i++) {
    // Texto de la pregunta
    let texto;
    while (true) {
      texto = prompt(`Pregunta ${i + 1} de ${numPreguntas}:\n\nEscribe el enunciado:`);
      if (texto && texto.trim() !== "") break;
      alert("El enunciado no puede estar vacío.");
    }

    // Número de opciones
    let numOpc;
    while (true) {
      const entrada = prompt(`Pregunta ${i + 1}:\n${texto}\n\n¿Cuántas opciones tendrá? (mínimo 2):`);
      numOpc = parseInt(entrada, 10);
      if (!isNaN(numOpc) && numOpc >= 2) break;
      alert("Debe ingresar un número válido, mínimo 2.");
    }

    // Opciones
    const opciones = [];
    for (let j = 0; j < numOpc; j++) {
      let op;
      while (true) {
        op = prompt(`Pregunta ${i + 1}:\n${texto}\n\nOpción ${j + 1} de ${numOpc}:`);
        if (op && op.trim() !== "") break;
        alert("El texto de la opción no puede estar vacío.");
      }
      opciones.push(op);
    }

    preguntas.push({
      texto,
      opciones,
      conteo: Array(opciones.length).fill(0)
    });
  }

  const encuesta = { titulo, preguntas };
  alert("Encuesta creada correctamente.");
  return agregarEncuesta(estado, encuesta);
};

const responderEncuesta = (estado) => {
  if (estado.encuestas.length === 0) {
    alert("No hay encuestas disponibles.");
    return estado;
  }

  let indiceEncuesta;
  while (true) {
    const listado = estado.encuestas
      .map((e, i) => `${i + 1}) ${e.titulo}`)
      .join("\n");

    const entrada = prompt(`=== RESPONDER ENCUESTA ===\n\n${listado}\n\nElija encuesta:`);
    indiceEncuesta = parseInt(entrada, 10) - 1;
    if (!isNaN(indiceEncuesta) && indiceEncuesta >= 0 && indiceEncuesta < estado.encuestas.length) break;
    alert("Selección inválida, intente nuevamente.");
  }

  let nuevoEstado = { ...estado };
  const encuesta = estado.encuestas[indiceEncuesta];

  encuesta.preguntas.forEach((pregunta, idx) => {
    let indiceOpcion;
    while (true) {
      const opciones = pregunta.opciones
        .map((op, j) => `${j + 1}) ${op}`)
        .join("\n");

      const entrada = prompt(
        `Pregunta ${idx + 1}:\n${pregunta.texto}\n\n${opciones}\n\nElige una opción:`
      );

      indiceOpcion = parseInt(entrada, 10) - 1;
      if (!isNaN(indiceOpcion) && indiceOpcion >= 0 && indiceOpcion < pregunta.opciones.length) break;
      alert("Opción inválida, intente nuevamente.");
    }

    nuevoEstado = votar(nuevoEstado, indiceEncuesta, idx, indiceOpcion);
  });
  alert("¡Gracias por responder la encuesta!");
  return nuevoEstado;
};

const mostrarResultados = (estado) => {

  console.log("=== RESULTADOS DE ENCUESTAS ===");
  if (estado.encuestas.length === 0) {
    alert("No hay encuestas disponibles.");
    return;
  }

  console.clear();
  estado.encuestas.forEach((encuesta, i) => {
    console.log(`\n=== ENCUESTA ${i + 1}: ${encuesta.titulo} ===`);
    encuesta.preguntas.forEach((pregunta, j) => {
      console.log(`\n${j + 1}) ${pregunta.texto}`);
      pregunta.opciones.forEach((op, k) => {
        console.log(`   ${op}: ${pregunta.conteo[k]} votos`);
      });
    });
  });
  alert("Resultados mostrados en la consola.");
};

// ======================
// Menú principal
// ======================
let estado = estadoInicial;
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
      estado = crearEncuesta(estado);
      break;
    case "2":
      estado = responderEncuesta(estado);
      break;
    case "3":
      mostrarResultados(estado);
      break;
    case "4":
      salir = true;
      alert("¡Hasta luego!");
      break;
    default:
      alert("Opción inválida, intente nuevamente.");
  }
}
