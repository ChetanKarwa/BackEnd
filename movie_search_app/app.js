var express= require('express');
var app = express();
const request= require("request");
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("search");
})
app.get("/results",function(req,res){
    var moviename= req.query.moviename;
    var url= "http://www.omdbapi.com/?s=" + moviename + "&apikey=64bdeafd";
    request(url, function (error, response, body) {
    if(!error && response.statusCode == 200)
    {
        const data= JSON.parse(body);
        res.render("results",{data: data});
    }
});
});

app.listen(3000,function(){
    console.log("Movie app has started!!");
})