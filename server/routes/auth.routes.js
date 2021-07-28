const express = require('express')
const router = express.Router()

const bcrypt = require("bcrypt")
const bcryptSalt = 10

const User = require('./../models/User.model')

// Signup (post)
router.post('/signup', (req, res) => {
    //recoge la info del front/postman
    const { userName, password, role, postalCode, image, telephone,
        experience, price, dogTrainer, admissionPPP, maximumDogs, numberDogs } = req.body

    console.log(req.body)
    User
        .findOne({ userName })
        .then(user => {

            if (user) {
                res.status(400).json({ code: 400, message: 'Username already exixts' })
                return
            }

            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)

            User
                .create({
                    userName, password: hashPass, role, postalCode, image, telephone,
                    experience, price, dogTrainer, admissionPPP, maximumDogs, numberDogs
                })
                .then(() => res.json({ code: 200, message: 'User created' }))
                .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating user', err }))
        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))
})


// Login (post)
router.post('/login', (req, res) => {

    const { userName, password } = req.body

    User
        .findOne({ userName })
        .then(user => {
            console.log(user)
            if (!user) {
                res.status(401).json({ code: 401, message: 'Username not registered' })
                return
            }

            if (bcrypt.compareSync(password, user.password) === false) {
                res.status(401).json({ code: 401, message: 'Incorect password' })
                return
            }

            req.session.currentUser = user
            res.json(req.session.currentUser)
        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err }))
})


router.get('/logout', (req, res) => {
    req.session.destroy((err) => res.json({ mssage: 'Logout successful' }));
})

router.post('/isloggedin', (req, res) => {
    req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'Unauthorized' })
})



module.exports = router