const connection = require('./connection');

const getAssetsByCode = async ({ id }) => {
  const query = `SELECT * FROM Investiment
    WHERE codAtivo = ?`;
  const response = await connection.execute(query, [id]);
  console.log(response);

  return response;
}

const getClientByCode = async ({ id }) => {
  const query = `SELECT * FROM Clients
    WHERE codClient = ?`;
  const response = await connection.execute(query, [id]);

  console.log(response);
  return response;
}

module.exports = { getAssetsByCode, getClientByCode };