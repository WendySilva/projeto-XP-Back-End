const express = require('express');
const loginController = require('../controllers/login.controller');
require('express-async-errors');
// const middlewareUsuario  = require('../middlewares/clienteExistente.middleware')

const loginRouter = express.Router();

loginRouter.post('/', loginController.validandoUsuario);

module.exports = loginRouter;