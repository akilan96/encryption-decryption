import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./utils/connect-db.js"
import { postRouter } from "./routes.js"

const app = express()

app.use(express.json())
dotenv.config()
app.use(cors())

const port = process.env.PORT || 4003

app.get("/",(req,res)=>{
    res.send("Welcome to Express")
})

await connectDB(process.env.DB_URL) 

app.use("/api",postRouter)


app.listen(port , () =>{
    console.log(`app runs on ${port}`)
})
