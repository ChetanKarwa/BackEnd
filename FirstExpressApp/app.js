var express= require("express");
var app = express();
// this get request is used when we type / in browser 
app.get("/",function(req,res){
    res.send("Hi There!!");
})
// when we write /dogs this fnc will call and execute
// req means the req sent by the user and res is the respond send by the user
app.get("/dogs",function(req,res){
    res.send("Aur Bhiyon kese ho");
    console.log("someome made a req");
});


app.get("/r/:subreddit",function(req,res){
    // if we want to access subreddit variable inside we use params fnc which contain key value pair
    // of all the path variable we pass
    res.send(req.params.subreddit); 
});

// * is called whenever other than our provide get is passed in browser in this app.js we provide two get
// request / and /dogs so other than this our * is called and it should behind our get request
app.get("*",function(req,res){
    res.send("hello freinds");
})
// app.listen in essential so that our browser respond at localhost:3000 to run our app
// by semicolon it means that we listen to any path after /r/ this
//: act as a variables
app.listen(3000,function(){
    console.log("server started");
});


// order always matter in routes