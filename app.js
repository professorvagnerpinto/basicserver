/**
 * Vídeo #1 ao #6: Node.js - Módulo 1 - B7Web
 * Servidor básico em Node.js.
 * Documentação do express: http://expressjs.com/
 * by: Vagner Pinto
 */

//adiciona a dependência
const express = require('express');
const router = require('./routes/index');

//configura o servidor
const app = express();
app.use('/', router); //trata das requisições na raiz do servidor, conforme as configurações no arquivo ./routes/index.js
app.use(express.json()) //habilita para requisições do tipo POST e PUT (com informações no  corpo da requisição)

//exporta a const
module.exports = app;
