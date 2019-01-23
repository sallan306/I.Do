const controller = {}
const db = require('./users.model');

//BCRYPT
const bcrypt = require('bcrypt-nodejs');
const saltRounds = 10;

//add a new user to the db
controller.addUser = (req, res, next) =>{
    let data = req.body;
    //console.log(data);
    data.email = data.email.toLowerCase();
    console.log (data.email);
    db.findOne({email:data.email})
        .then( (result) => {

            //console.log ("FindOne Result" ,result);
            
            if (result){ 
                res.status(200).json({success: false, msg:"Email already in use"})
            }
            else{

                //hashing the password
                bcrypt.hash(data.password, null, null, (err, hash) => {
                    console.log (err, hash);
                    if (err) throw err
                    //creating new user with hashed password
                    db.create({
                        email: data.email,
                        password: hash
                    })
                    .then( result => {
                        console.log(result);
                    })
                    .catch( err => {
                        console.log(err);
                    })
                })

            }//end else
            
    });//END FIND ONE
}//END ADD USER

controller.deleteThisUser = (req, res, next) => {

    db.deleteOne({_id: req.user.id})
    .then( result => {
        console.log (result);
        res.json({success: true, msg:`deleted user: ${req.user.id}`});
    })
    .catch()
}

controller.findSpecificUser = (req, res, next) => {
    console.log("Read");
    db.findOne({id: req.params.id}, (result)  => {
        console.log (result);
        res.status(200).json({success: true, msg: result})
    })
}

module.exports = controller;