const express = require('express')

const routes = express.Router()
const authMiddlewares = require('./config/auth')

const controllers = require('./app/controller')

routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

routes.use(authMiddlewares)

routes.get('/ads', controllers.Adcontroller.index)
routes.get('/ads/:id', controllers.Adcontroller.show)
routes.post('/ads', controllers.Adcontroller.store)
routes.put('/ads', controllers.Adcontroller.update)
routes.delete('/ads', controllers.Adcontroller.delete)

module.exports = routes
