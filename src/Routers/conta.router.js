const express = require('express');
require('express-async-errors');
const contaController = require('../controllers/conta.controller');
const middlewareConta = require('../middlewares/conta.Joi');
const middlewareCodCliente = require('../middlewares/clienteExistente.middleware');

const contaRouter = express.Router();

contaRouter.post('/deposito', middlewareConta, middlewareCodCliente, contaController.deposito);
contaRouter.post('/saque', middlewareConta, middlewareCodCliente, contaController.saque);

module.exports = contaRouter;