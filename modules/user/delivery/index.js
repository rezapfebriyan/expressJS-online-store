const argon2 = require('argon2')

module.exports = (app, usecase) => {
    const getAllUsers= async(_, res) => {
        try {
            const data = await usecase.getAllUsers()
            res.json({
                'status': 200,
                data
            })
        } catch (error) {
            res.status(400)
            .json({ message: error.message })
        }
    }

    const getUserById = async (req, res) => {
        try {
            const data = await usecase.getUserById(req.params.id)
            res.json({
                'status': 200,
                data
            })
        } catch (error) {
            res.status(500)
            .json({ message: error.message })
        }     
    }

    const createUser = async (req, res) => {
        try {
            const {name, email, password, phone} = req.body
            const hash_password = await argon2.hash(password)
            await usecase.createUser({ name, email, password: hash_password, phone })
            res.json({ 
                'status': 201,
                message: 'User has been created'
            })
        } catch (error) {
            res.status(500)
            .json({ message: error.message })
        }
    }

    const updateUserById = async (req, res) => {
        try {
            let id = req.params.id
            let name = req.body.name
            let email = req.body.email
            let phone = req.body.phone
            const body = { name, email, phone }
            await usecase.updateUser( id, body )
            res.json({ 
                'status': 200,
                message: 'User has been updated'
            })
        } catch (error) {
            res.status(500)
            .json({ message: error.message })
        }            
    }

    const deleteUserById = async (req, res) => {
        try {
            let id = req.params.id
            await usecase.deleteUser(id)
            res.json({ 
                'status': 200,
                message: 'User has been deleted'
            })
        } catch (error) {
            res.status(500)
            .json({ message: error.message })
        }
    }

    app.get("/users", getAllUsers)
    app.get("/user/:id", getUserById)
    app.post("/user", createUser)
    app.put("/user/:id", updateUserById)
    app.delete("/user/:id", deleteUserById)
}