const serviceInvestimentos = require('../services/investimentos.service');
const { tokenUsuario } = require('../uteis/JWTtoken');

const novaCompra = async (req, res, next) => {
  const { codCliente } = tokenUsuario(req.headers.authorization);

  if (codCliente === req.body.codCliente) {
    const resposta = await serviceInvestimentos.novaCompra(req.body);
  if(resposta !== undefined) res.status(201).json(
    { message: `A compra foi efetuada, seu saldo atual é de ${resposta.toFixed(2)}`}
  );
  return next({ status: 400, message: `Seu saldo é de não foi suficiente para a compra`});
  }
  return next({ status: 401, message: 'Essa conta não pertence esse a esse usuário' });
};

module.exports = {
  novaCompra,
}