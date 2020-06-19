mongoose= require("mongoose")
mongoose.connect("mongodb://localhost:27017/blog_demo",{useNewUrlParser: true,useUnifiedTopology: true});
//POST- tilte,content

var postSchema= new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post",postSchema);

//USER -Email , name
var userSchema= new mongoose.Schema({
    email: String,
    name: String,
    // now this posts is linked to a particular user by embeding the full data
    posts: [postSchema]
});

var User = mongoose.model("User",userSchema);

// for creating a new user and make a post related to that user

// var newUser= new User({
//     email: "hermonie@hogwards.edu",
//     name: "Harmonie Granger"
// })

// newUser.posts.push({
//     title: "Hello How are you",
//     content: "I am fine"
// })
// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// })

// normal post before we have embedded it in user

// var newPost= new Post({
//     title: "Reflection on Apples",
//     content: "They are delecious"
// })

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//         }else{
//          console.log(post);
//         }
//     })


// find one is use so that we get all info about that user otherwise we get just an array of that..
// down here we are finding a particular user and then adding a new post in that
User.findOne({name: "Harmonie Granger"},function(err,user){
    if(err){
        // console.log(err)
    }else{
        user.posts.push({
            title: "Three things i really hate oh my god",
            content: "Hello Hello Hello"
        });
        user.save(function(err,user){
            if(err){
                console.log(err)
            }else{
                console.log(user)
            }
        })
    }        
}) 