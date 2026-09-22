import jwt from "jsonwebtoken"
export const myCustomMiddelware = (req,res,next) => {
    try {
        
        const token = req.headers['authorization'].split(' ')[1];
        if(!token){
            return res.status(400).json({
                error : "Access denied . NO token provided"
            })

        }

        const valid = jwt.verify(token , process.env.JWT_SECRET);

        if(!valid){
            return res.status(400).json({
                error : "Access denied . Invalid token provided"
            })
        }

        req.user = valid

        return next()
    } catch (error) {
        return res.status(500).json({
            status : false,
            message : error.message
        })
    }
}