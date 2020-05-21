/**
 * Vídeo #1 ao #6: Node.js - Módulo 1 - B7Web
 * Servidor básico em Node.js.
 * Documentação do express: http://expressjs.com/
 * by: Vagner Pinto
 */

exports.index = (req, res)=>{
    let obj = {
        //name: "Ana", //deixou de ser estático
        userInfo:req.userInfo, //agora o nome do usuário vem do middleware
        pageTitle:'Basic Server em NodeJS', //retire isso para ver o helper em ação
        mostrar: false,
        ingredientes:[
            {nome:"Arroz", qde:"1 xícara"},
            {nome:"Azeite ou óleo", qde:"5 ml"},
            {nome:"Sal", qde:"a gosto"}
        ],
        interesses:['Nodejs', 'React', 'React Native'],
        html_inject:'<strong>Elemento html renderizado aqui</strong> '
    };
    //res.render(TEMPLATE_NAME, JSON_DATA)
    res.render('templateEngine', obj); //response utilizando a engine
    //res.send('Rota com Mustache configurada'); //para testar apenas a rota
}
