import express from "express";
import cors from "cors";
import { connectDB } from "./src/config/db";
import { route } from "./src/routes";




const app= express();
const PORT= process.env.PORT || 4000;

//connect to db
connectDB()
app.use(cors())
app.use(express.json());
app.use("/api/", route());



const server=app.listen(
    PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    }
)
process.on("unhandledRejection",(error,promise)=>{
    console.log(`Logged Error: ${error}`);
    server.close(()=>process.exit(1))

})
