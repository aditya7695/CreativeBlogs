import mongoose from "mongoose";

const connectDB = async () => {
    try {
       mongoose.connection.on("connected",()=>{
        console.log("DB is connected")
       })
       mongoose.connection.on("disconnected",()=>{
        console.log("DB is connected")
       })
       await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        console.log("Failed to connect the database",error.message);
        process.exit(1);
    }
}

export default connectDB;