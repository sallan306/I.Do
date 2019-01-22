const controller = {}
const db = require ('./contacts.model');

controller.createContactUser = (req, res) => {
    console.log(req.body);
    const newContact = {
        belongsTo: req.user._id,
        firstName: req.body.firstName,
        lastName: req.body.LastName,
        
    }
    db.create(newContact)
    .then( results => console.log(results))
    .catch( err => console.log(err) );
}
controller.createContactGuest = (req, res) => {
    const newContact = {
        belongsTo: req.params.userID,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }
    db.create(newContact)
    .then( result => {
        console.log(result)
    })
    .catch( err => {
        console.log(err);
    });
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

module.exports = controller;