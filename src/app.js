/**
 * Vídeo #1 ao #6: Node.js - Módulo 1 - B7Web
 * Servidor básico em Node.js.
 * Documentação do express: http://expressjs.com/
 * by: Vagner Pinto
 */

//adiciona as dependências
const express = require('express'); //motor de processamento das requisições
const mustache = require('mustache-express'); //template engine
//const router = require('./routes/index'); //minhas rotas
const router = require('./routes/templateEngine'); //minhas rotas

//configura o servidor
const app = express();
app.use('/', router); //trata das requisições na raiz do servidor, conforme as configurações no arquivo ./routes/index.js
app.use(express.json()) //habilita para requisições do tipo POST e PUT (com informações no  corpo da requisição)
app.engine('mst', mustache()); //registra a extensão .mst como mustache-express engine
app.set('view engine', 'mst'); //diz que a view engine do app virá da engine
app.set('views', __dirname + '/views'); //diz onde estão as views no projeto (os arquivos .mst)

//exporta a const
module.exports = app;
