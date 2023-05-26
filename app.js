const express = require('express')
require('dotenv').config()
const knex = require('./knex')

const auth = require('./middleware/auth')
const { comparePassword,
    generateJwt,
    hashPassword }
    = require('./utils')
const delivery = require('./modules/delivery')
const repository = require('./modules/repository')
const usecase = require('./modules/usecase')

const app = express()
const port = process.env.APP_PORT

app.use(express.json())

const categoriesRepository = repository.newCategoriesRepository(knex) // include param knex ORM
const categoriesUseCase = usecase.newCategoriesUseCase(categoriesRepository) // include param repository
delivery.newCategoriesController(app, categoriesUseCase)

const couponsRepository = repository.newCouponsRepository(knex)
const couponsUseCase = usecase.newCouponsUseCase(couponsRepository)
delivery.newCouponsController(app, couponsUseCase)

const productsRepository = repository.newProductsRepository(knex)
const productsUseCase = usecase.newProductsUseCase(productsRepository)
delivery.newProductsController(app, productsUseCase)

const usersRepository = repository.newUsersRepository(knex)
const usersUseCase = usecase.newUsersUseCase(usersRepository)
delivery.newUsersController(app, usersUseCase)

app.listen(port, () => {
    console.log(`Server listen and running in port ${port}`)
})