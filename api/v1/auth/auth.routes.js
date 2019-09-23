
const passport = require('../services/passport');


module.exports.initRoutes = (app) => {


    app.post('/api/v1/login', 
        passport.authenticate('local'), 
        function(req, res, next) {
            console.log ('reqbody HERE: ', req.body)
            console.log("resbody", res.body)
            console.log("resbody", next)
            res.json({
                success: true,
                msg: "User Logged in"
            })
            
        }
    );

    app.post('/api/v1/isAuth', (req, res, next) => {
        if(req.isAuthenticated()){
            console.log("user is logged in")
            res.status(200).json({
                success: true,
                msg: "Authenticated"
            });
        } else {
            console.log("user is not logged in")
            res.status(200).json({
                            success: false,
                            err: 400,
                            msg:"Not authenticated"
                        });
        }
    });
    
    app.get('/api/v1/logout', function(req, res){
        req.logout();
        res.status(200).json({
            success: true,
            msg: "Logged Out"
        })
      });
}