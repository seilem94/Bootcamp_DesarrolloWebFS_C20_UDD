//PAtron repositorio
import { crearArchivo } from "../utils/file.utils.js";

export class UserCreator { //Genera la instancia de los objetos
    #id;
    #nombre;
    #apellido;
    #edad;
    #email;
    #isActive;

    constructor({id, nombre, apellido, edad, email}) {
        this.#id = id;
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#edad = edad;
        this.#email = email;
        this.#isActive = true; //Por defecto el usuario se crea como activo
    }

    // getters y setters
    get Id() {
        return this.#id;
    }

    get Nombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    get Apellido() {
        return this.#apellido;
    }
    setApellido(apellido) {
        this.#apellido = apellido;
    }


    get Edad() {
        return this.#edad;
    }

    setEdad(edad) {
        this.#edad = edad;
    }

    get Email() {
        return this.#email;
    }

    setEmail(email) {
        this.#email = email;
    }

    get IsActive() {
        return this.#isActive;
    }

    setIsActive(isActive) {
        this.#isActive = isActive;
    }

    //Metodo que suele usarse para mandar el objeto de cara al usuario
    toJson() { 
        return {
            id: this.#id,
            nombre: this.#nombre,
            apellido: this.#apellido,
            edad: this.#edad,
            email: this.#email,
        };
    }

    // Método para obtener todos los datos del usuario, como copia de desarrollo
    fullObject() {
        return {
            id: this.#id,
            nombre: this.#nombre,
            apellido: this.#apellido,
            edad: this.#edad,
            email: this.#email,
            isActive: this.#isActive
        };
    }

    get NombreCompleto() {
        return `${this.#nombre} ${this.#apellido}`; 
    }

}


const PATH_USER = './src/data/users.json';
export class User { //Modela la lógica interna del modelo

    static async create(data) {
        try {
            const user = new UserCreator(data);
            await crearArchivo();
            return user.fullObject();

        } catch (error) {
            console.error("Error al crear el usuario", error);
            throw new Error(`Error al crear el usuario: ${error.message}`);
        }
    }
}

const user = new UserCreator({
    id: 1,
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    email: 'juan.perez@example.com'
    });

    console.log("Aqui esta el usuario: ", user.toJson() )