
const passport = require('../services/passport');


module.exports.initRoutes = (app) => {
    app.post('/api/v1/login', passport.authenticate('local'), function(req, res, next) {
        // console.log ('reqbody HERE: ', req.body)
        res.json({
            success: true,
            msg: "User Logged in"})
    });

    app.post('api/v1/auth', (req, res, next) => {
        if(req.isAuthenticated()){
            res.status(200).json({
                success: true,
                msg: "Authenticated"
            });
        }
        else {
            req.status(200).json({
                success: false,
                err: 400,
                msg:"Not authenticated"
            });
        }
    });

    app.get('/api/v1/logout', function(req, res){
        req.logout();
      });
}