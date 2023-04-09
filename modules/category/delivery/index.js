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

    app.get('/categories', getAllCategory)
    app.get('/category/:id', getCategoryById)
}