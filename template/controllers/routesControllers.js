function home(req,res){
    res.render('home')
}
function about(req,res){
    res.render('about')
}
function contact(req,res){
    res.render('contact')
}
module.exports = {home,about,contact}