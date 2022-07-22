const { atualizandoSaldo } = require('./ativos.model');
const connection = require('./connection');

const buscadoPeloId = async (id) => {
  const query = 'SELECT qtdeAtivo, valor FROM Ativos WHERE codAtivo = ?';
  const [investimento] = await connection.execute(query, [id]);

  return investimento;
}

const novaCompra = async ({ codCliente, codAtivo, qtdeAtivo }) => {

  const queryClienteInvest = 'INSERT INTO ClienteAtivos (codCliente, codAtivo, qtdeAtivoCliente) VALUES (?, ?, ?)';
  const novoInvestimento = await connection.execute(queryClienteInvest, [codCliente, codAtivo, qtdeAtivo]);

  if(novoInvestimento) {
    const [ investInicial ] = await buscadoPeloId(codAtivo);
    const qtdeAtual = investInicial.qtdeAtivo - qtdeAtivo;
    const queryInvest = 'UPDATE Ativos SET qtdeAtivo = ? WHERE codAtivo = ?';
    const [qntInvest] = await connection.execute(queryInvest, [qtdeAtual, codAtivo]);
    
    if(qntInvest.affectedRows) {
      const valor = +investInicial.valor * +qtdeAtivo;
      const saldo = await atualizandoSaldo({ codCliente, valor }, '-');
      return saldo
    }
  }

  return undefined;
}

module.exports = { novaCompra, buscadoPeloId };