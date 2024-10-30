//  Esta sintexis no funciona con "type":"module"
// const styleText = require('node:util')
// Módulo integrado en NODE para mostrar texto en colores
import {styleText} from 'node:util';

// console.log(styleText('blue', "Vamos a tomar un café YA!"));

// Primero importar los modulos
import express from 'express';
// Crear la instancia de la función
const app = express()

process.loadEnvFile()
const PORT = process.env.PORT


// Ruta home = inicio
app.get('/', function(req, res) {
    console.log(styleText("green", "Estamos en HOME!!!"));
    res.send('INICIO')
})

app.get('/node', function(req, res) {
    // res.send('NODEJS')
    // res.sendFile("./public/index.html",{root : "_dirname"})
})

app.get('/javascript', function(req, res) {
    res.send('JAVASCRIPT')
})

app.get("/alumno", (req, res) => {
    res.json({"nombre": "Elena", "apellido":"Nito Del Bosque","edad":"25"})
})

app.use( (req, res) => {
    res.status(404).send(`<img src="https://http.cat/404.jpg" alt="Not Found">`)
})

// Aquí inicamos el puerto de conexión
app.listen(PORT, () => {
    console.log(`Conexión en http://localhost:${PORT}`);
})

