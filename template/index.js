const express = require('express')
var app = express()
const port = require("./config/envConfig.js")
const routes = require("./routes/routes.js")
//==============================view========================================
app.set('view engine','ejs')
app.use(express.static('public'))
// =========================================================================
app.use(routes)
app.listen(port,()=>{
    console.log(`runnin on ${port} port`)
})