const joi = require("joi");
module.exports = {
  createUser: joi.object().keys({
    firstName: joi.string().required(),
    lastName: joi.string().optional(),
    email: joi.string().email().required(),
    password: joi.string().required(),
  }),
  deleteUser: joi.object().keys({
    id: joi.number().required(),
    email: joi.string().email(),
  }),
  updateUser: joi.object().keys({
    id: joi.number().required(),
    firstName: joi.string(),
    lastName: joi.string(),
    email: joi.string().email(),
    password: joi.string(),
  }),
};
