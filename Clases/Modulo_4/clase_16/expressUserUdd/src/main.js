import express from 'express';
import dotenv from 'dotenv';

//Objetivo abrir el puerto
const app = express();

app.listen(3000, () => {
  console.log(`Servidor escuchando en el puerto ${3000}`);
});