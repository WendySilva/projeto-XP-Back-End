const connection = require('./connection');

const newBuy = ({ codClient, codAtivo, qtdeAtivo }) => {
  const query = 'INSERT INTO ClientInvestiment (codClient, codAtivo, qtdeAtivoCliente) VALUES (?, ?, ?)';
  const response = connection.execute(query, [codClient, codAtivo, qtdeAtivo]);

  return response;
}

module.exports = { newBuy };