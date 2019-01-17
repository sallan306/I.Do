const controller = {}
const db = require('./users.model')

//BCRYPT
const bcrypt = require('bcrypt-nodejs');
const saltRounds = 10;

//add a new user to the db
controller.addUser = (req, res, next) =>{
    const data = req.body;
    //hashing incoming user password for storage in DB
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
            res.status(200).json({data: "User Created"})
        });

        
    }); 
}

//TODO
controller.read = () => {
    console.log("Read");
}

//TODO
//find a specific user
controller.find = (args) => {
    console.log(args);
}

//TODO
//update a user's info. password? email?
controller.update = () => {
    console.log("update");
}

module.exports = controller;