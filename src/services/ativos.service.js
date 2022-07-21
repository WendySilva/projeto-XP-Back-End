const modelAtivos = require('../models/ativos.model');

const getByCode = async (code) => {
  console.log(code);
  if (+code < 1000) {
    return await modelAtivos.getAssetsByCode(code);
  }
  return await modelAtivos.getClientByCode(code);
}

module.exports = { getByCode }