import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true
    },
    title : {
        type : String,
        required : [true,"Title is required"],
    },
    description : {
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