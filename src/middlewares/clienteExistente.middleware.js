const ativoModel = require('../models/ativos.model');
const clienteExiste = async (req, _res, next) => {
  const [clientes] = await ativoModel.todosClientes();
  const { codCliente } = req.body.codCliente;
  const cliente = clientes.some((cliente) => cliente.codClient === codCliente);
  if (!cliente) {
    return next({ status: 400 , message: 'Código do cliente não encontrado'})
  }
  next();
}

module.exports = clienteExiste;