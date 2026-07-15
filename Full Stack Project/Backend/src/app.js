const express=require("express")
const app=express();
const songRouter=require("./routes/songs.routes")
const userRouter=require("./routes/user.routes")
const cors=require("cors")

app.use(cors({
    origin:"http://localhost:5173"
}));
app.use(express.json())
app.use("/app",songRouter)
app.use("/app",userRouter)
module.exports=app;
