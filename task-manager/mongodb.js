const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())
MongoClient.connect(connectionURL, {useNewUrlParser:true}, (error,client)=>{
    if(error){
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id : id,
    //     name:'Bhalchandra',
    //     age:27
    // }, (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'abhinav',
    //         age:25
    //     },
    //     {
    //         name:'sravanth',
    //         age:25
    //     }
    // ], (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert the documents!')
    //     }
    //     console.log('Success!')
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         name:'cook the food'
    //     },
    //     {
    //         name:'get the groceries'
    //     },
    //     {
    //         name:'get a haircut'
    //     }
    // ], (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert the tasks at this time!')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({_id:new ObjectID('5c9ae50cb52e5845fce311e1')}, (error, user)=>{
    //     if(error){
    //         return console.log('Unable to fetch!')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age:27}).toArray((error, users)=>{
    //     console.log(users)
    // })

    // db.collection('users').find({age:27}).count((error, count)=>{
    //     console.log(count)
    // })

    // db.collection('users').updateOne({_id: new ObjectID('5c9b0965f479b9502c4b7a62')},
    // {
    //     $inc : {
    //         age:1
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('users').deleteMany({
        age:27
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log (error)
    })
})