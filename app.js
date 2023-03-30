const express = require("express")
const dotenv = require("dotenv").config()

const app = express()
const port = process.env.APP_PORT

app.use(express.json())

app.listen(port, () => {
    console.log(`Server listen and running in port ${port}`)
})