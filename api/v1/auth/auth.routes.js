
const passport = require('../services/passport');


module.exports.initRoutes = (app) => {

    console.log("auth.routes.js ====================================")
    app.post('/api/v1/login', passport.authenticate('local'), function(req, res, next) {
        console.log ('reqbody : ', req.body)
        res.status(200).json({success: true, msg:"logged in"});
    });
}