// Array para almacenar los libros
let libros = [];

function agregarLibro(titulo, autor, año) {
    const libro = {
        titulo: titulo,
        autor: autor,
        año: año
    };
    libros.push(libro);
    console.log(`Libro "${titulo}" agregado exitosamente.`);
}

const eliminarLibro = function(titulo) {
    const indice = libros.findIndex(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
    if (indice !== -1) {
        libros.splice(indice, 1);
        console.log(`Libro "${titulo}" eliminado exitosamente.`);
        return true;
    } else {
        console.log(`No se encontró el libro "${titulo}".`);
        return false;
    }
};

const buscarLibro = function(titulo) {
    return libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
};

// Función de flecha para mostrar todos los libros
const mostrarLibros = () => {
    
    let listaLibros = "Lista de libros:\n";
    libros.forEach(libro => {
        listaLibros += `- "${libro.titulo}" por ${libro.autor} (${libro.año})\n`;
    });
    console.log(listaLibros);
    return listaLibros;
};


// window.agregarLibro = agregarLibro;
// window.eliminarLibro = eliminarLibro;
// window.buscarLibro = buscarLibro;
// window.mostrarLibros = mostrarLibros;
