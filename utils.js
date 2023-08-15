const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = "$2b%10@IptGst5LQEfTvYNGoKoNOLK"

const hashPassword = password => bcrypt.hashSync(password, secret)

const comparePassword = (password, hash) => bcrypt.compare(password, hash)

const generateJwt = payload => jwt.sign(payload, secret, {
  expiresIn: '1h'
})
  
const verifyJwt = token => jwt.verify(token, secret)

module.exports = {
    hashPassword,
    comparePassword,
    generateJwt,
    verifyJwt
}