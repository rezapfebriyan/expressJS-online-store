module.exports = (repository) => {
    module.register = (body) => repository.register(body)

    module.login = (email, password) => repository.login(email, password)
    
    return module
}