const serviceConta = require('../services/conta.service');

const deposito = async (req, res, next) => {
  const response = await serviceConta.deposito(req.body);
  return res.status(201).json(response);
};

const saque = async (req, res) => {
  const response = await serviceConta.deposito(req.body);
  if (!response) {
    next({ status: 400 , message: 'Não há saldo suficiente, tente ouro valor'})
  }
  return res.status(201).json(response);
};

module.exports = { deposito, saque }