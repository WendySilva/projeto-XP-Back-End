const connection = require('./connection');

const getAssetsByCode = async (code) => {
  const query = `SELECT * FROM Investiment
    WHERE codAtivo = ?`;
  const response = await connection.execute(query, [code]);

  return response;
}

const getClientByCode = async (code) => {
  const query = `SELECT * FROM Clients
    WHERE codClient = ?`;
  const response = await connection.execute(query, [code]);

  return response;
}

module.exports = { getAssetsByCode, getClientByCode };