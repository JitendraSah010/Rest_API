import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

try {

    mongoose.connect( process.env.MONGODB_URL )
    .then ( ()=>{
        console.log('database is connected');
    })

} catch (error) {
    console.log(`connecting to database error ${error}`);
}
