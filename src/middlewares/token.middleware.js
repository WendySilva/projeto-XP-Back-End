const { autenticandoToken } = require('../uteis/JWTtoken');

const middlewareToken = async (req, res, next) => {
  const token = req.headers.authorization;

  const payload = await autenticandoToken(token);

  res.locals.payload = payload;
  
  next();
};

module.exports = middlewareToken;
