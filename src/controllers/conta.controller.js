const serviceConta = require('../services/conta.service');
const { tokenUsuario } = require('../uteis/JWTtoken');

const deposito = async (req, res, next) => {
  const resposta = await serviceConta.deposito(req.body);
  if(resposta) return res.status(201).json({ message: `Deposito realizado.`});
};

const saque = async (req, res, next) => {
  const { codCliente } = tokenUsuario(req.headers.authorization);

  if (codCliente === req.body.codCliente) {
    const resposta = await serviceConta.saque(req.body);
    if (resposta === undefined) {
      return next({ status: 400 , message: 'Não há saldo suficiente, tente outro valor'})
    }
    return res.status(201).json({ message: `Seu saldo atual é de R$${resposta}`});
  }
  return next({ status: 401, message: 'Essa conta não pertence esse a esse usuário' });
};

const saldoCliente = async (req, res, next) => {
  const resposta = await serviceConta.saldoCliente(req.params);
  if (resposta === undefined) {
    return next({ status: 400 , message: 'Cliente não encontrado'})
  }
  return res.status(201).json(resposta);
};

module.exports = { deposito, saque, saldoCliente }