import express from 'express';
import dotenv from 'dotenv';
import './Database/dbConnect.js';

import productRoute from './product.js';


const app = express();
dotenv.config();

app.get( '/', (req, res)=>{
    res.send( '<h1>Backend server is running</h1>' )
});

// product middleware
app.use('/product', productRoute );

const port  = process.env.PORT;
try {

    app.listen( port,()=>{
        console.log( `server is running on port ${port}` );
    } )

} catch (error) {
    console.log(`server start error ${error}`);
}
