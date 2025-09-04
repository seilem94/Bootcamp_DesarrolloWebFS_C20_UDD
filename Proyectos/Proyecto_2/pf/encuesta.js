// Estado inicial de la aplicación (encuesta vacía)
let encuesta = {
  preguntas: [],
  respuestas: []
};

// Función para agregar una pregunta
const agregarPregunta = (estado) => {
  const nueva = prompt("Escribe la nueva pregunta:");
  if (!nueva) return estado; // No cambia si no se ingresa nada
  return {
    ...estado,
    preguntas: [...estado.preguntas, nueva]
  };
};

// Función para responder preguntas
const responderPreguntas = (estado) => {
  if (estado.preguntas.length === 0) {
    alert("⚠️ No hay preguntas registradas.");
    return estado;
  }

  const respuestas = estado.preguntas.map((p) => {
    const r = prompt(`Pregunta: ${p}`);
    return r || "Sin respuesta";
  });

  return {
    ...estado,
    respuestas: [...estado.respuestas, respuestas]
  };
};

// Función para mostrar resultados
const verResultados = (estado) => {
  if (estado.preguntas.length === 0) {
    alert("⚠️ No hay preguntas para mostrar.");
    return;
  }

  let salida = "=== RESULTADOS DE LA ENCUESTA ===\n\n";
  estado.preguntas.forEach((pregunta, i) => {
    salida += `${i + 1}) ${pregunta}\n`;
    estado.respuestas.forEach((resp, idx) => {
      salida += `   Respuesta ${idx + 1}: ${resp[i]}\n`;
    });
    salida += "\n";
  });

  alert(salida);
};

// Bucle principal del menú
let opcion = "";
while (opcion !== "4") {
  opcion = prompt(
    "=== MENÚ ENCUESTA ===\n" +
    "1) Agregar pregunta\n" +
    "2) Responder preguntas\n" +
    "3) Ver resultados\n" +
    "4) Salir\n\n" +
    "Elige una opción:"
  );

  switch (opcion) {
    case "1":
      encuesta = agregarPregunta(encuesta);
      break;
    case "2":
      encuesta = responderPreguntas(encuesta);
      break;
    case "3":
      verResultados(encuesta);
      break;
    case "4":
      alert("👋 ¡Hasta luego!");
      break;
    default:
      alert("⚠️ Opción no válida, intenta de nuevo.");
      break;
  }
}
