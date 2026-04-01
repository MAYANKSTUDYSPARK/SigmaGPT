import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";


const app = express();
const PORT = 8080 ;

app.use(express.json());
app.use(cors());

app.use("/api", chatRoutes);


app.listen( PORT,"0.0.0.0" ,() => {
        console.log(`Server Running On ${PORT}`)
        connectDB();
});

const connectDB = async () => {
        try {
                await mongoose.connect(process.env.MONGODB_URI);
                console.log("Connected With Database!");
        } catch (err) {
                        console.log("Failed To Connect With Db" , err);
                }
        
} 

app.get("/api/test", (req, res) => {
    res.send("API is working!");
});

