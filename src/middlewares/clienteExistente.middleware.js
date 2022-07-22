const ativoModel = require('../models/ativos.model');
const clienteExiste = async (req, _res, next) => {
  const { codCliente } = req.body;

  const [clientes] = await ativoModel.todosClientes();
 
  const cliente = clientes.some((cliente) => cliente.codCliente === codCliente);
  if (!cliente) {
    return next({ status: 400 , message: 'Código do cliente não encontrado'})
  }
  next();
}

module.exports = clienteExiste;