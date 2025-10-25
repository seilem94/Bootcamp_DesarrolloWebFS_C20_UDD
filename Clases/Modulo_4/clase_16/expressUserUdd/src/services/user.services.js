import { v4 as uuidv4 } from 'uuid';
import User from "./serc/models/User.model.js";

export const createUserService = async (data) => { //Genera la instancia de los objetos
    const id = uuidv4();
    const userData = {
        id,
        ...data
    };
    return userData;
}