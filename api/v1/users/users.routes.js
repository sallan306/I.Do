module.exports.initRoutes = (app)=>{
    app.get('/api/v1/users', (req, res, next)=>{
        res.status(500).json({data:"Someday I'll get users"});
        console.log (req.user);
    });
    app.post('/api/v1/users', (req, res, next) => {
        res.status(500).json({data: "I cant PUT yet.", error: "no Database set up yet"});
    });
    app.delete('/api/v1/users', (req, res, next) => {
        res.status(500).json({data: "Can't delete yet"});
    })
}