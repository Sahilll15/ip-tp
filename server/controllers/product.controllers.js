const { Product } = require('../models/product.model')

const creatProduct = async (req, res) => {
    try {
        const { name, price } = req.body;
        const file = req.file;
        console.log('Uploaded File:', file);

        const product = await Product.create({
            name: name,
            price: price,
            Image: file.path
        })
        res.status(201).json({ message: "product created succedfully", product: product })
    } catch (error) {
        console.log(error)
        res.status(501).json({ error: error })
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.find()

        res.status(200).json({ products: products })
    } catch (error) {
        console.log(error)
        res.status(501).json({ error: error })
    }
}


module.exports = {
    creatProduct,
    getProducts
}
