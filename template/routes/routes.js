var express = require('express')
var routes = express.Router()
var {home,about,contact}=require("../controllers/routesControllers.js")
routes.get("/",home)
routes.get("/about",about)
routes.get("/contact",contact)
module.exports = routes