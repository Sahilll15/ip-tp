const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const authRoutes = require('./routes/auth.routes')
const productRoutes = require('./routes/product.routes')
const cartRoutes = require('./routes/cart.routes')

const app = express()

app.use(express.json())
app.use(cors())

//connect

const url = 'mongodb://localhost:27017'
app.use('/uploads', express.static('uploads'));

mongoose.connect(url).then(() => {
    console.log('connected')
}).catch((error) => {
    console.log(error)
})

app.listen(4000, () => {
    console.log('listing on port 3000')
})

app.use('/api/v1/users', authRoutes)
app.use('/api/v1/product', productRoutes)
app.use('/api/v1/cart', cartRoutes)
