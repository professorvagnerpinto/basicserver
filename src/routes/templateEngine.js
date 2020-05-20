/**
 * Vídeo #1 ao #6: Node.js - Módulo 1 - B7Web
 * Servidor básico em Node.js.
 * Documentação do express: http://expressjs.com/
 * by: Vagner Pinto
 */

//adiciona a dependência
const express = require('express');

//Cria as rotas
const router = express.Router();
router.get('/templateengine', (req, res)=>{
    let obj = {
        name: "Ana",
        mostrar: false,
        ingredientes:[
            {nome:"Arroz", qde:"1 xícara"},
            {nome:"Azeite ou óleo", qde:"5 ml"},
            {nome:"Sal", qde:"a gosto"}
        ]
    };
    //res.render(TEMPLATE_NAME, JSON_DATA)
    res.render('home', obj); //response utilizando a engine
    //res.send('Rota com Mustache configurada'); //para testar apenas a rota
});

//exporta a const
module.exports = router;
