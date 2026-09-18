import Blog from "../models/blog.js";

export const postBlog = async(req,res) => {
    try {
        const {authorId , title , description , content ,category , imageUrl} = req.body;

        if(!authorId || !title || !description || !content || !category || !imageUrl){
            return res.status(400).json({
                status:false,
                message : "You should provide all the required details"
            })
        }

        await Blog.create({
            author : authorId,
            title,
            content,
            description,
            category,
            imageUrl
        })

        return res.status(200).json({
            status : true,
            message : "Your blog is created , please go and publish",
            Data : {
                Title : title,
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