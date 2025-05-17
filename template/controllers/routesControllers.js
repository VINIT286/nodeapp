
import User from "../models/user.js"
import Reg from "../models/reg.js"
function about(req,res){
    let a = 20
    res.render('about',{a})
}
function contact(req,res){
    let ob = {
        "name":"deepak"
    }
    res.render('contact',{ob})
}
function home(req,res){
    let a=[5,6,87,455,56]
    res.render('home',{a})
}
const adddata=(req,res)=>{
    res.render("adddata")
}
const subdata = async(req,res)=>{
    let name = req.body.name
    let email = req.body.email
    await User.create({name,email})
    res.redirect("/")
}
const showreg=(req,res)=>{
    res.render("registration")
}
const regdata = async(req,res)=>{
    let name = req.body.name
    let email = req.body.email
    let mobile = req.body.mobile
    let password = req.body.password
    let cpass = req.body.cpass
    await Reg.create({name,email,mobile,password,cpass})
    res.redirect("/")
}

const getregdata = async(req,res)=>{
    let d= await Reg.find()
    res.json(d)
    res.render("showdata",{d})
}
// module.exports = {about,contact,home}
export{home,contact,about,adddata,subdata,regdata,showreg,getregdata}
