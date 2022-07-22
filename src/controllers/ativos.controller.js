const ativosService = require('../services/ativos.service');

const getByCode = async (req, res, next) => {
  const [response] = await ativosService.getByCode(req.params);
  if(response) return res.status(200).json(response);
  next({ status: 400 , message: 'Não há saldo suficiente, tente ouro valor'});
};

module.exports = {
  getByCode,
}