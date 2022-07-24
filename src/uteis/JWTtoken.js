const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');
const SECRET = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '6000000m',
  algorithm: 'HS256',
};

const geradorJWTToken = (payload) => jwt.sign(payload, SECRET, jwtConfig);

const autenticandoToken = (token) => {
  if (!token) {
    const erro = { status: 401, message: 'Token não encontrado' };
    throw erro;
  }

  try {
      const verificando = jwt.verify(token, SECRET, jwtConfig);
      return verificando;
  } catch (e) {
      const erro = { status: 401, message: 'Token expirado ou inválido' };
      throw erro;
  }
}; 

const tokenUsuario = (payload) => jwt_decode(payload);


module.exports = {
  geradorJWTToken,
  autenticandoToken,
  tokenUsuario,
};
