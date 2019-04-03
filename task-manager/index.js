const express = require('express')
const Tasks = require('./models/tasks')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.listen(port, ()=>{
    console.log('Server is up on Port '+port)
})

app.use(userRouter)

app.post('/tasks', async (req, res)=>{
    const task = await new Tasks(req.body)
    try{
        await task.save()
        res.status(201).send(task)
    }catch(error){
        res.status(500).send(error)
    }
})

app.get('/tasks', async (req, res)=>{
    try{
        tasks = await Tasks.find({})
        res.status(201).send(tasks)
    }catch(error){
        res.status(500).send(error)
    }
})

app.get('/tasks/:id', async (req, res)=>{
    const id = req.params.id
    try {
        const task = await Tasks.findById(id)
        res.status(201).send(task)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.patch('/tasks/:id', async (req, res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({'error':'Invalid updates!'})
    }

    try {
        const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        if(!task){
            return res.status(404).send()
        }
        return res.status(201).send(task)
    } catch (error) {
        return res.status(400).send(error)       
    }
})

app.delete('/tasks/:id', async (req, res)=>{
    try {
        const task = await Tasks.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send({"error":"Data does not exists!"})
        }
        return res.status(201).send(task)
    } catch (error) {
        return res.status(500).send({"error":"An error occured!"})
    }
})