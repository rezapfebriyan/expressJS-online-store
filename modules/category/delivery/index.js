module.exports = (app, usecase) => {
    const getAllCategories = async (_, res) => {
        try {
            const data = await usecase.getAllCategories() // call function in usecase
            
            res.json({
                'status': 200,
                data
            })
        } catch (err) {
            res.json({
                'status': 500,
                message: err
            })
        }
    }

    const getCategoryById = async (req, res) => {
        try {
            const data = await usecase.getCategoryById(req.params.id)

            res.json({
                'status': 200,
                data
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

            await usecase.createCategory({ name })

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

    const updateCategoryById = async (req, res) => {
        try {
            let id = req.params.id
            let name = req.body.name
            const body = { name }

            await usecase.updateCategory( id, body )

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

    const deleteCategoryById = async (req, res) => {
        try {
            await usecase.deleteCategory(req.params.id)

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

    app.get("/categories", getAllCategories)
    app.get("/categories/:id", getCategoryById)
    app.post("/categories", createCategory)
    app.put("/categories/:id", updateCategoryById)
    app.delete("/categories/:id", deleteCategoryById)
}