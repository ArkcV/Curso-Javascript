const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

function meuMiddleWare (req, res, next) {
    req.session = {
        nome: 'luiz',
        sobrenome: 'miranda'
    }
    console.log()
    console.log('Passei no seu middleware');
    console.log()
    next();
}

//Rotas da Home
route.get('/',homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;