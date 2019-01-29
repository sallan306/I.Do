const controller = require('./users.controller');

module.exports.initRoutes = (app)=>{
    
    //CREATE USER
    //TODO DATA VALIDATION. EMAIL CORRECT FORMAT? NAMES ONLY HAVE CHARACTERS? ETC.
    app.post('/api/v1/users', (req, res, next) => {
        controller.addUser(req,res,next);
    });
    //GET A USER
    app.get('/api/v1/users', (req,res,next) => {
        controller.findSpecificUser(req,res,next);
    });
    //UPDATE A USER
    app.put('/api/v1/users', (req, res, next) => {
        res.status(200).json({data: `I want to update user: ${req.user._id}`});
    });
    //DELETE A USER
    app.delete('/api/v1/users', (req,res,next) => {
        console.log(req.user);
        controller.DeleteThisUser(req, res, next);
    });
}