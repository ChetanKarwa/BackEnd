var express= require("express");
var app= express();
var bodyparser= require("body-parser");
// this line is essential so that our app can use bodyparser
app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine","ejs");

var freinds=["Harsh", "Gandhi" ,"Asawa" ,"Sakshi"];


app.get("/",function(req,res){
    res.render("home");
})

app.get("/freind",function(req,res){
    res.render("freinds",{freinds: freinds})
})
// post request is used when we want some data to get save in the database 
app.post("/addFreind",function(req,res){
    // req.body contain all info regaurding the text input in freind.ejs file it act as an object
    var newfreind=req.body.newfreind;
    // we have pushed the newfreind in array so that it shows in list
    freinds.push(newfreind);
    // redirect is used so that we again goes back to /freind get route and run it
    res.redirect("/freind");
})
app.listen(4000,function(){
    console.log("server started")
})