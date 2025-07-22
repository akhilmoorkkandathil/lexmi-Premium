const mongoose = require('mongoose')
const dotenv = require('dotenv')


dotenv.config()

const connectDB = async ()=>{
    try {
        mongoose.connect('mongodb+srv://laxmipremiumcake1113:dhV8jOWkq5Qu1wOc@laxshmi.bx7qiny.mongodb.net/laxmi2k25?retryWrites=true&w=majority&appName=Laxshmi')
        console.log('MONGODB Connected Successfuly ! ')
        
    } catch (error) {
        console.log('error catched: ',error)
    }
}

 
module.exports =  connectDB