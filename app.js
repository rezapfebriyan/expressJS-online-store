const express = require('express')
const dotenv = require('dotenv').config()

const auth = require('./middleware/auth')
const knex = require('./knex')
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

const categoriesRepository = repository.newCategoriesRepository(knex)
const categoriesUseCase = usecase.newCategoriesUseCase(categoriesRepository)
delivery.newCategoriesController(app, categoriesUseCase)

const couponsRepository = repository.newCouponsRepository(knex)
const couponsUseCase = usecase.newCouponsUseCase(couponsRepository)
delivery.newCouponsController(app, couponsUseCase)

app.listen(port, () => {
    console.log(`Server listen and running in port ${port}`)
})