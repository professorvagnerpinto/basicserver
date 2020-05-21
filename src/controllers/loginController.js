/**
 * Vídeo #1 ao #6: Node.js - Módulo 1 - B7Web
 * Servidor básico em Node.js.
 * by: Vagner Pinto
 *
     Middleware (atua entre processos. Um exemplo já utilizado são os helpers)
     Exemplo: Processo de Login
         -Requisição (Controller - Processo de requisição)
             --(entre a requisição e a resposta há um processamento)
             -- Aqui atua o(s) middleware, por exemplo
                -Validar campos (um middleware)
                -Autorizar o usuário (outro middleware)
             --(entre a requisição e a resposta há um processamento)
         -Resposta (Controller - Processo de resposta)
             --positiva
             --negativa
     Dois tipos de Middleware no Node.js: local e global
 */

exports.index = (req, res)=>{
    res.send('Rota login configurada.');
}


