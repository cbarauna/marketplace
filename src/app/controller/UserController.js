const User = require('../models/User')

class UserController {
  async store (req, res) {
    const { email } = req.body
    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'user already exists' })
    }
    const user = await User.create(req.body)

    return res.json(user)
  }

  async update(req, res){
  const user = await User.findAndModify(req.body)
  return res.json(user)
  }

  async index(req, res){
    const user = await User.find()

    return res.send(user)
  }
}

module.exports = new UserController()
