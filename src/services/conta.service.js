const contaModel = require('../models/conta.model');

const deposito = async (d) => {
  contaModel.atualizandoSaldo(d, '+');
  const [response] = await contaModel.deposito(d);

  return response;
};

const saque = (s) => {
  const temSaldo = contaModel.atualizandoSaldo(s, '-');
  if (!temSaldo) {
    return false;
  }
  const [response] = await contaModel.deposito(s);

  return response;
};

module.exports = { saque, deposito };