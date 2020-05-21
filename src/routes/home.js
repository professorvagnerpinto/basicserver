/**
 * Vídeo #1 ao #6: Node.js - Módulo 1 - B7Web
 * Servidor básico em Node.js.
 * Documentação do express: http://expressjs.com/
 * by: Vagner Pinto
 */

//adiciona a dependência
const express = require('express');
const homeController = require('../controllers/homeController');
const templateEngineController = require('../controllers/templateEngineController');
const loginController = require('../controllers/loginController');

//Cria as rotas
const router = express.Router();
router.get('/', homeController.userMiddleware, homeController.index); //se usa um middleware, tem que acrescentá-lo antes do controller
router.get('/templateengine', homeController.userMiddleware, templateEngineController.index); //reutilizando o middleware
router.get('/login', loginController.index);

/*
    Trecho de código para demonstrar como tratar diferentes tipos de url na requisição.
    Isso deve ser utilizado antes de usar template engine, pois é o básico.
 */
// router.get('/', (req, res)=>{
//    /*
//         Requisições:
//         GET (sem parâmetros na url): req.query
//         GET (com parâmetros na url): req.params
//         POST ou PUT: req.body
//
//         respostas:
//         JSON: res.json
//         text: res.send
//         existem outros, acesse a documentação do express (http://expressjs.com/en/guide/routing.html em Response methods)
//
//      */
//     //http://localhost:3000/?nome=UmNomeAqui&idade=UmaIdadeAqui
//     if(typeof req.query.nome === ('undefined') || typeof req.query.idade === ('undefined')){
//         res.send('Olá, insira as variáveis nome e idade no path');
//     }else{
//         res.json({ //para responder em JSON (substitui o send)
//             nome:req.query.nome,
//             idade:req.query.idade
//         });
//         //res.send('Olá, ' + req.query.nome + ' , você tem ' + req.query.idade + ' anos');
//     }
// });
// router.get('/sobre', (req, res)=>{ // a raiz do servidor/sobre
//     res.send("Rota Sobre");
// });
//
// router.get('/post/:id', (req, res)=>{ // a raiz do servidor/post/idDoPost
//     //http://localhost:3000/post/idDoPost
//     res.send('Você acessou o post de id = ' + req.params.id);
// });
//
// router.get('/post/:slug', (req, res)=>{ // a raiz do servidor/post/slugDoPost
//     //http://localhost:3000/post/tituloDoPostFormatadoEmSlug
//     res.send('Você acessou o post de título = ' + req.params.slug);
// });

//exporta a const
module.exports = router;
