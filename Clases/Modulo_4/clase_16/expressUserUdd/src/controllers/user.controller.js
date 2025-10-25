import { createUserService } from "../services/user.services";


export const userCreate = async (req, res) => {
    try {
        const user = req.body;
        const data = await createUserService(user);
        res.status(201).json({ 
            message: "Usuario creado exitosamente", 
            statusCode: 201,
            user: data 
        });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el usuario", error: error.message });
    }
};