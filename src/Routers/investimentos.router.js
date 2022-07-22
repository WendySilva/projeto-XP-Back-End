const express = require('express');
const middlewareInvetimentos = require('../middlewares/investimentos.Joi');
const investimentoController = require('../controllers/investimentos.controller');
const middlewareCodCliente = require('../middlewares/clienteExistente.middleware');

const investimentosRouter = express.Router();

investimentosRouter.post('/comprar', middlewareInvetimentos, middlewareCodCliente, investimentoController.newBuy);

module.exports = investimentosRouter;