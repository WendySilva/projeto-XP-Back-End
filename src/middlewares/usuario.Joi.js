const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'Digite o e-mail',
  }),
  senha: Joi.number().min(8).required().messages({
    'any.required': 'Digite a Senha',
  }),
});

const middlewareUsuario = (req, _res, next) => {
  const usuario = req.body;
  const { error } = schema.validate(usuario);

  if (error) {
    next({
      status: error.details[0].type === 'any.required' ? 400 : 422,
      message: error.details[0].message,
    });
  } next();
};

module.exports = middlewareUsuario;