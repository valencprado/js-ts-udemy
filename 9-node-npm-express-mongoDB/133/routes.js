const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');

route.get('/', homeController.home);
route.post('/', homeController.exemploPost);
module.exports = route;

route.get('/contato', contatoController.home);