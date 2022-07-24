const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '6000000m',
  algorithm: 'HS256',
};

const generateJWTToken = (payload) => jwt.sign(payload, SECRET, jwtConfig);

const authenticateToken = async (token) => {
  if (!token) {
    const erro = { status: 401, message: 'Token not found' };
    throw erro;
  }

  try {
      const introspection = await jwt.verify(token, SECRET, jwtConfig);
      return introspection;
  } catch (e) {
      const erro = { status: 401, message: 'Expired or invalid token' };
      throw erro;
  }
}; 

module.exports = {
  generateJWTToken,
  authenticateToken,
};
