const serviceConta = require('../services/conta.service');

const deposito = async (req, res, next) => {
  const response = await serviceConta.deposito(req.body);
  console.log(response);
  if (response === 'cliente não existe') {
    return next({ status: 400 , message: 'Código do cliente não encontrado'})
  }
  if(response) return res.status(201).json({ message: `Deposito realizado.`});
};

const saque = async (req, res, next) => {
  const response = await serviceConta.saque(req.body);
  if (response === 'cliente não existe') {
    return next({ status: 400 , message: 'Código do cliente não encontrado'})
  }
  if (response === undefined) {
    return next({ status: 400 , message: 'Não há saldo suficiente, tente outro valor'})
  }
  return res.status(201).json({ message: `Seu saldo atual é de R$${response}`});
};

module.exports = { deposito, saque }