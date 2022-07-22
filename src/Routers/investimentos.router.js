const express = require('express');
const middlewareInvetimentos = require('../middlewares/investimentos.Joi');
const investimentoController = require('../controllers/investimentos.controller');
const middlewareCodCliente = require('../middlewares/clienteExistente.middleware');
const middlewareQtdeAtivo = require('../middlewares/qtdeAtivo.middleware');

const investimentosRouter = express.Router();

investimentosRouter.post('/comprar', middlewareInvetimentos, middlewareQtdeAtivo, middlewareCodCliente, investimentoController.novaCompra);

module.exports = investimentosRouter;