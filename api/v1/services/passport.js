const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcrypt-nodejs');

const db = require("../users/users.model");

passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },
  function(email, password, done){
      console.log("passport use:");
      console.log("User: ", email);
      console.log("password: ", password);


      db.findOne({email: email}
        )
        .then(user => {
          //if user was returned, need to check the passwords
          if(user){
            //console.log("user found...");
            //checking password
            bcrypt.compare(password, user.password, function(err, res) {
              //console.log(`err: ${err}, result: ${res}`);
              //if passwords matched....
              if (res){ 
                console.log("passport: user looks good");
                return done(null, user);}
              else{
                console.log("passport: the user doesnt look good");
                return done(null, false, {message: 'Incorrect Username or Password'})
              }
            })
          }
          else{ 
            console.log("Passport: the user wasnt found");
            return done(null, false, {message: 'Incorrect Username or Password'})}

        }).catch( (err) => {
          console.log(err)
          return done(null, false, {message: 'i dont know what happened'})
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