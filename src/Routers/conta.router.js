const express = require('express');
require('express-async-errors');
const contaController = require('../controllers/conta.controller');
const middlewareConta = require('../middlewares/conta.Joi');
const middlewareCodCliente = require('../middlewares/clienteExistente.middleware');
const middlewareToken = require('../middlewares/token.middleware');
require('express-async-errors');

const contaRouter = express.Router();

contaRouter.post('/deposito', middlewareConta, middlewareCodCliente, contaController.deposito);
contaRouter.post('/saque', middlewareToken, middlewareConta, middlewareCodCliente, contaController.saque);
contaRouter.get('/:id', middlewareToken, contaController.saldoCliente);

module.exports = contaRouter;