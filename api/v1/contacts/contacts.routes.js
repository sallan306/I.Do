const controller = require('./contacts.controller');
const passport = require('passport');
const isAuth = require('../services/isAuth');

module.exports.initRoutes = (app) => {

    // read ALL contacts
        // inorder to see contacts belonging to user, checking auth.
    app.get('/api/v1/contacts/', (req,res,next) => {
        console.log()
        passport.authenticate('local', (err, user, info) => {
            //console.log("req.user",req.user);
            console.log("user: ", user)
            console.log(req);
            //res.status(200).json({success: false});
        })
    })
    
}