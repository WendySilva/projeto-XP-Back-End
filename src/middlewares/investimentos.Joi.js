const Joi = require('joi');

const schema = Joi.object({
  codCliente: Joi.number().max(999).required().messages({
    'any.required': 'Informe o código do cliente',
    'number.max': 'Código do Cliente inválido',
    'number.base': 'Digite um número',
  }),
  codAtivo: Joi.number().min(1000).required().messages({
    'any.required': 'Informe o código do Ativo',
    'number.min': 'Código do Ativo inválido',
    'number.base': 'Digite um número',
  }),
  qtdeAtivo: Joi.number().min(1).required().messages({
    'any.required': 'Informe a quantidade de Ativos',
    'number.min': 'O valor deve ser maior que 0',
    'number.base': 'Digite um número',
  }),
});

const middlewareInvetimentos = (req, _res, next) => {
  const invest = req.body;
  const { error } = schema.validate(invest);

  if (error) {
    next({
      status: error.details[0].type === 'any.required' ? 400 : 422,
      message: error.details[0].message,
    });
  } next();
};

module.exports = middlewareInvetimentos;