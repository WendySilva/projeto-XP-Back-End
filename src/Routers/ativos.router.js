const express = require('express');
const ativosController = require('../controllers/ativos.controller');

const ativosRouter = express.Router();

ativosRouter.get('/:id', ativosController.getByCode);

module.exports = ativosRouter;