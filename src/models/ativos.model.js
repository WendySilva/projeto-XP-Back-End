const connection = require('./connection');

const buscadoTodosAtivos = async () => {
  const query = `SELECT CA.codAtivo,
  SUM(CA.qtdeAtivoCliente) AS qtdeVendida
  FROM ClienteAtivos AS CA
  GROUP BY CA.codAtivo;`

  const resposta = await connection.execute(query);
  
  return resposta;
}

const ativosPorId = async (id) => {
  const query = `SELECT * FROM Ativos
    WHERE codAtivo = ?`;
    const response = await connection.execute(query, [id]);

  return response;
}

const clientesPorId = async (id) => {
  const query = `SELECT C.codCliente AS CodCliente,
  CA.CodAtivo AS codAtivo,
  SUM(CA.qtdeAtivoCliente) AS qtdeAtivo,
  A.Valor AS Valor
  FROM Investimentos.Clientes AS C
  INNER JOIN Investimentos.clienteAtivos AS CA ON C.codCliente = CA.codCliente
  INNER JOIN Investimentos.Ativos As A ON CA.codAtivo = A.codAtivo
  WHERE C.codCliente = ?
  GROUP BY CA.codAtivo, C.codCliente;`
  const resposta = await connection.execute(query, [id]);

  return resposta;
}

const InfoClientesPorId = async (id) => {
  
  const query = `SELECT * FROM Clientes
    WHERE codCliente = ?`;
    const resposta = await connection.execute(query, [id]);

  return resposta;
}

const atualizandoSaldo = async ({ codCliente, valor }, tipo) => {  
  const [resposta] = await InfoClientesPorId(codCliente);
  const { saldo } = resposta[0];

  if (tipo === '-') {
    
   if(+saldo >= +valor) {
   
    const saldoAtual = +saldo - +valor;
    const query = 'UPDATE Clientes SET saldo = ? WHERE codCliente = ?';
    await connection.execute(query, [saldoAtual.toFixed(2), codCliente]);

    return saldoAtual;
   };
    return undefined;
  }
  const saldoAtual = +saldo + +valor;
  const query = 'UPDATE Clientes SET saldo = ? WHERE codCliente = ?';
  await connection.execute(query, [saldoAtual, codCliente]);

  return saldoAtual;
};

const todosClientes = async () => {
  const query = `SELECT * FROM Clientes`;
  const resposta = await connection.execute(query);

  return resposta;
}

module.exports = { buscadoTodosAtivos,
  ativosPorId,
  clientesPorId,
  atualizandoSaldo,
  todosClientes,
  InfoClientesPorId
};