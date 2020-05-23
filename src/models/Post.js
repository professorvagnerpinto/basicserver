/**
 * Vídeo #1 ao #6: Node.js - Módulo 1 - B7Web
 * Servidor básico em Node.js.
 * Documentação do mongoose: https://mongoosejs.com/
 * Documentação para mongoDB (instalação Ubuntu): https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
 * Documentação para mongoDB (Getting Started): https://docs.mongodb.com/manual/tutorial/getting-started/#getting-started
 * by: Vagner Pinto
 */

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//cria o esquema da coleção
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:'O post precisa de um título.'
    },
    slug:String,
    body:{
        type:String,
        trim:true
    },
    tag:[String]
});

//registra a coleção
module.exports = mongoose.model('Post', postSchema);
