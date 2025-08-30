const reservarAsiento = (asientosDisponibles, asiento) => {
    // Validaciones
    if (!Array.isArray(asientosDisponibles)) {
        return "Error: Los asientos disponibles deben ser un arreglo.";
    }

    if (!asientosDisponibles.includes(asiento)) {
        return `Error: el asiento ${asiento} no esta disponible.`;
    }

    return asientosDisponibles.filter(a => a !== asiento);

};

const asientos = [1, 2, 3, 4, 5];

console.log(asientos);
const nuevoAsiento = reservarAsiento(asientos, 3);
console.log(nuevoAsiento); // [1, 2, 4, 5]
console.log(reservarAsiento (nuevoAsiento,3));

console.log(reservarAsiento(asientos, 6)); // Error: el asiento 6 no esta disponible.
console.log(reservarAsiento(asientos, [1, 2])); // [3, 4, 5]