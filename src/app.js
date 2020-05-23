/**
 * Vídeo #1 ao #6: Node.js - Módulo 1 - B7Web
 * Servidor básico em Node.js.
 * Documentação do express: http://expressjs.com/
 * Para usar mensagem flash: yarn add cookie-parser express-session express-flash
 * by: Vagner Pinto
 */

//adiciona as dependências
const express = require('express'); //motor de processamento das requisições
const mustache = require('mustache-express'); //template engine
const router = require('./routes/home'); //minhas rotas
const helpers = require('./helpers'); //helpers do site
const errorHandler = require('./handlers/errorHandler'); //tratador de erros
const cookieParser = require('cookie-parser'); //para mensagens flash
const session = require('express-session'); //para mensagens flash
const flash = require('express-flash'); //para mensagens flash

/*
  ***** configura o servidor *****
 */

//app utilizará express
const app = express();

//configura as requisições
app.use(express.json()) //habilita para requisições do tipo POST e PUT (com informações no  corpo da requisição)
app.use(express.urlencoded({extended:true})); //body parser

//configura cookie, session e flash
app.use(cookieParser(process.env.SECRET)); //insere o cookieParser
app.use(session({
    secret:process.env.SECRET,
    resave:false, //não necessita ser destruída e recriada (segura a sessão)
    saveUninitialized:false //
})); //configura a seção
app.use(flash()); //habilita o uso do flash

//configura os helpers
app.use((req, res, next)=>{ //todos os uses são middlewares globais (atuam em todas as requisições, por isso, global)
    res.locals.h = helpers; //vira uma variável global para os templates
    res.locals.flashes = req.flash();
    next(); //pega as informações e manda para o template
}); //o helper deve vir antes da definição de rota

//cofigura a rota
app.use('/', router); //(mantenha como o último use) trata das requisições na raiz do servidor, conforme as configurações no arquivo ./routes/home.js
app.use(errorHandler.notFound); //not found 404 (deve vir depois da rota padrão, pois ela entra em ação quando a requisição falha)

//adiciona a engine da View
app.engine('mst', mustache(__dirname + '/views/partials', '.mst')); //registra a extensão .mst como mustache-express engine
app.set('view engine', 'mst'); //diz que a view engine do app virá da engine
app.set('views', __dirname + '/views'); //diz onde estão as views no projeto (os arquivos .mst)

//exporta a const
module.exports = app;
