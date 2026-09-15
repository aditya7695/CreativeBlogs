export const register = async(req,res) => {
    try {
        
    } catch (error) {
        return res.status(400).json({
            success : false,
            message : error.message
        })
    }
}