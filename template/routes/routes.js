// var express = require('express')
// var routes = express.Router()
import express from "express"
var routes=express.Router()
// var {about,contact,home}=require("../controllers/routesControllers.js")
import {about,contact,home,adddata,subdata} from "../controllers/routesControllers.js"
routes.get("/about",about)
routes.get("/contact",contact)
routes.get("/",home)
routes.get("/adddata",adddata)
routes.post("/subdata",subdata)
// module.exports = routesx     
export default routes