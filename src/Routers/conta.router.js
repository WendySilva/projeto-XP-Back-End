const express = require('express');
require('express-async-errors');
const contaController = require('../controllers/conta.controller');
const middlewareConta = require('../middlewares/conta.Joi');

const contaRouter = express.Router();

contaRouter.post('/deposito', middlewareConta, contaController.deposito);
contaRouter.post('/saque', middlewareConta, contaController.saque);

module.exports = contaRouter;