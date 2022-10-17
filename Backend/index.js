// initial files
const env = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const app = express()


require('./DB/connection')

//parse to json
app.use(express.json())

//model

const Blog = require('./model/blogSchema');

// router

app.use(require('./Router/auth'));

//middlewares

app.get('/',(req,res)=>{
    res.send(`Hello Server`)
})

app.get('/about',(req,res)=>{
    res.send(`Hello from about page`)
})


// listern
app.listen(3000,()=>{
    console.log('Hello from 3000')
})
