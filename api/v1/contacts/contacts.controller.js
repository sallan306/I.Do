const controller = {}
const db = require ('./contacts.model');
const user = require('../users/users.model');

controller.createContactUser = (req, res) => {
    console.log(req.body);
    const newContact = {
        belongsTo: req.user._id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        phone: req.body.phone,
        email: req.body.email,
        comment: req.body.comment
    }
    db.create(newContact)
    .then( results => {
        if (result) {
            res.status(200).json({
                success: true,
                msg:"contact created"
            })
        }
        else{
            res.status(200).json({
                success: false,
                err: 500,
                msg: "something went wrong with the db"
            })
        }
    })
    .catch( err => {
        res.status(200).json({
            success:false,
            err: 500,
            msg: "problem with the DB"
        })
    });
}
controller.createContactGuest = (req, res) => {
    const newContact = {
        belongsTo: req.params.userID,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        phone: req.body.phone,
        email: req.body.email,
        comment: req.body.comment
    }

    //checking to makesure user exists before instering contact
    user.findOne({_id: newContact.belongsTo})
    .then( result => {
        //user exists
        if (result){
            //creating new contact in the db for user
            db.create(newContact)
            .then( result => {
                console.log(result)
                if(result){
                    //sending a response back to user
                    res.status(200).json({
                        success: true, 
                        msg:"created contact"
                    })
                }
                else res.status(200).json({
                    success: false,
                    msg: "Did not create"
                })
            })
            .catch( err => {
                console.log(err);
                res.status(200).json({
                    success: false,
                    msg: "contact Create: did not create user"
                })
            });
        }
        else {
            res.status(200).json({
                success: false,
                err: 400,
                msg: "That uset does not exist to get contacts"
            })
        }
    })
    .catch( err => {
        res.status(200).json({
            success: false,
            msg: "did not find user to add contact to."
        })
    }) 
    
}
controller.getContacts =  (req, res) => {
    if (req.user) {
        db.find({belongsTo: req.user._id})
        .then( (result) => {
            res.status(200).json({
                success: true,
                msg: "contacts for: mr/mrs/ms: "+req.user._id,
                userID: req.user._id,
                contacts: result})
        })
        .catch( (err) => {
            res.status(200).json({
                success: false,
                msg: `something went wrong`,
            })
        });
    }
    else{
        res.status(200).json({
            success: false,
            msg: "no access"
        })
    }

}
controller.editContact = (req, res) => {
    //making sure user is logged in
    if (req.user){
        //finding the contact in the DB.
        db.findOne({_id: req.params.contactID})
        .then( result => {
            console.log("INSIDE EDIT CONTACT");
            //checking the result to make sure it belongs to current user
            console.log(result.belongsTo);
            console.log(req.user._id);
            if (result.belongsTo == req.user._id){
                console.log ("Permission to change contact granted");
                //update contact.

                db.findOneAndUpdate({_id:req.params.contactID}, {
                    $set: { 
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        street: req.body.street,
                        city: req.body.city,
                        state: req.body.state,
                        zipcode: req.body.zipcode,
                        phone: req.body.phone,
                        email: req.body.email,
                        comment: req.body.comment
                    }
                })
                .then ( (result) => {
                    console.log (result)
                    res.status(200).json({
                        success: true,
                        msg: "Contact has been edited",
                        data: result
                    })
                })
                .catch( (err) => {
                    res.status(200).json({
                        success: true,
                        err: 500,
                        msg: 'Problem with the DB'
                    })
                })
            }
            else {
                res.status(200).json({success: false, errCode: 400, msg:"Access to change this contact Denied"})
            }
            
        })
        .catch( err => {
            //printing the error
            console.log(err)
            res.status(200).json({success: false, errCode: 500, msg: "something went wrong with the DB."})
        });
    }
    else{
        res.status(200).json({
            success: false,
            err: 400,
            msg: "Access Denied"
        })
    }
}
controller.deleteContact = (req, res) => {
    //checking to make sure user logged in
    if (req.user){

        //finding the contact in the DB.
        db.findOne({_id: req.params.contactID})
        .then( result => {
            console.log("INSIDE EDIT CONTACT");
            //checking the result to make sure it belongs to current user
            console.log(result.belongsTo);
            console.log(req.user._id);
            if (result.belongsTo == req.user._id){
                console.log ("Permission to change contact granted");
                //update contact.

                db.findOneAndDelete({_id:req.params.contactID})
                .then( (result) => {
                    console.log (result)
                    res.status(200).json({
                        success: true,
                        msg: "Contact has been deleted",
                        data: result
                    })
                })
                .catch( (err) => {
                    console.log (err);
                    res.status(200).json({
                        success: false,
                        err: 500,
                        msg: "Something went wrong with the DB"
                    })
                })
            }
            else {
                res.status(200).json({
                    success: false, 
                    errCode: 400, 
                    msg:"Access to change this contact Denied"
                })
            }
            
        })
        .catch( err => {
            //printing the error
            console.log(err)
            res.status(200).json({
                success: false, 
                errCode: 500, 
                msg: "something went wrong with the DB."})
        });
    }
    else {
        res.status(200).json({
            success: false,
            err: 400,
            msg: "Access Denied"
        })
    }
}
module.exports = controller;