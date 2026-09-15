import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,'Name is required and connot be empty'],
        trim : true
    },
    email : {
        type : String,
        required : [true,"Email is required"],
        unique : [true,"Email already exist"],
        lowercase : true
    },
    role : {
        type : String,
        enum : ['user' , 'admin'],
        default : 'user'
    },
    password : {
        type : String,
        required : true
    }
},{
    timestamps : true
});

const User = mongoose.model('User',userSchema);

export default User;