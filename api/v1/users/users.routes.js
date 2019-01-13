module.exports.initRoutes = (app)=>{
    app.get('/api/v1/users', (req, res, next)=>{
        res.status(200).json({data:"users"});
    });
}