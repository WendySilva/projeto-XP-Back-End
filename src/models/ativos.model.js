const connection = require('./connection');

const getAssetsByCode = async (id) => {
  const query = `SELECT * FROM Investiment
    WHERE codAtivo = ?`;
    const response = await connection.execute(query, [id]);

  return response;
}

const getClientByCode = async (id) => {
  const query = `SELECT * FROM Clients
    WHERE codClient = ?`;
  const response = await connection.execute(query, [id]);

  return response;
}

const atualizandoSaldo = async ({ codCliente, valor }, tipo) => {  
  const [response] = await getClientByCode(codCliente);
  const { saldo } = response[0];

  if (tipo === '-') {
    
   if(+saldo >= +valor) {
   
    const saldoAtual = +saldo - +valor;
    const query = 'UPDATE Clients SET saldo = ? WHERE codClient = ?';
    await connection.execute(query, [saldoAtual.toFixed(2), codCliente]);

    return saldoAtual;
   };
    return undefined;
  }

  const saldoAtual = +saldo + +valor;
  const query = 'UPDATE Clients SET saldo = ? WHERE codClient = ?';
  await connection.execute(query, [saldoAtual, codCliente]);

  return saldoAtual;
};

const todosClientes = async () => {
  const query = `SELECT * FROM Clients`;
  const response = await connection.execute(query);

  return response;
}

module.exports = { getAssetsByCode, getClientByCode, atualizandoSaldo, todosClientes };