import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import './src/db/dbConnection.js'
import routes from './src/routers/index.js'

const app=express();
const port =process.env.PORT||8080;
app.use('/api',routes)

app.use(express.json())
app.get('/',(req,res)=>{
    return res.json({
       message:"Welcome to APP page"
    })
})

app.listen(port,()=>{
    console.log(`server listen ${port} port`);
    
})
