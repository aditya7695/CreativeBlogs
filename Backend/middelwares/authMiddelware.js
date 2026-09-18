export const myCustomMiddelware = async(req,res,next) => {
    try {
        

        return next()
    } catch (error) {
        return res.status(500).json({
            status : false,
            message : error.message
        })
    }
}