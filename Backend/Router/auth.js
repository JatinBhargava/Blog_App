const express = require('express')
const router = express.Router()

require('../DB/connection')
const Blogs = require('../model/blogSchema')

router.get('/',(req,res)=>{
    res.send('Hello from Home page')
})

// Read or Get
router.get('/allBlogs',(req,res)=>{
    Blogs.find((err,value)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json(value)
        }
    })
})

// Write or Post
router.post('/allblogs',(req,res)=>{
    const {title, content} = req.body
    if(!title || !content){
        return res.send('Enter Title or Body')
    }

    const blog = new Blogs(req.body)
    blog.save().then(()=>{
        res.status(201).json({message : 'Blog Created'})  
    }).catch((err)=>{
        res.status(500).json({message : 'No Blog Post'})
    })
})

// Update or Put
router.put('/update/:id',(req,res)=>{
    let update_id = req.params.id;
    let update_title = req.body.title;
    let update_content = req.body.content

    Blogs.findOneAndUpdate({id:update_id},{$set:{title:update_title,content:update_content}},{new:true},(err,data)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            if(data == null)
            res.send('Nthing is there')
            else
            res.send(data)
        }
    })
})

// Delete or Delete
router.delete('/delete/:id',(req,res)=>{
    let delete_id = req.params.id;

    Blogs.findByIdAndDelete(({id:delete_id}),(err,data)=>{
        res.send(data)
    })
})

module.exports = router