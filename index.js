require('dotenv').config()
require('./config/modelConfig')
const express = require('express')
const router = require('./routes/productRouter')

const PORT = process.env.PORT || 9000;
const HOST = "localhost";

let app = express()

app.use(express.json())
app.use('/', router)

app.listen(PORT, (req, res) => {
    console.log(`The server is running on port: ${PORT}`)
})
