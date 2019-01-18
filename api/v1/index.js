module.exports.initRouting = (app)=>{
    require('./users/users.routes').initRoutes(app);
    require('./contacts/contacts.routes').initRoutes(app);
    require('./auth/auth.routes').initRoutes(app);
    require('./sms/twilio.routes').initRoutes(app);

}