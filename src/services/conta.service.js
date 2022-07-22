const contaModel = require('../models/conta.model');
const { clienteExiste } = require('../util/ClienteExitente');

const deposito = async (d) => {
  if(await clienteExiste(d.codCliente)) {
    const saldoAtual = await ativoModel.atualizandoSaldo(d, '+');
    const [response] = await contaModel.deposito(d);
    if (response.affectedRows) return saldoAtual;
  }
  return 'cliente não existe';
};

const saque = async (s) => {
  if(await clienteExiste(s.codCliente)) {
    const temSaldo = await ativoModel.atualizandoSaldo(s, '-');

    if(temSaldo !== undefined) {
      const [response] = await contaModel.saque(s);
        if (response.affectedRows === 1) {
          return temSaldo;
        }
    }
    return undefined;
  }
  return 'cliente não existe'
};

module.exports = { saque, deposito };