var mongoose= require("mongoose")

//POST- tilte,content

var postSchema= new mongoose.Schema({
    title: String,
    content: String
});
// by this line we are returning our code to reference.js file by using exports
module.exports = mongoose.model("Post", postSchema); 