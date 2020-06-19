var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app",{useNewUrlParser: true,useUnifiedTopology: true});
// this is a type of schema we declare so that every cat has name and age and so on type of class
var catSchema= new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
})
// run that schema and make variable cat to act it as an class
var Cat = mongoose.model("Cat", catSchema);

// adding cats in the database

// var george= new Cat({
//     name: "Mr Norris",
//     age: 7,
//     temperament: "Evil"
// });


// // this george variable is just the name we are refering when we add new cat 
// // in data base it only goes to cats collection ...


// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong");
//     }
//     else{
//         console.log("we save the cat to the database:")
//         console.log(cat);
//     }
// });

// new way to save a cat in database

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "blend"
},function(err,cat){
    if(err)
    {
        console.log("Cant create new cat")
    }
    else{
        console.log(cat);
    }
})
//retrieving all cats from the database and display it
Cat.find(function(err,cats){
    if(err)
    {
        console.log("oh no we find the error")
    }
    else{

        console.log("ALL THE CATS");
        console.log(cats);
    }
})