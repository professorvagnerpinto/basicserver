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
const postController = require('../controllers/postController');

//Cria as rotas
const router = express.Router();
router.get('/', homeController.index);
router.get('/login', loginController.index);
router.get('/post/add', postController.add); //a tela com o form
router.post('/post/add', postController.addAction); //o recebimento dos dados do form
router.get('/templateengine', templateEngineController.index);

module.exports = router;
