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
module.exports = {about,contact,home}