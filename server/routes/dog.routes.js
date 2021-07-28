const express = require('express')
const router = express.Router()


const Dog = require('./../models/Dog.model')
const User = require('./../models/User.model')

router.get('/getAllDog', (req, res) => {

    Dog
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Internal Server Error', err }))
})



router.get('/getAllDogsUser/:user_id', (req, res) => {

    Dog
        .find({ dogOwner: req.params.user_id })
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Internal Server Error', err }))
})


router.get('/getOneDog/:dog_id', (req, res) => {

    Dog
        .findById(req.params.dog_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Internal Server Error', err }))
})

router.post('/newDog', (req, res) => {

    const dog = req.body

    Dog
        .create(dog)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error saving dog', err }))
})


router.put('/editDog/:dog_id', (req, res) => {

    const dog = req.body

    Dog
        .findByIdAndUpdate(req.params.dog_id, dog)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error editing dog', err }))
})

router.delete('/delete/:dog_id', (req, res) => {

    const { dog_id } = req.params

    Dog
        .findByIdAndDelete(dog_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json({ code: 500, message: 'Error delete dog', err }))
})

module.exports = router