// var express = require('express')
// var routes = express.Router()
import express from "express"
var routes=express.Router()
// var {about,contact,home}=require("../controllers/routesControllers.js")
import {about,contact,home} from "../controllers/routesControllers.js"
routes.get("/about",about)
routes.get("/contact",contact)
routes.get("/",home)
// module.exports = routes
export default routes