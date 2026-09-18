import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    blog : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'blog',
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true
    },
    content : {
        type : String,
        required : [true,"content is required"],
    },
   isApproved : {
    type : Boolean,
    required : true,
    default : false
   }
},{
    timestamps : true
});

const Comment = mongoose.model('Comment',commentSchema);

export default Comment;