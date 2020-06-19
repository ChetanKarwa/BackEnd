mongoose= require("mongoose")
mongoose.connect("mongodb://localhost:27017/blog_demo_2",{useNewUrlParser: true,useUnifiedTopology: true});
//Post - tltle,content
// BY this we are requiring the post.js file from models directry
var Post= require("./models/post")

//USER -Email , name
// by this we are requiring the user.js file from models directry
var User= require("./models/user");

Post.create({
    title: "How to coldkj;ogsadlgkjnsdgj pt.3",
    content: "fdklkjgidnvvdlkskjdif"
},function(err,post){
    User.findOne({name: "Bob"},function(err, foundUser){
        if(err){
            console.log(err)
        }else{
            foundUser.posts.push(post);
            foundUser.save(function(err,data){
                if(err){
                    console.log(err)
                }else{
                    console.log(data);
                }
            })
        }
    })
})

// find user and find all post

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err,user){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(user)
//     }
// })

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob"
// })

