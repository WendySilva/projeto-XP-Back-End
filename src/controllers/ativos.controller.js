const ativosService = require('../services/ativos.service');

const getByCode = async (req, res, next) => {
  const [response] = await ativosService.getByCode(req.params);
  if(response) res.status(200).json(response);
  next();
};

module.exports = {
  getByCode,
}