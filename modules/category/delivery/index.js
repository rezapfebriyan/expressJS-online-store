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

    app.get('/categories', getAllCategory)
}