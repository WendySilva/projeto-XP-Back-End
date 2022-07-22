const ativoModel = require('../models/ativos.model');
const clienteExiste = async (codCliente) => {
  const [clientes] = await ativoModel.todosClientes();
  const cliente = clientes.some((cliente) => cliente.codClient === codCliente);
  return cliente;
}

module.exports = { clienteExiste };