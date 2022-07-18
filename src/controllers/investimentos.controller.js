const serviceInvestimentos = require('../services/investimentos.service');

const newBuy = async (req, res, next) => {
  console.log('CONTROLLER')
  const response = await serviceInvestimentos.newBuy(req.body);
  console.log('aqui', response);
  if(response) res.status(201).end();
  next();
};

module.exports = {
  newBuy,
}