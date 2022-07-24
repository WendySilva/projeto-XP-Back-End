const loginModel = require('../models/login.model');
const { geradorJWTToken } = require('../uteis/JWTtoken');

const validandoUsuario = async ({ email, senha }) => {
  const [user]= await loginModel.validandoUsuario(email);
  
  if (user) {
    if (user.senha === senha) {
      const { codCliente } = user;
      const token = geradorJWTToken({ email, codCliente });
      
      return { token };
    }
  }
  
  return undefined;

};

module.exports = { validandoUsuario }