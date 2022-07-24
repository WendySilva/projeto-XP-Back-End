const express = require('express');
const loginController = require('../controllers/login.controller');
require('express-async-errors');
const middlewareUsuario  = require('../middlewares/usuario.Joi')

const loginRouter = express.Router();

loginRouter.post('/', middlewareUsuario, loginController.validandoUsuario);

module.exports = loginRouter;