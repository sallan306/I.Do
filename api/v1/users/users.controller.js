const controller = {}
const db = require('./users.model');

//BCRYPT
const bcrypt = require('bcrypt-nodejs');
const saltRounds = 10;

//add a new user to the db
controller.addUser = (req, res, next) =>{
    const data = req.body;
    console.log(data);
    db.findOne({email:data.email})
        .then( (result) => {

            //console.log ("FindOne Result" ,result);
            
            if (result){ 
                res.status(400).json({success: false, msg:"Email already in use"})
            }
            else{
                //res.status(200).json({success: true, msg:"No user exists. attempt to make"})
                bcrypt.hash(data.password, bcrypt.genSaltSync(saltRounds), null, (err, hash) => {
                    console.log (`err ${err}, hash ${hash}`);
                    const newUser = {
                        password: hash,
                        email: data.email,
                        firstName: data.firstName,
                        lastName: data.lastName
                    }
                    console.log(newUser);
                    db.create(newUser, (err, result) => {
                        //console.log (err, result)
                        if (err) {
                            res.status(400).json({success: false, msg:err});
                        } else if (result) {
                            res.status(200).json({success:true, msg: result.email })
                        }
                    });
                })//end Bcrypt

            }//end else
            
    });//END FIND ONE
}//END ADD USER

//DEV ONLY FUNCTION
controller.findAll = (req, res, next) => {
    console.log ("Read all");
    db.find({}, (err, results) => {
        console.log(results);
        res.status(200).json({success:true, msg: results});
    }).then( (results) => console.log("Rogue One", results))
}//end findAll

controller.findSpecificUser = (req, res, next) => {
    console.log("Read");
    db.findOne({id: req.params.id}, (result)  => {
        console.log (result);
        res.status(200).json({success: true, msg: result})
    })
}


module.exports = controller;