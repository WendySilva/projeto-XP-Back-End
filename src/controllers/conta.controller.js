const serviceConta = require('../services/conta.service');

const deposito = async (req, res, next) => {
  const response = await serviceConta.deposito(req.body);
  if(response) return res.status(201).json({ message: `Deposito realizado.`});
};

const saque = async (req, res, next) => {
  const response = await serviceConta.saque(req.body);
  console.log(response);
  if (!response) {
    console.log('SEM SALDO');
    return next({ status: 400 , message: 'Não há saldo suficiente, tente outro valor'})
  }
  return res.status(201).json({ message: `Seu saldo atual é de ${response}`});
};

module.exports = { deposito, saque }