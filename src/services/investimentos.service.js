const modelInvestimento = require ('../models/investimentos.model');

const newBuy = async (buy) => {
  const [response] = await modelInvestimento.newBuy(buy);
  if(response.affectedRows) response.affectedRows;
};

module.exports = { 
  newBuy,
};
