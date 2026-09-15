import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import authRoute from '../Backend/routes/authRoute.js'



const app = express()

app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 3000 ; 


app.get('/',(req,res)=>{
    res.json("This is get route")
})

app.use('/api/auth',authRoute);

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
