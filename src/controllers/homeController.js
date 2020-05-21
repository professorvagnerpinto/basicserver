/**
 * Vídeo #1 ao #6: Node.js - Módulo 1 - B7Web
 * Servidor básico em Node.js.
 * Documentação do express: http://expressjs.com/
 * by: Vagner Pinto
 */

exports.userMiddleware = (req, res, next)=>{
    req.userInfo = {id:123, name:'Rafael'}; //adiciona a info na requisição
    next(); //vá para a próxima função na stack de execução
}

exports.index = (req, res)=>{ // a raiz do servidor
    let obj = {
        //name: "Ana", //deixou de ser estático
        userInfo:req.userInfo, //agora o nome do usuário vem do middleware
        pageTitle:'Basic Server em NodeJS' //retire isso para ver o helper em ação
    };
    res.render('home', obj); //response utilizando a engine
}
