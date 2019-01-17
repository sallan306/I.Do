const twilio = require("./twilio");
module.exports.initRoutes = (app)=>{
    app.get('/api/v1/sms', (req, res, next)=>{
        console.log(req.user);

        twilio.messages.create(req,res,next)
        //TODO AUTHORIZATION SEEMS TO BE WORKING. REDIRECTS NEXT
    });
}