const controller = {}
const db = require('./users.model');

//BCRYPT
const bcrypt = require('bcrypt-nodejs');
const saltRounds = 10;

//add a new user to the db
controller.addUser = (req, res, next) =>{
    const data = req.body;
    //console.log(data);
    db.findOne({email:data.email})
        .then( (result) => {

            //console.log ("FindOne Result" ,result);

            if (result){ 
                res.status(400).json({success: false, msg:"Email already in use"})
            }
            else{
                //console.log(data.password);
                bcrypt.hash(data.password, bcrypt.genSaltSync(saltRounds), null, (err, hash) => { 
                    //console.log(hash);
                    const newUser = {
                        password: hash,
                        email: data.email,
                        firstName: data.firstName,
                        lastName: data.lastName
                    }
            
                    //creating new user in the DB, 
                    db.create(newUser)
                        .then( (result) => {
                            //console.log(`result: ${result}`);
                            if (result){
                                res.status(200).json({success: true, msg: `account ${result.email} was created`});
                            }
                            else {
                                res.status(400).json({success: false, msg: `account not created`});
                            }
                            
                        })
                        .catch( (err) => {
                            res.status(500).jsoin({success: false, msg: `Something went wrong on our end...`})
                        });
                });
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