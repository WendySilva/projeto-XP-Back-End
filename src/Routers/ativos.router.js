const express = require('express');
const ativosController = require('../controllers/ativos.controller');
const middlewareToken = require('../middlewares/token.middleware');
require('express-async-errors');

const ativosRouter = express.Router();

ativosRouter.get('/', middlewareToken, ativosController.buscadoTodosAtivos);
ativosRouter.get('/:id', middlewareToken, ativosController.buscadoPeloId);

module.exports = ativosRouter;