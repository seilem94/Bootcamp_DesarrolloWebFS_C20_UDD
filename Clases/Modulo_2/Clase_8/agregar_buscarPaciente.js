const agregarPaciente = (pacientes, nuevoPaciente) => {
    //Verificaciones
    if (!Array.isArray(pacientes)) {
        return "Error: Los pacientes deben ser un arreglo.";
    }

    const pacienteExiste = pacientes.some(paciente => paciente.nombre === nuevoPaciente.nombre);
    if(pacienteExiste){
        return `Error: Paciente con nombre "${nuevoPaciente.nombre}" ya existe.`;
    } 

    if (!nuevoPaciente || !nuevoPaciente.nombre) {
        return "Error: El nuevo paciente debe ser un objeto con un nombre.";
    }

    console.log(`Paciente ${nuevoPaciente.nombre} agregado con éxito.`);
    return [...pacientes, nuevoPaciente]; 
};

const buscarPaciente = (pacientes, nombrePaciente) => {
    if (!Array.isArray(pacientes) || pacientes.length === 0) {
        return "Error: La lista de pacientes deben ser un arreglo no vacío.";
    }

    return pacientes.find(paciente => paciente.nombre === nombrePaciente) || `Paciente "${nombrePaciente}" no encontrado.`;
};


let pacientes = [
    { nombre: "Juan", edad: 40, cita: "2025-09-01" },
    { nombre: "Ana", edad: 25, cita: "2025-08-30" },
    { nombre: "Natalia", edad: 28, cita: "2025-10-03" }
];

console.log(pacientes);

console.log(buscarPaciente(pacientes, "Ana"));
console.log(buscarPaciente(pacientes, "Salem"));
console.log(agregarPaciente(pacientes, { nombre: "Salem", edad: 30, cita: "2025-09-04" }));

console.log(pacientes);
console.log(buscarPaciente(pacientes, "Salem"));

