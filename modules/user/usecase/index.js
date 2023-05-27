module.exports = (repository) => {
    module.getAllUsers = () => repository.getAllUsers()

    module.getUserById = (id) => repository.getUserById(id)

    module.createUser = (body) => repository.createUser(body)

    module.updateUser = (id, body) => repository.updateUser(id, body)

    module.deleteUser = (id) => repository.deleteUser(id)
    
    return module
}