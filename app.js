/**
 * Vídeo #1 ao #6: Node.js - Módulo 1 - B7Web
 * Servidor básico em Node.js.
 * by: Vagner Pinto
 */

//adiciona a dependência
const express = require('express');

//Cria as rotas
const router = express.Router();
router.get('/', (req, res)=>{ //a raiz do servidor
    res.send("Olá mundo 4.0");
});

//configura do servidor
const app = express();
app.use('/', router);

//exporta o módulo
module.exports = app;
