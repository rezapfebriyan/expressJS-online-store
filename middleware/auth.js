const { verifyJwt } = require('../utils')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1] // get token without word 'bearer '
        const decoded = verifyJwt(token)
        req.user = decoded
        next()
    } catch (error) {
        res.statusCode = 403
        res.send({
            message:'Invalid token',
        })
    }
}