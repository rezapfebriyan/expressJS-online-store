module.exports = (app, usecase) => {
    const getAllProducts = async (_, res) => {
        try {
            const data = await usecase.getAllProducts()
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

    const getProductById = async (req, res) => {
        try {
            const data = await usecase.getProductById(req.params.id)
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

    const createProduct = async (req, res) => {
        try {
            let name = req.body.name
            let description = req.body.description
            let image = req.body.image
            let price = req.body.price
            await usecase.createProduct({ name, description, image, price })
            res.json({ 
                'status': 201,
                message: 'Product has been created'
            })
        } catch (err) {
            res.json({
                'status': 500,
                message: err
            })
        }
    }

    const updateProductById = async (req, res) => {
        try {
            let id = req.params.id
            let name = req.body.name
            let description = req.body.description
            let image = req.body.image
            let price = req.body.price
            const body = { name, description, image, price }
            await usecase.updateProduct( id, body )
            res.json({ 
                'status': 200,
                message: 'Product has been updated'
            })
        } catch (err) {
            res.json({
                'status': 500,
                message: err
            })
        }              
    }

    const deleteProductById = async (req, res) => {
        try {
            let id = req.params.id
            await usecase.deleteProduct(id)
            res.json({ 
                'status': 200,
                message: 'Product has been deleted'
            })
        } catch (err) {
            res.json({
                'status': 500,
                message: err
            })
        }
    }

    app.get("/products", getAllProducts)
    app.get("/product/:id", getProductById)
    app.post("/product", createProduct)
    app.put("/product/:id", updateProductById)
    app.delete("/product/:id", deleteProductById)
}