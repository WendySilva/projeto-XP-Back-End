const Joi = require('joi');

const schema = Joi.object({
  codCliente: Joi.number().max(999).required().messages({
    'any.required': 'Informe o código do cliente',
    'number.max': 'Código do Cliente inválido',
  }),
  valor: Joi.number().min(1).required().messages({
    'any.required': 'Informe o valor do depósito',
    'number.min': 'O valor do depósito deve ser maior que R$0.00',
  }),
});

const middlewareConta = (req, _res, next) => {
  const invest = req.body;
  const { error } = schema.validate(invest);

  if (error) {
    next({
      status: error.details[0].type === 'any.required' ? 400 : 422,
      message: error.details[0].message,
    });
  } next();
};

module.exports = middlewareConta;