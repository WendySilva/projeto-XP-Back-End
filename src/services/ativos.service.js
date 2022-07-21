const modelAtivos = require('../models/ativos.model');

const getByCode = async ({ id }) => {
  if (+id > 1000) {
    return await modelAtivos.getAssetsByCode(id);
  }
  return await modelAtivos.getClientByCode(id);
}

module.exports = { getByCode }