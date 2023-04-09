module.exports = (app, usecase) => {
    const getAllCategory = async (req, res) => {
        try {
            let categories = await knex('categories');
            res.json(categories)
        } catch (err) {
            res.json({
                'status': 500,
                message: err
            })
        }
    }

    const getCategoryById = async (req, res) => {
        try {
            let categories = await knex('categories').where('id', req.params.id);
            res.json({
                'status': 200,
                data: categories
            })
        } catch (err) {
            res.json({
                'status': 500,
                message: err
            })
        }
    }

    const createCategory = async (req, res) => {
        try {
            let name = req.body.name        
            await knex('categories').insert({ name })

            res.json({ 
                'status': 201,
                message: 'Category has been created'
            })
        } catch (err) {
            res.json({
                'status': 500,
                message: err
            })
        }
    }

    const updateCategory = async (req, res) => {
        try {
            let name = req.body.name
            await knex('categories').where('id', req.params.id).update({ name })        
            res.json({ 
                'status': 200,
                message: 'Category has been updated'
            })
        } catch (err) {
            res.json({
                'status': 500,
                message: err
            })
        }
    }

    const deleteCategory = async (req, res) => {
        try {
            await knex('categories').where('id', req.params.id).del()        
            res.json({ 
                'status': 200,
                message: 'Category has been deleted'
            })
        } catch (err) {
            res.json({
                'status': 500,
                message: err
            })
        }
    }

    app.get('/categories', getAllCategory)
    app.get('/category/:id', getCategoryById)
    app.post('/category', createCategory)
    app.put('/category/:id', updateCategory)
    app.delete('/category/:id', deleteCategory)
}