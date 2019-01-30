const nodemailer = require('./nodemailer');
module.exports.initRoutes = (app)=>{
    app.post('/api/v1/email', (req, res, next)=>{
        //console.log(req.user);
        //console.log("NODE MAILER ROUTE HIT");
        nodemailer(req,res,next)
        //TODO AUTHORIZATION SEEMS TO BE WORKING. REDIRECTS NEXT
    });
}
