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
        email: req.body.email 
    }
    db.create(newContact)
    .then( results => console.log(results))
    .catch( err => console.log(err) );
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
        email: req.body.email
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
    //finding the contact in the DB.
    db.findOne({_id: req.params.contactID})
    .then( result => {
        //checking the result to make sure it belongs to current user
        console.log(result);
        if (result._id == req.user._id){
            console.log ("Permission to change contact granted");
            //update contact.
            db.findOneAndUpdate(req.params._id, {
                $set: { 
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    street: req.body.street,
                    city: req.body.city,
                    state: req.body.state,
                    zipcode: req.body.zipcode,
                    phone: req.body.phone,
                    email: req.body.email
                }
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

controller.delteContact = (req, res) => {
    //locating contact
    db.findOne({id: req.params.contactID})
    .then( result => {
        console.log(result)
        //contact located. checking ownership of the contact
        if (result._id == req.user._id){
            db.findByIdAndDelete({_id: req.params.contactID})
            .then( result => {
                console.log(result);
                res.state(200).json({
                    success: true,
                    msg: "Contact Deleted"
                })
            })
            .catch( err=> {
                console.log(result);
                res.state(200).json({
                    success: false, 
                    err: 500,
                    msg: "Something went wrong with the DB"    
                })
            });
        }
    })
    .catch( err => {
        console.log(err)
        res.status(200).json({
            success: false, 
            err:500, 
            msg: "Problem with the DB"})
    })
}

module.exports = controller;