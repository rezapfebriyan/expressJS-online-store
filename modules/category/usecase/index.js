module.exports = (repository) => {
    module.getAllCategories = () => {
        return repository.getAllCategories()
    }
    module.getCategoryById = (id) => {
        return repository.getCategoryById(id)
    }
    module.createCategory = (body) => {
        return repository.createCategory(body)
    }
    module.updateCategory = (id,body) => {
        return repository.updateCategory(id, body)
    }
    module.deleteCategory = (id) => {
        return repository.deleteCategory(id)
    }
    return module
}