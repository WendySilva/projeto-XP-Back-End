const ativosService = require('../services/ativos.service');

const buscadoPeloId = async (req, res, next) => {
  const [response] = await ativosService.buscadoPeloId(req.params);
  console.log(response);
  if(response.length) return res.status(200).json(response);
  return next({ status: 400 , message: 'Código inválido'});
};

module.exports = {
  buscadoPeloId,
}