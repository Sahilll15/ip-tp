const mongoose = require('mongoose')
const { User } = require('../models/user.model')
const { Product } = require('../models/product.model')


const cartSchema = mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: "Product"
    },
    UserId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    quantity: {
        type: Number,
        default: 1
    },
    TotalPrice: {
        type: Number
    }
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = {
    Cart
}