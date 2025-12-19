require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const User = require("./models/User");
const Guitar = require("./models/Guitar");

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

// middleware
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({ message: 'ok'});
}) // localhost:3000

app.get('/guitars', async (req, res) => {
    try {
        const guitars = await Guitar.find({});
        return res.status(200).json({ guitars });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al obtener las guitarras',
            error: error.message
        })
    }
})

app.post('/guitars', async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const newGuitar = await Guitar.create({ name, price, description });

        if (!newGuitar) return res.status(400).json({ error: 'No fue posible crear la guitarra' });

        return res.status(201).json({ datos: newGuitar });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al crear la guitarra',
            error: error.message
        })
    }
})

app.put('/guitars/:id', async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const updatedGuitar = await Guitar.findByIdAndUpdate(
            req.params.id,
            { name, price, description },
            { new: true, runValidators: true }
        )
        if (!updatedGuitar) return res.status(404).json({ message: 'Guitarra no encontrada' });
        return res.status(200).json({ guitarraActualizada: updatedGuitar });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al actualizar la guitarra',
            error: error.message
        })
    }
})

app.delete('/guitars/:id', async (req, res) => {
    try {
        const deletedGuitar = await Guitar.findByIdAndDelete(req.params.id);
        if (!deletedGuitar) return res.status(404).json({ message: 'Guitarra no encontrada' });
        return res.status(200).json({ message: 'La guitarra se elimino correctamente' });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al eliminar la guitarra',
            error: error.message
        })
    }
})


// Crear un endpoint para el usuario que permita obtener todos los usuarios de la base de datos.
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al obtener los usuarios',
            error: error.message
        })
    }
})

// Crear un endpoint para el usuario que permita crear un usario en la base de datos.
app.post('/users', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await User.create({ username, email, password });

        if (!newUser) return res.status(400).json({ error: 'No fue posible crear el usuario' });

        return res.status(201).json({ datos: newUser });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al crear el usuario',
            error: error.message
        })
    }
})

// Crear un endpoint para el usuario que permita actualizar el usuario en la base de datos.
app.put('/users/:id', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { username, email, password },
            { new: true, runValidators: true }
        )
        if (!updatedUser) return res.status(404).json({ message: 'Usuario no encontrado' });
        return res.status(200).json({ usuarioActualizado: updatedUser });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al actualizar el usuario',
            error: error.message
        })
    }
})

// Crear un endpoint para el usuario que permita eliminar el usuario en la base de datos.
app.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'Usuario no encontrado' });
        return res.status(200).json({ message: 'El usuario se elimino correctamente' });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al eliminar el usuario',
            error: error.message
        })
    }
})

app.listen(PORT, ()=> {
    console.log('El servidor esta corriendo en el puerto ' + PORT);
})
