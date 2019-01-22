const controller = require('./contacts.controller');
const passport = require('passport');
const isAuth = require('../services/isAuth').isAuthenticated;

const isAuthenticated = (req, res, next) =>{
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
    
}

module.exports.initRoutes = (app) => {

    // read ALL contacts belonging to user
        // inorder to see contacts belonging to user, checking auth.
    app.get('/api/v1/contacts/',  isAuth , controller.getContacts);

    //create a contact
    app.post('/api/v1/contacts', isAuth, (req,res) => {
        controller.createContactUser(req, res);
    });

    //create a contact as guest
    app.post('/api/v1/contacts/:userID', isAuth, (req, res) => {
        console.log(req.user);
    });
    
}