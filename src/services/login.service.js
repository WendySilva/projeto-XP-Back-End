const loginModel = require('../models/login.model');
const { generateJWTToken } = require('../uteis/JWTtoken');

const validandoUsuario = async ({ email, senha }) => {
  const [user]= await loginModel.validandoUsuario(email);
  
  if (user) {
    if (user.senha === senha) {

      const token = generateJWTToken({ email });
      
      return { token };
    }
  }
  
  return undefined;

};

module.exports = { validandoUsuario }