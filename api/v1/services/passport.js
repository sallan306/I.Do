const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../users/users.model");

passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },
  function(email, password, done){
      console.log("Inside passport: ", email, password)
      db.find().then(result => {
          console.log(result);
      })
      db.findOne({ 
          where: {
            email: "Cody.1@gmail.com"
            }
        })
        .then((dbUser) => {
            console.log (dbUser);/*
            if(!dbUser){
                return done(null, false, { message: "Incorrect Email"});
            } else if(!dbUser.validPassword(password)){
                return done(null, false, { message: "Incorrect password"});
            }
            return done(null, dbUser);*/
        });
  }
));

passport.serializeUser(function(user, cb){
  cb(null, user);
});
passport.deserializeUser(function(obj, cb){
  cb(null, obj);
});

module.exports = passport;