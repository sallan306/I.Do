const controller = {}
const db = require('./users.model');

//BCRYPT
const bcrypt = require('bcrypt-nodejs');
const saltRounds = 10;

//add a new user to the db
controller.addUser = (req, res, next) =>{
    let data = req.body;
    //console.log(data);
    data.email = data.email.toUpperCase();
    console.log (data.email);
    db.findOne({email:data.email})
        .then( (result) => {

            //console.log ("FindOne Result" ,result);
            
            if (result){ 
                res.status(200).json({success: false, msg:"Email already in use"})
            }
            else{

                db.create({
                    password: data.password,
                    email: data.email
                }, (err, result) => {
                    console.log (err, result)
                    if (err) {
                        res.status(200).json({success: false, msg:err});
                    } else if (result) {
                        res.status(200).json({success:true, msg: result.email })
                    }
                });

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