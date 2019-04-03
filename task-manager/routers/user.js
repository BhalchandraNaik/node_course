const express = require('express')
const router = new express.Router()
const User = require('../models/user')

router.post('/users', (req, res)=>{
    const user = new User(req.body)
    user.save().then(()=>{
        res.send(user)
    }).catch((error)=>{
        res.send(error)
    })
})

router.patch('/users/:id', async (req, res)=>{
    const allowedUpdates = ['name', 'email','password','age']
    const updates = Object.keys(req.body)
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update)
    })

    if(!isValidOperation){
        return res.status(400).send({"error":"Invalid updates"})
    }
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new :true, runValidators:true})
        if(!user){
            return res.status(404).send()
        }
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/users/:id', async (req, res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            return res.status(404).send({"error":"Data does not exists!"})
        }
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send(error)
    }
})


module.exports = router