import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

mongoose.connect(process.env.MONGODB_URL)
        .then(()=>{console.log("MongoDB is successfully connected")})
        .catch((err)=>{
            console.log("Error while connecting MongoDb and Error is : ", err.message)
        })

const app = express();

app.listen(3000, ()=>{
    console.log('Server is running on port 3000 !')
})