
const passport = require('../services/passport');


module.exports.initRoutes = (app) => {
    app.post('/api/v1/login', passport.authenticate('local'), function(req, res, next) {
        // console.log ('reqbody HERE: ', req.body)
        res.json({
            success: true,
            msg: "User Logged in"})
    });
}