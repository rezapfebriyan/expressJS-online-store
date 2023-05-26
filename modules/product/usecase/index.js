module.exports = (repository) => {
    module.getAllProducts = () => repository.getAllProducts()

    module.getProductById = (id) => repository.getProductById(id)

    module.createProduct = (body) => repository.createProduct(body)

    module.updateProduct = (id, body) => repository.updateProduct(id, body)

    module.deleteProduct = (id) => repository.deleteProduct(id)
    
    return module
}