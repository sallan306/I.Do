
module.exports.initRoutes = (app) => {
    
    app.get('/login',  passport.authenticate('local'), (req, res, next)=> {
        console.log("log in attempt");
    })
}