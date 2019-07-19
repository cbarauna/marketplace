const jwt = require('jsonwebtoken')
const secretConfig = require('../../config/auth')
const { promissify } = require('util')

module.exports = async (req, res, next) => {
  const authHeader = req.headeres.autorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provider ' })
  }

  const [, token] = authHeader.splite(' ')

  try {
    const decoded = await promissify(jwt.verify)(token, secretConfig.secret)
    req.userId = decoded.id
    return next()
  } catch (error) {
    return res.status(401).json({ error: 'Token Invalid' })
  }
}
