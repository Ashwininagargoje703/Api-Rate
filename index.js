const express = require("express");

const app=express();
const posts=require("./posts");
const rateLimit=require("express-rate-limit");
const limiter=rateLimit({
    max:5,
    windowMs:20000,
})


app.get('/posts',limiter,(req,res)=>{
    res.send({
        status:"success",
        posts: posts
    })
})


app.listen(5500,()=>console.log(" running on port 5500"));