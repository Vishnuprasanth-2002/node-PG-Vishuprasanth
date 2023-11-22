const Joi = require("joi");

const loginSchema = Joi.object({
    email: Joi.string().required(),
    user_password: Joi.string().required(),
});

module.exports = {
  loginSchema,
};
