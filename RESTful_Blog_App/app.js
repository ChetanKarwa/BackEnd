var express= require("express"),
    expressSanitizer= require("express-sanitizer");
    methodOverride= require("method-override"),
    bodyparser= require("body-parser"),
    mongoose= require("mongoose"),
    app= express();
// APP CONFIG 
mongoose.connect("mongodb://localhost:27017/RESTful_Blog_app",{useNewUrlParser: true,useUnifiedTopology: true});
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
mongoose.set('useFindAndModify', false);
app.use(expressSanitizer());

//MONGOOSE/ MODEL CONFIG
var blogSchema= new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog= mongoose.model("Blog",blogSchema);


// Blog.create(
//     {
//         title: "Test Blog",
//         image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=727&q=80",
//         body: "HELLO THIS IS A BLOG POST",
//     }
// );

//RESTFUL ROUTES
app.get("/",function(req,res){
    res.redirect("/blogs");
});
// iNDEX ROUTE
app.get("/blogs",function(req,res){
    Blog.find({},function(err, blogs){
        if(err){
            console.log(err);
        }else{
            res.render("index",{blogs: blogs})
        }
    });
})

// NEW ROUTE
app.get("/blogs/new",function(req,res){
    res.render("new");
})

// CREATE ROUTE
app.post("/blogs",function(req,res){
    // create blog and then redirect
    // we have to sanitize the body which is coming from the form
    req.body.blog.body= req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog , function(err,newblog){
        if(err){
            res.render("new");
        }else{
            res.redirect("/blogs")
        }
    })
})

// SHOW ROUTE
app.get("/blogs/:id",function(req,res){
    Blog.findById(req.params.id,function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        }else{
            res.render("show",{blog: foundBlog})
        }
    });
})

//EDIT ROUTE
app.get("/blogs/:id/edit",function(req,res){
    Blog.findById(req.params.id,function(err,foundBlog){
        if(err){
            res.redirect("/blogs");
        }else{
            res.render("edit",{blog: foundBlog})
        }
    })
})

// PUT ROUTE
app.put("/blogs/:id",function(req,res){
    // we have to sanitize the body which is coming from the form
    req.body.blog.body= req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err){
        if(err){
            res.redirect("/blogs");
        }else{
            res.redirect("/blogs/"+ req.params.id);
        }
    })
})

// DELETE ROUTE
app.delete("/blogs/:id",function(req,res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/blogs");
        }else{
            res.redirect("/blogs");
        }
    })
})
app.listen(3000,function(){
    console.log("SERVER IS RUNNING");
})



