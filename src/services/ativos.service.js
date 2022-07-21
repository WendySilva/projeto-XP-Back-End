const modelAtivos = require('../models/ativos.model');

const getByCode = (code) => {
  if (code < 1000) {
    return modelAtivos.getAssetsByCode(code);
  }
  return modelAtivos.getClientByCode(code);
}

module.exports = { getByCode }