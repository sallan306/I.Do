
const passport = require('../services/passport');


module.exports.initRoutes = (app) => {
    app.post('/api/v1/login', passport.authenticate('local'), function(req, res, next) {
        // console.log ('reqbody HERE: ', req.body)
        res.json({
            success: true,
            msg: "User Logged in"})
    });

    app.post('api/v1/auth'), passport.authenticate('local'), function(req, res, next) {
        if (req.user)
            res.status(200).json({
                success:true,
                msg:"user is valid"
            });
        else{
            res.status(200).json({
                success: false,
                err: 400,
                msg: "user is invalid"
            })
        }
    }

    }
}