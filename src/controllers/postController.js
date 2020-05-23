/**
 * Vídeo #1 ao #6: Node.js - Módulo 1 - B7Web
 * Servidor básico em Node.js.
 * by: Vagner Pinto
 */

const moongose = require('mongoose');
const Post = moongose.model('Post');

exports.add = (req, res)=>{
    let obj = {
        name: "Ana", //deixou de ser estático
    };
    res.render('postAdd', obj); //response utilizando a engine
}

exports.addAction = async (req, res)=>{
    const post = new Post(req.body);
    await post.save();
    res.redirect('/');
}
