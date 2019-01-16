const passport = require('../services/passport');
module.exports.initRoutes = (app)=>{
    app.get('/login', passport.authenticate('local'),(req, res, next)=>{
        console.log(req.body);

        res.json({"msg": req.body});

    });
}