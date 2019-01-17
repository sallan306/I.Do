const twilio = require("./twilio");
module.exports.initRoutes = (app)=>{
    app.post('/api/v1/sms', (req, res, next)=>{
        console.log(req.user);

        twilio(req,res,next)
        //TODO AUTHORIZATION SEEMS TO BE WORKING. REDIRECTS NEXT
    });
}