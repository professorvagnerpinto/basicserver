/**
 * Vídeo #1 ao #6: Node.js - Módulo 1 - B7Web
 * Servidor básico em Node.js.
 * Documentação do express: http://expressjs.com/
 * by: Vagner Pinto
 */

//adiciona as dependências
const express = require('express'); //motor de processamento das requisições
const mustache = require('mustache-express'); //template engine
const router = require('./routes/home'); //minhas rotas
const helpers = require('./helpers'); //helpers do site
const errorHandler = require('./handlers/errorHandler'); //tratador de erros

//configura o servidor
const app = express();
app.use((req, res, next)=>{ //todos os uses são middlewares globais (atuam em todas as requisições, por isso, global)
    res.locals.h = helpers; //vira uma variável global para os templates
    next(); //pega as informações e manda para o template
}); //o helper deve vir antes da definição de rota
app.use(express.json()) //habilita para requisições do tipo POST e PUT (com informações no  corpo da requisição)
app.use(express.urlencoded({extended:true})); //body parser
app.use('/', router); //(mantenha como o último use) trata das requisições na raiz do servidor, conforme as configurações no arquivo ./routes/home.js
app.use(errorHandler.notFound); //not found 404
app.engine('mst', mustache(__dirname + '/views/partials', '.mst')); //registra a extensão .mst como mustache-express engine
app.set('view engine', 'mst'); //diz que a view engine do app virá da engine
app.set('views', __dirname + '/views'); //diz onde estão as views no projeto (os arquivos .mst)

//exporta a const
module.exports = app;
