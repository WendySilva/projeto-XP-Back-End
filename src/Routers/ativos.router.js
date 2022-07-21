const express = require('express');
const ativosController = require('../controllers/ativos.controller');

const ativosRouter = express.Router();

ativosRouter.getByCode('/:id', ativosController);

module.exports = ativosRouter;