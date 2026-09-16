import User from "../models/user";
import bcrypt from "bcrypt"

export const register = async(req,res) => {
    try {

        const {name , email , password} = req.body;

        if(!name || !email || !password){
            return res.status(404).json({
                success : false,
                message : "You have to provide all 3 details to register" 
            })
        }

        const userFromDb = await User.findOne({email});

        if(userFromDb) {
            return res.status(400).json({
                success : false,
                message : "User already exist"
            })
        }

        
    } catch (error) {
        return res.status(400).json({
            success : false,
            message : error.message
        })
    }
}