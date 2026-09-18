import Comment from "../models/comment.js";

export const postComment = async(req,res) => {
    try {
        const {userId,content,blogId} = req.body;

        if(!userId || !content || !blogId){
            return res.status(400).json({
                status:false,
                message : "You should provide all the required details"
            })
        }

        await Comment.create({
            user : userId,
            content,
            blog : blogId
        })

        return res.status(200).json({
            status : true,
            message : "Your Comment is created",
            Data : {
                content : content
            }
        })

    } catch (error) {
       return res.status(500).json({
        status : false,
        message : error.message
       }) 
    }
}