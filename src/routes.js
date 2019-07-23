const express = require('express')
const validate = require('express-validate')

const routes = express.Router()
const authMiddlewares = require('./app/middlewares/auth')

const controllers = require('./app/controller')
const validators = require('./app/validators')
const handle = require('express-async-handler')


routes.post('/users',validate(validators.User), handle(controllers.UserController.store))
routes.post('/sessions',validate(validators.Session) ,handle(controllers.SessionController.store))

routes.use(authMiddlewares)

routes.get('/ads', handle(controllers.AdController.index))
routes.get('/ads/:id', handle(controllers.AdController.show))
routes.post('/ads', validate(validators.Ad) ,handle(controllers.AdController.store))
routes.put('/ads', validate(validators.Ad),handle(controllers.AdController.update))
routes.delete('/ads', handle(controllers.AdController.delete))

routes.post('/purchases', validate(validators.Purchase),handle(controllers.PurchaseController.store))

module.exports = routes
