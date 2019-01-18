
const passport = require('../services/passport');

module.exports.initRoutes = (app) => {
    app.post('/login', passport.authenticate('local'), function(req, res, next) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        res.status(200).json({success: true, msg:"Log in successful"});
    });
}