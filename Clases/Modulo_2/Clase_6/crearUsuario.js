function crearUsuario(nombre, apellido, correo, ocupacion, edad){

//validaciones
if (typeof nombre !== "string" || nombre.trim() === ""){
    return "nombre inválido";
}

if (typeof apellido !== "string" || apellido.trim() === ""){
    return "apellido no válido";
}

if(typeof correo !== "string" || !correo.includes("@")) {
    return "correo electrónico inválido"
}

if (typeof ocupacion !== "string" || ocupacion.trim() === ""){
    return "ocupacion inválida";
}

if (typeof edad !== "number" || edad <= 0){
    return "edad inválida"
}

//crear el objeto usuario

const usuario = {
    nombre: nombre.trim(),
    apellido: apellido.trim(),
    correo: correo.trim(),
    ocupacion: ocupacion.trim(),
    edad
};

return usuario;

}


const usuario1 = crearUsuario("Francisco", "Goschenko", "francisco@email", "Full Stack", 20);
console.log(usuario1);
const usuario2 = crearUsuario("Antonia", "E.", "antonia@email.com", "Full Stack", 17);
console.log(usuario2)