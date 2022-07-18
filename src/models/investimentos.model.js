const connection = require('./connection');

const newBuy = async ({ codCliente, codAtivo, qtdeAtivo }) => {

  const query = 'INSERT INTO ClientInvestiment (codClient, codAtivo, qtdeAtivoCliente) VALUES (?, ?, ?)';
  const tabelaClientIvest = await connection.execute(query, [codCliente, codAtivo, qtdeAtivo]);

  return response;
}

module.exports = { newBuy };