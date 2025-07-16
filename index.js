require('dotenv').config({ path: './config.env' });
const express=require("express");
const { default: mongoose } = require('mongoose');
const app=express()
const postroute=require("./postroute")
mongoose.connect(process.env.urlmongo).then(()=>{
    console.log("connected")
}).catch((err)=>{
    console.log("ERROR",err)
})
app.use(express.json())
app.use("/posts",postroute)
const port=process.env.PORT||8000
app.listen(port,"127.0.0.1",()=>{
    console.log("server connected")
})