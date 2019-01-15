const passport = require('../services/passport');
module.exports.initRoutes = (app)=>{
    app.get('/login', /*MIDDLE WARE,*/(req, res, next)=>{
        console.log(req.body);

        res.json({"msg": req.body});

    });
}