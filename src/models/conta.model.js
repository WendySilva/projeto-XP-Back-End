const connection = require('./connection');

const deposito = async ({ codCliente, Valor  }) => {

  const query = 'INSERT INTO Moviment (codClient, Valor) VALUES (?, ?)';
  const response = await connection.execute(query, [codCliente, Valor]);

  return response;
}

const saque = async ({ codCliente, Valor  }) => {

  const query = 'INSERT INTO Moviment (codClient, Valor) VALUES (?, ?)';
  const response = await connection.execute(query, [codCliente, Valor]);

  return response;
}

module.exports = { deposito, saque };
