const controller = {};
const db = require("./users.model");

//BCRYPT
const bcrypt = require("bcrypt-nodejs");
const saltRounds = 10;

//add a new user to the db
controller.addUser = (req, res, next) => {
  let data = req.body;
  //console.log(data);
  data.email = data.email.toLowerCase();
  // console.log(data.email);
  db.findOne({ email: data.email }).then(result => {
    //console.log ("FindOne Result" ,result);
    if (result) {
      console.log("User already exists");
      res.status(200).json({ success: false, msg: "Email already in use" });
    } else {
      //hashing the password
      bcrypt.hash(data.password, null, null, (err, hash) => {
        //console.log (err, hash);
        if (err) throw err;
        //creating new user with hashed password
        db.create({
          email: data.email,
          password: hash,
          firstName: data.firstName,
          lastName: data.lastName,
          color: data.color
        })
          .then(result => {
            console.log("created new user: ");
            // console.log(result);
            res.status(200).json({
              success: true,
              msg: "Created new User",
              data: {
                firstName: result.firstName,
                lastName: result.lastName,
                email: result.email,
                password: "*********"
              }
            });
          })
          .catch(err => {
            console.log(err);
            res.status(200).json({
              success: false,
              err: 500,
              msg: "Something went wrong with the DB- bro"
            });
          });
      });
    } //end else
  }); //END FIND ONE
}; //END ADD USER
controller.deleteThisUser = (req, res, next) => {
  db.deleteOne({ _id: req.user.id })
    .then(result => {
      console.log(result);
      res.json({ success: true, msg: `deleted user: ${req.user.id}` });
    })
    .catch(err => {
      console.log(err);
      res.json({
        success: false,
        err: 500,
        msg: "Something went wrong with the DB"
      });
    });
};
controller.findSpecificUser = (req, res, next) => {
  console.log("findspecificUser")
  console.log(req.params.userID)
  db.findOne({ _id: req.params.userID })
    .then(result => {
      if (result) {
        // console.log("findUserResult")
        // console.log(result);
        res.status(200).json({
          success: true,
          data: result,
          msg: "user found whoopie!"
        });
      } else {
        res.status(200).json({
          success: false,
          msg: "Did not find that user"
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(200).json({
        success: false,
        err: 500,
        msg: "Something went wrong with the DB"
      });
    });
};
controller.editUserColor = (req, res) => {
  // console.log("reqbody and params")
  // console.log(req.body, req.params);
  db.findByIdAndUpdate(
    { _id: req.params.userID },
    {
      $set: {
        color: [req.body.color1, req.body.color2, req.body.color3]
      }
    }
  )
    .then(result => {
      if (result) {
        //console.log(result);
        res.status(200).json({
          success: true,
          data: result
        });
      } else {
        res.status(200).json({
          success: false,
          msg: "Did not find that user"
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(200).json({
        success: false,
        err: 500,
        msg: "Something went wrong with the DB"
      });
    });
};
module.exports = controller;
