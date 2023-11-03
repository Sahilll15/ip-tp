const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    Image: {
        type: String,
        required: false
    }
})


const Product = mongoose.model('Product', productSchema)

module.exports = {
    Product
}

