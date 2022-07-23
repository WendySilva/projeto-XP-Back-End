const serviceInvestimentos = require('../services/investimentos.service');

const novaCompra = async (req, res, next) => {
  const resposta = await serviceInvestimentos.novaCompra(req.body);
  if(resposta !== undefined) res.status(201).json(
    { message: `A compra foi efetuada, seu saldo atual é de ${resposta.toFixed(2)}`}
  );
  return next({ status: 400, message: `Seu saldo é de não foi suficiente para a compra`});
};

module.exports = {
  novaCompra,
}