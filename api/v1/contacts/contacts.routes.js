const controller = require('./contacts.controller');
const isAuth = require('../services/isAuth');

module.exports.initRoutes = (app) => {

    //create new contact
        //no AUTH necessay. this is to add a card to the rolodex on behalf of the user.
    app.post('/api/v1/contacts/:userID', (req,res,next) => {
        res.status(500).json({data:`eventually I'll put contact info into ${req.params.userID}`});
    });

    //read ALL contacts
        //inorder to see contacts belonging to user, checking auth.
    app.get('/api/v1/contacts/', isAuth, (req,res,next) => {
        res.status(200).json({data: `get contacts belonging to.... ${req.user._id}`});
    });

    //read ONE contact
        //inorder to see contact belonging to user, checking auth.
    app.get('/api/v1/contacts/:contactID' , isAuth, (req, res, next) => {
        res.status(200).json({data: `get specific contact. user it belonds to ${req.user._id}, looking for ${req.params.contactID}`});
    });

    //update contact
        //to update a contact belonging to a user, checking auth
    app.put('/api/v1/contacts/:contactID', isAuth, (req,res,next) =>{
        res.status(200).json({data: `i want to update a contact for user: ${req.user._id} with id ${req.params.contactID}`})
    });

    //delete contact
        //to delete a contact belonging to a user, checking auth
    app.delete('/api/v1/contacts/:contactID', isAuth, (req, res , next) => {
        res.status(200).json({data: `I want to delete contact with the id: ${req.params.contactID}`});
    });
}