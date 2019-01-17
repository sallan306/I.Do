const controller = {}
const db = require('./users.model')

//BCRYPT
const bcrypt = require('bcrypt');
const saltRounds = 10;

//add a new user to the db
controller.addUser = (req, res, next) =>{
    const data = req.body;
    db.findOne({email: req.body.email}, (err, response) => {
        if (err) throw err;
        if (response){
            console.log("bro, this email already exists.");
            res.status('400').json({success: false, msg:"This email is already in use."});
        } 
        else {
            bcrypt.hash(data.password, saltRounds).then(function(hash) {
                // Store hash in your password DB.
                //packaging data for newUser to be sent to db.
                const newUser = {
                    password: hash,
                    email: data.email
                }
        
                //creating new user in the DB, 
                db.create(newUser, function(err, result) {
                    if (err) return handleError(err);

                    if (result){ res.status(200).json({ success: true, msg: "User Created"}) }
                    else ( res.status(500).json({ success: false, msg: "Something strange is going on brah...."}))
                });
            });//End Hash

            res.status(200).json("")
        }//end Else
    });//end findOne
}//end addUser

//DEV ONLY FUNCTION
controller.findAll = (req, res, next) => {
    console.log ("Read all");
    db.find({}, (err, results) => {
        console.log(results);
        res.status(200).json({success:true, msg: results});
    })
}//end findAll

controller.findSpecificUser = (req, res, next) => {
    console.log("Read");
    db.findOne({id: req.params.id}, (result)  => {
        console.log (result);
    })
}


module.exports = controller;