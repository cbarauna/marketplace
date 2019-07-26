const joi = require('joi')

module.exports = {
  body:{
    name:joi.string().required(),
    email:joi.string().email().required(),
    password:joi.number().required().min(6),
  }
}
