const express = require('express')
const router = express.Router()

const { register, login, getLoggedinUser, uploadData } = require('../controllers/auth.controllers')
const { verifyToken } = require('../middleware/validateToken')



router.post('/register', register)
router.post('/login', login)
router.get('/getLoggedin', verifyToken, getLoggedinUser)
// router.post('/file', upload, uploadData)

module.exports = router