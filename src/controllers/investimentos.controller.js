const serviceInvestimento = require ('../services/investimentos.service');

const newBuy = async (req, res, next) => {
  const response = await serviceInvestimento.newBuy(req.body);

  return res.status(201).json(response);
};

module.exports = {
  newBuy,
}