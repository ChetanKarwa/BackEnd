var express= require("express");
var app=express();
// only ejs file present in views dir is accessible directly but if we want our style sheet to respond it 
// we have to explicitly call the directry so that it take reference of it...
app.use(express.static("public"));
// this line is written so that every time we dont write home.ejs and all only home..
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
})
// render fnc is use to call the different file to execute when we call this root
app.get("/love/:thing",function (req,res) {
    var thing= req.params.thing;
    res.render("love",{thingvar: thing});
})

app.get("/posts",function (req,res) {
    var posts= [
        {title: "post1", author: "harsh"},
        {title: "post2", author: "sakshi"},
        {title: "post2", author: "gandhi"},
    ]
    res.render("posts",{posts: posts});
})
app.listen(3000,function () {
    console.log("server is responding");
})