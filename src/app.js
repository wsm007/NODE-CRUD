const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { config } = require('dotenv')

config()

const bookRoutes = require('./routes/book.routes.js')

const app = express();

// Parsear de Bodies
app.use(bodyParser.json());

// Conectar la BD
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME});
const db = mongoose.connection;

// Configurar las rutas
app.use('/books', bookRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
})