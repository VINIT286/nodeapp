var express = require('express')
var routes = express.Router()
var {about,contact,home}=require("../controllers/routesControllers.js")

routes.get("/about",about)
routes.get("/contact",contact)
routes.get("/",home)
module.exports = routes