const jwt = require('jsonwebtoken')
const secretConfig = require('../../config/auth')
const { promisify } = require('util')

module.exports = async (req, res, next) => {
  console.log(`authHeader: `+ req.headers.authorization)

  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provider ' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = await promisify(jwt.verify)(token, secretConfig.secret)
    req.userId = decoded.id
    return next()
  } catch (error) {
    return res.status(401).json({ error: 'Token Invalid' })
  }
}
