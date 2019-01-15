
module.exports.initRoutes = (app) => {
    
    app.get('/login', (req, res, next)=> {
        console.log("log in attempt");
    })
}

//passport.authenticate('local')