// const express = require('express')
import express from "express";
// const port = require("./config/envConfig.js")
import port from "./config/envConfig.js";
// const routes = require("./routes/routes.js")
import routes from "./routes/routes.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
var app = express()

//==============================view========================================
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/webdatabase')
.then(()=>console.log("mongodb connect"))
.catch((err)=>console.log("mongodb not connect"))

app.use(routes)
// =========================================================================
// app.listen(port,()=>{
//     console.log(`runnin on ${port} port`)
// })
app.listen(port,(req,res)=>{
    console.log(`running on ${port}`)
})