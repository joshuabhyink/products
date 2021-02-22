require("dotenv").config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./Controller/products_controller')

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    },
}).then(db => {
    app.set('db', db)
    console.log('db connected')
}).catch(err => {
    console.log(err)
})
app.use(express.json())

app.get('/api/products/:id', ctrl.getOne)
app.get('/api/products', ctrl.getAll)
app.post('/api/products', ctrl.createProduct)
app.put('/api/products/:id', ctrl.updateProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
})