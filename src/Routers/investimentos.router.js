const express = require('express');
// const middlewareInvetimentos = require('../middlewares/investimentos.Joi');
const investimentoController = require('../controllers/investimentos.controller');

const investimentosRouter = express.Router();

investimentosRouter.post('/comprar', investimentoController.newBuy);

module.exports = investimentosRouter;