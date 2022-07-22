const contaModel = require('../models/conta.model');

const deposito = async (d) => {
  const saldoAtual = await contaModel.atualizandoSaldo(d, '+');
  const [response] = await contaModel.deposito(d);
  if (response.affectedRows) return saldoAtual;
};

const saque = async (s) => {
  const temSaldo = await contaModel.atualizandoSaldo(s, '-');
  if (!temSaldo) {
    return undefined;
  }
  const [response] = await contaModel.deposito(s);

  if (response.affectedRows) return temSaldo;
};

module.exports = { saque, deposito };