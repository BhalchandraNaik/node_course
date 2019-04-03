const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true
})

const User = mongoose.model('User', {
    name:{
        type:String,
        required:true,
        trim:true
    },
    age: {
        type:Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be positive number')
            }
        }
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(validator.contains(value.toLowerCase(), 'password')){
                throw new Error('Cannot contain the string "password"')
            }
        }
    }
})

module.exports = User