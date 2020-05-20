/**
 * Vídeo #1 ao #6: Node.js - Módulo 1 - B7Web
 * Servidor básico em Node.js.
 * Documentação do express: http://expressjs.com/
 * by: Vagner Pinto
 */

//adiciona a dependência
const app = require('./app');

//seta as variáveis de ambiente
require('dotenv').config({path:'variables.env'});

//seta a porta do server
app.set('port', process.env.PORT || 3000);

//inicializa o servidor
const server = app.listen(app.get('port'), ()=>{
    console.log('Servidor inicializado na porta ' + server.address().port);
});
