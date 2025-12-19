require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const Evento = require("./models/Evento");

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

// middleware
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({ message: 'ok'});
}) // localhost:3000

app.get('/eventos', async (req, res) => {
    try {
        const eventos = await Evento.find({});
        return res.status(200).json({ eventos });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al obtener los eventos',
            error: error.message
        })
    }
})

app.post('/eventos', async (req, res) => {
    try {
        const { titulo, descripcion, fecha, ubicacion, precio } = req.body;
        const newEvento = await Evento.create({ titulo, descripcion, fecha, ubicacion, precio });

        if (!newEvento) return res.status(400).json({ error: 'No fue posible crear el evento' });

        return res.status(201).json({ datos: newEvento });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al crear el evento',
            error: error.message
        })
    }
})

app.put('/eventos/:id', async (req, res) => {
    try {
        const { titulo, descripcion, fecha, ubicacion, precio } = req.body;
        const updatedEvento = await Evento.findByIdAndUpdate(
            req.params.id,
            { titulo, descripcion, fecha, ubicacion, precio },
            { new: true, runValidators: true }
        )
        if (!updatedEvento) return res.status(404).json({ message: 'Evento no encontrado' });
        return res.status(200).json({ eventoActualizado: updatedEvento });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al actualizar el evento',
            error: error.message
        })
    }
})

app.delete('/eventos/:id', async (req, res) => {
    try {
        const deletedEvento = await Evento.findByIdAndDelete(req.params.id);
        if (!deletedEvento) return res.status(404).json({ message: 'Evento no encontrado' });
        return res.status(200).json({ message: 'El evento se elimino correctamente' });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al eliminar el evento',
            error: error.message
        })
    }
})

app.listen(PORT, ()=> {
    console.log('El servidor esta corriendo en el puerto ' + PORT);
})
