const modelInvestimento = require ('../models/investimentos.model');

const novaCompra = async (compra) => {
  const response = await modelInvestimento.novaCompra(compra);
  
  return response;
};

module.exports = { 
  novaCompra,
};
