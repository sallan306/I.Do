const controller = {}
const db = require ('./contacts.model');

controller.create = (req, res, next) => {
    console.log(req.body);
    newContact = {
        belongsTo: req.params.userID,
        firstName: req.body.firstName,
        lastName: req.body.LastName,
        
    }
    //db.create();
    console.log(newContact);
}

module.exports = controller;