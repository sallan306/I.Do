const controller = require('./contacts.controller');
const passport = require('passport');
const isAuth = require('../services/isAuth');

module.exports.initRoutes = (app) => {

    // read ALL contacts belonging to user
        // inorder to see contacts belonging to user, checking auth.
    app.get('/api/v1/contacts/', passport.authenticate('local', {failureRedirect: '/login'}), (req, res) => {
        console.log(req.user);
        res.json(req.user);
    })
    
}