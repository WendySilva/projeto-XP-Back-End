const contaModel = require('../models/conta.model');
const ativoModel = require('../models/ativos.model');

const deposito = async (d) => {
    const saldoAtual = await ativoModel.atualizandoSaldo(d, '+');
    const [resposta] = await contaModel.deposito(d);
    if (resposta.affectedRows) return saldoAtual;
};

const saque = async (s) => {
    const temSaldo = await ativoModel.atualizandoSaldo(s, '-');
    if(temSaldo !== undefined) {
      const [resposta] = await contaModel.saque(s);
        if (resposta.affectedRows === 1) {
          return temSaldo;
        }
    }
    return undefined;
};

const saldoCliente = async ({ id }) => {
  const [cliente] = await ativoModel.InfoClientesPorId(id);
  return cliente;
}

module.exports = { saque, deposito, saldoCliente };