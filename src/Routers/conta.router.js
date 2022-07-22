const express = require('express');
const contaController = require('../controllers/conta.controller');

const contaRouter = express.Router();

contaRouter.post('/deposito', contaController.deposito);
contaRouter.post('/saque', contaController.saque);

module.exports = contaRouter;