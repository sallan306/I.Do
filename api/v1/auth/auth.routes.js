const passport = require('../services/passport');
module.exports.initRoutes = (app)=>{
    app.get('/login', passport.authenticate('local'),(req, res, next)=>{
        console.log(req.user);

        res.json({"msg": req.body});
        //TODO AUTHORIZATION SEEMS TO BE WORKING. REDIRECTS NEXT
    });
}