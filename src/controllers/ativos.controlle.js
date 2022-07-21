const ativosService = require('../services/ativos.service');

const getByCode = async (req, res, next) => {
  const [response] = await ativosService(req.body);
  if(response) res.status(200).json(response);
  next();
};

module.exports = {
  getByCode,
}