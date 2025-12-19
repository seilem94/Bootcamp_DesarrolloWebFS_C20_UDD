const mongoose = require("mongoose");

const eventoSchema = mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true
        },
        descripcion: {
            type: String
        },
        fecha: {
            type: Date,
            required: true
        },        
        ubicacion: {
            type: String
        },  
        precio: {
            type: String,
            required: true
        }    
    },

    {
        timestamps: true
    }
);

const Evento = mongoose.model('Evento', eventoSchema);

module.exports = Evento;
