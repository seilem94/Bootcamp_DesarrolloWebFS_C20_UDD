const actualizarUsuario = (usuarios, nombreUsuario, datosActualizados) => {
    // Validaciones; Lista de usuarios válida y usuario existente
    if (!Array.isArray(usuarios)) {
        return "Error: La Lista de Usuarios debe ser un arreglo.";
    }

    const usuarioExiste = usuarios.some(usuario => usuario.nombre === nombreUsuario);
    if(!usuarioExiste){
        return `Error: Usuario con nombre ${nombreUsuario} no encontrado.`;
    } 

    // Actualización del usuario
    return usuarios.map(user=>user.nombre === nombreUsuario ? 
        {...user, ...datosActualizados} 
        : user
    );
};

const usuarios = [
    { nombre: "Juan", edad: 25, email: "juan@example.com" },
    { nombre: "Maria", edad: 30, email: "maria@example.com" },
    { nombre: "Pedro", edad: 28, email: "pedro@example.com" }
];
console.log(usuarios);

const usuarioActualizado = actualizarUsuario(usuarios, "Maria", { edad: 31, email: "maria.nueva@example.com" });
console.log(usuarioActualizado);

const usuarioNoExistente = actualizarUsuario(usuarios, "Ana", { edad: 22, email: "ana@example.com" });
console.log(usuarioNoExistente);