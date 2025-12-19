const mongoose = require("mongoose");

const guitarSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Guitar = mongoose.model('Guitar', guitarSchema);

module.exports = Guitar;

/* Crear un archivo llamado User.js y utilizando una estructura similar a la de la guitarra, crea un esquema
para un usuario con las propiedades username, email y password las cuales deben ser requeridas y el email unique. */