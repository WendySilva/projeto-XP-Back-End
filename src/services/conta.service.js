const contaModel = require('../models/conta.model');

const deposito = async (d) => {
    const saldoAtual = await ativoModel.atualizandoSaldo(d, '+');
    const [response] = await contaModel.deposito(d);
    if (response.affectedRows) return saldoAtual;
};

const saque = async (s) => {
    const temSaldo = await ativoModel.atualizandoSaldo(s, '-');

    if(temSaldo !== undefined) {
      const [response] = await contaModel.saque(s);
        if (response.affectedRows === 1) {
          return temSaldo;
        }
    }
    return undefined;
};

module.exports = { saque, deposito };