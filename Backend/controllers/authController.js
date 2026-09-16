import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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


        const hashedPassword = await bcrypt.hash(password,10);
        

        await User.create({name , email , password : hashedPassword})

        return res.status(201).json({
            success : true,
            message :"Your registration is successful"
        })
        
    } catch (error) {
        return res.status(400).json({
            success : false,
            message : error.message
        })
    }
}






export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide both email and password"
            });
        }

        const userFromDb = await User.findOne({ email });

        if (!userFromDb) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, userFromDb.password);

        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // 4. Generate an authentication token (JWT)
        // Ensure you have a JWT_SECRET defined in your .env file
        const token = jwt.sign(
            { id: userFromDb._id }, 
            process.env.JWT_SECRET || "your_temporary_secret_key", 
            { expiresIn: "7d" }
        );

        // 5. Send successful response with the token and essential user data
        return res.status(200).json({
            success: true,
            message: "Login successful",
            token: token,
            user: {
                id: userFromDb._id,
                name: userFromDb.name,
                email: userFromDb.email
            }
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};