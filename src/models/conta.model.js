const { getClientByCode } = require('./ativos.model');
const connection = require('./connection');

const deposito = async ({ codCliente, valor }) => {
  const query = 'INSERT INTO Movement (codClient, valor, Tipo) VALUES (?, ?, ?)';
  const response = await connection.execute(query, [codCliente, valor, '+']);

  return response;
}

const saque = async ({ codCliente, valor }) => {  
  const query = 'INSERT INTO Movement (codClient, Valor, Tipo) VALUES (?, ?, ?)';
  const response = await connection.execute(query, [codCliente, valor, '-']);

  return response;
}

module.exports = { deposito, saque };
