import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    Author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true
    },
    Title : {
        type : String,
        required : [true,"Title is required"],
    },
    Description : {
        type : String,
        required : true
    },
    isPublished : {
        type : Boolean,
        required : true,
        default : false
    },
    content : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    imageUrl : {
        type : String,
        require : true
    }
},{
    timestamps : true
});

const Blog = mongoose.model('Blog',blogSchema);

export default Blog;