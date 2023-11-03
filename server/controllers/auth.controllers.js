const { User } = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET

const register = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({
            email: email
        })

        if (existingUser) {
            res.status(401).json({ message: "user already exists" })
            return
        }

        const hashedpassword = await bcrypt.hash(password, 10)

        if (!email || !password) {
            res.status(400).json({ message: "fill all the details" })
            return
        }

        const newUser = await User.create({
            email,
            password: hashedpassword
        })
        res.status(201).json({ message: "user created succesfuly", newUser: newUser })
    } catch (error) {
        res.status(501).json({ error: error })
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            email: email
        })

        if (!user) {
            res.status(401).json({ message: "user does not exist" })
            return
        }

        const comparepassword = await bcrypt.compare(password, user.password)

        if (comparepassword) {
            const token = jwt.sign({
                user
            }, JWT_SECRET)

            res.status(200).json({ message: "user lpgged in", user: user, token: token })
        }
        else {
            res.status(401).json({ message: "incorrect password" })
        }


    } catch (error) {
        console.log(error)
        res.status(501).json({ error: error })
    }
}



const getLoggedinUser = async (req, res) => {
    try {

        const user = req.user;
        console.log(user)

        res.status(200).json({ message: user })
    } catch (error) {

        res.status(501).json({ message: error })
    }
}


const uploadData = async (req, res) => {
    try {
        console.log(req.file)
        if (!req.file) {
            res.status(401).json({
                message: 'file not found'
            })
            return
        }

        res.status(200).json({ message: "file added" })
    } catch (error) {
        console.log(error)
        res.status(501).json({ error: error })
        return
    }
}

module.exports = {
    register,
    login,
    getLoggedinUser,
    uploadData
}