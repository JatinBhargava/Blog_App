const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path:'./config.env'})
// Database connection


const db = process.env.Database
mongoose.connect(db,{
    // useNewUrlParser : true,
    // useCreateIndex : true,
    // useUnifiedTopology : true,
    // useFindAndModify : false
}).then(()=>{
    console.log('Connection Successful')
}).catch((err)=>{
    console.log('Unsuccessful')
})