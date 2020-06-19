var express= require("express");
var app= express();

app.get("/",function(req,res){
    res.send("Hi There, Welcome to my assignment");
})

app.get("/speak/:animal",function(req,res){
    var animal= req.params.animal.toLowerCase();
    var sound={
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof"
    }
    res.send("The " + animal + " says " + sound[animal]);
})

app.get("/repeat/:word/:times",function (req,res) {
    var word= req.params.word;
    var times= Number(req.params.times);
    var s= "";
    for (var i=0;i<times;i++)
        s+=word+" ";
    res.send(s);
})

app.get("*",function(req,res){
    res.send("fuck  off");
})
app.listen(3000,function(){
    console.log("server started");
})