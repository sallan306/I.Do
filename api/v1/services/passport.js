const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../users/users.model");

passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },
  function(email, password, done){

      db.findOne({email: email}
        )
        .then(response => {

            if(!response){
                console.log("bad email");
                return done(null, false, { message: "Incorrect Email"});
            } else if(!response.validPassword(password)){
                console.log("bad password");
                return done(null, false, { message: "Incorrect password"});
            }
            console.log("info looked good");
            return done(null, response);
            
        });
  }
));

passport.initialize();
passport.serializeUser(function(user, cb){
  cb(null, user);
});
passport.deserializeUser(function(obj, cb){
  cb(null, obj);
});

module.exports = passport;