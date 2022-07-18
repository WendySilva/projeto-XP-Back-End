const modelInvestimento = require ('../models/investimentos.model');

const newBuy = (buy) => {
  const response = modelInvestimento.newBuy();

  return response;
};