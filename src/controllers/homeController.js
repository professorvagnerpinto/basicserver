/**
 * Vídeo #1 ao #6: Node.js - Módulo 1 - B7Web
 * Servidor básico em Node.js.
 * Documentação do express: http://expressjs.com/
 * by: Vagner Pinto
 */

exports.index = (req, res)=>{ // a raiz do servidor
    let obj = {
        name: "Ana",
        pageTitle:'Basic Server em NodeJS' //retire isso para ver o helper em ação
    };
    res.render('home', obj); //response utilizando a engine
}
