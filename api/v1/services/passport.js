const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcrypt-nodejs');

const db = require("../users/users.model");

passport.use(new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password"
  },
  function(email, password, done){
      console.log("passport use:");
      console.log("User: ", email);
      console.log("password: ", password);

      db.findOne({email: email})
        .then(user => {
          //if user was returned, need to check the passwords
          if(user){
              if (user.password == password) return done(null, user);
              else return done(null, false)
          }
        })
  }
))


passport.serializeUser(function(user, cb){
  console.log("user", user);
  cb(null, user);
});
passport.deserializeUser(function(obj, cb){
  console.log("object", obj);
  cb(null, obj);
});


module.exports = passport;