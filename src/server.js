/**
 * Vídeo #1 ao #6: Node.js - Módulo 1 - B7Web
 * Servidor básico em Node.js.
 * Documentação do express: http://expressjs.com/
 * by: Vagner Pinto
 */

//variáveis de ambiente
require('dotenv').config({path:'variables.env'});

//banco de dados
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error)=>{
    console.error('Erro em server.js: ' + error.message);
});
require('./models/Post'); //carrega os models

//server
const app = require('./app');
app.set('port', process.env.PORT || 3000); //seta a porta do server
const server = app.listen(app.get('port'), ()=>{ //inicializa o servidor
    console.log('Servidor inicializado na porta ' + server.address().port);
});
