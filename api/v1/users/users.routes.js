const controller = require('./users.controller');

module.exports.initRoutes = (app)=>{
    
    //CREATE USER
    app.post('/api/v1/users', (req, res, next) => {
        //res.status(200).json({data: `create user route. I do nothing right now`});
        controller.addUser(req,res,next);
    });

    //DEV PATH ONLY
    //GET ALL USERS
    app.get('/dev/users', (req, res, next) => {
        controller.findAll(req,res,next);
    });

    //GET A USER
    app.get('/api/v1/users/:id', (req,res,next) => {
        //res.status(200).json({data: `return user:${req.params.id}`});
        //controller.getUser(req,res,next);
        controller.findSpecificUser(req,res,next);
    });
    
    //UPDATE A USER
    app.put('/api/v1/users/:id', (req, res, next) => {
        res.status(200).json({data: `I want to update user: ${req.params.id}`});
    });

    //DELETE A USER
    app.delete('/api/v1/users/:id', (req,res,next) => {
        res.status(200).json({data: `I want to delete user: ${req.params.id}`});
    });

}