const mongoose = require('mongoose')
const uuid = require('uuid')

const blogSchema = new mongoose.Schema({
    title : {
        type : String
    },
    content : {
        type : String
    },
    id : {
        type : String,
        default : uuid.v4()
    }
},
{timestamps: true}
)

const Blog = mongoose.model('blogs',blogSchema)
module.exports = Blog;
