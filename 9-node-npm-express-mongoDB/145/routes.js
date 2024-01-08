const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

route.get('/', homeController.home);
route.post('/', homeController.exemploPost);
module.exports = route;

route.get('/contato', contatoController.home);