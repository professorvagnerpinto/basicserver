/**
 * Vídeo #1 ao #6: Node.js - Módulo 1 - B7Web
 * Servidor básico em Node.js.
 * by: Vagner Pinto
 */

const moongose = require('mongoose');
const Post = moongose.model('Post');

exports.add = (req, res)=>{
    let obj = {
        name: "Ana"
    };
    res.render('postAdd', obj); //response utilizando a engine
}

exports.addAction = async (req, res)=>{
    const post = new Post(req.body); //cria o objeto da model
    await post.save(); //salva o post

    req.flash('success', 'Post salvo.'); //cria o flash

    res.redirect('/'); //redireciona a página
}
