const express = require('express')
const router = express.Router()


const User = require('./../models/User.model')


router.get('/getAllUser', (req, res) => {
    console.log("prueba ")
    User
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Internal Server Error', err }))
})


router.get('/getOneUser/:user_id', (req, res) => {

    User
        .findById(req.params.user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Internal Server Error', err }))
})

router.post('/newUser', (req, res) => {

    const user = req.body
    console.log(user)
    User
        .create(user)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving user', err }))
})

router.put('/editUser/:user_id', (req, res) => {

    const user = req.body
    console.log("prueba ")

    User
        .findByIdAndUpdate(req.params.user_id, user)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing user', err }))
})

router.delete('/delete/:user_id', (req, res) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error delete user', err }))
})

module.exports = router