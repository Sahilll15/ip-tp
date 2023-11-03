const { Cart } = require('../models/cart.models')
const { Product } = require('../models/product.model');
const { User } = require('../models/user.model');

const createCart = async (req, res) => {
    try {
        const { productId } = req.params;
        const { quantity } = req.body;
        const user = req.user.user._id;
        console.log('req.user._id', req.user.user._id)

        const product = await Product.findById(productId);
        if (!product) {
            res.status(401).json({ message: "product no found" })
            return
        }
        console.log(product)
        const existingUser = await User.findById(user);

        if (!existingUser) {
            res.status(401).json({ message: "user no found" })
            return
        }



        const cart = await Cart.create({
            productId: productId,
            UserId: user,
            quantity: quantity,
            TotalPrice: quantity * Number(product.price)
        })

        res.status(201).json({ message: "cart created succedfully", cart: cart })
    } catch (error) {
        console.log(error)
        res.status(501).json({ error: error })
    }
}


const getCart = async (req, res) => {
    try {
        const cart = await Cart.find().populate('productId')
            .populate('UserId')
        res.status(200).json({ cart: cart })
    } catch (error) {
        console.log(error)
        res.status(501).json({ error: error })
    }
}


module.exports = {
    createCart,
    getCart
}

