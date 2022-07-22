const serviceInvestimentos = require('../services/investimentos.service');

const newBuy = async (req, res, next) => {
  const response = await serviceInvestimentos.newBuy(req.body);
 
  if(response) res.status(201).end();
  next();
};

module.exports = {
  newBuy,
}