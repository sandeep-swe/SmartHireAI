
import express from "express"
 import dotenv from "dotenv"
 import connectDB from "./config/connectdb.js"

dotenv.config()
const app=express()


const port=process.env.port


app.get("/",(req,res)=>{
    return res.json({message:"server is running"})
})


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
    connectDB()
})