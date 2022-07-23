const ativosService = require('../services/ativos.service');

const buscadoPeloId = async (req, res, next) => {
  const [response] = await ativosService.buscadoPeloId(req.params);

  if(response.length) return res.status(200).json(response);
  return next({ status: 400 , message: 'Código inválido'});
};
const buscadoTodosAtivos = async (_req, res, next) => {
  const [response] = await ativosService.buscadoTodosAtivos();

  if(response.length) return res.status(200).json(response);
  return next({ status: 404 , message: 'Nenhum ativo encontrado'});
};

module.exports = {
  buscadoPeloId,
  buscadoTodosAtivos
}