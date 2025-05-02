// const express = require('express')
import express from 'express'
var app = express()
// const port = require("./config/envConfig.js")
import port from "./config/envConfig.js"
// const routes = require("./routes/routes.js")
import routes from "./routes/routes.js"
app.use(routes)
//==============================view========================================
app.set('view engine','ejs')
app.use(express.static('public'))
// =========================================================================
app.listen(port,()=>{
    console.log(`runnin on ${port} port`)
})