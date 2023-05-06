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

app.get('/coupons', async (req, res ) => {
    try {
        let coupons = await knex('coupons');
        res.json({
            'status': 200,
            data: coupons
        })
    } catch (err) {
        res.json({
            'status': 500,
            message: err
        })
    }
})

app.get('/coupon/:id', async (req, res) => {
    try {
        let coupons = await knex('coupons').where('id', req.params.id);
        res.json({
            'status': 200,
            data: coupons
        })
    } catch (err) {
        res.json({
            'status': 500,
            message: err
        })
    }
})

app.post('/coupon', async (req, res) => {
    try {
        let code = req.body.code        
        let description = req.body.description        
        await knex('coupons').insert({ code, description })

        res.json({ 
            'status': 201,
            message: 'Coupon has been created'
        })
    } catch (err) {
        res.json({
            'status': 500,
            message: err
        })
    }
})

app.put('/coupon/:id', async (req, res) => {
    try {
        let code = req.body.code
        let description = req.body.description
        await knex('coupons').where('id', req.params.id).update({ code, description })        
        res.json({ 
            'status': 200,
            message: 'Coupon has been updated'
        })
    } catch (err) {
        res.json({
            'status': 500,
            message: err
        })
    }
})

app.listen(port, () => {
    console.log(`Server listen and running in port ${port}`)
})