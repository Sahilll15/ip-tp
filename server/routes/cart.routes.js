const express = require('express')
const { createCart, getCart } = require('../controllers/cart.controllers')
const { verifyToken } = require('../middleware/validateToken')

const router = express.Router()

router.post('/create/:productId', verifyToken, createCart)
router.get('/get', verifyToken, getCart)

module.exports = router
