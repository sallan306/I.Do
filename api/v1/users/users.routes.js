const controller = require('./users.controller');

module.exports.initRoutes = (app)=>{
    app.get('/api/v1/users', (req, res, next)=>{
        res.status(500).json({data:"Someday I'll get users"});
        controller.getUser(req, res, next);
        console.log (req.user);
    });
    app.post('/api/v1/users', (req, res, next) => {
        console.log(req.body);
        controller.addUser(req, res, next);
    });

    //probably an unused route for the scope of this probject.
    //would require authentication before allowing this path to happen.
    app.delete('/api/v1/users/:id', (req, res, next) => {
        res.status(500).json({data: "Can't delete yet"});
    })
}