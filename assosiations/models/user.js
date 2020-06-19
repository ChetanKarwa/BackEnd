var mongoose= require("mongoose")

var userSchema= new mongoose.Schema({
    email: String,
    name: String,
    // now this posts is linked to a particular user now by id or refrence
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

module.exports = mongoose.model("User", userSchema);
