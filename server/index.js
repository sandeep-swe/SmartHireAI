
import express from "express"
 import dotenv from "dotenv"
 import connectDB from "./config/connectdb.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRouter from "./routes/auth.routes.js"


dotenv.config()
const app=express()
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))





const port = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter)

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
    connectDB()
})