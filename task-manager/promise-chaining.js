require('./mongoose')
const Tasks = require('./models/tasks.js')

// Tasks.findByIdAndDelete('5c9b366a2bdb674908bc8c45').then((task)=>{
//     console.log(task)
//     return Tasks.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log("An error occurred!")
// })

const deleteTaskAndCount = async (id) =>{
    const task = await Tasks.findByIdAndDelete(id)
    const count = await Tasks.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('5c9c18c3e35d672ab8e011c8').then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})