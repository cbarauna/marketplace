const express = require('express')
const validate = require('express-validation')
const handle = require('express-async-handler')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

const controllers = require('./app/controller')
const validators = require('./app/validators')

routes.post(
  '/users',
  validate(validators.Users),
  handle(
    controllers.UserController.store
   )


)

routes.put(
  '/users',
  validate(validators.Users),
  handle(
    controllers.UserController.update
   )
)

routes.get(
  '/hello',
  handle(
    controllers.UserController.index
   )
)
routes.post(
  '/sessions',
  validate(validators.Session),
  handle(controllers.SessionController.store)
)

routes.use(authMiddleware)

/**
 * Ads
 */
//routes.get('/hello', controllers.AdController.show)
//routes.get('/ads', handle(controllers.AdController.index))
routes.get('/ads/:id', handle(controllers.AdController.show))
routes.post(
  '/ads',
  validate(validators.Ad),
  handle(controllers.AdController.store)
)
routes.put(
  '/ads/:id',
  validate(validators.Ad),
  handle(controllers.AdController.update)
)
routes.delete('/ads/:id', handle(controllers.AdController.destroy))

/**
 * Purchases
 */
routes.post(
  '/purchases',
  validate(validators.Purschase),
  handle(controllers.PurchaseController.store)
)

//routes.put('/purchases/:id', handle(controllers.ApproveController.update))

module.exports = routes
