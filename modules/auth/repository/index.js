const { generateJwt, comparePassword } = require("../../../utils")
const table = 'users'

module.exports = (knex) => {
    module.register = (body) => {
        return knex.table(table).insert(body)
    }

    module.login = (email, password) => {
        return new Promise((resolve, reject) => {
            knex.select()
            .where("email", email)
            .first()
            .table(table) 
            .then(data => {
                if (data) {
                    if (comparePassword(password, data.password)) {
                        resolve({
                            accessToken: generateJwt({
                                id: data.id
                            })
                        })
                    } else {
                        reject({
                            message: "Invalid credentials"
                        })
                    }
                } else {
                    reject({
                        message: "your login credentials don't match an account in your system"
                    })
                }
            })
            .catch(err => {
                console.log("Something wrong", err)
                reject(err)
            })
        }) 
    }
    return module
}