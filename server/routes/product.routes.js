
const express = require('express')
const { creatProduct, getProducts } = require('../controllers/product.controllers')
const { upload } = require('../middleware/upload')
const router = express.Router()

router.post('/create', upload, creatProduct)
router.get('/get', getProducts)

module.exports = router

