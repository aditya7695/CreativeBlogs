import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';



const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3000 ; 


// app.get('/',(req,res)()=>{

// })
const serverOn = async() => {
    try {

        await connectDB();
        app.listen(PORT,()=>{
      console.log('Server is running on',PORT)
})
        
    } catch (error) {
        console.log("Failed to connect db or start server")
    }
}
serverOn()
