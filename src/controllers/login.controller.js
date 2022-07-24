const loginService = require('../services/login.service');

const validandoUsuario = async (req, res, next) => {
  const token = await loginService.validandoUsuario(req.body);

  if(token !== undefined) res.status(200).json(token);

  return next({ status: 400, message: `E-mail ou senha inválida.`});
};

module.exports = {
  validandoUsuario,
}