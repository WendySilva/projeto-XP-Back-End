const express = require('express');
const ativosController = require('../controllers/ativos.controller');

const ativosRouter = express.Router();

ativosRouter.get('/:id', ativosController.buscadoPeloId);

module.exports = ativosRouter;