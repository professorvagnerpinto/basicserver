/**
 * Vídeo #1 ao #6: Node.js - Módulo 1 - B7Web
 * Servidor básico em Node.js.
 * Documentação do express: http://expressjs.com/
 * by: Vagner Pinto
 */

//adiciona a dependência
const express = require('express');
const templateEngineController = require('../controllers/templateEngineController');

//Cria as rotas
const router = express.Router();
router.get('/templateengine', templateEngineController.index);

//exporta a const
module.exports = router;
