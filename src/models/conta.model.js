const { getClientByCode } = require('./ativos.model');
const connection = require('./connection');

const deposito = async ({ codCliente, valor }) => {

  const query = 'INSERT INTO Moviment (codClient, valor, Tipo) VALUES (?, ?, ?)';
  const response = await connection.execute(query, [codCliente, valor, '+']);

  return response;
}

const saque = async ({ codCliente, valor }) => {  
  const query = 'INSERT INTO Moviment (codClient, Valor, Tipo) VALUES (?, ?, ?)';
  const response = await connection.execute(query, [codCliente, valor, '-']);

  return response;
}

const atualizandoSaldo = ({ codCliente, valor }, tipo) => {  
  const saldo = getClientByCode({ codCliente: id }).saldo;

  if (tipo === '-') {
   if( (+saldo - +valor) >= 0 ) {
    const saldoAtual = +saldo - +valor;
    const query = 'UPDATE Clients SET saldo = ? WHERE codClient = ?';
    connection.execute(query, [saldoAtual, codCliente]);
    return true;
   };
   return false;
  }

  const saldoAtual = +saldo + +valor;
  const query = 'UPDATE Clients SET saldo = ? WHERE codClient = ?';
  connection.execute(query, [saldoAtual, codCliente]);

  return true;
};

module.exports = { deposito, saque, atualizandoSaldo };
