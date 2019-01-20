
const passport = require('../services/passport');

module.exports.initRoutes = (app) => {
    app.post('/api/v1/login', passport.authenticate('local'), function(req, res, next) {
        res.status(200).json({success: true, msg:"logged in"});
    });
}