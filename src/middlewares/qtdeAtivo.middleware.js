const investimentoModel = require('../models/investimentos.model');
const quantidadeInvestimento = async (req, _res, next) => {
  const { codAtivo, qtdeAtivo } = req.body;

  const investimento = await investimentoModel.buscadoPeloId(codAtivo);
  const quantidade =  investimento[0].qtdeAtivo;

  if (qtdeAtivo > quantidade) {
    return next({ status: 400 , message: `Só temos ${quantidade} deste investimento`})
  }
  
  next();
}

module.exports = quantidadeInvestimento;