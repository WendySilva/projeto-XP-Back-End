const modelAtivos = require('../models/ativos.model');

const buscadoPeloId = async ({ id }) => {
  if (+id >= 1000) {
    return await modelAtivos.ativosPorId(id);
  }
  return await modelAtivos.clientesPorId(id);
}



module.exports = { buscadoPeloId }