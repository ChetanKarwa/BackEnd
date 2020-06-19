var express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  User = require("./models/user"),
  passport = require('passport'),
  LocalStrategy = require('passport-local'),
  passportLocalMongoose = require('passport-local-mongoose');




mongoose.connect("mongodb://localhost/auth_demo_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var app = express();


app.use(require("express-session")({
  secret: "My name is chetan",
  resave: false,
  saveUninitialized: false,
}));
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.set("view engine", "ejs");


// =================================
// ROUTES
// =================================

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/secret", (req, res) => {
  res.render("secret");
});

// authentication routes 

//show sign up page
app.get("/register", (req, res) => {
  res.render("register");
});
//saves the usersignup data
app.post("/register", (req, res) => {

  User.register(new User({
    username: req.body.Username
  }), req.body.Password, (err, user) => {
    if (err) {
      console.log(err);
      return res.render('register');
    }
    passport.authenticate("local")(req, res, () => {
      res.redirect("/secret");
    })
  })
})

// Login Routes
//render Login Form

app.get("/login", (req, res) => {
  res.render("login");
})

app.listen(3000, () => {
  console.log("http://localhost:3000");
});