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

const atualizandoSaldo = async ({ codCliente, valor }, tipo) => {  
  const [response] = await getClientByCode(codCliente);
  const { saldo } = response[0];

  if (tipo === '-') {
   if( (saldo - valor) >= 0 ) {
    const saldoAtual = +saldo - +valor;
    const query = 'UPDATE Clients SET saldo = ? WHERE codClient = ?';
    connection.execute(query, [saldoAtual, codCliente]);
    return saldoAtual;
   };
   return false;
  }

  const saldoAtual = +saldo + +valor;
  const query = 'UPDATE Clients SET saldo = ? WHERE codClient = ?';
  connection.execute(query, [saldoAtual, codCliente]);

  return saldoAtual;
};

module.exports = { deposito, saque, atualizandoSaldo };
